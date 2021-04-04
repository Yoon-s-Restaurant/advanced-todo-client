# 툴킷 따라하기

## 툴킷 이전의 리덕스

기존의 리덕스 코드를 작성하기 위해서는 boilerplate 코드가 많이 필요하였다. 아래와 같은 코드를 모두 작성해주어야 했고, 
리듀서 내에서, switch case 문을 통해서 `action type`에 따른 분기를 하여 코드를 작성하여야 하였다. 

- type
- action creator
- init_state
- reducer

```javascript
// 기존의 리덕스 코드
export const Types = {
  SetUser: 'auth/SetUser',
  FetchUser: 'auth/FetchUser',
  FetchLogout: 'auth/FetchLogout',
}

export const actions = {
  setUser: () => ({
    type: Types.SetUser,
  }),
  fetchUser: () => ({
    type: Types.FetchUser,
  }),
  fetchLogout: () => ({
    type: Types.FetchLogout,
  }),
};

const INITIAL_STATE = {
  name: '',
  email: '',
  age: 0,
  status: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'auth/SetUser': {
    }
    case 'auth/FetchUser': {

    }
    case 'auth/FetchLogout': {
    }
    default:
      return state
  }
}

export default reducer;
```

## 리덕스 helper

위와 같은 boilerplate 코드를 줄이기 위해서, `redux-actions` 와 같은 라이브러리를 과거에는 사용하였다. (현재는 유지보수를 하지 않는다고..)

위 redux-actions와 비슷하게 redux 구조를 잡는것을 도와주는 헬퍼 함수를 직접 구현해보자. 


### Create Reducer

아래는 `reducer`를 만들어주는 함수이다. 

```javascript
export function createReducer(initialState, handlerMap) {
  return function(state = initialState, action) {
    const handler = handlerMap[action.type];
    if (handler) {
        return produce(state, draft => {
          handler(draft, action);
        });
    } else {
      return state;
    }
  };
}
```

간단 사용 예제.

```javascript
// reducer.js
export const Types = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  ADD_NUMBER: 'counter/add_number',
}

export const actions = {
  increment : ()=>({ type: Types.INCREMENT }), 
  decrement : ()=>({ type: Types.DECREMENT}), 
  addNumber : (payload)=>({ type: Types.ADD_NUMBER, payload }), 
}

const INITIAL_STATE = {
  count: 0,
};

const reducer = createReduce(INIT_STATE, {
  [Types.INCREMENT]: (state) =>  state = state.counter + 1,
  [Types.DECRENENT]: (state) =>  state = state.counter - 1,
  [Types.ADD]: (state, action) => state.counter = state.counter + action.payload.number,
});

// component 

const Button = () => {
  
  const count = useSelector(state => state.counter.count);
  
  const handleClick = () =>{ 
    dispatch(actions.addNumber())
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>{+}</button>    
    </>
  )
}

```

### setValueAction

값을 간단하게 할당하려는 경우에 이에 대한 action과 type을 정의하고 리듀서를 만들어주는 것은 번거롭다. 

카운트에 대한 값을 단순 할당하려면, 아래와 같은 코드들이 필요하다. 

```javascript
export const Types = {
  // .. 생략
  SET_COUNT: 'counter/SET_COUNT',
};

export const actions = {
  setCount: (payload) => ({ type: Types.SET_COUNT, payload}),
} 

const reducer = createReducer(INITIAL_STATE, {
  // ... 생략
  [SET_COUNT] : (state, action) => state.count = action.payload.count,
});
```

만약 간단한 카운트가 아니라 User에 대한 정보를 가지고 있고 이를 각기 수정할 수 있는 상황이라면 어떨까? 

email을 수정하는 코드, 나이를 수정하는 코드, 직장을 수정하는 코드 등 수 많은 action, action type, reducer 들을 만들어야 할 것이다. 

이러한 단순 값 할당의 경우에는 아래와 같은 helper 함수를 만들어서 사용할 수 있다. 


```javascript

export const createSetValueAction = (type) => {
  return (key, value) => ({type, key, value})
}

export const setValueReducer = (state, action) => {
  state[action.key] = action.value;
}
```

```javascript

// reducer.js
import {createSetValueAction, setValueReducer} from 'utils/redux-helper';
export const Types = {
  // .. 생략
  SET_VALUE: 'counter/SET_VALUE',
};

export const actions = {
  setValue: createSetValueAction(Types.SET_VALUE),
} 

const reducer = createReducer(INITIAL_STATE, {
  // ... 생략
  [SET_VALUE] : setValueReducer,
});
```

```javascript

const Form = () => {
  
  const [value, handleChange] = useInput(0);
  const count = useSelector(state => state.counter.count);
  
  const handleClick = useCallback(() =>{
    dispatch(actions.setValue('counter', value))
  },[dispatch, value]);
  
  return (
    <>
      <p>{count}</p>
    <form>
      <input value={value} onChange={handleCnage} />
      <button onClick={handleClick}>증가시키기</button>    
    </form>
      </>
  )
}

```




```javascript
import produce from 'immer';

// reducer 생성 코드
export function createReducer(initialState, handlerMap) {
  return function(state = initialState, action) {
    const handler = handlerMap[action.type];
    if (handler) {
        return produce(state, draft => {
          handler(draft, action);
        });
    } else {
      return state;w
    }
  };
}

// action creator
export function createSetValueAction(type) {
  return (key, value) => ({ type, key, value });
}

export function setValueReducer(state, action) {
  state[action.key] = action.value;
}

export const FETCH_PAGE = Symbol('FETCH_PAGE');
export const FETCH_KEY = Symbol('FETCH_KEY');
export const NOT_IMMUTABLE = Symbol('NOT_IMMUTABLE');

```

```javascript
// reducer.js

export const Types = {
  SetUser: 'auth/SetUser',
  FetchUser: 'auth/FetchUser',
  FetchLogout: 'auth/FetchLogout',
};

export const actions = {
  setUser: name => ({
    type: Types.SetUser,
    name,
  }),
  fetchSignup: email => ({
    type: Types.FetchSignup,
    email,
  }),
  fetchUser: () => ({
    type: Types.FetchUser,
  }),
  fetchLogout: () => ({ type: Types.FetchLogout }),

}

const INITIAL_STATE = {
  name: '',
  status: undefined,
};

const reducer = createReduce(INIT_STATE, {
  []:,
  []:,

});

```

## 리덕스 툴킷

# 리덕스/툴킷따라하기
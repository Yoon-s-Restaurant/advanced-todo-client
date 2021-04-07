import * as React from 'react';
import { useCallback, useState } from 'react';

const useInput = <T>(
  initialValue: T
): [typeof state, typeof onChangeState, typeof setState] => {
  const [state, setState] = useState(initialValue);

  const onChangeState = useCallback(
    (e) => {
      setState(e.target.value);
    },
    [state]
  );

  return [state, onChangeState, setState];
};

export default useInput;

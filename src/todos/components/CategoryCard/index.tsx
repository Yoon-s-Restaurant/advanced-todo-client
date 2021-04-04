import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Category } from 'todos/components/CategoryList';
interface CategoryCardProps {
  category: Category;
  handleClickCategory: (idx: number) => void;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  handleClickCategory,
}) => {
  return (
    <article
      className={'category-card-wrapper ' + (category.selected && 'selected')}
      onClick={() => handleClickCategory(category.idx)}
    >
      <div className={'category-card-content'}>
        <span className={'icon'}>{category.icon}</span>
        <p>{category.name}</p>
      </div>
    </article>
  );
};

export default CategoryCard;

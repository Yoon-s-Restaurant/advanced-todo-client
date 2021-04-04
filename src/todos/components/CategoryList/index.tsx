import * as React from 'react';
import CategoryCard from 'todos/components/CategoryCard';
import './index.scss';
import { useCallback, useState } from 'react';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
export interface Category {
  idx: number;
  name: string;
  selected: boolean;
  icon: React.ReactNode;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      idx: 1,
      name: 'All',
      selected: true,
      icon: <AllInboxIcon fontSize="small" />,
    },
    {
      idx: 2,
      name: 'Work',
      selected: false,
      icon: <WorkIcon fontSize="small" />,
    },
    {
      idx: 3,
      name: 'Shop',
      selected: false,
      icon: <ShoppingCartIcon fontSize="small" />,
    },
    {
      idx: 4,
      name: 'Study',
      selected: false,
      icon: <LaptopChromebookIcon fontSize="small" />,
    },
    {
      idx: 5,
      name: 'Travel',
      selected: false,
      icon: <FlightTakeoffIcon fontSize="small" />,
    },
    {
      idx: 6,
      name: 'Exercise',
      selected: false,
      icon: <SportsSoccerIcon fontSize="small" />,
    },
    {
      idx: 7,
      name: 'etc',
      selected: false,
      icon: <EmojiSymbolsIcon fontSize="small" />,
    },
  ]);

  const handleClickCategory = useCallback(
    (idx: number) => {
      setCategories(
        categories.map((category) =>
          category.idx === idx
            ? {
                ...category,
                selected: true,
              }
            : {
                ...category,
                selected: false,
              }
        )
      );
    },
    [categories]
  );
  return (
    <div className={'category-list'}>
      {categories.map((category) => (
        <CategoryCard
          key={category.idx}
          handleClickCategory={handleClickCategory}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;

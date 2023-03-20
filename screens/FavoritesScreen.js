import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const displayedMeals = MEALS.filter((mealItem) => favoriteMealsCtx.ids.includes(mealItem.id));
  
  return <MealsList items={displayedMeals} />;
};

export default FavoritesScreen;
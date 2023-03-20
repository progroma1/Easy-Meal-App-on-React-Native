// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from "react-native";
import MealsList from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((mealItem) => favoriteMealIds.includes(mealItem.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorites meals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
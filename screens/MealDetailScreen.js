
import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = ({ route }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
            />
            <Text>Ingredients</Text>
            <Text>Steps</Text>
        </View>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({

});
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) > 0);

    return (
        <View style={styles.container}>
            <Text>Meals overview Screen</Text>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
});
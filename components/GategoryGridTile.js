import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CategoryGridTile = ({ title, color, onPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer,  { backgroundColor: color }] }>
                    <Text>
                        {title}
                    </Text>
                </View>  
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'transparent',
        overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
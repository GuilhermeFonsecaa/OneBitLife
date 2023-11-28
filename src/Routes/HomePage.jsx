import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppExplanation from "../Pages/AppExplanation";
import Home from "../Pages/Home";
import HabitPage from "../Pages/HabitPage";


const stack = createNativeStackNavigator();

export default function HomePage() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Home" component={HabitPage} />
                <Stack.Screen name="AppExplanation" component={AppExplanation} />

            </Stack.Navigator>

        </NavigationContainer>
    )
} 
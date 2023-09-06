import { createStackNavigator } from "@react-navigation/stack";
import Home from "../templates/Home";
import ListAnimal from "../templates/ListAnimal";
import RegisterAnimal from "../templates/RegisterAnimal";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Animals"
        component={ListAnimal}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="RegisterAnimals"
        component={RegisterAnimal}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
}

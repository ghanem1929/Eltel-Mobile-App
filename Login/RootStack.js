import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConnetionComponent from "./ConnetionComponent";
import Inscription from "../Login/InscriptionComponent";
import FactureComponent from "../FactureComponet";
import StatisticsComponent from "../StatisticsComponent";
import home from "../home";
import aboutUs from "../AboutUs";
import Products from "../Produsts";
import SplashScreen from "./Splash";
import Commande from "../CommandeComponent";
import CommandeForm from "../CommandeForm";
import Connection from "./connection";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/*<Stack.Screen name="splash" component={SplashScreen} />*/}
        <Stack.Screen name="connection" component={Connection} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="about" component={aboutUs} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="CommandeForm" component={CommandeForm} />
        <Stack.Screen name="Facture" component={FactureComponent} />
        <Stack.Screen name="Commande" component={Commande} />
        <Stack.Screen name="Statistics" component={StatisticsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

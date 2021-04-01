import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import ConnetionComponent from"./ConnetionComponent";
import InscriptionComponent from"../Login/InscriptionComponent";
import FactureComponent from "../FactureComponet"
import CommandeComponent from "../CommandeComponent"
import StatisticsComponent from "../StatisticsComponent"
import home from '../home';
import TestComponent from './TestComponent';

const StackNavigator = createStackNavigator({
    
   /* TestScreen: {
        screen: TestComponent,
        navigationOptions: {
            headerShown: false
        }
    },*/
    ConnectionScreen: {
        screen: ConnetionComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    InscriptionScreen: {
        screen: InscriptionComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    homeScreen: {
        screen: home ,
        navigationOptions: {
            headerShown: false
        }
    },
    FactureScreen: {
        screen: FactureComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    CommandeScreen: {
        screen: CommandeComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    StatisticsScreen: {
        screen: StatisticsComponent,
        navigationOptions: {
            headerShown: false
        }
    },
   
    
    
});
export default createAppContainer(StackNavigator);
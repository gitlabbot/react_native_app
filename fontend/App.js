import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ApiScreen from './src/screens/ApiScreen';
import ApiCustScreen from './src/screens/ApiCustScreen';
import QuoteScreen from './src/screens/QuoteScreen';
import QuoteDetailScreen from './src/screens/QuoteDetailScreen';
import QuoteDetailDescScreen from './src/screens/QuoteDetailDescScreen';
import * as Font from "expo-font";
// import { Icon } from 'react-native-elements';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Roboto_medium": require("./assets/fonts/Roboto-Medium.ttf")
  });
};

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Api: ApiScreen,
    Cust: ApiCustScreen,
    Quote: QuoteScreen,
    QuoteDetail: QuoteDetailScreen,
    QuoteDetailDesc: QuoteDetailDescScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'TKK Corporation'
    }
  },
  startAsync={fetchFonts}
);

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         // tabBarIcon: ({ tintColor }) => (
//         //   <Ionicons name="home" size={25} color={tintColor} />
//         // )
//       }
//     },
//     Modules: {
//       screen: ComponentsScreen
//     },
//     List: {
//       screen: ListScreen
//     }
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: '#eb6e3d'
//     }
//   }
// );

export default createAppContainer(navigator);

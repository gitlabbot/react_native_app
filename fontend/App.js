import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/scene/HomeScreen';
import ComponentsScreen from './src/scene/ComponentsScreen';
import ListScreen from './src/scene/ListScreen';
import ImageScreen from './src/scene/ImageScreen';
import CounterScreen from './src/scene/CounterScreen';
import ColorScreen from './src/scene/ColorScreen';
import ApiScreen from './src/scene/ApiScreen';
import ApiCustScreen from './src/scene/ApiCustScreen';
import QuoteScreen from './src/scene/QuoteScreen';
import QuoteDetailScreen from './src/scene/QuoteDetailScreen';
import QuoteDetailDescScreen from './src/scene/QuoteDetailDescScreen';
import LoginScreen from './src/scene/LoginScreen';

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
    QuoteDetailDesc: QuoteDetailDescScreen,
    LoginScreen: LoginScreen
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      title: 'Approvals Modules'
    }
  }
);

export default createAppContainer(navigator);

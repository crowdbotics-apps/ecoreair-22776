import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard18175935Navigator from '../features/Dashboard18175935/navigator';
import Achievements2175933Navigator from '../features/Achievements2175933/navigator';
import Achievements3175931Navigator from '../features/Achievements3175931/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard18175935: { screen: Dashboard18175935Navigator },
Achievements2175933: { screen: Achievements2175933Navigator },
Achievements3175931: { screen: Achievements3175931Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

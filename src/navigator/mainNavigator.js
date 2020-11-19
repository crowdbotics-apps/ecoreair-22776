import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfAchievements2175941Navigator from '../features/CopyOfAchievements2175941/navigator';
import CopyOfAchievements2175940Navigator from '../features/CopyOfAchievements2175940/navigator';
import BlankScreen5175939Navigator from '../features/BlankScreen5175939/navigator';
import BlankScreen4175938Navigator from '../features/BlankScreen4175938/navigator';
import Dashboard17175936Navigator from '../features/Dashboard17175936/navigator';
import Dashboard18175935Navigator from '../features/Dashboard18175935/navigator';
import Achievements2175933Navigator from '../features/Achievements2175933/navigator';
import Achievements3175931Navigator from '../features/Achievements3175931/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfAchievements2175941: { screen: CopyOfAchievements2175941Navigator },
CopyOfAchievements2175940: { screen: CopyOfAchievements2175940Navigator },
BlankScreen5175939: { screen: BlankScreen5175939Navigator },
BlankScreen4175938: { screen: BlankScreen4175938Navigator },
Dashboard17175936: { screen: Dashboard17175936Navigator },
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

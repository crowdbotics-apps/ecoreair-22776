import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfAchievements13176049Navigator from '../features/CopyOfAchievements13176049/navigator';
import CopyOfAchievements13176048Navigator from '../features/CopyOfAchievements13176048/navigator';
import Achievements18176047Navigator from '../features/Achievements18176047/navigator';
import CopyOfAchievements2176046Navigator from '../features/CopyOfAchievements2176046/navigator';
import CopyOfAchievements2176045Navigator from '../features/CopyOfAchievements2176045/navigator';
import CopyOfAchievements2176044Navigator from '../features/CopyOfAchievements2176044/navigator';
import CopyOfAchievements2176043Navigator from '../features/CopyOfAchievements2176043/navigator';
import CopyOfBlankScreen4176042Navigator from '../features/CopyOfBlankScreen4176042/navigator';
import CopyOfBlankScreen4176041Navigator from '../features/CopyOfBlankScreen4176041/navigator';
import Achievements13176040Navigator from '../features/Achievements13176040/navigator';
import CopyOfAchievements2175941Navigator from '../features/CopyOfAchievements2175941/navigator';
import CopyOfAchievements2175940Navigator from '../features/CopyOfAchievements2175940/navigator';
import BlankScreen5175939Navigator from '../features/BlankScreen5175939/navigator';
import BlankScreen4175938Navigator from '../features/BlankScreen4175938/navigator';
import Dashboard17175936Navigator from '../features/Dashboard17175936/navigator';
import Achievements2175933Navigator from '../features/Achievements2175933/navigator';
import Achievements3175931Navigator from '../features/Achievements3175931/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfAchievements13176049: { screen: CopyOfAchievements13176049Navigator },
CopyOfAchievements13176048: { screen: CopyOfAchievements13176048Navigator },
Achievements18176047: { screen: Achievements18176047Navigator },
CopyOfAchievements2176046: { screen: CopyOfAchievements2176046Navigator },
CopyOfAchievements2176045: { screen: CopyOfAchievements2176045Navigator },
CopyOfAchievements2176044: { screen: CopyOfAchievements2176044Navigator },
CopyOfAchievements2176043: { screen: CopyOfAchievements2176043Navigator },
CopyOfBlankScreen4176042: { screen: CopyOfBlankScreen4176042Navigator },
CopyOfBlankScreen4176041: { screen: CopyOfBlankScreen4176041Navigator },
Achievements13176040: { screen: Achievements13176040Navigator },
CopyOfAchievements2175941: { screen: CopyOfAchievements2175941Navigator },
CopyOfAchievements2175940: { screen: CopyOfAchievements2175940Navigator },
BlankScreen5175939: { screen: BlankScreen5175939Navigator },
BlankScreen4175938: { screen: BlankScreen4175938Navigator },
Dashboard17175936: { screen: Dashboard17175936Navigator },
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

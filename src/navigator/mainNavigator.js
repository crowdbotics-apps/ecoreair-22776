import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Achievements20176059Navigator from '../features/Achievements20176059/navigator';
import Achievements21176058Navigator from '../features/Achievements21176058/navigator';
import Achievements22176057Navigator from '../features/Achievements22176057/navigator';
import Achievements23176056Navigator from '../features/Achievements23176056/navigator';
import Achievements24176055Navigator from '../features/Achievements24176055/navigator';
import Achievements25176054Navigator from '../features/Achievements25176054/navigator';
import Achievements26176053Navigator from '../features/Achievements26176053/navigator';
import CopyOfBlankScreen5176052Navigator from '../features/CopyOfBlankScreen5176052/navigator';
import CopyOfAchievements13176051Navigator from '../features/CopyOfAchievements13176051/navigator';
import CopyOfAchievements13176050Navigator from '../features/CopyOfAchievements13176050/navigator';
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
Achievements20176059: { screen: Achievements20176059Navigator },
Achievements21176058: { screen: Achievements21176058Navigator },
Achievements22176057: { screen: Achievements22176057Navigator },
Achievements23176056: { screen: Achievements23176056Navigator },
Achievements24176055: { screen: Achievements24176055Navigator },
Achievements25176054: { screen: Achievements25176054Navigator },
Achievements26176053: { screen: Achievements26176053Navigator },
CopyOfBlankScreen5176052: { screen: CopyOfBlankScreen5176052Navigator },
CopyOfAchievements13176051: { screen: CopyOfAchievements13176051Navigator },
CopyOfAchievements13176050: { screen: CopyOfAchievements13176050Navigator },
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

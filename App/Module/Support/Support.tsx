import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Top1 from '../TopNavigator/Top1';
import Top2 from '../TopNavigator/Top2';

const Support = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top1" component={Top1} />
      <Tab.Screen name="Top2" component={Top2} />
    </Tab.Navigator>
  );
};

export default Support;

import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeStartValue} from './Store/Reducer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../TabNavigator/Tab1';
import Tab2 from '../TabNavigator/Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

const Feed = () => {
  const start = useSelector((state: any) => state.feed);
  const dispatch = useDispatch();

  console.log('start ** ' + JSON.stringify(start));

  const callHandle = () => {
    dispatch(changeStartValue(10));
  };

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: () => <Icon name={'fish'} color={'black'} size={21} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: () => (
            <Icon name={'git-network-sharp'} color={'black'} size={21} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default Feed;

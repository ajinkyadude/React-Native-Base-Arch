import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeStartValue} from './Store/Reducer';

const Feed = () => {
  const start = useSelector((state: any) => state.feed);
  const dispatch = useDispatch();

  console.log('start ** ' + JSON.stringify(start));

  const callHandle = () => {
    dispatch(changeStartValue(10));
  };

  return (
    <View>
      <TouchableOpacity onPress={callHandle}>
        <Text>Feed Text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;

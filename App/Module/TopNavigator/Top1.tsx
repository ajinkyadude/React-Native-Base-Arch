import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeStartValue} from '../Feed/Store/Reducer';

const Top1 = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(changeStartValue(10))}>
      <Text>Hello Top 1</Text>
    </TouchableOpacity>
  );
};

export default Top1;

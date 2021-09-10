import React, { useEffect, useState } from 'react'

import 'react-native-gesture-handler';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base'
import { MyStackNavigator } from './src/Routes/MyStackNavigator';

import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';





export default function App({ navigation }) {


  let [initial, setinitial] = useState('home')



  const MyTransition = {
    gestureDirection: 'horizondal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  }


  const TransitionScreenOptions = {

    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };

  const TransitionScreenOptions2 = {
    ...TransitionPresets.ModalSlideFromBottomIOS// This is where the transition happens
  };

  return (

    <React.Fragment>
      <Provider store={store}>
        <NativeBaseProvider>

          <MyStackNavigator>

          </MyStackNavigator>

        </NativeBaseProvider>
      </Provider>
    </React.Fragment>
  )
}

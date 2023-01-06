import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import Inicial from './screens/Inicial';
import Localizacao from './screens/Localizacao';

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: tw`bg-neutral-600 p-2`,
      }}
    >
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Localizacao" component={Localizacao} />
    </Stack.Navigator>
  );
};

export default Rotas;

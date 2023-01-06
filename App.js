import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

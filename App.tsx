import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/home';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <AuthProvider>
        <StatusBar 
          style="light"
          translucent
          backgroundColor="transparent"
        />
        <Home />
      </AuthProvider>
    );
  }

}

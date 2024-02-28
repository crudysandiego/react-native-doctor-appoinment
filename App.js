import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf')
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={"pk_test_dG9nZXRoZXItZ2xvd3dvcm0tMzAuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden></StatusBar>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <Login></Login>
          </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

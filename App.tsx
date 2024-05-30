import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GetNameScreen from './screens/registration/screens/GetNameScreen';
import GetStartedScreen from './screens/registration/screens/GetStartedScreen';
import GetGenderScreen from './screens/registration/screens/GetGenderScreen';
import GetChildrenScreen from './screens/registration/screens/GetChildrenScreen';
import GetCredentialsScreen from './screens/registration/screens/GetCredentialsScreen';
import { UserRegistrationProvider } from './screens/registration/context/UserRegistrationContext';
import { SafeAreaView } from 'react-native';
import ConfirmationScreen from './screens/registration/screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
      <UserRegistrationProvider>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName='get-started'>
          <Stack.Screen name="get-started" component={GetStartedScreen} />
          <Stack.Screen name="get-name" component={GetNameScreen} />
          <Stack.Screen name="get-gender" component={GetGenderScreen} />
          <Stack.Screen name="get-children" component={GetChildrenScreen} />
          <Stack.Screen name="get-credentials" component={GetCredentialsScreen} />
          <Stack.Screen name="confirmation" component={ConfirmationScreen} />
        </Stack.Navigator>
      </UserRegistrationProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}

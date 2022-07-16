import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './src/screens/Home'
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Courses from './src/screens/Courses';
import CourseDetails from './src/screens/CourseDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'
import  store  from './src/store'
import { 
  useFonts,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
 
} from '@expo-google-fonts/nunito-sans'
import Navigator from './src/components/Navigator';
import Menu from './src/components/Menu';

export default function App() {
  const Stack=createNativeStackNavigator()
  let [fontsLoaded]=useFonts({
    NunitoSans_700Bold,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
  })
  if(!fontsLoaded){
    <AppLoading />
  }
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' options={{headerShown:false}} >
          {(props)=><Home {...props} channelName={"Coding Monk"} />}
        </Stack.Screen>
        <Stack.Screen 
        name='Course'
        component={Courses} 
        options={{
          headerTitleStyle:{
             fontSize:25,
             fontFamily:"NunitoSans_600SemiBold"
        },
        headerTitle:"Courses",
        headerTitleAlign:"center"
        }} />
        <Stack.Screen name='About Us' component={About} 
        options={{
          headerTitleStyle:{
             fontSize:25,
             fontFamily:"NunitoSans_600SemiBold"
        },
        headerTitle:"About Us",
        headerTitleAlign:"center"
        }}
        />
        <Stack.Screen name='Contact Us' component={Contact}
        options={{
          headerTitleStyle:{
             fontSize:25,
             fontFamily:"NunitoSans_600SemiBold"
        },
        headerTitle:"Contact Us",
        headerTitleAlign:"center"
        }}
         />
        <Stack.Screen name='Students' component={UserData}
        options={{
          headerTitleStyle:{
             fontSize:25,
             fontFamily:"NunitoSans_600SemiBold"
        },
        headerTitle:"Students",
        headerTitleAlign:"center"
        }}
         />
         <Stack.Screen name='CourseDetails' component={CourseDetails}
        options={{
          headerTitleStyle:{
             fontSize:25,
             fontFamily:"NunitoSans_600SemiBold"
        },
        headerTitle:"Course details",
        headerTitleAlign:"center"
        }}
         />
      </Stack.Navigator>
      {/* <Navigator /> */}
      {/* <Menu/> */}
    </NavigationContainer>
     </Provider>
  );
}

const styles = StyleSheet.create({
});

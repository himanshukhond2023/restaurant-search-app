import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ResultsList from './src/components/ResultsList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  style={{backgroundColor: "white"}}>
        <Stack.Screen name="SearchScreen" component={SearchScreen} title="Business Search"/>
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen}/>
        {/* <Stack.Screen name="ResultsList" component={ResultsList}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
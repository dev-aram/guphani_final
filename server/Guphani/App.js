/* 

import React, { useEffect } from 'react';
import { View, BackHandler, Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Guphani = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert('잠깐만요!', '뒤로 가기를 하실 건가요?', [
        {
          text: '취소',
          onPress: () => null,
          style: 'cancel',
        },
        { text: '네', onPress: () => handleGoBack() },
      ]);
      return true;
    };

    const handleGoBack = () => {
      // Use navigation.goBack() to go back to the previous screen
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        // If there's no previous screen, handle it accordingly
        console.log('No previous screen');
        
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.guphani.com/html/index.html' }}
        // style={{ marginTop: 20 }}
        // Add the injectedJavaScript prop to handle communication with the WebView
        injectedJavaScriptBeforeContentLoaded={`
          window.closeModal = function() {
            // Define the closeModal function to handle closing the modal view
            // Modify this based on the actual modal navigation logic
            console.log('Modal view closed');
          };
        `}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Guphani" component={Guphani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
*/


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContent from './AppContent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContent" component={AppContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




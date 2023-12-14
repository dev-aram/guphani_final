import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';

const App = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);
  const webViewRef = useRef(null);

  useEffect(() => {
    const backAction = async () => {
      if (isFirstScreen) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      } else if (webViewRef.current) {
        // Inject JavaScript code to handle the go back action within the WebView
        await webViewRef.current.injectJavaScript(`
          if (typeof closeModal === 'function') {
            closeModal(); 
          }
        `);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isFirstScreen]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

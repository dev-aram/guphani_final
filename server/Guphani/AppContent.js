// AppContent.js
import React, { useEffect, useRef } from 'react';
import { View, Alert, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const AppContent = () => {
  const navigation = useNavigation();
  const webviewRef = useRef(null);

  useEffect(() => {
    const backAction = () => {
      if (webviewRef.current) {
        // Check if WebView can go back
        webviewRef.current.goBack();
        return true; // Return true to prevent default behavior
      } else {
        Alert.alert('잠깐만요!', '뒤로 가기를 하실 건가요?', [
          {
            text: '취소',
            onPress: () => null,
            style: 'cancel',
          },
          { text: '네', onPress: () => navigation.goBack() },
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.guphani.com/html/index.html' }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 0.5,
    marginRight: 0.5,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    overflow: 'scroll', 
  },
});

export default AppContent;

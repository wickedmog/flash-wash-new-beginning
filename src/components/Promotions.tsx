import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

export const Promotions = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/promo.png')}
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 600,
    opacity: 0.5,
  },
});

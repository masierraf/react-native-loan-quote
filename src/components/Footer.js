import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Color from './../utils/colors';

const {height} = Dimensions.get('screen');

const heightFooter = height / 8;

export default function Footer({onSubmit}) {
  const calculate = () => {
    onSubmit();
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={calculate} style={styles.buttonFooter}>
        <Text style={styles.buttonText}>Calculate!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    backgroundColor: Color.PRIMARY_COLOR,
    height: heightFooter,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonFooter: {
    borderRadius: 20,
    height: heightFooter / 2,
    width: '80%',
    backgroundColor: Color.BACKGROUND_FORM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

import React from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Color from './../utils/colors';

export default function Form({
  setQuantity,
  setPercentage,
  setMonth,
  quantity,
  percentage,
  month,
}) {
  const onChangeQuantity = text => {
    setQuantity(text);
  };

  const onChangePercentage = text => {
    setPercentage(text);
  };

  const onChangeMonth = month => {
    setMonth(month);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            keyboardType="numeric"
            placeholder="Cantidad a pedir"
            style={styles.input}
            value={quantity}
            onChangeText={text => onChangeQuantity(text)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="% de interes"
            style={styles.input}
            value={percentage}
            onChangeText={text => onChangePercentage(text)}
          />
        </View>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={value => onChangeMonth(value)}
          value={month}
          placeholder={{
            label: 'Seleccionar Meses',
            value: null,
          }}
          items={[
            {label: '1 Month', value: 1},
            {label: '3 Months', value: 3},
            {label: '6 Months', value: 6},
            {label: '12 Months', value: 12},
            {label: '24 Months', value: 24},
          ]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BACKGROUND_FORM,
    width: '85%',
    borderRadius: 30,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    backgroundColor: Color.BACKGROUND_COLOR,
    color: Color.TEXT_COLOR_DARK,
    height: 50,
    fontSize: 16,
    width: '48%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: Color.BACKGROUND_COLOR,
    color: Color.TEXT_COLOR_DARK,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  inputAndroid: {
    backgroundColor: Color.BACKGROUND_COLOR,
    color: Color.TEXT_COLOR_DARK,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

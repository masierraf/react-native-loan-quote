import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StatusBar,
  Platform,
  YellowBox,
  Button,
} from 'react-native';

import Color from './src/utils/colors';

import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

const {height} = Dimensions.get('screen');

console.disableYellowBox = true;
export default function App() {
  const [quantity, setQuantity] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [month, setMonth] = useState(null);
  const [total, setTotal] = useState(null);
  const [errors, setErrors] = useState(null);

  const onSubmit = () => {
    if (!quantity) {
      setErrors('The amount to lend is not found');
      setTotal(null);
    } else if (!percentage) {
      setErrors('Interest not found');
      setTotal(null);
    } else if (!month) {
      setErrors('Monthly payments not found');
      setTotal(null);
    } else {
      const i = percentage / 100;
      const fee = quantity / ((1 - Math.pow(i + 1, -month)) / i);
      setErrors(null);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * month).toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrors(null);
    setTotal(null);
  };

  useEffect(() => {
    if (quantity && percentage && month) onSubmit();
    else reset();
  }, [quantity, percentage, month]);

  return (
    <>
      {Platform.OS == 'ios' && <StatusBar barStyle="light-content" />}
      <SafeAreaView style={styles.header}>
        <View style={styles.backgroundView} />
        <View style={styles.titleContainer}>
          <Text style={styles.textHeader}>Header</Text>
        </View>
        <Form
          setQuantity={setQuantity}
          setPercentage={setPercentage}
          setMonth={setMonth}
          quantity={quantity}
          percentage={percentage}
          month={month}
          onSubmit={onSubmit}
        />
      </SafeAreaView>

      <Result
        quantity={quantity}
        month={month}
        percentage={percentage}
        total={total}
        errors={errors}
      />

      <Footer onSubmit={onSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 270,
  },
  backgroundView: {
    borderBottomLeftRadius: 30,
    backgroundColor: Color.PRIMARY_COLOR,
    borderBottomRightRadius: 30,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  titleContainer: {
    marginVertical: 15,
  },
  textHeader: {
    color: Color.TEXT_COLOR_LIGHT,
    fontWeight: 'bold',
    fontSize: 25,
  },
  errorContainer: {
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: Color.ERROR_TEXT,
  },
  footer: {
    position: 'absolute',
    backgroundColor: Color.PRIMARY_COLOR,
    height: 120,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonFooter: {
    borderRadius: 20,
    height: 100,
    width: '80%',
    backgroundColor: '#000',
  },
});

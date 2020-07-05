import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Color from './../utils/colors';

const {height} = Dimensions.get('screen');

const heightContainer = height / 2;

export default function Result({total, month, quantity, percentage, errors}) {
  return (
    <View style={styles.restulContainer}>
      {errors && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors}</Text>
        </View>
      )}
      {total && (
        <>
          <View style={styles.resultHeader}>
            <Text style={styles.resultHeaderTitle}>Resultado</Text>
          </View>
          <View style={styles.resultContent}>
            <RowResult title="Requested Capital: " data={`$ ${quantity}`} />
            <RowResult
              title="Monthly Payment: "
              data={`$ ${total.monthlyFee}`}
            />
            <RowResult title="Duration: " data={`${month} month(s)`} />
            <RowResult
              title="Total to Pay: "
              data={`$ ${total.totalPayable}`}
            />
          </View>
        </>
      )}
    </View>
  );
}

const RowResult = function({title, data}) {
  return (
    <View style={styles.rowResult}>
      <Text style={styles.rowText}>{title}</Text>
      <Text style={styles.rowText}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restulContainer: {
    width: '100%',
    height: heightContainer,
    marginTop: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  resultHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  resultHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultContent: {
    paddingHorizontal: 30,
  },
  rowResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  rowText: {
    fontSize: 20,
    fontWeight: '700',
  },
  errorContainer: {
    alignItems: 'center',
  },
  errorText: {
    fontSize: 22,
    color: Color.ERROR_TEXT,
  },
});

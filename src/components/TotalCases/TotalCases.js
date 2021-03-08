import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TotalCases = (props) =>{
  const {totalConfirmed, totalDeaths, totalRecovered, countryName } = props;

  return (
    <View style={styles.box}>
      <Text style={styles.sectionTitle}>{countryName}</Text>
      <Text style={styles.sectionTitle}>Coronavirus Cases:</Text>
      <Text style={styles.sectionDescription}> {totalConfirmed}</Text>
      <Text style={styles.sectionTitle}>Deaths:</Text>
      <Text style={[styles.sectionDescription, styles.totalDeath]}> {totalDeaths}</Text>
      <Text style={styles.sectionTitle}>Recovered:</Text>
      <Text style={[styles.sectionDescription, styles.totalRecovered]}> {totalRecovered}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#555',
    textAlign: 'center'
  },
  sectionDescription: {
    fontSize: 36,
    fontWeight: '700',
    color: '#aaa',
    textAlign: 'center'
  },
  totalDeath : {
    color: '#696969'
  },
  totalRecovered : {
    color: '#8ACA2B'
  }
});

export default TotalCases;
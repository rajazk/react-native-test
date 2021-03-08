import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const NewRecord = (props) =>{
  const {newConfirmed, newDeaths, newRecovered } = props;

  return (
    <View style={styles.box}>
      <View style={styles.newList}>
        <Image
          style={styles.tinyImage}
          source={require('../../assets/img/diagnosed-cases.png')}
        />
        <View style={styles.desList}>
          <Text>New Confirmed cases</Text>
          <Text>{newConfirmed}</Text>
        </View>
      </View>
      <View style={styles.newList}>
        <Image
          style={styles.tinyImage}
          source={require('../../assets/img/deaths.png')}
        />
        <View style={styles.desList}>
          <Text>New Deaths</Text>
          <Text>{newDeaths}</Text>
        </View>
      </View>
      <View style={styles.newList}>
        <Image
          style={styles.tinyImage}
          source={require('../../assets/img/recovered.png')}
        />
        <View style={[styles.desList, styles.desListLast]}>
          <Text>New Recovered</Text>
          <Text>{newRecovered}</Text>
        </View>
      </View>
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
  newList : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  desList : {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighter,
    alignSelf: 'stretch',
    flex: 6
  },
  tinyImage : {
    width: 45,
    height: 40,
    flex: 1,
    marginRight: 10
  },
  desListLast : {
    borderBottomWidth: 0
  }
});

export default NewRecord;
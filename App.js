import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { fetchCovidSummary } from "./src/store/actions/action";
import { country_list } from "./src/utils/constants";
import {Picker} from '@react-native-picker/picker';
import TotalCases from "./src/components/TotalCases/TotalCases";
import NewRecord from "./src/components/NewRecord/NewRecord";
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

const App  = (props) => {

  const [countryList, setCountryList ] = useState(country_list);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountryData, setSelectedCountryData] = useState([]);

  useEffect(() => {
    props.fetchCovidSummary();
  }, [])

  const handleChange = (countryName) =>{
    setSelectedCountry(countryName);

    if(countryName !== "") {
      const country = props.covidSummary.Countries.filter(country => country.Country === countryName );
      setSelectedCountryData(country);
    }
    else {
      setSelectedCountryData({});
    }
  }
  if(props.dataFetching && props.covidSummary.Global == undefined) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>Loading...</Text>
      </View>
    )
  }
  
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.box}>
        <Picker
          selectedValue={selectedCountry}
          placeholder = "Enter Your Name" 
          onValueChange={itemValue => handleChange(itemValue)}
        >
          <Picker.Item label="Please select your country..." value="" />
          {
            countryList.map((country, index) =>{
              return (
                <Picker.Item key={index} label={country} value={country} />
              )
            })
          }
        </Picker>
      </View>
      {
        Object.keys(props.covidSummary).length > 0 ?
        <>
          <TotalCases
            countryName={selectedCountry === "" ? 'Global' : selectedCountry}
            totalConfirmed={selectedCountry === "" ? props.covidSummary.Global.TotalConfirmed : selectedCountryData[0].TotalConfirmed } 
            totalDeaths={selectedCountry === "" ? props.covidSummary.Global.TotalDeaths : selectedCountryData[0].TotalDeaths } 
            totalRecovered={selectedCountry === "" ? props.covidSummary.Global.TotalRecovered : selectedCountryData[0].TotalRecovered }
          />
          <NewRecord 
            newConfirmed={selectedCountry === "" ?props.covidSummary.Global.NewConfirmed : selectedCountryData[0].NewConfirmed } 
            newDeaths={selectedCountry === "" ? props.covidSummary.Global.NewDeaths : selectedCountryData[0].NewDeaths } 
            newRecovered={selectedCountry === "" ? props.covidSummary.Global.NewRecovered : selectedCountryData[0].NewRecovered }
          />
        </> :
        <View>
          <Text>Something is wrong...</Text>
        </View>
      }
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    padding: 15
  },
  box : {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});


const mapStateToProps = (state) => {
  return {
    covidSummary: state.entities.covidSummaryReducer.covidSummary,
    dataFetching: state.ui.covidSummaryReducerUi.dataFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCovidSummary: () => dispatch(fetchCovidSummary())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

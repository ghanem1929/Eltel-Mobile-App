import { Button } from "native-base";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';
import React from 'react';
import Tab from '../eltel/teesst'


import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class FactureComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    Reference: "",
    Date_debut: "",
    Date_fin: "",
    Reversement: "",
    Reste: "",
    Taux: "",
    Data: [],
    page:1,
    perPage: 3,
  };
  

  connectionCheck = () => {
    var Reference = this.state.Reference;
    var Date_debut = this.state.Date_debut;
    var Date_fin = this.state.Date_fin;
    var Reversement = this.state.Reversement;
    var Reste = this.state.Reste;
    var Taux = this.state.Taux;

    var URL = "http://192.168.1.64:88/api/fact.php";
    var header = {
      Accept: 
      "application/json",
      "Content-type": "application.json",
    };
    var data = {
      Reference: Reference,
      Date_debut: Date_debut,
      Date_fin: Date_fin,
      Reversement: Reversement,
      Reste: Reste,
      Taux: Taux,
    };
    fetch(URL, {
      method: "POST",
      header: header,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  componentDidMount() {
    this.connectionCheck();
  }
  render() {
    return (
      <View style={styles.Container}>
        
        <View style={styles.Header}>
        
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginHorizontal: 10,
              width: "90%",
              height: 30,
              borderRadius: 10,
              
            }}
          >
            <TextInput style={{ width: "90%" , backgroundColor:"white" , color: "#250233"}}></TextInput>
            <FontAwesome
              name="search"
              size={20}
              color="#F85F73"
            ></FontAwesome>
          </View>
        </View>
        <Tab data={this.state.data} />
        <View style={styles.Footer}>
        
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  Header: {
    height: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F85F73"
  },
  tableHeader: {
    
    justifyContent:"center" , 
    alignContent:"center" , 
    textAlign:"center"
  },
  
  tableHeaderCell: {
    justifyContent:"center",
    
  },
  tableRow: {
    flex: 3,
    flexDirection: "row",
  },
  tableCell: {
    justifyContent:"center",
    margin: 5,
    color:'rgba(0, 0, 0, 0.87)'
  },

  ListFac: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FBE8D3",
    paddingVertical: 10,
    fontSize: 10,
  },
  Rows: {
    textAlign: "left",
  },
  textitemtitle: {
    fontWeight: "600",
    color: "#FBE8D3",
    fontSize: 10,
  },
});
const styleScale = ScaledSheet.create({
  tableContainer:{
    width: '340@s', // = scale(100)
    height: '200@vs', // = verticalScale(200)
    padding: '2@msr',
    margin:'5@s', 
  },
  tableHeader:{
    width: '102@s', // = scale(100)
    height: '101@vs', // = verticalScale(200)
    padding: '2@msr', // = Math.round(moderateScale(2))
  },
  tableHeaderCell:{
    flex:3, 
    width: '50@s',
    
  },
  tableRow:{
    width:'350@s',
    height: '60@vs',
  }
})

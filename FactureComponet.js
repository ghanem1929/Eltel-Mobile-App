import { Button } from "native-base";
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';
import React from "react";
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
    page: 0,
    perPage: 2,
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
        this.setState({ Data: response });
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  RefSort(){
     
  }
  componentDidMount() {
    this.connectionCheck();
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
          <View
            style={{
              backgroundColor: "#928A97",
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginHorizontal: 10,
              width: "90%",
              height: 30,
              borderRadius: 10,
              backgroundColor: "rgba(52, 52, 52, 0.05)",
            }}
          >
            <TextInput style={{ width: "90%" }}></TextInput>
            <FontAwesome
              name="search"
              size={20}
              color="rgba(52, 52, 52, 0.5)"
            ></FontAwesome>
          </View>
        </View>
        <View style={styles.Footer}>

            
          <DataTable style={styles.tableContainer}>
            <DataTableRow>
              <DataTableCell text={'Ref'} type={'header'} borderRight flex={2} />
              <DataTableCell text={'D_debut'} type={'header'} />
              <DataTableCell text={'D_fin'} type={'header'} />
              <DataTableCell text={'Reversement'} type={'header'} />
              <DataTableCell text={'Reste'} type={'header'} />
              <DataTableCell text={'Taux'} type={'header'} /> 
            </DataTableRow>
            {this.state.Data
            .slice(
                this.state.page * this.state.perPage,
                this.state.page * this.state.perPage + this.state.perPage,
            )
            .map((item, index) => (
            
                <DataTableRow>
                    <DataTableCell text={item.Reference}  borderRight flex={2} />
                    <DataTableCell text={item.Date_debut} />
                    <DataTableCell text={item.Date_fin} />
                    <DataTableCell text={item.Reversement} />
                    <DataTableCell text={item.Reste} />
                    <DataTableCell text={item.Taux} /> 
                </DataTableRow>  
            ))}
             <DataTablePagination
            page={this.state.page}
            numberOfPages={this.state.Data.length / this.state.perPage}
            numberOfRows={this.state.Data.length}
            perPage={this.state.perPage}
            onChangePage={page => this.setState({ page: page })}
            onChangeRowsPerPage={perPage => this.setState({ perPage: perPage })}
            possibleNumberPerPage={[2,3,4,5, 6]}
          />
          </DataTable>
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
  },
  tableHeader: {
    height: 50,
    alignContent: "center",
  },
  tableHeaderCell: {
    justifyContent:"center",
    margin: 5,
  },
  tableRow: {
    flex: 1,
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

import { Button } from "native-base";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { ScaledSheet } from "react-native-size-matters";
import React, { useState, useEffect } from 'react';
import { DataTable } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";



function FactureComponent() {
  const [Date_debut, setDate_debut] = useState("");
  const [Date_fin, setDate_fin] = useState("");
  const [Reference, setReference] = useState("");
  const [Reversement, setReversement] = useState("");
  const [Reste, setReste] = useState("");
  const [Taux, setTaux] = useState("");
  const [domain_uuid, setdomain_uuid] = useState("");
  const [page, setpage] = useState("");
  const [perPage, setperPage] = useState("");
 var Data=[]
    
  const getFactData = () => {

    var URL = "http://192.168.1.67:88/api/fact.php";
    var header = {
      Accept: "application/json",
      "Content-type": "application.json",
    };
    var data = {
      Reference: Reference,
      Date_debut: Date_debut,
      Date_fin: Date_fin,
      Reversement: Reversement,
      Reste: Reste,
      Taux: Taux,
      domain_uuid: domain_uuid,
    };
    fetch(URL, {
      method: "POST",
      header: header,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        Data = response ;
        console.log(response[0].Reference)
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  useEffect(() => {
    getFactData
  }, [])
  
  
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
            <TextInput
              style={{
                width: "90%",
                backgroundColor: "white",
                color: "#250233",
              }}
            ></TextInput>
            <FontAwesome name="search" size={20} color="#F85F73"></FontAwesome>
          </View>
        </View>
        <View style={styles.container}>
          <Text></Text>

          <DataTable style={styles.tableContainer}>
            <DataTable.Header style={styles.Rows}>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>Ref</Text>
              </DataTable.Title>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>D_debut</Text>
              </DataTable.Title>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>D_fin</Text>
              </DataTable.Title>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>Reversement</Text>
              </DataTable.Title>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>Reste</Text>
              </DataTable.Title>
              <DataTable.Title
                type={"header"}
                style={styles.tableHeaderCell}
              >
                <Text style={{ fontSize: 14 }}>Taux</Text>
              </DataTable.Title>
            </DataTable.Header>
            {Data.slice(
              page * perPage,
              page * perPage + perPage
            ).map((row) => (
              <DataTable.Row key={row.Reference} style={styles.Rows}>
                <DataTable.Cell borderRight style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Reference}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Date_debut}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Date_fin}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Reversement}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Reste}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.tableCell}>
                  <Text style={{fontSize:12}}>{row.Taux}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Pagination
              page={page}
              numberOfPages={Data.length / perPage}
              numberOfRows={Data.length}
              perPage={perPage}
              onPageChange={(page) => setpage(page)}
              onChangeRowsPerPage={(perPage) =>
                 setperPage(perPage)  
              }
              
            />
          </DataTable>
        </View>
        <View style={styles.Footer}></View>
      </View>
    );
}
export default FactureComponent;
var styles = StyleSheet.create({
  tableContainer:{
    justifyContent:"center",
    margin:0,
    padding:0,
    //backgroundColor:'green'
  },
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
    backgroundColor: "#F85F73",
  },
  tableHeader: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },

  tableHeaderCell: {
    justifyContent: "center",
  },
  tableRow: {
    marginLeft:0
  },
  tableCell: {
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.87)",
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


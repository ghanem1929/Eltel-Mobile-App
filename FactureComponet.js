
import React, { useState, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function FactureComponent({ navigation, route }) {
  const [Date_debut, setDate_debut] = useState("");
  const [Date_fin, setDate_fin] = useState("");
  const [Reference, setReference] = useState("");
  const [Reversement, setReversement] = useState("");
  const [Reste, setReste] = useState("");
  const [Taux, setTaux] = useState("");
  const [Data, setData] = useState([]);
  const { uuid } = route.params;

  const getFactData = () => {
    var data = {
      domain_uuid: uuid,
      Reference: Reference,
      Date_debut: Date_debut,
      Date_fin: Date_fin,
      Reversement: Reversement,
      Reste: Reste,
      Taux: Taux,
    };

    fetch("http://192.168.1.67:88/api/fact.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application.json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };
  const unsubscribe = navigation.addListener("focus", () => {
    getFactData();
  });
  useEffect(() => {
    unsubscribe;
  }, []);

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
            height: 40,
            alignItems:"center",
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
        <View style={styles.listItemHeader}>
          <Text style={styles.headerTextItem}>Ref</Text>
          <Text style={styles.headerTextItem}>D_debut</Text>
          <Text style={styles.headerTextItem}>D_fin</Text>
          <Text style={styles.headerTextItem}>Revers</Text>
          <Text style={styles.headerTextItem}>Reste</Text>
          <Text style={styles.headerTextItem}>Taux</Text>
        </View>
        <ScrollView>
          {Data.map((item) => (
            <TouchableOpacity
              style={styles.listItem}
              key={item.Reference}
              onPress={() =>
                navigation.navigate("Facturedetails", {
                  ref: item.Reference,
                  domain_uuid: uuid,
                })
              }
            >
              <Text style={styles.TextItem}>{item.Reference}</Text>
              <Text style={styles.TextItem}>{item.Date_debut}</Text>
              <Text style={styles.TextItem}>{item.Date_fin}</Text>
              <Text style={styles.TextItem}>{item.Reversement}</Text>
              <Text style={styles.TextItem}>{item.Reste}</Text>
              <Text style={styles.TextItem}>{item.Taux}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.Footer}></View>
    </View>
  );
}
export default FactureComponent;
var styles = StyleSheet.create({
  tableContainer: {
    justifyContent: "center",
    margin: 0,
    padding: 0,
    //backgroundColor:'green'
  },
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FBE8D3",
  },
  Header: {
    height: 130,
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
    marginLeft: 0,
  },
  tableCell: {
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.87)",
  },
  listItem: {
    flexDirection: "row",
    //backgroundColor: "#928A97",
    height: 60,
    fontSize: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  TextItem: {
    fontSize: 12,
    width: "16.66%",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    //backgroundColor:"green"
  },
  listItemHeader: {
    flexDirection: "row",
    backgroundColor: "#283C63",
    height: 60,
    alignItems: "center",
  },
  headerTextItem: {
    fontWeight: "bold",
    width: "16.66%",
    textAlign: "center",
    color: "#FBE8D3",
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

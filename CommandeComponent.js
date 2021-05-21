import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import FixedFooter from "./fixedFooter";

function Commande({ navigation, route }) {
  const { itemId } = route.params;
  const [Data, setData] = useState([]);
  const [Reference, setReference] = useState("");
  const [Produit, setProduit] = useState("");
  const [Qte, setQte] = useState("");
  const [Date, setDate] = useState("");
  const [Palier, setPalier] = useState("");
  const [Operation, setOperation] = useState("");
  const [Traitement, setTraitement] = useState(0);

  const getClientData = () => {
    var data = {
      ID_Client: itemId,
      Reference: Reference,
      Produit: Produit,
      Qte: Qte,
      Date: Date,
      Palier: Palier,
      Operation: Operation,
      Traitement: Traitement,
    };
    fetch("http://192.168.1.67:88/api/CommandeUpdate.php", {
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
      })
      .catch((error) => {
        console.log("Error => " + error);
      });
  };

  const unsubscribe = navigation.addListener("focus", () => {
    getClientData();
  });
  useEffect(() => {
    unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.commandes}>
        <View style={styles.listItemHeader}>
          <Text style={styles.headerTextItem}>Ref</Text>
          <Text style={styles.headerTextItem}>Produit</Text>
          <Text style={styles.headerTextItem}>Qte</Text>
          <Text style={styles.headerTextItem}>Date</Text>
          <Text style={styles.headerTextItem}>Palier</Text>
          <Text style={styles.headerTextItem}>Ope</Text>
          <Text style={styles.headerTextItem}>action</Text>
        </View>
        <ScrollView>
          {Data.map((item) => (
            <View style={styles.listItem} key={item.Reference}>
              <Text style={styles.TextItem}>{item.Reference}</Text>
              <Text style={styles.TextItem}>{item.Produit}</Text>
              <Text style={styles.TextItem}>{item.Qte}</Text>
              <Text style={styles.TextItem}>{item.Date}</Text>
              <Text style={styles.TextItem}>{item.Palier}</Text>
              <Text style={styles.TextItem}>{item.Operation}</Text>
              {item.Traitement == 1 ? (
                <Feather
                  name="check-circle"
                  color="green"
                  style={styles.TextItem}
                />
              ) : (
                <Feather name="x-circle" color="red" style={styles.TextItem} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.productbtn}
          onPress={() =>
            navigation.navigate("Products", { itemId: itemId, Rmq: "ss" })
          }
        >
          <Text style={styles.textbtn}>voir les produits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Commande;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE8D3",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  commandes: {
    justifyContent: "flex-start",
    marginTop: 60,
    width: "100%",
    height: "70%",
    marginBottom: 10,
  },
  listItemHeader: {
    flexDirection: "row",
    backgroundColor: "#283C63",
    height: 60,
    alignItems: "center",
  },
  headerTextItem: {
    fontWeight: "bold",
    width: "14.28%",
    textAlign: "center",
    color: "#FBE8D3",
  },
  contentList: {
  },
  listItem: {
    flexDirection: "row",
    height: 60,
    fontSize: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  TextItem: {
    fontSize: 12,
    width: "14.28%",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 80,
  },
  productbtn: {
    width: 230,
    height: 50,
    backgroundColor: "#F85F73",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textbtn: {
    textAlign: "center",
    color: "#FBE8D3",
    fontWeight: "bold",
    fontSize: 20,
  },
});

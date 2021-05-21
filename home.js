import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FixedFooter from "./fixedFooter"

function home({ navigation, route }) {
  const { itemId ,uuid } = route.params;

  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <View style={styles.Rows}>
          <TouchableOpacity onPress={() => navigation.navigate("Facture", {
                uuid: uuid,
              })}>
            <Animatable.View
              animation="fadeInDownBig"
              duration={800}
              style={styles.Facture}
            >
              <View style={styles.Logos}>
                <Feather name="dollar-sign" size={40} color="#FBE8D3"></Feather>
              </View>
              <Text style={styles.TextFacture}>Facture</Text>
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Commande", {
                itemId: itemId,
              })
            }
          >
            <Animatable.View
              animation="fadeInDownBig"
              duration={800}
              style={styles.Commande}
            >
              <View style={styles.Logos}>
                <Feather name="list" size={40} color="#FBE8D3"></Feather>
              </View>
              <Text style={styles.TextCommande}>Commande</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
        <View style={styles.Rows}>
          <TouchableOpacity onPress={() => navigation.navigate("Statistics")}>
            <Animatable.View
              animation="fadeInUpBig"
              duration={600}
              style={styles.Statistique}
            >
              <View style={styles.Logos}>
                <Ionicons name="analytics" size={40} color="#FBE8D3"></Ionicons>
              </View>
              <Text style={styles.TextStatistique}>Statistique</Text>
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("aboutUs")}>
            <Animatable.View
              animation="fadeInUpBig"
              duration={600}
              style={styles.Apropos}
            >
              <View style={styles.Logos}>
                <FontAwesome5
                  name="users"
                  size={40}
                  color="#FBE8D3"
                ></FontAwesome5>
              </View>
              <Text style={styles.TextApropos}>A propos</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default home;
var styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBE8D3",
  },
  header: {
    flexDirection: "column",
  },
  textHeader: {
    textAlign: "left",
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "normal",
  },
  description: {
    marginTop: 6,
    marginLeft: 10,
    fontSize: 12,
    color: "grey",
  },
  Content: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "nowrap",
    marginTop: 30,
  },
  Rows: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Facture: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 150,
    width: 150,
    marginBottom: 50,
    backgroundColor: "#FBE8D3",
    marginRight: 20,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
  Logos: {
    backgroundColor: "#283C63",
    width: 90,
    height: 90,
    borderRadius: 60,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  TextFacture: {
    textAlign: "center",
    color: "#283C63",
    fontSize: 22,
    fontWeight: "400",
  },
  Commande: {
    justifyContent: "center",
    height: 150,
    width: 150,
    backgroundColor: "#FBE8D3",
    borderRadius: 10,
    marginBottom: 50,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TextCommande: {
    textAlign: "center",
    color: "#283C63",
    fontSize: 22,
    fontWeight: "400",
  },
  Statistique: {
    justifyContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: "#FBE8D3",
    marginRight: 20,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
  TextStatistique: {
    textAlign: "center",
    color: "#283C63",
    fontSize: 22,
    fontWeight: "400",
  },
  Apropos: {
    justifyContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: "#FBE8D3",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
  },
  TextApropos: {
    textAlign: "center",
    color: "#283C63",
    fontSize: 22,
    fontWeight: "400",
  },
});

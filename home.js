import React from "react";
import {
  Text,
  View,
  TextInput,
  Histogram,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Bienvenue chez Eltel Telecom</Text>
          <Text style={styles.description}>Découvrir notre suite logicielle et téléphonie qui s'adresse à tous vos usages</Text>
        </View>
        <View style={styles.Content}>
          <View style={styles.Rows}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("FactureScreen")}
            >
              <Animatable.View
                animation="fadeInUpBig"
                duration={800}
                style={styles.Facture}
              >
                <View style={styles.Logos}>
                  <Feather
                    name="dollar-sign"
                    size={20}
                    color="#F85F73"
                  ></Feather>
                </View>
                <Text style={styles.TextFacture}>Facture</Text>
              </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CommandeScreen")}
            >
              <Animatable.View
                animation="fadeInUpBig"
                duration={800}
                style={styles.Commande}
              >
                <View style={styles.Logos}>
                  <Feather name="list" size={20} color="#283C63"></Feather>
                </View>
                <Text style={styles.TextCommande}>Commande</Text>
              </Animatable.View>
            </TouchableOpacity>
          </View>
          <View style={styles.Rows}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("StatisticsScreen")}
            >
              <Animatable.View
                animation="fadeInUpBig"
                duration={600}
                style={styles.Statistique}
              >
                <View style={styles.Logos}>
                  <Ionicons
                    name="analytics"
                    size={20}
                    color="#252D3E"
                  ></Ionicons>
                </View>
                <Text style={styles.TextStatistique}>Statistique</Text>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("TestScreen")}
            >
              <Animatable.View
                animation="fadeInUpBig"
                duration={600}
                style={styles.Apropos}
              >
                <View style={styles.Logos}>
                  <FontAwesome5
                    name="users"
                    size={20}
                    color="#928A97"
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
}
var styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    //backgroundColor: "#FBE8D3",
  },
  header: {
    flexDirection:"column",
    //backgroundColor:"grey"
  },
  textHeader: {
    textAlign: "left",
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 20,
    fontFamily:"normal"
  },
  description: {
    marginTop:6,
    marginLeft: 10,
    fontSize: 12,
    color: "grey",
  },
  Content: {
    flex: 2,
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "nowrap",
    marginTop:30,
  },
  Rows: {
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:20
  },
  Facture: {
    justifyContent: "space-evenly",
    alignItems: "center",
    //paddingHorizontal: 20,
    height: 120,
    width: 120,
    //backgroundColor: "#F85F73",
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
  Logos: {
    backgroundColor: "rgba(52, 52, 52, 0.05)",
    width: 60,
    height: 60,
    borderRadius: 60,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  TextFacture: {
    textAlign: "center",
    color: "#F85F73",
    fontSize: 18,
    fontWeight: "400",
  },
  Commande: {
    justifyContent: "center",
    //paddingHorizontal: 20,
    height: 120,
    width: 120,
    //backgroundColor: "#283C63",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TextCommande: {
    textAlign: "center",
    color: "#283C63",
    fontSize: 18,
    fontWeight: "400",
  },
  Statistique: {
    justifyContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    //paddingHorizontal: 20,
    height: 120,
    width: 120,
    //backgroundColor: "#252D3E",
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
  TextStatistique: {
    textAlign: "center",
    color: "#252D3E",
    fontSize: 18,
    fontWeight: "400",
  },
  Apropos: {
    justifyContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    //paddingHorizontal: 20,
    height: 120,
    width: 120,
    //backgroundColor: "#252D3E",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
  TextApropos: {
    textAlign: "center",
    color: "#928A97",
    fontSize: 18,
    fontWeight: "400",
  },
});

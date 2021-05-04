import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-animatable";
import SVA_majorés from "./assets/SVA_majorés.png";
import CRM_par_minute from "./assets/CRM_par_minute.png";
import SVA_Banalisés from "./assets/SVA_Banalisés.png";
import SVA_Géographiques from "./assets/SVA_Géographiques.png";
import CRM_illimité from "./assets/CRM_illimité.png";

const SVA_majorésUri = Image.resolveAssetSource(SVA_majorés).uri;
const CRM_par_minuteUri = Image.resolveAssetSource(CRM_par_minute).uri;
const SVA_BanalisésUri = Image.resolveAssetSource(SVA_Banalisés).uri;
const SVA_GéographiquesUri = Image.resolveAssetSource(SVA_Géographiques).uri;
const CRM_illimitéUri = Image.resolveAssetSource(CRM_illimité).uri;

export default Products;
function Products({ navigation, route }) {
  const { Rmq, itemId } = route.params;
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "CRM illimité",
      description:
        "Solution CRM pour fidéliser vos clients et bien gérer vos relations sur toute la France Via Votre téléphone fixe et mobile. ",
      image: CRM_illimitéUri,
    },
    {
      id: 2,
      name: "CRM par minute",
      description:
        "Solution CRM cloud sur mesure selon le nombre d'agent dans votre entreprise.",
      image: CRM_par_minuteUri,
    },
    {
      id: 3,
      name: "SVA-majorés",
      description:
        "numéro SVA-majoré en 3 clic avec reversement et sans engagement .",
      image: SVA_majorésUri,
    },
    {
      id: 4,
      name: "SVA-Géographiques",
      description: "Numéros banalisés sont disponibles aux meilleurs coûts.",
      image: SVA_GéographiquesUri,
    },
    {
      id: 5,
      name: "SVA-Banalisés",
      description:
        "offre à vos entreprises une dimension locale et valorise leur proximité ",
      image: SVA_BanalisésUri,
    },
  ]);
  return (
    <View style={styles.Container}>
      <View style={styles.View}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.item}>
                <Image style={styles.Image} source={{ uri: item.image }} />

                <View style={styles.Details}>
                  <Text style={{ fontWeight: "bold", color: "#FBE8D3" }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "#FBE8D3" }}>{item.description} </Text>
                  <TouchableOpacity
                    style={styles.BuyBtn}
                    onPress={() => {
                      if (JSON.stringify(Rmq) === '"1"') {
                        navigation.navigate("Inscription");
                      } else{
                        navigation.navigate("CommandeForm", {
                          ProductName: item.name,
                          itemId: itemId,
                        });
                      }
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#FBE8D3",
                        textAlign: "center",
                      }}
                    >
                      Commander
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FBE8D3",
    //backgroundColor: "rgba(251, 232, 211, 0.4)",
  },
  View: {
    width: "100%",
    padding:10
  },
  Products: {
    margin: 10,
    flexDirection: "column",
  },
  item: {
    flex: 6,
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#283C63",
    height: "20%",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    flexDirection: "row",
  },
  Details: {
    width: "60%",
    margin: 10,
  },
  Image: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  BuyBtn: {
    backgroundColor: "#F85F73",
    alignSelf: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    margin: 5,
    width: 120,
    height: 40,
    marginTop: 10,
  },
});

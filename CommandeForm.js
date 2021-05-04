import React, { useState, useEffect } from "react";
import { View, Text, Picker, StyleSheet ,Alert} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import NumericInput from "react-native-numeric-input";
import AwesomeAlert from "react-native-awesome-alerts";

export default function CommandeForm({ route, navigation }) {
  const { ProductName, itemId } = route.params;
  const [Palier, setPalier] = useState("");
  const [Operation, setOperation] = useState("");
  const [offre, setOffre] = useState("");
  const [Qte, setQte] = useState(0);
  function formatDate() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const [ShowAlert, setShowAlert] = useState(true);

  const Alerts = () => {
    return (
      <AwesomeAlert
        show={true}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          navigation.navigate("Commande");
        }}
      />
    );
  };
  const InsertCommande = () => {
    var URL = "http://192.168.1.67:88/api/commandeInsert.php";
    var headers = {
      Accept: "application/json",
      "Content-type": "application.json",
    };

    var Data = {
      Reference: Math.random() * 800,
      Produit: ProductName,
      Qte: Qte,
      Date: formatDate(),
      Palier: Palier,
      Operation: Operation,
      ID_Client: itemId,
      Traitement: "0",
    };
    fetch(URL, {
      method: "POST",
      header: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0].Message);
        Alert.alert("Succées","Votre commande a ete bien enregistrer ..")
        navigation.navigate("Commande");
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };
  const ProductNamec = JSON.stringify(ProductName).substring(
    1,
    JSON.stringify(ProductName).length - 1
  );
  const ProductSelector = () => {
    if (ProductNamec === "SVA-majorés") {
      return (
        <View style={styles.form}>
          <Text style={styles.ProductTxt}>{ProductNamec}</Text>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', }}
          >
            <View style={{justifyContent:'center' ,alignItems:"center" , width:"100%" , margin:5}}>
            <Text style={styles.attribut}>Palier</Text>
            <Picker
              selectedValue={Palier}
              style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => setPalier(itemValue)}
            >
              <Picker.Item label="A100" value="A100" />
              <Picker.Item label="A255" value="A255" />
              <Picker.Item label="A300" value="A300" />
              <Picker.Item label="D30" value="D30" />
              <Picker.Item label="D60" value="D60" />
              <Picker.Item label="D80" value="D80" />
            </Picker>
            </View>
            <View style={{justifyContent:'center' ,alignItems:"center" , width:"100%" , margin:5}}>
            <Text style={styles.attribut}>Opération</Text>
            <Picker
              selectedValue={Operation}
              style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => setOperation(itemValue)}
            >
              <Picker.Item label="Voyance" value="Voyance" />
              <Picker.Item label="Jeu concour" value="Jeu concour" />
              <Picker.Item label="Autre" value="Autre" />
            </Picker>
            </View>
            <View style={{justifyContent:'center' ,alignItems:"center" , width:"100%" , margin:5}}>
            <Text style={styles.attribut}>Quantité</Text>
            <NumericInput
              style={styles.NumInput}
              value={Qte}
              onChange={(value) => setQte(value)}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={150}
              totalHeight={60}
              iconSize={24}
              step={1}
              minValue={0}
              maxValue={50}
              valueType="integer"
              rounded
              borderColor="#928A97"
              textColor="#252D3E"
              iconStyle={{ color: "#FBE8D3" }}
              rightButtonBackgroundColor="#F85F73"
              leftButtonBackgroundColor="#283C63"
            />
            </View> 
          </ScrollView>

          
        </View>
      );
    } else if (
      ProductNamec === "CRM illimité" ||
      ProductNamec === "CRM par minute"
    ) {
      return (
        <View style={styles.form}>
          <Text style={styles.ProductTxt}>{ProductNamec}</Text>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
          >
          <View style={{justifyContent:'center' ,alignItems:"center" , width:"100%" , margin:5}}>
            <Text style={styles.attribut}>Offre</Text>
            <Picker
              selectedValue={offre}
              style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => setOffre(itemValue)}
            >
              <Picker.Item label="Mobile" value="Mobile" />
              <Picker.Item label="Fixe" value="Fixe" />
              <Picker.Item label="Fixe-Mobile" value="Fixe-Mobile" />
            </Picker>
            </View>
            <View style={{justifyContent:'center' ,alignItems:"center" , width:"100%" , margin:5}}>
            <Text style={styles.attribut}>Quantité</Text>
            <NumericInput
              style={styles.NumInput}
              value={Qte}
              onChange={(value) => setQte(value)}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={150}
              totalHeight={60}
              iconSize={24}
              step={1}
              minValue={0}
              maxValue={50}
              valueType="integer"
              rounded
              borderColor="#928A97"
              textColor="#252D3E"
              iconStyle={{ color: "#FBE8D3" }}
              rightButtonBackgroundColor="#F85F73"
              leftButtonBackgroundColor="#283C63"
            />
            </View>
            </ScrollView>

          
        </View>
      );
    } else if (
      ProductNamec === "SVA-Géographiques" ||
      ProductNamec === "SVA-Banalisés"
    ) {
      return (
        <View style={styles.form}>
          <Text style={styles.ProductTxt}>{ProductNamec}</Text>
          <View 
          style={{ flexGrow: 1, justifyContent: 'flex-start' }}
          >
            <Text style={styles.attribut}>Quantité</Text>
            <NumericInput
              style={styles.NumInput}
              value={Qte}
              onChange={(value) => setQte(value)}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={150}
              totalHeight={60}
              iconSize={24}
              step={1}
              minValue={0}
              maxValue={50}
              valueType="integer"
              rounded
              borderColor="#928A97"
              textColor="#252D3E"
              iconStyle={{ color: "#FBE8D3" }}
              rightButtonBackgroundColor="#F85F73"
              leftButtonBackgroundColor="#283C63"
            />
            </View>
          
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.CartContent}>
          <FontAwesome5
            name="shopping-cart"
            size={35}
            color="#FBE8D3"
          ></FontAwesome5>
        </View>
      </View>
      <View style={styles.content}>
        <ProductSelector />
        <TouchableOpacity style={styles.ConfirmBtn} onPress={InsertCommande}>
          <Text style={styles.confirmTxt}>Confirmer mon panier</Text>
        </TouchableOpacity>
        {Alerts}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F85F73",
  },
  header: {
    backgroundColor: "#F85F73",
    width: "100%",
    height: "25%",
    justifyContent: "flex-end",
    paddingBottom: 15,
    alignItems: "center",
  },
  CartContent: {
    backgroundColor: "#250233",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
  },
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "75%",
    width: "100%",
    backgroundColor: "#FBE8D3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  form: {
    width: "100%",
    height: "75%",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "space-between",
  },
  headerTxt: {
    width: "40%",
    textAlign: "center",
  },

  FormTitle: {
    width: "100%",
    flexDirection: "column",
  },
  FormContent: {
    height: "70%",
    width: "100%",
    backgroundColor:"green",
    flexDirection: "column",
  },
  ProductTxt:{
    position:"relative",
    fontSize:26,
    margin:5,
    backgroundColor: "#283C63",
    padding:5,
    borderRadius:10,
    width:250,
    alignItems:"center",
    textAlign:"center",
    color:"#FBE8D3",

  },
  attribut:{
    position:"relative",
    padding:5,
    fontSize:18,
    fontWeight:'bold',
    textAlign:"center",
    color:"#252D3E"
  },
  Picker:{
    margin:5,
    width:180,
    height:40,
    color:'#F85F73',
    
  },
  itemStyle:{
    textAlign: 'center',
  },
  
  NumInput:{
    margin:5
  },
  ConfirmBtn: {
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F85F73",
  },
  confirmTxt: {
    color: "#FBE8D3",
    fontSize:18,
    fontWeight: "bold",
  },
});

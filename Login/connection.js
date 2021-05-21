import React, { useState, useEffect } from "react";
import {
  Alert, 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FloatingAction } from "react-native-floating-action";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

function Connection({ navigation }) {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  var ID_Client = 0;
  var domain_uuid=""
  

   const connectionCheck =  () => {
    if (login.length == 0 || password.length == 0) {
      Alert.alert(
        "Avertissement",
        "Vous devez remplir tous les champs",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      var URL = "http://192.168.1.67:88/api/test1.php";
      var header = {
        Accept: "application/json",
        "Content-type": "application.json",
      };
      var data = {
        Login: login,
        Password: password,
        ID_Client: ID_Client,
        domain_uuid: domain_uuid
      };
      fetch(URL, {
        method: "POST",
        header: header,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (login !== response[0].Login && password !== response[0].Password) {
            Alert.alert(
              "Avertissement",
              "Verifier adresse ou mot de passe est  incorrecte .. ",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          } else {
            ID_Client = response[0].ID_Client;
            domain_uuid = response[0].domain_uuid
            navigation.navigate("home" , {
              itemId: ID_Client,
              uuid: domain_uuid
            });
            console.log("Id client ==> " + ID_Client)
            console.log("domain uuid client ==> " + domain_uuid)
          }
        })
        .catch((error) => {
          alert("Error : " + error);
        });
    }
  };
  useEffect(() => {
    connectionCheck;
    
  }, [])


  

  const SecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const actions = [
    {
      text: "produits",
      name: "Products",
      position: 1,
    },
    {
      text: "A propos",
      name: "AboutUs",
      position: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Connecter</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.emailText}>Email</Text>
          <View style={styles.action}>
            <Feather name="user" size={20} color="#F85F73" />

            <TextInput
              placeholder="Email ..."
              color="#928A97"
              style={styles.EmailInput}
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
          </View>

          <Text style={styles.M2PText}>Mot de passe</Text>
          <View style={styles.action}>
            <Feather name="lock" size={20} color="#F85F73" />
            {secureTextEntry ? (
              <TextInput
                placeholder="Mot de passe ..."
                color="#928A97"
                secureTextEntry={true}
                style={styles.EmailInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            ) : (
              <TextInput
                placeholder="Mot de passe ..."
                color="#928A97"
                style={styles.EmailInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            )}
            <TouchableOpacity onPress={() => SecureTextEntry()}>
              {secureTextEntry ? (
                <Feather name="eye-off" size={20} color="#F85F73" />
              ) : (
                <Feather name="eye" size={20} color="#F85F73" />
              )}
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#928A97", marginTop: 15 }}>
            Mot de passe oublier !
          </Text>

          <TouchableOpacity
            style={styles.ConnectionButton}
            onPress={connectionCheck}
          >
            <Text
              style={{
                color: "#FBE8D3",
                alignItems: "center",
                textAlign: "center",
                alignContent: "center",
                fontWeight: "bold",
                fontSize: 20,
                height: 30,
              }}
            >
              Connecter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.RegisterButton}
            onPress={() => navigation.navigate("Inscription")}
          >
            <Text
              style={{
                color: "#FBE8D3",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                height: 30,
              }}
            >
              Enregistrer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
      <FloatingAction
        style={styles.Floatingbtn}
        actions={actions}
        onPressItem={(name) => {
          switch (name) {
            case "Products":
              navigation.navigate("Products" , {
                Rmq : "1"
              });
              break;
            case "AboutUs":
              navigation.navigate("AboutUs");
              break;

            default:
              break;
          }
        }}
      />
    </View>
  );
}
export default Connection;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F85F73",
  },
  Floatingbtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#FBE8D3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  textHeader: {
    color: "#FBE8D3",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  emailText: {
    marginTop: 30,
    color: "#F85F73",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F85F73",
  },
  EmailInput: {
    flex: 1,
    paddingVertical: 2,
    color: "#250233",
    marginHorizontal: 10,
  },
  M2PText: {
    marginTop: 30,
    color: "#F85F73",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },
  ConnectionButton: {
    marginTop: 35,
    backgroundColor: "#F85F73",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  RegisterButton: {
    marginTop: 20,
    backgroundColor: "#250233",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 60,
  },
});

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

export default Inscription;
function Inscription() {
 
  const [Password, setPassword] = useState("")
  const [M2PC, setM2PC] = useState("")
  const [Login, setLogin] = useState("")
  const [Nom, setNom] = useState("")
  const [Prenom, setPrenom] = useState("")
  const [Societe, setSociete] = useState("")
  const [Telephone, setTelephone] = useState("")
  const [Adresse, setAdresse] = useState("")
  const [secureTextEntry, setsecureTextEntry] = useState(true)
  const [secureTextEntry1, setsecureTextEntry1] = useState(true)
    /*this.state = {
      check_textInputChange: false,
      Password: "", 
      M2PC: "",
      secureTextEntry: true,
      secureTextEntry1: true,
      Login: "",
      Nom: "",
      Prenom: "",
      Societe: "",
      Telephone: "",
      Adresse: "",
    };*/
  

  const InsertRecord = () => {

    if (
      Nom.length == 0 ||
      Prenom.length == 0 ||
      Societe.length == 0 ||
      Telephone.length == 0 ||
      Adresse.length == 0 ||
      Login.length == 0 ||
      Password.length == 0
    ) {
      alert("tu dois completé tous les champs ");
    } else {
      var URL = "http://192.168.137.188:88/api/inscrip.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application.json",
      };

      var Data = {
        Nom: Nom,
        Prenom: Prenom,
        Telephone: Telephone,
        Societe: Societe,
        Adresse: Adresse,
        Login: Login,
        Password: Password,
      };
      fetch(URL, {
        method: "POST",
        header: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert("Error" + error);
        });
    }
  };

  
  const SecureTextEntry = () => {
      setsecureTextEntry(!secureTextEntry)
  }
  const SecureTextEntry1 = () => {
    setsecureTextEntry1(!secureTextEntry1)
}
 

  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Connecter</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.emailText}>Nom</Text>
            <View style={styles.action}>
              <Feather name="user" size={20} color="#F85F73" />

              <TextInput
                placeholder="Nom ..."
                style={styles.EmailInput}
                onChangeText={(Nom) => setNom(Nom)}
              />
            </View>
            <Text style={styles.emailText}>Prenom</Text>
            <View style={styles.action}>
              <Feather name="user" size={20} color="#F85F73" />

              <TextInput
                placeholder="Prenom ..."
                style={styles.EmailInput}
                onChangeText={(Prenom) => setPrenom(Prenom)}
              />
            </View>
            <Text style={styles.emailText}>Societe</Text>
            <View style={styles.action}>
              <Feather name="users" size={20} color="#F85F73" />

              <TextInput
                placeholder="Societe ..."
                style={styles.EmailInput}
                onChangeText={(Societe) => setSociete(Societe)}
              />
            </View>
            <Text style={styles.emailText}>Télephone</Text>
            <View style={styles.action}>
              <Feather name="smartphone" size={20} color="#F85F73" />

              <TextInput
                placeholder="Télephone ..."
                style={styles.EmailInput}
                onChangeText={(Telephone) => setTelephone(Telephone)}
              />
            </View>
            <Text style={styles.emailText}>Adresse</Text>
            <View style={styles.action}>
              <Feather name="home" size={20} color="#F85F73" />

              <TextInput
                placeholder="Adresse ..."
                style={styles.EmailInput}
                onChangeText={(Adresse) => setAdresse(Adresse)}
              />
            </View>
            <Text style={styles.emailText}>Email</Text>
            <View style={styles.action}>
              <Feather name="user" size={20} color="#F85F73" />

              <TextInput
                placeholder="Email ..."
                style={styles.EmailInput}
                onChangeText={(Login) => setLogin(Login)}
              />
            </View>

            <Text style={styles.M2PText}>Mot de passe</Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} color="#F85F73" />
              {secureTextEntry ? (
                <TextInput
                  placeholder="Mot de passe ..."
                  secureTextEntry={true}
                  style={styles.EmailInput}
                  value={Password}
                  onChangeText={(text) =>setPassword(text)}
                />
              ) : (
                <TextInput
                  placeholder="Mot de passe ..."
                  style={styles.EmailInput}
                  value={Password}
                  onChangeText={(text) =>setPassword(text)}
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
            <Text style={styles.M2PText}>Confirmer mot de passe </Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} color="#F85F73" />
              {secureTextEntry1 ? (
                <TextInput
                  placeholder="Confirmer mot de passe .."
                  secureTextEntry={true}
                  style={styles.EmailInput}
                  value={M2PC}
                  onChangeText={(text) =>setM2PC(text)}
                />
              ) : (
                <TextInput
                  placeholder="Confirmer mot de passe .."
                  style={styles.EmailInput}
                  value={M2PC}
                  onChangeText={(text) =>setM2PC(text)}
                />
              )}
              <TouchableOpacity onPress={() => SecureTextEntry1()}>
                {secureTextEntry1 ? (
                  <Feather name="eye-off" size={20} color="#F85F73" />
                ) : (
                  <Feather name="eye" size={20} color="#F85F73" />
                )}
              </TouchableOpacity>
            </View>
            {Password !== M2PC ? (
              <View>
                <Text style={styles.textVerify}>Verifier mot de passe</Text>
              </View>
            ) : null}

            <View style={styles.RegisterButton}>
              <Button
                title="Enregistrer"
                color="#2C003E"
                onPress={InsertRecord}
              />
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F85F73",
  },
  header: {
    flex: 1,
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
    paddingVertical: 30,
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
    borderBottomColor: "#240E88",
  },
  EmailInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#240E88",
    paddingVertical: 10,
  },
  M2PText: {
    color: "#F85F73",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },

  RegisterButton: {
    marginTop: 35,
    backgroundColor: "#2C003E",
    padding: 8,
    borderRadius: 50,
    textAlign: "center",
    margin: 12,
  },
  textVerify: {
    textAlign: "center",
    fontSize: 12,
    color: "green",
    paddingTop: 8,
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 8,
  },
});

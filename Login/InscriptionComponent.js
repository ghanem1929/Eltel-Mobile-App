import React, { Component } from "react";
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

export default class InscriptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  InsertRecord = () => {
    var Nom = this.state.Nom;
    var Prenom = this.state.Prenom;
    var Societe = this.state.Societe;
    var Telephone = this.state.Telephone;
    var Adresse = this.state.Adresse;
    var Login = this.state.Login;
    var Password = this.state.Password;

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
      var URL = "http://192.168.137.150:88/api/test.php";
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

  textInputChange(value) {
    if (value.length !== 0) {
      this.setState({
        check_textInputChange: true,
      });
    } else {
      this.setState({
        check_textInputChange: false,
      });
    }
  }
  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }
  secureTextEntry1() {
    this.setState({
      secureTextEntry1: !this.state.secureTextEntry1,
    });
  }

  render() {
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
                onChangeText={(Nom) => this.setState({ Nom })}
              />
            </View>
            <Text style={styles.emailText}>Prenom</Text>
            <View style={styles.action}>
              <Feather name="user" size={20} color="#F85F73" />

              <TextInput
                placeholder="Prenom ..."
                style={styles.EmailInput}
                onChangeText={(Prenom) => this.setState({ Prenom })}
              />
            </View>
            <Text style={styles.emailText}>Societe</Text>
            <View style={styles.action}>
              <Feather name="users" size={20} color="#F85F73" />

              <TextInput
                placeholder="Societe ..."
                style={styles.EmailInput}
                onChangeText={(Societe) => this.setState({ Societe })}
              />
            </View>
            <Text style={styles.emailText}>Télephone</Text>
            <View style={styles.action}>
              <Feather name="smartphone" size={20} color="#F85F73" />

              <TextInput
                placeholder="Télephone ..."
                style={styles.EmailInput}
                onChangeText={(Telephone) => this.setState({ Telephone })}
              />
            </View>
            <Text style={styles.emailText}>Adresse</Text>
            <View style={styles.action}>
              <Feather name="home" size={20} color="#F85F73" />

              <TextInput
                placeholder="Adresse ..."
                style={styles.EmailInput}
                onChangeText={(Adresse) => this.setState({ Adresse })}
              />
            </View>
            <Text style={styles.emailText}>Email</Text>
            <View style={styles.action}>
              <Feather name="user" size={20} color="#F85F73" />

              <TextInput
                placeholder="Email ..."
                style={styles.EmailInput}
                onChangeText={(Login) => this.setState({ Login })}
              />
            </View>

            <Text style={styles.M2PText}>Mot de passe</Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} color="#F85F73" />
              {this.state.secureTextEntry ? (
                <TextInput
                  placeholder="Mot de passe ..."
                  secureTextEntry={true}
                  style={styles.EmailInput}
                  value={this.state.Password}
                  onChangeText={(text) =>
                    this.setState({
                      Password: text,
                    })
                  }
                />
              ) : (
                <TextInput
                  placeholder="Mot de passe ..."
                  style={styles.EmailInput}
                  value={this.state.Password}
                  onChangeText={(text) =>
                    this.setState({
                      Password: text,
                    })
                  }
                />
              )}
              <TouchableOpacity onPress={() => this.secureTextEntry()}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" size={20} color="#F85F73" />
                ) : (
                  <Feather name="eye" size={20} color="#F85F73" />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.M2PText}>Confirmer mot de passe </Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} color="#F85F73" />
              {this.state.secureTextEntry1 ? (
                <TextInput
                  placeholder="Confirmer mot de passe .."
                  secureTextEntry={true}
                  style={styles.EmailInput}
                  value={this.state.M2PC}
                  onChangeText={(text) =>
                    this.setState({
                      M2PC: text,
                    })
                  }
                />
              ) : (
                <TextInput
                  placeholder="Confirmer mot de passe .."
                  style={styles.EmailInput}
                  value={this.state.M2PC}
                  onChangeText={(text) =>
                    this.setState({
                      M2PC: text,
                    })
                  }
                />
              )}
              <TouchableOpacity onPress={() => this.secureTextEntry1()}>
                {this.state.secureTextEntry1 ? (
                  <Feather name="eye-off" size={20} color="#F85F73" />
                ) : (
                  <Feather name="eye" size={20} color="#F85F73" />
                )}
              </TouchableOpacity>
            </View>
            {this.state.Password !== this.state.M2PC ? (
              <View>
                <Text style={styles.textVerify}>Verifier mot de passe</Text>
              </View>
            ) : null}

            <View style={styles.RegisterButton}>
              <Button
                title="Enregistrer"
                color="#2C003E"
                onPress={this.InsertRecord}
              />
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
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
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: "white",
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

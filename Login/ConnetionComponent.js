import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Platform,
  ScrollView,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";

import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

export default class ConnetionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      Password: "",
      Login: "",
      secureTextEntry: true,
      isLoadin: true,
      data: [],
    };
  }
  connectionCheck = () => {
    var Password = this.state.Password;
    var Login = this.state.Login;
    if (Login.length == 0 || Password.length == 0) {
      alert("tu dois remlpir tous les champs .!");
    } else {
      var URL = "http://192.168.137.150:88/api/test1.php";
      var header = {
        Accept: "application/json",
        "Content-type": "application.json",
      };
      var data = {
        Login: Login,
        Password: Password,
      };
      fetch(URL, {
        method: "POST",
        header: header,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (Login == response[0].Login && Password == response[0].Password) {
            this.props.navigation.navigate("homeScreen");
          } else alert("u have to check login or password ..");
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

  render() {
    const actions = [
      {
        text: "produits",
        name: "productsScreen",
        position: 1
      },
      {
        text: "A propos",
        name: "AboutUsScreen",
        position: 2
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
                value={this.state.Login}
                onChangeText={(text) =>
                  this.setState({
                    Login: text,
                  })
                }
              />
            </View>

            <Text style={styles.M2PText}>Mot de passe</Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} color="#F85F73" />
              {this.state.secureTextEntry ? (
                <TextInput
                  placeholder="Mot de passe ..."
                  color="#928A97"
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
                  color="#928A97"
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
            <Text style={{ color: "#928A97", marginTop: 15 }}>
              Mot de passe oublier !
            </Text>

            <TouchableOpacity
              style={styles.ConnectionButton}
              onPress={this.connectionCheck}
            >
              <Text style={{ color: "#FBE8D3" , alignItems:"center", textAlign:"center" , alignContent:"center",fontWeight:"bold" ,fontSize:18 ,height:30 }}>Connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.RegisterButton}
              onPress={() =>
                this.props.navigation.navigate("InscriptionScreen")
              }
            >
              <Text style={{ color: "#FBE8D3" , textAlign:"center" , fontWeight:"bold" ,fontSize:18, height:30 }}>Enregistrer</Text>
            </TouchableOpacity>
            
          </ScrollView>
          
        </Animatable.View>
        <FloatingAction
            style={styles.Floatingbtn}
              actions={actions}
              onPressItem={(name) =>{
                if (name === "productsScreen"){
                this.props.navigation.navigate("productsScreen")} else this.props.navigation.navigate("AboutUsScreen")
              }
              
              }

                
              
            />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F85F73",
  },
  Floatingbtn:{
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: "#283C63",                                    
    position: 'absolute',                                          
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
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    
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
    padding: 8,
    borderRadius: 50,
    alignItems:"center",
  },
  RegisterButton: {
    marginTop: 20,
    backgroundColor: "#250233",
    padding: 8,
    borderRadius: 50,
    alignItems:"center",
    marginBottom:60
  },
});

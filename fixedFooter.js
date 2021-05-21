import React, { useState, useEffect } from 'react';

import {Text , View ,TouchableOpacity ,StyleSheet} from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

function FixedFooter({ route, navigation }){
   
    return(
        <View style={styles.Container}>
            <View style={styles.Facture}>
                <TouchableOpacity  onPress={() => navigation.navigate("Facture")}>
                <Feather name="dollar-sign" size={25} color="red"></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.Commande}>
                <TouchableOpacity onPress={() =>
              navigation.navigate("Commande")
            }>
                <Feather name="list" size={25} color="red"></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.Statistique}>
                <TouchableOpacity onPress={() => navigation.navigate("Statistics")}>
                <Ionicons name="analytics" size={25} color="red"></Ionicons>
                </TouchableOpacity>
            </View>
            <View style={styles.Apropos}>
                <TouchableOpacity onPress={() => navigation.navigate("aboutUs")}>
                <FontAwesome5 name="users" size={25} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default FixedFooter;
var styles=StyleSheet.create({
    Container:{
        //backgroundColor:"green",
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:"10%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }
})
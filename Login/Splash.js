import {React  , useEffect} from 'react';
import {Image ,StyleSheet} from "react-native"
import EltelLogo from '../assets/EltelLogo.png'
import * as Animatable from "react-native-animatable";

const EltelLogoUri = Image.resolveAssetSource(EltelLogo).uri


function Splash({navigation}){
    
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("Connection")
        }, 3000);
      },[])
        return ( 
            <Animatable.View animation="fadeIn"  style={styles.container}>
                <Image style={styles.image}source={{uri: EltelLogoUri}}></Image>
            </Animatable.View>
         );
    
}
export default Splash;
var styles = StyleSheet.create({
    container:{
        flex:1 ,
            backgroundColor:"#F85F73" ,
            justifyContent:"center",
            alignItems:"center"
         },
         image:{
             width:350,
             height:200,
             //backgroundColor:"green" ,
         }
})
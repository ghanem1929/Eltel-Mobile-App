import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

function FactureDetails({ navigation, route }) {
  const { ref, domain_uuid } = route.params;
  const [extension_uuid, setextension_uuid] = useState("");
  const [direction, setdirection] = useState("");
  const [duration, setduration] = useState("");
  const [caller_destination, setcaller_destination] = useState("");
  const [start_stamp, setstart_stamp] = useState("");
  const [Data, setData] = useState([]);

  const factDetails = () => {
    var data = {
      domain_uuid: domain_uuid,
      extension_uuid: extension_uuid,
      direction: direction,
      duration: duration,
      caller_destination: caller_destination,
      start_stamp: start_stamp,
    };

    fetch("http://192.168.1.67:88/api/factDetails.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application.json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        alert("vous n'avez pas des factures");
      });
  };
  const unsubscribe = navigation.addListener("focus", () => {
    factDetails();
  });
  useEffect(() => {
    unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        <View style={{width:300}}>
        <CollapsibleView title="duration" key={1} >
          {Data.map((item ,i) => (
            <View key={i}>
              <Text style={styles.TextItem}>{item.duration}</Text>
              </View>
            
          ))}
          </CollapsibleView>
        </View>
        <View style={{width:300}} >
        <CollapsibleView title="direction" key={2}>
          {Data.map((item ,i) => (
            <View key={i}>
              <Text style={styles.TextItem}>{item.direction}</Text>
              </View>
          ))}
          </CollapsibleView>
        </View>
        <View style={{width:300}} >
        <CollapsibleView title="caller_destination" key={3}>
          {Data.map((item ,i) => (
            <View key={i}>
              <Text style={styles.TextItem}>{item.caller_destination}</Text>
              </View>
          ))}
          </CollapsibleView>
        </View >
        <View style={{width:300}}>
        <CollapsibleView title="start_stamp" key={4}>
          {Data.map((item ,i) => (
            <View key={i}>
              <Text style={styles.TextItem}>{item.start_stamp}</Text>
              </View>
          ))}
          </CollapsibleView>
        </View>
      </ScrollView>
    </View>
  );
}
export default FactureDetails;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    height: 40,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
  },
  listItemHeader: {
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
  },
  headerTextItem: {
    width: "25%",
    height: 40,
    backgroundColor: "red",
    textAlign: "center",
    alignItems: "center",
  },
  TextItem: {
    textAlign: "center",
  },
  content: {
    alignContent: "center",
    marginVertical: 50,
    height: "80%",
  },
});

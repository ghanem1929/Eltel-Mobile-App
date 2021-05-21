import React from "react";
import { View, Text } from "react-native-animatable";
class StatisticsComponent extends React.Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>welcome to "statistique" component</Text>
      </View>
    );
  }
}

export default StatisticsComponent;

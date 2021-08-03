import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";

export default class CartPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           <Text>CartPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
    color: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    alignItems: "center",
  },
});

import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDataApi, postDataApi } from "../../../redux/actions/fetchData";
import { httpClient, data, options } from "../../../config/config";
export default class MessagePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text> MessagePage </Text>
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
    color: "black",
    paddingLeft: 10,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    alignItems: "center"
  },

});

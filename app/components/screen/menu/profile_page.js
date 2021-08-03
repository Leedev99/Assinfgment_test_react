import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import IconFa from "react-native-vector-icons/FontAwesome";
import IconFt from "react-native-vector-icons/Feather";
import IconMt from "react-native-vector-icons/MaterialIcons";
import { color } from "react-native-elements/dist/helpers";
import { useNavigation } from '@react-navigation/native';

function ProfileScreen({navigation}) {
  // render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/image/profile.png')}
            />
            {/* onPress={this.onButtonPress.bind(this)} */}
            <View style={styles.vbtn}>
              <TouchableOpacity 
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.vbtn}>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.registerButton]}
              >
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.body}></View>
      </View>
    );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f16b24",
  },
  headerContent: {
    padding: 20,
    flexDirection: "row",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    // borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    paddingTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 10,
    
  },
  loginButton: {
    backgroundColor: "white",
  },
  loginText: {
    color: "#f16b24",
    fontSize: 16,
  },
  registerText: {
    borderColor: "white",
    color: "white",
    fontSize: 16,
    
  },
  registerButton: {
    borderColor: "white",
    backgroundColor: "#f16b24",
    borderWidth: 1
  },
  vbtn: {
    paddingTop: 25,
    paddingLeft: 13,
    flexDirection: "row",
  },
});

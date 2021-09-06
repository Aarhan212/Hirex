import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.s_sfview}>
      <View style={styles.s_layout}>
        <View style={styles.s_logo}>
          <Text style={styles.s_heading}>
            Hire
            <Text style={styles.s_xlogo}>x</Text>
          </Text>
          <Text style={styles.s_subheading}>Simplified Work Finding.</Text>
        </View>
        <View style={styles.s_power}>
          <Text style={styles.s_subheading}>Powered by</Text>
          <Image
            source={require("../assets/jinalogo.png")}
            style={styles.s_jinalogo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  s_sfview: {
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
  s_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  s_logo: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 80,
    paddingBottom: 50,
    marginVertical: 250,
  },
  s_heading: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 80,
  },
  s_xlogo: {
    color: "#0679FF",
  },
  s_subheading: {
    color: "#3D4968",
    fontSize: 15,
    marginVertical: 15,
  },
  s_power: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 45,
    paddingTop: 80,
    paddingBottom: 50,
  },
  s_jinalogo: {
    width: 100,
    height: 100,
  },
});

export default Login;

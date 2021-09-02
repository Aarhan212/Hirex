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
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", height: "100%" }}>
      <View style={styles.sh_layout}>
        <Text style={styles.sh_heading}>Search</Text>
        <TextInput style={styles.sh_input} placeholder="Skills / Employers" />

        <View style={styles.sh_searchcontent}>
          <View style={styles.sh_searchheader}>
            <Text style={styles.sh_popular}>Popular searches around you</Text>
          </View>
          <View style={styles.sh_searches}>
            <Text style={styles.sh_trend}>Software Engineer</Text>
            <Text style={styles.sh_trend}>Apple</Text>
            <Text style={styles.sh_trend}>Jina AI</Text>
            <Text style={styles.sh_trend}>Machine Learning</Text>
            <Text style={styles.sh_trend}>Data Science</Text>
          </View>
          <View style={styles.sh_sengine}>
            <Text style={styles.sh_powered}>
              Search Engine{"\n"}Powered by Jina AI
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sh_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
  },

  sh_heading: {
    alignSelf: "flex-start",
    fontSize: 50,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 40,
  },

  sh_input: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 5,
    marginTop: -10,
    padding: 10,
    margin: 10,
    marginBottom: 20,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    height: 65,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sh_searchcontent: {
    alignItems: "center",
  },
  sh_searchheader: {
    marginVertical: 20,
  },
  sh_popular: {
    fontWeight: "bold",
    fontSize: 25,
  },
  sh_searches: {
    textAlign: "center",
  },
  sh_trend: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    color: "#0679FF",
    marginVertical: 20,
  },
  sh_powered: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    color: "#545454",
    marginVertical: 20,
  },
});

export default Login;

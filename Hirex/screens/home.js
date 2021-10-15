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

class Home extends React.Component {
    render(){
        return(
            <SafeAreaView style={{backgroundColor:"#EEEE",height:"100%"}}>
                <View style={styles.h_layout}>
                    <View style={styles.h_text}>
                        <Text style={styles.h_heading}>Hire<Text style={styles.h_blue}>x</Text></Text>
                        <Text style={styles.h_stext}>Simplified Work Finding</Text>
                    </View>
                    <Image source={require('../assets/remote-team.png')} style={styles.h_image} />
                    <View style={styles.h_buttons}>
                        <Pressable style={styles.h_login} onPress={() => this.props.navigation.navigate('Login')}><Text style={{color:"#FFFF"}}>Login</Text></Pressable>
                        <Pressable style={styles.h_signup} onPress={() => this.props.navigation.navigate('Signup')}><Text style={{color:"black"}}>Create a new account</Text></Pressable>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
  h_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  h_blue: {
    color: "#0679FF",
  },

  h_heading: {
    fontSize: 55,
    fontWeight: "bold",
  },
  h_text: {
    marginHorizontal: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 60,
  },
  h_login: {
    justifyContent: "center",
    backgroundColor: "#0679FF",
    paddingVertical: 22,
    paddingHorizontal: 165,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h_signup: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
    paddingVertical: 22,
    paddingHorizontal: 110,
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h_image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});

export default Home;

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
<<<<<<< HEAD

const Login = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#0679FF" }}>
      <View style={styles.l_layout}>
        <View style={styles.l_box1}>
          <Image
            source={require("../assets/login4.png")}
            styles={styles.l_image}
          />
        </View>
        <View style={styles.l_box2}>
          <Text style={styles.l_heading}>Welcome Back</Text>
          <TextInput
            style={styles.l_input1}
            placeholder="   Enter your email"
          />
          <TextInput
            style={styles.l_input2}
            placeholder="   Enter your password"
          />
          <Pressable style={styles.l_button}>
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
          <View style={styles.l_media}>
            <Image
              source={require("../assets/icons1.png")}
              style={styles.l_facebook}
            />
            <Image
              source={require("../assets/icons2.png")}
              style={styles.l_facebook}
            />
            <Image
              source={require("../assets/icons3.png")}
              style={styles.l_facebook}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
=======
import Firebase from "../config";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'


class Login extends React.Component {
    handleLogin = () => {
        this.props.login()
        if (this.props.user != null) {
            this.props.navigation.navigate('Dashboard')
        }
    }
  componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('Dashboard')
                }
            }
        })
    }
  render(){
    return (
        <SafeAreaView style={{ backgroundColor: "#0679FF" }}>
        <View style={styles.l_layout}>
            <View style={styles.l_box1}>
            <Image
                source={require("../assets/login4.png")}
                styles={styles.l_image}
            />
            </View>
            <View style={styles.l_box2}>
            <Text style={styles.l_heading}>Welcome Back</Text>
            <TextInput
                value={this.props.user.email}
                onChangeText={email => this.props.updateEmail(email)}
                style={styles.l_input1}
                placeholder="   Enter your email"
            />
            <TextInput
                value={this.props.user.password}
                onChangeText={password => this.props.updatePassword(password)}
                style={styles.l_input2}
                placeholder="   Enter your password"
                secureTextEntry={true}
            />
            <Pressable style={styles.l_button} onPress={this.handleLogin}>
                <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
            <View style={styles.l_media}>
                <Pressable onPress={() => this.props.navigation.navigate('Signup')}><Text>Dont have an account Signup</Text></Pressable>
            </View>
            </View>
        </View>
        </SafeAreaView>
    );
  }
>>>>>>> parent of ddb4ce4 (delete)
};

const styles = StyleSheet.create({
  l_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#0679FF",
  },
  l_box1: {
    justifyContent: "center",
    alignItems: "center",
  },
  l_box2: {
    flexDirection: "column",
    borderTopLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  l_heading: {
    alignSelf: "flex-start",
    fontSize: 30,
    fontWeight: "bold",
  },
  l_image: {
    height: 90,
    width: 90,
    alignSelf: "center",
  },
  l_box1: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 68,
  },
  l_box2: {
    flexDirection: "column",
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  l_heading: {
    fontSize: 27,
    fontWeight: "bold",
  },
  l_input1: {
    marginHorizontal: 5,
    marginTop: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginBottom: 20,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 65,
    borderColor: "#C4C4C4",
  },
  l_input2: {
    marginHorizontal: 5,
    marginTop: 1,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginBottom: 20,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 65,
    borderColor: "#C4C4C4",
  },
  l_button: {
    marginHorizontal: 5,
    marginTop: 20,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 65,
    backgroundColor: "#0679FF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  l_media: {
    flexDirection: "row",
<<<<<<< HEAD
    justifyContent: "space-around",
=======
    justifyContent: "center",
>>>>>>> parent of ddb4ce4 (delete)
    marginTop: 40,
    marginHorizontal: 30,
  },
});

<<<<<<< HEAD
export default Login;
=======
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)


>>>>>>> parent of ddb4ce4 (delete)

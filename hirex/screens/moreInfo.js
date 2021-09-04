import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button, Pressable } from "react-native"
import { addBook } from "./addInf"
import firebase from "firebase";
import { ScrollView } from "react-navigation";
export default class App extends Component {
  state = {
    name:'',
    work:'',
    github: '',
    linkedin: '',
    hackerrank: '',
    codechef: ''
  }
  addBook = () => {
    firebase.firestore()
      .collection('details')
      .add({
              name: this.state.name,
              work: this.state.work,
              github: this.state.github,
              linkedin: this.state.linkedin,
              hackerrank: this.state.hackerrank,
              codechef: this.state.codechef,
      })
    .then(() => {
      console.log('User added!');
      this.props.navigation.navigate('Dashboard')
    });
   }
  render() {
    const { name, work, github, linkedin, hackerrank, codechef } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.m_box}>
          <Text style={styles.m_heading}>Tell Us More</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={name}
            placeholder='Name'
            style={styles.l_input2}
            onChangeText={value => this.setState({ name: value })}
          />
          <TextInput
            value={work}
            placeholder='What do you do'
            style={styles.l_input2}
            onChangeText={value => this.setState({ work: value })}
          />
          <TextInput
            value={github}
            placeholder='Github ID'
            style={styles.l_input2}
            onChangeText={value => this.setState({ github: value })}
          />
          <TextInput
            value={linkedin}
            placeholder='Linkedin ID'
            style={styles.l_input2}
            onChangeText={value => this.setState({ linkedin: value })}
          />
          <TextInput
            value={hackerrank}
            placeholder='Hackerrank ID'
            style={styles.l_input2}
            onChangeText={value => this.setState({ hackerrank: value })}
          />
          <TextInput
            value={codechef}
            placeholder='Codechef ID'
            style={styles.l_input2}
            onChangeText={value => this.setState({ codechef: value })}
          />
          <Pressable onPress={this.addBook} style={styles.l_button}><Text style={{color:"white"}}>All set</Text></Pressable>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  l_input2: {
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 65,
    borderColor: "#C4C4C4",
  },
  m_box:{
    backgroundColor:"#0679FF",
    alignItems:'center',
    justifyContent:'center',
    borderBottomEndRadius:40,
    borderBottomStartRadius:40,
  },
  m_heading:{
    paddingTop:50,
    paddingBottom:20,
    color:"#FFFF",
    fontSize:30,
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
  inputContainer:{
    marginHorizontal:20,
    marginVertical:30,
  }
  })
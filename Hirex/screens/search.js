import React, {Component} from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import firebase,{db} from "../config";

export default class App extends Component {
  state={
    data:'',
  }
  componentDidMount = () =>{
  
    var newArray = [];
  
    firebase.firestore()
    .collection('details')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      
      querySnapshot.forEach(documentSnapshot => {
        newArray.push(documentSnapshot.data());
      });
  
    }).then(testing=>{
      console.log('New Array Push is =', newArray);
      this.setState({data:newArray});
    });
  
  
      // this.setState({data:[]});
  
  
    }
  render(){
  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", height: "100%" }}>
      <ScrollView>
      <View style={styles.sh_layout}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:70,marginBottom:50,backgroundColor:'#0679FF',borderRadius:12,marginHorizontal:30,padding:10}}>
          <Pressable onPress={() => this.props.navigation.navigate('Dashboard')} style={{alignItems:'center',justifyContent:'center',padding:20}}><Image source={require("../assets/back.png")}/></Pressable>
          <Text style={{marginLeft:70,color:"#FFFF",fontSize:20,fontWeight:'bold',padding:20}}>Looking for Jobs</Text>
        </View>
        <View style={styles.d_container1}>
        <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.d_comapnies}>
            <Image style={styles.d_image}/>
            <View style={styles.d_desc}>
              <Text style={styles.d_company}>{item.name}</Text>
              <Text style={styles.d_job}>{item.work}</Text>
            </View>
            <Image source={require("../assets/arrow.png")} style={styles.d_arrow}/>
          </View>
        )}
      />
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
}

const styles = StyleSheet.create({
  sh_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
  },
  d_image:{
    backgroundColor:'white',
    borderRadius:12,
    height:60,
    width:60,
    alignSelf:'flex-start'
},
d_container1:{
  backgroundColor:'#0679FF',
  borderRadius:12,
  marginHorizontal:30,
  paddingHorizontal:20,
  paddingTop:20,
  paddingBottom:40,
},
d_comapnies:{
    flexDirection:'row',
    marginVertical:10,
    
},
d_desc:{
    alignSelf:'center',
    marginHorizontal:30,
},
d_company:{
    color:'white',
    fontWeight:'bold',
    fontSize:15,
},
d_job:{
    color:'white',
    fontWeight:'100'

},
d_arrow:{
    alignSelf:'center',
    marginHorizontal:30,
},
});



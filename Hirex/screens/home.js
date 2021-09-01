import React from 'react';
import { Text, TextInput, View, SafeAreaView, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';


const Home = () => {
    return(
        <SafeAreaView style={{backgroundColor:"#EEEE",height:"100%"}}>
            <View style={styles.h_layout}>
                <View style={styles.h_text}>
                    <Text style={styles.h_heading}>Hire<Text style={styles.h_blue}>x</Text></Text>
                    <Text style={styles.h_stext}>Simplified Work Finding</Text>
                </View>
                <Image source={require('../assets/remote-team.png')} style={styles.h_image} />
                <View style={styles.h_buttons}>
                    <Pressable style={styles.h_login}><Text style={{color:"#FFFF"}}>Login</Text></Pressable>
                    <Pressable style={styles.h_signup}><Text style={{color:"#FFFF"}}>Create a new account</Text></Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    h_layout: {
        flexDirection:'column',
        justifyContent:"space-around", 
        
    },
    h_blue:{
        color:'#0679FF',
    },
    h_heading:{
        fontSize:40,
        fontWeight:'bold',
        
    },
    h_text:{
        marginHorizontal:25,
        marginVertical:100,
    },
    h_buttons:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical:60,
    },
    h_login:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0679FF',
        paddingVertical:15,
        paddingHorizontal:130,
        borderRadius:20,
        marginVertical:20,
    },
    h_signup:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0679FF',
        paddingVertical:15,
        paddingHorizontal:76,
        borderRadius:20,
    },
    h_image:{
        height:250,
        width:250,
        alignSelf:'center',
    }
});

export default Home
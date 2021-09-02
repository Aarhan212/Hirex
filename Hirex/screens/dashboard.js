import React from 'react';
import { Text, TextInput, View, SafeAreaView, Image, StyleSheet, Pressable, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = () => {
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.d_layout}>
                <View style={styles.d_text}>
                    <Text style={styles.d_hey}>Hey Devansh,</Text>
                    <Text style={styles.d_welcome}>Welcome back!</Text>
                </View>
                <View style={styles.d_container1}>
                    <Text style={{color:"white",fontWeight:'bold',marginBottom:30,fontSize:18,marginHorizontal:10}} >Your skills are in demand!</Text>
                    <View style={styles.d_comapnies}>
                        <Image style={styles.d_image}/>
                        <View style={styles.d_desc}>
                            <Text style={styles.d_company}>Techbud</Text>
                            <Text style={styles.d_job}>web developer</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.d_arrow}/>
                    </View>
                    <View style={styles.d_comapnies}>
                        <Image style={styles.d_image}/>
                        <View style={styles.d_desc}>
                            <Text style={styles.d_company}>Techbud</Text>
                            <Text style={styles.d_job}>web developer</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.d_arrow}/>
                    </View>
                    <View style={styles.d_comapnies}>
                        <Image style={styles.d_image}/>
                        <View style={styles.d_desc}>
                            <Text style={styles.d_company}>Techbud</Text>
                            <Text style={styles.d_job}>web developer</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.d_arrow}/>
                    </View>
                </View>
                <View style={styles.d_skills}>
                    <Text style={{color:"black",fontWeight:'bold',marginBottom:30,fontSize:18,marginHorizontal:10}} >These skills are trending!</Text>
                    <View style={styles.d_lang}>
                        <Image style={styles.d_image} source={require("../assets/JS.png")}/>
                        <View style={{borderBottomColor: 'blue',borderBottomWidth: 6,width:150,alignSelf:'center',marginLeft:60,borderRadius:30}}/>
                    </View>
                    <View style={styles.d_lang}>
                        <Image style={styles.d_image} source={require("../assets/python.png")}/>
                        <View style={{borderBottomColor: 'blue',borderBottomWidth: 6,width:80,alignSelf:'center',marginLeft:60,borderRadius:30}}/>
                    </View>
                    <View style={styles.d_lang}>
                        <Image style={styles.d_image} source={require("../assets/c.png")}/>
                        <View style={{borderBottomColor: 'blue',borderBottomWidth: 6,width:100,alignSelf:'center',marginLeft:60,borderRadius:30}}/>
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    d_layout:{
        flexDirection:'column',
    },
    d_text:{
        marginTop:100,
        marginBottom:50,
        marginHorizontal:30,
    },
    d_hey:{
    fontSize:20,
    },
    d_welcome:{
        fontSize:35,
        fontWeight:'bold',
    },
    d_container1:{
        backgroundColor:"#0679FF",
        borderRadius:12,
        marginHorizontal:30,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:40,
    },
    d_image:{
        backgroundColor:'white',
        borderRadius:12,
        height:60,
        width:60,
    },
    d_comapnies:{
        flexDirection:'row',
        marginVertical:10,
        alignSelf:'center'
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
    d_skills:{
        borderRadius:12,
        marginVertical:50,
        marginHorizontal:30,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:40,
    },
    d_lang:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:15,
    }
})


export default Dashboard
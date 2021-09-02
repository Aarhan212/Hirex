import React from 'react';
import { Text, TextInput, View, SafeAreaView, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

const Dashboard = () => {
    return(
        <SafeAreaView>
            <View style={styles.d_layout}>
                <View style={styles.d_text}>
                    <Text style={styles.d_hey}>Hey Devansh,</Text>
                    <Text style={styles.d_welcome}>Welcome back!</Text>
                </View>
                <View style={styles.d_container1}>
                    <View style={styles.d_comapnies}>

                    </View>
                    <View style={styles.d_comapnies}>
                        
                    </View>
                    <View style={styles.d_comapnies}>
                        
                    </View>
                </View>
                <View style={styles.d_skills}>
                    <View style={styles.d_lang}>

                    </View>
                    <View style={styles.d_lang}>

                    </View>
                    <View style={styles.d_lang}>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    d_layout:{
        flexDirection:'column',
    },

})

export default Dashboard
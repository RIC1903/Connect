import React from 'react';
import { View, Text, FlatList,TextInput,StyleSheet, ScrollView,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function ChatScreen(props){

    return(
       
        <View style={styles.container}>
         
            <View style={styles.header}>
                <MaterialCommunityIcons name="arrow-left" color={'white'} size={25} style={{alignSelf:'center'}} onPress={()=>props.navigation.goBack()}/>
                <View style={{flex:1,flexDirection:'column',paddingHorizontal:10,alignSelf:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'800',color:'white'}}>John Doe</Text>
                    <Text style={{fontSize:14,color:'white'}}>Online</Text>
                </View>
            </View>
            <ScrollView style={styles.chatscreen}>
                <View style={styles.chatcard}>
                    <Text style={{fontSize:11, color:'#fafafa'}}>09:00</Text>
                    <Text style={{fontSize:16, color:'white', fontWeight:'500'}}>Hello bro how are you.</Text>
                </View>
                <View style={[styles.chatcard,{alignSelf:'flex-end',backgroundColor:'white'}]}>
                    <Text style={{fontSize:11, color:'#494949'}}>09:00</Text>
                    <Text style={{fontSize:16, color:'black', fontWeight:'500'}}>I'm good mate. WBU?</Text>
                </View>
                <View style={styles.chatcard}>
                    <Text style={{fontSize:11, color:'#fafafa'}}>09:00</Text>
                    <Text style={{fontSize:16, color:'white', fontWeight:'500'}}>Nothing much man</Text>
                </View>
                <View style={[styles.chatcard,{alignSelf:'flex-end',backgroundColor:'white'}]}>
                    <Text style={{fontSize:11, color:'#494949'}}>09:00</Text>
                    <Text style={{fontSize:16, color:'black', fontWeight:'500'}}>Great dude. We shall catch up soon. When are you free?</Text>
                </View>
                
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    placeholderTextColor="lightgray"
                />
                 <MaterialCommunityIcons name="send" color={'black'} size={25} style={{alignSelf:'center'}}/>
            </View>
            </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        minHeight: 50,
        flexDirection: 'row',
        backgroundColor:'#1976d2',
        
        paddingHorizontal: 10,
    },
    chatscreen: {
       
        padding:10,
        backgroundColor:'#eceff1'
    },
    footer: {
        height: 55,
        minHeight: 50,
        width: '95%',
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingHorizontal: 5,
        marginBottom: 15
    },
    chatcard: {
        flexDirection:'column',
        borderRadius:10,
        backgroundColor:'#1976d2',
        maxWidth:'70%',
        padding: 8,
        marginBottom:10
    },
    input: {
        height: '80%',
        width: '87%',
        padding: 10,
        alignSelf:'center',
        marginHorizontal:10,
        color: 'black',
        fontSize: 18
      },
    
})
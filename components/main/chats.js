import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button, TouchableOpacity } from 'react-native'

// import firebase from 'firebase'
// require('firebase/firestore')
// import { connect } from 'react-redux'

export default function Chats(props) {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     if (props.usersFollowingLoaded == props.following.length && props.following.length !== 0) {
    //         props.feed.sort(function (x, y) {
    //             return x.creation - y.creation;
    //         })
    //         setPosts(props.feed);
    //     }
    //     console.log(posts)

    // }, [props.usersFollowingLoaded, props.feed])

    return (
        <View style={styles.container}>
        
        <TouchableOpacity style={styles.chat_card}  onPress={() => props.navigation.navigate('ChatScreen')}>
            <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>John Doe</Text>
                <Text style={{fontSize:14}}>Hey how are you man. Let's catch up later. Call me..</Text>
            </View>
            <Text style={{color:'green'}}>Online</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.chat_card}>
            <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>John Doe</Text>
                <Text style={{fontSize:14}}>Hey how are you man. Let's catch up later. Call me..</Text>
            </View>
            <Text style={{color:'green'}}>Online</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.chat_card}>
            <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>John Doe</Text>
                <Text style={{fontSize:14}}>Hey how are you man. Let's catch up later. Call me..</Text>
            </View>
            <Text style={{color:'green'}}>Online</Text>
         </TouchableOpacity><TouchableOpacity style={styles.chat_card}>
            <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>John Doe</Text>
                <Text style={{fontSize:14}}>Hey how are you man. Let's catch up later. Call me..</Text>
            </View>
            <Text style={{color:'green'}}>Online</Text>
         </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chat_card: {
        flex:1,
        flexDirection:'row',
        padding: 10,
        borderColor:'gray',
        borderWidth: 0.2,
        height:60,
        maxHeight:65
    }
})


import React,{Component}  from 'react';
import {Text,View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import firebase from 'firebase';

const Tab = createMaterialBottomTabNavigator();


const EmptyScreen = () => {
    return (null)
}

import Chats  from './main/chats';
export default class Main extends Component {
    // componentDidMount() {
    //     this.props.clearData();
    //     this.props.fetchUser();
    //     this.props.fetchUserPosts();
    //     this.props.fetchUserFollowing();
    // }
    render() {
        return (
            // <View><Text>Yo</Text>
            <Tab.Navigator >
                
                <Tab.Screen name="Chats" title="Chats" component={Chats}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="message" color={color} size={26} />
                        ),
                    }} />
                {/* <Tab.Screen name="Feed" component={FeedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Profile", {uid: firebase.auth().currentUser.uid})
                    }})}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        ),
                    }} /> */}
            </Tab.Navigator>
            // </View>
        )
    }
}
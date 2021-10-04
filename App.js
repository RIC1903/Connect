import React, { Component } from 'react';

import { View, Text } from 'react-native'

// import * as firebase from 'firebase'

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './redux/reducers'
// import thunk from 'redux-thunk'
// const store = createStore(rootReducer, applyMiddleware(thunk))



// const firebaseConfig = {
//   apiKey: "AIzaSyAGV2HfQSQtFCjD9xbu4RDUiTewa7is8O8",
//   authDomain: "instagram-dev-8b9c4.firebaseapp.com",
//   databaseURL: "https://instagram-dev-8b9c4.firebaseio.com",
//   projectId: "instagram-dev-8b9c4",
//   storageBucket: "instagram-dev-8b9c4.appspot.com",
//   messagingSenderId: "386631361638",
//   appId: "1:386631361638:web:d25aa4b5ec7911c57679a7",
//   measurementId: "G-GQYEJ3XWBV"
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
// }

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/landing'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Main from './components/main'
import ChatScreen from './components/main/chatScreen';


const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loggedIn: false,
      loaded: false,
    }
  }

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (!user) {
  //       this.setState({
  //         loggedIn: false,
  //         loaded: true,
  //       })
  //     } else {
  //       this.setState({
  //         loggedIn: true,
  //         loaded: true,
  //       })
  //     }
  //   })
  // }
  render() {
    const { loggedIn, loaded } = this.state;
    if (loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={Landing}  options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{
          title: 'Connect',
          headerStyle: {
            backgroundColor: '#1976d2',
            height:60
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}/>
            <Stack.Screen name="ChatScreen" component={ChatScreen} navigation={this.props.navigation} options={{ headerShown: false }} />
            
          </Stack.Navigator>
        </NavigationContainer>
      
    )
  }
}

export default App
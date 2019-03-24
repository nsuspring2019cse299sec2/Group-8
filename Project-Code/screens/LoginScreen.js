import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
 } from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';
import MenuButton from '../components/MenuButton'


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        navigation.navigate('Main');
      }
    });
  }

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
          <View style={styles.logoContainer} >
            <MenuButton navigation={this.props.navigation} />
         
            <Image
            style={styles.logo}
            source={require('../assets/user.jpg')}
             />
            <Text style={styles.title} >Create an account below</Text>   
          </View> 
          
          <View style={styles.formContainer}>
          
          </View>
          
          <View style={styles.textContainer}>
           
            <TextInput 
              placeholder="Enter your E-mail Address"
              placeholderTextColor='rgb(64, 64, 64)'
              
              style={styles.textInput}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
            />
          <TextInput 
            placeholder="Enter your Password"
            placeholderTextColor='rgb(64, 64, 64)'
            secureTextEntry
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonContainer}
            
           
            onPress={() => this.signIn()}
          >
            
              <Text style={styles.buttonText}>Log In </Text>
            
          </TouchableOpacity>


          <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => this.createUser()}
          >
            <View>
              <Text>Create New User</Text>
            </View>
          </TouchableOpacity>
        
        </View>
      </View>
      </KeyboardAvoidingView>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  textContainer: {
       padding: 20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start'
    
  },
  title:{
    color:'#000000'
  },
  
  textInput:{
      height: 50,
      backgroundColor: 'rgb(255, 204, 204)',
      marginBottom: 20,
      color: '#000000',
      paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: '700'
  },
  logo:{
    width: 100,
    height: 100
  },

  text: {
    fontSize: 30,
    
  }
});

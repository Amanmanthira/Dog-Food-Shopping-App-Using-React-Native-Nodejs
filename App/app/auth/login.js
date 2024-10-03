/*   DEVELOPED BY AMAN MANTHIRA
     SOFTWARE ENGINEER @ AMECTAR
     CONTACT = +94741800901
 */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useRouter } from 'expo-router'; // Correct import
import { Link } from 'expo-router'; // Correct import for Link
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const router = useRouter(); // Use router from expo-router

 const handleLogin = async () => {
  try {
    const response = await axios.post('http://192.168.8.195:5000/api/auth/login', { email, password });
    const { token } = response.data;

    if (token) {
      await AsyncStorage.setItem('userToken', token); // Save token to AsyncStorage
      Alert.alert('Success', 'Login successful');
      router.push('/home'); // Navigate to home or the desired route
    } else {
      Alert.alert('Error', 'Token not received');
    }
  } catch (error) {
    Alert.alert('Error', 'Login failed');
    console.error(error);
  }
};

  const navigateToSignUp = () => {
    navigation.navigate('signup'); // Ensure 'SignUp' is the correct route name
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login.jpg')} // Local image path
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)']}
          style={styles.gradient}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ddd"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ddd"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>            
              <Link href="./signup">
                <Text style={styles.footerLink}>Signup</Text>
              </Link>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  footerText: {
    color: '#FFF',
  },
  footerLink: {
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});

export default Login;

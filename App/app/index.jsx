/*   DEVELOPED BY AMAN MANTHIRA
     SOFTWARE ENGINEER @ AMECTAR
     CONTACT - +94741800901
 */
import React from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';  
import { LinearGradient } from 'expo-linear-gradient';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFDDC1', '#FFAB91']}
        style={styles.gradient}
      >
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/portrait-dog-holographic-lighting_712837-263.jpg' }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>PupPlate</Text>
          <Text style={styles.subtitle}>Premium Dog Food Delivered to Your Doorstep</Text>
          <Link href="./auth/login" style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </Link>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 49,
    fontWeight: '900',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    alignItems: 'center',  // Center text in the button
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Index;

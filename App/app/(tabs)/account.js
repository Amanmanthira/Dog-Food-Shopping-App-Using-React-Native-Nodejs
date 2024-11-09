import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal'; // Import react-native-modal

const AccountScreen = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (!storedToken) {
          Alert.alert('Error', 'No token found');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://10.0.50.205:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${storedToken}` }
        });

        setUser(response.data);
        setFirstName(response.data.firstName || '');
        setLastName(response.data.lastName || '');
        setEmail(response.data.email || '');
      } catch (error) {
        setError('Unable to fetch user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (!storedToken) {
        Alert.alert('Error', 'No token found');
        return;
      }

      await axios.put('http://192.168.8.195:5000/api/auth/user', {
        firstName,
        lastName,
        email
      }, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      setIsModalVisible(true); // Show the success modal
    } catch (error) {
      Alert.alert('Error', 'Unable to update user details');
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#3498db" style={styles.center} />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png' }} // Replace with a real profile image URL or user avatar
            style={styles.profileImage}
          />
          <Text style={styles.headerTitle}>Account Details</Text>
        </View>
      </LinearGradient>

      <View style={styles.card}>
        {error && <Text style={styles.error}>{error}</Text>}
        {user ? (
          <>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={styles.input}
              placeholder="Enter your first name"
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={styles.input}
              placeholder="Enter your last name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.noDataText}>No user data available</Text>
        )}
      </View>

      <Modal
        isVisible={isModalVisible}
        backdropColor="rgba(0,0,0,0.5)"
        backdropOpacity={0.5}
        onBackdropPress={closeModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Success!</Text>
          <Text style={styles.modalText}>Your details have been updated successfully.</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
    marginBottom: 10,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  noDataText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#27ae60',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountScreen;

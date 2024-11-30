// src/components/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import './styles/loginStyle.css';
const predefinedUser  = {
  username: 'Cleuton',
  password: '12345',
};

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === predefinedUser .username && password === predefinedUser .password) {
      navigation.navigate('Estoque'); // Navigate to the Stock screen
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10, width: '30%' , alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 10, width: '30%' , alignSelf: 'center' }}
      />
      <Button title="Login" onPress={handleLogin} className="btn-login"/>
    </View>
  );
}
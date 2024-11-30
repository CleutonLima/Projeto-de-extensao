import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const users = []; // In-memory user storage

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    users.push({ name, email, password });
    Alert.alert('User  Registered!', 'You can now log in.');
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
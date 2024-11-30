import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, FlatList } from 'react-native';
import { Button, Card } from 'react-native-elements';

const Inventory = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [inventory, setInventory] = useState([]);

  const addItem = () => {
    if (!itemName || !itemQuantity) {
      Alert.alert('Error', 'Please enter item name and quantity.');
      return;
    }

    const newItem = { id: Date.now().toString(), name: itemName, quantity: parseInt(itemQuantity) };
    setInventory([...inventory, newItem]);
    setItemName('');
    setItemQuantity('');
    Alert.alert('Item Added!', `${itemName} has been added to inventory.`);
  };

  const updateItem = (id) => {
    const updatedInventory = inventory.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }; // Just an example of updating quantity
      }
      return item;
    });
    setInventory(updatedInventory);
    Alert.alert('Item Updated!', `Quantity of ${id} has been updated.`);
  };

  const deleteItem = (id) => {
    const updatedInventory = inventory.filter(item => item.id !== id);
    setInventory(updatedInventory);
    Alert.alert('Item Deleted!', 'The item has been removed from inventory.');
  };

  const renderItem = ({ item }) => (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <Text>Quantity: {item.quantity}</Text>
      <Button title="Update" onPress={() => updateItem(item.id)} />
      <Button title="Delete" onPress={() => deleteItem(item.id)} buttonStyle={{ backgroundColor: 'red' }} />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventory Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={itemQuantity}
        onChangeText={setItemQuantity}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
});

export default Inventory;
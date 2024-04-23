import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const app = () => {

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productValue, setProductValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const addProduct = () => {
    if (productName && productQuantity) {
      const newProduct = { name: productName, quantity: productQuantity };
      if (isEditing) {
       

        const updatedProducts = [...products];
        updatedProducts[editIndex] = newProduct;
        setProducts(updatedProducts);
        setIsEditing(false);
        setEditIndex(null);
      } else {
       

        setProducts([...products, newProduct]);
      }
    

      setProductName('');
      setProductQuantity('');
    }
  };

  
  const editProduct = (index) => {
    setProductName(products[index].name);
    setProductQuantity(products[index].quantity);
    setIsEditing(true);
    setEditIndex(index);
  };

  
  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de Produtos</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={productQuantity}
          onChangeText={setProductQuantity}
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          placeholder="Valor"
          value={productValue}
          onChangeText={setProductValue}
        />
        <Button title={isEditing ? 'Salvar Edição' : 'Adicionar Produto'} onPress={addProduct} />
      </View>
      <FlatList
        style={styles.productList}
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.productItem}>
            <Text>{item.name} - {item.quantity}</Text>
            <View style={styles.buttonGroup}>
              <Button title="Editar" onPress={() => editProduct(index)} />
              <Button title="Excluir" onPress={() => deleteProduct(index)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});

export default App;

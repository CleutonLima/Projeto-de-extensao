// src/components/Stock.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import instaLoja from '../../assets/instaLoja.png';
import { Image } from 'react-native';
 

const Stock = () => {
  // Dados do estoque com itens em português
  const stockData = [
    { id: 1, produto: 'Camiseta', tamanho: 'P', cor: 'Vermelho', preco: 29.90, quantidadeEmEstoque: 10, categoria: 'Masculina' },
    { id: 2, produto: 'Camiseta', tamanho: 'M', cor: 'Azul', preco: 32.90, quantidadeEmEstoque: 15, categoria: 'Feminina' },
    { id: 3, produto: 'Calça Jeans', tamanho: 'G', cor: 'Preto', preco: 79.90, quantidadeEmEstoque: 20, categoria: 'Masculina' },
    { id: 4, produto: 'Vestido', tamanho: 'GG', cor: 'Preto', preco: 89.90, quantidadeEmEstoque: 5, categoria: 'Feminina' },
    { id: 5, produto: 'Camisa', tamanho: 'P', cor: 'Branco', preco: 49.90, quantidadeEmEstoque: 8, categoria: 'Masculina' },
    { id: 6, produto: 'Blusa', tamanho: 'M', cor: 'Rosa', preco: 59.90, quantidadeEmEstoque: 12, categoria: 'Feminina' },
    { id: 7, produto: 'Jaqueta', tamanho: 'G', cor: 'Azul', preco: 129.90, quantidadeEmEstoque: 3, categoria: 'Masculina' },
    { id: 8, produto: 'Bermuda', tamanho: 'M', cor: 'Cinza', preco: 39.90, quantidadeEmEstoque: 6, categoria: 'Masculina' },
    { id: 9, produto: 'Saia', tamanho: 'G', cor: 'Preto', preco: 59.90, quantidadeEmEstoque: 4, categoria: 'Feminina' },
    { id: 10, produto: 'Calça Social', tamanho: 'GG', cor: 'Azul', preco: 99.90, quantidadeEmEstoque: 7, categoria: 'Feminina' },
    // Adicione mais itens conforme necessário...
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={instaLoja} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        
        <Text style={styles.itemText}>Product: {item.produto}</Text>
        <Text style={styles.itemText}>Size: {item.tamanho}</Text>
        <Text style={styles.itemText}>Color: {item.cor}</Text>
        <Text style={styles.itemText}>
          Price: R$ {item.preco ? item.preco.toFixed(2) : 'N/A'}
        </Text>
        <Text style={styles.itemText}>Stock Quantity: {item.quantidadeEmEstoque}</Text>
        <Text style={styles.itemText}>Category: {item.categoria}</Text>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estoque da Loja de Roupas</Text>
      <FlatList
        data={stockData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginleft: 50,
  },
  itemDetails: {
    flex: 1,
  },
});

export default Stock;

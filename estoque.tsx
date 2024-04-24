import { FlatList, Text, View } from "react-native";

const estoque = () => {
    const products = [
      { id: 1, name: 'Casaco azul', quantity: 20 },
      { id: 2, name: 'Calça Jeans', quantity: 15 },
      { id: 3, name: 'Vestido florido', quantity: 10 },
      { id: 4, name: 'Saia preta curta', quantity: 12 },
      { id: 5, name: 'Camiseta preta', quantity: 8 },
    ];
  
    return (
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20,}}>
        <Text style={{ fontSize: 24, marginBottom: 20,}}>Estoque de Produtos</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#008080', paddingVertical: 10, }}>
              <Text>{item.name}</Text>
              <Text>Quantidade: {item.quantity}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  

import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';


function Cadastro({ navigation }) {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleCadastro = () => {

    console.log('Cadastro realizado!');
  
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

export default App;
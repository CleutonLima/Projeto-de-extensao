import * as React from 'react';

const Stack = createStackNavigator();

function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={cadastro.jsx} />
        <Stack.Screen name="Login" component={login.jsx} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

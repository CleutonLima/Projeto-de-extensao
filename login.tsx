import { Link } from 'expo-router';
import { Button, Text, TextInput, View } from "react-native";

export default function Login(){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center"   }}>
            <Text style={{justifyContent: "center", alignItems: "center", fontSize: 44, fontWeight: "500", color: "black"}}> 
                Login 
            </Text>

            <TextInput style={{width: '100%', height: 40, borderWidth: 1, borderColor: '#008080', borderRadius: 5, paddingHorizontal: 10,marginBottom: 10}}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput style={{width: '100%', height: 40, borderWidth: 1, borderColor: '	#008080', borderRadius: 5, paddingHorizontal: 10,marginBottom: 10}}
        placeholder="Password"
        secureTextEntry
      />
     

            <Link href="/estoque" asChild> </Link>
            <Button title = "Entrar"/>

        </View>
    )
}
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabRoutesLayout( ){
    return (
        <Tabs> 
            <Tabs.Screen
                name="cadastro"
                options={{
                    title: "Cadastro usuário",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="person" size={size} color={color}> </MaterialIcons>)
                }}
                />

        <Tabs> 
            <Tabs.Screen
                name="login"
                options={{
                    title: "Login usuário",
                    tabBarIcon: ({size, color}) => (
                    <MaterialIcons name="home" size={size} color={color}> </MaterialIcons>)
                }}/>
                 <Tabs.Screen
                name="estoque"
                options={{
                    title: "Estoque produtos",
                    tabBarIcon: ({size, color}) => (
                    <MaterialIcons name="settings" size={size} color={color}> </MaterialIcons>)
                }}/>
        </Tabs>




        </Tabs>
        
    )
}
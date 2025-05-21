import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Telas/Login";

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name=  "Tela Inicial" component= {TelaInicial} />
            <Drawer.Screen name= "Adicionar Tarefas" component= {AddTarefas} />
            <Drawer.Screen name= "Detalhes" component= {Detalhes} />
            <Drawer.Screen name= "Configurações" component={Config} />

        </Drawer.Navigator>
    );
}

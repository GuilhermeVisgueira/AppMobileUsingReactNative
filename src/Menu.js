import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./components/Login";

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name= "Adicionar Tarefas" component= {ADDTAREFAS} />
            <Drawer.Screen name= "tarefas" component= {Tarefas} />
       
        </Drawer.Navigator>
    );
}

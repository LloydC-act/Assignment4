import { Drawer } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer>
            <Drawer.Screen
                name='(tabs)'
                options={{
                    drawerLabel: 'none',
                    title: 'Home',
                    drawerIcon: () => <MaterialCommunityIcons name="home" size={24}/>,
                }}
            />
            <Drawer.Screen
                name='Settings'
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: () => <MaterialCommunityIcons name="cog" size={24}/>,
                }}
            />

        </Drawer>
    </GestureHandlerRootView>
  )
}
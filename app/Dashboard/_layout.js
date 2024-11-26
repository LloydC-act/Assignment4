import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#black',
            tabBarLabelstyle: {
                fontSize: 12
            },
            TabBarStyle:{
                margin: 10,
                borderRadius: 10,
            },
            tabBarShowLabel: true
        }}
    
    >
        <Tabs.Screen name='index' 
            options={{
                title: 'Profile',
                tabBarIcon: () => <MaterialCommunityIcons name='account' size={24} color='black'/>
            
            }}
        />
        <Tabs.Screen name='home' 
            options={{
                title: 'Home',
                tabBarIcon: () => <MaterialCommunityIcons name='home' size={24} color='black'/>
            }}
        />
        <Tabs.Screen name='settings' 
            options={{
                title: 'Settings',
                tabBarIcon: () => <MaterialCommunityIcons name='cog' size={24} color='black'/>
            }}
        />
    </Tabs>
  )
}

export default DashboardLayout
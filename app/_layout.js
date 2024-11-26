import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
          headerShown: false
        }}/>
        <Stack.Screen name="signup" options={{title: 'Register'}}/>
        <Stack.Screen name="recover" options={{title: 'Forgot Password'}}/>
        <Stack.Screen name='dashboard' 
          options={{
            title: 'Dashboard',
            headerShown: false


        }}/>
    </Stack>
  )
}

export default RootLayout;
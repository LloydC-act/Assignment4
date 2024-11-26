import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router'

const LogIn = () => {

    const route = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.xYQHlui4zx_7Gfh8DQrUFgHaHa&pid=Api&P=0&h=180' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          style={[styles.input, { paddingLeft: 40 }]}
          placeholder="Email address or phone number"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          style={[styles.input, { paddingLeft: 40 }]}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => route.push('Dashboard')}     
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => route.push('signup')}
      >
        <Text style={styles.link}>Create New Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => route.push('recover')}
      >
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  loginButton: {
    backgroundColor: '#4267B2',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: '#4267B2',
    marginVertical: 5,
  },
});

export default LogIn;
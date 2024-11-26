import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const SignUp = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.nameContainer}>
        <TextInput
          style={[styles.input, styles.nameInput]}
          placeholder="First Name"
        />
        <TextInput
          style={[styles.input, styles.nameInput]}
          placeholder="Last Name"
        />
      </View>

      <TextInput
        style={[styles.input, styles.emailInput]}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Confirm Password"
        secureTextEntry
      />

      <Button title="Sign Up" onPress={() => router.push('profile')} />

      <TouchableOpacity style={styles.linkContainer} onPress={() => router.push('index')}>
        <Text style={styles.linkText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  nameInput: {
    width: '48%',
  },
  emailInput: {
    height: 50,
  },
  passwordInput: {
    height: 50,
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
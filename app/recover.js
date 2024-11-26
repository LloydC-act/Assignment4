import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const ForgotPassPage = () => {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your account</Text>
      <Text style={styles.subtitle}>
        Please enter your email or mobile number to search for your account.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email or mobile number"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.push('index')}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={() => router.push('profile')}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 12,
    marginRight: 8,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  searchButton: {
    flex: 1,
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 12,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ForgotPassPage;
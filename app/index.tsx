import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  const handlePlay = () => {
    router.push('/mainscreen');
  };

  const handleSettings = () => {
  };

  const handleProfile = () => {
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20
    }}>
      
      {/* LOGOTIPAS */}
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
          resizeMode: 'contain'
        }}
      />

      {/* PAVADINIMAS */}
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40 }}>
        LangQuest
      </Text>

      {/* Mygtukai */}
      <TouchableOpacity
        onPress={handlePlay}
        style={{
          backgroundColor: '#4CAF50',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          marginBottom: 15,
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Žaisti</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSettings}
        style={{
          backgroundColor: '#2196F3',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          marginBottom: 15,
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Nustatymai</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleProfile}
        style={{
          backgroundColor: '#9C27B0',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Profilis</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Home;

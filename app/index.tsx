import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  const handlePlay = () => {
    // Naviguojame į žaidimo ekraną (pvz. į /game)
    router.push('/mainscreen');
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>
        LangQuest
      </Text>
      <TouchableOpacity
        onPress={handlePlay}
        style={{
          backgroundColor: '#4CAF50',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Žaisti</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

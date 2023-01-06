import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Informacoes from '../components/Informacoes';
import tw from 'twrnc';
import BotaoAtualizar from '../components/BotaoAtualizar';

const Inicial = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    async function getPerson() {
      const response = await axios.get('https://randomuser.me/api');
      setPerson(response.data.results);
    }

    getPerson();
  }, []);

  return (
    <SafeAreaView>
      <Text style={tw`mt-3 text-3xl text-gray-200 text-center font-bold`}>
        Perfil
      </Text>

      <FlatList
        data={person}
        renderItem={({ item }) => <Informacoes person={item} />}
        keyExtractor={(p) => p.nat}
      />

      <BotaoAtualizar />
    </SafeAreaView>
  );
};

export default Inicial;

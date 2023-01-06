import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Localizacao = ({ route }) => {
  const { person } = route.params;

  return (
    <SafeAreaView>
      <Text style={tw`mt-3 text-3xl text-gray-200 text-center font-bold`}>
        Endereço
      </Text>

      <View style={tw`m-2 p-4 bg-neutral-50 rounded-xl`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>Rua</Text>
          <Text style={tw`text-lg text-stone-900`}>
            {person.location.street.name}, {person.location.street.number}
          </Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>Cidade</Text>
          <Text style={tw`text-lg text-stone-900`}>{person.location.city}</Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>Estado</Text>
          <Text style={tw`text-lg text-stone-900`}>
            {person.location.state}
          </Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>País</Text>
          <Text style={tw`text-lg text-stone-900`}>
            {person.location.country}
          </Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>
            Código Postal
          </Text>
          <Text style={tw`text-lg text-stone-900`}>
            {person.location.postcode}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Localizacao;

import { useNavigation } from '@react-navigation/native';
import { React } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Informacoes = ({ person }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`m-2 p-4 bg-neutral-50 rounded-xl`}>
      {/* Imagem*/}
      <View style={tw`flex items-center`}>
        <Image
          style={tw`w-40 h-40 rounded-full border-solid border-4 border-neutral-400`}
          source={{ uri: person.picture.large }}
        />
      </View>

      <View style={tw`m-2 p-4`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-2xl text-stone-900 font-bold`}>
            {person.name.title} {person.name.first} {person.name.last}
          </Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>Gênero</Text>
          <Text style={tw`text-lg text-stone-900`}>{person.gender}</Text>
        </View>

        <View style={tw`p-2`}>
          <Text style={tw`text-base text-neutral-400 font-bold`}>Endereço</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Localizacao', { person })}
          >
            <Text style={tw`text-lg text-stone-900`}>
              {person.location.street.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Informacoes;

const styles = StyleSheet.create({});

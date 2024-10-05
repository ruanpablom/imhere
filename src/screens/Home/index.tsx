import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home(){
    const [participant, setParticipant] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);

    function handleAddParticipant(){
        if(participants.includes(participant)){
            return Alert.alert('Participante existe', 'Participante já adicionado')
        }

        setParticipants([...participants, participant]);
        setParticipant('');
    }

    function handleRemoveParticipant(name: string){
        Alert.alert('Remover participante', `Deseja remover ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                    Alert.alert("Deletado")
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipant}
                    value={participant}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddParticipant}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={participants} 
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={() => handleRemoveParticipant(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                    </Text>
                )}
            />
        </View>
    )
}
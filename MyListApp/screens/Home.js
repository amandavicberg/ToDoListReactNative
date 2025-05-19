import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HomeStyles from "../styles/HomeStyles";
import CustomInput from "../components/CustomInput";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [task, setTask] = useState(""); // tarefa nova
  const [tasks, setTasks] = useState([]); // lista de tarefa

  const addTask = () => {
    if (task.trim() === "") return; // evita tarefa vazia

    setTasks((prevTasks) => [
      ...prevTasks, // criando uma lista que contém todas as tarefas antigas (prevTasks), mais uma nova que acabamos de criar.
      { id: Date.now().toString(), title: task }, // objeto que representa uma tarefa, id único gerado pela hora atual em milissegundos, convertido para string — ajuda o React a identificar cada tarefa na lista.
    ]);
    setTask(""); // limpa input
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.title}>Lista de tarefas</Text>

        <CustomInput
          style={HomeStyles.input}
          placeholder="Nova tarefa"
          value={task}
          onChangeText={setTask}
        />

        <View>
          <TouchableOpacity
            style={HomeStyles.button}
            title="Adicionar"
            onPress={addTask}
            activeOpacity={0.8}
          >
            <Text style={HomeStyles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={HomeStyles.taskItem}>
                <Text style={HomeStyles.taskText}>{item.title}</Text>
              </View>
            )}
            ListEmptyComponent={
              <View style={HomeStyles.emptyContainer}>
                <Ionicons
                  name="document-text-outline"
                  style={HomeStyles.emptyIcon}
                />
                <Text style={HomeStyles.emptyText}>
                  Nenhuma tarefa adicionada
                </Text>
                <Text style={HomeStyles.emptySubText}>
                  Adicione algo para começar!
                </Text>
              </View>
            }
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

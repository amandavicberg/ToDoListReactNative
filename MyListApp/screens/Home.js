import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import HomeStyles from "../styles/HomeStyles";

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
    <SafeAreaView>
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.title}>Lista de tarefas</Text>

        <TextInput
          placeholder="Nova tarefa"
          value={task}
          onChangeText={setTask}
        />

        <Button style={HomeStyles.button} title="Adicionar" onPress={addTask} />
      </View>
    </SafeAreaView>
  );
}

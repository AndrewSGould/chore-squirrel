import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { db } from "../config";

let tasksRef = db.ref("/tasks");

export default class LeaderboardScreen extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    tasksRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let tasks = Object.values(data);
      this.setState({ tasks });
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          {this.state.tasks.length > 0 ? (
            <View style={styles.itemsList}>
              {this.state.tasks.map((task, index) => {
                return (
                  <View key={index}>
                    <Text style={styles.tasktext}>{task.name}</Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <Text>No items</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  itemsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tasktext: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

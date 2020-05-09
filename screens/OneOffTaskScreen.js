import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { db } from "../config";

let addItem = (item) => {
  db.ref("/tasks").push({
    name: item,
  });
};

export default class OneOffTaskScreen extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };

  handleSubmit = () => {
    addItem(this.state.name);
    alert("Item saved successfully");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} />
          <TouchableHighlight
            style={styles.button}
            underlayColor='white'
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

OneOffTaskScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 30,
  },
  oneOffTaskContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  OneOffTaskScreenFilename: {
    marginVertical: 7,
  },
  oneOffTaskText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
});

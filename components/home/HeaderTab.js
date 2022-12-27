import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

function HeaderTab(props) {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

export default HeaderTab;

const HeaderButton = (props) => (
  <TouchableOpacity
    style={styles.button(props.activeTab, props.text)}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={styles.text(props.activeTab, props.text)}>{props.text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: (activeTab, text) => ({
    backgroundColor: activeTab == text ? "black" : "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  }),
  text: (activeTab, text) => ({
    color: activeTab == text ? "white" : "black",
    fontWeight: "700",
  }),
});

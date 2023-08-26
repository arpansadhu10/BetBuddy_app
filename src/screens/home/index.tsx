import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomDoc, Screen } from "../../components";

export default function Home() {
  return (
    <Screen>
      <Text>Home</Text>
      <BottomDoc active="Home" />
    </Screen>
  );
}

const styles = StyleSheet.create({});

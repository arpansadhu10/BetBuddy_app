import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomDoc, Screen } from "../../components";

export default function Create() {
  return (
    <Screen>
      <Text>Create</Text>
      <BottomDoc active="Create" />
    </Screen>
  );
}

const styles = StyleSheet.create({});

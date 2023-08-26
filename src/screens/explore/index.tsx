import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomDoc, Screen } from "../../components";

export default function Explore() {
  return (
    <Screen>
      <Text>Explore</Text>
      <BottomDoc active="Explore" />
    </Screen>
  );
}

const styles = StyleSheet.create({});

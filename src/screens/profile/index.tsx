import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomDoc, Screen } from "../../components";

export default function Profile() {
  return (
    <Screen>
      <Text>Profile</Text>
      <BottomDoc active="Profile" />
    </Screen>
  );
}

const styles = StyleSheet.create({});

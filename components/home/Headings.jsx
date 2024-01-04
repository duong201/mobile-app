import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { COLOR } from "../../constants"

export default function Headings() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Headings</Text>
        <TouchableOpacity>
          <Ionicons name='grid' size={24} color={COLOR.second} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: COLOR.primary,
    fontWeight: "800",
    fontSize: 20,
  },
})


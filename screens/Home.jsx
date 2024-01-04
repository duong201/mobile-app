import React from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, Feather } from "@expo/vector-icons"
import { Carousel, Headings, ProductRow, Welcome } from "../components"

export default function Home() {
  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>
      <View style={styles.appBarStyle}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Da Nang - VN</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Feather name='shopping-cart' size={24} color='#1c6758' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "800",
  },
  appBarStyle: {
    marginHorizontal: 6,
    marginTop: 10,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
  },
  cartCount: {
    position: "absolute",
    bottom: 12,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c6758",
    zIndex: 10,
  },
  cartNumber: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
})

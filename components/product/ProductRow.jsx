import { View, Text, FlatList, StyleSheet } from "react-native"
import React from "react"
import ProductCard from "./ProductCard"

export default function ProductRow() {
  const products = [1, 2, 3, 4]

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard />}
        horizontal
        contentContainerStyle={{ columnGap: 12 }}
      />
      <Text>ProductRow</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
})

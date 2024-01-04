import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import React from "react"
import { COLOR } from "../../constants"

export default function ProductCard() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/damcvbtal/image/upload/v1702029993/ccdyimhzhasyr2j0kr6j.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Tên sản phẩm là như này này
          </Text>
          <Text style={styles.unit}>--1kg--</Text>
          <View style={styles.priceBox}>
            <Text style={styles.priceDiscount}>120.000</Text>
            <Text style={styles.price}>130.000</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    borderRadius: 8,
    backgroundColor: COLOR.white,
  },
  imageContainer: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: "cover",
  },
  details: {
    padding: 6,
    alignItems: "center",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
})

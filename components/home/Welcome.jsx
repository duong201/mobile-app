import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather
            name='search'
            size={24}
            color='#1c6758'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => navigation.navigate("search")}
            placeholder='Nhập tìm kiếm...'
          />
        </View>
        <TouchableOpacity>
          <Feather
            name='camera'
            size={24}
            color='#1c6758'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.welcomeTxt("red", 16)}>Flash Sale</Text>
      <Text style={styles.welcomeTxt("red", 0)}>Top Sale</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontSize: 30,
    fontWeight: "900",
    color: color,
    marginTop: top,
  }),
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef2e6",
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 8,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#eef2e6",
    marginRight: 12,
    borderRadius: 12,
  },
  searchInput: {
    fontWeight: "400",
    width: "100%",
    height: "100%",
  },
})


import { View, Text } from "react-native"
import React from "react"
import { Entypo, Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Carts, Products, Search } from "../screens"

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
    background: "#fff",
  },
}

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Entypo
                name='home'
                size={24}
                color={focused ? "#1c6758" : "#ccc"}
              />
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#1f8a70" }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Feather
                name='search'
                size={24}
                color={focused ? "#1c6758" : "#ccc"}
              />
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#1f8a70" }}>
                Tìm kiếm
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='cart'
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Entypo
                name='shopping-cart'
                size={24}
                color={focused ? "#1c6758" : "#ccc"}
              />
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#1f8a70" }}>
                Giỏ hàng
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

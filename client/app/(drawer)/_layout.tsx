import React from "react"
import { Drawer } from "expo-router/drawer"

export default function Layout() {
  return (
    <Drawer options={{
      headerShown: false
    }}>
      <Drawer.Screen name="index" options={{
        drawerLabel: "Home",
        title: "Home"
      }}/>
      <Drawer.Screen name="classrooms" options={{
      drawerLabel: "Classrooms",
      title: "Classrooms"
      }}/>
      <Drawer.Screen name="grades" options={{
      drawerLabel: "Grades",
      title: "Grades"
      }}/>
      <Drawer.Screen name="profile" options={{
        drawerLabel: "Profile",
        title: "Profile"
      }}/>
      <Drawer.Screen name="settings" options={{
        drawerLabel: "Settings",
        title: "Settings"
      }}/>
    </Drawer> 
  )
}

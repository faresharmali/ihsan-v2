import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,

} from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Title, Caption, Drawer } from "react-native-paper";
import {
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Icon } from "native-base";
import Logo from "../../assets/Logo3.png";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrawerContent(props) {
  let LoggedUser = useSelector((state) => state.Auth);
  const logout = async () => {
    await AsyncStorage.removeItem("LoggedUser");
    props.pageHandler(0);
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15, marginBottom: 30 }}>
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title style={styles.title}>جمعية إحسان</Title>
            <Caption style={styles.caption}>{LoggedUser.name}</Caption>
            <Caption style={styles.caption}> {LoggedUser.job}</Caption>
          </View>
          <Image source={Logo} style={styles.logo} />
        </View>
      </View>
      <Drawer.Section>
        <DrawerItem
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={ <FontAwesome name="user" size={24} color="black" />}
            />
          )}
          label="الملف الشخصي"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("UserProfile");
          }}
        />
       
        <DrawerItem
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialIcons name="home" />}
            />
          )}
          label="لوحة التحكم"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
        <DrawerItem
          label="معلومات عامة"
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialCommunityIcons name="folder-information" />}
            />
          )}
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("InformationSection");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialIcons name="admin-panel-settings" />}
            />
          )}
          label="الادارة"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Administration");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              style={styles.icon}
              size={6}
              as={<FontAwesome5 name="child" />}
            />
          )}
          label="قسم الأيتام"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("OrpahansSection");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              style={styles.icon}
              size={6}
              as={<FontAwesome5 name="child" />}
            />
          )}
          label="قسم الأرامل"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("WidowSection");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<FontAwesome5 name="shopping-bag" />}
            />
          )}
          label="قسم القفة"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("KofaSection");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialIcons name="school" />}
            />
          )}
          label="قسم التعليم"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("EducationSection");
          }}
        />
        <DrawerItem
          label="قسم الأنشطة الخيرية"
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialCommunityIcons size={5} name="charity" />}
            />
          )}
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("ActivitiesSection");
          }}
        />
        <DrawerItem
          label="قسم الصحة"
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<Fontisto name="doctor" />}
            />
          )}
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("HealthSection");
          }}
        />
        <DrawerItem
          label="قسم المالية"
          icon={() => (
            <Icon
              style={styles.icon}
              size={6}
              as={<FontAwesome name="bank" />}
            />
          )}
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("FinanceSection");
          }}
        />

        <DrawerItem
          label="تسجيل الخروج"
          icon={() => (
            <Icon
              size={6}
              style={styles.icon}
              as={<MaterialCommunityIcons name="logout" />}
            />
          )}
          labelStyle={styles.label}
          onPress={() => {
            logout();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.7,
    marginRight: 10,
    fontFamily: "Tajawal-Medium",
  },
  container: {
    height: "100%",
    zIndex: 999,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingTop: StatusBar.currentHeight,
    paddingRight: 20,
    backgroundColor: "#348578",
    height: "18%",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 5,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 3,
    textAlign: "right",
    fontFamily: "Tajawal-Medium",
  },
  caption: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 17,
    marginTop: 5,
    textAlign: "right",
    fontFamily: "Tajawal-Medium",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    alignSelf: "center",
    position: "absolute",
    right: 5,
    color: "#348578",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  logo: {
    height: 62,
    width: 43,
    marginLeft: 10,
  },
  logoutContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 10,
    paddingTop: 5,
  },
  logoutIcon: {
    color: "#348578",
    marginLeft: 10,
    fontSize: 26,
  },
  logoutText: {
    fontSize: 15,
    fontFamily: "Tajawal-Medium",
  },
});

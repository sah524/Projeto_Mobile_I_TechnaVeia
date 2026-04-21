import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home3 from "../assets/Home.svg";
import Markemailunread3 from "../assets/mark-email-unread.svg";
import Creditcard3 from "../assets/Credit-card.svg";
import User3 from "../assets/User.svg";
import { Padding, Width, Height } from "../GlobalStyles";

const Navigation1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.navigation, styles.navigationFlexBox1]}>
      <View style={[styles.navigationContent, styles.navigationFlexBox1]}>
        <View style={[styles.navigationItems, styles.navigationFlexBox]}>
          <Pressable
            style={styles.home}
            onPress={() => navigation.navigate("FrameComponent1111121")}
          >
            <Home3
              style={[styles.icon, styles.iconLayout]}
              width={60}
              height={45}
            />
          </Pressable>
        </View>
        <View style={styles.navigationItems2}>
          <Pressable
            style={styles.markEmailUnread}
            onPress={() => navigation.navigate("InteractionControls")}
          >
            <Markemailunread3
              style={[styles.icon2, styles.iconLayout]}
              width={50}
              height={50}
            />
          </Pressable>
        </View>
        <View style={[styles.navigationItems3, styles.navigationFlexBox]}>
          <Creditcard3
            style={styles.creditCardIcon}
            width={Width.width_48}
            height={48}
          />
        </View>
        <View style={[styles.navigationItems4, styles.navigationFlexBox]}>
          <Pressable
            style={styles.home}
            onPress={() => navigation.navigate("ContactDetails")}
          >
            <User3
              style={[styles.icon, styles.iconLayout]}
              width={60}
              height={45}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationFlexBox1: {
    flexDirection: "row",
    height: 52,
    zIndex: 0,
  },
  navigationFlexBox: {
    justifyContent: "flex-end",
    zIndex: 0,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  navigation: {
    paddingLeft: 21,
    width: "100%",
    flexDirection: "row",
  },
  navigationContent: {
    width: 325,
    alignItems: "flex-end",
    gap: 31,
  },
  navigationItems: {
    height: 46,
    paddingBottom: Padding.padding_1,
    width: Width.width_60,
  },
  home: {
    height: 45,
    width: Width.width_60,
  },
icon: {
  width: 60,
  height: 45,
},
  navigationItems2: {
    width: 59,
    paddingRight: Padding.padding_9,
    height: Height.height_50,
    zIndex:0,
  },
  markEmailUnread: {
    width: 50,
    height: Height.height_50,
  },
  icon2: {
  width: 50,
  height: 50,
},
  navigationItems3: {
    width: 53,
    paddingRight: Padding.padding_5,
    paddingBottom: 2,
    height: Height.height_50,
  },
  creditCardIcon: {
    width: Width.width_48,
    height: 48,
  },
  navigationItems4: {
    paddingBottom: 7,
    width: Width.width_60,
    height: 52,
    justifyContent: "flex-end",
  },
});

export default Navigation1;

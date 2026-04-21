import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FrameComponent1 from "../components/FrameComponent1";
import ContactDetails from "../components/ContactDetails";
import FrameComponent2 from "../components/FrameComponent2";
import { Color } from "../GlobalStyles";

const Perfil1 = () => {
  return (
    <KeyboardAwareScrollView
      style={styles.perfil}
      contentContainerStyle={styles.perfilScrollViewContent}
    >
      <FrameComponent1 />
      <View style={styles.contactDetailsWrapper}>
        <ContactDetails />
      </View>
      <FrameComponent2 />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  perfilScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 7,
    paddingTop: 22,
    paddingBottom: 17,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 22,
    height: 852,
    flex: 1,
  },
  perfil: {
    width: "100%",
    backgroundColor: Color.colorGray100,
    flex: 1,
    maxWidth: "100%",
  },
  contactDetailsWrapper: {
    zIndex: 0,
    width: 378,
    height: 486,
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 100,
  },
});

export default Perfil1;

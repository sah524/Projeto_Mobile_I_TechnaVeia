import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Padding,
  Gap,
  FontSize,
  FontFamily,
  Color,
  Height,
} from "../GlobalStyles";

const OptionsPanel = () => {
  const [orderingControlsOpen, setOrderingControlsOpen] = useState(false);

  const [orderingControlsValue, setOrderingControlsValue] = useState<string | null>(null);

  const [items, setItems] = useState([
    { label: "Mais recentes", value: "recent" },
    { label: "Mais antigos", value: "old" },
  ]);

  return (
    <View style={[styles.optionsPanel, styles.optionsPanelLayout]}>
      <View style={[styles.orderSettings, styles.optionsPanelLayout]}>
        <Text style={styles.mensagens}>Mensagens</Text>

        <View style={styles.orderingControls}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={orderingControlsOpen}
            setOpen={setOrderingControlsOpen}
            value={orderingControlsValue}
            setValue={setOrderingControlsValue}
            items={items}
            setItems={setItems}
            placeholder="Ordenar por"
            zIndex={2000}
            zIndexInverse={0}
            dropDownDirection="BOTTOM"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsPanelLayout: {
    height: 69,
    zIndex: 0,
  },

  optionsPanel: {
    width: 320,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_15,
    flexDirection: "row",
  },

  orderSettings: {
    gap: Gap.gap_10,
    width: 305,
  },

  mensagens: {
    width: 187,
    height: 39,
    fontSize: FontSize.fs_32,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDeepskyblue,
    textAlign: "left",
  },

  orderingControls: {
    height: Height.height_20,
    width: 305,
    flexDirection: "row",
  },

  dropdownpicker: {
    height: 40,
    borderWidth: 0,
  },
});

export default OptionsPanel;
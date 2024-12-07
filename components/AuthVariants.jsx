import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../styles/global";

const AuthVariants = ({ textVariant, textAction }) => {
  return (
    <View style={styles.formTextWrapper}>
      <Text style={styles.formText}>{textVariant}</Text>
      <TouchableOpacity>
        <Text style={styles.formText}>{textAction}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthVariants;

const styles = StyleSheet.create({
  formTextWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  formText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.blue,
    textAlign: "center",
  },
});

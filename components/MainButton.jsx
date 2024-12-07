import { StyleSheet, Pressable } from "react-native";
import { colors } from "../styles/global";

const MainButton = ({ action, children }) => {
  return (
    <Pressable style={styles.formBtn} onPress={action}>
      {children}
    </Pressable>
  );
};
export default MainButton;

const styles = StyleSheet.create({
  formBtn: {
    backgroundColor: colors.orange,
    paddingVertical: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
});

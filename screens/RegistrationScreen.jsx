import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import BgImg from "../assets/bg-img.jpg";
import AddIcon from "../assets/add.png";

const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [loginInputIsFocused, setLoginInputIsFocused] = useState(false);
  const [emailInputIsFocused, setEmailInputIsFocused] = useState(false);
  const [passInputIsFocused, setPassInputIsFocused] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  function toggle() {
    setIsShown(!isShown);
  }
  function handleSubmit() {
    Alert.alert(`Реєстрація успішна!`);
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImg} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarWrapper}>
            <Image source={AddIcon} style={styles.addBtn} />
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={styles.formWrapper}>
            <TextInput
              value={login}
              onChangeText={setLogin}
              placeholder="Логін"
              inputMode="text"
              style={[
                styles.formInput,
                loginInputIsFocused && styles.formInputFocused,
              ]}
              onFocus={() => setLoginInputIsFocused(true)}
              onBlur={() => setLoginInputIsFocused(false)}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Адреса електронної пошти"
              inputMode="email"
              style={[
                styles.formInput,
                emailInputIsFocused && styles.formInputFocused,
              ]}
              onFocus={() => setEmailInputIsFocused(true)}
              onBlur={() => setEmailInputIsFocused(false)}
            />
            <View style={styles.inputWrapper}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry={!isShown}
                style={[
                  styles.formInput,
                  passInputIsFocused && styles.formInputFocused,
                ]}
                onFocus={() => setPassInputIsFocused(true)}
                onBlur={() => setPassInputIsFocused(false)}
              />
              <Pressable onPress={toggle} style={styles.inputPassLab}>
                <Text style={styles.inputPassLabText}>
                  {isShown ? "Приховати" : "Показати"}
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.formBtn} onPress={handleSubmit}>
            <Text style={styles.formBtnText}>Зареєструватися</Text>
          </Pressable>
          <View style={styles.formTextWrapper}>
            <Text style={styles.formText}>Вже є акаунт?</Text>
            <TouchableOpacity>
              <Text style={styles.formText}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: "-38%" }],
    borderRadius: 16,
    zIndex: 2,
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 14,
    right: -12,
    zIndex: 3,
  },
  formTitle: {
    width: "100%",
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  formWrapper: {
    width: "100%",
    flex: 4,
    gap: 16,
  },
  formInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 15,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  formInputFocused: {
    borderColor: "#FF6C00",
  },
  inputWrapper: {
    position: "relative",
  },
  inputPassLab: {
    width: 72,
    height: 24,
    position: "absolute",
    bottom: 10,
    right: 16,
  },
  inputPassLabText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  formBtn: {
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  formBtnText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  formText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  formTextWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});

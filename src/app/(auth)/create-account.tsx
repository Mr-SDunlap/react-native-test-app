import { Image } from "expo-image";
import { Link, type Href } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import "../../../global.css";
import "../../../styles/create-account.css";

const createAccount = () => {
  // Form inputs fields *************************
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Password rules ****************************
  const rules = [
    { label: "One uppercase character", met: /[A-Z]/.test(password) },
    { label: "One lowercase character", met: /[a-z]/.test(password) },
    { label: "One special character", met: /[^A-Za-z0-9]/.test(password) },
    { label: "One number", met: /\d/.test(password) },
    { label: "Minimum characters 12", met: password.length >= 12 },
  ];
  const passwordValid = rules.every((r) => r.met);
  const passwordsMatch = confirm.length > 0 && password === confirm;
  const canSubmit =
    name.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(email) &&
    passwordValid &&
    passwordsMatch;

  return (
    <View className="auth-container">
      <Text className="create-account__title font-readex-semibold">
        Sign up
      </Text>
      <View className="create-account__form">
        <TextInput
          className="auth-input"
          placeholder="Name"
          placeholderTextColor="#b4b4b4"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoComplete="name"
        />
        <TextInput
          className="auth-input"
          placeholder="Email"
          placeholderTextColor="#b4b4b4"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />

        <View className="auth-input-wrap">
          <TextInput
            className="auth-input-field"
            placeholder="Password"
            placeholderTextColor="#b4b4b4"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <Pressable
            onPress={() => setShowPassword((v) => !v)}
            accessibilityLabel={showPassword ? "Hide password" : "Show password"}
          >
            <Image
              source={
                showPassword
                  ? require("../../../assets/icons/eye-off.svg")
                  : require("../../../assets/icons/eye.svg")
              }
              className="auth-eye"
            />
          </Pressable>
        </View>

        <View className="rules">
          {rules.map((rule) => (
            <Text
              key={rule.label}
              className={rule.met ? "rule rule-met" : "rule"}
            >
              {rule.met ? "✓" : "•"} {rule.label}
            </Text>
          ))}
        </View>

        <View className="auth-input-wrap">
          <TextInput
            className="auth-input-field"
            placeholder="Re-enter Password"
            placeholderTextColor="#b4b4b4"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry={!showConfirm}
            autoCapitalize="none"
          />
          <Pressable
            onPress={() => setShowConfirm((v) => !v)}
            accessibilityLabel={showConfirm ? "Hide password" : "Show password"}
          >
            <Image
              source={
                showConfirm
                  ? require("../../../assets/icons/eye-off.svg")
                  : require("../../../assets/icons/eye.svg")
              }
              className="auth-eye"
            />
          </Pressable>
        </View>
        {confirm.length > 0 && !passwordsMatch && (
          <Text className="auth-error">Passwords don't match</Text>
        )}

        <Pressable
          disabled={!canSubmit}
          className={
            canSubmit ? "auth-submit" : "auth-submit auth-submit-disabled"
          }
        >
          <Text className="auth-submit-text">Continue</Text>
        </Pressable>

        <View className="auth-divider">
          <View className="auth-divider-line" />
          <Text className="auth-divider-text">or</Text>
          <View className="auth-divider-line" />
        </View>

        <Pressable className="auth-social">
          <Image
            source={require("../../../assets/icons/google.svg")}
            className="auth-social-icon"
          />
          <Text className="auth-social-text">Continue with Google</Text>
        </Pressable>
        <Pressable className="auth-social">
          <Image
            source={require("../../../assets/icons/apple.svg")}
            className="auth-social-icon"
          />
          <Text className="auth-social-text">Continue with Apple</Text>
        </Pressable>
      </View>

      <Text className="auth-switch">
        Already have an account?{" "}
        <Link href="/log-in" className="auth-switch-link">
          Log in
        </Link>
      </Text>

      <View className="auth-legal">
        <Link href={"#" as Href} className="auth-legal-link">
          Terms of Service
        </Link>
        <Link href={"#" as Href} className="auth-legal-link">
          Privacy Policy
        </Link>
      </View>
    </View>
  );
};

export default createAccount;

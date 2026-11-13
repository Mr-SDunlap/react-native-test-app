import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router, type Href } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { ENTER } from "../../components/motion";
import "../../../global.css";
import "../../../styles/auth.css";

const CreateAccount = () => {
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

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/welcome");
  };

  const handleSubmit = () => {
    // TODO: call your auth API with { name, email, password }
  };

  return (
    <LinearGradient
      colors={["#ff5722", "#bf350a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="auth-page">
              <Animated.View entering={ENTER[0]}>
                <View className="auth-header">
                  <Pressable
                    onPress={goBack}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    hitSlop={12}
                  >
                    <Text className="auth-back font-readex-medium">‹ Back</Text>
                  </Pressable>
                  <Text className="auth-title font-readex-bold">
                    Create your account
                  </Text>
                  <Text className="auth-subtitle font-readex-light">
                    Start tracking your subscriptions in minutes.
                  </Text>
                </View>
              </Animated.View>

              <View className="auth-form">
                <Animated.View entering={ENTER[1]}>
                  <View className="auth-group">
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
                  </View>
                </Animated.View>

                <Animated.View entering={ENTER[2]}>
                  <View className="auth-group">
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
                        accessibilityLabel={
                          showPassword ? "Hide password" : "Show password"
                        }
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
                  </View>
                </Animated.View>

                <Animated.View entering={ENTER[3]}>
                  <View className="auth-group">
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
                        accessibilityLabel={
                          showConfirm ? "Hide password" : "Show password"
                        }
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
                      <Text className="auth-error">
                        {"Passwords don't match"}
                      </Text>
                    )}
                  </View>
                </Animated.View>

                <Animated.View entering={ENTER[4]}>
                  <View className="auth-actions">
                    <Button
                      title="Continue"
                      intent="dark"
                      disabled={!canSubmit}
                      onPress={handleSubmit}
                    />

                    <View className="auth-divider">
                      <View className="auth-divider-line" />
                      <Text className="auth-divider-text">or</Text>
                      <View className="auth-divider-line" />
                    </View>

                    <Button
                      title="Continue with Google"
                      intent="light"
                      icon={require("../../../assets/icons/google.svg")}
                    />
                    <Button
                      title="Continue with Apple"
                      intent="light"
                      icon={require("../../../assets/icons/apple.svg")}
                    />
                  </View>
                </Animated.View>
              </View>

              <Animated.View entering={ENTER[5]}>
                <View className="auth-footer">
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
              </Animated.View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CreateAccount;

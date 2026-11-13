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

const LogIn = () => {
  // Form inputs fields *************************
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = /\S+@\S+\.\S+/.test(email) && password.length > 0;

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/welcome");
  };

  const handleSubmit = () => {
    // TODO: call your auth API with { email, password }
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
                    Welcome back
                  </Text>
                  <Text className="auth-subtitle font-readex-light">
                    Log in to see what&apos;s renewing soon.
                  </Text>
                </View>
              </Animated.View>

              <View className="auth-form">
                <Animated.View entering={ENTER[1]}>
                  <View className="auth-group">
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
                        autoComplete="current-password"
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
                    <Link href={"#" as Href} className="auth-forgot">
                      Forgot password?
                    </Link>
                  </View>
                </Animated.View>

                <Animated.View entering={ENTER[2]}>
                  <View className="auth-actions">
                    <Button
                      title="Log in"
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

              <Animated.View entering={ENTER[3]}>
                <View className="auth-footer">
                  <Text className="auth-switch">
                    New to SubTrack?{" "}
                    <Link href="/create-account" className="auth-switch-link">
                      Create account
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

export default LogIn;

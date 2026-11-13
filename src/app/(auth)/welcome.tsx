import { LinearGradient } from "expo-linear-gradient";
import { Link, router, type Href } from "expo-router";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { ENTER } from "../../components/motion";
import "../../../global.css";
import "../../../styles/welcome.css";

const FEATURES = [
  {
    icon: "🔔",
    title: "Renewal reminders",
    body: "Get a heads-up before you're charged.",
  },
  {
    icon: "💸",
    title: "See your total spend",
    body: "Every subscription, one monthly number.",
  },
  {
    icon: "⚡",
    title: "Add one in seconds",
    body: "No bank login, no spreadsheets.",
  },
];

const Welcome = () => {
  return (
    <LinearGradient
      colors={["#ff5722", "#bf350a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="wl-container">
          <View className="wl-hero">
            <Animated.View entering={ENTER[0]}>
              <Text className="wl-brand font-readex-medium">SubTrack</Text>
            </Animated.View>
            <Animated.View entering={ENTER[1]}>
              <Text className="wl-headline font-readex-bold">
                Stop paying for things you forgot.
              </Text>
            </Animated.View>
            <Animated.View entering={ENTER[2]}>
              <Text className="wl-sub font-readex-light">
                Track every subscription, get renewal reminders and see exactly
                what you spend.
              </Text>
            </Animated.View>
          </View>

          <View className="wl-features">
            {FEATURES.map((feature, i) => (
              <Animated.View key={feature.title} entering={ENTER[i + 3]}>
                <View className="wl-feature">
                  <View className="wl-icon">
                    <Text className="wl-icon-text">{feature.icon}</Text>
                  </View>
                  <View className="wl-feature-copy">
                    <Text className="wl-feature-title font-readex-medium">
                      {feature.title}
                    </Text>
                    <Text className="wl-feature-body font-readex-light">
                      {feature.body}
                    </Text>
                  </View>
                </View>
              </Animated.View>
            ))}
          </View>

          <Animated.View entering={ENTER[6]}>
            <View className="wl-actions">
              <Button
                title="Create account"
                onPress={() => router.push("/create-account")}
              />
              <Button
                title="I already have an account"
                intent="ghost"
                size="md"
                onPress={() => router.push("/log-in")}
              />
              <View className="wl-legal">
                <Link href={"#" as Href} className="wl-legal-link">
                  Terms of use
                </Link>
                <Link href={"#" as Href} className="wl-legal-link">
                  Privacy policy
                </Link>
              </View>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;

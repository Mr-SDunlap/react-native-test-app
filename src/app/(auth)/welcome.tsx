import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../../styles/welcome.css";
import "./../../../global.css";

const welcome = () => {
  return (
    <View className="welcome-container">
      <View className="welcome-form">
        <Text className="title font-readex-medium">Lorem ipsum</Text>
        <Link href="/(auth)/sign-up" className="primary-cta">
          Sign up
        </Link>
        <Text>
          Already have and account?
          <Link href="/(auth)/sign-in" className="tertiary-cta">
            Sign in
          </Link>
        </Text>
      </View>
      <View className="welcome-legal">
        <Link href="#" className="tertiary-cta">
          Terms of Service
        </Link>
        <Link href="#" className="tertiary-cta">
          Privacy Policy
        </Link>
      </View>
    </View>
  );
};

export default welcome;

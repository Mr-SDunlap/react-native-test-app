import { Link, type Href } from "expo-router";
import { Text, View } from "react-native";
import "../../../styles/welcome.css";
import "./../../../global.css";

const Welcome = () => {
  return (
    <View className="welcome-container">
      <View className="welcome-form">
        <Text className="title font-readex-medium">SubTrack</Text>

        <Link href="/create-account" className="primary-cta sign-up-btn">
          <Text>Create account</Text>
        </Link>

        <Text className="account-owner">
          Already have and account?
          <Link href="/log-in" className="tertiary-cta sign-in-btn">
            Log in
          </Link>
        </Text>
      </View>
      <View className="welcome-legal">
        <Link href={"#" as Href} className="tertiary-cta legal-cta">
          Terms of use
        </Link>
        <Link href={"#" as Href} className="tertiary-cta legal-cta">
          Privacy policy
        </Link>
      </View>
    </View>
  );
};

export default Welcome;

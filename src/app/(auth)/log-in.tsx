import { Link } from "expo-router";
import { Text, View } from "react-native";

const logIn = () => {
  return (
    <View className="auth-container">
      <Text>Log in</Text>
      <Text>
        New to SubTrack? <Link href="/create-account">Create account</Link>
      </Text>
    </View>
  );
};

export default logIn;

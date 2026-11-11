import { Link } from "expo-router";
import { Text, View } from "react-native";

const createAccount = () => {
  return (
    <View className="auth-container">
      <Text>Create account</Text>
      <Text>
        Already have an account? <Link href="/log-in">Log in</Link>
      </Text>
    </View>
  );
};

export default createAccount;

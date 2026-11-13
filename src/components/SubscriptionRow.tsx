import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { formatPrice } from "../lib/format";
import "../../styles/dashboard.css";

export function SubscriptionRow({
  id,
  icon,
  name,
  plan,
  price,
  currency,
  billing,
}: Subscription) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${formatPrice(price, currency)} ${billing}`}
      onPress={() =>
        router.push({ pathname: "/subscriptions/[id]", params: { id } })
      }
      style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
    >
      <View className="db-row">
        <View className="db-tile">
          <Image
            source={icon}
            resizeMode="contain"
            style={{ width: 26, height: 26 }}
          />
        </View>
        <View className="db-row-copy">
          <Text className="db-row-name font-readex-medium">{name}</Text>
          {plan ? (
            <Text className="db-row-plan font-readex-light">{plan}</Text>
          ) : null}
        </View>
        <View className="db-row-price-col">
          <Text className="db-row-price font-readex-semibold">
            {formatPrice(price, currency)}
          </Text>
          <Text className="db-row-plan font-readex-light">{billing}</Text>
        </View>
      </View>
    </Pressable>
  );
}

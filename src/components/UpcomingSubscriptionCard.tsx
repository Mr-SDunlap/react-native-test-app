import { Image, Text, View } from "react-native";
import { formatDaysLeft, formatPrice } from "../lib/format";
import "../../styles/dashboard.css";

export function UpcomingSubscriptionCard({
  icon,
  name,
  price,
  currency,
  daysLeft,
}: UpcomingSubscriptionCardProps) {
  return (
    <View className="db-upcoming">
      <View className="db-tile">
        <Image
            source={icon}
            resizeMode="contain"
            style={{ width: 26, height: 26 }}
          />
      </View>
      <View className="db-upcoming-copy">
        <Text className="db-upcoming-name font-readex-medium" numberOfLines={1}>
          {name}
        </Text>
        <Text className="db-upcoming-price font-readex-semibold">
          {formatPrice(price, currency)}
        </Text>
      </View>
      <View className="db-pill">
        <Text className="db-pill-text font-readex-medium">
          {formatDaysLeft(daysLeft)}
        </Text>
      </View>
    </View>
  );
}

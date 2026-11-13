import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { subscriptions, upcomingSubscriptions } from "@/assets/constants/data";
import { ListHeading } from "../../components/ListHeading";
import { ENTER } from "../../components/motion";
import { SubscriptionRow } from "../../components/SubscriptionRow";
import { UpcomingSubscriptionCard } from "../../components/UpcomingSubscriptionCard";
import { formatDaysLeft, formatPrice, monthlyCost } from "../../lib/format";
import "../../../global.css";
import "../../../styles/dashboard.css";

const Dashboard = () => {
  const monthlyTotal = subscriptions.reduce(
    (sum, sub) => sum + monthlyCost(sub.price, sub.billing),
    0,
  );
  const next = upcomingSubscriptions[0];

  return (
    <LinearGradient
      colors={["#ff5722", "#bf350a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="db-page">
            <Animated.View entering={ENTER[0]}>
              <View className="db-section">
                <View className="db-header">
                  <View>
                    <Text className="db-eyebrow font-readex-medium">
                      Welcome back
                    </Text>
                    <Text className="db-title font-readex-bold">
                      Your subscriptions
                    </Text>
                  </View>
                  <Image
                    source={require("../../../assets/images/avatar.png")}
                    contentFit="cover"
                    className="db-avatar"
                  />
                </View>
              </View>
            </Animated.View>

            <Animated.View entering={ENTER[1]}>
              <View className="db-section">
                <View className="db-hero">
                  <Text className="db-hero-label font-readex-medium">
                    Monthly spend
                  </Text>
                  <Text className="db-hero-amount font-readex-bold">
                    {formatPrice(monthlyTotal)}
                  </Text>
                  <Text className="db-hero-sub font-readex-light">
                    Across {subscriptions.length} active subscriptions
                  </Text>
                  {next ? (
                    <>
                      <View className="db-hero-divider" />
                      <View className="db-hero-next">
                        <Text className="db-hero-next-label font-readex-medium">
                          Next: {next.name} ({formatPrice(next.price, next.currency)})
                        </Text>
                        <Text className="db-hero-next-days font-readex-semibold">
                          {formatDaysLeft(next.daysLeft)}
                        </Text>
                      </View>
                    </>
                  ) : null}
                </View>
              </View>
            </Animated.View>

            <Animated.View entering={ENTER[2]}>
              <View className="db-section">
                <ListHeading title="Upcoming" />
              </View>
            </Animated.View>
            <Animated.View entering={ENTER[3]}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 12,
                  paddingLeft: 24,
                  paddingRight: 24,
                }}
              >
                {upcomingSubscriptions.map(({ id, ...card }) => (
                  <UpcomingSubscriptionCard key={id} {...card} />
                ))}
              </ScrollView>
            </Animated.View>

            <Animated.View entering={ENTER[4]}>
              <View className="db-section">
                <ListHeading title="All subscriptions" />
              </View>
            </Animated.View>
            <View className="db-section db-list">
              {subscriptions.map((sub, i) => (
                <Animated.View key={sub.id} entering={ENTER[Math.min(i + 5, 11)]}>
                  <SubscriptionRow {...sub} />
                </Animated.View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Dashboard;

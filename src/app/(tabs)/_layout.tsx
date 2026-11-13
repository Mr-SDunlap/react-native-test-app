import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { tabs } from "@/assets/constants/data";
import "../../../styles/tabs.css";

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View className="tabs-icon">
    <View className={`tabs-pill ${focused ? "tabs-active" : ""}`}>
      {/* Size is set inline: a React Native Image ignores className sizing */}
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 22, height: 22, opacity: focused ? 1 : 0.6 }}
      />
    </View>
  </View>
);

const TabLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#222222",
        borderTopWidth: 0,
        height: 72,
        paddingTop: 8,
        paddingBottom: 8,
      },
      tabBarLabelPosition: "below-icon",
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "#b4b4b4",
      tabBarLabelStyle: { fontFamily: "ReadexPro_500Medium", fontSize: 11 },
    }}
  >
    {tabs.map((tab) => (
      <Tabs.Screen
        key={tab.name}
        name={tab.name}
        options={{
          title: tab.title,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={tab.icon} />
          ),
        }}
      />
    ))}
  </Tabs>
);

export default TabLayout;

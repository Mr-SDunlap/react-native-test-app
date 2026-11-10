import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { tabs } from "@/assets/constants/data";

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View className="tabs-icon">
    <View className={`tabs-pill ${focused ? "tabs-active" : ""}`}>
      <Image source={icon} resizeMode="contain" className="tabs-glyph" />
    </View>
  </View>
);

const TabLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
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

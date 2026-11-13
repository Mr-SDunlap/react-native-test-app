import { cva, type VariantProps } from "class-variance-authority";
import * as Haptics from "expo-haptics";
import { Image, type ImageSource } from "expo-image";
import { Platform, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import "../../styles/button.css";

// cva turns the props below into class names defined in button.css
const button = cva("btn", {
  variants: {
    intent: {
      primary: "btn-primary",
      ghost: "btn-ghost",
      dark: "btn-dark",
      light: "btn-light",
    },
    size: { md: "btn-md", lg: "btn-lg" },
    disabled: { true: "btn-disabled", false: "" },
  },
  defaultVariants: { intent: "primary", size: "lg", disabled: false },
});

const label = cva("btn-label", {
  variants: {
    intent: {
      primary: "btn-label-primary",
      ghost: "btn-label-ghost",
      dark: "btn-label-dark",
      light: "btn-label-light",
    },
    size: { md: "btn-label-md", lg: "btn-label-lg" },
  },
  defaultVariants: { intent: "primary", size: "lg" },
});

type ButtonProps = Omit<VariantProps<typeof button>, "disabled"> & {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: ImageSource;
};

export function Button({
  title,
  onPress,
  intent,
  size,
  disabled = false,
  icon,
}: ButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.get() }],
  }));

  const handlePressIn = () => {
    scale.set(withSpring(0.96));
    // Vibration on the web is unreliable, so only use haptics on phones
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const handlePressOut = () => {
    scale.set(withSpring(1));
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={animatedStyle}>
        <View className={button({ intent, size, disabled })}>
          {icon ? <Image source={icon} className="btn-icon" /> : null}
          <Text className={label({ intent, size })}>{title}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

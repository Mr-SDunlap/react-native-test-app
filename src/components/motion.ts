import { FadeInDown } from "react-native-reanimated";

// Entrance builders are created once, outside components (per Reanimated docs).
// ENTER[n] starts n * 100ms after the screen opens, so sections build in sequence.
export const ENTER = Array.from({ length: 12 }, (_, step) =>
  FadeInDown.delay(step * 100).duration(500),
);

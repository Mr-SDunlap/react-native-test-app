import { Text } from "react-native";
import "../../styles/dashboard.css";

export function ListHeading({ title }: ListHeadingProps) {
  return <Text className="db-heading font-readex-semibold">{title}</Text>;
}

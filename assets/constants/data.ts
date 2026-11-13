import { icons } from "./icons";

// SAMPLE DATA: placeholders until the app loads real subscriptions.
export const subscriptions: Subscription[] = [
  { id: "spotify", icon: icons.spotify, name: "Spotify", plan: "Premium Individual", price: 11.99, currency: "USD", billing: "Monthly" },
  { id: "notion", icon: icons.notion, name: "Notion", plan: "Plus", price: 10, currency: "USD", billing: "Monthly" },
  { id: "openai", icon: icons.openai, name: "OpenAI", plan: "ChatGPT Plus", price: 20, currency: "USD", billing: "Monthly" },
  { id: "figma", icon: icons.figma, name: "Figma", plan: "Professional", price: 15, currency: "USD", billing: "Monthly" },
  { id: "adobe", icon: icons.adobe, name: "Adobe", plan: "Creative Cloud", price: 59.99, currency: "USD", billing: "Monthly" },
  { id: "dropbox", icon: icons.dropbox, name: "Dropbox", plan: "Plus", price: 119.88, currency: "USD", billing: "Yearly" },
];

// SAMPLE DATA: sorted soonest first.
export const upcomingSubscriptions: UpcomingSubscription[] = [
  { id: "spotify", icon: icons.spotify, name: "Spotify", price: 11.99, currency: "USD", daysLeft: 2 },
  { id: "notion", icon: icons.notion, name: "Notion", price: 10, currency: "USD", daysLeft: 5 },
  { id: "openai", icon: icons.openai, name: "OpenAI", price: 20, currency: "USD", daysLeft: 9 },
  { id: "figma", icon: icons.figma, name: "Figma", price: 15, currency: "USD", daysLeft: 14 },
];

export const tabs: AppTab[] = [
  { name: "dashboard", title: "Dashboard", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  { name: "dates", title: "Dates", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];

# 🌐 react-native-unified-emoji

A React Native component to render emojis consistently across iOS, Android, and more, using unified emoji sets. Whether you're creating chat apps, social feeds, or fun, emoji-laden interfaces, `react-native-unified-emoji` has you covered!

[![npm version](https://badge.fury.io/js/react-native-unified-emoji.svg)](https://badge.fury.io/js/react-native-unified-emoji)

## ✨ Features

- 🌍 **Cross-Platform Emoji Rendering**: Renders emojis consistently across different platforms, including iOS and Android.
- 🔄 **Fallback & Loader Support**: Customize with a fallback emoji or loader in case of load failures.
- 🚀 **Expo Image Integration**: Uses `expo-image` under the hood for efficient image handling.
- 🧩 **Zero Styles for Full Customizability**: Comes unstyled, allowing you to customize the look and feel to match your app.
- 🎨 **Multiple Emoji Sets**: Choose from popular sets like Apple, Google, Twitter, and more.
- 🪶 **Lightweight**: Optimized for performance and minimal footprint in your app.

## 📲 Installation

### Installation in Managed Expo Projects

For [managed Expo projects](https://docs.expo.dev/archive/managed-vs-bare/), follow the installation instructions in the [API documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/image/):

```sh
npx expo install expo-image
npm install react-native-unified-emoji
```
expo-image will be ready for use with no additional configuration needed, so you can immediately start using react-native-unified-emoji in your project.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npx expo install expo-image
npm install react-native-unified-emoji
```

### Configure for iOS
After installing the packages, run the following command to install the necessary iOS dependencies:

Run `npx pod-install` after installing the npm package.

### Configure for Android

No additional setup necessary.

Once these steps are complete, you can start using react-native-unified-emoji in your bare React Native project.

## Usage

```js
import { Emoji, EmojiSet } from 'react-native-unified-emoji';

export default function App() {
  return (
    <Emoji set={EmojiSet.Apple}>
      {'👋'}
    </Emoji>
  );
}
```
Choose from different emoji sets by changing the set prop (e.g., EmojiSet.Google, EmojiSet.Twitter).

## Set Variants

| Emoji Set   | Description                    |
|-------------|--------------------------------|
| `Apple`     | Apple's native emoji style     |
| `Google`    | Google’s emoji style for Android|
| `Twitter`   | Twitter’s emoji style (Twemoji)|
| `Facebook`  | Facebook’s emoji style         |

## 🛠 Contributing

We welcome contributions! Please refer to the [contributing guide](CONTRIBUTING.md) o learn more about the development workflow, reporting issues, and making pull requests.

## License

MIT
This project is licensed under the MIT License.
---

This project was crafted with ❤️ using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

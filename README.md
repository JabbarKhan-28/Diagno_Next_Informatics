# Diagno Next Informatics

Diagno Next Informatics is a premium digital health and clinical laboratory informatics platform. It is designed to revolutionize healthcare by empowering clinical labs with data intelligence, digital workflows, and seamless informatics integration.

## 🚀 Features

- **Responsive Design**: Optimized for different platforms with distinct templates for Web and Android.
- **Premium Web Experience**: High-end glassmorphic UI with dynamic lighting effects and smooth animations.
- **Native Android Experience**: A cohesive, clean, and high-performance interface tailored for mobile diagnostics.
- **Multimedia Integration**: High-definition video backgrounds and interactive informatics modules.
- **Advanced Navigation**: Multi-level dropdowns for Services & Solutions and Expertise categories.
- **Interactive UI**: Staggered entry animations powered by `react-native-reanimated`.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev) / [React Native](https://reactnative.dev)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Visuals**: [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/), [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/), [Expo AV](https://docs.expo.dev/versions/latest/sdk/av/)
- **Styling**: Platform-specific styling with Native StyleSheet.

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app (for testing on physical mobile devices)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Diagno_Next_Informatics
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install platform-specific modules (if needed)**:
   ```bash
   npx expo install expo-blur expo-av expo-image expo-linear-gradient react-native-reanimated
   ```

## 🏃 Running the App

### Start the development server
```bash
npx expo start
```

### Run on Web
Press `w` in the terminal or use:
```bash
npm run web
```

### Run on iOS
> **Note**: Developing locally for the iOS Simulator requires **macOS and Xcode**. 

**If you are on Windows/Linux**, you can still test on an iOS device:
1. Install the **Expo Go** app from the App Store on your iPhone/iPad.
2. Ensure your computer and iOS device are on the same Wi-Fi network.
3. Start the server with `npx expo start`.
4. Scan the **QR code** displayed in your terminal using the iOS Camera app or the Expo Go app.
5. Alternatively, press `s` in the terminal to sign into your Expo account to see the project listed in the Expo Go app.

### Run on Android
Press `a` in the terminal or use:
```bash
npm run android
```
(Requires Android Studio and an emulator or a physical device connected via USB/Wi-Fi).

### Clear Cache (Fix for dependency issues)
If you encounter module resolution errors (e.g., `expo-blur` not found), restart with a cleared cache:
```bash
npx expo start -c
```

## 🏗 Building for Production

### Web Build
To export the project for web hosting (e.g., Firebase, Vercel):
```bash
npm run build
```
The output will be in the `dist` directory.

## 🤝 Contact
For any inquiries regarding Informatics Solutions, contact:
**Diagno Next Informatics**
[contact@diagnonext.com] (Example)

---
*Every Day, A New Discovery.*

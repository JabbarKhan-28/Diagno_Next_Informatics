import { Ionicons } from '@expo/vector-icons';

import { Stack, usePathname, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

const SERVICES = [
  '/services/lis',
  '/services/data-migration',
  '/services/dashboard',
  '/services/workflow',
  '/services/infrastructure',
  '/services/support',
  '/services/training',
  '/services/integration',
  '/services/ai',
  '/services/bi',
];

const EXPERTIES = [
  '/experties/clinical-informatics',
  '/experties/healthcare-data',
  '/experties/digital-workflow',
  '/experties/diagnostics-it',
  '/experties/interoperability',
  '/experties/regulatory',
  '/experties/ai-automation',
  '/experties/custom-software',
];

const ORDERED_ROUTES = [
  '/',
  '/about',
  ...SERVICES,
  ...EXPERTIES,
  '/contact',
];

export default function RootLayout() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = useMemo(() => {
    return ORDERED_ROUTES.indexOf(pathname);
  }, [pathname]);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (currentIndex === -1) {
        // Fallback if current route is not in list, go Home
        router.push('/');
        return;
    }

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    // Boundary checks
    if (newIndex < 0) newIndex = 0; // Stick to start
    if (newIndex >= ORDERED_ROUTES.length) newIndex = ORDERED_ROUTES.length - 1; // Stick to end

    if (newIndex !== currentIndex) {
        router.push(ORDERED_ROUTES[newIndex] as any);
    }
  };

  const showControls = currentIndex !== -1;

  // Render navigation controls overlay
  const NavigationControls = () => {
      if (!showControls) return null;
      
      const isFirst = currentIndex === 0;
      const isLast = currentIndex === ORDERED_ROUTES.length - 1;

      return (
          <View style={styles.navContainer}>
              <View style={styles.glassPill}>
                  <TouchableOpacity 
                    onPress={() => handleNavigation('prev')} 
                    style={[styles.navBtn, isFirst && styles.disabledBtn]}
                    disabled={isFirst}
                  >
                      <Ionicons name="chevron-back" size={20} color={isFirst ? "rgba(255,255,255,0.2)" : "white"} />
                  </TouchableOpacity>
                  
                  <View style={styles.divider} />

                  <TouchableOpacity 
                    onPress={() => handleNavigation('next')} 
                    style={[styles.navBtn, isLast && styles.disabledBtn]}
                    disabled={isLast}
                  >
                      <Ionicons name="chevron-forward" size={20} color={isLast ? "rgba(255,255,255,0.2)" : "white"} />
                  </TouchableOpacity>
              </View>
          </View>
      );
  };

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <NavigationControls />
    </>
  );
}

const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    glassPill: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent dark
        borderRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    navBtn: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    disabledBtn: {
        opacity: 0.5,
    },
    divider: {
        width: 1,
        height: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 0,
    }
});

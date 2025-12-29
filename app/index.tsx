import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { title: 'Digital Health', icon: 'medical' as const },
    { title: 'AI Diagnostics', icon: 'analytics' as const },
    { title: 'Smart Workflow', icon: 'flash' as const },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'android' ? 'dark' : 'light'} />
      
      {/* Background Container */}
      <View style={styles.backgroundContainer}>
        {Platform.OS === 'android' ? (
          <LinearGradient
            colors={['#ffffff', '#e1f5fe', '#e3f2fd']}
            locations={[0, 0.5, 1]}
            style={StyleSheet.absoluteFillObject}
          />
        ) : (
          <>
            {mounted && (
              <Video
                source={require('../assets/images/background.mp4')}
                style={StyleSheet.absoluteFillObject}
                resizeMode={ResizeMode.COVER}
                shouldPlay
                isLooping
                isMuted
              />
            )}
            <View style={styles.overlay} />
          </>
        )}
      </View>

      <SafeAreaView style={styles.safeArea}>
        <NavBar />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={[styles.heroContent, isMobile && styles.heroContentMobile]}>
            <View style={[styles.premiumCard, Platform.OS === 'android' && styles.androidCard]}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>INFORMATICS SOLUTIONS</Text>
               </View>

              <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
                Revolutionizing <Text style={styles.accentText}>Healthcare</Text>{'\n'}
                Empowering <Text style={styles.accentText}>Clinical Labs</Text>
              </Text>
              
              <Text style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}>
                Powering the future of Lab IT through intelligence, digital workflows, and seamless informatics integration.
              </Text>
              
              <View style={[styles.actionContainer, isMobile && styles.actionContainerMobile]}>
                <TouchableOpacity 
                    onPress={() => router.push('/contact')}
                    activeOpacity={0.7}
                >
                  <LinearGradient
                    colors={['#004a99', '#007aff']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.ctaButton}
                  >
                    <Text style={styles.ctaButtonText}>Book Appointment</Text>
                    <Ionicons name="arrow-forward" size={18} color="white" style={{marginLeft: 8}} />
                  </LinearGradient>
                </TouchableOpacity>

                {!isMobile && (
                    <TouchableOpacity 
                        onPress={() => router.push('/about')}
                        style={styles.secondaryButton}
                    >
                        <Text style={styles.secondaryButtonText}>Learn More</Text>
                    </TouchableOpacity>
                )}
              </View>

              {/* Native Android Features Row */}
              <View style={styles.featureRow}>
                {features.map((f, i) => (
                    <View key={i} style={styles.featureItem}>
                        <Ionicons name={f.icon} size={20} color="#004a99" />
                        <Text style={styles.featureText}>{f.title}</Text>
                    </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android' ? '#ffffff' : '#000814',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  heroContent: {
    paddingHorizontal: 20,
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
  },
  premiumCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    padding: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    ...Platform.select({
      web: {
        backdropFilter: 'blur(15px)',
      },
    }),
  },
  androidCard: {
    backgroundColor: '#ffffff',
    elevation: 12,
    shadowColor: '#004a99',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    borderColor: '#e1f5fe',
    borderWidth: 1.5,
  },
  badge: {
     backgroundColor: '#e3f2fd',
     paddingHorizontal: 12,
     paddingVertical: 6,
     borderRadius: 10,
     alignSelf: 'flex-start',
     marginBottom: 20,
  },
  badgeText: {
      color: '#004a99',
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: 1.5,
  },
  heroTitle: {
    color: Platform.OS === 'android' ? '#1e293b' : 'white',
    fontSize: 48,
    fontWeight: '800',
    lineHeight: 60,
    marginBottom: 24,
    fontFamily: Platform.select({ ios: 'System', android: 'sans-serif-medium' }),
  },
  accentText: {
    color: '#004a99',
  },
  heroSubtitle: {
    color: Platform.OS === 'android' ? '#475569' : '#e0e0e0',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 700,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  ctaButton: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#004a99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#004a99',
    fontSize: 18,
    fontWeight: '600',
  },
  featureRow: {
      flexDirection: 'row',
      marginTop: 50,
      gap: 30,
      borderTopWidth: 1,
      borderTopColor: '#f1f5f9',
      paddingTop: 30,
  },
  featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
  },
  featureText: {
      color: '#64748b',
      fontSize: 14,
      fontWeight: '600',
  },
  // Mobile Adjustments
  heroContentMobile: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  heroTitleMobile: {
    fontSize: 32,
    lineHeight: 42,
  },
  heroSubtitleMobile: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  actionContainerMobile: {
    width: '100%',
  },
});


import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ResizeMode, Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';
import NavBar from '../components/NavBar';
// ... (imports)

export default function HomeScreen() {
    const router = useRouter();
// ... (rest of code)
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Container */}
      <View style={styles.backgroundContainer}>
          {mounted && (
              <Video
                source={require('../assets/images/background.mp4')}
                style={{ width: '100%', height: '100%' }}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping
                isMuted
              />
          )}
          <View style={styles.overlay} />
          
          {/* DNA Strand Decoration (Simulated with simple shapes or gradient - optional, but helps match look) */}
          {/* For now, just a dark gradient effect is achieved via the overlay and bg color */}
      </View>

       {/* Navbar */}
      <SafeAreaView style={styles.safeArea}>
        <NavBar />


        {/* content container */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Hero Content */}
            <View style={[styles.heroContent, isMobile && styles.heroContentMobile]}>
                <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
                    {isMobile 
                        ? "Revolutionizing Healthcare, Empowering Clinical Labs with Data Intelligence & Informatics Solutions"
                        : <>Revolutionizing Healthcare,{'\n'}Empowering Clinical Labs with Data{'\n'}Intelligence & Informatics Solutions</>
                    }
                </Text>
                <Text style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}>
                    {isMobile
                        ? "Powering the Future of Clinical Lab IT, Digital Workflows & Streamlining Diagnostics Through Intelligent Systems, Workflows & Support"
                        : <>Powering the Future of Clinical Lab IT, Digital Workflows &{'\n'}Streamlining Diagnostics Through Intelligent Systems, Workflows &{'\n'}Support</>
                    }
                </Text>
                
                <View style={[styles.actionContainer, isMobile && styles.actionContainerMobile]}>
                    <TouchableOpacity onPress={() => router.push('/contact')}>
                        <LinearGradient
                            colors={['#5f728a', '#1e2837']} // Matching gradient from screenshot
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.bookButtonGradient}
                        >
                            <Text style={styles.bookButtonText}>Book An Appointment</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        backgroundColor: '#000814', // Deep dark blue/black
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
 
    overlay: {
         ...StyleSheet.absoluteFillObject,
         backgroundColor: 'rgba(0,0,0,0.2)' // Slight darken
    },
    safeArea: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    heroContent: {
        paddingHorizontal: 60, 
        maxWidth: 1000, 
        marginTop: 40,
        alignSelf: 'center',
        width: '100%',
    },
    heroTitle: {
        color: 'white',
        fontSize: 42,
        fontFamily: Platform.select({ ios: 'Times New Roman', android: 'serif', web: 'serif' }),
        fontWeight: '700',
        lineHeight: 56,
        marginBottom: 20,
        ...Platform.select({
            web: {
               textShadow: '1px 1px 10px rgba(0, 0, 0, 0.9)',
            },
            default: {
                textShadowColor: 'rgba(0, 0, 0, 0.9)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 10
            }
        })
    },
    heroSubtitle: {
        color: '#e0e0e0', 
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 40,
        maxWidth: 800,
        fontFamily: Platform.select({ ios: 'Arial', android: 'sans-serif', web: 'sans-serif' }),
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookButtonGradient: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)', // Slightly lighter border for contrast
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookButtonText: {
        color: '#ffffff', // lighter blue-grey
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Platform.select({ ios: 'serif', android: 'serif', web: 'serif' }),
    },
    // Mobile Adjustments
    heroContentMobile: {
        paddingHorizontal: 20, // Slightly tighter padding for small screens
        marginTop: 10,
        marginBottom: 20,
    },
    heroTitleMobile: {
        fontSize: 28,
        lineHeight: 38,
        textAlign: 'left',
        marginBottom: 16,
    },
    heroSubtitleMobile: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'left',
        marginBottom: 24, // Reduced margin
        color: '#e0e0e0', // Ensure visibility
    },
    actionContainerMobile: {
        justifyContent: 'flex-start',
        marginBottom: 40,
        width: '100%', // Full width for better tap area
    }
});

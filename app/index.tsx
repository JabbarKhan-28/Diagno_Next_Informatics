import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';

// Safe import for BlurView
let BlurView: any;
try {
    BlurView = require('expo-blur').BlurView;
} catch (e) {
    BlurView = View; // Fallback to normal View if BlurView fails to load
}

export default function HomeScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const isAndroid = Platform.OS === 'android';

    const [mounted, setMounted] = React.useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const GlassContainer = ({ children, style }: { children: React.ReactNode, style?: any }) => {
        if (Platform.OS === 'web') {
            return (
                <View style={[styles.glassCard, style, { 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    backdropFilter: 'blur(30px) saturate(150%)',
                    backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)'
                } as any]}>
                    <View style={styles.glassGlow} />
                    {children}
                </View>
            );
        }
        
        const BlurComponent = BlurView || View;
        return (
            <BlurComponent intensity={20} tint="dark" style={[styles.glassCard, style]}>
                {children}
            </BlurComponent>
        );
    };

    if (isAndroid) {
        return (
            <View style={styles.androidContainer}>
                <StatusBar style="dark" />
                <SafeAreaView style={styles.safeArea}>
                    <NavBar />
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        <View style={styles.androidHeroWrapper}>
                            <View style={styles.androidMainCard}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>INFORMATICS SOLUTIONS</Text>
                                </View>

                                <Text style={styles.androidHeroTitle}>
                                    Revolutionizing <Text style={styles.androidHighlightText}>Healthcare</Text>{'\n'}
                                    Empowering <Text style={styles.androidHighlightText}>Clinical Labs</Text>
                                </Text>

                                <Text style={styles.androidHeroSubtitle}>
                                    Powering the future of Lab IT through intelligence, digital workflows, and seamless informatics integration.
                                </Text>

                                <View style={styles.androidActionContainer}>
                                    <TouchableOpacity 
                                        style={styles.androidBookButton} 
                                        onPress={() => router.push('/contact')}
                                    >
                                        <Text style={styles.androidBookButtonText}>Book Appointment</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        style={styles.androidLearnButton} 
                                        onPress={() => router.push('/about')}
                                    >
                                        <Text style={styles.androidLearnButtonText}>Learn More</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.androidDivider} />

                                <View style={styles.androidFeaturesRow}>
                                    <View style={styles.featureItem}>
                                        <Ionicons name="medical" size={18} color="#004a99" />
                                        <Text style={styles.androidFeatureText}>Digital Health</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <Ionicons name="pulse" size={18} color="#004a99" />
                                        <Text style={styles.androidFeatureText}>AI Diagnostics</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <Ionicons name="flash" size={18} color="#004a99" />
                                        <Text style={styles.androidFeatureText}>Smart Workflow</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                
                <View style={styles.androidBackgroundLayer} />
                <Image 
                    source={require('../assets/images/ui/about_bg.png')} 
                    style={styles.androidBackgroundImage}
                    contentFit="cover"
                />
                <View style={styles.androidBlueOverlay} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={[styles.backgroundContainer, { backgroundColor: '#000814' }]}>
                {mounted && (
                    <Video
                        key="bg-video-contain"
                        source={require('../assets/video/background.mp4')}
                        style={StyleSheet.absoluteFillObject}
                        resizeMode={ResizeMode.COVER}
                        shouldPlay
                        isLooping
                        isMuted
                    />
                )}
                <View style={styles.overlay} />
                {/* High-end lighting blobs for web */}
                {Platform.OS === 'web' && (
                    <>
                        <View style={[styles.bloom, { top: '20%', left: '10%', backgroundColor: '#007BFF22' }]} />
                        <View style={[styles.bloom, { bottom: '20%', right: '10%', backgroundColor: '#00D4FF11' }]} />
                    </>
                )}
            </View>

            <SafeAreaView style={styles.safeArea}>
                <NavBar />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.heroWrapper}>
                        <Animated.View 
                            entering={FadeInDown.duration(1000).springify()}
                            style={{ width: '100%', alignItems: 'center' }}
                        >
                            <GlassContainer style={[styles.heroContent, isMobile && styles.heroContentMobile]}>
                                {/* Chip Badge */}
                                <Animated.View entering={FadeInUp.delay(300).duration(800)}>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>INFORMATICS SOLUTIONS</Text>
                                    </View>
                                </Animated.View>

                                <Animated.Text 
                                    entering={FadeInUp.delay(500).duration(800)}
                                    style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}
                                >
                                    Revolutionizing <Text style={styles.highlightText}>Healthcare</Text>{'\n'}
                                    Empowering <Text style={styles.highlightText}>Clinical Labs</Text>
                                </Animated.Text>

                                <Animated.Text 
                                    entering={FadeInUp.delay(700).duration(800)}
                                    style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}
                                >
                                    Powering the future of Lab IT through intelligence, digital workflows, and seamless informatics integration.
                                </Animated.Text>
                                
                                <Animated.View 
                                    entering={FadeInUp.delay(900).duration(800)}
                                    style={[styles.actionContainer, isMobile && styles.actionContainerMobile]}
                                >
                                    <TouchableOpacity 
                                        style={styles.bookButton} 
                                        onPress={() => router.push('/contact')}
                                    >
                                        <View style={styles.buttonInner}>
                                            <Text style={styles.bookButtonText}>Book Appointment</Text>
                                            <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        style={styles.learnButton} 
                                        onPress={() => router.push('/about')}
                                    >
                                        <Text style={styles.learnButtonText}>Learn More</Text>
                                    </TouchableOpacity>
                                </Animated.View>

                                {/* Divider */}
                                <View style={styles.divider} />

                                {/* bottom features */}
                                <Animated.View 
                                    entering={FadeInUp.delay(1100).duration(800)}
                                    style={styles.featuresRow}
                                >
                                    <View style={styles.featureItem}>
                                        <Ionicons name="medical" size={18} color="#007BFF" />
                                        <Text style={styles.featureText}>Digital Health</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <Ionicons name="pulse" size={18} color="#007BFF" />
                                        <Text style={styles.featureText}>AI Diagnostics</Text>
                                    </View>
                                    <View style={styles.featureItem}>
                                        <Ionicons name="flash" size={18} color="#007BFF" />
                                        <Text style={styles.featureText}>Smart Workflow</Text>
                                    </View>
                                </Animated.View>
                            </GlassContainer>
                        </Animated.View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000814',
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.65)'
    },
    bloom: {
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: 300,
        filter: 'blur(100px)',
        zIndex: -1,
    } as any,
    safeArea: {
        flex: 1,
        zIndex: 10,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 40,
    },
    heroWrapper: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    glassCard: {
        borderRadius: 40,
        padding: 60,
        width: '100%',
        maxWidth: 900,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        ...Platform.select({
            web: {
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }
        })
    },
    glassGlow: {
        position: 'absolute',
        top: -100,
        left: -100,
        width: 400,
        height: 400,
        backgroundColor: 'rgba(0, 123, 255, 0.05)',
        filter: 'blur(80px)',
        borderRadius: 200,
    } as any,
    heroContent: {
        // base styling is in GlassContainer/glassCard
    },
    badge: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    badgeText: {
        color: '#007BFF',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    heroTitle: {
        color: 'white',
        fontSize: 53,
        fontWeight: '900',
        lineHeight: 62,
        marginBottom: 20,
        letterSpacing: -0.5,
        fontFamily: Platform.select({ ios: 'System', android: 'sans-serif-condensed', web: 'Outfit, Inter, sans-serif' }),
    },
    highlightText: {
        color: '#007BFF',
        textShadowColor: 'rgba(0, 123, 255, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    heroSubtitle: {
        color: '#94a3b8', 
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 36,
        maxWidth: 600,
        fontFamily: Platform.select({ ios: 'System', android: 'sans-serif', web: 'Inter, sans-serif' }),
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40,
    },
    buttonInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 18,
        paddingHorizontal: 36,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            web: {
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 123, 255, 0.3)',
            }
        })
    } as any,
    bookButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '700',
    },
    learnButton: {
        paddingVertical: 18,
        paddingHorizontal: 36,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            web: {
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            }
        })
    } as any,
    learnButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '100%',
        marginBottom: 30,
    },
    featuresRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 35,
        flexWrap: 'wrap',
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    featureText: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    heroContentMobile: {
        padding: 30,
        borderRadius: 30,
    },
    heroTitleMobile: {
        fontSize: 32,
        lineHeight: 40,
    },
    heroSubtitleMobile: {
        fontSize: 16,
        lineHeight: 24,
    },
    actionContainerMobile: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    // Android Specific Styles (Match other pages)
    androidContainer: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    androidHeroWrapper: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    androidMainCard: {
        borderRadius: 20,
        padding: 30,
        maxWidth: 600,
        width: '100%',
        backgroundColor: 'rgba(225, 248, 255, 0.9)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    androidHeroTitle: {
        fontSize: 28,
        color: '#004a99',
        fontWeight: 'bold',
        lineHeight: 36,
        marginBottom: 14,
        fontFamily: 'sans-serif-medium',
    },
    androidHighlightText: {
        color: '#007BFF',
    },
    androidHeroSubtitle: {
        fontSize: 16,
        color: '#334155',
        lineHeight: 24,
        marginBottom: 30,
        fontFamily: 'sans-serif',
    },
    androidActionContainer: {
        gap: 15,
        marginBottom: 30,
    },
    androidBookButton: {
        backgroundColor: '#004a99',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    androidBookButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    androidLearnButton: {
        borderWidth: 1,
        borderColor: '#004a99',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    androidLearnButtonText: {
        color: '#004a99',
        fontWeight: 'bold',
        fontSize: 16,
    },
    androidDivider: {
        height: 1,
        backgroundColor: 'rgba(0, 74, 153, 0.1)',
        width: '100%',
        marginBottom: 20,
    },
    androidFeaturesRow: {
        gap: 15,
    },
    androidFeatureText: {
        color: '#004a99',
        fontSize: 14,
        fontWeight: '600',
    },
    androidBackgroundLayer: {
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: '#fff',
        zIndex: 0,
    },
    androidBackgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0,
        bottom: 0,
        opacity: 0.3,
        zIndex: 1,
    },
    androidBlueOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
        zIndex: 2,
    },
});


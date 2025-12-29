import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavBar from '../components/NavBar';

export default function AboutScreen() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={styles.safeArea}>
                <NavBar />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={[styles.mainCard, isMobile && styles.mainCardMobile]}>
                        
                        <View style={[styles.textContent, isMobile && styles.textContentMobile]}>
                            <Text style={styles.pageTitle}>About Us</Text>
                            
                            <Text style={styles.sectionTitle}>CEO's Message</Text>
                            
                            <Text style={[styles.paragraph, isMobile && styles.paragraphMobile]}>
                                At Diagno Next Informatics, our vision is clear: to be a catalyst in revolutionizing 
                                healthcare by transforming how clinical laboratories operate, innovate, and deliver 
                                results. We are committed to empowering clinical labs with advanced data 
                                Intelligence and Informatics solutions, ensuring they are equipped to meet the 
                                evolving demands of modern medicine with speed, accuracy, and efficiency.
                            </Text>

                            <Text style={[styles.paragraph, isMobile && styles.paragraphMobile]}>
                                The future of diagnostics lies in digital transformation, and we are proud to stand at 
                                the forefront of this shift. Through intelligent systems, streamlined workflows, and 
                                robust IT support, Diagno Next Informatics is enabling laboratories to transition 
                                seamlessly from traditional processes to digitally or locally driven, integrated ecosystems. Our 
                                solutions are designed not just to enhance operational performance, but to elevate 
                                the role of diagnostics in shaping better healthcare decisions and improving patient 
                                outcomes.
                            </Text>

                            <Text style={[styles.paragraph, isMobile && styles.paragraphMobile]}>
                                Our tagline, <Text style={styles.boldText}>“Revolutionizing Healthcare, Empowering Clinical Labs with Data 
                                Intelligence & Informatics Solutions,”</Text> embodies our core mission to deliver 
                                innovation that matters.
                            </Text>

                            <Text style={[styles.paragraph, isMobile && styles.paragraphMobile]}>
                                As CEO, I am deeply proud of the passion and expertise of our team, whose relentless 
                                pursuit of excellence drives every solution we create. Together with our partners and 
                                clients, we are powering the future of clinical lab IT: forging a smarter, more 
                                connected, and patient-focused healthcare landscape.
                            </Text>
                        </View>

                        <View style={[styles.profileSection, isMobile && styles.profileSectionMobile]}>
                            <View style={styles.avatarContainer}>
                                <LinearGradient
                                    colors={['#b3e5fc', '#e1f5fe']}
                                    style={styles.avatar}
                                >
                                     <Text style={{fontSize: 50}}>👤</Text>
                                </LinearGradient>
                            </View>
                            <Text style={styles.profileName}>Dr Hina Ahsan</Text>
                            <Text style={styles.profileRole}>CEO Next Diagno Informatics</Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            
            <View style={styles.backgroundLayer} />
             <Image 
                source={require('../assets/images/ui/about_bg.png')} 
                style={styles.backgroundImage}
                contentFit="cover"
             />
             <View style={styles.blueOverlay} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    safeArea: {
        flex: 1,
        zIndex: 2,
    },
    backgroundLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        zIndex: 0,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0,
        bottom: 0,
        opacity: 0.3,
        zIndex: 0,
    },
    blueOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
        zIndex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    mainCard: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 40,
        maxWidth: 1200,
        width: '100%',
        ...Platform.select({
            web: {
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                backgroundColor: 'rgba(225, 248, 255, 0.5)', 
                backdropFilter: 'blur(5px)',
            },
            default: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                backgroundColor: 'rgba(225, 248, 255, 0.9)', 
            }
        }),
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'flex-start',
    },
    mainCardMobile: {
        flexDirection: 'column-reverse',
        padding: 24,
    },
    textContent: {
        flex: 2,
        paddingRight: 40,
    },
    textContentMobile: {
        paddingRight: 0,
        marginBottom: 0, 
    },
    profileSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 60,
    },
    profileSectionMobile: {
        paddingLeft: 0,
        marginTop: 0,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 36,
        color: '#004a99',
        fontWeight: 'bold',
        marginBottom: 8,
        fontFamily: Platform.select({ ios: 'Arial', android: 'sans-serif', web: 'sans-serif' }),
    },
    sectionTitle: {
        fontSize: 16,
        color: '#004a99',
        fontWeight: 'bold',
        marginBottom: 15,
        textTransform: 'uppercase',
    },
    paragraph: {
        fontSize: 14,
        color: '#334155',
        lineHeight: 22,
        marginBottom: 15,
        textAlign: 'justify',
    },
    paragraphMobile: {
        fontSize: 14, // Standard size often better for density
        lineHeight: 22,
        textAlign: 'left',
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#004a99',
    },
    avatarContainer: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 20,
        ...Platform.select({
            web: {
                boxShadow: '0px 4px 8px rgba(0,0,0,0.15)',
            },
            default: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
            }
        }),
        elevation: 5,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileName: {
        fontSize: 22,
        color: '#004a99',
        fontWeight: 'bold',
        marginTop: 10,
    },
    profileRole: {
        fontSize: 14,
        color: '#004a99',
        textAlign: 'center',
    },
});

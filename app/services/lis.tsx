import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavBar from '../../components/NavBar';

const LISServiceScreen = () => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={styles.safeArea}>
                <NavBar />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.contentContainer}>
                        <Text style={[styles.title, isMobile && styles.titleMobile]}>
                            Laboratory Information System (LIS) Implementation & Support
                        </Text>

                        <Text style={[styles.description, isMobile && styles.descriptionMobile]}>
                            A Laboratory Information System (LIS) Implementation & Support service focuses on deploying and
                            maintaining software solutions that manage and streamline laboratory operations. This involves
                            configuring the LIS to meet specific laboratory workflows, integrating it with instruments and
                            hospital systems, migrating historical data, and ensuring regulatory compliance. Post-
                            implementation, support includes troubleshooting, performance optimization, user training, and
                            regular updates to enhance efficiency, accuracy, and data security in laboratory processes.
                        </Text>

                        {/* Images Grid */}
                        <View style={[styles.imagesGrid, isMobile && styles.imagesGridMobile]}>
                             {/* Placeholder 1 */}
                            <View style={styles.imagePlaceholder}>
                               <Image 
                                    source={require('../../assets/images/lab_image_1.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                />
                            </View>
                            {/* Placeholder 2 */}
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                    source={require('../../assets/images/lab_image_2.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                />
                            </View>
                            {/* Placeholder 3 */}
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                    source={require('../../assets/images/lab_image_3.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* Background */}
            <View style={styles.backgroundLayer} />
            <Image 
                source={require('../../assets/images/about_bg.png')} 
                style={styles.backgroundImage}
                contentFit="cover"
             />
             <View style={styles.blueOverlay} />
        </View>
    );
}

export default LISServiceScreen;

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
        bottom: 0, // Light blue overlay to match theme
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
        zIndex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    contentContainer: {
        maxWidth: 1200,
        width: '100%',
        alignItems: 'center', // Center content horizontally
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#004a99',
        textAlign: 'center',
        marginBottom: 24,
        fontFamily: Platform.select({ ios: 'Arial', android: 'sans-serif', web: 'sans-serif' }),
    },
    titleMobile: {
        fontSize: 24,
        textAlign: 'left',
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        color: '#334155',
        textAlign: 'justify', // Per screenshot looks justified or centered? Screenshot looks left/justified.
        marginBottom: 40,
        maxWidth: 1000,
        ...Platform.select({
             web: {
                 // On web, textShadow helps readability against background
             }
        })
    },
    descriptionMobile: {
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 30,
    },
    imagesGrid: {
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        justifyContent: 'center', // Center them
        flexWrap: 'wrap',
    },
    imagesGridMobile: {
        flexDirection: 'column',
        gap: 20,
    },
    imagePlaceholder: {
        ...Platform.select({
            web: {
                width: '30%', 
                height: 200, // Explicit height for web to ensure visibility if aspectRatio fails
            },
            default: {
                width: '100%',
                aspectRatio: 16/9,
            }
        }),
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#e1f5fe', // Placeholder color
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        // flex: 0 removed, handled by width
    },
    gridImage: {
        width: '100%',
        height: '100%',
    }
});

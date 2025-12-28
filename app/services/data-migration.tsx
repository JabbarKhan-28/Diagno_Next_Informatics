import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavBar from '../../components/NavBar';

const DataMigrationServiceScreen = () => {
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
                            Data Migration, Management & Cloud Solutions
                        </Text>

                        <Text style={[styles.description, isMobile && styles.descriptionMobile]}>
                            Data Migration, Management & Cloud Solutions focus on securely transferring laboratory and clinical data
                            from existing systems to modern platforms, ensuring data integrity, compliance, and accessibility. These
                            solutions also include organizing, storing, and managing data in scalable cloud environments, enabling
                            faster access, improved collaboration, and reliable backup for seamless laboratory operations.
                        </Text>

                        {/* Images Grid */}
                        <View style={[styles.imagesGrid, isMobile && styles.imagesGridMobile]}>
                             {/* Image 1 */}
                            <View style={styles.imagePlaceholder}>
                               <Image 
                                    source={require('../../assets/images/dm_1.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                />
                            </View>
                            {/* Image 2 */}
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                    source={require('../../assets/images/dm_2.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                />
                            </View>
                            {/* Image 3 */}
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                    source={require('../../assets/images/dm_3.png')} 
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

export default DataMigrationServiceScreen;

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
        backgroundColor: 'rgba(173, 216, 230, 0.6)', // Increased opacity slightly to match the bluer look in the screenshot if needed, or keep 0.4
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
        alignItems: 'center',
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
        fontSize: 18, // Slightly larger looking in screenshot
        lineHeight: 28,
        color: '#004a99', // The text in screenshot looks blueish/dark blue, unlike the gray in LIS screen. Wait, screenshot text looks dark blue. LIS was #334155 (slate).
        textAlign: 'justify',
        marginBottom: 40,
        maxWidth: 1000,
        fontWeight: '500', // Looks slightly bolder
    },
    descriptionMobile: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 30,
    },
    imagesGrid: {
        flexDirection: 'row',
        gap: 40, // More spacing in screenshot?
        width: '100%',
        justifyContent: 'center', 
        flexWrap: 'wrap',
    },
    imagesGridMobile: {
        flexDirection: 'column',
        gap: 20,
    },
    imagePlaceholder: {
        ...Platform.select({
            web: {
                width: 300, // Fixed width to match square/rounded rect look
                height: 200, 
            },
            default: {
                width: '100%',
                aspectRatio: 3/2,
            }
        }),
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'transparent', 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    gridImage: {
        width: '100%',
        height: '100%',
    }
});

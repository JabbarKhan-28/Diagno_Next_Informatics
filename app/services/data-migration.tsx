import { Ionicons } from '@expo/vector-icons';
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

                        <View style={[styles.sectionHeader, isMobile && styles.sectionHeaderMobile]}>
                            <View style={styles.sectionLine} />
                            <View style={styles.sectionTitleContainer}>
                                <Ionicons name="images-outline" size={20} color="#004a99" />
                                <Text style={styles.sectionTitleText}>Visual Insights</Text>
                            </View>
                            <View style={styles.sectionLine} />
                        </View>

                        <View style={[styles.imagesGrid, isMobile && styles.imagesGridMobile]}>
                             <View style={styles.imagePlaceholder}>
                               <Image 
                                     source={require('../../assets/images/services/dm_1.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                    transition={200}
                                />
                            </View>
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                     source={require('../../assets/images/services/dm_2.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                    transition={200}
                                />
                            </View>
                             <View style={styles.imagePlaceholder}>
                                <Image 
                                     source={require('../../assets/images/services/dm_3.png')} 
                                    style={styles.gridImage} 
                                    contentFit="cover"
                                    transition={200}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={styles.backgroundLayer} />
            <Image 
                source={require('../../assets/images/ui/about_bg.png')} 
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
        backgroundColor: 'rgba(173, 216, 230, 0.6)',
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
        fontFamily: Platform.select({ 
            ios: 'Arial', 
            android: 'sans-serif-medium', 
            web: 'sans-serif' 
        }),
    },
    titleMobile: {
        fontSize: 24,
        textAlign: 'left',
    },
    description: {
        fontSize: 18,
        lineHeight: 28,
        color: '#004a99',
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
        gap: 40,
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imagesGridMobile: {
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
    },
    imagePlaceholder: {
        ...Platform.select({
            web: {
                width: '94%',
                maxWidth: 320,
                height: 260, 
            },
            default: {
                width: '94%',
                height: 260,
            }
        }),
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#ffffff', 
        borderWidth: 1.5,
        borderColor: '#f1f5f9',
        ...Platform.select({
            web: {
                boxShadow: '0px 8px 20px rgba(0, 74, 153, 0.1)',
            },
            android: {
                elevation: 12,
                shadowColor: "#004a99",
            },
            default: {
                shadowColor: "#004a99",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.15,
                shadowRadius: 10,
                elevation: 8,
            }
        }),
    },
    gridImage: {
        width: '100%',
        height: '100%',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
        width: '100%',
        gap: 15,
    },
    sectionHeaderMobile: {
        marginVertical: 30,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#e1f5fe',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 30,
    },
    sectionTitleText: {
        color: '#004a99',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    sectionLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(0, 74, 153, 0.1)',
    }
});

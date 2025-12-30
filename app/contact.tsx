import emailjs from '@emailjs/react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyledAlert from '../components/StyledAlert';

import NavBar from '../components/NavBar';

const ContactScreen = () => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = (type: 'success' | 'error', msg: string) => {
        setAlertType(type);
        setAlertMessage(msg);
        setAlertVisible(true);
    };

    const sendEmail = async () => {
        if (!firstName || !lastName || !email || !message) {
            showAlert('error', 'Please fill in all fields.');
            return;
        }

        setLoading(true);

        try {
            const serviceID = 'service_ytxjbl4';
            const templateID = 'template_bt945jo';
            const publicKey = '70UUo9eMlSEZH2fE0';

            const templateParams = {
                from_name: `${firstName} ${lastName}`,
                from_email: email, 
                message: message,
                time: new Date().toLocaleString(), // Fills the {{time}} field in your template
            };

            await emailjs.send(serviceID, templateID, templateParams, {
                publicKey: publicKey,
            });

            showAlert('success', 'Your message has been sent successfully!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        } catch (err: any) {
            console.error('EmailJS Error:', err);
            const errorMsg = err?.text || err?.message || 'An unexpected error occurred.';
            showAlert('error', `Failed to send: ${errorMsg}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={styles.safeArea}>
                <NavBar />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={[styles.contentWrapper, isMobile && styles.contentWrapperMobile]}>
                        
                        <View style={[styles.formContainer, isMobile && styles.formContainerMobile]}>
                            <Text style={styles.formTitle}>Fill the form</Text>
                            
                            <View style={[styles.formRow, isMobile && styles.formRowMobile]}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>First Name</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        placeholder="John" 
                                        placeholderTextColor="#6B7280"
                                        value={firstName}
                                        onChangeText={setFirstName}
                                    />
                                </View>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Last Name</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        placeholder="Doe" 
                                        placeholderTextColor="#6B7280"
                                        value={lastName}
                                        onChangeText={setLastName}
                                    />
                                </View>
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Email Address</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder="abc@gmail.com" 
                                    placeholderTextColor="#6B7280"
                                    keyboardType="email-address" 
                                    value={email}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Message</Text>
                                <TextInput 
                                    style={[styles.input, styles.textArea]} 
                                    placeholder="How can we help you?"
                                    placeholderTextColor="#6B7280" 
                                    multiline 
                                    numberOfLines={4}
                                    textAlignVertical="top" 
                                    value={message}
                                    onChangeText={setMessage}
                                />
                            </View>

                            <TouchableOpacity style={styles.submitButton} onPress={sendEmail} disabled={loading}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#ffffff" />
                                ) : (
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                )}
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.infoContainer, isMobile && styles.infoContainerMobile]}>
                            <Text style={[styles.infoTitle, isMobile && styles.infoTitleMobile]}>Get in{'\n'}Touch</Text>
                            
                            <Text style={[styles.infoDescription, isMobile && styles.infoDescriptionMobile]}>
                                Whether you have questions about our services, need support, or want to share your feedback, our dedicated team is here to assist you every step of the way.
                            </Text>

                            <View style={[styles.contactDetailsRow, isMobile && styles.contactDetailsRowMobile]}>
                                <View style={[styles.contactItem, isMobile && styles.contactItemMobile]}>
                                    <Text style={styles.contactLabel}>Email</Text>
                                    <View style={styles.contactValueContainer}>
                                        <View style={styles.iconBox}>
                                            <Ionicons name="mail" size={16} color="white" />
                                        </View>
                                        <Text style={styles.contactValue}>hinaraees80@gmail.com</Text>
                                    </View>
                                </View>

                                <View style={[styles.contactItem, isMobile && styles.contactItemMobile]}>
                                    <Text style={styles.contactLabel}>Phone</Text>
                                    <View style={styles.contactValueContainer}>
                                        <View style={styles.iconBox}>
                                            <Ionicons name="call" size={16} color="white" />
                                        </View>
                                        <Text style={styles.contactValue}>00923335584214</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

            <StyledAlert 
                visible={alertVisible}
                type={alertType}
                message={alertMessage}
                onClose={() => setAlertVisible(false)}
            />

            <LinearGradient
                colors={['#F0F9FF', '#BAE6FD', '#7DD3FC']}
                locations={[0, 0.5, 1]}
                style={styles.backgroundGradient}
            />
        </View>
    );
}

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        zIndex: 2,
    },
    backgroundGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    contentWrapper: {
        flexDirection: 'row',
        maxWidth: 1000,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 60,
    },
    contentWrapperMobile: {
        flexDirection: 'column', 
        gap: 40,
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#4a8bdd', 
        borderRadius: 20,
        padding: 40,
        width: '100%',
        maxWidth: 500,
        ...Platform.select({
            web: {
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            },
            android: {
                elevation: 10,
                shadowColor: "#000",
            },
            default: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
            }
        }),
    },
    formContainerMobile: {
        padding: 25,
    },
    formTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
        fontFamily: Platform.select({ 
            ios: 'Arial', 
            android: 'sans-serif-medium', 
            web: 'sans-serif' 
        }),
    },
    formRow: {
        flexDirection: 'row',
        gap: 20,
    },
    formRowMobile: {
        flexDirection: 'column',
        gap: 0,
    },
    inputGroup: {
        flex: 1,
        marginBottom: 20,
    },
    label: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        width: '100%',
    },
    textArea: {
        height: 120,
        paddingTop: 12,
    },
    submitButton: {
        backgroundColor: '#003e80', 
        borderRadius: 50,
        paddingVertical: 14,
        paddingHorizontal: 40,
        alignSelf: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end', // Align container items to the right
    },
    infoContainerMobile: {
        width: '100%',
        alignItems: 'center', // Center on mobile
    },
    infoTitle: {
        fontSize: 60,
        fontWeight: '800',
        color: '#003e80',
        lineHeight: Platform.OS === 'android' ? 70 : 60,
        marginBottom: 20,
        fontFamily: Platform.select({ 
            ios: 'Arial', 
            android: 'sans-serif-medium', 
            web: 'sans-serif' 
        }),
        textAlign: 'right', // Right align title
    },
    infoTitleMobile: {
        textAlign: 'center',
    },
    infoDescription: {
        fontSize: 18,
        color: '#004a99',
        lineHeight: 28,
        marginBottom: 40,
        maxWidth: 400,
        opacity: 1, // Removed opacity for better visibility with new color
        textAlign: 'right',
        fontWeight: '500',
    },
    infoDescriptionMobile: {
        textAlign: 'center',
    },
    contactDetailsRow: {
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'flex-end',
        width: '100%',
    },
    contactDetailsRowMobile: {
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactItem: {
        gap: 5,
        alignItems: 'flex-end',
    },
    contactItemMobile: {
        alignItems: 'center',
    },
    contactLabel: {
        color: '#003e80',
        fontSize: 14,
        fontWeight: '600',
        opacity: 0.9,
    },
    contactValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconBox: {
        backgroundColor: '#003e80',
        width: 30,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactValue: {
        color: '#003e80',
        fontSize: 16,
        fontWeight: '600',
    },
});

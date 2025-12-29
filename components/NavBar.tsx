import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const { width } = useWindowDimensions();
    const showNavLinks = width >= 768; // Show links only on tablet/desktop
    const [menuVisible, setMenuVisible] = useState(false);
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
    const [expertiseDropdownVisible, setExpertiseDropdownVisible] = useState(false);

    const services = [
        { title: 'Laboratory Information System (LIS) Implementation & Support', path: '/services/lis' },
        { title: 'Data Migration, Management & Cloud Solutions', path: '/services/data-migration' },
        { title: 'Custom Dashboard & Reporting Tools for Labs & Clinics', path: '/services/dashboard' },
        { title: 'Workflow Mapping & Optimization Consulting', path: '/services/workflow' },
        { title: 'IT Infrastructure Setup & Managed Services for Labs', path: '/services/infrastructure' },
        { title: 'Remote Support, Troubleshooting & Maintenance', path: '/services/support' },
        { title: 'Training & Capacity Building for Lab Staff on Digital Tools', path: '/services/training' },
        { title: 'Integration of Diagnostic Devices & Middleware Systems', path: '/services/integration' },
        { title: 'AI-Powered Diagnostic Assistance & Decision Support Modules', path: '/services/ai' },
        { title: 'Business Intelligence Services - KPI Monitoring & Performance Analytics', path: '/services/bi' },
    ];

    const expertise = [
        { title: 'Clinical Laboratory Informatics', path: '/expertise/clinical-informatics' },
        { title: 'Healthcare Data Intelligence', path: '/expertise/healthcare-data' },
        { title: 'Digital Workflow Transformation', path: '/expertise/digital-workflow' },
        { title: 'Diagnostics IT Solutions', path: '/expertise/diagnostics-it' },
        { title: 'Interoperability', path: '/expertise/interoperability' },
        { title: 'Regulatory Compliance & Data Security', path: '/expertise/regulatory' },
        { title: 'AI & Automation in Diagnostics', path: '/expertise/ai-automation' },
        { title: 'Custom Software Development', path: '/expertise/custom-software' },
    ];

    const onNavPress = (path: string) => {
        setMenuVisible(false);
        setServicesDropdownVisible(false);
        setExpertiseDropdownVisible(false); // Close all menus
        router.push(path as any);
    };

    const isServicesActive = pathname.startsWith('/services');
    const isExpertiseActive = pathname.startsWith('/expertise');

    return (
        <View style={styles.navBarContainer}>
            {showNavLinks ? (
                // Desktop View
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Image 
                            source={require('../assets/images/logo/Logo.svg')} 
                            style={styles.logo} 
                            
                            contentFit="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.navLinks}>
                        <TouchableOpacity 
                            onPress={() => router.push('/')}
                            style={[styles.navLinkContainer, pathname === '/' && styles.activeNavLinkContainer]}
                        >
                            <Text style={[styles.navLink, pathname === '/' && styles.activeNavLinkText]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => router.push('/about')}
                            style={[styles.navLinkContainer, pathname === '/about' && styles.activeNavLinkContainer]}
                        >
                            <Text style={[styles.navLink, pathname === '/about' && styles.activeNavLinkText]}>About Us</Text>
                        </TouchableOpacity>
                        <View style={{ zIndex: 12 }}> 
                            <TouchableOpacity 
                                style={[styles.dropdownLink, isServicesActive && styles.activeNavLinkContainer]} 
                                onPress={() => {
                                    setServicesDropdownVisible(!servicesDropdownVisible);
                                    setExpertiseDropdownVisible(false);
                                }}
                            >
                                <Text style={[styles.navLink, isServicesActive && styles.activeNavLinkText]}>Services & Solutions</Text>
                                <Ionicons name={servicesDropdownVisible ? "caret-up" : "caret-down"} size={12} color={isServicesActive ? "#ffffff" : "#004a99"} style={styles.caret} /> 
                            </TouchableOpacity>
                            
                            {/* Desktop Services Dropdown Menu */}
                            {servicesDropdownVisible && (
                                <View style={styles.dropdownMenu}>
                                    {services.map((bg, index) => (
                                        <TouchableOpacity 
                                            key={index} 
                                            style={[styles.dropdownItem, pathname === bg.path && styles.activeDropdownItem]}
                                            onPress={() => onNavPress(bg.path)}
                                        >
                                            <Text style={[styles.dropdownItemText, pathname === bg.path && styles.activeDropdownItemText]}>{bg.title}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                        <View style={{ zIndex: 11 }}>
                            <TouchableOpacity 
                                style={[styles.dropdownLink, isExpertiseActive && styles.activeNavLinkContainer]}
                                onPress={() => {
                                    setExpertiseDropdownVisible(!expertiseDropdownVisible);
                                    setServicesDropdownVisible(false);
                                }}
                            >
                                <Text style={[styles.navLink, isExpertiseActive && styles.activeNavLinkText]}>Our Expertise</Text>
                                <Ionicons name={expertiseDropdownVisible ? "caret-up" : "caret-down"} size={12} color={isExpertiseActive ? "#ffffff" : "#004a99"} style={styles.caret} /> 
                            </TouchableOpacity>

                            {/* Desktop Expertise Dropdown Menu */}
                            {expertiseDropdownVisible && (
                                <View style={[styles.dropdownMenu, { left: -50, width: 280 }]}> 
                                    {expertise.map((exp, index) => (
                                        <TouchableOpacity 
                                            key={index} 
                                            style={[styles.dropdownItem, pathname === exp.path && styles.activeDropdownItem]}
                                            onPress={() => onNavPress(exp.path)}
                                        >
                                            <Text style={[styles.dropdownItemText, pathname === exp.path && styles.activeDropdownItemText]}>{exp.title}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                        <TouchableOpacity 
                            onPress={() => router.push('/contact')} // Assuming /contact route exists, if not it will just push active state
                            style={[styles.navLinkContainer, pathname === '/contact' && styles.activeNavLinkContainer]}
                        >
                            <Text style={[styles.navLink, pathname === '/contact' && styles.activeNavLinkText]}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                // Mobile View - Distinct Structure
                <View style={styles.mobileNavContainer}>
                        <Image 
                        source={require('../assets/images/logo/Logo.svg')} 
                        style={styles.logoMobile} 
                        contentFit="contain"
                    />
                    <TouchableOpacity style={styles.menuButtonMobile} onPress={() => setMenuVisible(true)}>
                        <Ionicons name="menu" size={32} color="#004a99" />
                    </TouchableOpacity>

                    <Modal
                        visible={menuVisible}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() => setMenuVisible(false)}
                    >
                        <TouchableOpacity 
                            style={styles.modalOverlay} 
                            activeOpacity={1} 
                            onPress={() => setMenuVisible(false)}
                        >
                            <View style={styles.sidebarContainer}>
                                <View style={styles.sidebarHeader}>
                                        <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeButton}>
                                        <Ionicons name="close" size={30} color="#004a99" />
                                    </TouchableOpacity>
                                </View>
                                
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
                                    <View style={styles.sidebarLinks}>
                                    <TouchableOpacity 
                                        onPress={() => onNavPress('/')} 
                                        style={[styles.sidebarLinkItem, pathname === '/' && styles.activeSidebarLinkItem]}
                                    >
                                        <Text style={[styles.sidebarLinkText, pathname === '/' && styles.activeSidebarLinkText]}>Home</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={() => onNavPress('/about')} 
                                        style={[styles.sidebarLinkItem, pathname === '/about' && styles.activeSidebarLinkItem]}
                                    >
                                        <Text style={[styles.sidebarLinkText, pathname === '/about' && styles.activeSidebarLinkText]}>About Us</Text>
                                    </TouchableOpacity>
                                    
                                    {/* Services & Solutions */}
                                    <TouchableOpacity onPress={() => setServicesDropdownVisible(!servicesDropdownVisible)} style={styles.sidebarLinkItem}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={styles.sidebarLinkText}>Services & Solutions</Text>
                                            <Ionicons name={servicesDropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="#004a99" />
                                        </View>
                                    </TouchableOpacity>
                                    {servicesDropdownVisible && (
                                        <View style={styles.mobileAccordion}>
                                            {services.map((service, index) => (
                                                <TouchableOpacity 
                                                    key={index} 
                                                    style={[styles.accordionItem, pathname === service.path && styles.activeAccordionItem]}
                                                    onPress={() => onNavPress(service.path)}
                                                >
                                                    <Text style={[styles.accordionText, pathname === service.path && styles.activeAccordionText]}>{service.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )}

                                    {/* Our Expertise */}
                                    <TouchableOpacity onPress={() => setExpertiseDropdownVisible(!expertiseDropdownVisible)} style={styles.sidebarLinkItem}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={styles.sidebarLinkText}>Our Expertise</Text>
                                            <Ionicons name={expertiseDropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="#004a99" />
                                        </View>
                                    </TouchableOpacity>
                                    {expertiseDropdownVisible && (
                                        <View style={styles.mobileAccordion}>
                                            {expertise.map((exp, index) => (
                                                <TouchableOpacity 
                                                    key={index} 
                                                    style={[styles.accordionItem, pathname === exp.path && styles.activeAccordionItem]}
                                                    onPress={() => onNavPress(exp.path)}
                                                >
                                                    <Text style={[styles.accordionText, pathname === exp.path && styles.activeAccordionText]}>{exp.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )}

                                    <TouchableOpacity 
                                        onPress={() => onNavPress('/contact')}
                                        style={[styles.sidebarLinkItem, pathname === '/contact' && styles.activeSidebarLinkItem]}
                                    >
                                        <Text style={[styles.sidebarLinkText, pathname === '/contact' && styles.activeSidebarLinkText]}>Contact Us</Text>
                                    </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    navBarContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
        zIndex: 50,
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1200, 
        height: 70, // Fixed height for pill shape
        ...Platform.select({
            web: {
                boxShadow: '0px 2px 3.84px rgba(0,0,0,0.25)', 
            },
            default: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            }
        }),
        elevation: 5,
    },
    logo: {
        width: 200, 
        height: 70,
    },
    navLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15, // Reduced gap to accommodate buttons
    },
    navLinkContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    activeNavLinkContainer: {
        backgroundColor: '#007BFF',
    },
    activeNavLinkText: {
        color: '#ffffff',
    },
    navLink: {
        color: '#031224', 
        fontWeight: Platform.OS === 'android' ? '700' : '600',
        fontSize: 15,
        fontFamily: Platform.select({ ios: 'System', android: 'sans-serif-medium', web: 'Inter, sans-serif' }),
        letterSpacing: Platform.OS === 'android' ? 0.3 : 0,
    },
    dropdownLink: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    caret: {
        marginTop: 2,
    },
    menuButton: {
        padding: 5,
    },
    navBarMobile: {
        paddingHorizontal: 0,
    },
    // New Mobile Specific Styles
    mobileNavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.95)', // Slightly transparent nav bar
        borderRadius: 30, // Keep rounded look but distinct
        ...Platform.select({
            web: {
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
            },
            default: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            }
        }),
        elevation: 5,
    },
    logoMobile: {
        width: 140,
        height: 50,
    },
    menuButtonMobile: {
        padding: 5,
    },
    // Sidebar
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)', // Dimer background
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    sidebarContainer: {
        width: '75%',
        height: '100%', // Full height
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Less transparent / Glassy background as requested
        padding: 25,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        ...Platform.select({
            web: {
                backdropFilter: 'blur(15px)', 
            },
            android: {
                elevation: 10,
                borderLeftWidth: 1,
                borderLeftColor: 'rgba(0, 74, 153, 0.1)',
            }
        })
    },
    sidebarHeader: {
        alignItems: 'flex-end',
        marginBottom: 50,
    },
    closeButton: {
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 20,
    },
    sidebarLinks: {
        gap: 25,
    },
    sidebarLinkItem: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        // Removed border bottom for cleaner look on transparent bg
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.3)', // Subtle highlight for items
    },
    activeSidebarLinkItem: {
        backgroundColor: '#004a99',
    },
    sidebarLinkText: {
        fontSize: 18,
        color: '#004a99',
        fontWeight: Platform.OS === 'android' ? 'bold' : '700',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : undefined,
    },
    activeSidebarLinkText: {
        color: '#ffffff',
    },
    // Desktop Dropdown Styles
    dropdownMenu: {
        position: 'absolute',
        top: 45, // Below the link
        left: -80, // Center relative to parent roughly, or align left
        backgroundColor: '#004a99', // Blue background
        borderRadius: 5,
        paddingVertical: 5,
        width: 350, // Wider for long text
        ...Platform.select({
            web: {
                boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
            },
            default: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }
        }),
        elevation: 10,
        zIndex: 1000,
    },
    dropdownItem: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)', // Light divider
        alignItems: 'center', // Center text
    },
    activeDropdownItem: {
        backgroundColor: '#ffffff', // White background for active item
    },
    dropdownItemText: {
        fontSize: 13,
        color: '#ffffff', // White text
        fontWeight: '500',
        textAlign: 'center',
    },
    activeDropdownItemText: {
        color: '#004a99', // Blue text for active item
        fontWeight: '700',
    },
    // Mobile Accordion Styles
    mobileAccordion: {
        marginLeft: 20,
        marginTop: 5,
        borderLeftWidth: 2,
        borderLeftColor: 'rgba(0, 74, 153, 0.3)',
        paddingLeft: 10,
    },
    accordionItem: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    activeAccordionItem: {
         backgroundColor: '#004a99',
    },
    accordionText: {
        fontSize: 16,
        color: '#334155',
        fontWeight: '500',
    },
    activeAccordionText: {
        color: '#ffffff',
    }
});

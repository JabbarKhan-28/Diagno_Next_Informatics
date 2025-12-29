/**
 * Speed Insights initialization
 * This module initializes Vercel Speed Insights for performance monitoring
 */

export function initializeSpeedInsights() {
  // Only initialize on web platform
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const { injectSpeedInsights } = require('@vercel/speed-insights');
    injectSpeedInsights();
  } catch (error) {
    console.warn('Failed to initialize Speed Insights:', error);
  }
}

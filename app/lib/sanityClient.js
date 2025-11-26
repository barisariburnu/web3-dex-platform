import sanityClient from '@sanity/client';

// Get environment variables with fallbacks for build time
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';
const token = process.env.SANITY_API_TOKEN;

// Initialize client - will work at build time with placeholder values
export const client = sanityClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true, // Suppress warnings in development
});

// Helper to check if Sanity is properly configured
export const isSanityConfigured = () => {
    return projectId !== 'placeholder' && projectId !== '';
};
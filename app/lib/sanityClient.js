import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: 'v1',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});
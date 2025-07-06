import { useEffect } from 'react';

export const useVisitorTracking = (page: string) => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Check if we're in development mode and skip tracking if needed
        if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_TRACKING) {
          console.log('Visitor tracking disabled in development mode');
          return;
        }

        // Ensure we have the required environment variables
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          console.warn('Missing Supabase environment variables - visitor tracking disabled');
          return;
        }

        // Construct the function URL
        const baseUrl = supabaseUrl.replace(/\/$/, '');
        const functionUrl = `${baseUrl}/functions/v1/track-visit`;

        console.log('Tracking visit to:', page);

        const response = await fetch(functionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({
            page: page || window.location.pathname,
            referrer: document.referrer || null
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log('Visit tracked successfully:', data);
      } catch (error) {
        // Only log errors in development mode to avoid console spam in production
        if (import.meta.env.DEV) {
          console.error('Error tracking visit:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            page,
            referrer: document.referrer,
            timestamp: new Date().toISOString()
          });
        }
      }
    };

    // Add a small delay to avoid blocking the initial page render
    const timeoutId = setTimeout(trackVisit, 100);
    
    return () => clearTimeout(timeoutId);
  }, [page]);
};
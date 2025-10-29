import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('[ScrollToTop] Pathname changed to:', pathname);
    
    // Find the scrollable main container (Sidebar wraps content in a <main> with overflow-y-auto)
    const mainContainer = document.querySelector('main.overflow-y-auto');
    console.log('[ScrollToTop] Found main container:', mainContainer);
    
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll the main container, not window
    if (mainContainer) {
      console.log('[ScrollToTop] Main container scroll position before:', mainContainer.scrollTop);
      mainContainer.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      mainContainer.scrollTop = 0;
      console.log('[ScrollToTop] Main container scroll position after:', mainContainer.scrollTop);
      
      // Also scroll window as fallback
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Check and scroll again after delays
      [100, 200, 300, 500].forEach(delay => {
        setTimeout(() => {
          if (mainContainer.scrollTop > 0) {
            console.log(`[ScrollToTop] Main container scroll detected at ${delay}ms:`, mainContainer.scrollTop);
            mainContainer.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            mainContainer.scrollTop = 0;
          }
        }, delay);
      });
    } else {
      console.warn('[ScrollToTop] Main container not found, using window scroll');
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

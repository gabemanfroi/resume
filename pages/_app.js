import '../styles/globals.css';
import { PersonalWebsiteProvider } from '../modules/PersonalWebsite/contexts/WebsiteContentContext';
import { SidebarProvider } from '../modules/Shared/contexts/SidebarContext';
import { LoadingProvider } from '../modules/Shared/contexts/LoadingContext';
import { ScreenSizeProvider } from '../modules/Shared/contexts/ScreenSizeContext';
import { LeftPanelProvider } from '../modules/Shared/contexts/LeftPanelContext';

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <ScreenSizeProvider>
        <PersonalWebsiteProvider>
          <LeftPanelProvider>
            <SidebarProvider>
              <Component {...pageProps} />
            </SidebarProvider>
          </LeftPanelProvider>
        </PersonalWebsiteProvider>
      </ScreenSizeProvider>
    </LoadingProvider>
  );
}

export default MyApp;

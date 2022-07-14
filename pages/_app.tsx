import '../styles/globals.css';
import { PersonalWebsiteProvider } from '../modules/PersonalWebsite/contexts/PersonalWebsiteContext';
import { LeftPanelProvider, LoadingProvider, ScreenSizeProvider, SidebarProvider } from 'modules/Shared/contexts';

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

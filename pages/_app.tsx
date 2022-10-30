import '../styles/globals.css';
import { ResumeProvider } from 'modules/Resume/contexts';
import {
  EditModeProvider,
  LeftPanelProvider,
  LoadingProvider,
  ScreenSizeProvider,
  SidebarProvider,
} from 'modules/Shared/contexts';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material';
import { theme } from 'modules/Shared/theme/theme';
import DialogProvider from 'modules/Shared/contexts/DialogContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
        rel="stylesheet"
      />
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <ScreenSizeProvider>
            <ThemeProvider theme={theme}>
              <ResumeProvider>
                <EditModeProvider>
                  <DialogProvider>
                    <LeftPanelProvider>
                      <SidebarProvider>
                        <Component {...pageProps} />
                      </SidebarProvider>
                    </LeftPanelProvider>
                  </DialogProvider>
                </EditModeProvider>
              </ResumeProvider>
            </ThemeProvider>
          </ScreenSizeProvider>
          <ReactQueryDevtools />
        </LoadingProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

import '../styles/globals.css';
import { ResumeProvider } from '../modules/Resume/contexts/ResumeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ResumeProvider>
      <Component {...pageProps} />
    </ResumeProvider>
  )

}

export default MyApp;

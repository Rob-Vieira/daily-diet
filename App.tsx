import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Loading } from '@components/Loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Routes } from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      
      {
        fontLoaded
        ? <Routes />
        : <Loading showLogo />
      }

    </ThemeProvider>
  );
}
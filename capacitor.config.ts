import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'test-capacitor',
  webDir: 'dist/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;

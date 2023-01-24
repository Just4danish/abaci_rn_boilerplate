/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AuthProvider } from './src/context/AuthContext';
import { AxiosProvider } from './src/context/AxiosContext';
import { NavigationProvider } from './src/context/NavigationContext';
import { ToastProvider } from './src/context/ToastContext';


const Root = () => {
    return (
        <AuthProvider>
            <ToastProvider>
                <AxiosProvider>
                    <NavigationProvider>
                        <App />
                    </NavigationProvider>
                </AxiosProvider>
            </ToastProvider>
        </AuthProvider>
    );
};

AppRegistry.registerComponent(appName, () => Root);;

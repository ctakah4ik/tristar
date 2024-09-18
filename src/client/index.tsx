import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Layout, ConfigProvider, theme } from 'antd';


const styleLayout = {
    minHeight: '100vh',
};

const App: React.FC = () => {
    return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <Layout style={styleLayout}>
                Заглушка
            </Layout>
        </ConfigProvider>
    );
};

export default App;

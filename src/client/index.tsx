import React from "react";
import { RouterProvider } from "react-router-dom";
import { Layout, ConfigProvider, theme } from "antd";
import { router } from "./routes";
import { PageHeader } from "./components/page-header";
import { PageFooter } from "./components/page-footer";
import { PageBreadcrumb } from "./components/page-breadcrumb";

const styleContent = {
  padding: "0 48px",
};
const styleWrapper = {
  background: "#fff",
  minHeight: 280,
  padding: 24,
  borderRadius: 8,
};

const styleLayout = {
  minHeight: "100vh",
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <Layout style={styleLayout}>
        <PageHeader />
        <Layout.Content style={styleContent}>
          <PageBreadcrumb />
          <div style={styleWrapper}>
            <RouterProvider router={router} />
          </div>
        </Layout.Content>
        <PageFooter />
      </Layout>
    </ConfigProvider>
  );
};

export default App;

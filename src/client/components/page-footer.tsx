import React from "react";
import { Layout } from "antd";

const style = {
  padding: "0 48px",
};

export const PageFooter: React.FC = () => {
  return (
    <Layout.Footer style={style}>
      Ant Design ©{new Date().getFullYear()}
    </Layout.Footer>
  );
};

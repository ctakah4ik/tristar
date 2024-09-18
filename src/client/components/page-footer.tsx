import React from "react";
import { Layout, Divider } from "antd";

const style = {
  padding: "0 48px",
};

export const PageFooter: React.FC = () => {
  return (
    <Layout.Footer style={style}>
      <Divider>Ant Design ©{new Date().getFullYear()}</Divider>
    </Layout.Footer>
  );
};

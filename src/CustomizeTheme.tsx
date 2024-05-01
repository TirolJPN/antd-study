import { Button, ConfigProvider, Space } from "antd";


const CustomizeTheme = () => (
  <ConfigProvider
    theme={{
      token: {
        // By modifying token property of theme, we can modify Design Token globally. Some tokens will affect other tokens. We call these tokens Seed Token.
        // https://ant.design/docs/react/customize-theme#customize-design-token

        // seed token
        colorPrimary: '#ffb91b',
        borderRadius: 20,
        // Alias Token
        colorBgContainer: '#f6ffed',
      }
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
)

export default CustomizeTheme
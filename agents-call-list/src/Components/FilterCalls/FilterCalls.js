import React from "react";
import { Row, Col, Space, Layout } from "antd";
import { ReactComponent as Logo } from '../../favicon-prodigal.svg';

import { Menu } from "antd";

import {
  HomeOutlined,
  ProfileOutlined,
  ContactsOutlined,
  InteractionOutlined,
  SettingOutlined 
} from "@ant-design/icons";

import DashboardTable from "../DashboardTable";
import FilterComponent from "./FilterComponent";
import AutoSearch from "./AutoSearch";
import FilterHeader from "../FilterHeader";

const { Content, Sider } = Layout;

function FilterCalls() {
  return (
    <Layout className="body">
      <Sider className="site-layout-background" width={80} >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%"}}
        >
          <Menu.Item key="sub0">
            <Logo width={40} style={{display: 'block'}} />
          </Menu.Item>
          <Menu.Item key="sub1" icon={<HomeOutlined style={{fontSize:20, color:'#B8B7B7'}} />}></Menu.Item>
          <Menu.Item key="sub2" icon={<ProfileOutlined style={{fontSize:20, color:'#B8B7B7'}}/>}></Menu.Item>
          <Menu.Item key="sub3" icon={<ContactsOutlined style={{fontSize:20, color:'#B8B7B7'}}/>}></Menu.Item>
          <Menu.Item key="sub4" icon={<InteractionOutlined style={{fontSize:20, color:'#B8B7B7'}}/>}></Menu.Item>
          <Menu.Item key="sub5" icon={<SettingOutlined style={{fontSize:20, color:'#B8B7B7'}}/>}></Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <FilterHeader />
        <Row>
          <Space align="top">
            <Col flex={3}>
              <AutoSearch />
              <DashboardTable />
            </Col>
            <Col flex={2}>
              <FilterComponent />
            </Col>
          </Space>
        </Row>
      </Content>
    </Layout>
  );
}

export default FilterCalls;

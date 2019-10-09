import React from 'react';
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from 'images/sloth-logo.png';

import { colors } from 'config/style/theme';
import LanguageSwitcher from './LanguageSwitcher';

const { Header } = Layout;

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Header>
      <Row type="flex" justify="space-between" align="middle">
        <Col push={1}>
          <Row type="flex" justify="start">
            <Col>
              <img src={logo} alt="" height={32} />
            </Col>
            <Col push={1}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                  lineHeight: '55px',
                  width: '100%',
                }}
              >
                <Menu.Item key="1">
                  {t('navbar.home')}
                  <NavLink to="/home" />
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col pull={1}>
          <Row
            type="flex"
            justify="end"
            align="middle"
            style={{ height: '100%' }}
          >
            <Col>
              <LanguageSwitcher />
            </Col>
            <Col>
              <Avatar
                style={{
                  color: colors.primary,
                  backgroundColor: colors.secondary,
                }}
                icon="user"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;

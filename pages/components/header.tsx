import React from 'react';
import { Popover } from 'antd';
import GitHubButton from 'react-github-button';
import styles from './index.module.scss';
import 'react-github-button/assets/style.css';

const Header: React.FC = () => {
  return (
    <header className={styles.site_header}>
      <div className={styles.site_title}>
        <h1 style={{ margin: 0 }}>📚 Lint Markdown</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className={styles.actions}
            style={{ position: 'absolute', right: '24px' }}
          >
            <Popover
              content="客人，来个 star 呗 😉"
              placement="topRight"
              arrowPointAtCenter
            >
              <GitHubButton type="stargazers" namespace="lint-md" repo="lint-md"/>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

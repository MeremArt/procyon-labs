import React, { ReactNode } from "react";
import SideBar from '../ui/sponsorsDashboard/sideBar';
import Navbar from "../ui/dashboard/navBar/Navbar";
import styles from "./sponsorsDashboard.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

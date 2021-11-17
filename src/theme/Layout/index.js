import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
/***
 * animation plugins
 */
import AOS from 'aos';
import 'aos/dist/aos.css';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import './styles.scss';

if (ExecutionEnvironment.canUseDOM) {
  AOS.init();
}
function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName
  } = props;
  useKeyboardNavigation();
  return <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div className={clsx('gl-main-wrapper', wrapperClassName)}>{children}</div>

      {!noFooter && <Footer />}
    </LayoutProviders>;
}
 
export default Layout;

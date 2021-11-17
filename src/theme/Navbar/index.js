
import React, { useCallback, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import NavbarItem from '@theme/NavbarItem';
import LogoPngUrl from '@site/static/img/common/logo.png';
import styles from './styles.module.scss';
import SvgHamburger from '@site/src/svg/Hamburger';
const DefaultNavItemPosition = 'right';

 const mobileLogoStyle = {width: '8vw', height: '8vw'};
 function splitNavItemsByPosition(items) {
   const leftItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'left');
   return {
     leftItems
   };
 }
 
function Navbar() {
   const {
     navbar: {
       items,
       hideOnScroll,
       style
     }
   } = useThemeConfig();
   const [sidebarShown, setSidebarShown] = useState(false);
   const {
     navbarRef,
     isNavbarVisible
   } = useHideableNavbar(hideOnScroll);
   useLockBodyScroll(sidebarShown);
   const showSidebar = useCallback(() => {
     setSidebarShown(true);
   }, [setSidebarShown]);
   const hideSidebar = useCallback(() => {
     setSidebarShown(false);
   }, [setSidebarShown]);
   const {
     leftItems
   } = splitNavItemsByPosition(items);
  
   return <nav ref={navbarRef} className={clsx('navbar', 'navbar--fixed-top', {
     'navbar--primary': style === 'primary',
     'navbar-sidebar--show': sidebarShown,
     [styles.navbarHideable]: hideOnScroll,
     [styles.navbarHidden]: !isNavbarVisible
   })}>
       <div data-pc className='navbar__inner_pc'>
        <div className='navbar__inner'>
            <Link href='/' style={{width: '2.604167vw', height: '2.604167vw' }}>
              <img src={LogoPngUrl} />
            </Link>
            <div className='navbar__items_wrap'>
              {leftItems.map((item, i) => <NavbarItem  className={`pc-nav-item`} {...item} key={i} />)}
            </div>
        </div>
       </div>

      <div data-phone className='navbar__inner-phone-wrap'>
        <div className="navbar__inner">
            <Link href='/' style={mobileLogoStyle}>
              <img src={LogoPngUrl} />
            </Link>
            <div aria-label="Navigation bar toggle" className="navbar__toggle" role="button" tabIndex={0} onClick={showSidebar} onKeyDown={showSidebar}>
              <SvgHamburger/>
            </div>
        </div>
      </div>

       
       
       <div role="presentation" className="navbar-sidebar__backdrop" onClick={hideSidebar} />

       {/* mobile menu */}
       <div className="navbar-sidebar">
         <div className="navbar-sidebar__brand">
           <img src={LogoPngUrl} style={mobileLogoStyle} onClick={hideSidebar}></img>
         </div>
         <div className="navbar-sidebar__items">
           <div className="menu">
             <ul className="menu__list">
               {items.map((item, i) => <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />)}
             </ul>
           </div>
         </div>
       </div>
     </nav>;
 }
 
 export default Navbar;
 
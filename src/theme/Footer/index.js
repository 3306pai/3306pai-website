import React from 'react';
import styles from './styles.module.scss';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
const bottomImgs = {
  followUsImg: require('@site/static/img/home/fficialAccount.png').default
}

function Footer() {
  const {
    footer
  } = useThemeConfig();
  const {
    copyright,
    links
  } = footer
  return (
    <div className={styles.footer}>
      <div className={styles.footerWraper}>
          {links.map((item, key)=>{
            return<div key={key}>
                    <div className={styles.footerTitle}>{item.title}</div>
                    {item.items.map((inner, i)=>{
                      return <div key={i} className={`${styles.item} ${inner.icon?styles.itemIcon:''}`}>
                                {inner.icon
                                ? <img className={styles.followUs} src={bottomImgs[inner.icon]}/>
                                : (inner.to?<Link  href={inner.to}>{inner.label}</Link>:<a target="_blank" href={inner.href}>{inner.label}</a>)}
                            </div>
                    })}
                  </div>
          })}
      </div>
      <div className={styles.coppyright}>{copyright}</div>
    </div>
  )
}
export default Footer;
import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';
import manImages from '@site/static/img/sponsor/man.png';
import roundImages from '@site/static/img/sponsor/round.png';
import sonsor from '@site/static/json/sponserList';
export default function Company() {
  const {sonsorList} = sonsor;
  console.log(sonsorList)
  return (
    <Layout
      title={`3306π - 3306π 围绕 MySQL，大数据，云原生等核心技术，交流前沿数据库相关技术，分享干货知识，拒绝放水。 `}
      description="我们也在全国招聘志愿者： 地区负责人， 技术 writer, 如果你也想参与到 3306π 活动中，请联系我们。">
      <main className={styles.homeMain}>
        <div className={styles.banner}>
          <div className={`${styles.bannerContaniner} global-container-width`}>
            <div className={styles.text}>
              <img className={styles.roundImage} src={roundImages} />
              <p className={styles.pi}>赞助商</p>
              <p className={styles.description}>Sponsors</p>
            </div>
          </div>
          <img className={styles.manImage} src={manImages} />
        </div>
        <div className={`${styles.sponserList} global-container-width`}>
          {sonsorList.map((item, index)=>{
            return (
              <div key={index} className={styles.sponserItem}>
                <img src={item.logo}/>
                <div className={styles.sponserDescription}>{item.description}</div>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}
import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';
import girlImg from '@site/static/img/contact-us/contact-girl.png';
import roundImages from '@site/static/img/contact-us/round.png';
export default function Company() {
  return (
    <Layout
      title={`3306π - 3306π 围绕 MySQL，大数据，云原生等核心技术，交流前沿数据库相关技术，分享干货知识，拒绝放水。 `}
      description="我们也在全国招聘志愿者： 地区负责人， 技术 writer, 如果你也想参与到 3306π 活动中，请联系我们。">
      <main className={styles.homeMain}>
        <div className={styles.banner}>
          {/* <img src={girlImg}/> */}
          <div className={`${styles.bannerContaniner} global-container-width`}>
            <div className={styles.text}>
              <img className={styles.roundImage} src={roundImages} />
              <p className={styles.pi}>3306π 围绕 MySQL，大数据，云原生等核心技术，<br/>交流前沿数据库相关技术，分享干货知识，拒绝放水。 </p>
              <p className={styles.description}>我们也在全国招聘志愿者： 地区负责人，技术 writer, <br/>如果你也想参与到 3306π 活动中，请联系我们。</p>
              <div className={styles.contact}>
                <div>Wx : 82565387 </div>
                <div>Email : wubx@datafuselabs.com</div>
              </div>
            </div>
          </div>
          <img className={styles.manImage} src={girlImg} />
        </div>
      </main>
    </Layout>
  )
}
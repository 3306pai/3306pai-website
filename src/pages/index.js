import React, {useState, useRef} from 'react';
import { Link } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation, Autoplay
} from 'swiper';
import "swiper/css";
import "swiper/css/hash-navigation";
import "swiper/css/navigation";
import Layout from '@theme/Layout';
import styles from './styles.module.scss';
import manImages from '@site/static/img/home/man.png';
import roundImages from '@site/static/img/home/round.png';
import table from '@site/static/json/activeSchedule';
import mentors from '@site/static/json/mentors';
import company from '@site/static/json/company';

SwiperCore.use([Navigation, Autoplay]);
function Home() {
  const {tableTitle, tableData} = table;
  const {mentorsData} = mentors;
  const {sponsorData, hostData} = company;
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiperPhone, setControlledSwiperPhone] = useState(null);
  const swiperPre=()=>{
    controlledSwiper.slidePrev()
  }
  const swiperNext=()=>{
    controlledSwiper.slideNext()
  }

  const swiperPrePhone=()=> {
    controlledSwiperPhone.slidePrev()
  }
  const swiperNextPhone=()=> {
    controlledSwiperPhone.slidePrev()
  }
  return (
    <Layout
      title={`3306π | 围绕 MySQL，大数据，云原生等核心技术，
      交流前沿数据库相关技术，分享干货知识，拒绝放水。`}
      description="围绕 MySQL，大数据，云原生等核心技术，交流前沿数据库相关技术，分享干货知识，拒绝放水。">
      <main className={styles.homeMain}>
        <div className={styles.banner}>
          <div className={`${styles.bannerContaniner} global-container-width`}>
            <div className={styles.text}>
              <img className={styles.roundImage} src={roundImages} />
              <p className={styles.pi}>3306π</p>
              <p className={styles.description}>围绕 MySQL，大数据，云原生等核心技术，<br/>交流前沿数据库相关技术，分享干货知识，拒绝放水。</p>
            </div>
            <img className={styles.manImage} src={manImages} />
          </div>
        </div>
        <div className={styles.activeSchedule}>
          <div className={styles.title}>活动规划</div>
          <table width="100%">
            <thead>
              <tr>
                {tableTitle.map((item=>{
                  return (<th key={item}>{item}</th>)
                }))}
              </tr>
            </thead>
            <tbody>
            {
              tableData.map((item, index)=>{
                return (
                  !item.show
                  ? ''
                  : <tr style={item.status===1?{color: '#999'}:{color: '#333'}} key={index}>
                      <td>{item.time}</td>
                      <td>{item.area}</td>
                      <td>{item.subject}</td>
                      <td>
                        <a style={item.status===1?{color: '#999'}:(item.status===-1?{color: '#00546B'}:{color: '#FC9015'})} target="_blank" href={item.link}>{item.statusText}</a>
                      </td>
                    </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
        <div className={`${styles.mentors} global-container-width`}>
          <div className={styles.mainTitle}>云原生--数据和未来-3306π深圳站</div>
          <div className={styles.mentorsContainer} data-pc>
            <img src={useBaseUrl('/img/home/pre.png')}  onClick={swiperPre} className={styles.pre}/>
            <img src={useBaseUrl('/img/home/next.png')} onClick={swiperNext} className={styles.next}/>
            <Swiper 
              slidesPerView={4} 
              spaceBetween={30}
              preventClicks={false}
              direction="horizontal"
              autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
              }}
              onSwiper={(swiper)=>setControlledSwiper(swiper)}
              className="mySwiper">
              {mentorsData.map((item, key)=>{
                return  <SwiperSlide key={key}>
                          <Link to={item.link} className={styles.mySwiperLink}>
                            <img className={styles.swiperImg} src={useBaseUrl(item.avatar)}/>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.title}>
                              <span>{item.title}</span> | <span>{item.company}</span>
                            </div>
                          </Link>
                        </SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className={styles.mentorsContainer} data-phone>
            <img src={useBaseUrl('/img/home/pre.png')} onClick={swiperPrePhone} className={styles.pre}/>
            <img src={useBaseUrl('/img/home/next.png')} onClick={swiperNextPhone} className={styles.next}/>
            <Swiper 
              slidesPerView={2} 
              spaceBetween={30}
              preventClicks={false}
              direction="horizontal"
              onSwiper={(swiper)=>setControlledSwiperPhone(swiper)}
              autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
              }}
              className="mySwiper">
              {mentorsData.map((item, key)=>{
                return  <SwiperSlide key={key}>
                          <Link to={item.link} className={styles.mySwiperLink}>
                            <img className={styles.swiperImg} src={useBaseUrl(item.avatar)}/>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.title}>
                              <span>{item.title}</span> | <span>{item.company}</span>
                            </div>
                          </Link>
                        </SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className={styles.sponsor}>
            <div className={styles.sponsorMainTitle}>赞助商</div>
            <div className={styles.sponsorBox}>
              {sponsorData.map((item, index)=>{
                return  (
                  <a target="_blank" href={item.link} title={item.title} key={index}>
                    <img src={useBaseUrl(item.logo)} />
                  </a>
                )
              })}
             
            </div>
          </div>
          <div className={styles.sponsor}>
            <div className={`${styles.sponsorMainTitle} ${styles.hostMainTitle}`}>主办方</div>
            <div className={`${styles.sponsorBox} ${styles.hostBox}`}>
              {hostData.map((item, index)=>{
                return  (
                  <a target="_blank" href={item.link} title={item.title} key={index}>
                    <img src={useBaseUrl(item.logo)} />
                  </a>
                )
              })}
             
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;

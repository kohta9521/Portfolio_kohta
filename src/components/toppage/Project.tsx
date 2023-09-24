import React from 'react'

// css import
import styles from './styles/Project.module.scss'
import SectionTitle from '../common/SectionTitle'
import ProjectTags from './ProjectTags'
import ProjectsCard from './ProjectsCard'

const Project = () => {
  return (
    <div className={styles.project} id="projects">
      <div className={styles.container}>
        <p className={styles.subTitle}>
          ご覧いただきありがとうございます。
          <br />
          主にフロントエンドを中心にWebサービスを日々企画制作しています。
          <br />
          WEBサービス・WEBページの企画、デザイン、コーディングまで手掛けています。
          <br />
        </p>
        <SectionTitle key={1} id="project" text="PROJECTS" />
        <div className={styles.flexTags}>
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={1} />
          <ProjectTags tagNumber={2} />
          <ProjectTags tagNumber={3} />
        </div>
        <p className={styles.subText}>Recent Projects</p>
        <div className={styles.ProjectsFlexCard}>
          <ProjectsCard
            id={1}
            imgLink="/images/sampleImg1.png"
            cardTitle="Sample Project1"
            projectsTags={0}
          />
          <ProjectsCard
            id={2}
            imgLink="/images/sampleImg2.png"
            cardTitle="Sample Project2"
            projectsTags={1}
          />
          <ProjectsCard
            id={3}
            imgLink="/images/sampleImg3.jpeg"
            cardTitle="Sample Project3"
            projectsTags={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
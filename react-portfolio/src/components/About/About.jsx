import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt='Me sitting with a laptop' className={styles.aboutImage}></img>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor icon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa eaque debitis facere et error veritatis delectus perspiciatis! Commodi perferendis dolorum quo illo, ut obcaecati iure aut ipsa unde. Reprehenderit.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='Server icon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa eaque debitis facere et error veritatis delectus perspiciatis! Commodi perferendis dolorum quo illo, ut obcaecati iure aut ipsa unde. Reprehenderit.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

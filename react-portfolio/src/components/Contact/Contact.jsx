import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact me</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt='email icon' />
                    <a href='mailto:senasenayildiz@gmail.com'>senasenayildiz@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedin icon' />
                    <a href='https://www.linkedin.com/in/sena-y%C4%B1ld%C4%B1z-53a017209/'>linkedin.com/sena-yıldız</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt='github icon' />
                    <a href='https://github.com/Senayldz'>Senayldz</a>
                </li>
            </ul>
        </footer>
    )
}

import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            <p className={styles.extraGreen}>I am Sean and I am a software engineer now</p>
            {/* load an image locally */}
            <Image 
                src='/IMG_9410.JPG'
                alt='logo'
                width={300}
                height={500}
            />
            <img 
                src='/IMG_9410.JPG'
                alt='logo'
                width={300}
                height={500}
            />

            {/* load an image hosted on another domain */}
            <Image 
                src='https://placekitten.com/400/500'
                alt='logo'
                width={300}
                height={500}
            />
        </div>
    )
}
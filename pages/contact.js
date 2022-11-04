import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <br></br>
            <div className='contactlogos'>
                <div className='github'>
                    <a href='https://github.com/mousesaver' target='_blank'>
                        <img src='/Github2.png' alt='github icon' width={70}/>
                    </a>
                </div>
                <div className='email'>
                    <a href='sean.fan87@gmail.com' target='_blank'>
                        <img src='/Email.png' alt='email icon' width={100}/>
                    </a>
                </div>
                
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/sean-f45/' target='_blank'>
                        <img src='/LinkedIn.png' alt='linkedin icon' width={70}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
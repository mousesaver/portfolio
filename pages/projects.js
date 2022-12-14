import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1> 
            <div className='project'>
                <div className='screenshot'>
                <Image 
                src='/dreamplanner.png'
                alt='dreamplanner'
                width={500}
                height={300}
                />
                </div>
                <div className='description'>
                    <h3>Dream Planner   <a href='https://github.com/mousesaver/dreamplanner-backend'><button>GitHub Repo</button></a></h3>
                    <p>A vacation planning full-stack app that allows users to do CRUD operations on their profiles, destinations, and expenses.</p>
                    <p>Frontend websites were created by using React and Tailwind and CRUD operations with the backend were realized by employing Axios and React Router.</p>
                    <p>Backend REST APIs were established using Django, Rest framework, and PostgreSQL.</p>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src='/PetSpace.png'
                    alt='PetSpace'
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Petspace <a href='https://github.com/mousesaver/petspace-p3-server'><button>GitHub Repo</button></a></h3>
                    <p>A full-stack social media platform for pet owners to share/like pet photos and comment on them.</p>
                    <p>Frontend websites were built using React and Bootstrap and CRUD operations with the backend were enabled by employing Axios and React Router.</p>
                    <p>Backend REST APIs were established using Express, MongoDB, and Mongoose to dynamically respond to front-end requests.</p>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src='/Movietracker.png'
                    alt='Movie tracker'
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Movie Tracker  <a href='https://github.com/mousesaver/project-2'><button>GitHub Repo</button></a></h3>
                    <p>A full-stack movie app that allows users to search movie info, track watched movies, add movies to watchlists, and add movie reviews.</p>
                    <p>The frontend was built by using EJS and Bootstrap and CRUD operations with the backend were enabled by employing Axios and React Router.</p>
                    <p>Backend REST APIs were constructed by using Express, Sequelize, and PostgreSQL to fulfill front-end requests.</p>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src='/TreasureHunt.png'
                    alt='Treasure Hunt'
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Treasure Hunt <a href='https://mousesaver.github.io/project-1/'><button>GitHub Repo</button></a></h3>
                    <p>A web treasure hunt game developed by using HTML5, CSS, and JavaScript. </p>
                    <p>It has a dynamic interface that can track player???s steps, turns, and scores by using DOM manipulation and OOP.</p>
                    <p>A computer player with different levels of intelligence was generated by using scan functions to locate the right positions and random functions to determine the possibilities to score points.</p>
                </div>
            </div>
        </div>
    )
}
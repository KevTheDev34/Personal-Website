import './LeftSide.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-svg-core'


function LeftSide () {
    return (
        <div className='left-half'>
            <div className='left-half-section-one'>
                <h1>Kevyn Antonio Ramirez</h1>
                <sub>Developer</sub>
                <p>I am honing my skills by designing and implementing projects I find interesting, starting with Frontend Development!</p>
            </div>

            <ul>
                <li><a href='#aboutme'>About Me</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <ul>
                <li><a href='https://www.linkedin.com/in/kevyn-ramirez/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </div>
    );
};

export default LeftSide;
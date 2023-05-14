import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import useClass from '../../hooks/useClass';

const About = () => {

    const letterClass = useClass('text-animate');
    return (
        <>

            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterclass={letterClass}
                            strArray={'About Me'.split('')}
                            index={15}
                        />
                    </h1>
                    <p style={{ fontSize: '16px' }}>
                        I'm a very young ambitious Front-end developer looking for a role
                        in an established IT company with the opportunity to work with the
                        latest technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT" style={{ fontSize: '16px' }}>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p style={{ fontSize: '16px' }}>
                        If I need to define myself in one sentence that would be a funny
                        person, a sports fanatic, gaming and photography enthusiast,
                        and tech-obsessed!!!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJava} color='#F08E0F' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About

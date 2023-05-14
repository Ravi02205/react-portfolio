import './index.scss';
import logoTitle from '../../assets/images/logo-r.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import useClass from '../../hooks/useClass';

const Home = () => {

    const letterClass= useClass('text-animate');

    const nameArray = 'avi'.split('');
    const jobArray = 'web developer.'.split('');

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'m</span>
                        <img src={logoTitle} alt="developer" />
                        <AnimatedLetters letterclass={letterClass} strArray={nameArray} index={16} />
                        <br />
                        <AnimatedLetters letterclass={letterClass} strArray={jobArray} index={20} />
                    </h1>
                    <h2>Frontend Developer </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;
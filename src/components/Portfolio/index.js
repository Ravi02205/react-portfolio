import React from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import useClass from '../../hooks/useClass';
import PortFolioData from '../../data/portfolio.json';

const Portfolio = () => {

    const letterClass = useClass('text-animate');

    const renderPortfolio = (PortFolioData) => {
        return (
            <div className="images-container">
                {
                    PortFolioData.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover} className='portfolio-image' alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={()=>window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterclass={letterClass}
                        strArray={'Portfolio'.split('')}
                        index={15}
                    />
                </h1>
                <div>{renderPortfolio(PortFolioData.portfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio;

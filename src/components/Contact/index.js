import React from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import useClass from '../../hooks/useClass';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {

    const letterClass = useClass('text-animate');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_an4w4lo',
            'template_4pnw9go',
            form.current,
            'Uf94FQXlUWL8iuVPq'
        ).then(
            () => {
                alert('Message Successfully Sent!');
            },
            (err) => {
                alert('Failed to send a message, Please Try Again !')
                console.log(err);
            })
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterclass={letterClass}
                            strArray={'Contact Me'.split('')}
                            index={15}
                        />
                    </h1>
                    <p>
                        I am interested in all the opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Ravi Panchal,
                    <br />
                    India
                    <br />
                    Hyderabad,
                    <br />
                    Telangana
                    <br />
                    <span>pravi7031@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={[17.4563197, 78.3728344]}
                        zoom={13}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[17.4563197, 78.3728344]}>
                            <Popup>Ravi lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact;

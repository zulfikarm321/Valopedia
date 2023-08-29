import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="py-4 bg-white font-light border-t-2 border-gray-900">
            <div className="inner container flex items-center justify-between">
                <p>Made By Zulfikar Muhamad @2023</p>

                <div className="socials flex items-center gap-2">
                    <a
                        href="https://www.instagram.com/zulfikar_muhamad_/"
                        target="_blank"
                    >
                        <FaInstagram size={'2em'} />
                    </a>
                    <a href="https://github.com/zulfikarm321" target="_blank">
                        <FaGithub size={'2em'} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/zulfikar-muhamad-152966275/"
                        target="_blank"
                    >
                        <FaLinkedin size={'2em'} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

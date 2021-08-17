import React from 'react';
import './styles.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
const SocialIcons = () => {
    return (
        <div>
            <ul className="social">
                <li>
                    <a href="https://www.facebook.com/nishu.rai.56884761/" target="blank">
                        <FaFacebookF className="fa" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nishu91020" target="blank">
                        <FaGithub className="fa" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/NishuRa65126281" target="blank">
                        <FaTwitter className="fa" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/nishu_rai09/" target="blank">
                        <FaInstagram className="fa" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nishu-rai-320852190/" target="blank">
                        <FaLinkedinIn className="fa" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;

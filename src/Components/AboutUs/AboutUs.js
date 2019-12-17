import React, {Fragment} from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Fragment>
            <div className="main-pic-img">
                <p className="main-pic-title">About us</p>
                <p className="main-pic-text">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Consectetur consequatur
                    eligendi quos vel. Dolor exercitationem fugit mollitia
                    necessitatibus odio veritatis!
                    Dolor exercitationem fugit mollitia
                    necessitatibus odio veritatis!</p>
            </div>
            <div className="AboutUs">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusamus aut beatae blanditiis, delectus,
                deleniti esse eveniet in laudantium molestiae obcaecati
                praesentium quis recusandae saepe! Consectetur corporis cumque
                doloremque illo in porro quia quis quo? Accusamus aperiam consequuntur
                eos odio officiis placeat ratione voluptatem! A architecto asperiores at
                , autem consectetur, doloribus eligendi ipsa laudantium odio pariatur quasi,
                quod sunt? Adipisci alias amet architecto autem blanditiis consectetur
                dicta doloremque,
                dolorum ducimus eaque earum eligendi est eum explicabo facilis fugit incidunt itaque
                laudantium
                magni maxime minus modi nemo nisi nobis officiis omnis perspiciatis placeat quasi quis
                ratione rerum saepe similique sint vitae voluptatum!</p>
            <div className="natures">
                <div className="nature">
                    <h3>rest at nature</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Autem blanditiis doloremque ea illo illum ipsam laboriosam
                        nesciunt quos sint voluptatem!</p>
                    <div className="img-1"></div>
                </div>
                <div className="nature">
                    <h3>beautiful landscape</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Autem blanditiis doloremque ea illo illum ipsam laboriosam
                        nesciunt quos sint voluptatem!</p>
                    <div className="img-2"></div>
                </div>
                <div className="nature">
                    <h3>Fresh air</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Autem blanditiis doloremque ea illo illum ipsam laboriosam
                        nesciunt quos sint voluptatem!</p>
                    <div className="img-3"></div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default AboutUs;
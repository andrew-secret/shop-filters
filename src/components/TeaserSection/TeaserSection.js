import React from 'react';
import './TeaserSection.css'

const TeaserSection = ({
    headline,
    number,
    bigImage,
    smallImage,
    bigImageAlt,
    smallImageAlt
}) =>
    <section className="TeaserSection">
        <div className="TeaserSection__title">
            <h2 className="TeaserSection__headline">
                {headline}
            </h2>
        </div>
        <div className="TeaserSection__number">
            <span className="TeaserSection__year">
                {number}
            </span>
        </div>
        <div className="TeaserSection__visual">
            <img src={require(`../../assets/${bigImage}`)}
                className="TeaserSection__img"
                alt={bigImageAlt}/>
        </div>
        <div className="TeaserSection__red">
        </div>
        <div className="TeaserSection__yellow">
        </div>
        <div className="TeaserSection__visualSmall">
            <img src={require(`../../assets/${smallImage}`)}
                className="TeaserSection__img"
                alt={smallImageAlt}/>
        </div>
    </section>

export default TeaserSection;
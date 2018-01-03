import React from 'react';
import Button from '../Button/Button';
import classNames from 'classnames';
import './ContentSection.css';


const ContentSection = ({
    headline,
    copy,
    images,
    label
}) =>
    <section className="contentSection">
        <h3 className="contentSection__headline">
            {headline}
        </h3>
        <p className="contentSection__copy">
            {copy}
        </p>
        <div className="contentSection__images">
            {images ? (images.map(item =>
                <img
                    key={item.id}
                    src={require(`../../assets/${item.image}`)} 
                    className={classNames(['contentSection__image'], item.class)} 
                    alt={item.alt}/>)
            ) : null }
        </div>
        <div className="contentSection__wrapper">
            <Button 
                label={label}
                className="contentSection__btn"/>
        </div>
    </section>

export default ContentSection;
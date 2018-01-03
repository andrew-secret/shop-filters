import React from 'react';
import Header from '../../components/Header/Header';
import TeaserSection from '../../components/TeaserSection/TeaserSection';
import ContentSection from '../../components/ContentSection/ContentSection';
import {Link} from 'react-router-dom';
import './StartpageView.css';


const images = [
    { id: 1, image: 'startpage/ahmed-carter-433915.png', alt: 'amhed carter', class: 'carter' },
    { id: 2, image: 'startpage/hust-wilson-372127.png', alt: 'hust wilson', class: 'wilson' }
];

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
    et magnis dis parturient montes, nascetur ridiculus mus.`;

const StartpageView = (props) =>
    <div className="startpageView">
        <Header {...props} />
        <TeaserSection 
            headline="New arrivals"
            number="2018"
            bigImage="startpage/orange-woman.png"
            bigImageAlt="orange coat"
            smallImage="startpage/benjamin-voros.png"
            smallImageAlt="blue jeans jacket"/>
        <ContentSection 
            headline="the new hype – 2ndStore"
            copy={text}
            images={images}
            label="Show more" />
    </div>

export default StartpageView;
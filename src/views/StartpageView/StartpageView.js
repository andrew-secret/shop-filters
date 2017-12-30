import React from 'react';
import Header from '../../components/Header/Header';
import TeaserSection from '../../components/TeaserSection/TeaserSection';
import './StartpageView.css';


const navigation = [
    { id: 1, value: 'New in', link: '#' },
    { id: 2, value: 'Coats & Jackets', link: '#' },
    { id: 3, value: 'Dresses', link: '#' },
    { id: 4, value: 'Tops', link: '#' },
    { id: 5, value: 'Knitwear', link: '#' },
    { id: 6, value: 'Jeans', link: '#' }
];

const StartpageView = (props) =>
    <div className="startpageView">
        <Header navigation={navigation} />
        <TeaserSection 
            headline="New arrivals"
            number="2018"
            bigImage="startpage/orange-woman.png"
            smallImage="startpage/benjamin-voros.png" />
    </div>

export default StartpageView;
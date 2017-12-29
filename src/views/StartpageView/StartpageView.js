import React from 'react';
import Header from '../../components/Header/Header';
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
    </div>

export default StartpageView;
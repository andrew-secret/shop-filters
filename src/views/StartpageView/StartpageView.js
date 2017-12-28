import React from 'react';
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
        Startpage – let's go!

    </div>

export default StartpageView;


// div.container
// div.sale
//   ul.saleList
//     li.listItemWhite: a(href='#') Sale
// div.gray
// div.white
// div.yellow
// div.navi
//   label.toggleMenu(for='show-menu')
//     span.title Menu
//     div.lines
//   input#show-menu(type='checkbox')
//   ul.list
//     li.listItem: a(href='#') New in
//     li.listItem: a(href='#') Coats & Jackets
//     li.listItem: a(href='#') Dresses
//     li.listItem: a(href='#') Tops
//     li.listItem: a(href='#') Knitwear
//     li.listItem: a(href='#') Jeans

// div.yellow_wide
// div.blue_wide
// div.white_wide
// div.black_wide
//   ul.shopList
//     li.listItemWhite.listItemShop: a(href='#') Shop now
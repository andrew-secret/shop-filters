import React, { Component } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import DetailView from './views/DetailView/DetailView';
import ShopView from './views/ShopView/ShopView';
import StartpageView from './views/StartpageView/StartpageView';
import { findById, incrementRating, updateShopItems } from './lib/scripts/shopHelper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import { base } from './base';
import * as routes from './constants/routes';
import './App.css';

const navigation = [
    { id: 1, value: 'New in', link: '#' },
    { id: 2, value: 'Coats & Jackets', link: '#' },
    { id: 3, value: 'Dresses', link: '#' },
    { id: 4, value: 'Tops', link: '#' },
    { id: 5, value: 'Knitwear', link: '#' },
    { id: 6, value: 'Jeans', link: '#' }
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shopitems: [],
            loadMore: 9,
        };

        this.showMore = this.showMore.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    showMore() {
        this.setState({
            loadMore: this.state.loadMore + 9
        })
    }

    updateRating(id) {
        const shopItem = findById(id, this.state.shopitems);
        const incremented = incrementRating(shopItem);
        const updatedList = updateShopItems(this.state.shopitems, incremented);
        this.setState({
            shopitems: updatedList
        })
    }

    componentWillMount () {
        this.shopItemsRef = base.syncState('shopitems', {
            context: this,
            state: 'shopitems'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.shopItemsRef);
    }

    render() {
        const {
            shopitems,
            loadMore
        } = this.state;

        return (
            <div className="App">
                <Navigation />
                <StickyContainer>
                    <Router>
                        <ScrollToTop>
                        <Route
                            exact
                            path={routes.STARTPAGE_VIEW}
                            render={(state) => (
                                <StartpageView
                                    {...state}
                                    navigation={navigation}/>
                            )}
                        />
                        <Route
                            exact 
                            path={routes.SHOP_VIEW} 
                            render={(state) => (
                                <ShopView
                                    showMore={this.showMore}
                                    shopitems={shopitems}
                                    updateRating={this.updateRating}
                                    loadMore={loadMore}/>
                            )}
                        />
                        <Route
                            exact 
                            path={routes.DETAIL_VIEW} 
                            render={(state) => (<DetailView {...state} {...this.state}/>)}
                        />
                        </ScrollToTop>
                    </Router>
                </StickyContainer>
            <Footer navigation={navigation}/>
            </div>
        );
    }
};

export default App;

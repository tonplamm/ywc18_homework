import React from 'react';
import { HomePageData } from '../service/HomePageData';
import SearchBar from './SearchBar/SearchBar';
import NavigationBar from './NavigationBar/NavigationBar';
import FilterContainer from './FilterContainer/FilterContainer';
import ShopContainer from './ShopContainer/ShopContainer';
import Headline from './Headline/Headline';

import './HomePage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homePageData: HomePageData,
        }
      }

    componentDidMount = () => {
        console.log(HomePageData);
        console.log(HomePageData.categories);
    }
    
    render() {
        return (
            <div className="HomePage">
                <SearchBar
                    provinces={this.state.homePageData.provinces}
                    categories={this.state.homePageData.categories}
                    priceRange={this.state.homePageData.priceRange}
                />
                <NavigationBar />
                <Headline />
                <div className="ContentContainer flex items-start">
                    <div className="FilterContainer hidden fixed md:relative md:mr-8 md:block border border-gray-500 rounded-sm">
                        <FilterContainer
                            categories={this.state.homePageData.categories}
                            provinces={this.state.homePageData.provinces}
                            priceRange={this.state.homePageData.priceRange}
                        />
                    </div>
                    <ShopContainer
                        priceRange={this.state.homePageData.priceRange}
                        merchants={this.state.homePageData.merchants}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage
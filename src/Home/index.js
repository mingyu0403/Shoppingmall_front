import React, {Component} from 'react';
import AdsList from "./AdsList";
import BestList from "./BestList";
import SpecialList from "./SpecialList";
import './Main.scss'
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Home extends Component {
    componentDidMount() {
        this.props.stores.ProductStore.fetchItems();
    }
    render() {
        let p = this.props.stores.ProductStore;
        const  adsItem = ['광고','광고', '광고', '광고'];

        if(!p) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <div id='main'>
                    <div id='event-notice'>
                        Main Visual
                    </div>
                    <div id='parent'>
                        <div id='left-list'>
                            {p.items && <SpecialList items={p.items}/>}
                        </div>
                        <div id='main-list'>
                            {p.items && <BestList items={p.items}/>}
                        </div>
                        <div id='right-list'>
                            <AdsList items={adsItem}/>
                        </div>


                    </div>

                </div>
            );
        }

    }
}

export default Home;
import React, {Component} from 'react';
import AdsList from "./AdsList";
import BestList from "./BestList";
import SpecialList from "./SpecialList";
import './Main.scss'

class Home extends Component {
    render() {
        const names=['배너식 광고','배너식 광고'
            ,'배너식 광고','배너식 광고'];
        return (
            <div id='main'>
                <div id='event-notice'>
                    Main Visual
                </div>

                <div id='parent'>
                    <div id='left-list'>
                        <SpecialList items={names}/>
                    </div>
                    <div id='main-list'>
                        <BestList items={names} />
                    </div>
                    <div id='right-list'>
                        <AdsList items={names} />
                    </div>


                </div>

            </div>
        );
    }
}

export default Home;
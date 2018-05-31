import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter,Switch,Route} from 'react-router-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Page=()=>{
    return (<div>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/home" render={()=><div>Hello react-router-dom-4</div>}/>
            </Switch>
        </HashRouter>
    </div>)
}


ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();

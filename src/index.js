import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Page = () => {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/home" render={() => <div>Hello react-router-dom-4</div>} />
            </Switch>
        </BrowserRouter>
    </div>)
}


ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div id="main">
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;
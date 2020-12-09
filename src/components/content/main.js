// import Map from './map.js';
import Home from './home.js';
// import About from './about.js';
// import Payment from './stripe/payment.js';
// import Customer from './customer.js';
// import Price from './price.js';

import { Route, Switch } from "react-router-dom";
import React from 'react';

const Main = () => (
    <main>
        <Switch>
            {/* <Route path="/product" component={Map} /> */}
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/price" component={Price} />  */}
            {/* <Route path="/payment" component={Payment} /> */}
            {/* <Route path="/blog" component={Blog} /> */}
        </Switch>
    </main>
)

export default Main


// WEBPACK FOOTER //
// ./src/components/main.js
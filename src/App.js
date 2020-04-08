import React from "react";
import "./App.css";

//Switch stoppar koden från att läsas efter den har fått en träff innanför <switch />
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;

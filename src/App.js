import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SlackKey from "./components/SlackKey/SlackKey.js";
// import Dashboard from "./components/Dashboard/Dashboard";
import Application from "./components/Application/Application";
import Staff from "./components/Pages/Staff";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import FAQ from "./components/Pages/FAQ";
import companyFAQ from "./static-api-elements/companyFAQ";
import programFAQ from "./static-api-elements/programFAQ";
import VoyageFive from "./components/Pages/VoyageFive";
import CurrentPrograms from "./components/Pages/CurrentPrograms";

import Standup, { StandupList } from "./components/Standup";

// Dash disabled while image structure is being set up by backend team.

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />

        <Route path="/user/:username" component={Profile} />
        {/*<Route path="/myaccount" component={Dashboard} />*/}

        <Switch>
          <Route exact path="/standups/new" component={Standup} />
          <Route path="/standups/:username" component={StandupList} />
        </Switch>

        <Route exact path="/current" component={CurrentPrograms} />
        <Route exact path="/slack" component={SlackKey} />
        <Route exact path="/apply" component={VoyageFive} />
        <Route exact path="/applydev" component={Application} />
        <Route exact path="/team" component={Staff} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/companyfaq" render={() => <FAQ headerText="Company FAQs" data={companyFAQ} />} />
        <Route exact path="/programfaq" render={() => <FAQ headerText="Program FAQs" data={programFAQ} />} />
        <Footer />
      </div>
    );
  }
}

export default App;

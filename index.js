import React from "react";
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { ReactiveBase } from "@appbaseio/reactivebase";
import { config } from "./config";
import Login from "./login";
import Dashboard from "./dashboard";
import Profile from "./profile";
import SearchPg from "./searchpg";

// Render Router elements into the DOM
ReactDom.render((
	<ReactiveBase
		app={config.credential_tweets.app}
		credentials={`${config.credential_tweets.username}:${config.credential_tweets.password}`}
		type={config.credential_tweets.type}
	>
		<Router history={browserHistory}>
			<Route path="/" component={Login} />
			<Route path=":uname" component={Dashboard} />
			<Route path="profile/:uname" component={Profile} />
			<Route path="search/:txt" component={SearchPg} />
		</Router>
	</ReactiveBase>
), document.getElementById("app"));

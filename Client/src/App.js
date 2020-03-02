import React from '../node_modules/@types/react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "../node_modules/react-router-dom";
import Navigation from './Component/Navigation';
import NewsFeed from './Pages/NewsFeed';
import MotelRoom from './Pages/Motelroom';
import Profile from "./Pages/Profile";
import OtherPrifile from "./Pages/OtherProfile";
import {Provider} from "../node_modules/react-redux/lib";
import configStore from "./Redux/ConfigStore";
import Detailroom from "./Pages/Detailroom";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Navigation></Navigation>
            {/* <Detailroom></Detailroom> */}
            {/* <NewsFeed></NewsFeed> */}
            <Switch>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/profilefriend/:name.:id.anotherfriend" component={OtherPrifile}></Route>
                <Route path="/room/:name.:id.room" component={Detailroom}></Route>
                <Route path="/room" component={MotelRoom}></Route>
                <Route path="/" component={NewsFeed} exact></Route>
            </Switch>
        </Router>
    </Provider>
  );
}
// https://cloud.mongodb.com/v2/5cfa9cd8553855145f8e50b6#metrics/replicaSet/5e4b80673f48453720b8bf63/explorer/OtherHouse/newsfeedmodels/find

//   <Route path="/detail/:name.:forMen.:id.html"><Detail></Detail></Route>
export default App;

//AIzaSyBpF1EsqwxHEnyOXuscYq8ivRivfiVUZzU vipkey=AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8
import React, {Component} from 'react';
import Home from './HomeComponent';
import SeedControlled from './SeedControlledComponent';
import SeedUncontrolled from './SeedUncontrolledComponent';
import {connect} from 'react-redux';

import Header from './HeaderComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

const mapStateToProps = state => {
    return {
        seedData: state.seedData
    };
}

class Main extends Component{    
    render(){
        return(            
            <div>
                <Header></Header>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/seed' component={SeedUncontrolled}/>
                    <Redirect to="home"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
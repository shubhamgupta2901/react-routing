import React, { Component } from 'react';
import {NavLink,BrowserRouter,Switch, Route,Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header >
            <ul>
              <li>
                <NavLink 
                  to='/users'
                >
                    Users
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to='/courses'  
                >
                  Courses
                </NavLink>
              </li>
            </ul>
          </header>
          <Switch>
            <Route 
              path='/courses' 
              component = {Courses}
            />
            <Route 
              path='/users' 
              component={Users}
            />
            <Redirect from ='/all-courses' to ='/courses'/>
            <Route path='/' exact render={()=><h4>Home: select a tab!</h4>}/>
            <Route render={()=><h3>404 Not found</h3>}/> 
          </Switch>   
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

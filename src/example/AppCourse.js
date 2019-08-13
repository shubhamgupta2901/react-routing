import React, { Component } from 'react';
import {NavLink,BrowserRouter,Switch, Route,Link} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import styles from './App.module.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: [
        { id: 1, title: 'Angular - The Complete Guide' },
        { id: 2, title: 'Vue - The Complete Guide' },
        { id: 3, title: 'PWA - The Complete Guide' }
      ],
      selectedCourseId: 3, 
    }
  }
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
                <Link 
                  to={`/courses/${this.state.courses[this.state.selectedCourseId-1].title}`}   
                >
                  Courses
                </Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route 
              path='/courses/:title' 
              render={(props)=>
                <Course 
                  {...props}
                  id={this.state.selectedCourseId}
                />
              }
            />
            <Route 
              path='/users' 
              component={Users}
            />
          </Switch>   
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

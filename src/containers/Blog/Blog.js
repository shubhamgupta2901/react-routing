import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import styles from './Blog.module.css';
import Posts from './Posts/Posts';
class Blog extends Component {
    state = {

    }

    render () {
        
        return (
            <div className={styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li className={styles.listStyle}>
                                <NavLink 
                                    activeClassName={styles.activeNavLink}
                                    to="/" 
                                    exact
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.listStyle}>
                                <NavLink 
                                    activeClassName={styles.activeNavLink}
                                    to="/new-post"
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path="/" exact render={()=><Posts postSelectedHandler= {this.postSelectedHandler}/>}/>*/}
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path= "/:id" exact component={FullPost}/>
                </Switch>
               
            </div>
        );
    }
}

export default Blog;
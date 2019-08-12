import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
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
                                    to="/posts/" 
                                >
                                    Posts
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
                 {/** While using the switch statment, this very first route that is matched is rendered, and it doesn't look any furthur.*/}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts"  component={Posts}/>   
                    {/** This statement is put for redirecting the user to Posts when he goes to home. 
                        *This feature works fine and we can keep it like this without any issues, 
                        * however it does not change the url to "http://localhost:3000/posts" when we go to "http://localhost:3000/" 
                        * For this purpose we use react-router's Redirect**/}
                    {/* <Route path="/"  component={Posts}/>    */}
                    {/** Redirect takes two major props, 'from' : from which route?, and 'to' : redirect to which route?**/}
                    <Redirect from="/" to={"/posts"}/>
                </Switch>
               
            </div>
        );
    }
}

export default Blog;
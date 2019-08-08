import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import styles from './Blog.module.css';
import Posts from './Posts/Posts';
class Blog extends Component {
    state = {
        selectedPostId: null,
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        
        return (
            <div className={styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/" exact>Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path="/" exact render={()=><Posts postSelectedHandler= {this.postSelectedHandler}/>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;
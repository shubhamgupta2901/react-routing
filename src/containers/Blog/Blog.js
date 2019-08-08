import React, { Component } from 'react';
// import axios from 'axios';
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts postSelectedHandler= {this.postSelectedHandler}/>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
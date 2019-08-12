import React, { Component } from 'react';
import axios from 'axios';
import {Redirect } from 'react-router-dom';

import styles from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);

                /**
                 * By changing the state of the component, we are conditionally redirecting the app to a new route.
                 * We are saying as soon as submitted is set to true, redirect to a different route. 
                 * It might same strange to redirect in the render method, but this is how it works.
                 * However there is one other way. Whenever props are passed to the children of a component which is wrapped inside BrowserRouted, 
                 * they recieve three different objects in props: match, history and location. 
                 * While match object contains information about how a <Route path> matched the URL,
                 * history object allows you to manage and handle the browser history inside your views or components.
                 * history object has a push method which allows us to push a new page on the History Stack. 
                 * so pushing a new screen will also lead to the same result as setting state and redirecting on render method.
                 * 
                 */
                //this.setState({submitted: true})
                this.props.history.push('/posts');
            });
    }

    render () {
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to="/posts"/>
        }

        return (
            <div className={styles.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Shubham</option>
                    <option value="Manu">Spark</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
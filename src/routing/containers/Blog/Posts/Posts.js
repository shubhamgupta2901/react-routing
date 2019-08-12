import React from 'react';
import PropTypes from 'prop-types'
import styles from './Posts.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';


class Posts extends React.Component {

    _mounted = false;
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        error: true,
        loading: true,
    }
  }

  componentDidMount(){
    console.log(`Posts | props:`);
    console.log(this.props);
    this._mounted = true;
    axios.get( '/posts' )
        .then( response => {
            if(this._mounted){
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts, loading: false, error:false});
            }   
        } )
        .catch(error => {
           if(this._mounted){
                // console.log(error);
                this.setState({loading: false,error: true});
           }
        });
  }

  componentWillUnmount(){
      this._mounted = false;
  }

  /**
   * Programmatically changing the route of the single page app. This is a relative route. So whatever is the current url, this will be appended to it.
   *  */
  postSelectedHandler = (id) =>{
    this.props.history.push({pathname: `/${id}`});
  }

  render(){
    let posts = <p style={{textAlign: 'center'}}>{this.state.loading ? 'Loading' : 'Something went wrong'}</p>;
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
                // <Link to={`/${post.id}`} key={post.id}>
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} 
                    />
                // </Link>
            );
        });
    }
    return (
        <section className={styles.Posts}>
            {posts}
        </section>
    );
  }
}

Posts.propTypes ={
    
}

Posts.defaultProps ={
   
}

export default Posts;

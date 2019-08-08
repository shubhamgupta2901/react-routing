import React from 'react';
import PropTypes from 'prop-types'
import styles from './Posts.module.css';
import axios from 'axios';
import Post from '../../../components/Post/Post';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        error: true,
    }
  }

  componentDidMount(){
    axios.get( '/posts' )
        .then( response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts, error:false});
            // console.log( response );
        } )
        .catch(error => {
            // console.log(error);
            this.setState({error: true});
        });
  }



  render(){
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.props.postSelectedHandler(post.id)} />;
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
    postSelectedHandler: PropTypes.func,
}

Posts.defaultProps ={
    postSelectedHandler: ()=>{},
}

export default Posts;

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


  render(){
    let posts = <p style={{textAlign: 'center'}}>{this.state.loading ? 'Loading' : 'Something went wrong'}</p>;
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
                <Link to={`/${post.id}`} key={post.id}>
                    <Post 
                         
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.props.postSelectedHandler(post.id)} 
                    />
                </Link>
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
    postSelectedHandler: PropTypes.func,
}

Posts.defaultProps ={
    postSelectedHandler: ()=>{},
}

export default Posts;

import React from 'react';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom';
import styles from './Posts.module.css';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';


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
      console.log("postSelectedHandler| id: " + id);
      this.props.history.push({pathname: `/posts/${id}`});
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

    /**
     * Note I am adding a Route here inside a component which is already loaded via routing. This is called nested routing. 
     * This is something which we can do  in general, We can use a route component wherever we want in our application, 
     * As long as the component where we are using it is wrapped by BrowserRouter. Here in this case the JSX component returned by App.js is wrapped around BrowserComponent, inside which it renders a Blog Component, This Blog Component renders Posts component, where we are trying to add a Route. Hence this is perfectly fine.
     * NOTE: If we use the path in Route component as 
     * <Route path= "/:id" exact component={FullPost}/> 
     * and not this 
     * <Route path= "/posts/:id" exact component={FullPost}/>
     * the code would not work, because the relative paths in nested routing are not resolved to parents route + your component's route as we would like.
     * Ofcourse, this will be very cumbersome to do, so instead of using FullPost like this, a better way is to get current path dynamically so that this is a DYNAMIC route. This means the path should be dynamically set here, instead of a hardcoded string.
     * This is where the props.match.url property comes in handy, which stores the url which we loaded thus far.
     * so we use 
     * <Route path= {this.props.match.url+"/:id"} exact component={FullPost}/>
     * 
     * */
    return (
        <div>
            <section className={styles.Posts}>
                {posts}
            </section>
            <Route path= {this.props.match.url+"/:id"} exact component={FullPost}/>
        </div>
        
    );
  }
}

Posts.propTypes ={
    
}

Posts.defaultProps ={
   
}

export default Posts;

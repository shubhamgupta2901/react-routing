import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './FullPost.module.css';


class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount(){
        //Extracting route parameters
        const {id} = this.props.match.params;  
        console.log(`FullPost | componentDidMount | this.props: ${id}`);
        if ( id ) {
            axios.get( '/posts/' + id )
                .then( response => {
                    // console.log(response);
                    this.setState( { loadedPost: response.data } );
                } );
        }
    }

    componentDidUpdate () {
       
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button onClick={this.deletePostHandler} className={styles.Delete}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

FullPost.propTypes = {
    id: PropTypes.number,
}

FullPost.defaultProps = {
    id: 1,
}



export default FullPost;
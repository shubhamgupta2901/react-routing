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
        console.log(`FullPost | componentDidMount | id: ${id}`);
        if ( id ) {
            axios.get( '/posts/' + id )
            .then( response => {
                // console.log(response);
                this.setState( { loadedPost: response.data } );
            } );
            
        }
    }

    
    componentDidUpdate (prevProps, prevState) {
        console.log('FullPost | componentDidUpdate')
        const id = this.props.match.params.id;
        const prevId = prevProps.match.params.id;
        console.log(`id: ${id} | prevId: ${prevId} | id !== prevId: ${id !== prevId}`)
        if(id!== prevId){
            axios.get( '/posts/' + id )
            .then( response => {
                // console.log(response);
                this.setState( { loadedPost: response.data } );
            } );
        }
       
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        const {id} = this.props.match.params;
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( id ) {
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
    
}

FullPost.defaultProps = {
}



export default FullPost;
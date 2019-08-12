import React from 'react';
import PropTypes from 'prop-types'
import styles from './Post.module.css';

const post = (props) => (
    <article className={styles.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className={styles.Info}>
            <div className={styles.Author}>{props.author}</div>
        </div>
    </article>
);

post.propTypes = {
    clicked : PropTypes.func,
    title: PropTypes.string,
    author: PropTypes.string,
}

post.defaultProps = {
    clicked : ()=>{},
    title: '',
    author: '',
}



export default post;
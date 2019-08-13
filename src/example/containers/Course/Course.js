import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Course extends Component {
    render () {
        console.log('Course | render')
        console.log(this.props.match)
        return (
            <div>
                <h3>{this.props.match.params.title}</h3>
                <p>{`You selected the Course with ID: ${this.props.id}`}</p>
            </div>
        );
    }
}
    
Course.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Course.defaultProps = {
    id: '_ID',
}

export default Course;
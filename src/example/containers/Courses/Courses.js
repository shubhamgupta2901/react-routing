import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourseId: 1,
    }

    onArticleClicked(course){
        this.props.history.push(`${this.props.match.url}/${course.title}`)
    }
    renderHeading(){
        return <h4>Amazing Udemy Courses</h4>;
    }

    renderCourses(){
        return (
            <section className="Courses">
                {
                    this.state.courses.map( course => {
                        return (
                            <article 
                                className="Course" 
                                key={course.id}
                                onClick={()=>this.onArticleClicked(course)}
                            >
                                {course.title}
                            </article>
                        );
                    } )
                }
            </section>
        );
    }

    render () {
        return (
            <div>
                {this.renderHeading()}
                {this.renderCourses()}
                <Route path={this.props.match.url + '/:title'} component={Course}  />
            </div>
        );
    }
}

export default Courses;
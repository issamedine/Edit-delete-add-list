import React, { Component } from 'react';
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

class App extends Component {
// my test 
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "jQuery"},
    ],
    current : ''
  }

  //update course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  //add course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current})
    this.setState({
      courses: courses,
      current:''
    })
  }

  //delete course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses: courses
    })
  }


  //edit course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }



  render() {
    const {courses} = this.state;  //const courses = this.state.courses
    const courseList = courses.map( (course, index) => {
      return <CourseList details = {course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    } )

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>{courseList}</ul>
      </section> 
    );
  }

}

export default App;

import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseListe from './components/CourseListe';


class App extends Component {

   state = {
     courses: [
           {name: "HTML"},
           {name: "CSS"},
           {name: "JQUERY"}
       ],
           current: '',
           warning: false
   };

// delete course
   delete = (index) => {
       const courses = this.state.courses
       courses.splice(index, 1)
       this.setState({courses})
     };

// update course
   updateCourse = (e) => {
     this.setState({current: e.target.value})
   }

//add course 
   AddCourse = (e) => {
     e.preventDefault();
     if (this.state.current !== ''){
       this.state.warning && this.setState({warning: false})
         const courses = this.state.courses;
         courses.push({name: this.state.current});
         this.setState({courses, current: ''})
     }else {
        this.setState({warning: !this.state.warning})
     }
   }


   editCourse = (index, value) => {
      const courses = this.state.courses;
      const course = courses[index];
      course['name'] = value;
      this.setState({courses})
  }

  render () {
     const {courses } = this.state;
     const length = courses.length;
     const listeCourse = length ? 
                                  courses.map((course, index) => <CourseListe key={index}
                                                                              names={course.name}
                                                                              index={index} 
                                                                              delete={this.delete}
                                                                              editCourse={this.editCourse}
                                                                              />) 
                                : <p>there is not course to show</p>


    return (
      <div className="container">
        {
          this.state.warning && <p>please insert course</p>
        }
        <h1>Crud App</h1>
         <CourseForm updateCourse={this.updateCourse} AddCourse={this.AddCourse} current={this.state.current} />
         <ul>
           {listeCourse}
         </ul>
      </div>
    )
    }
  }

export default App;
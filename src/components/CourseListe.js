import React, { Component, Fragment } from 'react';

class CoureseList extends Component {

  state = {
    isEdit: false
  };
   
// render course
  renderCourse = () => {
      return (
           <li>
             <span>{this.props.names}</span>
             <button onClick={() => {this.toggleCourse()}}>edit</button>
             <button onClick={() => this.props.delete(this.props.index)}>delete</button>
           </li>
      );
  }

// render update course
  toggleCourse = () => {
    //let {isEdit} = this.state;
    this.setState({isEdit: !this.state.isEdit});
  }


  HandleSubmit = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value );
    this.toggleCourse();
  }

  renderUpdateCourse = () => {
    return (
      <form onSubmit={this.HandleSubmit}>
        <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.names} />
        <button>update course</button>
      </form>
    );
  }

  render () {
    //let {isEdit} = this.state;
    return (
      <Fragment>
         {this.state.isEdit ? this.renderUpdateCourse() : this.renderCourse()}
      </Fragment>
    )
  }
}

export default CoureseList
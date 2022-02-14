import React from 'react';

const courseForm = ({updateCourse, current, AddCourse}) => {
  return (
    <form onSubmit={AddCourse}>
      <input type='text' value={current} onChange={updateCourse} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default courseForm;
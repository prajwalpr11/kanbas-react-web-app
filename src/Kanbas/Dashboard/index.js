import db from "../Database";
import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./index.css";
import { React, useState } from "react";


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  //const courses = db.courses;
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };


  return (
    
    <div>
      <h2 className="text-muted pt-2">Dashboard</h2>
      <hr />
      <h5 className="wd-dashboard-pubcou">
        Published Courses ({courses.length})
      </h5>
      <hr />
      <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      
      

    </div>

      <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {courses.map((course, index) => (
          <div className="col wd-custom-card ">
            <div className="card wd-dashboard">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAlv+tY//LAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                alt="..."
              />
              <div className="card-body">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <h5 className="wd-card-course-title">{course.name}</h5>
                </Link>
                <h4 className="wd-card-course-code">
                  {course._id}.{course.startDate}.{course.endDate}{" "}
                </h4>
                <h6 class="wd-card-sem">{course.semester}</h6>
                <br />
                <FaRegPenToSquare />
                <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

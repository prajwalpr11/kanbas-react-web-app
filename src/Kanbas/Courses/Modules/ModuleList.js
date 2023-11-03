import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapsibleComponent from "./CollapsibleComponent";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  //const modules = db.modules;
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();



  return (
    <ul className="list-group">
      <li className="list-group-item">
      <div className="module-edit-form">
          <div className="form-group">
            <label htmlFor="moduleName" className="module-label">Module Name</label>
            <input
              id="moduleName"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="moduleDescription" className="module-label">Description</label>
            <textarea
              id="moduleDescription"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
               onClick={() => dispatch(setModule(module))}>

              Edit
            </button>

            <button
             onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            </button>

            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>))}
    </ul>
  );
}
export default ModuleList;

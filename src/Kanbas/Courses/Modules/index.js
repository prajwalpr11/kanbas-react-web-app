import ModuleList from "./ModuleList";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function Modules() {
  const [modules, setModules] = useState(db.modules);
  const { courseId } = useParams();

  return (
    <div style={{ position: "sticky" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="home-row-buttons float-end">
            <button class="btn btn-secondary"> Collapse All</button>
            <button class="btn btn-secondary"> View Progress</button>
            <button class="btn btn-secondary">
              {" "}
              <AiOutlineCheckCircle
                style={{ color: "green" }}
              ></AiOutlineCheckCircle>{" "}
              Publish All
            </button>
            <button class="btn btn-danger">
              <AiOutlinePlus></AiOutlinePlus> Module
            </button>
            <button class="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
        <hr />
        <ModuleList/>

      </div>
    </div>
  );
}
export default Modules;

import React, { useEffect, useState } from "react";
import { fetchAssignments, getAllCourses } from "../utils/assignmentDetails";
import styles from "../styles/AssignmentLibrary.module.css";
import CreateAss from "../components/assignment/CreateAss";
import { useNavigate, useParams } from "react-router";

const AssignmentLibratyCourse = () => {
  const { course } = useParams();
  const navigate = useNavigate();

  const [assignments, setAssignments] = useState();
  const [showCreate, setShowCreate] = useState(false);

  const courses = getAllCourses();

  useEffect(() => {
    fetchAssignments().then((subs) => {
      setAssignments(subs);
    });
  }, []);

  console.log(course);

  return assignments ? (
    <div>
      <div className={styles.top}>
        <select
          value={course}
          onChange={(e) => {
            if (e.target.value > -1) {
              navigate("/mentor/assignments/" + e.target.value);
            } else {
              navigate("/mentor/assignments");
            }
          }}
        >
          <option value={-1}>Select Course</option>
          {courses.map((course, ind) => (
            <option key={ind} value={ind}>
              {course}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setShowCreate(true);
          }}
        >
          Add Assignment
        </button>
      </div>
      <div className={styles.stat}>
        <p>Total Assignments</p>
        <h3>1.5k</h3>
      </div>
      <div className={styles.main}>
        <h2>Latest Assignment Submissions</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Course</th>
              <th>Uploaded By</th>
              <th>Uploaded On</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((data, ind) => (
              <tr key={ind} className={styles.submission}>
                <td>{ind + 1}</td>
                <td>{data.course}</td>
                <td>{data.uploadedBy}</td>
                <td>{data.uploadDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateAss
        shown={showCreate}
        closeHandler={() => {
          setShowCreate(false);
        }}
      />
    </div>
  ) : (
    "Loading"
  );
};

export default AssignmentLibratyCourse;

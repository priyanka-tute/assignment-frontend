import React, { useEffect, useState } from "react";
import { fetchAssignments } from "../utils/assignmentDetails";
import styles from "../styles/AssignmentLibrary.module.css";

const AssignmentLibrary = () => {
  const [assignments, setAssignments] = useState();

  useEffect(() => {
    fetchAssignments().then((subs) => {
      setAssignments(subs);
    });
  }, []);

  return assignments ? (
    <div>
      <div className={styles.top}>
        <select>
          <option>Select Course</option>
          <option>UI/UX</option>
        </select>
        <button>Add Assignment</button>
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
    </div>
  ) : (
    "Loading"
  );
};

export default AssignmentLibrary;

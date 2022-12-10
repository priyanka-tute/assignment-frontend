import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/Home.module.css";
import { fetchSubmissions, filterCourses } from "../utils/assignmentDetails";

const Home = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState();

  useEffect(() => {
    fetchSubmissions().then((subs) => {
      setSubmissions(subs);
    });
  });

  return submissions ? (
    <div>
      <div className={styles.filters}>
        <select>
          <option>26 Aug, 2022</option>
          <option>26 Aug, 2022</option>
          <option>26 Aug, 2022</option>
        </select>
        <select
          onChange={(e) => {
            if (e.target.value === "") return;

            navigate(`/${e.target.value}`);
          }}
        >
          <option value="">Select Course</option>
          {filterCourses(submissions).map((course, ind) => (
            <option key={ind} value={encodeURIComponent(course)}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.main}>
        <h2>Latest Assignment Submissions</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Assignment Progress</th>
              <th>Enrolled Date</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((data, ind) => (
              <tr
                key={ind}
                className={styles.submission}
                onClick={() => {
                  navigate("/" + data.assignmentId);
                }}
              >
                <td>{data.name}</td>
                <td>{data.course}</td>
                <td>
                  <div className="progress">
                    <div
                      style={{
                        width: `${50 + data.progress * 50}%`,
                      }}
                    >
                      {data.progress * 100}%
                    </div>
                  </div>
                  <span>{data.progress * 100} / 100</span>
                </td>
                <td>{data.enrollDate}</td>
                <td>{data.email}</td>
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

export default Home;

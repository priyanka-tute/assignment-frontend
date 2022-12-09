import React from "react";
import { useNavigate } from "react-router";
import styles from "../styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const submissions = [
    {
      name: "Aravind Khosla",
      course: "UI/UX",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "aravindkhosla@gmail.com",
      assignmentId: 0,
    },
    {
      name: "Sumit Agarwal",
      course: "Python",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "sumitagarwal@gmail.com",
      assignmentId: 1,
    },
    {
      name: "Pranjal Sahu",
      course: "MERN",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "pranjalsahu@gmail.com",
      assignmentId: 2,
    },
    {
      name: "Kumar Ranjit",
      course: "MERN",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "vindkhosla@gmail.com",
      assignmentId: 3,
    },
    {
      name: "Abhishek Singh",
      course: "Photoshop",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "ravindkhosla@gmail.com",
      assignmentId: 4,
    },
    {
      name: "Nishta Pathak",
      course: "FA",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "nishtha@gmail.com",
      assignmentId: 4,
    },
    {
      name: "Aravind Kumar",
      course: "C++",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "aravind@gmail.com",
      assignmentId: 5,
    },
    {
      name: "Anjali Kumari",
      course: "Python",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "kumrianjali@gmail.com",
      assignmentId: 6,
    },
    {
      name: "Roshan Jain",
      course: "MERN",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "roshanjain@gmail.com",
      assignmentId: 7,
    },
    {
      name: "Ritu Jain",
      course: "Java",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "ritujain@gmail.com",
      assignmentId: 0,
    },
  ];

  const courses = [];

  submissions.forEach((sub) => {
    if (!courses.includes(sub.course)) {
      courses.push(sub.course);
    }
  });

  console.log(courses);

  return (
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
          {courses.map((course) => (
            <option value={encodeURIComponent(course)}>{course}</option>
          ))}
        </select>
      </div>
      <div className={styles.main}>
        <h2>Latest Assignment Submissions</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Assignment Progress</th>
            <th>Enrolled Date</th>
            <th>Email ID</th>
          </tr>
          {submissions.map((data) => (
            <tr
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
        </table>
      </div>
    </div>
  );
};

export default Home;

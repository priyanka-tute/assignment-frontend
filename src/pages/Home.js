import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const submissions = [
    {
      name: "Aravind Khosla",
      course: "UI/UX",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "aravindkhosla@gmail.com",
    },
    {
      name: "Sumit Agarwal",
      course: "Python",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "sumitagarwal@gmail.com",
    },
    {
      name: "Pranjal Sahu",
      course: "MERN",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "pranjalsahu@gmail.com",
    },
    {
      name: "Kumar Ranjit",
      course: "MERN",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "vindkhosla@gmail.com",
    },
    {
      name: "Abhishek Singh",
      course: "Photoshop",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "ravindkhosla@gmail.com",
    },
    {
      name: "Nishta Pathak",
      course: "FA",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "nishtha@gmail.com",
    },
    {
      name: "Aravind Kumar",
      course: "C++",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "aravind@gmail.com",
    },
    {
      name: "Anjali Kumari",
      course: "Python",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "kumrianjali@gmail.com",
    },
    {
      name: "Roshan Jain",
      course: "MERN",
      progress: 1,
      enrollDate: "23 Aug, 2022",
      email: "roshanjain@gmail.com",
    },
    {
      name: "Ritu Jain",
      course: "Java",
      progress: 0.15,
      enrollDate: "23 Aug, 2022",
      email: "ritujain@gmail.com",
    },
  ];
  return (
    <div>
      <div className={styles.filters}>
        <select>
          <option>26 Aug, 2022</option>
          <option>26 Aug, 2022</option>
          <option>26 Aug, 2022</option>
        </select>
        <select>
          <option>Select Course</option>
          <option>Course 1</option>
          <option>Course 2</option>
          <option>Course 3</option>
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
            <tr>
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

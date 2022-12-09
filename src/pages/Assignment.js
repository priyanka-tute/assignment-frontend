import React from "react";
import { useNavigate, useParams } from "react-router";
import SubmissionView from "../components/SubmissionView";
import styles from "../styles/Assignment.module.css";
import ErrorPage from "./ErrorPage";

const Assignment = () => {
  const { course } = useParams();
  const courses = ["UI/UX", "Python", "MERN", "Photoshop", "FA", "C++", "Java"];
  const navigate = useNavigate();

  if (!courses.includes(decodeURIComponent(course))) {
    return <ErrorPage notFound />;
  }

  const fet = {
    success: true,
    data: [
      {
        assignment_id: "63070b2e85f6f1e1366b48dd",
        topic_name: "Introduction",
        subject_id: 1,
        course: "UI/UX",
        student_name: "Arvind Kumar",
        questions: [
          {
            question: "ABC",
            question_no: 1,
            instructions:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec condimentum porttitor arcu augue a quam ullamcorper vestibulum volutpat. Nulla sed sed vestibulum, nibh quisque. Sit risus massa ipsum nulla commodo sit. Tortor blandit ut lacus lectus. Fermentum vitae amet tristique morbi praesent tristique. Id purus elementum nisl pretium tellus diam, scelerisque. Egestas tortor et posuere aliquet elit, feugiat cras velit viverra. Posuere neque habitasse elit tristique rutrum pellentesque lectus. Justo porttitor enim, consequat nec luctus. Cursus vulputate a ut convallis. Elementum metus, amet malesuada eget.",
            status: "submitted",
            submissions: [
              {
                attempt: 1,
                filelink: ["http://tutedude.com", "http://tutedude.com"],
                filename: ["abc.txt", "def.txt"],
                link: [
                  "https://assignment-backend-tutedude.herokuapp.com/assignment/view?student_id=44&subject_id=1",
                ],
                text: "Test text",
                linkText: ["assignment live link"],
                _id: "633d763f2c3f1e2b0b9ada88",
                addDate: "2022-10-05T12:19:11.855Z",
                updatedAt: "2022-10-05T14:22:43.727Z",
              },
              {
                attempt: 2,
                filelink: ["http://tutedude.com"],
                filename: ["abc.txt"],
                link: [
                  "https://assignment-backend-tutedude.herokuapp.com/assignment/view?student_id=44&subject_id=1",
                ],
                text: "Test text for attemp 2",
                linkText: ["assignment live link"],
                _id: "633d763f2c3f1e2b0b9ada88",
                addDate: "2022-10-05T12:19:11.855Z",
                updatedAt: "2022-10-05T14:22:43.727Z",
              },
            ],
            submission_id: "633d763f2c3f1e2b0b9ada86",
          },
          {
            question: "WAP to print multiples of 6",
            question_no: 2,
            status: "completed",
            submissions: [
              {
                attempt: 1,
                filelink: [],
                filename: [],
                link: [],
                text: "sanj csh dc sdhgdh adhhiemi cno hirewtmo jhitmo n mohit ",
                linkText: [],
                _id: "63400d37adbf96e5827c341f",
                addDate: "2022-10-07T11:27:51.322Z",
                updatedAt: "2022-10-07T11:44:19.812Z",
              },
            ],
            feedback: [
              {
                attempt: 1,
                filelink: [],
                filename: [],
                link: [],
                text: "sanj csh dc sdhgdh adhhiemi cno hirewtmo jhitmo n mohit ",
                linkText: [],
                _id: "63400d37adbf96e5827c341f",
                addDate: "2022-10-07T11:27:51.322Z",
                updatedAt: "2022-10-07T11:44:19.812Z",
              },
            ],
            submission_id: "63400d37adbf96e5827c341d",
          },
        ],
      },
    ],
  };

  const newAssignment = 51;
  const unreviewed = 68;

  let count = 0;

  const data = fet.data[0];
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>Courses &gt; {data.topic_name}</div>
          <div className={styles.data}>
            <select>
              <option>26 Aug, 2022</option>
            </select>
            <div className={styles.header_info}>
              <div>
                <span>New Assignment</span>
                <span>{newAssignment}</span>
              </div>
              <div>
                <span>Unreviewed</span>
                <span>{unreviewed}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <select
            onChange={(e) => {
              if (e.target.value === "") navigate("/", { relative: false });

              navigate(`/${e.target.value}`);
            }}
            value={course}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option value={course}>{course}</option>
            ))}
          </select>
          <select>
            <option>Sort By: Latest First</option>
          </select>
        </div>
      </div>
      <div className={styles.submissions}>
        {data.questions.map((ques) =>
          ques.submissions.map((subm) => (
            <SubmissionView
              data={{
                number: ++count,
                time: "11:15 AM",
                userInfo: {
                  profilePic: "",
                  name: data.student_name,
                  course: data.course,
                },
                details: {
                  topicName: data.topic_name,
                  question: ques.question,
                  text: ques.instructions,
                },
                solution: {
                  filename: subm.filename,
                  filelink: subm.filelink,
                  linkText: subm.linkText,
                  link: subm.link,
                  text: subm.text,
                },
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Assignment;

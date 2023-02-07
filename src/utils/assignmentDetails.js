import Cookies from "js-cookie";

export const fetchSubmissions = async () => {
  return [
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
};

export const fetchCourseSubmissions = async (
  course = "63cac188c796cfd9126be950"
) => {
  const token = Cookies.get("mentor_token");

  try {
    const res = await fetch(
      process.env.REACT_APP_API_URL +
        `/mentor/submission?subject_id=${course}&mentor=${token}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }

  /*
  return {
    success: true,
    data: [
      {
        assignment_id: "63070b2e85f6f1e1366b48dd",
        topic_name: "Introduction",
        subject_id: 1,
        course: "UI/UX",
        student_name: "Arvind Kumar",
        updatedAt: "2022-10-05T14:22:43.727Z",
        question: [
          {
            updatedAt: "2022-10-05T14:22:43.727Z",
            question: "ABC",
            question_no: 1,
            instructions:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec condimentum porttitor arcu augue a quam ullamcorper vestibulum volutpat. Nulla sed sed vestibulum, nibh quisque. Sit risus massa ipsum nulla commodo sit. Tortor blandit ut lacus lectus. Fermentum vitae amet tristique morbi praesent tristique. Id purus elementum nisl pretium tellus diam, scelerisque. Egestas tortor et posuere aliquet elit, feugiat cras velit viverra. Posuere neque habitasse elit tristique rutrum pellentesque lectus. Justo porttitor enim, consequat nec luctus. Cursus vulputate a ut convallis. Elementum metus, amet malesuada eget.",
            status: "completed",
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
                review:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium interdum porta egestas vitae vel. Nec phasellus orci pretium vulputate mi amet, fringilla. Tellus, diam, quis nunc, morbi ullamcorper ut eros, nunc. Magna eget placerat ut cum elementum.",
                reviewLinkText: [
                  "this is a link attached by mentor, it will open on clicking",
                  "This is another link",
                ],
                reviewLinks: ["https://google.com", "https://tutedude.com"],
                reviewFiles: ["https://google.com", "https://tutedude.com"],
                reviewFileText: ["filename1.ext", "filename2.ext"],
                reviewDate: "14-09-22",
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
            updatedAt: "2022-10-05T14:22:43.727Z",
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
      {
        assignment_id: "63070b2e85f6f1e1366b48dd",
        topic_name: "Introduction",
        subject_id: 1,
        course: "UI/UX",
        student_name: "Sumit Agarwal",
        updatedAt: "2022-10-05T14:22:43.727Z",
        question: [
          {
            updatedAt: "2022-10-05T14:22:43.727Z",
            question: "This is another question",
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
        ],
      },
    ],
  };
  */
};

export const fetchUnrevSubmissions = async (course) => {
  const token = Cookies.get("mentor_token");

  try {
    const res = await fetch(
      process.env.REACT_APP_API_URL +
        `https://api.tutedude.com/assignment/mentor/submission/pending?mentor=${token}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {
      success: true,
      data: [
        {
          _id: "63ca86558c04cb08393152f6",
          student_id: "test@gmail.com",
          assignment_id: {
            _id: "63ca7d70c35d683bc1157037",
            subject_id: "63cac188c796cfd9126be950",
            questions: [
              {
                question_no: 1,
                question: "WAP to check if the number is prime",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157038",
                addDate: "2023-01-20T11:39:28.345Z",
                updatedAt: "2023-01-20T11:39:28.345Z",
              },
              {
                question_no: 2,
                question: "WAP to check if the number is even",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157039",
                addDate: "2023-01-20T11:39:28.346Z",
                updatedAt: "2023-01-20T11:39:28.346Z",
              },
            ],
            topic: "Topic",
            addedBy: "63ca7bf9c796cfd9126be94e",
            addDate: "2023-01-20T11:39:28.347Z",
            updatedAt: "2023-01-20T11:39:28.347Z",
            __v: 0,
          },
          subject_id: "63cac188c796cfd9126be950",
          question: {
            question_no: 1,
            question: "WAP to check if the number is prime",
            _id: "63ca86558c04cb08393152f7",
            addDate: "2023-01-20T12:17:25.894Z",
            updatedAt: "2023-01-20T12:17:25.894Z",
          },
          status: "resubmit",
          submissions: [
            {
              attempt: 3,
              filelink: [],
              filename: [],
              filecloudlinks: [],
              link: [],
              text: "another submission",
              linkText: [],
              review: {
                filelink: [],
                filename: [],
                filecloudlinks: [],
                link: [],
                text: "demo statement",
                linkText: [],
                _id: "63da4caab118d71f3d2ba7b1",
              },
              reviewDate: "2023-02-01T11:27:38.909Z",
              _id: "63ca9918ac7c7e39e7f244c2",
              updatedAt: "2023-02-01T11:27:38.910Z",
              addDate: "2023-02-01T11:27:38.910Z",
            },
          ],
          __v: 0,
          student_name: "test",
        },
        {
          _id: "63d9e27cb118d71f3d2ba713",
          student_id: "demo@tutedude.com",
          assignment_id: {
            _id: "63ca7d70c35d683bc1157037",
            subject_id: "63cac188c796cfd9126be950",
            questions: [
              {
                question_no: 1,
                question: "WAP to check if the number is prime",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157038",
                addDate: "2023-01-20T11:39:28.345Z",
                updatedAt: "2023-01-20T11:39:28.345Z",
              },
              {
                question_no: 2,
                question: "WAP to check if the number is even",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157039",
                addDate: "2023-01-20T11:39:28.346Z",
                updatedAt: "2023-01-20T11:39:28.346Z",
              },
            ],
            topic: "Topic",
            addedBy: "63ca7bf9c796cfd9126be94e",
            addDate: "2023-01-20T11:39:28.347Z",
            updatedAt: "2023-01-20T11:39:28.347Z",
            __v: 0,
          },
          subject_id: "63cac188c796cfd9126be950",
          question: {
            question_no: 1,
            question: "WAP to check if the number is prime",
            _id: "63d9e27cb118d71f3d2ba714",
            addDate: "2023-02-01T03:54:36.278Z",
            updatedAt: "2023-02-01T03:54:36.278Z",
          },
          status: "resubmit",
          submissions: [
            {
              attempt: 1,
              filelink: [],
              filename: [],
              filecloudlinks: [],
              link: [],
              text: "Text 1",
              linkText: [],
              review: {
                filelink: [],
                filename: [],
                filecloudlinks: [],
                link: [],
                text: "Retry",
                linkText: [],
                _id: "63d9e2cfb118d71f3d2ba731",
              },
              reviewDate: "2023-02-01T03:55:59.238Z",
              _id: "63d9e27cb118d71f3d2ba715",
              updatedAt: "2023-02-01T03:55:59.240Z",
              addDate: "2023-02-01T03:55:59.240Z",
            },
          ],
          __v: 0,
          student_name: "Demo",
        },
        {
          _id: "63dbff12b118d71f3d2ba7fd",
          student_id: "test@gmail.com",
          assignment_id: {
            _id: "63ca7d70c35d683bc1157037",
            subject_id: "63cac188c796cfd9126be950",
            questions: [
              {
                question_no: 1,
                question: "WAP to check if the number is prime",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157038",
                addDate: "2023-01-20T11:39:28.345Z",
                updatedAt: "2023-01-20T11:39:28.345Z",
              },
              {
                question_no: 2,
                question: "WAP to check if the number is even",
                addedBy: "63ca7bf9c796cfd9126be94e",
                _id: "63ca7d70c35d683bc1157039",
                addDate: "2023-01-20T11:39:28.346Z",
                updatedAt: "2023-01-20T11:39:28.346Z",
              },
            ],
            topic: "Topic",
            addedBy: "63ca7bf9c796cfd9126be94e",
            addDate: "2023-01-20T11:39:28.347Z",
            updatedAt: "2023-01-20T11:39:28.347Z",
            __v: 0,
          },
          subject_id: "63cac188c796cfd9126be950",
          question: {
            question_no: 1,
            question: "WAP to check if the number is prime",
            _id: "63dbff12b118d71f3d2ba7fe",
            addDate: "2023-02-02T18:21:06.568Z",
            updatedAt: "2023-02-02T18:21:06.568Z",
          },
          status: "submitted",
          submissions: [
            {
              attempt: 1,
              filelink: [],
              filename: [],
              filecloudlinks: [],
              link: [],
              linkText: [],
              _id: "63dbff12b118d71f3d2ba7ff",
              addDate: "2023-02-02T18:21:06.568Z",
              updatedAt: "2023-02-02T18:21:06.568Z",
            },
          ],
          __v: 0,
          student_name: "test",
        },
      ],
    };
  }
};

export const filterCourses = (submissions) => {
  const courses = [];

  submissions.forEach((sub) => {
    if (!courses.includes(sub.course)) {
      courses.push(sub.course);
    }
  });

  return courses;
};

export const fetchAssignments = async () => {
  return [
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
    {
      course: "UI/UX",
      uploadedBy: "",
      uploadDate: "",
    },
  ];
};

export const getAllCourses = () => {
  return ["UI/UX", "Python", "MERN", "Photoshop", "FA", "C++", "Java"];
};

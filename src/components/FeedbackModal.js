import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Modal.module.css";

const FeedbackModal = ({ showFeedbackForm, closeHandler }) => {
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [text, setText] = useState("");
  // const [full, setFull] = useState([]);

  const submitHandler = () => {
    console.log({
      text: text,
      files: files,
      links: links,
    });
    setLinks([]);
    setFiles([]);
    setText("");
  };

  return (
    <Modal
      shown={showFeedbackForm}
      closeHandler={closeHandler}
      hideClose
      className={styles.feedback}
    >
      <h5>Feedback for Assignment 1</h5>
      <div className={styles.input}>
        <div
          className={`${styles.empty_overlay} ${
            text.length === 0 && files.length === 0 && links.length === 0
              ? styles.show
              : ""
          }`}
        >
          Add files, links or texts as your feedback
        </div>
        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>

        <div className={styles.files}>
          {files.map((file, ind) => (
            <div key={ind}>
              {file.name}
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="#434343"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setFiles((curr) => curr.filter((val, i) => i !== ind));
                }}
              >
                <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.action_btns}>
          <div>
            <label>
              <span>
                <svg
                  width="11"
                  height="21"
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6263 4.99984V15.5415C9.6263 17.5673 7.98547 19.2082 5.95964 19.2082C3.9338 19.2082 2.29297 17.5673 2.29297 15.5415V4.08317C2.29297 2.81817 3.31964 1.7915 4.58464 1.7915C5.84964 1.7915 6.8763 2.81817 6.8763 4.08317V13.7082C6.8763 14.2123 6.4638 14.6248 5.95964 14.6248C5.45547 14.6248 5.04297 14.2123 5.04297 13.7082V4.99984H3.66797V13.7082C3.66797 14.9732 4.69464 15.9998 5.95964 15.9998C7.22464 15.9998 8.2513 14.9732 8.2513 13.7082V4.08317C8.2513 2.05734 6.61047 0.416504 4.58464 0.416504C2.5588 0.416504 0.917969 2.05734 0.917969 4.08317V15.5415C0.917969 18.3282 3.17297 20.5832 5.95964 20.5832C8.7463 20.5832 11.0013 18.3282 11.0013 15.5415V4.99984H9.6263Z"
                    fill="#434343"
                  />
                </svg>
                file
              </span>
              <input
                type="file"
                onChange={(event) => {
                  setFiles((curr) => [...curr, event.target.files[0]]);
                }}
              />
            </label>
          </div>
          <div>
            <span>
              <svg
                width="21"
                height="10"
                viewBox="0 0 21 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 5C2.4 3.29 3.79 1.9 5.5 1.9H9.5V0H5.5C2.74 0 0.5 2.24 0.5 5C0.5 7.76 2.74 10 5.5 10H9.5V8.1H5.5C3.79 8.1 2.4 6.71 2.4 5ZM6.5 6H14.5V4H6.5V6ZM15.5 0H11.5V1.9H15.5C17.21 1.9 18.6 3.29 18.6 5C18.6 6.71 17.21 8.1 15.5 8.1H11.5V10H15.5C18.26 10 20.5 7.76 20.5 5C20.5 2.24 18.26 0 15.5 0Z"
                  fill="#434343"
                />
              </svg>
              link
            </span>
          </div>
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </Modal>
  );
};

export default FeedbackModal;

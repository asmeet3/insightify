import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet'
import axios from 'axios';

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileNameClick = () => {
    setSelectedFile(null);
  };

  const submitFile = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/extract-text', formData);
      if (response.data.text) {
        setExtractedText(response.data.text);
      } else {
        console.error("Error extracting text or no text found");
      }
    } catch (error) {
      console.error("Error submitting file:", error);
    }
    setLoading(false);
  };
  

  return (
    <div className="c-parentcontainer">
      <Helmet>
        <title>insightify</title>
      </Helmet>
      <header className="navbar">
        <div className="navbar-menu">
          <span className="website-logo">insightify</span>
          <button type="button" className="c-menubutton-comprehension">
            Comprehension Solver
          </button>
          <button type="button" className="c-menubutton-summarizer">
            Summarizer
          </button>
        </div>
      </header>
      <footer className="summarizer-footer">
        <div className="summarizer-copyright">
          <div className="summarizer-container1">
            <span className="summarizer-text05">insightify</span>
          </div>
          <span className="summarizer-text06">
            <span>© 2024 insightify,</span>
            <br></br>
            <span> All Rights Reserved.</span>
          </span>
        </div>
        <div className="summarizer-socialmedia">
          <span className="summarizer-text10">
            <span className="summarizer-text11">Follow us on</span>
            <br></br>
          </span>
          <div className="summarizer-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="summarizer-twitter"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="summarizer-instagram"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="summarizer-facebook"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <div className="summarizer-links-container">
          <div className="summarizer-container2">
            <div className="summarizer-usecases">
              <span className="summarizer-text13">
                <span>Use Cases</span>
                <br></br>
              </span>
              <span className="summarizer-text16">usecase 1</span>
              <span className="summarizer-text17">
                <span className="summarizer-text18">usecase 2</span>
                <br></br>
              </span>
              <span className="summarizer-text20">usecase 3</span>
            </div>
            <div className="summarizer-company">
              <span className="summarizer-text21">Company</span>
              <div className="summarizer-container3">
                <span className="summarizer-text22">
                  <span>Contact</span>
                  <br></br>
                </span>
                <span className="summarizer-text25">About</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="c-middlecontainer"></div>
      <div className="c-fileuploadcontainer">
        <input
          type="file"
          id="fileInput"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {selectedFile ? (
          <div className="c-selectedfile">
            <p className="c-filename" onClick={handleFileNameClick}>
              {selectedFile.name}
            </p>
          </div>
        ) : (
          <label htmlFor="fileInput" className="c-uploadbutton">
            Upload your document <span style={{ color: 'lightcoral' }}>*</span>
          </label>
        )}
        <button onClick={submitFile} disabled={!selectedFile || loading}>
          {loading ? 'Processing...' : 'Submit File'}
        </button>
      </div>
      {extractedText && (
        <div className="c-extracted-text">
          <h2>Extracted Text:</h2>
          <p>{extractedText}</p>
        </div>
      )}

      <div className="questions-container">
        <button className="c-getanswers">Get Answers</button>
        <div className="textarea-header">Questions</div>
        <textarea
          placeholder="placeholder"
          className="textarea summarizer-textarea"
        ></textarea>
      </div>
      <div className="answer-container">
        <div className="answerarea-header">Answer</div>
        <textarea
          placeholder="placeholder"
          className="textarea answer-textarea"
        ></textarea>
      </div>

    </div>
  );
}

export default App;

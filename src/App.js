import React, { useState, useRef } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const App = () => {
  const [fileData, setFileData] = useState('');
  const [fileName, setFileName] = useState('');
  const [pdf, setPDF] = useState(null);
  const [editor, setEditor] = useState(null);
  const inputPDF = useRef(null);

  const baseURL =
    'https://ipchgmr3va.execute-api.ap-southeast-2.amazonaws.com/prod';

  const handleOnEditorChange = (e, editor) => {
    setFileData(editor.getData());
  };

  const createFile = () => {
    console.log('Creating file ' + fileName);
    axios
      .post(`${baseURL}/?name=${fileName}`, {
        content: fileData,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const getFile = () => {
    console.log('Getting file ' + fileName);
    axios.get(`${baseURL}/?name=${fileName}`).then((res) => {
      console.log(res.data.body);
      editor.setData(res.data.body);
    });
  };

  const openInputWindow = () => {
    inputPDF.current.click();
  };

  const onFileChange = (e) => {
    setPDF(e.target.files[0]);
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.buttonContainer}>
        <textarea
          placeholder='Enter file name'
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        />
        <button onClick={createFile}>Create file</button>
        <button onClick={getFile}>Get file</button>
        <button onClick={openInputWindow}>Upload PDF</button>
        <input
          type='file'
          ref={inputPDF}
          style={{ display: 'none' }}
          onChange={onFileChange}
        />
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.editorContainer}>
          <CKEditor
            onReady={(editor) => {
              console.log('Editor is ready');
              setEditor(editor);
            }}
            editor={ClassicEditor}
            onChange={handleOnEditorChange}
          />
        </div>
        {/* <div style={styles.displayContainer}>{fileData}</div> */}
        <div style={styles.displayContainer}>
          {pdf && (
            <Document file={pdf}>
              <Page pageNumber={1} />
            </Document>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    margin: 20,
    height: '100vh',
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: 20,
  },
  mainContainer: {
    display: 'flex',
  },
  editorContainer: {
    marginRight: 10,
    width: '50%',
    height: '100%',
  },
  displayContainer: {
    marginLeft: 10,
    width: '50%',
  },
};

export default App;

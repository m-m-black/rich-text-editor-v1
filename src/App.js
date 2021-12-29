import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const App = () => {
  const [fileData, setFileData] = useState('');
  const [fileName, setFileName] = useState('');
  const [editor, setEditor] = useState(null);

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
        <div style={styles.displayContainer}>{fileData}</div>
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

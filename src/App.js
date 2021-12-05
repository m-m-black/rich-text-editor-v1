import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const App = () => {
  const baseURL =
    'https://ipchgmr3va.execute-api.ap-southeast-2.amazonaws.com/prod';

  const [fileData, setFileData] = useState('');

  const handleOnChange = (e, editor) => {
    setFileData(editor.getData());
  };

  const createFile = () => {
    axios
      .post(`${baseURL}/?name=newfile`, {
        content: fileData,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.buttonContainer}>
        <button onClick={createFile}>Create file</button>
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.editorContainer}>
          <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
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

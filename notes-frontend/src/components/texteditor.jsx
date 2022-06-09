import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export function Texteditor() {

    const [contentfromeditor, setContentFromEditor] = useState();

  const editorRef = useRef();
  const saveNewDocument = () => {

    console.log(contentfromeditor);
/*     

    fetch("http://localhost:3000/document/newDocument",
    "post", editorRef.current.getContent())
    .then((data) => {
        let dataResponse = data;
        console.log(dataResponse);
    }) */

  };

  return (
    <>



      <Editor
        apiKey='nujf5l8962ganwuvo5g70xi33ql3fwrtxvvufeoxdw8j4t1n'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue= {contentfromeditor}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={saveNewDocument}>Spara dokumentet!</button>
    </>
  );
}
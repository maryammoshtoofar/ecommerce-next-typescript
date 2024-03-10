'use client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from 'react';

const WYSIWYG = () => {
  const [editor, setEditor] = useState<string>('');

  useEffect(() => console.log('yo', editor), [editor]);

  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Product Description</p>"
      onReady={() => {
        console.log('Editor is ready to use!');
      }}
      onChange={(event, editor) => {
        setEditor(editor.getData());
      }}
      onBlur={(event, editor) => {
        setEditor(editor.getData());
      }}
    />
  );
};

export default WYSIWYG;

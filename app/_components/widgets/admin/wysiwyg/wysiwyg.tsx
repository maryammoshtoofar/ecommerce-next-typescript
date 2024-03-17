'use client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from 'react';
type Props = {
  data?: string;
};
const WYSIWYG = ({ data }: Props) => {
  const [editor, setEditor] = useState<string>('');

  // useEffect(() => console.log('yo', editor), [editor]);

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onReady={(editor) => {
        if (data) editor.setData(data);
        console.log('Editor is ready to use!', editor);
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

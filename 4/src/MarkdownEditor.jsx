import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorRef = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    editorInstance.current = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical'
    });

    editorInstance.current.addHook('change', () => {
      const content = editorInstance.current.getMarkdown();
      onContentChange(content);
    });

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
      }
    };
  }, [onContentChange]);

  return <div ref={editorRef} />;
  // END
};

export default MarkdownEditor;

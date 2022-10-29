import type { EditorProps, Monaco } from '@monaco-editor/react';
import Editor from '@monaco-editor/react';
import type { NextPage } from 'next';
import { lintMarkdown } from '@lint-md/core';
// @ts-expect-error
import type { editor } from 'monaco-editor';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import demoContent from './demo.md';

export const EDITOR_DEFAULT_OPTIONS: EditorProps['options'] = {
  automaticLayout: true,
  fontWeight: '450',
  fontSize: 14,
  fixedOverflowWidgets: true,
  unicodeHighlight: {
    ambiguousCharacters: false,
  },
  theme: 'vs-dark',
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
    useShadows: false,
    alwaysConsumeMouseWheel: false,
  },
  lineDecorationsWidth: 1,
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false,
  },
  padding: {
    top: 10,
    bottom: 10,
  },
  wordWrap: 'on',
};

const Home: NextPage = () => {
  const [currentValue, setCurrentValue] = useState(demoContent);

  const initEditorMarker = (monaco: Monaco, editor: editor.IStandaloneCodeEditor, markdown: string) => {
    const model = editor.getModel();
    if (model) {
      const { lintResult } = lintMarkdown(markdown);
      const markers = lintResult.map((item) => {
        const { loc: { start, end }, message } = item;
        return {
          severity: monaco.MarkerSeverity.Error,
          startLineNumber: start.line,
          startColumn: start.column,
          endLineNumber: end.line,
          endColumn: end.column,
          message,
        };
      });

      monaco.editor.setModelMarkers(model, 'lint-md', markers);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.editor_wrapper}>
        <Editor
          theme={'vs-dark'}
          options={EDITOR_DEFAULT_OPTIONS}
          onMount={(editor, monaco) => {
            initEditorMarker(monaco, editor, currentValue);
            const model = editor.getModel();
            model?.onDidChangeContent(() => {
              initEditorMarker(monaco, editor, editor.getValue());
            });
          }}
          height="100%"
          language={'markdown'}
          defaultValue={demoContent}
        />
      </div>
    </div>
  );
};

export default Home;

import Editor from '@monaco-editor/react'
import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {lintMarkdown} from "@lint-md/core";
// @ts-ignore
import demoContent from './demo.md'

const Home: NextPage = () => {
  const res = lintMarkdown(demoContent);
  console.log(res);
  return (
    <div className={styles.container}>
      <div className={styles.editor_wrapper}>
        <Editor
          height="100%"
          language={'markdown'}
          defaultValue={demoContent}
        />
      </div>
    </div>
  )
}

export default Home

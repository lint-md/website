import { loader } from '@monaco-editor/react';

const getCDNPath = (version: string) => {
  return `https://g.alicdn.com/code/lib/monaco-editor/${version}/min/vs`;
};

loader.config({
  paths: {
    vs: getCDNPath('0.33.0'),
  },
});

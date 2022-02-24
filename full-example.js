import React, {useEffect, useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';

const fetchData = url => fetch(url)
  .then(response => response.text());

export const InnerComponentExternalCodeBlock = props => {
  let [state, setState] = useState('')
  useEffect(() => {
    fetchData(props.url).then(data => {
      setState(data)
    })
  }, [props.url])
  return <CodeBlock language={props.lang} title={props.title}>{state}</CodeBlock>;
};

export const ExternalCodeBlock = props => (
  <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      return (<InnerComponentExternalCodeBlock {...props}/>)
    }}
  </BrowserOnly>
);


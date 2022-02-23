import React from 'react';
import CodeBlock from '@theme/CodeBlock';

let senderRaw = [
  'https://raw.githubusercontent.com/strmprivacy/java-examples/master/src/main/java/io/strmprivacy/examples/Sender.java',
  'https://raw.githubusercontent.com/strmprivacy/python-examples/master/examples/sender_async.py',
  'https://raw.githubusercontent.com/strmprivacy/nodejs-examples/master/src/sender.ts',
  'https://raw.githubusercontent.com/strmprivacy/php-examples/master/examples/send.php'
]

let langs = ['java', 'python', 'nodejs', 'php']
export var storedText = {};
for (let i = 0; i < senderRaw.length; i ++ ) {
  storedText[langs[i]] = ''
}
for (let i = 0; i < senderRaw.length; i ++ ) {
  fetch(senderRaw[i])
    .then(response => response.text())
    .then(data => {
      storedText[langs[i]] = data;
    });
}

export  function JavaSender() {
  return (
      <CodeBlock language="java" title="Sender.java">
        { storedText['java'] }
      </CodeBlock>
  );
}

export function PythonSender() {
  return (
    <CodeBlock language="python" title="sender_async.py">
      { storedText['python'] }
    </CodeBlock>
  );
}

export function NodejsSender() {
  return (
    <CodeBlock language="typescript" title="sender.ts">
      { storedText['nodejs'] }
    </CodeBlock>
  );
}

export function PhpSender() {
  return (
    <CodeBlock language="php" title="send.php">
      { storedText['php'] }
    </CodeBlock>
  );
}


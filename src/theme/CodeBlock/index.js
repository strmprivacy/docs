import React, {useEffect, useState} from 'react';
import CodeBlock from '@theme-original/CodeBlock';

/*
Inspired by Google Cloud Documentation's 'Format Placeholders' (https://developers.google.com/style/placeholders)
this implements a Markdown compatible way of defining and using placeholders in code blocks, that uses can edit

Using the placeholders can be done as follows:

```json title=my-json.json placeholders empty_placeholders=another_one,unused_one my_placeholder=Text that will be shown in the label, another_one=This is cool!, unused_one=This is unused
{
    "someKey": "Using placeholders is simple, just fill out a text in the input, and it'll be shown here: $my_placeholder",
    "someOtherKey": "Did I say this already? Any user value is shown here = $another_one"
}
```

Important remark, the `placeholders` keyword in the metastring, is used as a separator. Everything after the `placeholders`
keyword is considered to be a placeholder. The key of a placeholder can be used in the code block string and the value
is used as the label shown next to the input field.

empty_placeholders=another_one,unused_one specifies whether the placeholder default value should be empty.

If you don't use a placeholder in the code block, the input for the placeholder will be disabled.
*/

const gitHubTagsRegex = new RegExp('^v\\d+\\.\\d+\\.\\d+$');

function stateManagement(placeholders) {
  let initialState = Object.fromEntries(
    Object.entries(placeholders)
      .map(([key, prop]) => {
        if (prop.isExternalData) {
          return [key, {
            value: "<FETCHING>",
            fetched: false
          }];
        } else {
          return [key, {
            value: prop.inputPlaceholder,
            fetched: true
          }];
        }
      })
  );
  let [placeholderValues, setPlaceholderValues] = useState(initialState);

  const handleChange = (placeholderKey, event) => {
    let copiedPlaceholderValues = {...placeholderValues};
    delete copiedPlaceholderValues[placeholderKey];
    copiedPlaceholderValues[placeholderKey] = {value: event.target.value, fetched: true};
    setPlaceholderValues({...copiedPlaceholderValues});
  };

  // Fetch external data placeholders
  Object.entries(placeholders)
    .filter(([_, prop]) => prop.isExternalData)
    .sort(([keyA, propA], [keyB, propB]) => keyA.localeCompare(keyB))
    .map(([key, prop]) => {
      useEffect(() => {
        const isFetched = placeholderValues[key].fetched;

        if (!isFetched) {
          const [url, responsePath] = prop.description.split("#");

          fetch(url)
            .then(response => response.json())
            .then(release => release[responsePath])
            .then(releaseName => releaseName.match(gitHubTagsRegex) != null ? releaseName.substring(1) : releaseName)
            .then(releaseName => {
              handleChange(key, {target: {value: releaseName}});
            });
        }
      });
    });

  return {placeholderValues, handleChange};
}

function placeholderInputs(children, placeholders, valuesState, handleChange) {
  let inputs = [];

  Object.entries(placeholders)
    .filter(([_, prop]) => !prop.isExternalData)
    .forEach(([key, prop]) => {
      const inputValue = valuesState[key].value === prop.inputPlaceholder ? "" : valuesState[key].value;
      const placeholderMatch = '$' + key;

      let containsPlaceholder = children.match(new RegExp('\\' + placeholderMatch + '\\b')) != null;
      inputs.push(<div className="code-block-placeholder" key={key}>
        <label className="code-block-placeholder-element"
               for={"placeholder-" + key}
        ><b>{placeholders[key].description}</b>
          <input type="text"
                 className="code-block-placeholder-element"
                 id={"placeholder-" + key}
                 placeholder={containsPlaceholder ? prop.inputPlaceholder : "Unused placeholder. Use it with " + placeholderMatch + " in the code block."}
                 disabled={!containsPlaceholder}
                 value={inputValue}
                 onChange={(e) => handleChange(key, e)}/></label>

      </div>);
    });
  return inputs;
}

function replacePlaceholders(children, placeholderValues, placeholders) {
  let childrenWithPlaceholdersReplaced = children;

  // Replace the placeholders
  Object.entries(placeholderValues).forEach(([key, stateValue]) => {
    const placeholderMatch = '$' + key;

    if (childrenWithPlaceholdersReplaced.includes(placeholderMatch)) {
      const replacementValue = stateValue.value.length === 0 ? placeholders[key].inputPlaceholder : stateValue.value;

      childrenWithPlaceholdersReplaced = childrenWithPlaceholdersReplaced.replaceAll(placeholderMatch, replacementValue);
    }
  });
  return childrenWithPlaceholdersReplaced;
}

function removePlaceholdersFromProps(props, metaStringAfterPlaceholderMarker, metaStringBeforePlaceholderMarker) {
  let cleanedProps = {...props};
  Object.entries(props).forEach(([key, value]) => {
    if (metaStringAfterPlaceholderMarker.includes(key)) delete cleanedProps[key];
  });
  cleanedProps['metastring'] = metaStringBeforePlaceholderMarker;
  cleanedProps['className'] = cleanedProps['className'] + ' with-footer';
  return cleanedProps;
}

function createInputPlaceholder(key, value, emptyPlaceholders) {
  if (emptyPlaceholders.includes(key)) {
    return '';
  }

  return `<${value.toUpperCase().replaceAll(/(?:^\s?|\s*?[.!?]+$|[()])/g, '').replaceAll(/\s/g, "_")}>`;
}

function splitMetastring(props) {
  let [metaStringBeforePlaceholderMarker, metaStringAfterPlaceholderMarker] = props.metastring.split(/\s?placeholders\s/);

  let emptyPlaceholders = [];

  if (metaStringAfterPlaceholderMarker.includes("empty_placeholders")) {
    const emptyPlaceholdersRegex = new RegExp("(?:empty_placeholders)\=(.*?)\\s(.*)", "g");
    const matches = emptyPlaceholdersRegex.exec(metaStringAfterPlaceholderMarker);

    if (matches.length > 1) {
      emptyPlaceholders = emptyPlaceholders + matches[1].split(",");

      metaStringAfterPlaceholderMarker = matches[2];
    }
  }
  return {metaStringBeforePlaceholderMarker, metaStringAfterPlaceholderMarker, emptyPlaceholders};
}

function downloadButton(props, children) {
  if (props.download) {
    const blob = new Blob([children], {type: 'text/plain'});

    return (
      <div className="code-block-footer-download">
        <a target="_blank" href={window.URL.createObjectURL(blob)} download={props.download}>Download file</a>
      </div>
    );
  }

  return (<></>);
}

export default function CodeBlockWrapper({children: children, ...props}) {
  if (props.placeholders) {
    let {
      metaStringBeforePlaceholderMarker,
      metaStringAfterPlaceholderMarker,
      emptyPlaceholders
    } = splitMetastring(props);

    let placeholders = Object.fromEntries(metaStringAfterPlaceholderMarker
      .replaceAll(/,\s?/g, ",")
      .split(",")
      .map(pair => pair.split('='))
      .map(([key, value]) => [key, {
        description: value,
        inputPlaceholder: createInputPlaceholder(key, value, emptyPlaceholders),
        isExternalData: value.startsWith("https://"),
        fetched: false
      }])
    );

    let modifiedProps = removePlaceholdersFromProps(props, metaStringAfterPlaceholderMarker, metaStringBeforePlaceholderMarker);
    let {placeholderValues, handleChange} = stateManagement(placeholders);
    let inputs = placeholderInputs(children, placeholders, placeholderValues, handleChange);
    let childrenWithPlaceholdersReplaced = replacePlaceholders(children, placeholderValues, placeholders);

    return (
      <>
        <CodeBlock {...modifiedProps} >
          {childrenWithPlaceholdersReplaced}
        </CodeBlock>
        <div className="code-block-footer">
          <p><b>Placeholders</b></p>
          <div className="code-block-placeholder-footer">
            {inputs}
          </div>
          {downloadButton(props, childrenWithPlaceholdersReplaced)}
        </div>
      </>
    );
  } else if (props.download) {
    let modifiedProps = {...props};
    modifiedProps['className'] = modifiedProps['className'] + ' with-footer';

    return (
      <>
        <CodeBlock {...modifiedProps} >{children}</CodeBlock>
        <div className="code-block-footer">
          {downloadButton(props, children)}
        </div>
      </>
    );
  } else {
    return (
      <>
        <CodeBlock {...props} >{children}</CodeBlock>
      </>
    );
  }
}

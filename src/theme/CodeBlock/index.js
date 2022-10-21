import React, {useState} from 'react';
import CodeBlock from '@theme-original/CodeBlock';

/*
Inspired by Google Cloud Documentation's 'Format Placeholders' (https://developers.google.com/style/placeholders)
this implements a Markdown compatible way of defining and using placeholders in code blocks, that uses can edit

Using the placeholders can be done as follows:

```json title=my-json.json placeholders my_placeholder=Text that will be shown in the label, another_one=This is cool!
{
    "someKey": "Using placeholders is simple, just fill out a text in the input, and it'll be shown here: $my_placeholder",
    "someOtherKey": "Did I say this already? Any user value is shown here = $another_one"
}
```

Important remark, the `placeholders` keyword in the metastring, is used as a separator. Everything after the `placeholders`
keyword is considered to be a placeholder. The key of a placeholder can be used in the code block string and the value
is used as the label shown next to the input field.
*/

function stateManagement(placeholders) {
  let initialState = Object.fromEntries(Object.entries(placeholders).map(([key, prop]) => [key, prop.inputPlaceholder]));
  let [placeholderValues, setPlaceholderValues] = useState(initialState);

  const handleChange = (placeholderKey, event) => {
    let copiedPlaceholderValues = {...placeholderValues};
    delete copiedPlaceholderValues[placeholderKey];
    copiedPlaceholderValues[placeholderKey] = event.target.value;
    setPlaceholderValues({...copiedPlaceholderValues});
  };
  return {placeholderValues, handleChange};
}

function placeholderInputs(children, placeholders, placeholderValues, handleChange) {
  let inputs = [];
  Object.entries(placeholders).forEach(([key, prop]) => {
    const inputValue = placeholderValues[key] === prop.inputPlaceholder ? "" : placeholderValues[key];
    const placeholderMatch = '$' + key;

    if (children.includes(placeholderMatch)) {
      inputs.push(<div>
        <label>{placeholders[key].description}: </label>
        <input type="text" id={key} placeholder={prop.inputPlaceholder} value={inputValue}
               onChange={(e) => handleChange(key, e)}></input>
      </div>);
    }
  });
  return inputs;
}

function replacePlaceholders(children, placeholderValues, placeholders) {
  let childrenWithPlaceholdersReplaced = children;

  // Replace the placeholders
  Object.entries(placeholderValues).forEach(([key, stateValue]) => {
    const placeholderMatch = '$' + key;

    if (childrenWithPlaceholdersReplaced.includes(placeholderMatch)) {
      const replacementValue = stateValue.length === 0 ? placeholders[key].inputPlaceholder : stateValue;

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
  return cleanedProps;
}

export default function CodeBlockWrapper({children: children, ...props}) {
  if (props.placeholders) {
    let [metaStringBeforePlaceholderMarker, metaStringAfterPlaceholderMarker] = props.metastring.split(/\s?placeholders\s/);

    let placeholders = Object.fromEntries(metaStringAfterPlaceholderMarker
      .replaceAll(/,\s?/g, ",")
      .split(",")
      .map(pair => pair.split('='))
      .map(([key, value]) => [key, {
        description: value,
        inputPlaceholder: `<${value.toUpperCase().replaceAll(/\s/g, "_")}>`
      }])
    );

    let cleanedProps = removePlaceholdersFromProps(props, metaStringAfterPlaceholderMarker, metaStringBeforePlaceholderMarker);
    let {placeholderValues, handleChange} = stateManagement(placeholders);
    let inputs = placeholderInputs(children, placeholders, placeholderValues, handleChange);
    let childrenWithPlaceholdersReplaced = replacePlaceholders(children, placeholderValues, placeholders);

    return (
      <>
        {inputs}
        <CodeBlock {...cleanedProps} >
          {childrenWithPlaceholdersReplaced}
        </CodeBlock>
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

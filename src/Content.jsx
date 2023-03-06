import React, { useRef } from 'react';

const Content = ({ value, onChange}) => {
  const refElement = useRef(null);
  let lastValue = value;
  const emitChange = () => {
    const div = refElement.current;
    const value = div.innerText;
    console.log ("HERE is change", value)
    if (onChange && value !== lastValue) {
      onChange({
        target: {
          value,
        },
      });
    }
    lastValue = value;
  };

  return (
    <div
      ref={refElement}
      onInput={emitChange}
      onBlur={emitChange}
      contentEditable
      spellCheck="false"
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
};

export default Content;
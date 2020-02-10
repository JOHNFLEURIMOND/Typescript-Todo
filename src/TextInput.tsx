import React from 'react';

export interface TextProps {
  name: string;
  placeholder: string;
  title: string;
  error?: string;
  required?: boolean;
  value: string;
  onChange: () => void;
  onBlur: () => void;
}
function TextInput(props: TextProps): React.ReactElement {
  const {
    title,
    required,
    name,
    error,
    onBlur,
    onChange,
    value,
    placeholder,
  } = props;
  return (
    <div className="txt m-b300">
      <label htmlFor="FeedbackForm" className="txt-l txt-l--sm">
        {title}
        {required && (
          <span className="t--req" aria-hidden="true">
            {' '}
            Required
          </span>
        )}
      </label>
      <input
        name={name}
        className={error ? 'txt-f txt-f--sm txt-f--err' : 'txt-f txt-f--sm'}
        placeholder={placeholder}
        value={value}
        id="FeedbackForm"
        type="text"
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="t--subinfo t--err m-t100">{error}</div>}
    </div>
  );
}

export default TextInput;

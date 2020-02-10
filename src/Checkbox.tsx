import React from 'react';

export interface CheckboxProps {
  name: string;
  value: string;
  onChange: () => void;
  required?: boolean;
  error?: string;
  onBlur: () => void;
  title: string;
  checked: boolean;
}
function Checkbox(props: CheckboxProps): React.ReactElement {
  const {
    name,
    value,
    required,
    onChange,
    onBlur,
    checked,
    error,
    title,
  } = props;
  return (
    <label htmlFor="Checkbox" className="cb">
      <input
        name={name}
        value={value}
        required={required}
        type="checkbox"
        className="cb-f"
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      {error && <div className="t--subinfo t--err m-t100">{error}</div>}
      <span className="cb-l">{title}</span>
    </label>
  );
}

export default Checkbox;

import InputMask from "react-input-mask";
import PropTypes from "prop-types";

export function InputCep({ name, value, onChange, ...rest }) {
  return (
    <InputMaskGlobal
      name={name}
      mask="99.999-999"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export function InputCpf({ name, value, onChange, ...rest }) {
  return (
    <InputMaskGlobal
      name={name}
      mask="999.999.999-99"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export function InputCnpj({ name, value, onChange, ...rest }) {
  return (
    <InputMaskGlobal
      name={name}
      mask="99.999.999/9999-99"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export function InputDate({ name, value, onChange, ...rest }) {
  return (
    <InputMaskGlobal
      name={name}
      mask="99/99/9999"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export function InputTime({ name, value, onChange, ...rest }) {
  return (
    <InputMaskGlobal
      name={name}
      mask="99:99"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

function InputMaskGlobal({ name, value, onChange, mask, ...rest }) {
  return (
    <InputMask
      name={name}
      mask={mask}
      value={value}
      onChange={onChange}
      className={"form-control"}
      {...rest}
    />
  );
}

InputMaskGlobal.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

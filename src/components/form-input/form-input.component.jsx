import { FormInputLabel, Group, Input } from './form-input.styles.jsx';

export const FormInput = ({ label, inputOptions }) => {
  return (
    <Group >
      <Input {...inputOptions} />
      {label && <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>}
    </Group>
  )
}
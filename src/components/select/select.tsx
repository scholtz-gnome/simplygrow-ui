import { FC, useState } from 'react';
import Dropdown from './dropdown';
import Options from './options';
import SelectInput from './select-input';
import styles from './select.module.css';

interface SelectProps {
  id: string;
  onSelect: (selectedData: string) => void;
  options: string[];
  placeholder?: string;
  label?: string;
}

const Select: FC<SelectProps> = ({ id, onSelect, options, placeholder, label }) => {
  const [focused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const selectOption = (selectedValue: string) => {
    setFocused(!focused);
    setSelectedValue(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className={styles.select}>
      {label && (
        <label htmlFor={id} className={styles.selectLabel}>
          {label}
        </label>
      )}

      <div className={styles.selectInput}>
        <Dropdown focused={focused} isValid={isValidInput}>
          <SelectInput
            id={id}
            value={selectedValue}
            focused={focused}
            onChange={() => {}}
            setFocused={setFocused}
            placeholder={placeholder || 'Select'}
            setIsValidInput={setIsValidInput}
          />

          {focused && <Options options={options} selectedValue={selectedValue} selectOption={selectOption} />}
        </Dropdown>
      </div>
    </div>
  );
};

export default Select;

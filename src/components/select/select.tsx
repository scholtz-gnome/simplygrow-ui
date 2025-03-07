import { ChangeEvent, FC, useState } from 'react';
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

  console.log('Select()', focused);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
    const value = e.target.value;
    console.log(value);
  };

  const selectOption = (data: string) => {
    setFocused(!focused);
    setSelectedValue(data);
    onSelect(data);
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
            onChange={handleInputChange}
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

import { ChangeEvent, Dispatch, FC, SetStateAction, useRef } from 'react';
import { useClickOutsideElement, useKeydown } from '../../hooks';
import SelectChevronIcon from './select-chevron.icon';
import styles from './select-input.module.css';

interface SelectInputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setFocused: Dispatch<SetStateAction<boolean>>;
  focused: boolean;
  placeholder: string;
}

const SelectInput: FC<SelectInputProps> = ({ id, value, onChange, setFocused, focused, placeholder }) => {
  const focusInput = () => {
    setFocused(true);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useClickOutsideElement(inputRef, () => setFocused(false));
  useKeydown(['Escape', 'Tab'], () => setFocused(false));

  return (
    <div>
      <input
        ref={inputRef}
        className={`${styles.selectInput} ${focused ? styles.focusedInput : ''}`}
        id={id}
        name={id}
        type={'text'}
        value={value}
        onChange={onChange}
        onFocus={focusInput}
        placeholder={placeholder}
      />

      <SelectChevronIcon focused={focused} setFocused={setFocused} />
    </div>
  );
};

export default SelectInput;

import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
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
  setIsValidInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectInput: FC<SelectInputProps> = ({
  id,
  value,
  onChange,
  setFocused,
  focused,
  placeholder,
  setIsValidInput,
}) => {
  const focusInput = () => {
    setFocused(true);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const isValid = inputRef.current?.validity.valid;
    setIsValidInput(isValid || false);
  }, [focused]);

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
        required={false}
        onChange={onChange}
        onFocus={focusInput}
        placeholder={placeholder}
      />

      <SelectChevronIcon focused={focused} setFocused={setFocused} />
    </div>
  );
};

export default SelectInput;

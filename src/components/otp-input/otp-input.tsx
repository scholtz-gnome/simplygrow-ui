import { Dispatch, FC, SetStateAction } from 'react';
import OtpInput from 'react-otp-input';
import styles from './otp-input.module.css';

interface OTPInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const OTPInput: FC<OTPInputProps> = ({ value, setValue }) => {
  return (
    <OtpInput
      value={value}
      onChange={setValue}
      numInputs={6}
      containerStyle={styles.container}
      inputStyle={styles.input}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default OTPInput;

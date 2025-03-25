import ActionButton from '@/action-button';
import styles from './actions-toolbar.module.css';

type ActionButton = {
  label: any;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

type ActionsToolbarProps = {
  buttons: ActionButton[];
};

const ActionsToolbar = (props: ActionsToolbarProps) => {
  return (
    <div className={styles.container}>
      {props.buttons.map((button, index) => {
        const { label, ...buttonProps } = button;
        return (
          <ActionButton {...buttonProps} key={`actionButton_${index}`}>
            {label}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default ActionsToolbar;

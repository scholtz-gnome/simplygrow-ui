import { ReactNode } from 'react';
import styles from './page-navigation.module.css';

export type PageNavigationProps = {
  logo?: string | ReactNode;
  navOptions: any[];
  tail?: React.ReactNode;
};

export default function PageNavigation(props: PageNavigationProps) {
  let logo = null;
  if (props.logo) {
    if (typeof props.logo === 'string') {
      logo = (
        <div>
          <img src={props.logo} alt="logo" height={40} />
        </div>
      );
    } else {
      logo = <div style={{ height: 40, overflow: 'hidden' }}>{props.logo}</div>;
    }
  }

  let navOptions = null;
  if (props.navOptions && props.navOptions.length) {
    const options = props.navOptions.map((navOption, index) => (
      <li key={`navOption_${index}`} className={styles.navOption}>
        {navOption}
      </li>
    ));
    navOptions = <ul className={styles.navOptions}>{options}</ul>;
  }

  let tail = null;
  if (props.tail) {
    tail = <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{props.tail}</div>;
  }

  return (
    <nav className={styles.container}>
      {logo}
      {navOptions}
      {tail}
      {/* <FlexContainer align="center" gap="md" className={styles.userDetails}>
          <b>DEMO</b>
          <div>ADMIN</div>
        </FlexContainer>
        <Avatar className={styles.avatar}>NB</Avatar> */}
    </nav>
  );
}

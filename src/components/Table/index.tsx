import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface TableProps {
  title?: ReactNode;
  suffix?: ReactNode;
  badgeColor?: string;
}

const Table: FC<TableProps> = ({ title, suffix, badgeColor }) => {
  return (
    <div className={styles.table}>
      <div className={styles.title}>{title}</div>
      <div className={styles.suffix}>{suffix}</div>
      {badgeColor && <div className={styles.badge} style={{ color: badgeColor }} />}
    </div>
  );
};

export default Table;

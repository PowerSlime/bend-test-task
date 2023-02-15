import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface ZoneProps {
  title: string;
  className?: string;
}

const Zone: FC<PropsWithChildren<ZoneProps>> = ({ className, title, children }) => {
  const classes = clsx(styles.container, className);

  return (
    <div className={classes}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Zone;

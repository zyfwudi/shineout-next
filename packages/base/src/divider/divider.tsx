import classNames from 'classnames';
import React from 'react';
import { DividerProps } from './divider.type';

const Divider = (props: DividerProps) => {
  const { jssStyle, mode = 'horizontal', children, orientation = 'center' } = props;
  const styles = jssStyle?.divider?.();
  const showText = mode === 'horizontal' && children;
  const mc = classNames(
    styles?.wrapper,
    mode === 'vertical' && styles?.vertical,
    mode === 'horizontal' && styles?.horizontal,
    showText && styles?.withText,
    showText && orientation === 'center' && styles?.withTextCenter,
    showText && orientation === 'left' && styles?.withTextLeft,
    showText && orientation === 'right' && styles?.withTextRight,
  );
  return (
    <div className={mc}>
      {showText ? <span className={styles?.innerText}>{children}</span> : null}
    </div>
  );
};

export default Divider;
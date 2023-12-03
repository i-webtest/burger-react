import s from './Container.module.css';
import cn from 'classnames';

export const Container = ({ className, children }) => <div className={cn(s.container, className)}>{children}</div>;

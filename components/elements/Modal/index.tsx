import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ClickAwayListener from '@/components/elements/ClickAwayListener';
import s from './Modal.module.scss';

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const portalRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  if (!(mounted && portalRef.current && open)) return null;

  return ReactDOM.createPortal(
    <ClickAwayListener onClickAway={onClose}>
      <div className={s.modal}>{children}</div>
    </ClickAwayListener>,
    portalRef.current
  );
};

export default Modal;

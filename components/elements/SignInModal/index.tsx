import React from 'react';
import Modal from '@/components/elements/Modal';
import PasswordInput from '@/components/elements/PasswordInput';
import Checkbox from '@/components/elements/CheckBox';
import s from './SignInModal.module.scss';
import clsx from 'clsx';
import PageTitle from '@/components/elements/PageTitle';
import Divider from '@/components/elements/Divider';
import Button from '@/components/elements/Button';
import Image from 'next/image';
import facebookIcon from '@/public/images/facebookIcon.svg';
import googleIcon from '@/public/images/googleIcon.svg';
import closeIcon from '@/public/images/closeIcon.svg';

type SignInModalProps = {
  open?: boolean;
  onClose?: () => void;
};

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={s.modalContainer}>
        <Image className={s.closeIcon} src={closeIcon} alt={'close modal'} onClick={onClose} />
        <PageTitle title={'Вхід'} />
        <label className={s.label}>Email *</label>
        <input type="text" className={clsx('input')} />
        <PasswordInput label={'Пароль'} />
        <div className={s.forgetPasswordText}>Забули пароль?</div>
        <Checkbox label={'Запам’ятати мене'} />
        <div className={s.orDividerContainer}>
          <Divider />
          <div>або</div>
          <Divider />
        </div>
        <div className={s.buttonsContainer}>
          <Button>
            <Image src={facebookIcon} alt={'Facebook icon'} />
            Facebook
          </Button>
          <Button>
            <Image src={googleIcon} alt={'Google icon'} />
            Google
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;

import { useEffect, useRef, useState } from 'react';
import ReactPortal from '../ReactPortal';
import { ModalBody, Overlay } from './styles';

interface QRCodeModalProps {
  isOpen: boolean,
  urlCode: string,
  handleCloseModal: () => void,
}

export function Modal({ isOpen, urlCode, handleCloseModal }: QRCodeModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      e.key === 'Escape' && closeModal();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);


  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
    const overlayRefElement = overlayRef.current;
    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if(!isOpen && overlayRef.current) {
      overlayRefElement!.addEventListener('animationend',handleAnimationEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  function closeModal() {
    handleCloseModal();
  }

  if (!urlCode) {
    return null;
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay onClick={closeModal} ref={overlayRef} isLeaving={!isOpen}>
        <ModalBody isLeaving={!isOpen}>
          <img src={urlCode} alt='qrcode' />

          <small>
            Seu QRCode foi gerado!
            <br />
            Copie-o ou salve em seu dispositivo.
          </small>
        </ModalBody>
      </Overlay>
    </ReactPortal>
  );
}

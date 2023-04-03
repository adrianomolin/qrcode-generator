import { Container, Content, Header } from './styles';

import { Footer } from '../Footer';
import { Form } from '../Form';
import { useState } from 'react';
import { Modal } from '../Modal';

export function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  async function generateCode(url: string) {
    setQrCodeUrl(url);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        urlCode={qrCodeUrl}
        handleCloseModal={handleCloseModal}
      />
      <Header>
        QRCODE Generator
      </Header>

      <Content>
        <Form
          onGenerateCode={generateCode}
        />
      </Content>
      <Footer />
    </Container>
  );
}

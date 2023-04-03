import { FormEvent, useState } from 'react';

import { useErrors } from '../../hooks/useErrors';

import { Container } from './styles';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { InputGroup } from '../InputGroup';

interface FormProps {
  onGenerateCode: (url: string) => void;
}

export function Form({ onGenerateCode }: FormProps) {
  const [urlCode, setUrlCode] = useState('');
  const [size, setSize] = useState('12');
  const [isTransparent, setIsTransparent] = useState('transparent');
  const [archiveType, setArchiveType] = useState('png');

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleChangeUrlCode(event: FormEvent<HTMLInputElement>) {
    if (!event.currentTarget.value) {
      setError({
        fieldName: 'urlCode',
        message: 'Insira um valor de URL.'
      });
    } else {
      removeError('urlCode');
    }

    setUrlCode(event.currentTarget.value);
  }

  function handleChangeSize(event: FormEvent<HTMLInputElement>) {
    setSize(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!urlCode) {
      setError({
        fieldName: 'urlCode',
        message: 'Insira um valor de URL.'
      });
      return;
    }

    if (errors.length < 1) {
      onGenerateCode(`https://qrtag.net/api/qr${isTransparent && '_transparent'}_${size ? size : '12'}.${archiveType}?url=${urlCode}`);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className='input-form'>
        <InputGroup
          title='URL *'
          error={getErrorMessageByFieldName('urlCode')}
        >
          <Input
            value={urlCode}
            type='text'
            placeholder="Digite uma URL..."
            onChange={handleChangeUrlCode}
            error={getErrorMessageByFieldName('urlCode')}
          />
        </InputGroup>

        <div className='size-type'>
          <InputGroup title='Tamanho'>
            <Input
              value={size}
              placeholder="Tamanho"
              onChange={handleChangeSize}
            />
          </InputGroup>
          <InputGroup title='Tipo'>
            <Select>
              <option
                onChange={() => setArchiveType('png')}
              >
                PNG
              </option>
              <option
                onChange={() => setArchiveType('svg')}
              >
                SVG
              </option>
            </Select>
          </InputGroup>
        </div>

        <InputGroup title='Transparente'>
          <Select>
            <option
              onChange={() => setIsTransparent('transparent')}
            >
              Transparente
            </option>
            <option
              onChange={() => setIsTransparent('')}
            >
              Com fundo
            </option>
          </Select>
        </InputGroup>
      </div>

      <Button
        type='submit'
      >
          GERAR QRCODE
      </Button>
    </Container>
  );
}

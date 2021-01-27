import { useMemo, useState, useEffect } from 'react';
import { Input, Modal } from 'antd';
import styled from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';

import CategoriesTable from './CategoriesTable';

function App() {
  const { data: response, error } = useSWR(
    'https://api.publicapis.org/categories',
    axios,
    {
      revalidateOnFocus: false,
    }
  );

  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (error) {
      setIsOpenErrorModal(true);
    }
  }, [error]);

  const handleOnChangeInput = (e) => {
    setSearchText(e?.target?.value);
  };

  const handleCloseModal = () => {
    setIsOpenErrorModal(false);
  };

  const dataSource = useMemo(() => {
    return response?.data
      ?.filter((c) => c?.toLowerCase()?.includes(searchText?.toLowerCase()))
      ?.map((c, index) => ({ id: index, cat: c }));
  }, [response, searchText]);

  return (
    <Wrapper>
      <InputContainer>
        <Input onChange={handleOnChangeInput} value={searchText} />
      </InputContainer>
      <CategoriesTable
        rowKey="id"
        dataSource={dataSource}
        isLoading={!response && !error}
      />
      <Modal
        visible={isOpenErrorModal}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
      >
        API server is down please try again later !
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 200px;
`;

const InputContainer = styled.div`
  margin-bottom: 25px;

  input {
    width: 400px;
  }
`;

export default App;

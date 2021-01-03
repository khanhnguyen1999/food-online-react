import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);

  const onChangePage = (newPage: number) => setPage(newPage);

  const onChangePerPage = (newPerPage: number) => {
    setPage(1);
    setPerPage(newPerPage);    
  }

  return {
    page,
    perPage,
    onChangePage,
    onChangePerPage
  }
};

export default usePagination;
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function PageNotFound() {
  return (
    <PageDefault>
      <h1>404</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default PageNotFound;
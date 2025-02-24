export const columns = [
  
    {
      title: 'Titulo',
      dataIndex: 'titulo',
      sorter: (a, b) => a.titulo.length - b.titulo.length
    },
    {
      title: 'Autor',
      dataIndex: 'autor',
      sorter: (a, b) => a.autor.length - b.autor.length
     
    },
    {
      title: 'Colección',
      dataIndex: 'coleccion',
     
    },
    {
      title: 'Editorial',
      dataIndex: 'editorial',
     
    },
  ];
import styled from 'styled-components';
import { Button, Form } from 'antd';
import { Card } from 'antd';
import { Table } from 'antd';

export const StyledTitle = styled.h1`
font-family: Vegur, 'PT Sans', Verdana, sans-serif;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #2e7d32, #66bb6a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
export const StyleCard = styled(Card)`
  padding: 1%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
   &:hover {
    transform: scale(1.10);
  }

  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-input,
  .ant-btn {
    border-radius: 8px;
  }

  .ant-btn-primary {
    background: #1976d2;
    border-color: #1976d2;
    transition: background 0.3s ease;

    &:hover {
      background: #1565c0;
      border-color: #1565c0;
    }
  }
`
export const StyleButton = styled(Button)`
background-color: #ff5733 !important;
border-color: #ff5733 !important;
font-weight: bold;
font-size: 18px;
color:white;
padding:20px;

`
export const StyleSearch = styled.div``


export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
`
export const ContainerColumnMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const ContainerColumn = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  align-items: center;
`
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
   height: auto;
  text-align: center;
  align-items: center; 
  justify-content: space-around; 
`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Para distribuir las flechas y los cards */
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 80px;

    & > * {
        flex: 1 1 calc(33.333% - 20px); /* 3 columnas con espacio entre ellas */
        max-width: calc(33.333% - 20px);
        height: 100%;
    }

    @media (max-width: 1024px) {
        & > * {
            flex: 1 1 calc(50% - 20px); /* 2 columnas en tablets */
            max-width: calc(50% - 20px);
        }
    }

    @media (max-width: 768px) {
        & > * {
            flex: 1 1 100%; /* 1 columna en móviles */
            max-width: 100%;
        }
    }
`;
export const ContainerRegister = styled.div`

 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background:rgb(208, 212, 212) ;
  padding: 40px;
  height: 100vh
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  
 
`
export const StyledForm = styled(Form)`
  padding: 5%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
   &:hover {
    transform: scale(1.02);
  }

  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-input,
  .ant-btn {
    border-radius: 8px;
  }

  .ant-btn-primary {
    background: #1976d2;
    border-color: #1976d2;
    transition: background 0.3s ease;

    &:hover {
      background: #1565c0;
      border-color: #1565c0;
    }
  }
`;

export const StyledTable = styled(Table)`
   width: 100%;
  padding: 5%;

  .ant-table {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .ant-table-thead > tr > th {
    background: linear-gradient(135deg,    #2e7d32, #66bb6a);
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 12px;
    border: none;
  }
 

  .ant-table-tbody > tr > td {
    text-align: center;
    padding: 12px;
    transition: background 0.3s ease-in-out;
  }

  .ant-table-tbody > tr:hover {
    background:rgb(195, 196, 197);
  }

  .ant-pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .ant-pagination-item-active {
    background-color: #66bb6a !important;
    border-color:  #66bb6a !important;
   
  }
    .ant-pagination-item-active a {
    color: white !important;
  }
`;
export const StyledCardTotal = styled.div`

  width: 300px;
  height: 300px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
 
`;

export const StyleMangaCount = styled.div`

    font-size: 40px;
    font-weight: bold;
    color: #333;
    padding-top: 30%;
`

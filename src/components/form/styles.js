import styled from "styled-components";



export const Tabela = styled.div`
 display: table;
    width: 58%;
    border-collapse: collapse;
    border: 3px solid purple;
    margin-left: 189px;
    margin-top: 32px;
`;

export const Container = styled.div`
  background: #ffafff;
    width: 88%;
    margin-left: -2px;
    padding-left: 155px;
    height: 60px;
    padding-top: 28px;
    box-shadow: 4px 3px #260d3a73;
`;


export const TabelaLinha = styled.div`
    display: table-row;
    
`;

export const Cabecalho = styled.div`
    background-color: #FAF9F6;
    display: table-header-group;
    font-weight: bold;
    border: 1px solid #404040;
`;

export const TabelaConteudo = styled.div`
    border: 1px solid  purple;
    display: table-cell;
    padding: 3px 10px;

`;

export const TituloTabela = styled.div`
    border: 1px solid #404040;
    display: table-cell;
    padding: 3px 10px;
`;

export const divTableFoot = styled.div`
    background-color: #EEE;
    display: table-footer-group;
    font-weight: bold;

`;

export const TabelaResultado = styled.div`
    display: table-row-group;
`;

export const Button = styled.button`
    background-color: purple;
    border: none;
    color: #f4f4f4;
    padding: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 4px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
    background-color: #530974;
    color: #f4f4f4;
  }

`;

export const Input = styled.input`
    width: 17%;
    padding: 5px 10px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid purple;
    border-radius: 8px;
    box-sizing: border-box;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: red;
  }
`;



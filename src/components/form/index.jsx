import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './styles';


export default function Form() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [ano, setAno] = useState("");
    const [livros, setLivros] = useState([
        { titulo: '', autor: '', ano: '' }
    ]);

    const schema = yup.object({
        titulo: yup.string().required('Título obrigatório!').max(100),
        autor: yup.string().required('Nome do autor obrigatório!').max(50),
        ano: yup.number('').required('Ano obrigatório!'),
    })

    const formik = useFormik({
        initialValues: {
            titulo,
            autor,
            ano
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
            setLivros(livro => [...livro, values])
        },
    })

    return (
        <S.Container>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label> Nome do Livro:</label>
                    <S.Input type="text" name="titulo" value={formik.values.titulo} onChange={formik.handleChange} placeholder={formik.errors.titulo} />
                    <label> Nome do autor(a): </label>
                    <S.Input type="text" name="autor" value={formik.values.autor} onChange={formik.handleChange} placeholder={formik.errors.autor} />
                    <label> Ano de lançamento: </label>
                    <S.Input type="text" name="ano" value={formik.values.ano} onChange={formik.handleChange} placeholder={formik.errors.ano} />
                    <S.Button type="submit">Enviar</S.Button>
                </form>
                <br></br>
            </div>
            <S.Tabela>
                <S.Cabecalho>
                    <S.TabelaLinha>
                        <S.TituloTabela>Nome do Livro</S.TituloTabela>
                        <S.TituloTabela>Nome do autor(a)</S.TituloTabela>
                        <S.TituloTabela>Ano de lançamento</S.TituloTabela>
                    </S.TabelaLinha>
                </S.Cabecalho>
                <S.TabelaResultado>
                    {livros.map((livro, i) => {
                        return (
                            <S.TabelaLinha key={i}>
                                <S.TabelaConteudo>{livro.titulo}</S.TabelaConteudo>
                                <S.TabelaConteudo>{livro.autor}</S.TabelaConteudo>
                                <S.TabelaConteudo>{livro.ano}</S.TabelaConteudo>
                            </S.TabelaLinha>
                        );
                    })}
                </S.TabelaResultado>
            </S.Tabela>
        </S.Container>
    );
}

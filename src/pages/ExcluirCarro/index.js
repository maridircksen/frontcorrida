import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiFileMinus, FiCornerDownLeft} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirCarro(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadCarro = useCallback(async () =>{
        try{
            const response = await api.get('Carro/' + id);
            setNome(response.data.nome);
        }catch(error){
            alert ("Erro ao buscar o carro! + erro");
            navigate('/carros');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadCarro();
            setLoad(true);
        }
    });

    async function deleteCarro(){
        try{
            await api.delete(`Carro/Delete/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de carro!" + error);
        }

        navigate('/carros');
    }

    return(
        <div className="novo-carro-container">
            <div className="content">
                <section className="form">
                    <a><FiFileMinus size={32} color ="#17202a" />Excluir Carro </a>
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#669AE1" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deleteCarro}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
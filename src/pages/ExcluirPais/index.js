import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {TbWorldMinus} from 'react-icons/tb';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirPais(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPais = useCallback(async () =>{
        try{
            const response = await api.get('Pais/' + id);
            setNome(response.data.nome);
        }catch(error){
            alert ("Erro ao buscar o País! + erro");
            navigate('/pais');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadPais();
            setLoad(true);
        }
    });

    async function deletePais(){
        try{
            await api.delete(`Pais/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de País!" + error);
        }

        navigate('/paises');
    }

    return(
        <div className="novo-pais-container">
            <div className="content">
                <section className="form">
                    <a><TbWorldMinus size={32} color ="#17202a" />Excluir País </a>
                    <Link className="back-link" to="/paises">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="orange" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deletePais}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {GoCopilot} from 'react-icons/go';
import {FiCornerDownLeft} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirPiloto(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPiloto = useCallback(async () =>{
        try{
            const response = await api.get('Piloto/' + id);
            setNome(response.data.nome);
        }catch(error){
            alert ("Erro ao buscar piloto! + erro");
            navigate('/pilotos');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadPiloto();
            setLoad(true);
        }
    });

    async function deletePiloto(){
        try{
            await api.delete(`Piloto/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de piloto!" + error);
        }

        navigate('/pilotos');
    }

    return(
        <div className="novo-piloto-container">
            <div className="content">
                <section className="form">
                    <a><GoCopilot size={32} color ="#17202a" />{" "}Excluir Piloto </a>
                    <Link className="back-link" to="/pilotos">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="green" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deletePiloto}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
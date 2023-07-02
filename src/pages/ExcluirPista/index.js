import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {FaRoad} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirPista(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPista = useCallback(async () =>{
        try{
            const response = await api.get('Pista/' + id);
            setNome(response.data.nome);
        }catch(error){
            alert ("Erro ao buscar pista! + erro");
            navigate('/pistas');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadPista();
            setLoad(true);
        }
    });

    async function deletePista(){
        try{
            await api.delete(`Pista/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de Pista!" + error);
        }

        navigate('/pistas');
    }

    return(
        <div className="nova-pista-container">
            <div className="content">
                <section className="form">
                    <a><FaRoad size={32} color ="#17202a" />{" "}Excluir Pista </a>
                    <Link className="back-link" to="/pistas">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#62C2E4" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deletePista}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
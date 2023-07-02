import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {FaRoad} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarPista(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const [dificuldade, setDificuldade] = useState ('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPista = useCallback(async () =>{
        try{
            const response = await api.get('Pista/' + id);
            setNome(response.data.nome);
            setDificuldade(response.data.dificuldade);
            
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

    async function putPista(){
        const data = {
            id,
            nome,
            dificuldade
        }

        try{
            await api.put('Pista', data);
        }catch(error){
            alert("Erro ao alterar cadastro de Pista!" + error);
        }

        navigate('/pistas');
    }

    return(
        <div className="nova-pista-container">
            <div className="content">
                <section className="form">
                <   a><FaRoad size={32} color ="#17202a" />{" "}Alterar Pista </a>
                    <Link className="back-link" to="/pistas">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#62C2E4" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putPista}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome da Pista" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Dificuldade" value={dificuldade} onChange={e => setDificuldade(e.target.value)}/>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}




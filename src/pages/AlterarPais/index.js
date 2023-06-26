import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {TbWorldCheck} from 'react-icons/tb';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarPais(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPais = useCallback(async () =>{
        try{
            const response = await api.get('Pais/' + id);
            setNome(response.data.nome);
            
        }catch(error){
            alert ("Erro ao buscar o país! + erro");
            navigate('/pais');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadPais();
            setLoad(true);
        }
    });

    async function putPais(){
        const data = {
            id,
            nome,
        }

        try{
            await api.put('Paises', data);
        }catch(error){
            alert("Erro ao alterar cadastro de países!" + error);
        }

        navigate('/paises');
    }

    return(
        <div className="novo-pais-container">
            <div className="content">
                <section className="form">
                <   a><TbWorldCheck size={32} color ="#17202a" />Alterar País </a>
                    <Link className="back-link" to="/paises">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="orange" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putPais}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome do País" value={nome} onChange={e => setNome(e.target.value)}/>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}




import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {BsBuildingExclamation} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarCidade(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadCidade = useCallback(async () =>{
        try{
            const response = await api.get('Cidade/' + id);
            setNome(response.data.nome);

            
        }catch(error){
            alert ("Erro ao buscar a cidade! + erro");
            navigate('/cidades');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadCidade();
            setLoad(true);
        }
    });

    async function putCidade(){
        const data = {
            id,
            nome,
        }

        try{
            await api.put('Cidade', data);
        }catch(error){
            alert("Erro ao alterar cadastro de cidade!" + error);
        }

        navigate('/cidades');
    }

    return(
        <div className="nova-cidade-container">
            <div className="content">
                <section className="form">
                <   a><BsBuildingExclamation size={32} color ="#17202a" />Alterar Cidade </a>
                    <Link className="back-link" to="/cidades">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="red" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putCidade}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome da Cidade" value={nome} onChange={e => setNome(e.target.value)}/>
                    
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}




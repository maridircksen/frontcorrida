import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiFileMinus, FiCornerDownLeft} from 'react-icons/fi';
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
                    <FiFileMinus size={105} color="#17202a"/>
                    <h1>Excluir Carro</h1> 
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={105} color="#17202a"/>
                    </Link>
                </section>
                <div className="formExibir">
                    <h1>{id} | {nome}</h1>
                    <button className="button" onClick={deleteCarro}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
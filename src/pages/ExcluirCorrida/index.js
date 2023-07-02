import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {GiCheckeredFlag} from 'react-icons/gi';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirCorrida(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadCorrida = useCallback(async () =>{
        try{
            const response = await api.get('Corrida/' + id);
            setNome(response.data.nome);
        }catch(error){
            alert ("Erro ao buscar corrida! + erro");
            navigate('/corridas');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadCorrida();
            setLoad(true);
        }
    });

    async function deleteCorrida(){
        try{
            await api.delete(`Corrida/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de corrida!" + error);
        }

        navigate('/corridas');
    }

    return(
        <div className="nova-corrida-container">
            <div className="content">
                <section className="form">
                    <a><GiCheckeredFlag size={32} color ="#17202a" />{" "}Excluir Corrida </a>
                    <Link className="back-link" to="/cidades">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="purple" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deleteCorrida}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
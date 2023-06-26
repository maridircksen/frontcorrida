import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {BsBuildingDash} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";

export default function ExcluirCidade(){
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

    async function deleteCidade(){
        try{
            await api.delete(`Cidade/Delete/${id}`);
        }catch(error){
            alert("Erro ao excluir cadastro de cidade!" + error);
        }

        navigate('/cidades');
    }

    return(
        <div className="nova-cidade-container">
            <div className="content">
                <section className="form">
                    <a><BsBuildingDash size={32} color ="#17202a" />{" "}Excluir Cidade </a>
                    <Link className="back-link" to="/cidades">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="red" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <div className="formExibir">
                    <a>{id} | {nome}</a>
                    <button className="button" onClick={deleteCidade}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
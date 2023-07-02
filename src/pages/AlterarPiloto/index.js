import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {GoCopilot} from 'react-icons/go';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarPiloto(){
    const {id} = useParams();
    const {nomeCarro, setNomeCarro} = useState('');
    const {corCarro, setCorCarro} = useState('');
    const {pneus, setPneusCarro} = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [equipe, setEquipe] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadPiloto = useCallback(async () =>{
        try{
            const response = await api.get('Carro/' + id);
            setNome(response.data.nome);
            setIdade(response.data.idade);
            setEquipe(response.data.equipe);
            setNomeCarro (response.data.carro.nome);
            setCorCarro (response.data.carro.cor);
            setPneusCarro (response.data.carro.pneus);
            
          //  setPneus(response.data.pneu);
            
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

    async function putPiloto(){
        const data = {
            id,
            nome,
            idade,
            equipe,
            nomeCarro

        }

        try{
            await api.put('Piloto', data);
        }catch(error){
            alert("Erro ao alterar cadastro de piloto!" + error);
        }

        navigate('/pilotos');
    }

    return(
        <div className="novo-piloto-container">
            <div className="content">
                <section className="form">
                <   a><GoCopilot size={32} color ="#17202a" />Alterar Piloto </a>
                    <Link className="back-link" to="/pilotos">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="green" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putPiloto}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome do Piloto" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Idade do Piloto"  value={idade} onChange={e => setIdade(e.target.value)}/>
                        <input placeholder="Equipe do Piloto" value={equipe} onChange={e => setEquipe(e.target.value)}></input>
                        <input placeholder="Nome do Carro" value={nomeCarro} onChange={e => setNomeCarro(e.target.value)}></input>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}




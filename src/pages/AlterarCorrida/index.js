import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {GiCheckeredFlag} from 'react-icons/gi';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarCorrida(){
    const {id} = useParams();
    const [nomePiloto, setPiloto] = useState('');
    const [nomePista, setPista] = useState('');
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [qtdVoltas, setQtdVoltas] = useState ('');
    const [chuva, setChuva] = useState ('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadCorrida = useCallback(async () =>{
        try{
            const response = await api.get('Corrida/' + id);
            setNome(response.data.nome);
            setData (response.data.dataCorrida);
            setQtdVoltas (response.data.quantidadeVoltas);
            setChuva (response.data.chanceChuva);
            setPiloto (response.data.piloto.nome);
            setPista(response.data.pista.nome);
            
        }catch(error){
            alert ("Erro ao buscar a Corrida! + erro");
            navigate('/corridas');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadCorrida();
            setLoad(true);
        }
    });

    async function putCorrida(){
        const data = {
            id,
            nomePiloto,
            nomePista,
            nome,
            data,
            qtdVoltas,
            chuva
        }

        try{
            await api.put('Corrida', data);
        }catch(error){
            alert("Erro ao alterar cadastro de Corrida!" + error);
        }

        navigate('/corridas');
    }

    return(
        <div className="nova-corrida-container">
            <div className="content">
                <section className="form">
                <   a><GiCheckeredFlag size={32} color ="#17202a" />{" "}Alterar Corrida </a>
                    <Link className="back-link" to="/corridas">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="purple" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putCorrida}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome Piloto" value={nomePiloto} readOnly/>
                        <input placeholder="Nome Pista" value={nomePista} readOnly/>
                        <input placeholder="Nome da Corrida" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="date" placeholder="Data da Corrida" value={data} onChange={e => setData(e.target.value)}/>
                        <input placeholder="Quantidade de Voltas" value={qtdVoltas} onChange={e => setQtdVoltas(e.target.value)}/>
                        <input placeholder="Chance de Chuva" value={chuva} onChange={e => setChuva(e.target.value)}/>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}




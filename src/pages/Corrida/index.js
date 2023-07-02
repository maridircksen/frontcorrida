import React, {useState, useEffect} from 'react';
import './styles.css';
//import logoCarro from '../../assets/car-solid.png';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {GiCheckeredFlag} from 'react-icons/gi';
import {AiFillHome} from 'react-icons/ai';

export default function Corridas(){
    const [corridas, setCorridas] = useState([]);
    
    useEffect(() => {
        if (corridas.length <=0){
         api.get('Corrida')
           .then(
            response => {setCorridas(response.data)}
            )
        }
    });

    return(
        <div className='corrida-container'>
            <header>
                <GiCheckeredFlag size={60} color="#17202a" alt ='Corridas' />
                <Link id='inicio' to="/">
                    <AiFillHome size={30} color="purple" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                </Link>
                <Link className="button" to="nova">Nova Corrida</Link>

            </header>
            <h1>Consulta de Corridas</h1>
            <table className='table table-bordered' border="1">
                <tbody>
                    <tr>
                        <th colSpan="5">Corrida</th>
                        <th colSpan="2">Piloto</th>
                        <th colSpan="2">Pista</th>
                        <th > </th>
                    </tr>  
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Quantidade de Voltas</th>
                        <th>Chance de Chuva</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th className='thOpcoes'>Opções</th>
                    </tr>
                    {corridas.map(corrida => (
                       <tr key={corrida.id}>
                        <td>{corrida.id}</td>
                        <td>{corrida.nome}</td>
                        <td>{corrida.dataCorrida}</td>
                        <td>{corrida.quantidadeVoltas}</td>
                        <td>{corrida.chanceChuva}</td>
                        <td>{corrida.pilotoId}</td>
                        <td>{corrida.piloto}</td>
                        <td>{corrida.pistaId}</td>
                        <td>{corrida.pista}</td>
                        <td className='tdOpcoes'>
                            <Link to={`alterar/${corrida.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${corrida.id}`}>
                                <button type='button'>
                                    <FiTrash size={25} color='#17202a' />
                                </button>
                            </Link>
                        </td>
                       </tr> 
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {FaRoad} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

export default function Pistas(){
    const [pistas, setPistas] = useState([]);
    
    useEffect(() => {
        if (pistas.length <=0){
         api.get('Pista')
           .then(
            response => {setPistas(response.data)}
            )
        }
    });

    return(
        <div className='pista-container'>
            <header>
                <FaRoad size={60} color="#17202a" alt ='Pistas' />
                <Link id='inicio' to="/">
                    <AiFillHome size={30} color="#62C2E4" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                </Link>
                <Link className="button" to="nova">Nova Pista</Link>

            </header>
            <h1>Consulta de Pistas</h1>
            <table className='table table-bordered' border="1">
                <tbody>
                    <tr>
                        <th colSpan="3">Pista</th>
                        <th colSpan="2">Cidade</th>
                        <th colSpan="2">País</th>                       
                        <th >Opções</th>
                    </tr>  
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Dificuldade</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th className='thOpcoes'>Alterar/Excluir</th>
                    </tr>
                    {pistas.map(pista => (
                       <tr key={pista.id}>
                        <td>{pista.id}</td>
                        <td>{pista.nome}</td>
                        <td>{pista.dificuldade}</td>
                        <td>{pista.cidadeId}</td>
                        <td>{pista.cidade}</td>
                        <td>{pista.paisId}</td>
                        <td>{pista.pais}</td>
                        <td className='tdOpcoes'>
                            <Link to={`alterar/${pista.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${pista.id}`}>
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
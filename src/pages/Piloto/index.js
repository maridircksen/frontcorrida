import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {GoCopilot} from 'react-icons/go';
import {AiFillHome} from 'react-icons/ai';

export default function Pilotos(){
    const [pilotos, setPilotos] = useState([]);
    
    useEffect(() => {
        if (pilotos.length <=0){
         api.get('Piloto')
           .then(
            response => {setPilotos(response.data)}
            )
        }
    });

    return(
        <div className='piloto-container'>
            <header>
                <GoCopilot size={60} color="#17202a" alt ='Pilotos' />
                <Link id='inicio' to="/">
                    <AiFillHome size={30} color="green" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                </Link>
                <Link className="button" to="novo">Novo Piloto</Link>

            </header>
            <h1>Consulta de Pilotos</h1>
            <table className='table table-bordered' border="1">
                <tbody>
                    <tr>
                        <th colSpan="4">Piloto</th>
                        <th colSpan="4">Carro</th>
                        <th > </th>
                    </tr>  
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Equipe</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cor</th>
                        <th>Pneus</th>
                        <th className='thOpcoes'>Opções</th>
                    </tr>
                    {pilotos.map(piloto => (
                       <tr key={piloto.id}>
                        <td>{piloto.id}</td>
                        <td>{piloto.nome}</td>
                        <td>{piloto.idade}</td>
                        <td>{piloto.equipe}</td>
                        <td>{piloto.carro.id}</td>
                        <td>{piloto.carro.nome}</td>
                        <td>{piloto.carro.cor}</td>
                        <td>{piloto.carro.pneus}</td>
                        <td className='tdOpcoes'>
                            <Link to={`alterar/${piloto.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${piloto.id}`}>
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
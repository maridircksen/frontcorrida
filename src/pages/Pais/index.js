import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {GiWorld} from 'react-icons/gi';

export default function Paises(){
    const [paises, setPaises] = useState([]);
    
    useEffect(() => {
        if (paises.length <=0){
         api.get('Pais')
           .then(
            response => {setPaises(response.data)}
            )
        }
    });

    return(
        <div className='pais-container'>
            <header>
                <GiWorld size={60} color="#17202a" alt ='Pais' />
                <Link className='button' to="novo">Novo País</Link>
            </header>
            <h1>Consultar Países</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th className='thOpcoes'>Opções</th>
                    </tr>
                    {paises.map(pais => (
                    <tr key={pais.id}>
                        <td>{pais.id}</td>
                        <td>{pais.nome}</td>
                        <td className='tdOpcoes'>
                            <Link to={`alterar/${pais.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${pais.id}`}>
                                <button type='button'>
                                    <FiTrash size={25} color='#17202a' />
                                </button>
                            </Link>
                        </td>
                    </tr>
                    ))
                    }
                </thead>
            </table>
            
        </div>
    )
}
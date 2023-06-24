import React, {useState, useEffect} from 'react';
import './styles.css';
import logoCarro from '../../assets/car-solid.png';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';

export default function Carros(){
    const [carros, setCarros] = useState([]);
    
    useEffect(() => {
        if (carros.length <=0){
         api.get('Carro')
           .then(
            response => {setCarros(response.data)}
            )
        }
    });

    return(
        <div className='carro-container'>
            <header>
                <img src ={logoCarro} alt ='Carros' />
                <Link className='button' to="novo">Novo Carro</Link>
            </header>
            <h1>Relação de Carros</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cor</th>
                        <th>Pneus</th>
                        <th className='thOpcoes'>Opções</th>
                    </tr>
                    {carros.map(carro => (
                    <tr key={carro.id}>
                        <td>{carro.id}</td>
                        <td>{carro.nome}</td>
                        <td>{carro.cor}</td>
                        <td>{carro.pneus}</td>
                        <td className='tdOpcoes'>
                            <Link to={`alterar/${carro.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${carro.id}`}>
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
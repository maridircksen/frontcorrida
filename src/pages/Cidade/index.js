import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {FaCity} from 'react-icons/fa';
import Paises from '../Pais';

export default function Cidades(){
    const [cidades, setCidade] = useState([]);
    
    useEffect(() => {
        if (cidades.length <=0){
         api.get('Cidade')
           .then(
            response => {setCidade(response.data)}
            )
        }
    });

    return (
        <div className='cidade-container'>
          <header>
            <FaCity size={60} color="#17202a" alt='Cidades' />
            <Link className='button' to="novacidade">Nova Cidade</Link>
          </header>
          <h1>Consulta de Cidades</h1>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>País</th>
                <th className='thOpcoes'>Opções</th>
              </tr>
            </thead>
            <tbody>
              {cidades.map(cidade => (
                <tr key={cidade.id}>
                  <td>{cidade.id}</td>
                  <td>{cidade.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
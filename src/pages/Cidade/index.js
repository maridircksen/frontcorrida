import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import {FiTrash, FiEdit} from 'react-icons/fi';
import {FaCity} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

//import Paises from '../Pais';

export default function Cidades(){
    const [cidades, setCidades] = useState([]);
    
    useEffect(() => {
      if (cidades.length <= 0) {
        console.log("Entrou");
        api.get('Cidade')
          .then(response => {
            setCidades(response.data);
          })
          .catch(error => {
            console.log(error);
          });

      }
    }, []);

   

    return (
        <div className='cidade-container'>
          <header>
            <FaCity size={60} color="#17202a" alt='Cidades' />
            <Link id='inicio' to="/">
                    <AiFillHome size={30} color="red" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                </Link>
            <Link className='button' to="nova">Nova Cidade</Link>
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
                    <td>{cidade.pais.nome}</td>              
                  <td className='tdOpcoes'>
                            <Link to={`alterar/${cidade.id}`}>
                                <button type='button'>
                                    <FiEdit size={25} color='#17202a' />
                                </button>
                            </Link>
                            {" "}
                            <Link to={`excluir/${cidade.id}`}>
                                <button type='button'>
                                    <FiTrash size={25} color='#17202a' />
                                </button>
                            </Link>
                        </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
    }
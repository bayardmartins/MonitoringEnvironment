import React, {useState} from 'react';

import api from '../services/api';
import './styles.css';

export default function Page() {
    const [deName, setName] = useState('');
    const [deEmail, setEmail] = useState('');
    const [deTargetAddress, setAddress] = useState('');
    const [idClient, setIdClient] = useState('');
    const [deClient, getClient] = useState('');
    const [idGetClient, setDeClient] = useState('');
    const [deAddress, getAddress] = useState('');
    const [idGetAddress, setDeAddress] = useState('');

    async function addClient(e) {
        e.preventDefault();
        const data = {
            deName,
            deEmail,
        };
        try{
            console.log(data);
            await api.post('client', data)
        }catch (err) {
            alert('Erro ao cadastrar cliente. Tente novamente.')
        }
    }
    async function addTargetAddress(e) {
        e.preventDefault();
        const data = {
            deTargetAddress,
            idClient,
        };
        try{
            console.log(data);
            await api.post('/address/', data)
        }catch (err) {
            alert('Erro ao cadastrar endereço. Tente novamente.')
        }
    }
    async function getClientData(e) {
        e.preventDefault();

        const data = {
            idGetClient,
        };

        try{
            console.log(data);
            await api.get('client', data, {
            })
        }catch (err) {
            alert('Erro ao cadastrar cliente. Tente novamente.')
        }
    }
    async function getAddressData(e) {
        e.preventDefault();
        const data = {
            idGetAddress,
        };
        try{
            console.log(data);
            await api.get('address', data, {
            })
        }catch (err) {
            alert('Erro ao cadastrar cliente. Tente novamente.')
        }
    }

    return (
        <div className="page-container">
                <section>
                    <h1>Menu</h1>
                </section>
            <div className="content">
                <form onSubmit={addClient}>
                    <input placeholder="Nome do Cliente" 
                    value={deName}
                    onChange={e => setName(e.target.value)}
                    />

                    <input placeholder="E-mail" 
                    value={deEmail}
                    onChange={e => setEmail(e.target.value)}
                    />
                   
                    <button className="button" type="submit">Cadastrar Cliente</button>
                </form>

                <form onSubmit={addTargetAddress}>
                    <input placeholder="url" 
                    value={deTargetAddress}
                    onChange={e => setAddress(e.target.value)}
                    />

                    <input placeholder="ID cliente" 
                    value={idClient}
                    onChange={e => setIdClient(e.target.value)}
                    />
                   
                    <button className="button" type="submit">Cadastrar Endereço</button>
                </form>

                <form onSubmit={getClientData}>
                    <input placeholder="ID Client" 
                    value={idGetClient}
                    onChange={e => getClient(e.target.value)}
                    />

                    <input 
                    value={deClient}
                    onChange={e => setDeClient(e.target.value)}
                    />
                   
                    <button className="button" type="submit">Consultar Cliente</button>
                </form>
 
                <form onSubmit={getAddressData}>
                    <input placeholder="ID Endereço" 
                    value={idGetAddress}
                    onChange={e => getAddress(e.target.value)}
                    />

                    <input 
                    value={deAddress}
                    onChange={e => setDeAddress(e.target.value)}
                    />
                   
                    <button className="button" type="submit">Consultar Endereço</button>
                </form>
            </div>
        </div>
    );
}
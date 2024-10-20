import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import ButtonCEP from '../Button/ButtonCEP';
import './Forms.css';

function Forms() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fotoURL, setFotoURL] = useState('');
    const [resposta, setResposta] = useState('');
    const [segundaResposta, setSegundaResposta] = useState('');
    const [dados, setDados] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDados = {
            nome,
            telefone,
            fotoURL,
            resposta,
            segundaResposta
        };
        const updatedDados = [...dados, newDados].sort((a, b) => a.nome.localeCompare(b.nome));
        setDados(updatedDados);
        setNome('');
        setTelefone('');
        setFotoURL('');
        setResposta('');
        setSegundaResposta('');
    };

    return (
        <div className="form-page">
            <div className="form-container">
                <div className="form-box">
                    <h2>Formulário de Inscrição</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <input
                                type="tel"
                                id="telefone"
                                placeholder="Digite seu telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="fotoURL">URL da Foto:</label>
                            <input
                                type="url"
                                id="fotoURL"
                                placeholder="Digite a URL da foto"
                                value={fotoURL}
                                onChange={(e) => setFotoURL(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Egresso/Convidado</label>
                            <div className="radio-group">
                                <div>
                                    <input
                                        type="radio"
                                        id="sim"
                                        name="resposta"
                                        value="sim"
                                        checked={resposta === 'sim'}
                                        onChange={(e) => setResposta(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="sim">Sim</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="nao"
                                        name="resposta"
                                        value="não"
                                        checked={resposta === 'não'}
                                        onChange={(e) => setResposta(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="nao">Não</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Pago</label>
                            <div className="radio-group">
                                <div>
                                    <input
                                        type="radio"
                                        id="sim2"
                                        name="segundaResposta"
                                        value="sim"
                                        checked={segundaResposta === 'sim'}
                                        onChange={(e) => setSegundaResposta(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="sim2">Sim</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="nao2"
                                        name="segundaResposta"
                                        value="não"
                                        checked={segundaResposta === 'não'}
                                        onChange={(e) => setSegundaResposta(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="nao2">Não</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Enviar</button>
                        <div>
                            <ButtonCEP type="button" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="cards-container">
                {dados.map((dado, index) => (
                    <Cards key={index} dados={dado} />
                ))}
            </div>
        </div>
    );
}

export default Forms;

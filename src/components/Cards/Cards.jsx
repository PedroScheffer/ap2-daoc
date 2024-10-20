import React from 'react';
import './Cards.css';

function Cards({ dados }) {
    if (!dados) {
        return null;
    }

    const statusPagamento = dados.segundaResposta === 'sim' ? 'Confirmado' : 'Não confirmado';
    const statusEgresso = dados.resposta === 'sim' ? 'Egresso/Convidado' : 'Estudante';

    return (
        <div className="card-row">
            <div className="card">
                <div className="card-title">Dados do Ingresso</div>
                <div className="card-text"><strong>Nome:</strong> {dados.nome}</div>
                <div className="card-text"><strong>Telefone:</strong> {dados.telefone}</div>
                <div className="card-text">
                    <div className="card-image">
                        <img src={dados.fotoURL} alt="Imagem do formulário" />
                    </div>
                </div>
                <div className="card-text"><strong>Status:</strong> {statusEgresso}</div>
                <div className="card-text"><strong>Pago:</strong> {statusPagamento}</div>
            </div>
        </div>
    );
}

export default Cards;

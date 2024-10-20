import React, { useState } from 'react'

function ButtonCEP() {
    const [locationData, setLocationData] = useState(null);
    const [erro, setErro] = useState('');

    const handleClick = async () => {
        if (locationData) {
            setLocationData(null);
            setErro('');
        } else {
            try {
                const response = await fetch('https://viacep.com.br/ws/95560000/json/');
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                const data = await response.json();
                setLocationData({
                    cep: data.cep,
                    cidade: data.localidade,
                    bairro: 'Parque do Balonismo',
                    rua: 'Rua Universitária',
                    horario: '19:00 - 23:59'
                });
                setErro('');
            } catch (error) {
                setErro('Erro ao buscar o CEP.');
                setLocationData(null);
            }
        }
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                {locationData ? 'Ocultar Localização' : 'Mostrar Localização'}
            </button>
            {locationData && (
                <>
                    <p>CEP: {locationData.cep}</p>
                    <p>Cidade: {locationData.cidade}</p>
                    <p>Bairro: {locationData.bairro}</p>
                    <p>Rua: {locationData.rua}</p>
                    <p>Horário: {locationData.horario}</p>
                </>
            )}
            {erro && <p>{erro}</p>}
        </div>
    );
}

export default ButtonCEP;
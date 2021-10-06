import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import React from 'react';
import '../styles/home.scss';


export function Home() {
    
    const historico = useHistory();

    function handleIrPaisNome() {
        historico.push('/paisnome');
    }

    return (
        <body>

            <div className='divenglobamensagem'>
                <div className='divmensageminicial'>Bem vindo a este projeto</div>
            </div>

            <div className='divenglobamsg'>

                <h1>Descubra seu país baseado no seu nome!</h1><br/>

            </div>
            <div className='divenglobabotao' >
                <button className='botaopaisnome' onClick={handleIrPaisNome}>Clique aqui</button>
            </div>

        </body>

    );
}
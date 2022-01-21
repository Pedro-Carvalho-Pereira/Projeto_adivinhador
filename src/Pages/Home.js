import { useHistory } from 'react-router-dom';
import React from 'react';
import '../styles/home.scss';
import { Headmenu } from '../components/Headmenu';


export function Home() {

    const historico = useHistory();

    function handleIrPaisNome() {
        historico.push('/paisnome');
    }

    return (
        <>
            <div style={{height:'100vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',   backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")` }}>
                <Headmenu />
                <body >

                    <div className='divenglobamensagem' style={{ marginTop: '310px' }}>
                        <div className='divmensageminicial'>Bem vindo a este projeto</div>
                    </div>

                    <div className='divenglobamsg'>

                        <h1>Descubra seu país baseado no seu nome!</h1><br />

                    </div>
                    <div className='divenglobabotao' >
                        <button className='botaopaisnome' onClick={handleIrPaisNome}>Clique aqui</button>
                    </div>

                </body>
            </div>
        </>
    );
}
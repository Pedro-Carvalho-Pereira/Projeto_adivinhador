import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Paisnome.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Headmenu } from '../components/Headmenu';


const baseURL = "https://api.nationalize.io/?name=";
const baseURLG = "https://api.genderize.io?name=";

export function Paisnome() {
    const historico = useHistory();

    const [post, setPost] = React.useState(null);
    const [postG, setPostG] = React.useState(null);
    const [nomeInput, setNomeInput] = React.useState('');


    function handleIrHome() {
        historico.push('/');
    }

    function mudarInput(valor) {
        setNomeInput(valor);
    }

    function pegarPais(valor) {
        axios.get(baseURL + valor).then((response) => {
            setPost(response.data);
        });

    }

    function pegarGenero(valor) {
        axios.get(baseURLG + valor).then((response) => {
            console.log('entrou');
            setPostG(response.data);
            console.log(response.data.gender);
        });

    }

    function handleProbabilidade() {
        var soma = postG.probability * post.country[0].probability * 100;
        return soma.toFixed(2);
    }

    function tratarsexo() {
        if (postG.gender === 'male') {
            return 'masculino';
        }
        else return 'feminino';
    }

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = 'Seleciona uma opção';

    return (
        <>
            <div style={{ height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")` }}>
                <Headmenu />

                <div className='englobaresult margin120'>
                    <h1>Entre com seu nome para que seus dados sejam adivinhados.</h1>
                </div>

                <div className='englobaresult'>

                    <input className='mudarinput' onChange={(e) => mudarInput(e.target.value)} value={nomeInput} placeholder="Digite seu nome"></input>

                </div>

                <div className='englobaresult englobabotao'>
                    <button className='mudarbotao' onClick={() => { pegarPais(nomeInput); pegarGenero(nomeInput) }}>Enviar</button>

                </div>

                <div className='englobaresult' style={{ marginTop: '40px' }}>
                    <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                </div>

                <div className='englobaresult'>
                    {post && postG && postG.gender !== undefined && post.country[0] !== undefined ? <h1 className='nacionalidaderesultado'>Você provavelmente pertence a: {post.country[0].country_id} e ao sexo: {tratarsexo()} </h1> : ''}
                    {post && postG && postG.gender !== undefined && post.country[0] !== undefined ? <h1 className='probabilidaderesultado'> Essa informação tem {handleProbabilidade()} % de chance de estar certa.</h1> : ''}
                </div>
            </div>

        </>
    );
}
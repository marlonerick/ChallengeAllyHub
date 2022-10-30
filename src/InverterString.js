//imports usado
import { useState } from 'react';
//Estilo do desafios 1 - Inverter String.
import './style/ReversoString.css';

//function de renderização.
function ReversoString() {
    //useState para guarda os dados da STRING
    const [palavra, setPalavra] = useState('');
    //function para inverter a STRING
    const inverterString = (str) => {
        var o = '';// Variavel para salvar a palavra invertida.
        for (var i = str.length - 1; i >= 0; i--) {//For para percorrer a STRING
            o += str[i];//Salva a palavra na varivel O.
        }
        return o;//Retorna a STRING invertida.
    }
    //HTML renderizado pelo return.
    return (
        <>
            <div>
                {/* Palavra Original renderida do input que esta pegando alterações */}
                <p>Palavra : {palavra}</p>
                {/* Palavra Invertida sendo renderizada */}
                <p>String Invertida : {inverterString(palavra)}</p>
                {/* input para entrada de dados e alterações com onchange */}
                <input onChange={(e) => setPalavra(e.target.value)} placeholder='Palavra'></input>
            </div>
        </>
    );
}
//export da function.
export default ReversoString;

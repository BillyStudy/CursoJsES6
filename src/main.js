//import * as funcoes from './js/functions';

// const MinhaPromisse = () => new Promise((resolve, reject) => 
//     setTimeout(() => resolve('OK'), 2000)
// );


// async function executaPromisse() {
//     const response = await MinhaPromisse();
//     console.log(response);
// }

// executaPromisse();


import axios from 'axios';


 class Api {
    static async getUserInfo (username){
        try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
        }
        catch (err){
            console.warn('Usuário não encontrado');
        } 

        
    }

}


document.getElementById('btnPesquisar').onclick = function PesquisaUser() {
    var username = document.querySelector('input[id=nomeUser]').value;
    console.log(Api.getUserInfo(username));
}
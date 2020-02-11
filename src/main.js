//import * as funcoes from './js/functions';

const MinhaPromisse = () => new Promise((resolve, reject) => 
    setTimeout(() => resolve('OK'), 2000)
);


async function executaPromisse() {
    const response = await MinhaPromisse();
    console.log(response);
}

executaPromisse();
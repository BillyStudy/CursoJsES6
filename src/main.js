import Api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.pesqContainer = document.getElementById('containerSrc');
        this.listContainer = document.getElementById('listUsers');
        this.pesqArea = document.getElementById('nomeUser');
        this.registerHandlers(); 
    }

    registerHandlers(){
        this.pesqContainer.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading= true){
         if (loading ===true) {
            let mostraLoading = document.createElement('span');
            mostraLoading.appendChild(document.createTextNode('Carregando'));
            mostraLoading.setAttribute('id', 'load');
             this.pesqContainer.appendChild(mostraLoading);
         }else{
             document.getElementById('load').remove();
         }   
    }

    async addRepository(event){

        event.preventDefault();

        const userName = this.pesqArea.value;

        if (userName.length === 0) {
            return;
        }

        this.setLoading();
        try{             
            const response = await Api.get(`/users/${userName}`);

            //console.log(response);
            const {name, bio, html_url, avatar_url} = response.data;

            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url
            });

            this.pesqArea.innerHTML = '';

            this.render();
            //console.log(this.repositories);
        }
        catch(err){
            alert('Repositório não encontrado!')
            this.pesqArea.value = '';
        }

        this.setLoading(false);
    }

    render(){
        
        this.listContainer.innerHTML = '';
        this.pesqArea.value = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let nameEl = document.createElement('h4');
            nameEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Visitar'));

            let listItemRepo = document.createElement('li');
            listItemRepo.appendChild(imgEl);
            listItemRepo.appendChild(nameEl);
            listItemRepo.appendChild(descEl);
            listItemRepo.appendChild(linkEl);

            this.listContainer.appendChild(listItemRepo);


        });
    }
}

new App();



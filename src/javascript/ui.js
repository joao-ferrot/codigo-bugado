import api from "./api.js";

const ui={

    async renderizarPets(){
        const listPets=document.getElementById('pets-list');

        try {
            const pets=await api.obterPets();
            pets.forEach(ui.adicionarElements)
            
            
            


        }catch(error){
            alert("falha da renderixaçao ")
            throw error

        }
    },

    adicionarElements(pets){

        //adapta a pora do codigo PARA TUA ESTRUTURA NO HTML
        const listPets=document.getElementById('pets-list');


        
        const li=document.createElement('ul');
        li.setAttribute('data-id',pets.id);

        const img=document.createElement('img');
        img.src=pets.imagem;
        img.alt=`imagem do animal: ${pets.nome}`

        const h2=document.createElement('h2');
        h2.innerText=pets.nome;

    /*     const preco=document.createElement('span')
        preco.innertext=pets.preço */

        const div=document.createElement('div')
        div.classList.add('info')
        

        const p=document.createElement('p');
        p.innerText=pets.raca;

        const span=document.createElement('span');
        span.innerText=pets.descricao;

        const button=document.createElement('button');
        button.innerText="quero adotar";
         
        

        const buttonEdit=document.createElement('button');
        buttonEdit.classList.add('botao-editar');
        buttonEdit.onclick=()=>ui.formEdit(pets.id);

        const iconEdit=document.createElement('img')
        iconEdit.src="./src/assets/img/src/edit.png"
        iconEdit.alt=""
        buttonEdit.appendChild(iconEdit);

        const buttonDelete=document.createElement('button');
        buttonDelete.classList.add("botao-deleta")
        buttonExcluir.onclick= async()=>{

            try{
                await api.deletePets(pets.id);
                ui.renderizarPets();

            }catch(error){
                alert("erro ao deletar e renderizar.");
                throw error

            }
        }

        const iconDelete=document.createElement('img')
        iconEdit.src="./src/assets/img/src/deleta.png"
        iconEdit.alt=""
        buttonDelete.appendChild(iconDelete);


        div.appendChild(img,h2,p,span,button);



     li.appendChild(buttonEdit,buttonDelete);
        li.append(div);
       

        listPets.appendChild(li);
        






    },


    //chamando formulario para controle da atualizaçao 
    async formEdit(petsId){
        const pets= await api.buscarId();
    document.getElementById("pet-id").value=pets.id;    
    document.getElementById("nome").value=pets.nome;    
    document.getElementById("especie").value=pets.raca;    
    document.getElementById("descriaçao").value=pets.descricao;    
    document.getElementById("img").value=pets.imagem;    }
}

export default ui
// outra forma de cria os elementos

 /* (item => {

                listPets.innerHTML +=`
                 <img src="${item.imagem}" alt="${item.nome}">
                <div class="descriçao">
                    <ul id="pets-list">
                        
                    <h2>${item.nome}</h2>

                    
                    <p>
                        ${item.raca}
                        </p>
                        
                        
                        <br>
                        <span>
                        ${item.descriçao}
                        </span>
                    

                    <button>
                        Quero adotar
                    </button>

                    </ul>

                
                `
                
            }); */

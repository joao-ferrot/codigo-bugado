
import api from "./api.js";
import ui from "./ui.js";


document.addEventListener('DOMContentLoaded',()=>{

    ui.renderizarPets();
    const form=document.getElementById('pet-form');
    form.addEventListener("submit", manipulaForm)

});

async function manipulaForm(event){
    event.preventDefault();


    const id=document.getElementById('pet-id').value;
    const nome=document.getElementById('nome').value;
    const especie=document.getElementById('especie').value;
    const descricao=document.getElementById('descricao').value;
    const img=document.getElementById('img').value;    

    try{
        if(id){
            await api.atualizaPets({id,nome,especie,descricao,img});
        }else{
            await api.atualizaPets({nome,especie,descricao,img});

        }
        await api.adicionarPets({nome,especie,descricao,img});
        ui.renderizarPets();
        

       
    
        
    }catch(error){
        throw error
    }
}
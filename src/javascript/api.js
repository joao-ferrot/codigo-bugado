const api={
    async obterPets(){
        /* metodo que vai lidar com  o tratamento de erros */
        try {
            
            const res=await fetch('http://localhost:3000/pets')
            return await res.json();
        } catch (error) {
            alert("erro ao fazer requisição")
            throw error
            
        }
    },

    async adicionarPets(pets){
        try{
            const response=await fetch('http://localhost:3000/pets',{
            method:"POST",
        
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(pets)
            
        
        });
        return await response.json();

            

        }catch(error){
            alert("error ao cadastrar");
            throw error;

        }
    },
// metodo put :1-pega o id,2-
    async buscarId(id){
        try{
            const response =await fetch(`http://localhost:3000/pets`);
            return await response.json();

        }catch(error){
        alert="falha ao buscar identificador"
        }

    },

    async atualizaPets(pets){
        try{
            const response=await fetch(`http://localhost:3000/pets/${pets.id}`,{
               method:"PUT",
               headers:{
                "Content-Type":"application/json"
               },
               body:JSON.stringify(pets) 
            });

        }catch{
            alert("erro ao efetuar atualizaçao do pet.")
            throw error

        }

    },

    async deletePets(id){
        try{
            const response =await fetch(`http://localhost:3000/pets/${id}`,{
                method:"DELETE"

            })
            return await response.json();

        }catch(error){
            throw error

        }
    }
}

export default api;
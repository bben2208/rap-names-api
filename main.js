document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rappers-api-production.up.railway.app/api/${rapperName}`);


        console.log(response)
        // document.querySelector('h2').innerText = response.birthName
    }catch(error){
        console.log(error)
    }
}



const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="6ZOyAxNqPdwu79ncROhgzg==Y4HddOXhXzJzRDno";
const options={
    method:"GET",
    headers:{
        'X-Api-Key':apiKey,
    }
};
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){

    try {
        jokeEl.innerText="updating.....";
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        const response=await fetch(apiUrl,options);
        const data= await response.json()
        // console.log(data[0].joke);
        jokeEl.innerText=data[0].joke;
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
    } catch (error) {
        jokeEl.innerText="An error happened, try again later"
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
    }

 

}
btnEl.addEventListener("click",getJoke)
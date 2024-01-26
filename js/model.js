export default class Model {
    constructor(){

    }
    request = async (inputValue) => {
        try {
            const call = await fetch(`https://api.unsplash.com/search/photos?client_id=plVuqz3zdIhmqw92i78i0857snArfDAMPmBMtkW_cLA&query=${inputValue}&per_page=12&orientation=portrait`);
            const answer = await call.json();

            if (call.ok){
                let result = answer.results;
                return result;
            }
            else{
                throw new Error(call.status);
            }
        }
        catch(error){
            alert('Произошла ошибка')
        }
    }; 
}
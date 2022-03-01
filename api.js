const loadSearchValue = () => {
 const searchInput = document.getElementById('search-value');
 const searchValue = searchInput.value;
 const errorHnadle = document.getElementById('error');
  
 if(searchValue == ""){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value =""

 }
  
else if((searchValue >= 0) || (searchValue < 0)){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value =""
 }
 else{
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
    
    searchInput.value =""
 }
   

}
const displayPhones = (phones) =>{
    console.log(phones)

}
 
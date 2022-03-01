const mainDiv = document.getElementById('main-div');

const loadSearchValue = () => {
 const searchInput = document.getElementById('search-value');
 const searchValue = searchInput.value;
 const errorHnadle = document.getElementById('error');
  
 if(searchValue == ""){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value ="";
    mainDiv.innerHTML ="";

 }
  
else if((searchValue >= 0) || (searchValue < 0)){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value ="";
    mainDiv.innerHTML ="";
 }
 else{
     mainDiv.innerHTML = "";
     
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
    
    searchInput.value ="";
    errorHnadle.innerHTML = "";
 }
   

}
const displayPhones = (phones) =>{
   
    for(const phone of phones){
        // console.log(phone.image);
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        // div.classList.add("col-sm-12");
        div.classList.add("mb-5");

         div.innerHTML = `
         <div class="card" style="width: 18rem;">
        <img class="w-50" src="${phone.image}"   class="card-img-top" alt="...">
         <div class="card-body">
         <h4 class="card-title">${phone.phone_name}</h2>
         <h6 class="card-title">${phone.brand}</h5>
          
         <button onclick="displayDetails('${phone.slug}')"class="btn btn-primary">Details</button>
   </div>
</div>
         `
mainDiv.appendChild(div);
       }

}
const displayDetails = (uniqe)=>{
    console.log(uniqe)


    const url = ` https://openapi.programming-hero.com/api/phones?search=phone` ;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const allPhone = data.data;
        const singlePhone = allPhone.find(phone => phone.slug === uniqe );
         const div = document.createElement('div');
         mainDiv.innerHTML = "";
         div.innerHTML = `
         <div class="card" style="width: 18rem;">
         <img class="w-50" src="${singlePhone.image}"   class="card-img-top" alt="...">
          <div class="card-body">
          <h4 class="card-title">${singlePhone.phone_name}</h2>
          <h6 class="card-title">${singlePhone.brand}</h5>
          </div>
          </div>
         
         `
         mainDiv.appendChild(div);
     
    })
}

 
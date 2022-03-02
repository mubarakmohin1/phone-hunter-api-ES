const mainDiv = document.getElementById('main-div');
const moreDetailsShow = document.getElementById('details-div');
const othersDefined = document.getElementsByClassName('others');
const loadSearchValue = () => {
 const searchInput = document.getElementById('search-value');
 const searchValue = searchInput.value;
 const errorHnadle = document.getElementById('error');
  
 if(searchValue == ""){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value ="";
    mainDiv.innerHTML ="";
    moreDetailsShow.innerHTML = "";

 }
  
else if((searchValue >= 0) || (searchValue < 0)){
    errorHnadle.innerText = 'please give me a correct value!!'
    searchInput.value ="";
    mainDiv.innerHTML ="";
    moreDetailsShow.innerHTML = "";
 }
 else{
     mainDiv.innerHTML = "";
     moreDetailsShow.innerHTML = "";
     
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
   
    
    searchInput.value ="";
    errorHnadle.innerHTML = "";
    
 }
   

}
const displayPhones = (phones) =>{
  
   
   const firstPhones = phones.slice(0,20);
    for(const phone of firstPhones){
        
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("col-sm-12");
        
        div.classList.add("mb-5");

         div.innerHTML = `
      <div class="card" style="width: 18rem;">
         <img class="w-50" src="${phone.image}"         class="card-img-top" alt="...">
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
const displayDetails = (slug)=>{
    

    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data =>  moreDetails(data.data))
    
}

    const moreDetails = (uniqePhone) =>{
    console.log(uniqePhone.others);
    const div = document.createElement('div');
    

        moreDetailsShow.innerHTML = ""
         
        div.innerHTML = `
          <img src="${uniqePhone?.image}" alt="">
          <h2><b>Name:</b>${uniqePhone?.name}</h2>
          <h6 class = "release"><b>ReleaseDate:</b> ${uniqePhone?.releaseDate}</h6>
          <h6><b>Chipset:</b>${uniqePhone?.mainFeatures?.chipSet}</h6>
          <h6><b>Displaysize:</b>${uniqePhone?.mainFeatures?.displaySize}</h6>
          <h6><b>Memory:</b>${uniqePhone?.mainFeatures?.memory}</h6>
          <h6><b>Sensor:</b>${uniqePhone?.mainFeatures?.sensors.join()}</h6>
          <h6><b>Bluetooth:</b>${uniqePhone?.others?.Bluetooth}</h6>
          <h6 class ="others"><b>GPS:</b>${uniqePhone?.others?.GPS}</h6>
          <h6><b>NFC:</b>${uniqePhone?.others?.NFC}</h6>
          <h6><b>Radio:</b>${uniqePhone?.others?.Radio}</h6>
          <h6><b>USB:</b>${uniqePhone?.others?.USB}</h6>
          <h6><b>WLAN:</b>${uniqePhone?.others?.WLAN}</h6>
          
         ` 
                 
          moreDetailsShow.appendChild(div);
        }
       
    

 
     
    


 
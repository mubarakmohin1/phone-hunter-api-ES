const loadSearchValue = () => {
 const searchValue = document.getElementById('search-value').value;
  const url = " https://openapi.programming-hero.com/api/phones?";
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhone(data.phones));
}
const displayPhone = (phones)=> {
console.log(phones)

}

 
 
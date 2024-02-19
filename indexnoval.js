let tital = document.getElementById('tital');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'creat';
let temp ;
clearData()
//console.log(tital,price,taxes,ads,discount,total,count.categoty,submit)
function getTotal(){
    if(price.value !='' ){
        let result =(+price.value + +taxes.value + +ads.value )- +discount.value;
        total.innerHTML = result;
        total.style.background = "#040";
    }else{
        total.innerHTML = ' ';
        total.style.background = "#a00d";
    }
}

let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)

}else{
    dataPro =[];

}

submit.onclick = function(){
    let newPro = {
        tital:tital.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase()
    }
    if(tital.value != '' && price.value !='' && category.value !=''&& count.value < 100){
    if(mood === 'creat'){
    if(newPro.count > 1){
        for (let i = 0 ; i < newPro.count ; i++){
            dataPro.push(newPro);
        }
    }else{
        dataPro.push(newPro);
    }
}else{
    dataPro[temp] = newPro
    mood = 'creat';
    submit.innerHTML = 'creat';
    count.style.display = 'block';

     }
     clearData()
        }
    


    localStorage.setItem('product',JSON.stringify(dataPro))
   
    
    
    showData()

}
showData()

function clearData(){
    tital.value = '';
    price.value = '';
    ads.value = '';
    taxes.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML='';
    discount.value = '';

}

function showData(){
    getTotal();
    let table = '';
    for (let i=0; i < dataPro.length ; i++){
        table += `
        <tr>
          <td>${i+1}</td>
          <td>${dataPro[i].tital}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button onclick='updateData(${i})' id="update">update</button></td>
          <td><button onclick='deletData(${i})' id="delet"> delete</button></td>
        <tr>
    `
    }
    document.getElementById('tBody').innerHTML = table;
    let btnDelet = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelet.innerHTML = `
        <button onclick="deleteAll()"> Delete All (${getTotal()}) </button>
        `
        }else{
        btnDelet.innerHTML= ``;
    }
}

function deletData(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro) ;
    showData();
}


function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();

}

function updateData(i){
    tital.value = dataPro[i].tital;
    price.value = dataPro[i].price;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    taxes.value = dataPro[i].taxes;
    getTotal();
    category.value = dataPro[i].category
    count.style.display = "none";
    submit.innerHTML = 'update';
    mood = 'update';
    temp = i;
    scroll({
        top:0,
        behavior:'smooth'
    })

}

let searchMood = 'tital';
function getSearch(id){
    let search = document.getElementById('search');
    if(id =='searchTital'){
        searchMood = 'tital';
        search.placeholder = 'search by tital'
        
    }else{searchMood = 'category'
    search.placeholder = 'search by category'
    }
search.focus()
search.value = '';
showData();
}



let table = '';
function searchData(value)
{
    if(searchMood == 'tital')
    {
        for(let i = 0 ; i < dataPro.length ; i++)
        {
            if(dataPro[i].tital.includes(value.toLowerCase()))
            {
                table = `
                    <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].tital}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick='updateData(${i})' id="update">update</button></td>
                    <td><button onclick='deletData(${i})' id="delet"> delete</button></td>
                    <tr>
                `                
            }
        }
    }else{
        for(let i = 0 ; i < dataPro.length ; i++)
        {
            if(dataPro[i].category.includes(value.toLowerCase()))
            {
                table = `
                    <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].tital}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick='updateData(${i})' id="update">update</button></td>
                    <td><button onclick='deletData(${i})' id="delet"> delete</button></td>
                    <tr>
                `                
            }
        }
   
    }
    document.getElementById('tBody').innerHTML = table;

}







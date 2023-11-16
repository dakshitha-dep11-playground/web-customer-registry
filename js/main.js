class Customer {
    id;
    name;
    address;
    custDivElm;

    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.custDivElm = this.generateUI();
        const custDetailContainerElm = document.querySelector('#cust-detail-container');
        custDetailContainerElm.prepend(this.custDivElm);
        this.custDivElm.querySelector('.edit').addEventListener('click',(e)=>{
            console.log("This guy is trying to edit");
        })
    }

    generateUI() {
        const custDivElm2 = document.createElement('div');
        custDivElm2.className = `row`;
        custDivElm2.innerHTML = `<div class="t-data col-1">
        ${this.id}
    </div>
    <div class="t-data  col-5">
    ${this.name}
    </div>
    <div class="t-data  col-4">
    ${this.address}
    </div>
    <div class="t-data  col-2">
        <i class="bi bi-pencil-fill edit mx-2"></i>
        <i class="bi bi-x-circle-fill erase mx-2"></i>
    </div>`;
        return custDivElm2;
    }
}
let custIDNumber = 1;

function generateID(){
    if(custIDNumber<10){
        return `C00${custIDNumber}`;
    }
    if(custIDNumber<100){
        return `C0${custIDNumber}`;
    }else{
        return `C${custIDNumber}`;
    }

}

/* Input elements */
const btnAddNew = document.querySelector('#btn-add-new');
const idInputElm = document.querySelector('#cust-id');
const nameInputElm = document.querySelector('#cust-name');
const addressInputElm = document.querySelector('#cust-address');

/* Add new customer button */
btnAddNew.addEventListener('click', (e)=>{
    idInputElm.value = generateID(); 
    console.log("clicked new +");
})

/* Add button and validations */
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click',(e)=>{
    let id = idInputElm.value.trim(); 
    let name = nameInputElm.value.trim();
    let address = addressInputElm.value.trim();
    if(!name||!address){
            console.log("Null ane");
            if(!name){
                nameInputElm.style.border = `4px solid red`;
                const nameHintELm = document.querySelector('#name-hint');
                nameHintELm.innerText ='Enter your name';
                nameHintELm.style.color = `red`;
            }
            if(!address){
                addressInputElm.style.border = `4px solid red`;
                const addressHintELm = document.querySelector('#address-hint');
                addressHintELm.innerText ='Enter your address';
                addressHintELm.style.color = `red`;
            }
            return;
    }


})
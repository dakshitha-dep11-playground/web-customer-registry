
let customerArray = [];
console.log(customerArray);

/* Array Functions */




// function deleteArrayElement(id){
//     customerArray.forEach(elm=>{
//         console.log(elm);
//         const innerId = elm.querySelector('.customer-row-id').innerText;
//         // console.log(customerArray.indexOf(elm));

//         if(innerId===id){
//             customerArray.splice(customerArray.indexOf(elm),1);
//             console.log("passes here");
//             return;
//         }
//     })
// }


/* Input elements */
const btnAddNew = document.querySelector('#btn-add-new');
const idInputElm = document.querySelector('#cust-id');
const nameInputElm = document.querySelector('#cust-name');
const addressInputElm = document.querySelector('#cust-address');

/* Add button and validations */
const btnAdd = document.querySelector('#btn-add');

/* Customer Class */
class Customer {
    id;
    name;
    address;
    custDivElm;

    // set name(name){
    //     this.#name = name;
    // }

    // get name(){
    //     return this.#name;
    // }

    // set address(name){
    //     this.#address = address;
    // }

    // get name(){
    //     return this.#address;
    // }

    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.custDivElm = this.generateUI();
        const custDetailContainerElm = document.querySelector('#cust-detail-container');
        custDetailContainerElm.append(this.custDivElm);
        customerArray.push(this.custDivElm);
        console.log(customerArray);
        // findArrayElement();
        this.custDivElm.querySelector('.edit').addEventListener('click', (e) => {
            console.log("This guy is trying to edit");
            selectedElm = this.custDivElm;
            idInputElm.value = this.id;
            nameInputElm.value = this.name;
            addressInputElm.value = this.address;
            btnAdd.innerText = 'Update'

        })

        this.custDivElm.querySelector('.erase').addEventListener('click', (e) => {
            console.log("This guy is trying to delete");
            this.custDivElm.remove();
            // deleteArrayElement(this.id);
        customerArray.splice(customerArray.indexOf(this.custDivElm),1);
            console.log(customerArray);
        })
    }

    generateUI() {
        const custDivElm2 = document.createElement('div');
        custDivElm2.className = `row customer-row`;
        custDivElm2.innerHTML = `<div class="t-data col-1 col-1 customer-row-id">
        ${this.id}
    </div>
    <div class="t-data  col-5 customer-row-name">
    ${this.name}
    </div>
    <div class="t-data  col-4 customer-row-address">
    ${this.address}
    </div>
    <div class="t-data  col-2">
        <i class="bi bi-pencil-fill edit mx-2"></i>
        <i class="bi bi-x-circle-fill erase mx-2"></i>
    </div>`;
        return custDivElm2;
    }
}

/* Selected Element */
let selectedElm = null;


let custIDNumber = 1;

function generateID() {
    if (custIDNumber < 10) {
        return `C00${custIDNumber}`;
    }
    if (custIDNumber < 100) {
        return `C0${custIDNumber}`;
    } else {
        return `C${custIDNumber}`;
    }

}



/* Add new customer button */
btnAddNew.addEventListener('click', (e) => {
    idInputElm.value = generateID();
    nameInputElm.value = null;
    addressInputElm.value = null;
    nameInputElm.focus();
    // console.log("clicked new +");
})


/* Add & update button */
btnAdd.addEventListener('click', (e) => {
    let id = idInputElm.value.trim();
    let name = nameInputElm.value.trim();
    let address = addressInputElm.value.trim();

    const nameHintELm = document.querySelector('#name-hint');
    const addressHintELm = document.querySelector('#address-hint');
    /* Is Empty?  */
    if (!name || !address) {

        if (!name) {
            nameInputElm.style.border = `4px solid red`;
            nameHintELm.innerText = 'Enter your name';
            nameHintELm.style.color = `red`;
        }
        if (!address) {
            addressInputElm.style.border = `4px solid red`;
            addressHintELm.innerText = 'Enter your address';
            addressHintELm.style.color = `red`;
        }
        return;
    }

    /* IsValid? */
    let isValidName = validateName(name);
    let isValidAddrss = validateAddress(address);
    if (!isValidAddrss || !isValidName) {
        if (!isValidName) {
            nameInputElm.style.border = `4px solid red`;
            nameHintELm.innerText = 'Invalid name';
            nameHintELm.style.color = `red`;
        }
        if (!isValidAddrss) {
            addressInputElm.style.border = `4px solid red`;
            addressHintELm.innerText = 'Invalid address';
            addressHintELm.style.color = `red`;
        }
        return;
    }

    if(selectedElm!==null){
        console.log("hi");
        // selectedElm.id = id;
        // selectedElm.querySelector('.customer-row-id').innerText = id
        selectedElm.name = name;
        selectedElm.querySelector('.customer-row-name').innerText = name;
        selectedElm.address = address;
        selectedElm.querySelector('.customer-row-address').innerText = address;
        btnAdd.innerText = 'Add'
    }else{
        new Customer(id, name, address);
        custIDNumber++;
    }


    nameInputElm.style.border = null;
    addressInputElm.style.border = null;

    nameHintELm.innerText = ``;
    addressHintELm.innerText = ``;
    btnAddNew.click();
})

function validateName(name) {
    const regExName = /^[a-zA-Z ]{4,}$/;
    return regExName.test(name);
}

function validateAddress(name) {
    const regExName = /^[a-zA-Z0-9 ]{4,}$/;
    return regExName.test(name);
}

/* Search Bar */
const searchElm = document.querySelector('.search');
searchElm.addEventListener('input',(e)=>{
    const regExSearch = new RegExp(searchElm.value.toLowerCase());
    console.log(regExSearch);

    customerArray.forEach(elm => {
        let searchElmName = elm.querySelector('.customer-row-name').innerText.toLowerCase();
        let searchElmAddres = elm.querySelector('.customer-row-address').innerText.toLowerCase();
        let searchElmId = elm.querySelector('.customer-row-id').innerText.toLowerCase();
        // console.log(elm.querySelector('.customer-row-id').innerText);
        console.log(searchElmName, searchElmAddres, searchElmId);


        if(regExSearch.test(searchElmName)||regExSearch.test(searchElmAddres)||regExSearch.test(searchElmId)){
            // console.log(elm.querySelector('.customer-row-id').innerText, searchElm.value);
            // console.log("Found");
            // elm.style.visibility = 'visible';
            elm.style.position = `static`;
            elm.style.opacity = `1`;
        }else{
            elm.style.opacity = `0`;
            elm.style.position = `absolute`;
            // elm.style.visibility = 'hidden';
            // console.log("passes here");
        }
        // console.log(elm);
    })
})
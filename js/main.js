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

new Customer(1, 'sjgcs', 'sjcs')
let arr = [{
    id: "0",
    text: "почистить картошку",
    isDone: false
}];


const filt = {
    vse: "vse",
    neVipolneno: "neVipolneno",
    vipolneno: "vipolneno"
}

let filtr = filt.all;






function add(event) {
    event.preventDefault();
    const label = document.getElementById("label")
    const id = String(arr.length);
    arr.push({
        id,
        text: label.value,
        isDone: false
    });
    label.value = "";
    render();
}


function del(id) {
    arr = arr.filter(item => item.id !== id);
    render();
}


function done(id) {
    arr[id].isDone = !arr[id].isDone;
    console.log(arr);
    render();
}



function render() {
    let fffilt = arr;
    if(filtr === filt.neVipolneno) {
        fffilt = arr.filter(item => !item.isDone);
    }
    if(filtr === filt.vipolneno) {
        fffilt = arr.filter(item => item.isDone);
    }
    console.log(fffilt);



    const ol = document.getElementById("list");
    ol.innerHTML = "";


    for (let item of arr) {
        let li = document.createElement("li")
        li.innerHTML = `<input type="checkbox" onclick="done('${item.id}')">
        <span>${item.text}</span>
        <button onclick="del('${item.id}')">&#10060;</button>`;
        ol.appendChild(li);

    }
    
}

function filtering(filterVal) {
    filtr = filterVal;
    render();
}


document.addEventListener("DOMContentLoaded", () => 
{
    document.getElementById("form").addEventListener("submit", add);
    


    render();
});
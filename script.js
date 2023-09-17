function createNew(){
    const backlog = document.getElementById("backlog");
    const newItem = document.getElementById("item").value;
    const rand = Math.random()*10
    if (!newItem) {
        document.querySelector('.msg').innerHTML = 'Inputnya masih kosong laaa... isi apaan gtu'
        document.querySelector('.dialog').style.right = '.5rem'
    } else {
        backlog.innerHTML += `
        <div class="task" id="${newItem.toLowerCase().split(" ").join("") + rand}" draggable="true" ondragstart="drag(event)">
            <span>${newItem}</span>
            <button onclick="hapus('${newItem.toLowerCase().split(" ").join("") + rand}')" title="Tombol hapus item">&#x2715;</button>
            <button onclick="edit('${newItem.toLowerCase().split(" ").join("") + rand}')" title="Tombol edit item">&#9998;</button>
            <button onclick="move('${newItem.toLowerCase().split(" ").join("") + rand}')" title="Tombol pindah item">&#10004;</button>
        </div>
        `
    }
}

document.getElementById('close').addEventListener('click', () => document.querySelector('.dialog').style.right = '-15rem' )

function move(id) {
    const backlog = document.getElementById('backlog');
    const onp = document.getElementById('onprogress');
    const done = document.getElementById('done');
    const item = document.getElementById(id);
    // console.log(ele.parentNode.id);
    if (item.parentNode.id == 'backlog') {
        backlog.removeChild(item);
        onp.appendChild(item)
    } else if (item.parentNode.id == 'onprogress') {
        onp.removeChild(item);
        done.appendChild(item)
    } else if (item.parentNode.id == 'done') {
        done.removeChild(item);
        backlog.appendChild(item)
    }
}

function hapus(id) {
    // document.querySelector('.msg').innerHTML = 'Maap yak.. tombol hapus masih blom fungsi wkwk'
    // document.querySelector('.dialog').style.right = '.5rem'
    // console.log(id);
    const ele = document.getElementById(id)
    ele.parentNode.removeChild(ele)
}

function edit(id) {
    document.querySelector('.msg').innerHTML = 'Maap yak.. tombol edit masih blom fungsi wkwk'
    document.querySelector('.dialog').style.right = '.5rem'
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}

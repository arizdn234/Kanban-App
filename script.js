function createNew(){
    const backlog = document.getElementById("backlog");
    const newItem = document.getElementById("item").value;
    const rand = Math.random()*10
    if (!newItem) {
        console.log("Input kosong");
    } else {
        backlog.innerHTML += `
        <div class="task" id="${newItem.toLowerCase().split(" ").join("") + rand}" draggable="true" ondragstart="drag(event)">
            <span>${newItem}</span>
            <button onclick="move('${newItem.toLowerCase().split(" ").join("") + rand}')">&#8594;</button>
        </div>
        `
    }
}

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

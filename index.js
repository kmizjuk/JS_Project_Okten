let wrap = document.createElement('div')
wrap.classList.add('usersBlockWrap')
document.body.append(wrap)

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        for (const user of json) {
            let item = document.createElement('div')
            item.innerText = `${user.id} ${user.name}`
            wrap.append(item)

            let button = document.createElement('button');
            button.onclick = function () {
                location.href = `user-details.html?id=${user.id}`
            }
            button.innerText = "User details"
            item.append(button)

            item.classList.add("userBlock")
            button.classList.add('button')
        }
    });
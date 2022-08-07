document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'edit') {
        const id  = event.target.dataset.id
        const newTitle = prompt('Введите новое название', '')
        const title = event.target.closest('li').querySelector('.title')

        if (newTitle) {
            edit(id, newTitle).then(() => {
                title.textContent = newTitle
            })
        }
    }
})

async function edit(id,title) {
    await fetch(`/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(
            { title: title})
    })
}
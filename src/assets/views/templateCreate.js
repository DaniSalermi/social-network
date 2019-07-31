const createAccount = () => {
    console.log('Crear cuenta');
}

export const templateCreate = () => {
    const containerCreate = document.createElement('div');
    const contentCreate = `<p>Crear cuenta</p> 
    <button id='createAccount'>Crear</button>`

    containerCreate.innerHTML = contentCreate;

    const btn = containerCreate.querySelector('#create');
    btn.addEventListener('click', () => {
        createAccount();
    })
    return containerCreate;
}
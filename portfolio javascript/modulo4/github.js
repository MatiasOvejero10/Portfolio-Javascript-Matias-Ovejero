document.getElementById('buscar').addEventListener('click', () => {
    const user = document.getElementById('usuario').value.trim();
    if (!user) return alert('Ingrese un usuario.');
    

document.getElementById('resultado').innerHTML = "Buscando...";

fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
        if (!res.ok) throw new Error('Usuario no encontrado');
        return res.json();
    })

    .then((data) => {
        document.getElementById('resultado').innerHTML = `
            <img src="${data.avatar_url}" alt="Avatar">
            <h2>${data.login}</h2>
            <p>Seguidores: ${data.followers}</p>
            <p>Ubicacion: ${data.location}</p>
            <p>Estrellas: ${data.public_gists}</p>
            <p>Compania: ${data.company}</p>        
            <p>Repos publicos: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">Ver Perfil</a>
        `;
        // Desafío: Cargar los últimos repositorios del usuario
        return fetch(`https://api.github.com/users/${user}/repos`);
    })
    .then((res) => {
        if (!res.ok) throw new Error('No se pudieron obtener los repositorios');
        return res.json();
    })
    .then((repos) => {
        let reposHTML = '<h3>Últimos Repositorios:</h3><ul>';
        repos.slice(0, 5).forEach((repo) => {
            reposHTML += `
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    ${repo.description ? `<p>${repo.description}</p>` : '<p>Sin descripción</p>'}
                    <small>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</small>
                </li>
            `;
        });
        reposHTML += '</ul>';
        document.getElementById('resultado').innerHTML += reposHTML;
    })
    .catch((error) => {
        document.getElementById('resultado').innerHTML = `${error.message}`;
    })
    .finally(() => console.log("Busqueda finalizada"));
});    

//Desafio: muestra los ultimos repositorios del usuario (https://api.github.com/users/${user}/repos)
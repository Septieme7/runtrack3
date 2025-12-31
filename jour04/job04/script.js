document.getElementById('update').addEventListener('click', function() {
    fetch('users.php')
        .then(response => response.json())
        .then(users => {
            const tbody = document.getElementById('user-body');
            tbody.innerHTML = '';

            users.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erreur:', error));
});

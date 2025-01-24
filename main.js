document.addEventListener('DOMContentLoaded', function(){
    
    const avatarElement = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const reposElement = document.getElementById('repositorios');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('profile-link');


    fetch('https://api.github.com/users/l3l3z1nh4')
        .then (function(resposta){
            return resposta.json();
        })

        .then(function(json){
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })

        .catch(function(erro){
            alert("ocorreu um erro ao carregar a página")
        });
}) ;
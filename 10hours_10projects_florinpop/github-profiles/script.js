const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("chawlajay");
async function getUser(username){
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
    getRepos(username);
}

async function getRepos(username){
    const resp = await fetch(APIURL + username + "/repos" + "?sort=updated");
    const respData = await resp.json();

    addReposToCard(respData);
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
    <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul class="info">
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repositories</strong></li>
        </ul>
        <h4>Repos:</h4>
        <div class="repos" id="repos"></div>
    </div>
    </div>
    `;
    
    main.innerHTML = cardHTML;
}

function addReposToCard(repos){
    const reposEl = document.getElementById("repos");
    
    repos.slice(0,5).forEach(repo =>{
        const repoEl = document.createElement("a");
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerHTML = repo.name;
        reposEl.appendChild(repoEl);
    });
}

form.addEventListener("submit",(e)=>{
e.preventDefault();

const user = search.value;
if(user){
    getUser(user);

    search.value = "";
}
});
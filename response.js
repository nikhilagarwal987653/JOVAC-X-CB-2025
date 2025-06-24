const username = "octocat";       
const root = document.getElementById("profile");
fetch("https://api.github.com/users/nikhilagarwal987653")
  .then(res => {
    if (!res.ok) throw new Error("User not found");
    return res.json();
  })
  .then(u => {
    root.innerHTML = `
      <img src="${u.avatar_url}" alt="${u.login}'s avatar">
      <h1>${u.name ?? u.login}</h1>
      <p>${u.bio ?? "No bio yet…"}</p>
      <a class="follow" href="${u.html_url}" target="_blank">
        Follow · ${u.followers} followers
      </a>
    `;
  })
  .catch(err => {
    root.innerHTML = `<p style="color:red">${err.message}</p>`;
});

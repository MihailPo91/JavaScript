async function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    BASE_DIR = `https://api.github.com/repos/${username}/${repository}/commits`
    const commitContainer = document.getElementById('commits');

    try {
        const allCommits = await fetch(BASE_DIR, { method: 'GET' });
        const data = await allCommits.json();

        data.forEach((element) => {
            let newCommit = document.createElement('li');
            newCommit.textContent = `${element.commit.author.name}: ${element.commit.message}`
            commitContainer.appendChild(newCommit);
        })
    } catch (err) {
        let newError = document.createElement('li');
        newError.textContent = `Error: ${err.message} (Not Found)`
        commitContainer.appendChild(newError);
    }
}
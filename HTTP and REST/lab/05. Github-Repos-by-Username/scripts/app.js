function loadRepos() {
	const username = document.getElementById('username').value;
	const BASE_URL = `https://api.github.com/users/${username}/repos`;
	const repoList = document.getElementById('repos');

	Array.from(repoList.children).forEach((el) => {
		el.remove();
	});

	fetch(BASE_URL, { method: 'GET' })
		.then((res) => res.json())
		.then((jsonData) => {
			jsonData.forEach(element => {
				let newRepo = document.createElement('li');
				repoList.appendChild(newRepo);
				let newRepoAnchor = document.createElement('a');
				newRepoAnchor.textContent = `${element.full_name}`;
				newRepoAnchor.href = `${element.html_url}`;
				newRepo.appendChild(newRepoAnchor);

			})
				.catch((err) => {
					let error = document.createElement('li');
					error.textContent = 'Not found!';
					repoList.appendChild(error);
				})
		})
}
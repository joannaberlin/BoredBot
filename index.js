const btn = document.getElementById('get-activity');
const activity = document.getElementById('activity');
const title = document.getElementById('title');
const body = document.body;

btn.addEventListener('click', () => {
	fetch('https://apis.scrimba.com/bored/api/activity')
		.then((response) => response.json())
		.then((data) => {
			activity.textContent = data.activity;
			title.textContent = '🦾 HappyBot🦿';
			body.classList.add('fun');
		});
});

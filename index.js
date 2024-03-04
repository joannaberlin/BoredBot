const btn = document.getElementById('get-activity');
const activity = document.getElementById('activity');

btn.addEventListener('click', () => {
	fetch('https://apis.scrimba.com/bored/api/activity')
		.then((response) => response.json())
		.then((data) => {
			activity.textContent = data.activity;
		});
});

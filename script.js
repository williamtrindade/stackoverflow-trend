axios.get('https://api.stackexchange.com/2.2/tags?page=1&order=desc&sort=popular&site=stackoverflow')
	.then(function (response) {
		const items = response.data.items;
		const tbody = document.querySelector('tbody');
		items.forEach(i => {
			const tr = document.createElement('tr');
			const th = document.createElement('th');
			th.setAttribute('scope', 'row');
			const td = document.createElement('td');
			th.innerHTML = i.name;
			td.innerHTML = i.count;
			tr.appendChild(th);
			tr.appendChild(td);
			tbody.appendChild(tr);
		});
	})
	.catch(function (error) {
	// handle error
	console.log(error);
	})
	.finally(function () {
	// always executed
	});
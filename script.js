var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

for (i = 0; i <= data.length; i++) {

	var div = document.createElement('div');
	var header = document.createElement('header');

	div.classList.add('box');
    header.innerHTML = data[i].title;

	for (j=0; j < data[i].categories.length; j++) {
		header.classList.add(data[i].categories[j]);
	}

	var p = document.createElement('p');
	p.innerHTML = data[i].content;
	document.body.appendChild(div);
	div.appendChild(header);
	div.appendChild(p);

    
}
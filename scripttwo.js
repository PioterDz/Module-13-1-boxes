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

for (i = 0; i < data.length; i++) {
    var div = document.createElement('div');
    div.classList.add('box');
    var header = document.createElement('header');
    header.innerHTML = data.title;
    header.classList.add(data.categories);
    var content = document.createElement('p').classList.add('content');
    content = data.content;
    div.appendChild(header);
    div.appendChild(content);
    var body = document.getElementsByTagName('body');
    body.appendChild(div);
}
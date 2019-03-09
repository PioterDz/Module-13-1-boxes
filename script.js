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

var boxContent = document.querySelectorAll('.content');
var boxes = document.querySelectorAll('.box');

console.log(boxes + 'boxes');

for (i = 0; i < data.length; i++) {
	for (i = 0; i < boxes.length; i++) {
		console.log(boxes[i] + 'boxes[i]');
		var boxHeader = boxes[i].querySelector('header');
		console.log(boxHeader + 'boxHeader');
		var boxContent = boxes[i].querySelector('.content');
		console.log(boxContent + 'boxContent');
		boxes[i].id = data[i]['id'];
		console.log(boxes.id + 'boxes.id');
		boxHeader.innerHTML = data[i]['title'];
		boxContent.innerHTML = data[i]['content'];
		boxes[i].classList.add(data[i]['categories']);
	}

}



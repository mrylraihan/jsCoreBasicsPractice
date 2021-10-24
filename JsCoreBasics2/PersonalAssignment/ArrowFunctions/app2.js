// Arrows functions are best used in CallBack functions
function testingCB(p) {
	//function we are invoking in our object
	p()
}

const nestedObj = {
	name: 'nested obj',
	obj4: {
		name: 'obj4',
		talk: function () {
			return this //still point to the object calling it
		},
		talkArrows: () => this, //window,
		talkCB: function () {
			testingCB(() => console.log('talkCB', this)) //points to the object
		},
		talkCBRegular: function () {
			testingCB(function () {
				console.log('talkCBRegular', this)
			}) //points to the object
		},
	},
}
console.log(nestedObj.obj4.talk()) //{name: 'obj4', talk: ƒ, talkArrows: ƒ}
console.log(nestedObj.obj4.talkArrows.call(nestedObj)) //window
nestedObj.obj4.talkCB() //talkCB {name: 'obj4', talk: ƒ, talkArrows: ƒ, talkCB: ƒ}
nestedObj.obj4.talkCBRegular()

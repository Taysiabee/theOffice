console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



let officeQuiz = [     
	{
		question: "What time do you usually leave work? ",
		answers: {
			a: "I leave work when I'm dead! Or until Micheal leaves, he needs me.", //dwight
			b: "Wah doo zheng hua doo peng yo, nee how.", //creed
			c: "Ladies &  Gentleman it's QUITTIN' TIME", //michael
			d: "The day ends at 5, I leave at 5", //stanley
		}
	},

	{	

		question: "How often do you call out?",
		answers: {
			a: "What happened to the generation that knew you shut up, did your work, and died quietly from a heart attack?", //stanley
			b: "I've never been sick a day in my life!", //dwight
			c: "I'm playing hooky from work today.", //creed
			d: "I'm actually taking a Personnel Day.", //michael
		}
	},

	{
		question: "What's your costume for Halloween this year?",
		answers: {
			a: "Katy Perry", //kelly
			b: "The Joker from The Dark Knight" ,//creed
			c: "MacGruber from SNL.", //michael
			d: "The Scranton Strangler", //dwight
		}
	},

	{
		question: "What are your weaknesses?",
		answers: {
			a: "Floozy? Yes. Alkie. Check. Einstein sarcastically?  You bet. Vomit mop? Sure. Floor meat? That’s me. Flesh vacuüm?  Hi ", //meredith
			b: "Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.", //michael
			c: "My nose.... It's too small.", //dwight
			d: "I don't  have any asshole!" ,//kelly
		}
	},

	{
		question: "Do you like sweets?",
		answers: {
			a: "Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Where does it end with you people????", //kevin
			b: "Sweets?! I like BEETS!", //dwight
			c: "I'm one of the few people that looks hot eating a cupcake.", //kelly
			d: "If I don't have some cake soon I might die.", //stanley
		}
	},

	{
		question: " How's the dating scene like for you?",
		answers: {
			a: "In the sixties, I made love to many, many women. Often outdoors. In the mud and the rain. And it's possible a man slipped in. There'd be no way of knowing.", //creed
			b: "I GOT SIX NUMBERS!!! ONE MORE WOULD HAVE BEEN A COMPLETE TELEPHONE NUMBER!", //kevin
			c: "I want kids, so I'm on a dating site. My username: 'Little Kid Lover'. That way people will know exactly where my priorities are at." ,//miachael
			d: "I ask everyone in the room, 'Are you in a relationship?", //meredith
		}
	}

]



officeQuiz.forEach(function(item, i){

	// let newStuff = "<section>";	

	// newStuff += (i+1) +")" + item.question +"<br>";	
	// // newStuff += (i+1) +")" + item.answers;
	// newStuff += "a)" + item.answers.a +"<br>"+"<br>";
	// newStuff += "b)" + item.answers.b +"<br>"+"<br>";
	// newStuff += "c)" + item.answers.c +"<br>"+"<br>";
	// newStuff += "d)" + item.answers.d +"<br>"+"<br>";

	// newStuff += "</section>";	

	// newStuff += "<br><br><br><br><br>";

	// document.querySelector(".quiz").innerHTML += newStuff




	let section = document.createElement('section')
	
	let h2 = document.createElement('h2')
	section.appendChild(h2)
	h2.innerHTML += item.question

	let h4 = document.createElement('h4')
	section.appendChild(h4)
	h4.innerHTML = item.answers.a 
	
	h4 = document.createElement('h4')
	section.appendChild(h4)
	h4.innerHTML = item.answers.b 

	h4 = document.createElement('h4')
	section.appendChild(h4)
	h4.innerHTML = item.answers.c


	 
	


	document.querySelector(".quiz").appendChild(section)

});



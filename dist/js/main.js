"use strict";console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");var officeQuiz=[{question:"What time do you usually leave work? ",answers:{a:"I leave work when I'm dead! Or until Micheal leaves, he needs me.",b:"Wah doo zheng hua doo peng yo, nee how.",c:"Ladies &  Gentleman it's QUITTIN' TIME",d:"The day ends at 5, I leave at 5"}},{question:"How often do you call out?",answers:{a:"What happened to the generation that knew you shut up, did your work, and died quietly from a heart attack?",b:"I've never been sick a day in my life!",c:"I'm playing hooky from work today.",d:"I'm actually taking a Personnel Day."}},{question:"What's your costume for Halloween this year?",answers:{a:"Katy Perry",b:"The Joker from The Dark Knight",c:"MacGruber from SNL.",d:"The Scranton Strangler"}},{question:"What are your weaknesses?",answers:{a:"Floozy? Yes. Alkie. Check. Einstein sarcastically?  You bet. Vomit mop? Sure. Floor meat? That’s me. Flesh vacuüm?  Hi ",b:"Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.",c:"My nose.... It's too small.",d:"I don't  have any asshole!"}},{question:"Do you like sweets?",answers:{a:"Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Where does it end with you people????",b:"Sweets?! I like BEETS!",c:"I'm one of the few people that looks hot eating a cupcake.",d:"If I don't have some cake soon I might die."}},{question:" How's the dating scene like for you?",answers:{a:"In the sixties, I made love to many, many women. Often outdoors. In the mud and the rain. And it's possible a man slipped in. There'd be no way of knowing.",b:"I GOT SIX NUMBERS!!! ONE MORE WOULD HAVE BEEN A COMPLETE TELEPHONE NUMBER!",c:"I want kids, so I'm on a dating site. My username: 'Little Kid Lover'. That way people will know exactly where my priorities are at.",d:"I ask everyone in the room, 'Are you in a relationship?"}}];officeQuiz.forEach(function(e,n){var a=document.createElement("section"),o=document.createElement("h2");a.appendChild(o),o.innerHTML+=e.question;var t=document.createElement("h4");a.appendChild(t),t.innerHTML=e.answers.a,t=document.createElement("h4"),a.appendChild(t),t.innerHTML=e.answers.b,t=document.createElement("h4"),a.appendChild(t),t.innerHTML=e.answers.c,t=document.createElement("h4"),a.appendChild(t),t.innerHTML=e.answers.d,document.querySelector(".quiz").appendChild(a)});
//# sourceMappingURL=main.js.map
const containerCards = document.querySelector('.container');
const ourTeam = [
    {
       img: 'wayne-barnett-founder-ceo.jpg',
       name: 'Wayne Barnett',
       role: 'Founder & CEO'
    },
    {
       img: 'angela-caroll-chief-editor.jpg',
       name: 'Angela Caroll',
       role: 'Chief Editor'
    },
    {
       img: 'walter-gordon-office-manager.jpg', 
       name: 'Walter Gordon',
       role: 'Office Manager'
    },
    {
       img: 'angela-lopez-social-media-manager.jpg',
       name: 'Angela Lopez',
       role: 'Social Media Manager'
    },
    {
       img: 'scott-estrada-developer.jpg',
       name: 'Scott Estrada',
       role: 'Developer'
    },
    {
       img: 'barbara-ramos-graphic-designer.jpg', 
       name: 'Barbara Ramos',
       role: 'Graphic Designer'
    }
]

console.log(ourTeam);

for(let member of ourTeam){
      containerCards.innerHTML += `
      <div class="card mx-2 my-3">
         <img src="img/${member.img}" alt="">
         <h4>${member.name}</h4>
         <span>${member.role}</span>
      </div>
      `
   }
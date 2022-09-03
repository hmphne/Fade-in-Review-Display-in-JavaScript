const reviewContainer = document.getElementById('review-container')

const reviews = [
    {
        img:'https://i.pinimg.com/originals/a0/66/6f/a0666f1fae1097771fdbb97960d94605.png',
        alt:'picture of sanji',
        text:'Black Leg Sanji is the cook of the Straw Hat Pirates.',
        name:'Vinsmoke Sanji'
    },
    {
        img:'https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg',
        alt:'picture of luffy',
        text:'Straw Hat Luffy is the main protagonist of One Piece',
        name:'Monkey D. Luffy'
    },
    {
        img:'https://i1.sndcdn.com/artworks-sylkYPAwTp95iXqn-ehwUOA-t500x500.jpg',
        alt:'picture of zoro',
        text:'Pirate Hunter Zoro is the swordsman of the Straw Hat Pirates.',
        name:'Roronoa Zoro'
    }
]

function populateDisplay() {
    reviews.forEach(review => {

       
       const cardElement = document.createElement('div')
       cardElement.classList.add('card')

       cardElement.addEventListener('mouseover', showCard)
       cardElement.addEventListener('mouseleave', blurCard)


       const imageContainer = document.createElement('div')
       imageContainer.classList.add('image-container')
       const imageElement = document.createElement('img')
       imageElement.setAttribute('src', review.img)
       imageElement.setAttribute('alt', review.alt)
       imageContainer.append(imageElement)
        
       const paragraphElement = document.createElement('p')
       paragraphElement.textContent = review.text
       const nameContainer = document.createElement('div')
       nameContainer.classList.add('name-container')
       nameContainer.textContent = review.name

       cardElement.append(imageContainer, paragraphElement, nameContainer)

       reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard() {
    this.classList.add('active')
}
function blurCard() {
    this.classList.remove('active')
}
let cards = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png"];
// let cards = ["1.png","1.png"];

shuffle(cards)

let cardTemplate = document.querySelector("#card-template");
let cardContainer = document.querySelector(".cards");
let uplimit = 0;


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

cards.forEach(c => {
    let card = cardTemplate.content.cloneNode(true).querySelector('.card')
    card.querySelector('img.front').src = "img/" + c

    card.addEventListener('click',(e) => {

        if(e.target.parentElement.classList.contains('matched'))
            return;

       if(e.target.src.includes("back")){

            if(uplimit < 2){
                uplimit++
                console.log(e.target.src)
                e.target.parentElement.classList.toggle('flipped')
            }
        }
        else {
            uplimit--
            e.target.parentElement.classList.toggle('flipped')

        }

        e.target.parentElement.querySelector('.front');

        console.log(e.target.parentElement.querySelector('.front').src);


        if(uplimit === 2){
            let openCards = document.querySelectorAll('.flipped .front');
            console.log(openCards)
            if (openCards[0].src === openCards[1].src) {
               
                openCards[0].parentElement.classList.remove('flipped')
                openCards[1].parentElement.classList.remove('flipped')
                openCards[0].parentElement.classList.add('matched')
                openCards[1].parentElement.classList.add('matched')
                
                uplimit = 0;
               // Win
                setTimeout(() => {
                    console.log("they match.");
                }, 500);

            } else {
                
                // Loose
                setTimeout(() => {
                    console.log("they don't match.");
                }, 500);
            }

        }
    })

    cardContainer.appendChild(card)
})


let cards=[
    {
        image:"https://cdn131.picsart.com/318342791265211.png?type=webp&to=min&r=640",
        value:1,
        status:"closed"
    },
    {
        image:"https://cdn131.picsart.com/318342791265211.png?type=webp&to=min&r=640",
        value:1,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/73285f16c74f19ee1902559b412a29a8/a55e71659cf0472d-a5/s400x600/63765bc6d4752fa3e020701b42b4e49d0e1bde3d.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/73285f16c74f19ee1902559b412a29a8/a55e71659cf0472d-a5/s400x600/63765bc6d4752fa3e020701b42b4e49d0e1bde3d.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/e29753a742caad024ea1e7ac9f407b21/5fbc829410522b8a-18/s1280x1920/d74eed62745fd8dee23250189ef3f8a1f0efca15.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/e29753a742caad024ea1e7ac9f407b21/5fbc829410522b8a-18/s1280x1920/d74eed62745fd8dee23250189ef3f8a1f0efca15.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/aab35c11bf2bd349d9184afd52b3121e/7709cb07827758f4-be/s400x600/0f3aa7ba4292695063b17ae25dca40c4ca608d2f.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://64.media.tumblr.com/aab35c11bf2bd349d9184afd52b3121e/7709cb07827758f4-be/s400x600/0f3aa7ba4292695063b17ae25dca40c4ca608d2f.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://www.nautiljon.com/images/manga_persos/00/02/hayashida_haruki_7620.jpg?0",
        value:5,
        status:"closed"
    },
    {
        image:"https://www.nautiljon.com/images/manga_persos/00/02/hayashida_haruki_7620.jpg?0",
        value:5,
        status:"closed"
    },
]


// Durnsten Shuffling Algo

let temp;
for(let i= cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]= temp;

}

let cardsCopy = cards;

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);



let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;
function openCard(index){

    console.log(cards);

    cards[index].status= "opened";
    if(cardCount === 1){
        val1 = cards[index].value;
        cardCount++;
    }
    else if(cardCount === 2){
        val2 = cards[index].value;

        if(val1 === val2){
            score++;
            document.getElementById('score').innerText = score;

            //Reset after one guess
            val1 = null;
            val2 = null;
            cardCount = 1;
        }
        else{
            alert("Game Is Over");
            location.reload();
        }
    }

    displayCards(cards);
}
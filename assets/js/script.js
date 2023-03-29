// TODO: Declare any global variables we need
let tailsFlips = 0
let headsFlips = 0
let headsPercent = '0%'
let tailsPercent = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    document.querySelector('#flip').addEventListener('click', function(){
        let coinFlip = Math.ceil((Math.random()* 2));
        console.log(coinFlip)
        if (coinFlip % 2 == 0){
            //flip heads
            console.log('you flipped heads')
            headsFlips++
            totalFlips++
            console.log(`totalFlips is ${totalFlips}`)
            document.querySelector('#penny-image').src= './assets/images/penny-heads.jpg'
            document.querySelector('#message').textContent= 'You flipped heads!'
            document.querySelector('#heads').textContent= headsFlips
            if (tails == 0 ){
                return false
            }else
            document.querySelector('#heads-percent').textContent= Math.round(headsFlips/totalFlips * 100)+ '%'
            document.querySelector('#tails-percent').textContent= Math.round(tailsFlips/totalFlips * 100)+ '%'

            
        }else{
            //flip tails
            console.log('you flipped tails')
            tailsFlips++
            document.querySelector('#penny-image').src= './assets/images/penny-tails.jpg'
            document.querySelector('#message').textContent= 'You flipped tails!'
            document.querySelector('#tails').textContent= tailsFlips
            if (heads == 0 ){
                return false
            }else
            document.querySelector('#heads-percent').textContent= Math.round(headsFlips/totalFlips * 100)+ '%'
            document.querySelector('#tails-percent').textContent= Math.round(tailsFlips/totalFlips * 100)+ '%'
           
        }

    })
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.querySelector('#clear').addEventListener('click', function(){
            headsFlips = 0
            tailsFlips = 0
            headsPercent = '0%'
            tailsPercent = '0%'
            totalFlips = 0
            document.querySelector('#penny-image').src= './assets/images/penny-tails.jpg'
            document.querySelector('#message').textContent= 'lets get rolling1!'
            document.querySelector('#heads').textContent= headsFlips
            document.querySelector('#tails').textContent= tailsFlips
            document.querySelector('#heads-percent').textContent= headsPercent
            document.querySelector('#tails-percent').textContent= tailsPercent


        })
})
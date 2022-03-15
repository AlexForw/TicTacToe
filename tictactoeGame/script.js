`use strict`

console.time('Loop')
const cellElem = document.querySelectorAll('[data-cell]')
const winMessage = document.querySelector('#winningMessage')
const winImage = document.querySelector('[data-winning-message-image]')
const restartBtn = document.querySelector('#restartButton')
const scorePosNull = document.querySelector('.main__move-scoreNull')
const scorePosCross = document.querySelector('.main__move-scoreCross')
let scoreNull = 0
let scoreCross = 0
scorePosCross.textContent = scoreCross
scorePosNull.textContent = scoreNull
const winCombination =[ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
]
console.log(cellElem)
restartGame()
restartBtn.addEventListener('click',restartingGame)

function restartingGame() {
    
    winMessage.classList.remove('show')
    // cellElem.forEach(item =>{
        //     item.classList.remove('crossCell')
        //     item.classList.remove('nullCell')
        //     item.classList.add('hover')
        // })
        console.log('ekeke')
        cellElem.forEach(item =>{
            item.classList.remove('nullCell')
            item.classList.remove('crossCell')
            item.removeEventListener('click', clicker)
            item.classList.add('hover')
            item.classList.remove('winCombinationStyle')
        })
        winImage.classList.remove('grishaImageLost')
        winImage.classList.remove('grishaImageWin')
        winImage.classList.remove('grishaImageDraw')
        i = 1
        restartGame()
    }
    
    let i = 1
    function restartGame(){
        
        cellElem.forEach(item =>{
            item.addEventListener('click', clicker, {once:true})
        })
}



function clicker(item) {
    console.log(i)
    let elem = item.target
    switchCell(elem)
    if(checkWinNull()){
        scoreNull += 1
        scorePosNull.textContent = scoreNull
        winImage.classList.add('grishaImageLost')
        setTimeout(winShow, 800)
        console.log('win null')
    }else if(checkWinCross()){
        scoreCross += 1
        scorePosCross.textContent = scoreCross
        winImage.classList.add('grishaImageWin')
        setTimeout(winShow, 800)
        console.log('win cross')
    }else if(!checkWinCross() && !checkWinNull() && i == 10){
        winImage.classList.add('grishaImageDraw')
        setTimeout(winShow, 800)
        console.log('draw')
    }
}

function winShow(){
    winMessage.classList.add('show')
}

function switchCell(elem) {
    if(i%2 === 0){ 
        elem.classList.add('nullCell')
        elem.classList.remove('hover')
    }else{
        elem.classList.add('crossCell')
        elem.classList.remove('hover')
    }
    i++
}

function checkWinNull(){
    return winCombination.some(comb => {
        let combination = comb.every(i =>cellElem[i].classList.contains('nullCell'))
        if(combination){
            comb.forEach((item)=>{
                cellElem[item].classList.add('winCombinationStyle')
            })
            cellElem.forEach(item =>{
                item.removeEventListener('click', clicker)
            })
        }
        return combination
    })
}

function checkWinCross(){
    return winCombination.some(comb => {
        let combination = comb.every(i =>cellElem[i].classList.contains('crossCell'))
        if(combination){
            comb.forEach((item)=>{
                cellElem[item].classList.add('winCombinationStyle')
            })
            cellElem.forEach(item =>{
                item.classList.remove('hover')
                item.removeEventListener('click', clicker)
            })

        }
        return combination
    })
}

console.timeEnd('Loop')
// with friend in the computer



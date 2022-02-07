'use strict'

var gQuests
var gCurrQuestIdx
var gIsGameOn

function init() {
    document.querySelector('.modal').style.display = 'none'
    gIsGameOn = true
    gCurrQuestIdx = 0
    gQuests = createQuests()
    renderQuest(gCurrQuestIdx)
}

function createQuests() {
    return [
        { id: 1, opts: ['Short For loop', 'Nested For loop'], correctOpIdx: 1 },
        { id: 2, opts: ['Switch Case', 'Nested If'], correctOpIdx: 0 },
        { id: 3, opts: ['createBoard function', 'countNegs function'], correctOpIdx: 1 }
    ]
}

function renderQuest(questIdx) {
    document.querySelector('.picture').src = `assets/${gQuests[questIdx].id}.png`
    document.querySelector('.opts-container').innerHTML = ''
    for (var i = 0; i < 2; i++) {
        // Add two divs with quest answers
        const currDivStr = `<div class="opt" onclick="chooseOpt(${i})" data-idx="${i}">${gQuests[questIdx].opts[i]}</div>`
        document.querySelector('.opts-container').innerHTML += currDivStr
    }
}

function chooseOpt(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOpIdx) moveToNextQuest()
    else document.querySelector(`[data-idx="${optIdx}"]`).classList.add('wrongOpt')
}

function moveToNextQuest() {
    ++gCurrQuestIdx === gQuests.length ? showVictorious() : renderQuest(gCurrQuestIdx)
}

function showVictorious() {
    gIsGameOn = false
    document.querySelector('.modal').style.display = 'block'
}
const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];


let randomPassword1 = document.getElementById("left-btn")
let randomPassword2 = document.getElementById("right-btn")

// console.log(characters[Math.floor(Math.random() * characters.length)])

function randomPassword() {
    let set1 = []
    for (let i = 0; i < 15; i++) {
        set1.push((characters[Math.floor(Math.random() * characters.length)]))
    }
    randomPassword1.textContent = set1.join("")
        // set1[0] + set1[1] + set1[2] + set1[3] + set1[4] + set1[5] + set1[6] + set1[7] + set1[8] + set1[9] + set1[10] + set1[11] + set1[12] + set1[13] + set1[14]




    let set2 = []
    for (let j = 0; j < 15; j++) {
        set2.push((characters[Math.floor(Math.random() * characters.length)]))
    }
    randomPassword2.textContent = set2.join("")
}
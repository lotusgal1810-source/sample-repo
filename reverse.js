let str = "ELANGOVAN";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split("").reverse().join("");
    result += reversed + " ";
}

console.log(result.trim());
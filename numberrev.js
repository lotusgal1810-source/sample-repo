let n = 5;

for (let i = n; i >= 1; i--) {
    let num = "";

    for (let j = i; j >= 1; j--) {
        num += j;
    }

    console.log(num);
}
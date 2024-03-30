
for (let i = 0; i < 10; i ++) {
    setTimeout(function () {
        console.log(`Number-1----${i}`);
    },0);//1 Способ
}




async function printWithDelay() {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(() => {
            console.log(`Number-2----${i}`);
            resolve();
        }, 0));
    }
}
printWithDelay();// Нашел такой способ,но мы такое не проходили // 2 Способ




for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(`Number-3----${i}`);

    }.bind(null, i), 1000);
} //3 Способ





for (let i = 0; i < 10; i++) {
    (function () {
        setTimeout(function () {
            console.log(`Number-4----${i}`);
        }, 1000);
    })(i);
} //4 Способ
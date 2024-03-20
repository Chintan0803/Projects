let tb = document.getElementById("text-box");

tb.addEventListener('input', () => {
    let text = tb.value;
    // console.log(text);

    let char = text.length;
    // console.log(char);
    document.getElementById('char').innerHTML = char;

    text = text.trim();

    let words = text.split(" ");
    // console.log(words);

    let cleanList = words.filter((e) => {
        return e != "";
    });

    document.getElementById('word').innerHTML = cleanList.length;
});
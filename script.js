const textarea = document.querySelector("#textarea");
const count = document.querySelector("#count");
const output = document.querySelector(".output");

count.addEventListener("click", () => {
    if (textarea.value === "") {
        output.innerHTML = "Please enter some text";
    } else {
        const val = textarea.value;
        let count = 0;
        for (let i = 0; i < val.length; i++) {
            if (
                val[i] === "a" ||
                val[i] === "e" ||
                val[i] === "i" ||
                val[i] === "o" ||
                val[i] === "u"
            ) {
                count++;
            }
        }
        output.innerHTML = `The Number of Vowels are : ${count}`;
    }
});

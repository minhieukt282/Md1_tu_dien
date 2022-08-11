function trans() {
    let textInput = document.getElementById("input").value;
    library = JSON.parse(localStorage.getItem("library")) ?? [];

    library.forEach(index);

    function index() {
        if (index.vie === textInput)
            console.log(index.eng);
        else if (index.eng === textInput)
            console.log(index.vn);
    }


}

function addLibrary() {
    let vn = document.getElementById("vie").value;
    let en = document.getElementById("eng").value;
    var library = JSON.parse(localStorage.getItem("library")) ?? [];

    if (vn && en) {
        library.push({
            Vie: vn,
            Eng: en
        });
        localStorage.setItem("library", JSON.stringify(library));
    }
}
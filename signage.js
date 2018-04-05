const apiUrl = "http://localhost:3000/currentPage";

function setPageNumber(num) {
    $("#pageNumber").text(num);
}

function setImage(img) {
    $("#board").attr("src", "images/" + img);
}

function queryPageInfo() {
    fetch(apiUrl, {
        mode: 'cors'
    })
        .then(response => {
            return response.json();
        }).catch(error => {
            setImage("loading.png");
        }).then(json => {
            console.dir(json.number);
            setPageNumber(json.number);
            setImage(json.number + ".png");
        });
}

function initPage() {
    setPageNumber(0);
    setImage("title.png");
}

$(function () {
    const intervalMs = 3000;
    initPage();
    setInterval(function () {
        queryPageInfo();
    }, intervalMs);
});

const $heart = window.document.querySelector(".-heart"); // selecioa um elemnetos 
const $stars = window.document.querySelectorAll(".cont-star .star"); // seleciona todos os elementos All
const positionlast = $stars.length - 1;
$heart.addEventListener("click", hardleClick)

//  função da estrela
// percorre a lista usando o forEach, retornando cada elemento

$stars.forEach(function($star, key) {
    if (key == 0) {
        $star.addEventListener("click", fiststar);
    }
    if (key == positionlast) {
        $star.addEventListener("click", lastStar)
    }
    if (key > 0 && key < positionlast) {
        $star.addEventListener("click", function() {
            middleStar(key)
        });
    }
});

function middleStar(index) {
    $stars.forEach(function($star, key) {
        $star.classList.remove("-active");

        if (key <= index) {
            $star.classList.add("-active");
        }
    })
}

function fiststar() {
    $stars.forEach(function($star) {
        $star.classList.remove("-active");
    });
    this.classList.add("-active");
}


function lastStar() {
    $stars.forEach(function($star) {
        $star.classList.add("-active");
    });
}

function hardleClick() {
    this.classList.toggle("-active");
}
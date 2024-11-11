var btnButton = document.getElementById("btn");
var skillSection = document.getElementById("skills");
btnButton.addEventListener('click', function () {
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    }
    else {
        skillSection.style.display = 'none';
    }
});

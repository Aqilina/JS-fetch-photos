const loadMoreBtn = document.getElementById('loadMoreBtn');
const load_data = document.getElementById('load_data');
const load_data2 = document.getElementById('load_data2');

loadMoreBtn.addEventListener('click', addPhotoUsingFetch)


function addPhotoUsingFetch () {
    fetch('fetchProcess.php')
        .then(function (response) {
        return response.json(); //return text to json format
    }).then(function (data) { //sitoj vietoj gaunami duomenys!!!!!!
        //musu gautas atsakymas po formos isiuntimo
        console.log(data);
        if (load_data.innerHTML === '') {
            for (let i = 0; i < 4; i++) {
                load_data.innerHTML += `<img src="${data[i]}"/>`
            }
        } else {
            if (load_data2.innerHTML === '')
            for (let i = 4; i < 8; i++) {
                load_data2.innerHTML += `<img src="${data[i]}"/>`
            }
        }
    })
}










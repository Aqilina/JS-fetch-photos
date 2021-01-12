
const loadMoreForm = document.getElementById('loadMoreForm');
const outputEl = document.getElementById('out');

loadMoreForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const loginFormData = new FormData(this)

    // siusim formos duomenis su fetch
    fetch('fetchProcess.php', {
        method: 'post',
        body: loadMoreForm //ka norim issiusti
    }).then(function(response) {
        return response.text();
    }).then(function (data){
        //musu gautas atsakymas po formos isiuntimo
        console.log(data);
        outputEl.innerHTML += data;
    })

})


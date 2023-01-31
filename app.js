const form = document.querySelector('#SearchForm');
const showimg=document.getElementById('#showimg');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    showimg.innerHTML='';
    const config={ params:{q:searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`,config);
    makeImages(res.data);
    form.elements.query.value='';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image)
        {
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        showimg.append(img);
        }
    }
}
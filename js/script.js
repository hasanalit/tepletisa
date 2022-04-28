let elProducts = document.querySelector('.production__list')


const getProductsData = function(products, elements){
    products.forEach(element => {


        let newLi = document.createElement('li')
        let newImg = document.createElement('img')
        let newSection = document.createElement('div')
        let newProductsheading = document.createElement('h3')
        let newProductsDesc = document.createElement('p')

        newLi.setAttribute('class', 'production__item')
        newImg.setAttribute('src', `${element.image}`)
        newImg.setAttribute('width', '266.5px')
        newImg.setAttribute('height', '166.5px')
        newSection.setAttribute('class', 'production__list-section')
        newProductsheading.setAttribute('class', 'production__list-heading')
        newProductsDesc.setAttribute('class', 'production__list-desc')

        newProductsheading.textContent = element.name
        newProductsDesc.textContent = element.text


        elements.appendChild(newLi)
        newLi.appendChild(newImg)
        newLi.appendChild(newSection)
        newSection.appendChild(newProductsheading)
        newSection.appendChild(newProductsDesc)
    });
}


const getBarakaProductData = function(link){
    fetch(`https://alibaraka.pythonanywhere.com/api/${link}`)
    .then(response => response.json())
    .then(data => getProductsData(data, elProducts));

}

getBarakaProductData('products/')


const getBarakaQuestionData = function(link){
    fetch(`https://alibaraka.pythonanywhere.com/api/${link}`)
    .then(response => response.json())
    .then(data => console.log(data));

}

getBarakaQuestionData('questions/')


const getBarakaStoriesData = function(link){
    fetch(`https://alibaraka.pythonanywhere.com/api/${link}`)
    .then(response => response.json())
    .then(data => console.log(data));

}

getBarakaStoriesData('stories/')
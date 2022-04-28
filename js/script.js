let elProducts = document.querySelector('.production__list')
let elClient = document.querySelector('.client__list')
let elTrusted = document.querySelector('.trusted__list')


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



const getStoryData = function(link, element){
    link.forEach(res => {

        let newLi = document.createElement('li')
        let newDesc = document.createElement('img')
        let newHeading = document.createElement('h4')
        let newText = document.createElement('p')
        let newLink = document.createElement('a')

        newLi.setAttribute('class', 'client__item')
        newDesc.setAttribute('class', 'client__spans')
        newDesc.setAttribute('src', res.image)
        newHeading.setAttribute('class', 'client__list-heading')
        newText.setAttribute('class', 'client__list-desc')
        newLink.setAttribute('class', 'client__list-link')


        newHeading.textContent = res.name
        newText.textContent = res.text


        element.appendChild(newLi)
        newLi.appendChild(newDesc)
        newLi.appendChild(newHeading)
        newLi.appendChild(newText)
        newLi.appendChild(newLink)
    })
}


const getBarakaStoriesData = function(link){
    fetch(`https://alibaraka.pythonanywhere.com/api/${link}`)
    .then(response => response.json())
    .then(data => getStoryData(data, elClient));

}

getBarakaStoriesData('stories/')




const getQuestionData = function(link, element){
    link.forEach(res => {
        
        let newLi = document.createElement('li')
        let newHeading = document.createElement('h3')
        let newText = document.createElement('p')

        newLi.setAttribute('class', 'trusted__item')
        newHeading.setAttribute('class', 'trusted__textt')
        newText.setAttribute('class', 'trusted__descc')

        newLi.textContent = res.question
        newText.textContent = res.answer



        element.appendChild(newLi)
        newLi.appendChild(newHeading)
        newLi.appendChild(newText)

    })
}


const getBarakaQuestionData = function(link){
    fetch(`https://alibaraka.pythonanywhere.com/api/${link}`)
    .then(response => response.json())
    .then(data => getQuestionData(data, elTrusted));

}

getBarakaQuestionData('questions/')
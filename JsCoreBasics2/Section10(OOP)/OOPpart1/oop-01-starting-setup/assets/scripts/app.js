//pillow
const jordan1RImg =
	'https://cdn.shopify.com/s/files/1/0473/6965/0340/products/f54393e84313ebd848f3ace132c9dd953e691f6a_Nike_Air_Jordan_1_Mid_Banned_Black__Gym_Red__White_554724_074_2_480x480_crop_center.jpg?v=1629512260'
const jordan1IMG =
'https://cdn.shopify.com/s/files/1/0705/8373/products/Lace_Lab_-_Sail_Jordan_1_Replacement_Laces_600x.jpg?v=1591991124'

const productList = {
 products : [
	{
		title: 'Jordan 1 reds',
		imageUrl: jordan1RImg,
		price: 2000.99,
		description: 'Made with human real hair!',
	},
	{
		title: 'Jordan 1',
		imageUrl: jordan1IMG,
		price: 1999.99,
		description: 'the Last shoe Jordan Himself wore',
	},
],
render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    // for(const prod of this.products){
    //     const prodEl = document.createElement('li');
    //     prodEl.className = 'product-item';
    //     prodEl.innerHTML = `
    //     <div>
    //         <img src="${prod.imageUrl}" alt="${prod.title}">
    //       <div class = "product-item__content">
    //         <h2>${prod.title}</h2>
    //         <h3>$${prod.price}</h3>
    //         <p>${prod.description}</p>
    //         <button>ADD to Cart</button>
    //       </div>
    //     </div>
    //     `;
    //     prodList.append(prodEl)
    // }
    this.products.forEach(prod=>{
			    const prodEl = document.createElement('li');
			    prodEl.className = 'product-item';
			    prodEl.innerHTML = `
			    <div>
			        <img src="${prod.imageUrl}" alt="${prod.title}">
			      <div class = "product-item__content">
			        <h2>${prod.title}</h2>
			        <h3>$${prod.price}</h3>
			        <p>${prod.description}</p>
			        <button>ADD to Cart</button>
			      </div>
			    </div>
			    `;
			    prodList.append(prodEl)
		})
    renderHook.append(prodList);
}

};

productList.render();

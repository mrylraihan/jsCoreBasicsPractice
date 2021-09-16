//pillow
const jordan1RImg =
	'https://cdn.shopify.com/s/files/1/0473/6965/0340/products/f54393e84313ebd848f3ace132c9dd953e691f6a_Nike_Air_Jordan_1_Mid_Banned_Black__Gym_Red__White_554724_074_2_480x480_crop_center.jpg?v=1629512260'
const jordan1IMG =
	'https://cdn.shopify.com/s/files/1/0705/8373/products/Lace_Lab_-_Sail_Jordan_1_Replacement_Laces_600x.jpg?v=1591991124'

class Product {
	title = 'DEFAULT'
	imageUrl
	description
	price

	constructor(title, image, desc, price) {
		this.title = title
		this.imageUrl = image
		this.description = desc
		this.price = price
	}
}

class ProductList {
	products = [
		new Product(
			'Jordan 1 reds',
			jordan1RImg,
			'Made with human real hair!',
			2000.99
		),
		new Product(
			'Jordan 1 blues',
			jordan1IMG,
			'the Last shoe Jordan Himself wore',
			1999.54
		),
	]

	constructor() {}

	render() {
		const prodList = document.createElement('ul')
		prodList.className = 'product-list'
		for (const prod of this.products) {
			const productItem = new ProductItem(prod)
			const prodEl = productItem.render()
			prodList.append(prodEl)
		}
		return prodList
	}
}
class ShoppingCart {
	items = []
	render() {
		const cartEl = document.createElement('section')
		cartEl.innerHTML = `
		<h2>Total: \$${0}</h2>
		<button>Order Now!</button>
		`
		cartEl.className = 'cart'
		return cartEl
	}
}
class ProductItem {
	constructor(product) {
		this.product = product
	}

	addToCart() {
		console.log('adding product to cart')
		console.log(this.product)
	}

	render() {
		const prodEl = document.createElement('li')
		prodEl.className = 'product-item'
		prodEl.innerHTML = `
				<div>
				<img src="${this.product.imageUrl}" alt="${this.product.title}">
				<div class = "product-item__content">
				<h2>${this.product.title}</h2>
				<h3>$${this.product.price}</h3>
				<p>${this.product.description}</p>
				<button>ADD to Cart</button>
				</div>
				</div>
				`
		const addCartButton = prodEl.querySelector('button')
		addCartButton.addEventListener('click', this.addToCart.bind(this))
		return prodEl
	}
}

class Shop {
	render() {
		const renderHook = document.getElementById('app')
		const cart = new ShoppingCart()
		const cartEl = cart.render()
		const productList = new ProductList()
		const prodListEl = productList.render()

		renderHook.append(cartEl)
		renderHook.append(prodListEl)
	}
}

const shop = new Shop();
shop.render();
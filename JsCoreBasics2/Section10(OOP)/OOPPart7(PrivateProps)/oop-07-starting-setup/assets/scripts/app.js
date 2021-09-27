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

class Component {
	constructor(renderHookId, shouldRender = true){
		this.hookId = renderHookId;
		if (shouldRender) {
			this.render();
		}
			
	}
	render(){};

	createRootElement(tag,cssClasses, attributes){
		const rootElement = document.createElement(tag);
		if (cssClasses) {
			rootElement.className = cssClasses;
		}
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}
		}
		document.getElementById(this.hookId).append(rootElement);
		return rootElement;
	}
}
class ProductList extends Component{
	#products = [];

	constructor(renderHookId) {
		super(renderHookId, false);
		this.render();
		this.#fetchProducts();
	}
	#fetchProducts(){
		this.#products = [
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
		];
		this.renderProducts();
	}
	renderProducts(){
		for (const prod of this.#products) {
			new ProductItem(prod, 'prod-list')
		}

	}
	render() {
		this.createRootElement('ul', 'product-list',[new ElementAttribute('id','prod-list')])
		if (this.#products && this.#products.length > 0) {
			this.renderProducts();
		}
	}
}
class ElementAttribute{
	constructor(attrName, attrValue){
		this.name = attrName;
		this.value = attrValue;
	}
}


class ShoppingCart extends Component{
	items = [];
	
	set cartItems(value){
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`
		
	}
	
	get totalAmount(){
		const sum =this.items.reduce((preV, curItem)=>preV + curItem.price,0)
		return sum;
	}
	
	constructor(renderHookId){
		super(renderHookId, false);
		this.orderProducts = () => {
			console.log('Ordering...')
			console.log(this.items)
		}
		this.render();
	}
	
	addProduct(product){
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = this.createRootElement('section', 'cart')
		cartEl.innerHTML = `
		<h2>Total: \$${0}</h2>
		<button>Order Now!</button>
		`;
		const orderButton = cartEl.querySelector('button');
		// orderButton.addEventListener('click', ()=> this.orderProducts());
		orderButton.addEventListener('click', ()=> this.orderProducts);
		this.totalOutput = cartEl.querySelector('h2');
	}
}
class ProductItem extends Component{
	constructor(product, renderHookId) {
		super(renderHookId,false)
		this.product = product;
		this.render();
	}
	
	addToCart() {
		App.addProductToCart(this.product)
		
	}
	
	render() {
		const prodEl = this.createRootElement('li','product-item');
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
	}
}

class Shop extends Component{
	constructor(){
		super();
	}
	render() {
		this.cart = new ShoppingCart('app')
		new ProductList('app')
	
	}
}

class App {
	static cart;
	
	static init(){
		const shop = new Shop();
		this.cart = shop.cart;
	}
	static addProductToCart(product){
		this.cart.addProduct(product)
	}
}

App.init();
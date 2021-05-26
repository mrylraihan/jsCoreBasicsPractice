//with different Render 
class Product {
  title = "Default";
  imageUrl;
  price;
  description;
  ratings;

  constructor(title, image, desc, price, ratings) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
    this.ratings = ratings;
  }
}


class Component{
  constructor(renderHookId){
    this.hookId = renderHookId;
  }

  createRootElement(tag,cssClasses,attributes){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length > 0){
      for(const attr of attributes){
        rootElement.setAttribute(attr.name,attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}



class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addtoCart() {
  App.addProductToCart(this.product);
  }

  renderProductItem() {
    const prodEl = this.createRootElement('li','product-item');
    prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <p>${this.product.ratings}</p>
        <button>Add to Cart</button>
        </div>
        </div>
        `;
    const addCartBTn = prodEl.querySelector("button");
    addCartBTn.addEventListener("click", this.addtoCart.bind(this));
  }
}
class ElementAttribute{
  constructor(attrName,attrValue){
    this.name = attrName;
    this.value = attrValue;
  }
}


class ShoppingCart extends Component{
  items = [];

  set cartItems(value){
    this.items = value;
    this.totalCartOutPut.innerHTML = `<h2>Total : \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    const sum = this.items.reduce((preValue,curItem)=>{
      return preValue + curItem.price;
    },0);
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;

  }

  renderShoppingCart() {
    const cartEl = this.createRootElement('section','cart');
    cartEl.innerHTML = `
    <h2>Total : \$${0}</h2>
    <button>'Order Now!</button>
    `;
    this.totalCartOutPut = cartEl.querySelector('h2');
   
  }
}



class ProductList extends Component {
  products = [
    new Product(
      "pillow",
      "data:image/jpeg;base64,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",
      "very soft",
      98.99,
      "5 stars"
    ),

    new Product(
      "couch",
      "https://img.castlery.co/products/images/148177/large_gray/Pebble-2-Seater-Sofa-Forest_Green-Front.jpg?1583380091",
      "very soft",
      198.99,
      "5 stars"
    ),

    new Product(
      "bed",
      "https://secure.img1-fg.wfcdn.com/im/68411956/resize-h800%5Ecompr-r85/1376/137611921/Lafever+Upholstered+Sleigh+Bed.jpg",
      "extra hard for back problems only",
      250.0,
      "3.5 stars"
    ),
    new Product(
      "chair",
      "https://spy.com/wp-content/uploads/2020/08/Aeron-Chair-Featured-Image.jpg?w=958&h=599&crop=1",
      "extra hard for back problems only",
      1050.0,
      "4.5 stars"
    ),
  ];
  constructor(renderHookId) {
    super(renderHookId);
  }
  render() {
   this.createRootElement('ul', 'product-list', [new ElementAttribute('id','prod-list')]);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      productItem.renderProductItem();
    }

    
  }
}


class ShopPage {
  renderShopPage() {
    this.cart = new ShoppingCart('app');
    this.cart.renderShoppingCart();
    const productList = new ProductList('app');
    productList.render();

  }
}


class App {
  static cart;
  
  static init() {
    const shop = new ShopPage();
    shop.renderShopPage();
    this.cart = shop.cart;
    
  }
  static addProductToCart(product){
    this.cart.addProduct(product); 
  }
}

App.init();
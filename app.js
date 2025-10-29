// Product Data
const products = [
  { id: 60, name: "Abyssal Sovereign Tote Bag", price: 15, img: "images/artist/Abyssal Sovereign Tote Bag.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 61, name: "Omamori Lucky Bag Dragon", price: 8.25, img: "images/artist/Omamori Lucky Bag Dragon.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 62, name: "Crow Phone Charm Keychain", price: 8.5, img: "images/artist/Crow Phone Charm Keychain.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 64, name: "Room Stickers", price: 5, img: "images/artist/Room Stickers.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 65, name: "Silicon Pinch", price:23, img: "images/artist/Silicon Pinch.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 66, name: "Wedding Ring", price: 6.5, img: "images/artist/Wedding Ring.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 67, name: "Datura Ring Black", price: 8, img: "images/artist/Datura Ring Black.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 68, name: "Datura Ring Red", price: 8, img: "images/artist/Datura Ring Red.png", category: "Artist Authorised Merch", realImg: "images/rba.jpg"},
  { id: 58, name: "'Capture the Glimpses' Photo Card", price: 5, img: "images/Capture the Glimpses Photo Card.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 59, name: "'Capture the Glimpses' Identity Card Keychain", price: 23.5, img: "images/Capture the Glimpses Identity Card Keychain.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 50, name: "'Heartfelt Whispers' 58mm Badge", price: 8, img: "images/Heartfelt Whispers 58mm Badge.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 51, name: "'Heartfelt Whispers' Polaroid Card Sylus version", price: 5, img: "images/Heartfelt Whispers Polaroid Card Sylus version.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 52, name: "'Heartfelt Whispers' Chibi Standee Keychain", price: 15, img: "images/Heartfelt Whispers Chibi Standee Keychain.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 53, name: "'Heartfelt Whispers' Postcard Set", price: 6, img: "images/Heartfelt Whispers Postcard Set.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 54, name: "'Heartfelt Whispers' Chibi Hair Clip", price: 12, img: "images/Heartfelt Whispers Chibi Hair Clip.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 55, name: "'Heartfelt Whispers' 58mm Chibi Badge", price: 8, img: "images/Heartfelt Whispers 58mm Chibi Badge.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 56, name: "'Heartfelt Whispers' Acrylic Standee", price: 32, img: "images/Heartfelt Whispers Acrylic Standee.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 57, name: "'Heartfelt Whispers' File Folder", price: 10, img: "images/Heartfelt Whispers File Folder.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 46, name: "'Misty Invasion' 75mm Badge", price: 8.5, img: "images/Misty Invasion 75mm Badge.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 47, name: "'Misty Invasion' Magnetic Display Block", price: 38, img: "images/Misty Invasion Magnetic Display Block.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 48, name: "'Misty Invasion' Card Set", price: 12, img: "images/Misty Invasion Card Set.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 49, name: "'Misty Invasion' Blanket", price: 68, img: "images/Misty Invasion Blanket.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 43, name: "'Monments of Heartbeat' 58mm Badge", price: 8, img: "images/Monments of Heartbeat Badge.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 44, name: "'Monments of Heartbeat' Shikishi Board", price: 20, img: "images/Monments of Heartbeat Shikishi Board.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 45, name: "'Monments of Heartbeat' Postcard Sylus version", price: 5, img: "images/Monments of Heartbeat Postcard Sylus version.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 40, name: "'Embrace of Tender Heart' Plushy Pillow", price:80, img: "images/Embrace of Tender Heart Plushy Hugging Pillow.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 41, name: "'Embrace of Tender Heart' Phone Charm", price: 26, img: "images/Embrace of Tender Heart Plushy Phone Charm.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 42, name: "'Embrace of Tender Heart' Phone Grip", price: 15, img: "images/Embrace of Tender Heart Phone Grip.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 1, name: "'Abysm Sovereign' 58mm Badge A", price: 7, img: "images/58mm Badge.png", category: "Official Merch", realImg: "images/rba.jpg"},
  { id: 2, name: "'Abysm Sovereign' 58mm Badge B", price: 7, img: "images/B.png", category: "Official Merch", realImg: "images/rbb.jpg"},
  { id: 3, name: "'Abysm Sovereign' Square badge A", price: 8.5, img: "images/Square badge.png", category: "Official Merch", realImg: "images/sba.jpg"},
  { id: 4, name: "'Abysm Sovereign' Square badge B", price: 8.5, img: "images/Square badge.png", category: "Official Merch", realImg: "images/sbb.jpg" },
  { id: 5, name: "'Abysm Sovereign' Shikishi A", price: 18.5, img: "images/Shikishi.png", category: "Official Merch" },
  { id: 6, name: "'Abysm Sovereign' Shikishi B", price: 18.5, img: "images/ShikishiB.png", category: "Official Merch" },
  { id: 7, name: "'Abysm Sovereign' Multi-frame card", price: 12, img: "images/Multi-frame card.png", category: "Official Merch" },
  { id: 8, name: "'Abysm Sovereign' Standee", price: 35, img: "images/Standee.png", category: "Official Merch" },
  { id: 9, name: "'Abysm Sovereign' Quick Sand Block", price: 45, img: "images/Quick sand block.png", category: "Official Merch" },
  { id: 10, name: "'Abysm Sovereign' Hairband", price: 30, img: "images/Hairband.png", category: "Official Merch" },
  { id: 11, name: "'Abysm Sovereign' Silk Scarf", price: 68, img: "images/Scarf.png", category: "Official Merch" },
  { id: 12, name: "'Birthday' Metal Pin: Gifted Arrival", price: 8, img: "images/Birthday metal pin 1.png", category: "Official Merch" },
  { id: 13, name: "'Birthday' Metal Pin: Where Hearts Live ", price: 8, img: "images/Birthday metal pin 2.png", category: "Official Merch" },
  { id: 14, name: "'Birthday' Chibi Metal Pin Badge", price: 8, img: "images/Birthday chibi badge.png", category: "Official Merch" },
  { id: 15, name: "'Birthday' Polaroid Set", price: 12, img: "images/Birthday polaroid card.png", category: "Official Merch" },
  { id: 16, name: "'Birthday' Art Standee", price: 28, img: "images/Hairband.png", category: "Official Merch" },
  { id: 17, name: "'Birthday' Card Set", price: 10, img: "images/Birthday card set.png", category: "Official Merch" },
  { id: 18, name: "'Birthday' Plushie Keychain", price: 28, img: "images/Birthday plushie.png", category: "Official Merch" },
  { id: 19, name: "'Birthday' Arcylic Photocard", price: 10, img: "images/Birthday Arcylic Photocard.png", category: "Official Merch" },
  { id: 20, name: "'Opposing Visions' 58mm Badge", price: 8, img: "images/Opposing Visions 58mm badge.png", category: "Official Merch" },
  { id: 21, name: "'Opposing Visions' Double Frame Fan", price: 18, img: "images/Opposing Visions Fan.png", category: "Official Merch" },
  { id: 22, name: "'Opposing Visions' Banner", price: 30, img: "images/Opposing Visions Series Hand Scroll Tapestry Banner.png", category: "Official Merch" },
  { id: 23, name: "'Opposing Visions' Poster", price: 18, img: "images/Opposing Visions Poster.png", category: "Official Merch" },
  { id: 24, name: "'Opposing Visions' Postcard", price: 5, img: "images/Opposing Visions Postcard.png", category: "Official Merch" },
  { id: 25, name: "'Apple Collaboration' Postcard", price: 5, img: "images/Apple Collaboration Postcard.png", category: "Official Merch" },
  { id: 26, name: "'Lawson Sweet Symphony' 75mm Badge", price: 8.5, img: "images/Lawson Sweet Symphony 75mm Badge.png", category: "Official Merch" },
  { id: 27, name: "'Lawson Sweet Symphony' Bookmark", price: 5, img: "images/Lawson Sweet Symphony Bookmark.png", category: "Official Merch" },
  { id: 28, name: "'Lawson Sweet Symphony' Photocard", price: 6.5, img: "images/Lawson Sweet Symphony Photocard.png", category: "Official Merch" },
  { id: 29, name: "'Lawson Sweet Symphony' Spring Swing Standee", price: 20, img: "images/Lawson Sweet Symphony Spring Swing Standee.png", category: "Official Merch" },
  { id: 30, name: "'Lawson Sweet Symphony' Standee", price: 28, img: "images/Lawson Sweet Symphony Standee.png", category: "Official Merch" },
  { id: 31, name: "'Heartfelt Moment' Badge", price: 8, img: "images/Heartfelt Moment Badge.png", category: "Official Merch" },
  { id: 32, name: "'Heartfelt Moment' Message Board Standee", price: 30, img: "images/Heartfelt Moment Message Board Standee.png", category: "Official Merch" },
  { id: 33, name: "'Heartfelt Moment' Photo Sticker Set", price: 10, img: "images/Heartfelt Moment Photo Sticker Set.png", category: "Official Merch" },
  { id: 34, name: "'Linkon News'Acrylic Pen Holder Standee", price: 28, img: "images/Linkon News Chibi Acrylic Pen Holder Standee.png", category: "Official Merch" },
  { id: 35, name: "'Meow's Time (Yuyuan)' Acrylic Standee", price: 20, img: "images/Meows Time (Yuyuan) Acrylic Standee.png", category: "Official Merch" },
  { id: 36, name: "'Meow's Time (Yuyuan)' Card Holder Keychain", price: 20, img: "images/Meows Time (Yuyuan) Card Holder Keychain.png", category: "Official Merch" },
  { id: 37, name: "'Meow's Time (Yuyuan)' Commemorative Coin", price: 20, img: "images/Meows Time (Yuyuan) Commemorative Coin.png", category: "Official Merch" },
  { id: 38, name: "'Meow's Time (Yuyuan)' Oval Chain Badge", price: 12, img: "images/Meows Time (Yuyuan) Oval Chain Metal Pin Badge.png", category: "Official Merch" },
  { id: 39, name: "'Meow's Time (Yuyuan)' Photocard Sylus version", price: 5, img: "images/Meows Time (Yuyuan) Photocard Sylus version.png", category: "Official Merch" }
];


let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
let filteredProducts = [...products];


// === 搜索/分类/排序 ===
function applyFilters() {
  const searchText = document.getElementById("search-input").value.toLowerCase();
  const category = document.getElementById("category-select").value;

  filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchText);
    const matchCategory = category === "all" || p.category === category;
    return matchSearch && matchCategory;
  });
  renderProducts();
}

// === 渲染商品列表 ===
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  filteredProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>€${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// ==========================
// 添加到购物车
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // 保存到 sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

// ==========================
// 从购物车移除
function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ==========================
// 渲染购物车
function renderCart() {
  const cartList = document.getElementById("cart-list");
  if (!cartList) return;
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "8px";
    div.style.marginBottom = "6px";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "5px";

    const span = document.createElement("span");
    span.innerText = `${item.name} ×${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`;

    const button = document.createElement("button");
    button.innerText = "Remove One";
    button.onclick = () => removeFromCart(item.id);

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);

    cartList.appendChild(div);
  });

  document.getElementById("total-price").innerText = "€" + total.toFixed(2);

  // 刷新 PayPal 按钮（如果有）
  renderPayPalButton();

  // 同步右上角购物车数量
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = count;
  }
}

// ==========================
// 页面加载时渲染
window.onload = () => {
  renderCart();
  applyFilters();

  const user = localStorage.getItem("user");
  if (user) document.getElementById("user-info").innerText = "Current User: " + user;
};

// === PayPal 按钮 ===
function renderPayPalButton() {
  const container = document.getElementById("paypal-button-container");
  container.innerHTML="";

  if(cart.length===0 || typeof paypal==="undefined") return;

  paypal.Buttons({
    createOrder: function(data, actions){
      const totalAmount = cart.reduce((sum,item)=>sum+item.price*item.quantity,0).toFixed(2);
      return actions.order.create({
        purchase_units:[{
          amount:{ value: totalAmount, currency_code:"EUR" },
          description:"Cart Checkout"
        }]
      });
    },
    onApprove: function(data, actions){
      return actions.order.capture().then(details=>{
        alert(`✅ Payment successful! Thank you, ${details.payer.name.given_name}.`);
        cart=[];
        renderCart();
      });
    },
    onCancel:function(){ alert("Payment cancelled."); },
    onError:function(err){ console.error(err); alert("Payment error."); }
  }).render("#paypal-button-container");
}

// === 初始化 ===
window.onload = () => {
  applyFilters();
  renderCart();
  const user = localStorage.getItem("user");
  if(user) document.getElementById("user-info").innerText = "Current User: "+user;
};





// ==========================
// 🛒 购物车图标交互逻辑
// ==========================
const cartIcon = document.getElementById("cart-icon");
const cartPopup = document.getElementById("cart-popup");
const cartCount = document.getElementById("cart-count");

cartIcon.addEventListener("click", () => {
  cartPopup.classList.toggle("hidden");
});

// 更新购物车数量显示
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// 修改 renderCart() 函数的最后一行，加上：
function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");
  if (!cartList || !cartCount) return;

  cartList.innerHTML = "";
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    const img = document.createElement("img");
    img.src = item.img;  // 缩略图
    img.alt = item.name;

    const span = document.createElement("span");
    span.innerText = `${item.name} ×${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`;

    const button = document.createElement("button");
    button.innerText = "Remove";
    button.onclick = () => removeFromCart(item.id);

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);
    cartList.appendChild(div);
  });

  document.getElementById("total-price").innerText = "€" + total.toFixed(2);

  renderPayPalButton(); // 刷新 PayPal
}


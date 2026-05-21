(function(){
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
  const money = value => '$' + Number(value).toLocaleString('en-AU', {
    minimumFractionDigits: value % 1 ? 2 : 0,
    maximumFractionDigits: 2
  });
  const moneyFixed = value => '$' + Number(value).toLocaleString('en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const aud = value => 'AUD$' + Number(value).toLocaleString('en-AU', { maximumFractionDigits: 0 });

  
  const path = () => {
    const fileName = location.pathname.split('/').pop() || 'home.html';
    return fileName.split('?')[0];
  };

  const productsData = [
    {
      "id": "herald",
      "title": "The Herald",
      "artist": "Emma Coombes",
      "price": 600,
      "originalPrice": 850,
      "category": "warm",
      "image": "assets/the-herald.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "The Herald captures the ethereal beauty of a shifting sky...",
      "specs": {
        "Medium": "Giclee Print on Archival Cotton Rag",
        "Edition": "Limited edition of 25",
        "Dimensions": "59.4 x 42.0 cm",
        "Framing": "Unframed",
        "Paper Weight": "310gsm"
      },
      "aboutArtist": "Emma Coombes is a contemporary landscape artist..."
    },
    {
      "id": "neon-57",
      "title": "Neon 57",
      "artist": "Mark Rein",
      "price": 1550,
      "category": "warm",
      "image": "assets/neon-57.png",
      "roomImage": "assets/neon-57.png",
      "description": "A vibrant exploration of urban energy...",
      "specs": {
        "Medium": "Acrylic on Canvas",
        "Edition": "Original Artwork",
        "Dimensions": "100 x 100 cm",
        "Framing": "Stretched Canvas",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Mark Rein is known for his large-scale abstract works..."
    },
    {
      "id": "zen-xii",
      "title": "Zen XII Ltd Ed Print",
      "artist": "Elie Bittoun",
      "price": 1200,
      "category": "cold",
      "image": "assets/zen-xii.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Zen XII is a study in minimalism...",
      "specs": {
        "Medium": "Fine Art Print",
        "Edition": "Limited edition of 50",
        "Dimensions": "80 x 80 cm",
        "Framing": "Unframed",
        "Paper Weight": "300gsm"
      },
      "aboutArtist": "Elie Bittoun explores themes of silence and space..."
    },
    {
      "id": "wishing-tree",
      "title": "The Wishing Tree",
      "artist": "Peter Masters",
      "price": 1100,
      "category": "warm",
      "image": "assets/wishing-tree.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "A whimsical depiction of a mythical tree...",
      "specs": {
        "Medium": "Oil on Canvas",
        "Edition": "Original Artwork",
        "Dimensions": "120 x 90 cm",
        "Framing": "Custom Frame",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Peter Masters is a storyteller through paint..."
    },
    {
      "id": "city-beach",
      "title": "City Beach No 1",
      "artist": "Chris Dark",
      "price": 1000,
      "originalPrice": 1200,
      "category": "cold",
      "image": "assets/city-beach.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Aerial perspective of the coastline...",
      "specs": {
        "Medium": "Photography",
        "Edition": "Limited edition of 10",
        "Dimensions": "100 x 100 cm",
        "Framing": "Shadow Box",
        "Paper Weight": "310gsm RAG"
      },
      "aboutArtist": "Chris Dark is a coastal photographer..."
    },
    {
      "id": "cirrus",
      "title": "Cirrus 102/83",
      "artist": "Grayson Cooke",
      "price": 685,
      "originalPrice": 900,
      "category": "cold",
      "image": "assets/cirrus.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Exploring meteorological phenomena...",
      "specs": {
        "Medium": "Digital Fine Art Print",
        "Edition": "Limited edition of 30",
        "Dimensions": "60 x 60 cm",
        "Framing": "Unframed",
        "Paper Weight": "280gsm"
      },
      "aboutArtist": "Grayson Cooke is an interdisciplinary artist..."
    },
    {
      "id": "zebra",
      "title": "Zebra on Black",
      "artist": "Peter Masters",
      "price": 1100,
      "category": "warm",
      "image": "assets/zebra-on-black.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "Monochromatic portrait of a zebra...",
      "specs": {
        "Medium": "Charcoal and Pastel",
        "Edition": "Original Artwork",
        "Dimensions": "75 x 100 cm",
        "Framing": "Framed under glass",
        "Paper Weight": "350gsm"
      },
      "aboutArtist": "Peter Masters is a master of texture and form..."
    },
    {
      "id": "another-place",
      "title": "Another Place No 1",
      "artist": "Chris Dark",
      "price": 1350,
      "category": "cold",
      "image": "assets/another-place.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Coastal isolation and distant horizon...",
      "specs": {
        "Medium": "Mixed Media",
        "Edition": "Original Artwork",
        "Dimensions": "90 x 90 cm",
        "Framing": "Oak Floating Frame",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Chris Dark's work is held in private collections..."
    },
    {
      "id": "endurance",
      "title": "Endurance",
      "artist": "Chris Dark",
      "price": 2000,
      "category": "cold",
      "image": "assets/endurance.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Sea energy against steadfast cliffs...",
      "specs": {
        "Medium": "Oil on Canvas",
        "Edition": "Original Artwork",
        "Dimensions": "150 x 100 cm",
        "Framing": "Stretched",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Chris Dark spends weeks on location..."
    },
    {
      "id": "portrait-study",
      "title": "Portrait Study in Black",
      "artist": "Emma Coombes",
      "price": 850,
      "category": "warm",
      "image": "assets/intro-portrait.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "Dramatic light and shadow on human form...",
      "specs": {
        "Medium": "Acrylic on Paper",
        "Edition": "Original Artwork",
        "Dimensions": "50 x 70 cm",
        "Framing": "Black Modern Frame",
        "Paper Weight": "400gsm"
      },
      "aboutArtist": "Emma's portraiture is sought after..."
    },
    {
      "id": "still-life-vases",
      "title": "Still Life Vases",
      "artist": "Elie Bittoun",
      "price": 950,
      "category": "warm",
      "image": "assets/intro-vases.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "Modern take on classic still life...",
      "specs": {
        "Medium": "Giclee Print",
        "Edition": "Limited edition of 100",
        "Dimensions": "40 x 50 cm",
        "Framing": "Minimalist White Frame",
        "Paper Weight": "310gsm"
      },
      "aboutArtist": "Elie's still life works are celebrated..."
    },
  ];

  let currentFilter = 'all';
  let currentSort = null;

  function navigateSearch(term){
    location.href = `search-results.html?q=${encodeURIComponent(term || '')}`;
  }

  function chooseLayout(type){
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const qParam = query ? `?q=${encodeURIComponent(query)}` : '';
    const current = path();
    const isSearch = current.startsWith('search-results');
    const isList = current.startsWith('product-list');
    if(type === 'vertical'){
      if(isSearch) location.href = 'search-results-vertical.html' + qParam;
      else if(isList) location.href = 'product-list2.html';
      else location.href = 'product-list2.html';
      return;
    }
    if(isSearch) location.href = 'search-results.html' + qParam;
    else if(isList) location.href = 'product-list.html';
    else location.href = 'product-list.html';
  }

  function matchesSearch(product, query) {
   const q = query.toLowerCase().trim();
   const text = (product.title + product.artist + product.category).toLowerCase();
   return text.includes(q);
}

  function updateSearchLayoutLinks() {
}

  function filterCards(category) {
    currentFilter = category;
    renderProductList();
  }

  function sortCards(dir) {
    currentSort = dir;
    renderProductList();
  }

  async function renderProductList() {
    const grid = $('.art-grid');
    if (!grid) return;
    const urlParams = new URLSearchParams(window.location.search);
    const rawQuery = urlParams.get('q');
    const query = rawQuery?.toLowerCase();
    const isVertical = grid.classList.contains('two-col');
    const wishlist = getWishlist();
    let products = [...productsData];

    if (query) {
      products = products.filter(p => matchesSearch(p, query));
    }

    if (currentFilter !== 'all') {
      products = products.filter(p => p.category === currentFilter);
    }

    if (currentSort === 'asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'desc') {
      products.sort((a, b) => b.price - a.price);
    }

    const titleEl = $('.big-title');
    const countEl = $('.countbox .num');
    if (query && titleEl) {
      titleEl.textContent = rawQuery;
      document.title = `Search Results - ${rawQuery}`;
    }
    if (countEl) countEl.textContent = products.length;
    updateSearchLayoutLinks();

    if (products.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1; padding:100px 0; text-align:center; font-family:Arial, sans-serif;">No artworks found.</div>';
      return;
    }

    grid.innerHTML = products.map(p => {
      const priceHtml = p.originalPrice
        ? `<span class="old-price">${money(p.originalPrice).replace('.00','')}</span> AUD${money(p.price).replace('.00','')}`
        : `AUD${money(p.price).replace('.00','')}`;
      const isFav = wishlist.includes(p.id);
      return `
        <article class="art-card" data-price="${p.price}" data-category="${p.category}">
          <a class="art-img-wrap" href="product-pages.html?id=${p.id}">
            <img class="${(p.id === 'neon-57' || isVertical) ? 'art-img-wide' : ''}" src="${p.image}" alt="${p.title}" />
          </a>
          <div class="art-meta">
            <a href="product-pages.html?id=${p.id}">
              <h3 class="art-title">${p.title}</h3>
              <p class="art-artist">${p.artist}</p>
            </a>
            <button class="fav ${isFav ? 'is-on' : ''}" data-wish-id="${p.id}" aria-label="Add to wishlist">
              ${isFav ? '♥' : '♡'}
            </button>
          </div>
          <div class="price">${priceHtml}</div>
        </article>
      `;
    }).join('');
  }

  async function renderProductPages() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) return;
    const product = productsData.find(p => p.id === productId);
    if (!product) {
      const content = $('#productPagesContent');
      if(content) content.innerHTML = '<div style="padding:100px;text-align:center;font-family:Arial, sans-serif;"><h1>Product not found</h1><a href="product-list.html" style="text-decoration:underline">Back to List</a></div>';
      return;
    }
    const specsHtml = Object.entries(product.specs).map(([label, value]) =>
      `<div class="spec-row"><div class="label">${label}</div><div>${value}</div></div>`
    ).join('');
    const content = $('#productPagesContent');
    if(!content) return;
    document.title = `${product.title} - Art Lovers Australia`;
    const detailPriceHtml = product.originalPrice
      ? `<span class="old-price detail">${money(product.originalPrice).replace('.00','')}</span> AUD${money(product.price).replace('.00','')}`
      : `AUD${money(product.price).replace('.00','')}`;
    const isFav = getWishlist().includes(product.id);
    content.innerHTML = `
      <div class="content">
        <nav class="breadcrumb">
          <a href="home.html">Home</a>
          <span class="chev">›</span>
          <a href="product-list.html">List</a>
          <span class="chev">›</span>
          <span>${product.title}</span>
        </nav>
      </div>
      <section class="product-hero">
        <div class="product-gallery">
          <img class="main-art" src="${product.image}" alt="${product.title}" />
          <div class="pager"><span class="active"></span><span></span></div>
        </div>
        <div class="product-info ${product.id}" data-base-price="${product.price}">
          <h1 class="product-title">${product.title.replace(' ', '<br/>')}</h1>
          <div class="byline">BY ${product.artist}</div>
          <div class="product-desc"><p>${product.description}</p></div>
          <div class="qty-price">
            <div class="price-row">
              <span class="price-label">Investment</span>
              <span class="product-price">${detailPriceHtml}</span>
            </div>
            <div class="price-row">
              <span class="price-label">Quantity</span>
              <div class="qty-control">
                <button data-qty="minus">−</button>
                <span class="product-qty">1</span>
                <button data-qty="plus">+</button>
              </div>
            </div>
          </div>
          <div class="product-actions">
            <button class="wish-btn fav ${isFav ? 'is-on' : ''}" data-wish-id="${product.id}" aria-label="Add to wishlist">
              ${isFav ? '♥' : '♡'}
            </button>
            <button class="add-cart" data-add-cart>Add to cart</button>
          </div>
        </div>
      </section>
      <section class="info-band">
        <div class="info-cards">
          <div class="info-card">
            <h3>Details Information</h3>
            ${specsHtml}
          </div>
          <div class="info-card">
            <h3>About the Artist</h3>
            <p class="about-artist-text">${product.aboutArtist}</p>
            <div class="shipping-line">7 day returns guaranteed</div>
            <div class="shipping-line">Free Shipping Australia Wide</div>
          </div>
        </div>
      </section>
    `;
    initProductQty();
    initGalleryCarousel(product.image, product.roomImage);
  }

    function initGalleryCarousel(imgSrc, roomSrc) {
    const gallery = $('.product-gallery');
    if (!gallery) return;
    const img = $('img.main-art', gallery);
    const dots = $$('.pager span', gallery);
    if (!img || dots.length < 2) return;

    const sources = [imgSrc, roomSrc];
    let current = 0;

    function switchImg(index) {
      index = index % sources.length;
      current = index;
      img.classList.add('fade');
      setTimeout(() => {
        img.src = sources[current];
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        img.classList.remove('fade');
      }, 300);
    }
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => switchImg(current + 1));
  }

function injectModals(){
    if($('#prototype-modals')) return;
    const wrap = document.createElement('div');
    wrap.id = 'prototype-modals';
    wrap.innerHTML = `
      <div class="modal search-modal" id="searchModal" aria-hidden="true">
        <div class="modal-panel" role="dialog" aria-modal="true" aria-label="Search">
          <button class="modal-close" data-close-modal aria-label="Close">×</button>
          <form class="search-form" id="searchForm">
            <input id="searchInput" type="search" autocomplete="off" value="" aria-label="Search artwork" />
            <button type="submit" aria-label="Submit search">
              <span class="icon search"></span>
            </button>
          </form>
          <div class="suggestions">
            <button data-search-term="Cold">Cold</button>
            <button data-search-term="Warm">Warm</button>
            <button data-search-term="Emma Coombes">Emma Coombes</button>
          </div>
        </div>
      </div>
      <div class="toast" id="toast">Added to cart</div>
    `;
    document.body.appendChild(wrap);
  }

function openModal(id){
  const modal = document.getElementById(id);
  if(!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  const input = $('#searchInput', modal);
  if(input) setTimeout(()=>input.focus(), 40);
}

function closeModals(){ 
  $$('.modal').forEach(m => { 
    m.classList.remove('show'); 
    m.setAttribute('aria-hidden','true'); 
  }); 
}

function showToast(text){
  const toast = $('#toast'); 
  if(!toast) return;
  toast.textContent = text; 
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(()=>toast.classList.remove('show'), 1400);
}

 function getCart() { return JSON.parse(localStorage.getItem('artCart') || '[]'); }
  function saveCart(cart) { localStorage.setItem('artCart', JSON.stringify(cart)); }
  function getWishlist() { return JSON.parse(localStorage.getItem('artWishlist') || '[]'); }
  function saveWishlist(list) { localStorage.setItem('artWishlist', JSON.stringify(list)); }

  function toggleWishlist(productId) {
    let list = getWishlist();
    const index = list.indexOf(productId);
    if (index > -1) {
      list.splice(index, 1);
      showToast('Removed from wishlist');
    } else {
      list.push(productId);
      showToast('Added to wishlist');
    }
    saveWishlist(list);
    if (path() === 'wishlist.html') renderWishlist();
  }

  function renderWishlist() {
    const grid = $('#wishlistGrid');
    const emptyMsg = $('#emptyMsg');
    const countNode = $('#wishCount');
    if (!grid) return;
    const wishlist = getWishlist();
    const products = productsData.filter(p => wishlist.includes(p.id));
    if (countNode) countNode.textContent = products.length;
    if (products.length === 0) {
      grid.innerHTML = '';
      if(emptyMsg) emptyMsg.style.display = 'block';
      return;
    }
    if(emptyMsg) emptyMsg.style.display = 'none';
    grid.innerHTML = products.map(p => {
      const priceHtml = p.originalPrice
        ? `<span class="old-price">${money(p.originalPrice).replace('.00','')}</span> AUD${money(p.price).replace('.00','')}`
        : `AUD${money(p.price).replace('.00','')}`;
      return `
        <article class="art-card" data-id="${p.id}">
          <a class="art-img-wrap" href="product-pages.html?id=${p.id}">
            <img src="${p.image}" alt="${p.title}" />
          </a>
          <div class="art-meta">
            <a href="product-pages.html?id=${p.id}">
              <h3 class="art-title">${p.title}</h3>
              <p class="art-artist">${p.artist}</p>
            </a>
            <button class="fav is-on" data-wish-id="${p.id}" aria-label="Remove from wishlist">♥</button>
          </div>
          <div class="price">${priceHtml}</div>
        </article>
      `;
    }).join('');
  }

  function addToCart(productId, qty) {
    const cart = getCart();
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ id: product.id, title: product.title, artist: product.artist, price: product.price, image: product.image, qty });
    saveCart(cart);
    showToast('Added to cart');
  }

  function removeFromCart(productId) {
    saveCart(getCart().filter(item => item.id !== productId));
    renderCart();
  }

  function updateCartQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, item.qty + delta);
      saveCart(cart);
      renderCart();
    }
  }

  function renderCart(){
    const cartList = $('.cart-list');
    if(!cartList) return;
    const cart = getCart();
    if (cart.length === 0) {
      cartList.innerHTML = '<div style="padding:40px 0; font-family:Arial, sans-serif;">Your cart is empty. <a href="product-list.html" style="text-decoration:underline">Shop Art</a></div>';
      updateCartSummary(0);
      return;
    }
    cartList.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}" data-price="${item.price}">
        <div class="select-dot checked"></div>
        <img class="cart-thumb" src="${item.image}" alt="${item.title}" />
        <div class="cart-copy">
          <h3>${item.title}</h3>
          <p>${item.artist}</p>
          <button class="remove" data-remove-id="${item.id}">Remove</button>
        </div>
        <div class="qty-stack">
          <div class="qty-caption">QTY</div>
          <div class="cart-qty">
            <button data-cart-qty="minus" data-id="${item.id}">−</button>
            <input type="text" value="${item.qty}" readonly />
            <button data-cart-qty="plus" data-id="${item.id}">+</button>
          </div>
          <div class="price-caption">PRICE</div>
          <div class="item-price">AUD${money(item.price * item.qty).replace('.00','')}</div>
        </div>
      </div>
    `).join('');
    recalcCart();
  }

   function recalcCart() {
    let subtotal = 0;
    $$('.cart-item').forEach(item => {
      if ($('.select-dot', item).classList.contains('checked')) {
        subtotal += Number(item.dataset.price) * Number($('.cart-qty input', item).value);
      }
    });
    updateCartSummary(subtotal);
  }

  function updateCartSummary(subtotal) {
    const tax = Math.round(subtotal * 0.0775);
    const total = subtotal + tax;
    const subNode = $('#summarySubtotal');
    const taxNode = $('#summaryTax');
    const totalNode = $('#summaryTotal');
    if(subNode) subNode.textContent = money(subtotal).replace('.00','');
    if(taxNode) taxNode.textContent = money(tax).replace('.00','');
    if(totalNode) totalNode.textContent = moneyFixed(total);
  }

  function initProductQty(){
    const product = $('.product-info');
    if(!product) return;
    const base = Number(product.dataset.basePrice || 0);
    const qty = $('.product-qty', product);
    const price = $('.product-price', product);
    $$('.qty-control button', product).forEach(btn=>{
      btn.addEventListener('click',()=>{
        let n = Number(qty.textContent || 1);
        if(btn.dataset.qty === 'minus') n = Math.max(1, n - 1);
        else n = n + 1;
        qty.textContent = n;
        if(price) {
          const pData = productsData.find(p => p.id === product.classList[1]);
          price.innerHTML = pData && pData.originalPrice
            ? `<span class="old-price detail">${money(pData.originalPrice * n).replace('.00','')}</span> AUD${money(base * n).replace('.00','')}`
            : `AUD${money(base * n).replace('.00','')}`;
        }
      });
    });
  }

  function bindEvents(){
    document.addEventListener('click', e=>{
      if(e.target.closest('[data-open-search]')){
        e.preventDefault();
        openModal('searchModal');
        return;
      }
      if(e.target.closest('[data-open-filter]')){
        e.preventDefault();
        const panel = document.querySelector('.filter-options');
        if(panel) panel.classList.toggle('show');
        return;
      }
      if(e.target.closest('[data-close-modal]') || e.target.classList.contains('modal')){
        e.preventDefault();
        closeModals();
        return;
      }
      const suggestion = e.target.closest('[data-search-term]');
      if(suggestion){
        e.preventDefault();
        closeModals();
        const input = $('#searchInput');
        if(input) input.value = suggestion.dataset.searchTerm;
        navigateSearch(suggestion.dataset.searchTerm);
        return;
      }
      const sort = e.target.closest('[data-sort]');
      if(sort){ e.preventDefault(); sortCards(sort.dataset.sort); return; }
      const filter = e.target.closest('[data-filter]');
      if(filter){ e.preventDefault(); filterCards(filter.dataset.filter); return; }
      const fav = e.target.closest('.fav');
      if(fav){
        e.preventDefault();
        const wishId = fav.dataset.wishId;
        if (wishId) {
          toggleWishlist(wishId);
          fav.classList.toggle('is-on');
          fav.textContent = fav.classList.contains('is-on') ? '♥' : '♡';
        }
        return;
      }
      const addCart = e.target.closest('[data-add-cart]');
      if(addCart){
        e.preventDefault();
        const pId = new URLSearchParams(window.location.search).get('id');
        const qty = Number($('.product-qty')?.textContent || 1);
        if (pId) {
          addToCart(pId, qty);
          setTimeout(()=>{ location.href='cart.html'; }, 800);
        }
        return;
      }
      if(e.target.closest('[data-remove-id]')){
        removeFromCart(e.target.closest('[data-remove-id]').dataset.removeId);
        return;
      }
      const cartQtyBtn = e.target.closest('[data-cart-qty]');
      if(cartQtyBtn){
        updateCartQty(cartQtyBtn.dataset.id, cartQtyBtn.dataset.cartQty === 'plus' ? 1 : -1);
        return;
      }
      if(e.target.closest('.select-dot')){
        e.target.closest('.select-dot').classList.toggle('checked');
        recalcCart();
        return;
      }
      if(e.target.closest('[data-back-top]')){
        e.preventDefault();
        window.scrollTo({top:0, behavior:'smooth'});
      }
    });
    document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModals(); });
    const searchForm = $('#searchForm');
    if(searchForm){
      searchForm.addEventListener('submit', e=>{
        e.preventDefault();
        closeModals();
        navigateSearch($('#searchInput').value.trim() || 'Cold colour');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectModals();
    bindEvents();
    initProductQty();
    const cur = path();
    if (cur.includes('product-list') || cur.includes('search-results')) {
      renderProductList();
    } else if (cur === 'product-pages.html') {
      renderProductPages();
    } else if (cur === 'cart.html') {
      renderCart();
    } else if (cur === 'wishlist.html') {
      renderWishlist();
    }
  });
});
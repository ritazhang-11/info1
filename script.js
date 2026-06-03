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
      "category": "cold",
      "image": "assets/the-herald.jpg",
      "roomImage": "assets/herald-room.jpg",
      "description": "The raven as herald stands at the entrance to his kingdom. A symbol of the mysteries that dwell within the forest.",
      "specs": {
        "Medium": "Giclee Print on Archival Cotton Rag",
        "Edition": "Limited edition of 25",
        "Dimensions": "59.4 x 42.0 cm",
        "Framing": "Unframed",
        "Paper Weight": "310gsm"
      },
      "aboutArtist": "Emma Coombes is a contemporary landscape artist."
    },
    {
      "id": "neon-57",
      "title": "Neon 57",
      "artist": "Mark Rein",
      "price": 1550,
      "category": "warm",
      "image": "assets/neon-57.png",
      "roomImage": "assets/neon-57 2.png",
      "description": "A charged and dynamic reinterpretation of the legendary.",
      "specs": {
        "Medium": "Acrylic on Canvas",
        "Edition": "Original Artwork",
        "Dimensions": "100 x 100 cm",
        "Framing": "Stretched Canvas",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Mark Rein is known for his large-scale abstract works."
    },
    {
      "id": "zen-xii",
      "title": "Zen XII Ltd Ed Print",
      "artist": "Elie Bittoun",
      "price": 1200,
      "category": "warm",
      "image": "assets/zen-xii.jpg",
      "roomImage": "assets/zen-xii 2.jpg",
      "description": "I portray both the beauty and complexity behind faces. Also available in various sizes on request.",
      "specs": {
        "Medium": "Digital artwork on wraparound canvas",
        "Edition": "Limited edition of 25",
        "Dimensions": "60 x 90 cm",
        "Framing": "Unframed",
        "Paper Weight": "300gsm"
      },
      "aboutArtist": "Elie Bittoun explores themes of silence and space."
    },
    {
      "id": "wishing-tree",
      "title": "The Wishing Tree",
      "artist": "Peter Masters",
      "price": 1100,
      "category": "warm",
      "image": "assets/wishing-tree.jpg",
      "roomImage": "assets/wishing-tree 2.jpg",
      "description": "In Asian cultures, cherry blossom trees symbolise bravery and wisdom. The snow covered white tree is a symbol of simplicity, purity and innocence.",
      "specs": {
        "Medium": "Giclee print on canvas",
        "Edition": "Limited Edition of 50",
        "Dimensions": "10 x 10 cm",
        "Framing": "Custom Frame",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Peter Masters is a storyteller through paint."
    },
    {
      "id": "city-beach",
      "title": "City Beach No 1",
      "artist": "Chris Dark",
      "price": 1000,
      "originalPrice": 1200,
      "category": "cold",
      "image": "assets/city-beach.jpg",
      "roomImage": "assets/city beach2.jpg",
      "description": "A young girl plays in the shallows of an ocean sand bar.",
      "specs": {
        "Medium": "Cotton RAG fine art matte paper",
        "Edition": "Limited edition of 22",
        "Dimensions": "60 x 70 cm",
        "Framing": "Shadow Box",
        "Paper Weight": "310gsm RAG"
      },
      "aboutArtist": "Chris Dark is a photographer."
    },
    {
      "id": "cirrus",
      "title": "Cirrus 102/83",
      "artist": "Grayson Cooke",
      "price": 685,
      "originalPrice": 900,
      "category": "cold",
      "image": "assets/cirrus.jpg",
      "roomImage": "assets/cirrus_detail.jpg",
      "description": "This image uses the Cirrus band, which is a very specific infrared wavelength range designed just to capture cirrus clouds, which are very high and very cold, and their wispy forms are treated by scientists as a kind of “noise” in satellite imaging. ",
      "specs": {
        "Medium": "Quality Hahnemuhle Photo",
        "Edition": "Limited edition of 50",
        "Dimensions": "80 x 80 cm",
        "Framing": "Unframed",
        "Paper Weight": "308gsm"
      },
      "aboutArtist": "Grayson Cooke is an interdisciplinary artist."
    },
    {
      "id": "zebra",
      "title": "Zebra on Black",
      "artist": "Peter Masters",
      "price": 1100,
      "category": "cold",
      "image": "assets/zebra-on-black.jpg",
      "roomImage": "assets/Zebrz-on-Black1.jpg",
      "description": "Grazing peacefully but alert and ready to run, always on the watch for danger.",
      "specs": {
        "Medium": "Giclee Print",
        "Edition": "Limited Edition of 25",
        "Dimensions": "75 x 100 cm",
        "Framing": "Unframed",
        "Paper Weight": "330gsm"
      },
      "aboutArtist": "Peter Masters is a master of texture and form."
    },
    {
      "id": "another-place",
      "title": "Another Place No 1",
      "artist": "Chris Dark",
      "price": 1350,
      "category": "cold",
      "image": "assets/another-place.jpg",
      "roomImage": "assets/Another Place 2.jpg",
      "description": "Digital photographic image taken at City Beach in Perth Western Australia.",
      "specs": {
        "Medium": "Cotton RAG fine art matte paper",
        "Edition": "Limited edition of 13",
        "Dimensions": "110 x 45 cm",
        "Framing": "Oak Floating Frame",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Chris Dark is a photographer."
    },
    {
      "id": "endurance",
      "title": "Endurance",
      "artist": "Chris Dark",
      "price": 2000,
      "category": "cold",
      "image": "assets/endurance.jpg",
      "roomImage": "assets/endurance2.jpg",
      "description": "This old sign post structure stands with nothing left to point to. A memory of purpose and place that has been erased almost entirely.",
      "specs": {
        "Medium": "Cotton RAG fine art matte paper",
        "Edition": "Limited edition of 13",
        "Dimensions": "100 x 110 cm",
        "Framing": "Stretched",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Chris Dark is a photographer."
    },
    {
      "id": "portrait-study",
      "title": "Cipher Ltd Ed Print",
      "artist": "Subroser",
      "price": 850,
      "category": "cold",
      "image": "assets/intro-portrait.jpg",
      "roomImage": "assets/portraits.jpg",
      "description": "Dramatic light and shadow on human form.",
      "specs": {
        "Medium": "Digital painting on Hahnemuhle photo",
        "Edition": "Original Artwork",
        "Dimensions": "50 x 70 cm",
        "Framing": "Black Modern Frame",
        "Paper Weight": "308gsm"
      },
      "aboutArtist": "Subroser's portraiture is sought after."
    },
    {
      "id": "still-life-vases",
      "title": "Three Pots with Orchids Ltd Ed Print",
      "artist": "Tabitha Stowe",
      "price": 950,
      "category": "warm",
      "image": "assets/intro-vases.jpg",
      "roomImage": "assets/vases2.jpg",
      "description": "A stunning addition to any wall in your home. Contempo pot canvas print with orchids",
      "specs": {
        "Medium": "Giclee print on canvas",
        "Edition": "Limited edition of 100",
        "Dimensions": "80 x 80 cm",
        "Framing": "Tasmanian oak float frame",
        "Paper Weight": "308gsm"
      },
      "aboutArtist": "Elie's works are celebrated."
    },
  ];

  let currentFilter = 'all';
  let currentSort = null;

  function navigateSearch(term){
    location.href = `product-list.html?q=${encodeURIComponent(term || '')}`;
  }

  function matchesSearch(product, query) {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    const text = `${product.title} ${product.artist} ${product.category}`.toLowerCase();
    if (text.includes(q)) return true;
    if (/\bcold\b/.test(q) && product.category === 'cold') return true;
    if (/\bwarm\b/.test(q) && product.category === 'warm') return true;
    return false;
  }

  function clearSearchQueryFromUrl() {
    const url = new URL(window.location.href);
    if (!url.searchParams.has('q')) return;
    url.searchParams.delete('q');
    const next = url.search ? `${url.pathname}${url.search}` : url.pathname;
    history.replaceState(null, '', next);
  }

  function updateSearchLayoutLinks() {
    const query = new URLSearchParams(window.location.search).get('q');
    const qParam = query ? `?q=${encodeURIComponent(query)}` : '';
    $$('.view-icons a.layout-icon').forEach(link => {
      const isVertical = link.classList.contains('three') === false && link.querySelectorAll('span').length <= 4;
      if (isVertical) {
        link.href = 'product-list2.html' + qParam;
      } else {
        link.href = 'product-list.html' + qParam;
      }
    });
  }
  function initSearchInput() {
    const input = $('#searchInput');
    if (!input) return;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        closeModals();
        navigateSearch(input.value.trim());
      }
    });
  }

  const DEFAULT_SEARCH_SUGGESTIONS = ['Cold', 'Warm', 'Chris Dark'];
  const DEFAULT_SEARCH_TERM = 'Cold colour';

  function getSearchInputDefault() {
    const query = new URLSearchParams(window.location.search).get('q');
    return query || DEFAULT_SEARCH_TERM;
  }
  
  function getSearchSuggestions() {
    try {
      const saved = JSON.parse(localStorage.getItem('artSearchSuggestions') || 'null');
      if (Array.isArray(saved) && saved.length) return saved.filter(Boolean);
    } catch (_) {}
    return [...DEFAULT_SEARCH_SUGGESTIONS];
  }
  
  function saveSearchSuggestions(list) {
    localStorage.setItem('artSearchSuggestions', JSON.stringify(list));
  }

  function removeSearchSuggestion(term) {
    const next = getSearchSuggestions().filter(item => item !== term);
    saveSearchSuggestions(next);
    renderSearchSuggestions();
  }
  
  function renderSearchSuggestions() {
    const container = $('#searchSuggestions');
    if (!container) return;
    const items = getSearchSuggestions();
    container.innerHTML = items.length
      ? items.map(term => `
          <div class="suggestion-item">
            <button type="button" class="suggestion-term" data-search-term="${term.replace(/"/g, '&quot;')}">${term}</button>
            <button type="button" class="suggestion-remove" data-remove-suggestion="${term.replace(/"/g, '&quot;')}" aria-label="Remove ${term.replace(/"/g, '&quot;')}">×</button>
          </div>
        `).join('')
      : '<p class="suggestions-empty">No recent searches</p>';
  }
  
  function clearFieldErrors() {
    $$('.field-error').forEach(el => el.classList.remove('show'));
    $$('#checkoutForm input').forEach(el => el.classList.remove('is-invalid'));
  }
  function showFieldError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.querySelector(`[data-error-for="${fieldId}"]`);
    if (input) input.classList.add('is-invalid');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
    }
  }

  function validateCheckoutForm() {
    clearFieldErrors();
    let valid = true;
    const first = $('#first')?.value.trim() || '';
    const last = $('#last')?.value.trim() || '';
    const email = $('#email')?.value.trim() || '';
    const wallet = $('#wallet')?.value.replace(/\s/g, '') || '';

    if (first.length < 2) {
      showFieldError('first', 'First name must be at least 2 characters.');
      valid = false;
    }
    if (last.length < 2) {
      showFieldError('last', 'Last name must be at least 2 characters.');
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!/^\d{12,19}$/.test(wallet)) {
      showFieldError('wallet', 'Wallet must contain 12–19 digits.');
      valid = false;
    }
    return valid;
  }

  function renderCheckoutPage() {
    const itemsEl = $('#checkoutItems');
    if (!itemsEl) return;
    const pending = JSON.parse(localStorage.getItem('pendingOrder') || '{"items":[],"tax":0,"total":0}');
    if (!pending.items.length) {
      itemsEl.innerHTML = '<p style="padding:20px;font-family:Arial,sans-serif;">No items in your order. <a href="product-list.html">Shop art</a></p>';
    } else {
      itemsEl.innerHTML = pending.items.map(item => `
        <article class="checkout-item">
          <img src="${item.image}" class="checkout-item-img" alt="${item.title}">
          <div class="checkout-item-info">
            <h4>${item.title}</h4>
            <p>${item.artist} × ${item.qty}</p>
          </div>
          <div class="checkout-item-price">AUD$${(item.price * item.qty).toLocaleString()}</div>
        </article>
      `).join('');
    }
    const subNode = $('#sumSubtotal');
    const taxNode = $('#sumTax');
    const totalNode = $('#sumTotal');
    if (subNode) subNode.textContent = '$' + (pending.total - pending.tax).toLocaleString();
    if (taxNode) taxNode.textContent = '$' + pending.tax.toLocaleString();
    if (totalNode) totalNode.textContent = '$' + pending.total.toLocaleString();
  }

  function filterCards(category) {
    currentFilter = category;
    if (category === 'cold' || category === 'warm') {
      clearSearchQueryFromUrl();
    }
    renderProductList();
  }

  function sortCards(dir) {
    currentSort = dir;
    renderProductList();
  }

  function renderProductList() {
    const grid = $('.art-grid');
    if (!grid) return;
    const urlParams = new URLSearchParams(window.location.search);
    const rawQuery = urlParams.get('q');
    const query = rawQuery?.toLowerCase();
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

    if (query) {
      document.title = `Search Results - ${rawQuery}`;
    }
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
            <img src="${p.image}" alt="${p.title}" />
          </a>
          <div class="art-meta">
            <a href="product-pages.html?id=${p.id}">
              <h3 class="art-title">${p.title}</h3>
              <p class="art-artist">${p.artist}</p>
            </a>
        <button class="fav ${isFav ? 'is-on' : ''}" data-wish-id="${p.id}" aria-label="Add to wishlist">
  <img src="assets/heart-empty.png" class="heart-empty" alt="">
  <img src="assets/heart-full.png" class="heart-full" alt="">
</button>
          </div>
          <div class="price">${priceHtml}</div>
        </article>
      `;
    }).join('');
  }

  function renderProductPages() {
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
              <span class="price-label">Price</span>
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
           <button class="wish-btn fav ${isFav ? 'is-on' : ''}" data-wish-id="${product.id}" aria-label="Add to wishlist" style="width:118px;">
  <img src="assets/heart-empty.png" class="heart-empty" alt="">
  <img src="assets/heart-full.png" class="heart-full" alt="">
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
    const pager = $('.pager', gallery);
    const dots = $$('.pager span', gallery);
    if (!img) return;

    if (!roomSrc) {
      if (pager) pager.style.display = 'none';
      return;
    }

    if (pager) pager.style.display = 'flex';

    const sources = [imgSrc, roomSrc];
    let current = 0;
    sources.forEach(src => { new Image().src = src; });

    function switchImg(index) {
      index = ((index % sources.length) + sources.length) % sources.length;
      current = index;
      img.classList.add('fade');
      const loader = new Image();
      loader.onload = () => {
        img.src = sources[current];
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        img.classList.remove('fade');
      };    
      loader.onerror = () => img.classList.remove('fade');
      loader.src = sources[current];
    }

    dots.forEach((dot, i) => {
      dot.style.display = i < sources.length ? '' : 'none';
      dot.addEventListener('click', () => switchImg(i));
    });
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
            <input id="searchInput" type="search" autocomplete="off" value="Cold colour" aria-label="Search artwork" />
            <button type="submit" aria-label="Submit search">
              <span class="icon search"></span>
            </button>
          </form>
          <div class="suggestions" id="searchSuggestions"></div>
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
  if (id === 'searchModal') {
    renderSearchSuggestions();
    const input = $('#searchInput', modal);
    if (input) input.value = getSearchInputDefault();
  }
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
  if (!grid) return;
  const wishlist = getWishlist();
  const products = productsData.filter(p => wishlist.includes(p.id));
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
     
        <button class="fav is-on" data-wish-id="${p.id}" aria-label="Remove from wishlist">
  <img src="assets/heart-empty.png" class="heart-empty" alt="">
  <img src="assets/heart-full.png" class="heart-full" alt="">
</button>
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
          <div class="qty-caption">Quantity</div>
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



  function handleCheckout() {
    const cart = getCart();
    if (cart.length === 0) return;
    let subtotal = 0;
    const orderItems = [];
    $$('.cart-item').forEach(el => {
      if (el.querySelector('.select-dot').classList.contains('checked')) {
        const item = cart.find(i => i.id === el.dataset.id);
        if (item) {
          subtotal += item.price * item.qty;
          orderItems.push(item);
        }
      }
    });
    if (orderItems.length === 0) {
      showToast('Please select items to checkout');
      return;
    }
    const tax = Math.round(subtotal * 0.0775);
    const total = subtotal + tax;
    localStorage.setItem('pendingOrder', JSON.stringify({
      items: orderItems,
      tax: tax,
      total: total
    }));
    location.href = 'checkout.html';
  }

  function finalizePayment() {
    const pending = JSON.parse(localStorage.getItem('pendingOrder'));
    if (!pending) return;
    const lastOrder = {
      ref: 'ARC-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: pending.items,
      tax: pending.tax,
      total: pending.total,
      customer: {
        first: $('#first')?.value,
        last: $('#last')?.value,
        email: $('#email')?.value
      }
    };
    localStorage.setItem('lastOrder', JSON.stringify(lastOrder));
    saveCart(getCart().filter(ci => !pending.items.find(oi => oi.id === ci.id)));
    localStorage.removeItem('pendingOrder');
    location.href = 'confirmation.html';
  }

  function renderConfirmation() {
    const refNode = $('#orderRef');
    const receiptNode = $('#orderReceipt');
    if (!refNode || !receiptNode) return;
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    if (!lastOrder) {
      receiptNode.innerHTML = '<p>No recent order found.</p>';
      return;
    }
    refNode.textContent = lastOrder.ref;
    const linePrice = value => '$' + Number(value).toLocaleString('en-AU', {
      minimumFractionDigits: value % 1 ? 2 : 0,
      maximumFractionDigits: 2
    });
    receiptNode.innerHTML = lastOrder.items.map(item =>
      `<div class="receipt-row"><span>${item.title}</span><span>${linePrice(item.price * item.qty)}</span></div>`
    ).join('') +
    `<div class="receipt-row muted"><span>TAX</span><span>${linePrice(lastOrder.tax)}</span></div>
     <div class="receipt-row receipt-total"><span>Total Paid</span><span>${linePrice(lastOrder.total)}</span></div>`;
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

         const removeSuggestion = e.target.closest('[data-remove-suggestion]');
      if (removeSuggestion) {
        e.preventDefault();
        e.stopPropagation();
        removeSearchSuggestion(removeSuggestion.dataset.removeSuggestion);
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
      const checkoutBtn = e.target.closest('.checkout-btn');
      if(checkoutBtn){
        e.preventDefault();
        handleCheckout();
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
        navigateSearch($('#searchInput').value.trim() || DEFAULT_SEARCH_TERM);
      });
    }
    initSearchInput();
    const checkoutForm = $('#checkoutForm');
    if(checkoutForm){
      checkoutForm.addEventListener('submit', e=>{
        e.preventDefault();
         if (!validateCheckoutForm()) {
          showToast('Please fix the highlighted fields');
          return;
        }
         finalizePayment();
      });
      $$('#checkoutForm input').forEach(input => {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
          const err = document.querySelector(`[data-error-for="${input.id}"]`);
          if (err) err.classList.remove('show');
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectModals();
    renderSearchSuggestions();
    bindEvents();
    initProductQty();
    const cur = path();
    if (cur.includes('product-list')) {
      renderProductList();
    } else if (cur === 'product-pages.html') {
      renderProductPages();
    } else if (cur === 'cart.html') {
      renderCart();
    } else if (cur === 'confirmation.html') {
      renderConfirmation();
    } else if (cur === 'wishlist.html') {
      renderWishlist();
    } else if (cur === 'checkout.html') {
      renderCheckoutPage();
    }
  });
})();
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
      "id": "urban-prism",
      "title": "Urban Prism",
      "artist": "Mark Rein",
      "price": 1800,
      "category": "warm",
      "image": "assets/intro-prism.jpg",
      "roomImage": "assets/neon-57.png",
      "description": "Fractured light and urban forms...",
      "specs": {
        "Medium": "Spray Paint and Resin",
        "Edition": "Unique Piece",
        "Dimensions": "120 x 80 cm",
        "Framing": "N/A (Cradled Panel)",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Mark Rein's background in street art..."
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
    {
      "id": "coastal-breeze",
      "title": "Coastal Breeze",
      "artist": "Chris Dark",
      "price": 750,
      "category": "cold",
      "image": "assets/intro-place.jpg",
      "roomImage": "assets/city-room.png",
      "description": "Minimalist horizon study...",
      "specs": {
        "Medium": "Photography",
        "Edition": "Limited edition of 20",
        "Dimensions": "60 x 40 cm",
        "Framing": "Unframed",
        "Paper Weight": "310gsm"
      },
      "aboutArtist": "Chris Dark's photography evokes solitude..."
    },
    {
      "id": "pop-culture-pink",
      "title": "Pop Culture Pink",
      "artist": "Mark Rein",
      "price": 1400,
      "category": "warm",
      "image": "assets/intro-pop.png",
      "roomImage": "assets/neon-57.png",
      "description": "Playful high-energy pop art...",
      "specs": {
        "Medium": "Mixed Media on Wood",
        "Edition": "Original Artwork",
        "Dimensions": "80 x 80 cm",
        "Framing": "N/A",
        "Paper Weight": "N/A"
      },
      "aboutArtist": "Mark Rein experiments with mediums..."
    }
  ]})
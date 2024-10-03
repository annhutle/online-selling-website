// header scroll
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})
// Products Array
const products = [
    {
      id: 1,
      title: "Canva Pro",
      price: 0,
      image:
        "./assets/capcut.png",
    },
    {
      id: 2,
      title: "Premiere Pro Preset: Audio Effects",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-50-scaled.jpg",
    },
    {
      id: 3,
      title: "PR Preset: Luma Fade Transitions",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-49-1536x1024.jpg",
    },
    {
      id: 4,
      title: "TEXT EASY SLIDE Preset Pack (PR)",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-48-2048x1365.jpg",
    },
    {
      id: 5,
      title: "SHAPE OFFSET PRESET PACK! (PR)",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-47-2048x1365.jpg",
    },
    {
      id: 6,
      title: "Meme Sound",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/01/mock-21-1536x1024.jpg",
    },
    {
      id: 7,
      title: "1000+ Meme",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2024/01/mock-20-2048x1365.jpg",
    },
    {
      id: 8,
      title: "Photo Display",
      price: 0,
      image:
        "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock1-3-2048x1365.jpg",
    },
    {
        id: 9,
        title: "200 TEXT TRANSITIONS + EFFECTS (PR)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-46-2048x1365.jpg",
    },
    {
        id: 11,
        title: "CUSTOM SHAKE TRANSITION<br>(AE)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-45-2048x1365.jpg",
    },
    {
        id: 12,
        title: "100 FREE ANIMATED TEXTURES (PR/MOGRT)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/08/mock-44-2048x1365.jpg",
    },
    {
        id: 13,
        title: "Big Room Sound – <br>Television",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/07/1490286141-100x100.webp",
    },
    {
        id: 14,
        title: "Smooth Zoom Preset Pack for Premiere Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/07/1-1.jpg",
    },
    {
        id: 15,
        title: "Division Filmmaking Cinematic Essentials SFX",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/06/image-287x300.webp",
    },
    {
        id: 16,
        title: "Pro Gamerz SP – Free Preset Pack for Premiere Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/06/mock-3-2048x1365.jpg",
    },
    {
        id: 17,
        title: "Red Giant Universe <br>v2024.1.0",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/11111111111111111111-2-2048x1365.jpg",
    },
    {
        id: 18,
        title: "Red Giant Magic Bullet Suite v2024.1.0 (WIN)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/11111111111111111111-1-2048x1365.jpg",
    },
    {
        id: 19,
        title: "Red Giant Trapcode Suite v2024.1.0 (WIN)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/11111111111111111111-2048x1365.jpg",
    },
    {
        id: 20,
        title: "Red Giant VFX Suite 2024.1.0 <br>(WIN)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/mock22222-18-2048x1365.jpg",
    },
    {
        id: 21,
        title: "Essential Motion Preset Pack 3.0 for Premiere Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/05/EM3_Box-2048x1152.webp",
    },
    {
        id: 22,
        title: "Boom Library – Processed <br>Impacts",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/05/FREE-Processed-Impacts-a-Sound-Effects-BOOM-Library-300x270.png",
    },
    {
        id: 23,
        title: "Dune LUTs – Colorist <br>Foundry",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/03/mock-17-768x512.jpg",
    },
    {
        id: 24,
        title: "Aescripts – Advanced Color Control (WIN)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/03/mock-5-1536x1024.jpg",
    },
    {
        id: 25,
        title: "TikTok Pack <br>(AE)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/02/mock-2048x1365.jpg",
    },
    {
        id: 26,
        title: "RE:Vision – Effections Plus Bundle",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/01/mock-47-2048x1365.jpg",
    },
    {
        id: 27,
        title: "Mt Mograph – Wander (AE + PR)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/01/Wander_Ultimate_Media_Search-100x100.webp",
    },
    {
        id: 28,
        title: "Luts delog Flog FUJIFILM",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/01/mock-25-2048x1365.jpg",
    },
    {
        id: 29,
        title: "Action VFX – Muzzle Flashes Vol. 2",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2024/01/mock-22-1536x1024.jpg",
    },
    {
        id: 30,
        title: "Aescript – Align Pro v1.0.2 <br>(AE)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/mock-42-2048x1365.jpg",
    },
    {
        id: 31,
        title: "AKV Studios – Drill Music Video FX Presets (PR)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/Drillsq-100x100.webp",
    },
    {
        id: 32,
        title: "Boom Library – Magic – <br>Wisp",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/Magic-Wisp-Bundle-a-Sound-Effects-BOOM-Library.png",
    },
    {
        id: 33,
        title: "Technology Constructor Premiere | Atom",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/mock-26-1536x1024.jpg",
    },
    {
        id: 34,
        title: "EditorAlbie – Ultimate Editing Pack",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/mock-18-2048x1365.jpg",
    },
    {
        id: 35,
        title: "Aescript – REACH: AEssential Kit (AE)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/mock-17-2048x1365.jpg",
    },
    {
        id: 36,
        title: "1000+ Flat Animated Icons Pack",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/12/mock-16-1536x1024.jpg",
    },
    {
        id: 37,
        title: "Videocopilot – Optical <br>Flares",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/VC_OpticalFlares-600x600.jpg",
    },
    {
        id: 38,
        title: "Shadow Studio 2",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock-41-2048x1365.jpg",
    },
    {
        id: 39,
        title: "Aejuice – Pack Manager",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock-36-2048x1365.jpg",
    },
    {
        id: 40,
        title: "Aep to Mogrt Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock-34-2048x1365.jpg",
    },
    {
        id: 41,
        title: "AEP Version Updater",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock-33-768x512.jpg",
    },
    {
        id: 42,
        title: "AI Color <br>Match",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock-27-600x400.jpg",
    },
    {
        id: 43,
        title: "Complete Film Emulation Bundle",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock1-4-2048x1365.jpg",
    },
    {
        id: 44,
        title: "Smooth Skin <br>Effects",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/10/mock1-2-1536x1024.jpg",
    },
    {
        id: 45,
        title: "Topaz Photo & Video AI <br>(Win)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/09/642c090fa1eeb397aa04cf61_macOs.svg",
    },
    {
        id: 46,
        title: "Fragments | 2450+ Animated 2D Elements",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/09/mock-51-2048x1365.jpg",
    },
    {
        id: 47,
        title: "Artgrid & Artlist Motion Graphics Bundles",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/09/mock-23-2048x1365.jpg",
    },
    {
        id: 48,
        title: "ProductionCrate – <br>Godrays",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/09/mock-15-2048x1365.jpg",
    },
    {
        id: 49,
        title: "Malice Ultimate Editing <br>Pack",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/e4104a-06eb-47db-fa14-4646218bd41_Ultimate_Pack_Cover.webp",
    },
    {
        id: 50,
        title: "Cinema Alpha <br>Titles",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/mock-55-2048x1365.jpg",
    },
    {
        id: 51,
        title: "Defocus Text <br>Animator",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/mock-54-2048x1365.jpg",
    },
    {
        id: 52,
        title: "Mirage <br>Preset",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/mock-53-2048x1365.jpg",
    },
    {
        id: 53,
        title: "Motion <br>Animator",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/mock-52-2048x1365.jpg",
    },
    {
        id: 54,
        title: "Essential Motion Preset Pack 2.0 for Premiere Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/08/EM2-2048x1152.webp",
    },
    {
        id: 55,
        title: "Magic Mushroom SFX <br>(Mario)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/8UPMagicMushroomsSFX.webp",
    },
    {
        id: 56,
        title: "Davinci Resolve Studio 18.5 (Win)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/photo_2023-07-29_00-05-41.jpg",
    },
    {
        id: 57,
        title: "Digital Anarchy Beauty <br> Box",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/beauty-box-video-50-100x100.jpg",
    },
    {
        id: 58,
        title: "RE:Vision Effects Twixtor Pro for Ae",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/RFX-TWIXTOR7-TWP7VUNFR-1__34683-100x100.jpg",
    },
    {
        id: 59,
        title: "RE:Vision Effects RSMB ReelSmart Motion Blur (AE)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/RFX-RSMB6-RSMBP6UFFR-1__53813.jpg",
    },
    {
        id: 60,
        title: "18 FREE Animated Textures with a Gritty Style",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/2222-2048x1365.jpg",
    },
    {
        id: 61,
        title: "Video Copilot – Slime <br>Fx",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/mock-12-2048x1365.jpg",
    },
    {
        id: 62,
        title: "Video Copilot – <br>Reflect",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/mock-11-1536x1024.jpg",
    },
    {
        id: 63,
        title: "Video Copilot – Color <br>Vibrance",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/maxresdefault.jpg",
    },
    {
        id: 64,
        title: "Video Copilot – <br>Saber",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/images-_1_-100x100.png",
    },
    {
        id: 65,
        title: "Video Copilot – Orb <br>V1.0.3",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/Group-2338.png",
    },
    {
        id: 66,
        title: "Video Copilot – Element 3D <br>2.2.3",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/Video-Copilot-Element-3D-2.2.3-Build-2192-WIN.webp",
    },
    {
        id: 67,
        title: "Video Copilot – FX Console V1.5",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/07/fx_Con_v3.jpg",
    },
    {
        id: 68,
        title: "Trapcode Elements: FX Suite V2.1",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/mock-259-2048x1365.jpg",
    },
    {
        id: 69,
        title: "Trapcode Magic <br>V1.1",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/mock-261-2048x1365.jpg",
    },
    {
        id: 70,
        title: "Trapcode Fire <br>V2.3",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/mock-260-2048x1365.jpg",
    },
    {
        id: 71,
        title: "Boom Library – FREE Death Whistle",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/BOOM_FREE_Death_Whistle_Packshot_Alpha_1000px-1.png",
    },
    {
        id: 72,
        title: "Boom Library – FREE Cinematic Series",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/Free-Sound-FX-Cinematic-Series-Boom-Library.png",
    },
    {
        id: 73,
        title: "Organic Transition Golden Flares",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/COVER_TRANSITION_FLARES.jpg",
    },
    {
        id: 74,
        title: "Essential Motion Preset Pack 1.0 for Premiere Pro",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/EssentialMotion_Box_V02_1080p.webp",
    },
    {
        id: 75,
        title: "Film Impact Premium Video Transitions V4.7.2",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/11111111111111111111-12-2048x1365.jpg",
    },
    {
        id: 76,
        title: "Boris FX CONTINUUM 2024 for AE & PR (WIN)",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/11111111111111111111-8-2048x1365.jpg",
    },
    {
        id: 77,
        title: "Doctor Strange Ultimate VFX Assets Pack",
        price: 0,
        image:
          "https://editornghiepdu.vn/wp-content/uploads/2023/06/Suza-Productions-Doctor-Strange-Ultimate-VFX-Assets-Pack.webp",
    },


  ];

  //Get the products list and elements
  const productList = document.getElementById("productList");
  const cartItemsElement = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  // store cart items in local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // render products on page
  function renderProducts() {
    productList.innerHTML = products
        .map(
        (product) => `
        <div class="product">
        <img src="${product.image}" alt="${product.title}" class="product-img" />
        <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <a class="add-to-cart" data-id="${product.id}">Add to cart</a>
        </div>
        </div>
        `
        )
        .join("");
        // add to cart
        const addToCartButtons = document.getElementsByClassName("add-to-cart")
        for (let i = 0; i < addToCartButtons.length; i++) {
            const addToCartButton = addToCartButtons[i];
            addToCartButton.addEventListener("click", addToCart)
        }
  }

  // add to cart 
  function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const product = products.find((product) => product.id === productID);

    if(product) {
        // if product already in cart 
        const existingItem = cart.find((item) => item.id === productID);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };
            cart.push(cartItem);
        }
        // change add to cart to text to added
        const addToCartButton = event.target;
        addToCartButton.textContent = "Added";

        // save to local storage and render the updated cart
        saveToLocalStorage();
        updateCartIcon();

        setTimeout(() => {
            addToCartButton.textContent = "Thank You!";
        }, 500);

        // Change the text back to "Add to cart" after 3 seconds
        setTimeout(() => {
            addToCartButton.textContent = "Add to cart";
        }, 1000);
    }
  }

  // savetolocalstorage
  function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  

  // render products on cart page
  function renderCartItems() {
    if (!cartItemsElement) return;

    cartItemsElement.innerHTML = cart
    .map(
        (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}"/>
            <div class="cart-item-info">
                <h2 class="cart-item-title">${item.title}</h2>
                <input 
                    class="cart-item-quantity" 
                    type="number" 
                    name="" 
                    min="1"  
                    value="${item.quantity}" 
                    data-id="${item.id}"
                />
            </div>
            <h2 class="cart-item-price">$${item.price.toFixed(2)}</h2>
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        </div>
        `
    )
    .join("");

    // add functionality for removing items from cart
    const removeFromCartButtons = document.getElementsByClassName("remove-from-cart");
    for (let i = 0; i < removeFromCartButtons.length; i++) {
        const removeFromCartButton = removeFromCartButtons[i];
        removeFromCartButton.addEventListener("click", removeFromCart);
    }

    // add event listeners for quantity change
    const quantityInputs = document.getElementsByClassName("cart-item-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener("change", updateCartItemQuantity);
    }
}

  // remove from cart
  function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    cart = cart.filter((item) => item.id !== productID);
    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
  }
  
  // update quantity of product in total price
  function updateCartItemQuantity(event) {
    const productID = parseInt(event.target.dataset.id);
    const newQuantity = parseInt(event.target.value);

    // Update quantity in cart
    const cartItem = cart.find(item => item.id === productID);
    if (cartItem && newQuantity > 0) {
        cartItem.quantity = newQuantity;
    } else if (newQuantity <= 0) {
        // Remove item if quantity is set to 0 or less
        cart = cart.filter(item => item.id !== productID);
    }

    // Save updated cart to local storage
    saveToLocalStorage();
    updateCartIcon();

    // Re-render cart items and recalculate total
    renderCartItems();
    calculateCartTotal();
}

  // calculate total
  function calculateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  //check if on cart page
  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("cart.html")) {
        renderCartItems();
        calculateCartTotal();
      } else {
        renderProducts();
      }
  });

// car icon quantity
const cartIcon = document.getElementById("cart-icon")

function updateCartIcon() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartIcon.setAttribute("data-quantity", totalQuantity)
}

updateCartIcon()

function updateCartIconOnCartChange() {
    updateCartIcon();
}
window.addEventListener("storage", updateCartIconOnCartChange);

function updateCartIcon() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.setAttribute("data-quantity", totalQuantity);
}

async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let yOffset = 20; // Start with a larger offset to make room for the header
    
    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Order Receipt", 10, yOffset);
    yOffset += 15;

    // Header
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Order Details", 10, yOffset);
    yOffset += 10;

    // Table Header
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Item", 10, yOffset);
    doc.text("Price", 80, yOffset);
    doc.text("Quantity", 130, yOffset);
    yOffset += 10;
    doc.setDrawColor(0);
    doc.line(10, yOffset, 200, yOffset); // Line under header
    yOffset += 10;

    // Order Items
    doc.setFont("helvetica", "normal");

    for (const item of cart) {
        doc.text(item.title, 10, yOffset);
        doc.text(`$${item.price.toFixed(2)}`, 80, yOffset);
        doc.text(`${item.quantity}`, 130, yOffset);
        yOffset += 10;

        // Add product image
        if (item.image) {
            try {
                const img = await fetchImage(item.image);
                if (img) {
                    doc.addImage(img, 'JPEG', 10, yOffset, 30, 30); // Adjust size as needed
                    yOffset += 35; // Space after image
                }
            } catch (e) {
                console.error("Error adding image to PDF:", e);
            }
        }
    }

    // Total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    yOffset += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total: $${total.toFixed(2)}`, 10, yOffset);

    // Footer
    yOffset += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your purchase!", 10, yOffset);
    doc.text("For any inquiries, please contact support.", 10, yOffset + 10);

    // Save the PDF
    doc.save("order_receipt.pdf");

    // After generating the PDF, display the chat button
    document.getElementById("chat-btn").style.display = "block";
}

// Fetch image from URL and convert it to base64
function fetchImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Handle CORS issues
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
        };
        img.onerror = function() {
            reject(new Error('Failed to load image'));
        };
        img.src = url;
    });
}

function goToChat() {
    window.open("https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100034861720481%2F", "_blank"); // Chat link
}

   
  
  
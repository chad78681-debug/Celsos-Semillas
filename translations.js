
/*
 * Celso's Semillas
 * Website language system
 * English, Spanish, and Simplified Chinese
 */

(function () {
    "use strict";

    const STORAGE_KEY = "celsosSemillasLanguage";

    const translations = {
        en: {
            language: "Language",
            home: "Home",
            products: "Products",
            learnMore: "Learn More",
            login: "Log In / Register",
            supportFarm: "Support Our Farm",
            cart: "Cart",
            shoppingCart: "Shopping Cart",

            siteName: "Celso's Semillas",
            footerTagline: "Growing a legacy of family, faith, and tradition.",
            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            emailLabel: "Email:",
            websiteAuthor: "Website author: Chad Williams",
            copyright: "© 2026 Celso's Semillas. All rights reserved.",

            joinFamily: "Join Our Growing Family!",
            newsletterText:
                "Get garden tips, new seed announcements, and email notifications when special discounts are available.",
            newsletterButton: "Sign Up for Special Discounts",
            gardenTipsButton: "Get Garden Tips & Special Discounts",
homeStoryTitle: "Our Family Story",
familyStory: "Bambi & Celso",
heroDescription: "Celebrating family, faith, Mexican herbs, and the traditions that grow from the land.",
bibleVerse: "Bible Verse",
verseText: "Thus all the tithe of the land, of the seed of the land or the fruit of the tree, is the LORD'S; it is holy to the LORD.",
verseReference: "Leviticus 27:30",
inoHeading: "Ino Sanchez",
inoDescription: "Ino Sanchez, Celso's wife, in her papalo field.",
celsoHeading: "Celso Sanchez",
celsoDescription: "Celso Sanchez, also known as Papo, and the family traditions that inspire Celso's Semillas.",
musicFromCelso: "Music from Celso",
musicDescription: "Enjoy the music of Celso Sanchez and celebrate the family, faith, and traditions behind Celso's Semillas.",
listenApple: "Listen on Apple Music",
newsletterHeading: "Join Our Growing Family!",
newsletterDescription: "Get garden tips, new seed announcements, and email notifications when special discounts are available.",
productsHeroTitle: "Grow Something Wonderful",
productsIntro: "Welcome to Celso's Semillas! Explore our seed collection and bring a little more nature into your garden.",

productPapaloName: "Papalo Seeds",
productPapaloDescription: "Grow papalo, a flavorful herb popular in Mexican cuisine. A distinctive addition to an herb garden.",

productEpazoteName: "Epazote Seeds",
productEpazoteDescription: "Plant epazote, a traditional culinary herb used in a variety of Mexican dishes.",

productChileName: "Chile Pequin Seeds",
productChileDescription: "Grow chile pequin peppers for a spicy addition to your garden.",

productArugulaName: "Arugula Seeds",
productArugulaDescription: "Add leafy greens to your garden with arugula, a popular salad green with a peppery flavor.",

productBasilName: "Sweet Basil Seeds",
productBasilDescription: "Grow fragrant sweet basil for fresh leaves in salads, sauces, and home-cooked meals.",

productHollyName: "Holly Berry Bush Seeds",
productHollyDescription: "Grow a holly berry bush and add ornamental greenery to your garden.",

productDandelionName: "Dandelion Seeds",
productDandelionDescription: "Grow dandelions, a familiar flowering plant with bright blooms and distinctive seed heads.",

productMohawkName: "Mohawk Sacred Tobacco Seeds",
productMohawkDescription: "Explore this traditional plant for your seed collection.",

productSunflowerName: "Sunflower Seeds",
productSunflowerDescription: "Grow sunflowers for their cheerful blooms and striking garden presence.",

productCrapeName: "Pink Crape Myrtle Seeds",
productCrapeDescription: "Grow crape myrtle for a beautiful ornamental plant with colorful seasonal flowers.",

            exploreProducts: "Explore Our Products",
            addToCart: "Add to Cart",
            buyWithPaypal: "Buy with PayPal",
            buyOnEbay: "Buy on eBay",
            quantity: "Quantity",
            remove: "Remove",
            checkout: "Checkout",
            emptyCart: "Your cart is empty.",
            continueShopping: "Continue Shopping",

            learnTitle: "Learn More About Our Seeds",
            plantCollection: "Discover Our Plants and Seeds",
            gardeningBasics: "Gardening Basics for Beginners",
            followFacebook: "Follow Us on Facebook",
            familyTradition: "Growing a Family Tradition",
            growingTipsTitle: "Five Tips for Growing from Seed",

            loginTitle: "Welcome Back",
            emailAddress: "Email Address",
            password: "Password",
            logInButton: "Log In",
            createAccount: "Create an Account",
            forgotPassword: "Forgot Password?",
            createAccountTitle: "Create Your Account",
            fullName: "Full Name",
            createPassword: "Create Password",
            passwordTip:
                "Use at least 8 characters. Choose a strong, unique password.",
            marketingConsent:
                "I'd like to receive promotional emails and special offers.",
            registerButton: "Register",
            alreadyAccount: "Already have an account? Log In",
            resetPasswordTitle: "Reset Your Password",
            sendResetEmail: "Send Password Reset Email",
            backToLogin: "Back to Login",
            yourAccount: "Your Account",
            logOut: "Log Out",

            msgCreatingAccount: "Creating your account...",
            msgAccountCreated: "Your account was created successfully!",
            msgCheckEmail:
                "Registration received! Check your email for a verification link.",
            msgSigningIn: "Signing you in...",
            msgLoginFailed:
                "Unable to log in. Check your email and password, and verify your email if required.",
            msgLoggedIn: "You are logged in!",
            msgResetSent:
                "If an account exists for that address, a password reset email will be sent.",
            msgLogoutFailed: "Could not log out. Please try again.",
            msgLoggedOut: "You have logged out.",
            msgSessionFailed:
                "Unable to check your login status. Please refresh.",
            msgResetInstructions:
                "Enter a new password after opening the reset link.",
            accountEmail: "Email:",
            accountName: "Name:",
            customer: "Customer",
            couponInfo:
                "First-purchase offers may be available at checkout.",
             footerThanks: "Thank you for supporting our seed store!",  
              learnPageTitle: "Learn More About Our Seeds",
learnIntroOne: "Welcome to Celso's Semillas, where seeds connect us to the land, our food, our family, and generations of gardening traditions.",
learnIntroTwo: "Explore our seed varieties, discover ways to use familiar herbs, and learn the basics of growing plants at home. Whether you are new to gardening or have years of experience, every garden begins with a seed.",
        plantCollectionIntro: "Every plant has its own characteristics and growing needs. Use these introductions to learn more about the varieties available at Celso's Semillas.",
papaloLearnDescription: "Papalo is an aromatic herb used in Mexican and other Latin American cuisines. Its fresh leaves have a distinctive, bold flavor and can be enjoyed with tacos, sandwiches, salsas, and other dishes.",
papaloGrowingTipLabel: "Growing tip:",
papaloGrowingTip: "Give papalo warm weather, plenty of sunlight, and well-draining soil. Allow the soil to drain between waterings.",
papaloHarvestLabel: "Harvest:",
papaloHarvest: "Pick young, healthy leaves as the plant grows.",
   epazoteLearnDescription: "Epazote is a traditional Mexican culinary herb with a strong, distinctive aroma. It is used in some bean dishes, soups, and regional recipes.",
epazoteGrowingTipLabel: "Growing tip:",
epazoteGrowingTip: "Epazote generally grows well in warm conditions and sunny locations with well-draining soil.",
epazoteHarvestLabel: "Harvest:",
epazoteHarvest: "Harvest small amounts of leaves as needed. Use this herb in moderation, since its flavor is strong.",   
chileLearnDescription: "Chile pequin produces small, spicy peppers that are popular in Mexican cooking. The fruits can add considerable heat to sauces, salsas, and seasonings.",
chileGrowingTipLabel: "Growing tip:",
chileGrowingTip: "Provide warmth, sunlight, regular watering, and soil with good drainage. Peppers need a sufficiently long warm growing season.",
chileHarvestLabel: "Harvest:",
chileHarvest: "Pick peppers when they reach the desired stage of maturity, using care when handling hot fruit.",
arugulaLearnDescription: "Arugula is a leafy green known for its peppery taste. It works well in salads, sandwiches, and as a fresh finishing green for many meals.",
arugulaGrowingTipLabel: "Growing tip:",
arugulaGrowingTip: "Arugula generally grows best in cool weather. Give it fertile soil and consistent moisture. Hot weather can make leaves more bitter and encourage flowering.",
arugulaHarvestLabel: "Harvest:",
arugulaHarvest: "Pick young leaves for a tender texture and milder flavor.",
basilLearnDescription: "Sweet basil is a fragrant culinary herb often used in pasta, salads, sauces, and homemade pesto.",
basilGrowingTipLabel: "Growing tip:",
basilGrowingTip: "Basil prefers warm weather, sunlight, and well-draining soil. Water near the soil rather than continually wetting the leaves.",
basilHarvestLabel: "Harvest:",
basilHarvest: "Pinch growing tips to encourage a fuller plant, and remove flower buds when you want to encourage leafy growth.",
hollyLearnDescription: "Holly is an attractive shrub known for its glossy green leaves and bright red berries. It can add beauty and seasonal color to a garden.",
hollyGrowingTipLabel: "Growing tip:",
hollyGrowingTip: "Holly grows best in well-draining soil and a location with suitable sunlight. Water regularly while the plant is getting established.",
hollyNoteLabel: "Important note:",
hollyNote: "Holly berries are poisonous if eaten. Keep them away from children and pets.",
dandelionLearnDescription: "Dandelion is a hardy plant with bright yellow flowers and familiar, fluffy seed heads. Its young leaves are often used in salads and cooking.",
dandelionGrowingTipLabel: "Growing tip:",
dandelionGrowingTip: "Dandelions grow in many soil types and do well in sunny locations. Water during dry periods while the plants are growing.",
dandelionGardenNoteLabel: "Garden note:",
dandelionGardenNote: "Dandelions spread readily by seed. Remove flower heads before they turn into fluffy seed heads if you want to limit spreading.",
mohawkLearnDescription: "Mohawk Sacred Tobacco is a plant with cultural and historical significance to Indigenous communities. Learn about its traditional importance and growing characteristics.",
mohawkGrowingTipLabel: "Growing tip:",
mohawkGrowingTip: "Provide a sunny location and well-draining soil. Follow the seed packet instructions for planting depth and spacing.",
mohawkWarningLabel: "Important warning:",
mohawkWarning: "Tobacco plants contain nicotine, a toxic and addictive substance. Keep all plant parts away from children and pets. Do not consume.",
sunflowerLearnDescription: "Sunflowers are bright, cheerful plants known for their large flower heads and edible seeds. They attract pollinators and bring beauty to the garden.",
sunflowerGrowingTipLabel: "Growing tip:",
sunflowerGrowingTip: "Plant sunflowers in a sunny location with well-draining soil. Give taller varieties enough space and support if needed.",
sunflowerHarvestLabel: "Harvest:",
sunflowerHarvest: "Allow the flower head to mature and dry. Harvest the seeds when they are plump and the back of the flower head has turned brown.",
crapeLearnDescription: "Pink Crape Myrtle is a flowering shrub known for its beautiful clusters of pink blooms. It can add long-lasting color to a sunny garden.",
crapeGrowingTipLabel: "Growing tip:",
crapeGrowingTip: "Plant in a sunny location with well-draining soil. Water regularly while young, then reduce watering once established.",
crapePatienceLabel: "Patience:",
crapePatience: "Crape Myrtle seeds need suitable warmth and moisture to germinate. Growth takes time, so be patient as your plants develop.",
gardeningIntro: "You do not need a large farm or an elaborate garden to begin growing plants. A sunny garden bed or suitable container can be a great place to start.",
growingTipsTitle: "Five Tips for Growing from Seed",
gardeningTipOneTitle: "Choose the right location.",
gardeningTipOne: "Learn how much sunlight your plant needs before deciding where to grow it.",
gardeningTipTwoTitle: "Prepare the soil.",
gardeningTipTwo: "Use a suitable seed-starting mix for containers, or improve garden soil as needed. Containers should have drainage holes.",
gardeningTipThreeTitle: "Plant at the correct depth.",
gardeningTipThree: "Follow the seed packet instructions. Some seeds need light to germinate and should not be buried deeply.",
gardeningTipFourTitle: "Water carefully.",
gardeningTipFour: "Keep the growing medium appropriately moist without leaving seeds or roots sitting in water.",
gardeningTipFiveTitle: "Be patient and observe.",
gardeningTipFive: "Germination times differ. Watch for new growth, adjust watering as needed, and protect young plants from extreme weather.",
seedVarietiesNoteTitle: "A note about seed varieties:",
seedVarietiesNote: "Growing times, mature size, germination rates, and care requirements vary by species, variety, and local conditions. Check the instructions provided with each seed packet for the most specific guidance.",
followFacebook: "Follow Us on Facebook",
facebookIntro: "Stay connected with Celso's Semillas on Facebook! Follow our page for seed updates, gardening tips, plant photos, family traditions, and news from our growing community.",
growingFamilyTraditionTitle: "Growing a Family Tradition",
growingFamilyTraditionIntro: "At Celso's Semillas, seeds represent more than plants. They remind us of family, tradition, hard work, and the connection between the land and the food we share. We hope our seeds inspire you to start a garden, learn something new, and create traditions of your own.",
growingFamilyTraditionThanks: "Thank you for being part of the Celso's Semillas community. We wish you a rewarding growing season!",
loginPageTitle: "Log In | Celso's Semillas",
welcomeBack: "Welcome Back",
emailAddress: "Email Address",
password: "Password",
logInButton: "Log In",
createAccount: "Create an Account",
forgotPassword: "Forgot Password?",
createYourAccount: "Create Your Account",
fullName: "Full Name",
createPassword: "Create Password",
passwordRequirement: "Use at least 8 characters. Choose a strong, unique password.",
marketingConsent: "I'd like to receive promotional emails and special offers.",
registerButton: "Register",
alreadyHaveAccount: "Already have an account? Log In",
resetYourPassword: "Reset Your Password",
sendResetEmail: "Send Password Reset Email",
backToLogin: "Back to Login",
yourAccount: "Your Account",
logOut: "Log Out",
accountEmail: "Email:",
accountName: "Name:",
firstPurchaseOffers: "First-purchase offers may be available at checkout.",
supportHeroTitle: "Help Our Growing Family Flourish! 🌱",
supportHeroText: "Every seed has a story, every harvest carries a tradition, and every helping hand makes a difference. Thank you for being part of the Celso's Semillas family.",
supportFarmButton: "Support Our Farm",
supportMerchTitle: "Wear Your Support 🌻",
supportMerchIntro: "Take a little piece of Celso's Semillas home with you! Shop our logo merchandise and help support our family's farming journey.",
supportShirtTitle: "Celso's Semillas Logo Shirt",
supportShirtText: "Show your support for Celso's Semillas with our logo shirt. Wear your love of seeds, family, and farming traditions!",
supportShopShirt: "Shop Shirt on eBay",
supportStickerTitle: "Celso's Semillas Logo Sticker",
supportStickerText: "Take a little piece of our growing family with you! Show off the Celso's Semillas logo on your favorite belongings.",
supportShopSticker: "Shop Sticker on eBay",
supportDreamTitle: "Our Dream: Growing More Than Seeds 🐝",
supportStory1: "At Celso's Semillas, our roots run deep in family, faith, agriculture, and tradition. We want to keep these traditions alive while growing something meaningful for future generations.",
supportStory2: "Our next big dream is to acquire additional land for our bee farm.",
supportStory3: "Bees are important pollinators, and we hope to create more room for our beekeeping efforts as our farm grows. Your support helps us work toward this goal, maintain our farming efforts, and build a lasting family legacy.",
supportStory4: "Whether you shop our merchandise or contribute toward our farm's future, we're grateful to have you growing with us. Every bit of support means a great deal to our family.",
supportDonationTitle: "Help Us Keep Growing 🌿",
supportDonationIntro: "Would you like to help us continue our farming journey? Choose a payment method below to support our farm and our goal of expanding our bee farm.",
supportPaypalTitle: "Support Us with PayPal 💚",
supportPaypalText: "Your contribution helps us continue our work on the farm and move closer to our dream of acquiring more land for bees. Thank you for helping our family grow!",
supportPaypalButton: "Contribute with PayPal",
supportBitcoinTitle: "Support Us with Bitcoin ₿",
supportBitcoinText: "Prefer cryptocurrency? You can support our farming journey using Bitcoin.",
supportBitcoinNote: "Before sending, verify the receiving address and make sure your wallet is using the Bitcoin network. Cryptocurrency transfers generally cannot be reversed.",
supportBitcoinQRTitle: "Donate with Bitcoin ₿",
supportBitcoinCaption: "BITCOIN DONATION",
supportBitcoinThanks: "Thank you for helping our family farm grow! 🌱🐝",
supportClosing: "Thank you for helping us grow a legacy of family, faith, and tradition. 🌱",
footerNewsletterDescription: "Get garden tips and email notifications when special discounts are available!",
footerNewsletterButton: "Sign Up for Special Discounts",


},

        es: {
            language: "Idioma",
            home: "Inicio",
            products: "Productos",
            learnMore: "Más información",
            login: "Iniciar sesión / Registrarse",
            supportFarm: "Apoya nuestra granja",
            cart: "Carrito",
            shoppingCart: "Carrito de compras",

            siteName: "Celso's Semillas",
            footerTagline: "Cultivando un legado de familia, fe y tradición.",
            quickLinks: "Enlaces rápidos",
            contactUs: "Contáctanos",
            emailLabel: "Correo electrónico:",
            websiteAuthor: "Autor del sitio web: Chad Williams",
            copyright: "© 2026 Celso's Semillas. Todos los derechos reservados.",
            joinFamily: "¡Únete a nuestra familia en crecimiento!",
            newsletterText:
                "Recibe consejos de jardinería, novedades sobre semillas y avisos por correo electrónico cuando haya descuentos especiales.",
            newsletterButton: "Registrarse para recibir descuentos especiales",
            gardenTipsButton: "Recibe consejos de jardinería y descuentos",
homeStoryTitle: "Nuestra historia familiar",
familyStory: "Bambi y Celso",
heroDescription: "Celebramos la familia, la fe, las hierbas mexicanas y las tradiciones que nacen de la tierra.",
bibleVerse: "Versículo bíblico",
verseText: "El diezmo de la tierra, así de la simiente de la tierra como del fruto de los árboles, es del Señor; es cosa dedicada al Señor.",
verseReference: "Levítico 27:30",
inoHeading: "Ino Sánchez",
inoDescription: "Ino Sánchez, esposa de Celso, en su campo de papalo.",
celsoHeading: "Celso Sánchez",
celsoDescription: "Celso Sánchez, también conocido como Papo, y las tradiciones familiares que inspiran a Celso's Semillas.",
musicFromCelso: "Música de Celso",
listenApple: "Escuchar en Apple Music",
newsletterHeading: "¡Únete a nuestra familia en crecimiento!",
newsletterDescription: "Recibe consejos de jardinería, novedades sobre semillas y notificaciones por correo electrónico cuando haya descuentos especiales.",
musicDescription: "Disfruta de la música de Celso Sánchez y celebra la familia, la fe y las tradiciones que inspiran a Celso's Semillas.",
productsHeroTitle: "Cultiva algo maravilloso",
productsIntro: "¡Te damos la bienvenida a Celso's Semillas! Explora nuestra colección de semillas y lleva un poco más de naturaleza a tu jardín.",

productPapaloName: "Semillas de Pápalo",
productPapaloDescription: "Cultiva pápalo, una hierba aromática muy popular en la cocina mexicana. Una adición especial para tu jardín de hierbas.",

productEpazoteName: "Semillas de Epazote",
productEpazoteDescription: "Cultiva epazote, una hierba culinaria tradicional utilizada en una variedad de platillos mexicanos.",

productChileName: "Semillas de Chile Piquín",
productChileDescription: "Cultiva chiles piquín para darle un toque picante a tu jardín.",

productArugulaName: "Semillas de Rúcula",
productArugulaDescription: "Añade verduras de hoja verde a tu jardín con la rúcula, una planta popular para ensaladas con un sabor ligeramente picante.",

productBasilName: "Semillas de Albahaca Dulce",
productBasilDescription: "Cultiva albahaca dulce y aromática para disfrutar de hojas frescas en ensaladas, salsas y comidas caseras.",

productHollyName: "Semillas de Arbusto de Acebo",
productHollyDescription: "Cultiva un arbusto de acebo y añade vegetación ornamental a tu jardín.",

productDandelionName: "Semillas de Diente de León",
productDandelionDescription: "Cultiva dientes de león, una planta floral conocida por sus flores brillantes y sus distintivas cabezas de semillas.",

productMohawkName: "Semillas de Tabaco Sagrado Mohawk",
productMohawkDescription: "Descubre esta planta tradicional para tu colección de semillas.",

productSunflowerName: "Semillas de Girasol",
productSunflowerDescription: "Cultiva girasoles por sus alegres flores y su llamativa presencia en el jardín.",

productCrapeName: "Semillas de Mirto Crespón Rosa",
productCrapeDescription: "Cultiva mirto crespón, una hermosa planta ornamental con flores de colores durante distintas temporadas.",

            exploreProducts: "Explora nuestros productos",
            addToCart: "Añadir al carrito",
            buyWithPaypal: "Comprar con PayPal",
            buyOnEbay: "Comprar en eBay",
            quantity: "Cantidad",
            remove: "Eliminar",
            checkout: "Pagar",
            emptyCart: "Tu carrito está vacío.",
            continueShopping: "Seguir comprando",

            learnTitle: "Conoce más sobre nuestras semillas",
            plantCollection: "Descubre nuestras plantas y semillas",
            gardeningBasics: "Conceptos básicos de jardinería para principiantes",
            followFacebook: "Síguenos en Facebook",
            familyTradition: "Cultivando una tradición familiar",
            growingTipsTitle: "Cinco consejos para cultivar desde semillas",

            loginTitle: "Te damos la bienvenida",
            emailAddress: "Correo electrónico",
            password: "Contraseña",
            logInButton: "Iniciar sesión",
            createAccount: "Crear una cuenta",
            forgotPassword: "¿Olvidaste tu contraseña?",
            createAccountTitle: "Crea tu cuenta",
            fullName: "Nombre completo",
            createPassword: "Crear contraseña",
            passwordTip:
                "Usa al menos 8 caracteres. Elige una contraseña segura y única.",
            marketingConsent:
                "Quiero recibir correos promocionales y ofertas especiales.",
            registerButton: "Registrarse",
            alreadyAccount: "¿Ya tienes una cuenta? Inicia sesión",
            resetPasswordTitle: "Restablecer tu contraseña",
            sendResetEmail: "Enviar correo para restablecer la contraseña",
            backToLogin: "Volver al inicio de sesión",
            yourAccount: "Tu cuenta",
            logOut: "Cerrar sesión",

            msgCreatingAccount: "Creando tu cuenta...",
            msgAccountCreated: "¡Tu cuenta se creó correctamente!",
            msgCheckEmail:
                "¡Registro recibido! Revisa tu correo para encontrar el enlace de verificación.",
            msgSigningIn: "Iniciando sesión...",
            msgLoginFailed:
                "No se pudo iniciar sesión. Revisa tu correo y contraseña, y verifica tu correo si es necesario.",
            msgLoggedIn: "¡Has iniciado sesión!",
            msgResetSent:
                "Si existe una cuenta con esa dirección, recibirás un correo para restablecer la contraseña.",
            msgLogoutFailed: "No se pudo cerrar la sesión. Inténtalo de nuevo.",
            msgLoggedOut: "Has cerrado sesión.",
            msgSessionFailed:
                "No se pudo comprobar tu sesión. Actualiza la página.",
            msgResetInstructions:
                "Abre el enlace de restablecimiento y luego introduce una contraseña nueva.",
            accountEmail: "Correo electrónico:",
            accountName: "Nombre:",
            customer: "Cliente",
            couponInfo:
                "Puede haber ofertas para la primera compra disponibles al pagar.",
            footerThanks: "¡Gracias por apoyar nuestra tienda de semillas!",
            learnPageTitle: "Conoce Más Sobre Nuestras Semillas",
learnIntroOne: "Bienvenidos a Celso's Semillas, donde las semillas nos conectan con la tierra, nuestros alimentos, nuestra familia y generaciones de tradiciones de jardinería.",
learnIntroTwo: "Explora nuestras variedades de semillas, descubre cómo utilizar hierbas conocidas y aprende los conceptos básicos para cultivar plantas en casa. Tanto si eres nuevo en la jardinería como si tienes años de experiencia, todo jardín comienza con una semilla.",
       plantCollectionIntro: "Cada planta tiene sus propias características y necesidades de cultivo. Utiliza estas descripciones para conocer mejor las variedades disponibles en Celso's Semillas.",
papaloLearnDescription: "El pápalo es una hierba aromática utilizada en la cocina mexicana y de otros países de América Latina. Sus hojas frescas tienen un sabor intenso y distintivo, y se pueden disfrutar con tacos, sándwiches, salsas y otros platillos.",
papaloGrowingTipLabel: "Consejo de cultivo:",
papaloGrowingTip: "Cultiva el pápalo en clima cálido, con abundante luz solar y tierra con buen drenaje. Deja que la tierra drene entre riegos.",
papaloHarvestLabel: "Cosecha:",
papaloHarvest: "Recoge las hojas jóvenes y saludables a medida que crece la planta.",
     epazoteLearnDescription: "El epazote es una hierba culinaria tradicional mexicana con un aroma fuerte y distintivo. Se utiliza en algunos platillos de frijoles, sopas y recetas regionales.",
epazoteGrowingTipLabel: "Consejo de cultivo:",
epazoteGrowingTip: "El epazote generalmente crece bien en condiciones cálidas, lugares soleados y tierra con buen drenaje.",
epazoteHarvestLabel: "Cosecha:",
epazoteHarvest: "Cosecha pequeñas cantidades de hojas cuando las necesites. Utiliza esta hierba con moderación porque tiene un sabor fuerte.",
chileLearnDescription: "El chile piquín produce pequeños chiles picantes muy populares en la cocina mexicana. Sus frutos aportan bastante picor a las salsas, los aderezos y los condimentos.",
chileGrowingTipLabel: "Consejo de cultivo:",
chileGrowingTip: "Proporciónale calor, luz solar, riego regular y tierra con buen drenaje. Los chiles necesitan una temporada de cultivo cálida y suficientemente larga.",
chileHarvestLabel: "Cosecha:",
chileHarvest: "Recoge los chiles cuando alcancen el grado de madurez deseado. Ten cuidado al manipular los frutos picantes.",
arugulaLearnDescription: "La rúcula es una verdura de hoja verde conocida por su sabor ligeramente picante. Es ideal para ensaladas, sándwiches y como toque fresco en muchas comidas.",
arugulaGrowingTipLabel: "Consejo de cultivo:",
arugulaGrowingTip: "La rúcula generalmente crece mejor en climas frescos. Necesita tierra fértil y humedad constante. El calor puede hacer que sus hojas sean más amargas y provocar la floración.",
arugulaHarvestLabel: "Cosecha:",
arugulaHarvest: "Recoge las hojas jóvenes para obtener una textura tierna y un sabor más suave.",
basilLearnDescription: "La albahaca dulce es una hierba aromática utilizada con frecuencia en pastas, ensaladas, salsas y pesto casero.",
basilGrowingTipLabel: "Consejo de cultivo:",
basilGrowingTip: "La albahaca prefiere el clima cálido, la luz solar y la tierra con buen drenaje. Riega cerca de la tierra en lugar de mojar continuamente las hojas.",
basilHarvestLabel: "Cosecha:",
basilHarvest: "Recorta las puntas de crecimiento para que la planta se vuelva más frondosa. Retira los botones florales cuando quieras favorecer el crecimiento de las hojas.",
hollyLearnDescription: "El acebo es un arbusto atractivo conocido por sus hojas verdes brillantes y sus bayas rojas. Puede aportar belleza y color estacional al jardín.",
hollyGrowingTipLabel: "Consejo de cultivo:",
hollyGrowingTip: "El acebo crece mejor en tierra con buen drenaje y en un lugar con luz solar adecuada. Riégalo regularmente mientras se establece.",
hollyNoteLabel: "Nota importante:",
hollyNote: "Las bayas del acebo son venenosas si se ingieren. Mantenlas alejadas de los niños y las mascotas.",
dandelionLearnDescription: "El diente de león es una planta resistente con flores amarillas brillantes y las conocidas cabezas de semillas esponjosas. Sus hojas jóvenes se utilizan en ensaladas y para cocinar.",
dandelionGrowingTipLabel: "Consejo de cultivo:",
dandelionGrowingTip: "El diente de león crece en muchos tipos de suelo y se desarrolla bien en lugares soleados. Riégalo durante los períodos secos mientras crece.",
dandelionGardenNoteLabel: "Nota para el jardín:",
dandelionGardenNote: "El diente de león se propaga fácilmente por semillas. Retira las flores antes de que formen cabezas de semillas esponjosas si deseas limitar su propagación.",
mohawkLearnDescription: "El tabaco sagrado Mohawk es una planta con importancia cultural e histórica para las comunidades indígenas. Aprende sobre su importancia tradicional y sus características de cultivo.",
mohawkGrowingTipLabel: "Consejo de cultivo:",
mohawkGrowingTip: "Colócalo en un lugar soleado y en tierra con buen drenaje. Sigue las instrucciones del paquete de semillas para la profundidad y el espacio de siembra.",
mohawkWarningLabel: "Advertencia importante:",
mohawkWarning: "Las plantas de tabaco contienen nicotina, una sustancia tóxica y adictiva. Mantén todas las partes de la planta alejadas de niños y mascotas. No la consumas.",
sunflowerLearnDescription: "Los girasoles son plantas alegres y coloridas, conocidas por sus grandes flores y semillas comestibles. Atraen a los polinizadores y embellecen el jardín.",
sunflowerGrowingTipLabel: "Consejo de cultivo:",
sunflowerGrowingTip: "Planta los girasoles en un lugar soleado y con tierra de buen drenaje. Deja suficiente espacio para las variedades altas y utiliza soportes si es necesario.",
sunflowerHarvestLabel: "Cosecha:",
sunflowerHarvest: "Deja que la flor madure y se seque. Cosecha las semillas cuando estén llenas y la parte trasera de la flor se haya vuelto marrón.",
crapeLearnDescription: "La Lagerstroemia rosa es un arbusto conocido por sus hermosos racimos de flores rosadas. Puede aportar color duradero a un jardín soleado.",
crapeGrowingTipLabel: "Consejo de cultivo:",
crapeGrowingTip: "Plántala en un lugar soleado y con tierra de buen drenaje. Riégala regularmente mientras sea joven y reduce el riego cuando esté establecida.",
crapePatienceLabel: "Paciencia:",
crapePatience: "Las semillas de Lagerstroemia necesitan calor y humedad adecuados para germinar. El crecimiento lleva tiempo, así que ten paciencia mientras se desarrollan las plantas.",
gardeningIntro: "No necesitas una granja grande ni un jardín elaborado para comenzar a cultivar plantas. Un espacio soleado en el jardín o un recipiente adecuado puede ser un excelente comienzo.",
growingTipsTitle: "Cinco consejos para cultivar desde semillas",
gardeningTipOneTitle: "Elige el lugar adecuado.",
gardeningTipOne: "Antes de decidir dónde cultivar tu planta, averigua cuánta luz solar necesita.",
gardeningTipTwoTitle: "Prepara la tierra.",
gardeningTipTwo: "Utiliza una mezcla adecuada para iniciar semillas en recipientes o mejora la tierra del jardín según sea necesario. Los recipientes deben tener orificios de drenaje.",
gardeningTipThreeTitle: "Planta a la profundidad correcta.",
gardeningTipThree: "Sigue las instrucciones del paquete de semillas. Algunas semillas necesitan luz para germinar y no deben enterrarse profundamente.",
gardeningTipFourTitle: "Riega con cuidado.",
gardeningTipFour: "Mantén el medio de cultivo adecuadamente húmedo sin dejar las semillas ni las raíces sumergidas en agua.",
gardeningTipFiveTitle: "Ten paciencia y observa.",
gardeningTipFive: "Los tiempos de germinación varían. Observa el crecimiento nuevo, ajusta el riego según sea necesario y protege las plantas jóvenes del clima extremo.",
seedVarietiesNoteTitle: "Una nota sobre las variedades de semillas:",
seedVarietiesNote: "Los tiempos de crecimiento, el tamaño al alcanzar la madurez, las tasas de germinación y los cuidados necesarios varían según la especie, la variedad y las condiciones locales. Consulte las instrucciones incluidas con cada paquete de semillas para obtener la orientación más específica.",
followFacebook: "Síguenos en Facebook",
facebookIntro: "¡Mantente conectado con Celso's Semillas en Facebook! Sigue nuestra página para recibir novedades sobre semillas, consejos de jardinería, fotos de plantas, tradiciones familiares y noticias de nuestra comunidad en crecimiento.",
growingFamilyTraditionTitle: "Cultivando una tradición familiar",
growingFamilyTraditionIntro: "En Celso's Semillas, las semillas representan mucho más que plantas. Nos recuerdan a la familia, la tradición, el trabajo duro y la conexión entre la tierra y los alimentos que compartimos. Esperamos que nuestras semillas te inspiren a comenzar un jardín, aprender algo nuevo y crear tus propias tradiciones.",
growingFamilyTraditionThanks: "Gracias por formar parte de la comunidad de Celso's Semillas. ¡Te deseamos una temporada de cultivo llena de satisfacciones!",
welcomeBack: "¡Bienvenido de nuevo!",
emailAddress: "Correo electrónico",
password: "Contraseña",
logInButton: "Iniciar sesión",
createAccount: "Crear una cuenta",
forgotPassword: "¿Olvidaste tu contraseña?",
createYourAccount: "Crea tu cuenta",
fullName: "Nombre completo",
createPassword: "Crear contraseña",
passwordRequirement: "Usa al menos 8 caracteres. Elige una contraseña segura y única.",
marketingConsent: "Me gustaría recibir correos promocionales y ofertas especiales.",
registerButton: "Registrarse",
alreadyHaveAccount: "¿Ya tienes una cuenta? Inicia sesión",
resetYourPassword: "Restablecer tu contraseña",
sendResetEmail: "Enviar correo para restablecer la contraseña",
backToLogin: "Volver a iniciar sesión",
yourAccount: "Tu cuenta",
logOut: "Cerrar sesión",
accountEmail: "Correo electrónico:",
accountName: "Nombre:",
firstPurchaseOffers: "Puede haber ofertas para tu primera compra al finalizar el pedido.",
supportHeroTitle: "¡Ayuda a nuestra familia a crecer y florecer! 🌱",
supportHeroText: "Cada semilla tiene una historia, cada cosecha lleva una tradición y cada mano amiga hace la diferencia. Gracias por ser parte de la familia Celso's Semillas.",
supportFarmButton: "Apoya Nuestra Granja",
supportMerchTitle: "Luce tu apoyo 🌻",
supportMerchIntro: "¡Lleva contigo un pedacito de Celso's Semillas! Compra nuestros artículos con el logotipo y ayuda a apoyar el camino agrícola de nuestra familia.",
supportShirtTitle: "Playera con el logotipo de Celso's Semillas",
supportShirtText: "Demuestra tu apoyo a Celso's Semillas con nuestra playera con logotipo. ¡Lleva contigo tu amor por las semillas, la familia y las tradiciones agrícolas!",
supportShopShirt: "Comprar playera en eBay",
supportStickerTitle: "Calcomanía con el logotipo de Celso's Semillas",
supportStickerText: "¡Lleva contigo un pedacito de nuestra familia! Muestra el logotipo de Celso's Semillas en tus pertenencias favoritas.",
supportShopSticker: "Comprar calcomanía en eBay",
supportDreamTitle: "Nuestro sueño: Cultivar mucho más que semillas 🐝",
supportStory1: "En Celso's Semillas, nuestras raíces están profundamente ligadas a la familia, la fe, la agricultura y la tradición. Queremos mantener vivas estas tradiciones mientras cultivamos algo significativo para las futuras generaciones.",
supportStory2: "Nuestro próximo gran sueño es adquirir más terreno para nuestra granja de abejas.",
supportStory3: "Las abejas son polinizadoras importantes y esperamos crear más espacio para la apicultura a medida que crezca nuestra granja. Tu apoyo nos ayuda a alcanzar esta meta, mantener nuestras actividades agrícolas y construir un legado familiar duradero.",
supportStory4: "Ya sea que compres nuestros productos o contribuyas al futuro de nuestra granja, agradecemos que formes parte de este crecimiento. Cada muestra de apoyo significa mucho para nuestra familia.",
supportDonationTitle: "Ayúdanos a seguir creciendo 🌿",
supportDonationIntro: "¿Te gustaría ayudarnos a continuar nuestro camino agrícola? Elige un método de pago para apoyar nuestra granja y nuestra meta de ampliar nuestro proyecto de apicultura.",
supportPaypalTitle: "Apóyanos con PayPal 💚",
supportPaypalText: "Tu contribución nos ayuda a continuar nuestro trabajo en la granja y nos acerca al sueño de adquirir más terreno para las abejas. ¡Gracias por ayudar a nuestra familia a crecer!",
supportPaypalButton: "Contribuir con PayPal",
supportBitcoinTitle: "Apóyanos con Bitcoin ₿",
supportBitcoinText: "¿Prefieres las criptomonedas? Puedes apoyar nuestro camino agrícola usando Bitcoin.",
supportBitcoinNote: "Antes de enviar, verifica la dirección receptora y asegúrate de que tu billetera esté usando la red Bitcoin. Por lo general, las transferencias de criptomonedas no se pueden revertir.",
supportBitcoinQRTitle: "Donar con Bitcoin ₿",
supportBitcoinCaption: "DONACIÓN EN BITCOIN",
supportBitcoinThanks: "¡Gracias por ayudar a crecer nuestra granja familiar! 🌱🐝",
supportClosing: "Gracias por ayudarnos a cultivar un legado de familia, fe y tradición. 🌱",
footerNewsletterDescription: "¡Recibe consejos de jardinería y notificaciones por correo electrónico cuando haya descuentos especiales disponibles!",
footerNewsletterButton: "Regístrate para recibir descuentos especiales",



},

        zh: {
            language: "语言",
            home: "首页",
            products: "产品",
            learnMore: "了解更多",
            login: "登录 / 注册",
            supportFarm: "支持我们的农场",
            cart: "购物车",
            shoppingCart: "购物车",

            siteName: "Celso's Semillas",
            footerTagline: "传承家庭、信仰与传统。",
            quickLinks: "快速链接",
            contactUs: "联系我们",
            emailLabel: "电子邮箱：",
            websiteAuthor: "网站作者：Chad Williams",
            copyright: "© 2026 Celso's Semillas。保留所有权利。",

            joinFamily: "加入我们不断壮大的大家庭！",
            newsletterText:
                "获取园艺技巧、种子上新消息，以及特别折扣的电子邮件通知。",
            newsletterButton: "注册获取特别折扣",
            gardenTipsButton: "获取园艺技巧和特别折扣",
homeStoryTitle: "我们的家庭故事",
familyStory: "班比和塞尔索",
heroDescription: "传承家庭、信仰、墨西哥香草以及源于土地的传统。",
bibleVerse: "圣经经文",
verseText: "地上的十分之一，无论是地里的种子还是树上的果子，都属于耶和华，是归给耶和华为圣的。",
verseReference: "利未记 27:30",
inoHeading: "伊诺·桑切斯",
inoDescription: "伊诺·桑切斯，塞尔索的妻子，在她的帕帕洛香草田里。",
celsoHeading: "塞尔索·桑切斯",
celsoDescription: "塞尔索·桑切斯，也被称为帕波，以及启发 Celso's Semillas 的家庭传统。",
musicFromCelso: "Celso 的音乐",
musicDescription: "欣赏塞尔索·桑切斯的音乐，感受 Celso's Semillas 背后的家庭、信仰与传统。",
listenApple: "在 Apple Music 上收听",
newsletterHeading: "加入我们不断壮大的大家庭！",
newsletterDescription: "获取园艺技巧、种子上新消息，以及特别折扣的电子邮件通知。",
productsHeroTitle: "种植美好的事物",
productsIntro: "欢迎来到 Celso's Semillas！探索我们的种子系列，为您的花园增添更多自然气息。",

productPapaloName: "帕帕洛香草种子",
productPapaloDescription: "种植帕帕洛香草，这是一种在墨西哥料理中广受欢迎的美味香草。为您的香草花园增添独特风味。",

productEpazoteName: "墨西哥土荆芥种子",
productEpazoteDescription: "种植墨西哥土荆芥，这是一种用于各种墨西哥传统菜肴的烹饪香草。",

productChileName: "墨西哥小辣椒种子",
productChileDescription: "种植墨西哥小辣椒，为您的花园增添辛辣风味。",

productArugulaName: "芝麻菜种子",
productArugulaDescription: "在花园中种植芝麻菜，这是一种常见的沙拉绿叶蔬菜，带有独特的辛香味。",

productBasilName: "甜罗勒种子",
productBasilDescription: "种植芳香的甜罗勒，收获新鲜叶片，用于沙拉、酱汁和家常菜肴。",

productHollyName: "冬青灌木种子",
productHollyDescription: "种植冬青灌木，为您的花园增添观赏性绿植。",

productDandelionName: "蒲公英种子",
productDandelionDescription: "种植蒲公英，这是一种常见的开花植物，拥有鲜艳的花朵和独特的种子头。",

productMohawkName: "莫霍克神圣烟草种子",
productMohawkDescription: "将这种传统植物加入您的种子收藏。",

productSunflowerName: "向日葵种子",
productSunflowerDescription: "种植向日葵，欣赏它们充满活力的花朵和引人注目的园林景观。",

productCrapeName: "粉色紫薇种子",
productCrapeDescription: "种植紫薇，这是一种美丽的观赏植物，会在不同季节绽放色彩缤纷的花朵。",

            exploreProducts: "浏览我们的产品",
            addToCart: "加入购物车",
            buyWithPaypal: "使用 PayPal 购买",
            buyOnEbay: "在 eBay 购买",
            quantity: "数量",
            remove: "移除",
            checkout: "结账",
            emptyCart: "您的购物车是空的。",
            continueShopping: "继续购物",

            learnTitle: "进一步了解我们的种子",
            plantCollection: "了解我们的植物和种子",
            gardeningBasics: "初学者园艺基础",
            followFacebook: "在 Facebook 上关注我们",
            familyTradition: "传承家庭传统",
            growingTipsTitle: "播种种植的五个技巧",

            loginTitle: "欢迎回来",
            emailAddress: "电子邮箱地址",
            password: "密码",
            logInButton: "登录",
            createAccount: "创建账户",
            forgotPassword: "忘记密码？",
            createAccountTitle: "创建您的账户",
            fullName: "姓名",
            createPassword: "创建密码",
            passwordTip: "请使用至少 8 个字符，并选择安全且独特的密码。",
            marketingConsent: "我愿意接收促销邮件和特别优惠信息。",
            registerButton: "注册",
            alreadyAccount: "已有账户？登录",
            resetPasswordTitle: "重置密码",
            sendResetEmail: "发送密码重置邮件",
            backToLogin: "返回登录",
            yourAccount: "您的账户",
            logOut: "退出登录",

            msgCreatingAccount: "正在创建您的账户……",
            msgAccountCreated: "您的账户已成功创建！",
            msgCheckEmail: "已收到注册信息！请查看电子邮箱中的验证链接。",
            msgSigningIn: "正在登录……",
            msgLoginFailed: "无法登录。请检查邮箱和密码；如有需要，请验证您的邮箱。",
            msgLoggedIn: "您已成功登录！",
            msgResetSent: "如果该邮箱对应一个账户，我们将发送密码重置邮件。",
            msgLogoutFailed: "无法退出登录，请重试。",
            msgLoggedOut: "您已退出登录。",
            msgSessionFailed: "无法检查您的登录状态，请刷新页面。",
            msgResetInstructions: "打开重置链接后，请输入新密码。",
            accountEmail: "电子邮箱：",
            accountName: "姓名：",
            customer: "客户",
            couponInfo: "结账时可能会有首次购买优惠。",
            footerThanks: "感谢您支持我们的种子店！",
            learnPageTitle: "了解更多关于我们的种子",
learnIntroOne: "欢迎来到 Celso's Semillas！种子将我们与土地、食物、家庭以及世代相传的园艺传统联系在一起。",
learnIntroTwo: "探索我们的种子品种，了解常见香草的用途，并学习在家种植植物的基本知识。无论您是园艺新手还是经验丰富的种植者，每一个花园都始于一粒种子。",
      plantCollectionIntro: "每种植物都有自己的特点和生长需求。通过这些介绍，了解 Celso's Semillas 提供的各种植物品种。", 
papaloLearnDescription: "帕帕洛香草是一种芳香植物，常用于墨西哥和其他拉丁美洲料理。它的新鲜叶片味道浓郁独特，可以搭配玉米饼、三明治、莎莎酱和其他菜肴食用。",
papaloGrowingTipLabel: "种植提示：",
papaloGrowingTip: "帕帕洛香草适合在温暖的天气中生长，需要充足的阳光和排水良好的土壤。两次浇水之间要让土壤充分排水。",
papaloHarvestLabel: "采收：",
papaloHarvest: "随着植物生长，采摘鲜嫩健康的叶片。",
    epazoteLearnDescription: "墨西哥土荆芥是一种传统的墨西哥烹饪香草，具有浓烈而独特的香气。它常用于一些豆类菜肴、汤和地方特色食谱中。",
epazoteGrowingTipLabel: "种植提示：",
epazoteGrowingTip: "墨西哥土荆芥通常适合在温暖、阳光充足的环境中生长，并需要排水良好的土壤。",
epazoteHarvestLabel: "采收：",
epazoteHarvest: "根据需要少量采摘叶片。由于这种香草味道浓烈，请适量使用。",
chileLearnDescription: "墨西哥小辣椒会结出小而辛辣的果实，在墨西哥料理中很受欢迎。它们可以为酱汁、莎莎酱和调味料增添强烈的辣味。",
chileGrowingTipLabel: "种植提示：",
chileGrowingTip: "为植株提供温暖的环境、充足的阳光、定期浇水和排水良好的土壤。辣椒需要足够长的温暖生长季节。",
chileHarvestLabel: "采收：",
chileHarvest: "等辣椒达到理想的成熟程度后再采摘。处理辣椒果实时请小心。",
arugulaLearnDescription: "芝麻菜是一种带有辛香味的绿叶蔬菜，适合制作沙拉、三明治，也可以作为许多菜肴的新鲜配菜。",
arugulaGrowingTipLabel: "种植提示：",
arugulaGrowingTip: "芝麻菜通常在凉爽的天气中生长最好。为它提供肥沃的土壤和稳定的水分。炎热天气可能使叶片味道更苦，并促使植株开花。",
arugulaHarvestLabel: "采收：",
arugulaHarvest: "采摘幼嫩的叶片，可以获得更柔软的口感和更温和的味道。",
basilLearnDescription: "甜罗勒是一种芳香的烹饪香草，常用于意大利面、沙拉、酱汁和自制青酱。",
basilGrowingTipLabel: "种植提示：",
basilGrowingTip: "罗勒喜欢温暖的天气、充足的阳光和排水良好的土壤。浇水时尽量靠近土壤，而不是持续弄湿叶片。",
basilHarvestLabel: "采收：",
basilHarvest: "掐掉生长点以促进植株更茂盛，并在希望促进叶片生长时摘除花蕾。",
hollyLearnDescription: "冬青是一种观赏灌木，以光亮的绿色叶片和鲜红色浆果而闻名。它能为花园增添美感和季节性的色彩。",
hollyGrowingTipLabel: "种植提示：",
hollyGrowingTip: "冬青适合生长在排水良好的土壤和阳光适宜的地方。植株扎根期间要定期浇水。",
hollyNoteLabel: "重要提示：",
hollyNote: "冬青浆果误食后有毒。请将其放在儿童和宠物接触不到的地方。",
dandelionLearnDescription: "蒲公英是一种生命力顽强的植物，开着鲜黄色的花朵，并形成熟悉的蓬松种子球。它的嫩叶常用于沙拉和烹饪。",
dandelionGrowingTipLabel: "种植提示：",
dandelionGrowingTip: "蒲公英能在多种土壤中生长，在阳光充足的地方表现良好。生长期间遇到干旱时要浇水。",
dandelionGardenNoteLabel: "花园提示：",
dandelionGardenNote: "蒲公英很容易通过种子传播。如果想控制它的扩散，可以在花朵形成蓬松的种子球之前将其摘除。",
mohawkLearnDescription: "莫霍克神圣烟草是一种对原住民社区具有文化和历史意义的植物。了解它的传统意义和种植特点。",
mohawkGrowingTipLabel: "种植提示：",
mohawkGrowingTip: "选择阳光充足、排水良好的土壤。播种深度和间距请遵循种子包装上的说明。",
mohawkWarningLabel: "重要警告：",
mohawkWarning: "烟草植物含有尼古丁，这是一种有毒且容易使人上瘾的物质。请让儿童和宠物远离植物的所有部分。切勿食用。",
sunflowerLearnDescription: "向日葵是一种明亮而充满活力的植物，以硕大的花盘和可食用的种子而闻名。它们能吸引传粉昆虫，为花园增添美感。",
sunflowerGrowingTipLabel: "种植提示：",
sunflowerGrowingTip: "将向日葵种在阳光充足、排水良好的土壤中。较高的品种需要留出足够的空间，必要时提供支撑。",
sunflowerHarvestLabel: "采收：",
sunflowerHarvest: "让花盘充分成熟并变干。当种子饱满且花盘背面变成棕色时，就可以采收种子了。",
crapeLearnDescription: "粉色紫薇是一种开花灌木，以美丽的粉色花簇而闻名。它能为阳光充足的花园增添持久的色彩。",
crapeGrowingTipLabel: "种植提示：",
crapeGrowingTip: "将其种在阳光充足、排水良好的土壤中。幼苗期间定期浇水，植株扎根后可以减少浇水。",
crapePatienceLabel: "耐心等待：",
crapePatience: "紫薇种子需要适宜的温度和湿度才能发芽。生长需要时间，请耐心等待植株逐渐长大。",
gardeningIntro: "你不需要大型农场或复杂的花园也能开始种植植物。阳光充足的花坛或合适的容器都是很好的起点。",
growingTipsTitle: "从种子开始种植的五个技巧",
gardeningTipOneTitle: "选择合适的位置。",
gardeningTipOne: "在决定种植地点之前，先了解植物需要多少阳光。",
gardeningTipTwoTitle: "准备土壤。",
gardeningTipTwo: "在容器中使用适合育苗的土壤混合物，或根据需要改良花园土壤。容器必须有排水孔。",
gardeningTipThreeTitle: "按照正确的深度播种。",
gardeningTipThree: "遵循种子包装上的说明。有些种子需要光照才能发芽，因此不应埋得太深。",
gardeningTipFourTitle: "小心浇水。",
gardeningTipFour: "保持栽培介质适度湿润，不要让种子或根部长时间浸泡在水中。",
gardeningTipFiveTitle: "耐心等待并仔细观察。",
gardeningTipFive: "不同种子的发芽时间有所不同。留意新生长的部分，根据需要调整浇水，并保护幼苗免受极端天气影响。",
seedVarietiesNoteTitle: "关于种子品种的说明：",
seedVarietiesNote: "生长时间、成熟后的大小、发芽率和养护要求会因物种、品种和当地环境条件而有所不同。请查看每包种子附带的说明，以获取最具体的种植指导。",
followFacebook: "在 Facebook 上关注我们",
facebookIntro: "在 Facebook 上与 Celso's Semillas 保持联系！关注我们的主页，获取种子更新、园艺技巧、植物照片、家庭传统以及我们不断成长的社区的最新消息。",
growingFamilyTraditionTitle: "传承家庭传统",
growingFamilyTraditionIntro: "在 Celso's Semillas，种子代表的不仅仅是植物。它们让我们想起家庭、传统、辛勤劳动，以及土地与我们分享的食物之间的联系。我们希望我们的种子能激励您开始种植、学习新知识，并创造属于自己的传统。",
growingFamilyTraditionThanks: "感谢您成为 Celso's Semillas 社区的一员。祝您度过一个收获满满的种植季节！",
loginPageTitle: "登录 | Celso's Semillas",
welcomeBack: "欢迎回来",
emailAddress: "电子邮箱",
password: "密码",
logInButton: "登录",
createAccount: "创建账户",
forgotPassword: "忘记密码？",
createYourAccount: "创建您的账户",
fullName: "姓名",
createPassword: "创建密码",
passwordRequirement: "请使用至少 8 个字符，并选择安全且独特的密码。",
marketingConsent: "我希望收到促销邮件和特别优惠信息。",
registerButton: "注册",
alreadyHaveAccount: "已经有账户？登录",
resetYourPassword: "重置密码",
sendResetEmail: "发送密码重置邮件",
backToLogin: "返回登录",
yourAccount: "您的账户",
logOut: "退出登录",
accountEmail: "电子邮箱：",
accountName: "姓名：",
firstPurchaseOffers: "结账时可能会提供首次购买优惠。",
supportHeroTitle: "帮助我们的成长之家繁荣发展！🌱",
supportHeroText: "每一颗种子都有一个故事，每一次收获都承载着传统，每一份帮助都意义重大。感谢您成为 Celso's Semillas 大家庭的一员。",
supportFarmButton: "支持我们的农场",
supportMerchTitle: "穿上我们的品牌，表达您的支持 🌻",
supportMerchIntro: "把一份 Celso's Semillas 的温暖带回家！选购我们的品牌商品，支持我们家庭农场的发展。",
supportShirtTitle: "Celso's Semillas 品牌 T 恤",
supportShirtText: "穿上我们的品牌 T 恤，表达您对 Celso's Semillas 的支持！展现您对种子、家庭和农业传统的热爱！",
supportShopShirt: "在 eBay 购买 T 恤",
supportStickerTitle: "Celso's Semillas 品牌贴纸",
supportStickerText: "随身带着我们大家庭的一份心意！把 Celso's Semillas 标志贴在您喜爱的物品上。",
supportShopSticker: "在 eBay 购买贴纸",
supportDreamTitle: "我们的梦想：培育的不只是种子 🐝",
supportStory1: "在 Celso's Semillas，家庭、信仰、农业和传统是我们深厚的根基。我们希望延续这些传统，同时为未来的世代创造有意义的事业。",
supportStory2: "我们的下一个重要梦想是购置更多土地，扩大我们的养蜂农场。",
supportStory3: "蜜蜂是重要的传粉者。随着农场的发展，我们希望为养蜂事业创造更多空间。您的支持帮助我们实现这一目标，继续发展农业，并建立长久的家庭传承。",
supportStory4: "无论您购买我们的商品，还是为农场的未来提供支持，我们都感谢您与我们一同成长。每一份支持对我们的家庭都意义重大。",
supportDonationTitle: "帮助我们的农场继续发展 🌿",
supportDonationIntro: "您愿意帮助我们继续发展家庭农场吗？请选择以下付款方式，支持我们的农场以及扩大养蜂事业的目标。",
supportPaypalTitle: "通过 PayPal 支持我们 💚",
supportPaypalText: "您的捐助帮助我们继续经营农场，并让我们更接近为蜜蜂购置更多土地的梦想。感谢您帮助我们的家庭不断成长！",
supportPaypalButton: "通过 PayPal 捐助",
supportBitcoinTitle: "通过 Bitcoin 支持我们 ₿",
supportBitcoinText: "您更喜欢加密货币吗？您可以使用 Bitcoin 支持我们的农业事业。",
supportBitcoinNote: "发送前，请确认收款地址，并确保您的钱包使用的是 Bitcoin 网络。加密货币转账通常无法撤销。",
supportBitcoinQRTitle: "使用 Bitcoin 捐助 ₿",
supportBitcoinCaption: "比特币捐赠",
supportBitcoinThanks: "感谢您帮助我们的家庭农场不断成长！🌱🐝",
supportClosing: "感谢您帮助我们传承家庭、信仰与传统的精神。🌱",
footerNewsletterDescription: "获取园艺技巧，并在推出特别优惠时收到电子邮件通知！",
footerNewsletterButton: "注册获取特别优惠",



},
    };

    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return translations[saved] ? saved : "en";
        } catch (error) {
            return "en";
        }
    }

    let currentLanguage = getSavedLanguage();

    function translate(key) {
        return (
            translations[currentLanguage]?.[key] ??
            translations.en[key] ??
            key
        );
    }

    function applyTranslations() {
        document.documentElement.lang = currentLanguage === "zh"
            ? "zh-CN"
            : currentLanguage;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            element.textContent = translate(key);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-placeholder");
            element.setAttribute("placeholder", translate(key));
        });

        document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-title");
            element.setAttribute("title", translate(key));
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-aria-label");
            element.setAttribute("aria-label", translate(key));
        });

        const selector = document.getElementById("language-selector");
        if (selector) {
            selector.value = currentLanguage;
        }

        document.dispatchEvent(new CustomEvent("languageChanged", {
            detail: { language: currentLanguage }
        }));
    }

    function saveLanguage(language) {
        if (!translations[language]) return;

        currentLanguage = language;

        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            // The selected language still works for this page.
        }

        applyTranslations();
    }

    function addLanguageSelector() {
        const navbar = document.querySelector(".navbar");
        if (!navbar || document.getElementById("language-selector")) return;

        const wrapper = document.createElement("li");
        wrapper.className = "language-menu";

        const label = document.createElement("label");
        label.htmlFor = "language-selector";
        label.textContent = translate("language");

        const selector = document.createElement("select");
        selector.id = "language-selector";
        selector.setAttribute("aria-label", translate("language"));

        [
            { value: "en", text: "English" },
            { value: "es", text: "Español" },
            { value: "zh", text: "简体中文" }
        ].forEach(function (language) {
            const option = document.createElement("option");
            option.value = language.value;
            option.textContent = language.text;
            selector.appendChild(option);
        });

        selector.value = currentLanguage;
        selector.addEventListener("change", function () {
            saveLanguage(selector.value);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(selector);

        const navLinks = navbar.querySelector(".nav-links");
        if (navLinks) {
            navLinks.appendChild(wrapper);
        } else {
            navbar.appendChild(wrapper);
        }
    }

    window.CelsosTranslations = {
        translate: translate,
        setLanguage: saveLanguage,
        getLanguage: function () {
            return currentLanguage;
        },
        apply: applyTranslations
    };

    function initializeLanguageSystem() {
        addLanguageSelector();
        applyTranslations();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeLanguageSystem);
    } else {
        initializeLanguageSystem();
    }
})();

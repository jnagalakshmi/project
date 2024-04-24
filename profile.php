<DOCTYPE html>

    <html>
    
        <head>
    
        <meta charset="utf-8">
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!--==Title==================================-->
        <title>
    
            BHUMI Grocery Store
    
        </title>
    
        <!--==Stylesheet=============================-->
    <link rel="stylesheet" type="text/css" href="profile.css">

    <!--==Fav-icon===============================-->
    <link rel="shortcut icon" href="images/fav-icon.png"/>

    <!--==Using-Font-Awesome=====================-->
    <script src="https://kit.fontawesome.com/80d6d976a0.js" crossorigin="anonymous"></script>

    <script src="products.js"></script>
    <script src="wishcart.js"></script>
    <script src="cartt.js"></script>
   

    <script src = 'Home Page JS.js' defer></script>
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
	    
   <link rel="shortcut icon" type="image/jpg" href="C:\Users\hp\Desktop\College\First Semester\Introduction To Web Technologies\Notepad ++ Files\Project\favicon.ico"/>

   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" />
    </head>
    
        <body>
    
            <!--==Navigation================================-->
            <nav class="navigation">
    
                <!--logo-------->
                <div class="imagecon">
                <img class="img"  src="https://i.imgur.com/oRhEAUj.jpg">
                </div>
                
            
            <div class="menu">
                <li>
                    <a href="demo.html" class="active">
                        My Adress 
                        <i class="fa-solid fa-location-dot"></i>
                    </a>
                </li>  
            </div>
                <!--right-nav-(cart-like)-->
                <div class="right-nav">
                
    
                    <!--like----->
                    <a href="Wishlist.html" target="_blank" class="like">
    
                        <i class="fas fa-heart"></i>
    
                        <span class="js-wish-quantity">
                            
                            0
                        
                        </span>
    
                    </a>
    
                    <!--cart----->
                    <a href="cart.html" class="cart" target="_blank">
    
                        <i class="fas fa-shopping-cart"></i>
                        
                        <span class="js-cart-quantity">
                            
                            0
                        
                        </span>
    
                    </a>
    
                    <!--cart----->
                    <div class="user-profile">
                        <a href="#" class="trigger">
                          <i class="fas fa-user"></i>
                        </a>
                       
                          <div class="dropdown-content">
                            <a href="#">Account</a>
                            <a href="orders.html" target="_blank">Orders</a>
                            <a href="#">Logout</a>
                          </div>
                        
                      </div>
                </div>
    
            </nav>
    
            <!--nav-end--------------------->
    
            <!--==category=========================================-->
            <section id="main" >
                <div class="card">
                  <h1>Full Name :</h1>
                  <h1>Username  :</h1>
                  <h1>Number    :</h1>
                  <h1>E - mail  :</h1>
                  <h1>DOB       :</h1>
                  <h1>Gender    :</h1>
                </div>
            </section>
         
            <!--==Footer=============================================-->
            <footer>
                <div class="footer-container">
                    <!--logo-container------>
                    <div class="footer-logo">
                        <a href="file:///C:/Users/RAGHAV/Desktop/Coding/Grocery/Logo.png"><span>B</span>HUMI</a>
                        <!--social----->
                        <div class="footer-social">
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/?lang=en-in"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <!--links------------------------->
                <div class="footer-links">
                    <strong>Product</strong>
                    <ul>
                        <li><a href="#">Grocery</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">New</a></li>
                    </ul>
                </div>
                <!--links------------------------->
                <div class="footer-links">
                    <strong>Category</strong>
                    <ul>
                        <li><a href="#">Fruits</a></li>
                        <li><a href="#">Vegetables</a></li>
                        <li><a href="#">Dairy</a></li>
                        <li><a href="#">Spices</a></li>
                    </ul>
                </div>
                <!--links-------------------------->
                <div class="footer-links">
                    <strong>Contact</strong>
                    <ul>
                        <li><a href="#">Phone : +123456789</a></li>
                        <li><a href="#">Email : Bhumi@gmail.com</a></li>
                        <li><a href="#">Cities we serve</a></li>
                    </ul>
                    
                </div>
                </div>
            </footer>
    
        </body>
    </html>
    
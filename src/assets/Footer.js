import image from "../icons_assets/restaurant.jpg"
function Footer(){
    return(
        <>
        <footer>
         <div className="container">
            <div className="footer-el-contaier">
                <img src={image} alt="footer"></img>
                <div className="footer-txt-container">
                    <h3> Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">menu_</a></li>
                        <li><a href="#">Resevations</a></li>
                        <li><a href="#">Online Oreder</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="footer-txt-container">
                <h3>Contact</h3>
                    <ul>
                        <li><a href="#">Adress</a></li>
                        <li><a href="#">Phon Number</a></li>
                        <li><a href="#">E-mail</a></li>
                    </ul>
                </div>
                <div className="footer-txt-container">
                <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
                

            </div>

         </div>
        </footer>
        </>
    )
}

export default Footer 
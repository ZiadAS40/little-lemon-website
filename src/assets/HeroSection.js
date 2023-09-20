import image from '../restauranfood.jpg'
function HeroSection(){
    return(
        <>
        <section className="hero-section">
            <div className='container'>
             <div className="hr-sec-content">

              <div className='dicsreption-card'>

                 <h1>Little Lemon</h1>
                 <h3>Chigaco</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <button>Reserve a Table</button>

              </div>
           
            <img  className= "restauranfood-image" src={image} alt="Welcome"/>
            </div>

            </div>
        </section>
        </>
    )
}

export default HeroSection
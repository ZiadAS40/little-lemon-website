import Card from "./Card"
let dishes = [
     {
 tittle : "greekSalaad",
 discreption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
 getImage: ()=> require('../icons_assets/greek salad.jpg'),
    },
     {
        tittle : "brucheta",
        discreption: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ",
        getImage: ()=> require('../icons_assets/bruchetta.jpg'),
    },   
    {
        tittle : "lemonDessert",
        discreption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImage: ()=> require('../icons_assets/lemon dessert.jpg'),
    }
]

function SpecialSection(){
    let dishesList = dishes.map((dishe)=>(<Card
        key = {dishe.tittle}
        tittle = {dishe.tittle}
        desc = {dishe.discreption}
        url="https://github.com/rgommezz/react-native-offline" 
        getImage= {dishe.getImage()}
        />))
    return(
        <>
        <section className="speicial-sec">
         <div className="container">
          <div className="the-above-sec-and-the-dishes">

            <div className="the-above-sec">
                <h1>This weak Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="tha-dishes">
                {dishesList}
            </div>
           </div>
         </div>
        </section>
        </>
    )
}

export default SpecialSection
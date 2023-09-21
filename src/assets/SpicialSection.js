let dishes = {
    GreekSalaad : {
 tittle : GreekSalaad,
 dicreption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
 getImage: ()=> require('../icons_assets/greek salad.svg')
    },
    Brucheta : {
        tittle : Brucheta,
        dicreption: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ",
        getImage: ()=> require('../icons_assets/bruchetta.svg')
    },   
    lemonDessert : {
        tittle : LemonDessert,
        dicreption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImage: ()=> require('../icons_assets/lemon dessert.svg')
    }
}

function SpecialSection(){
    dishes.map(()=>(

    ))
    return(
        <>
        <section>
            <div className="the-above-sec">
                <h1>This weak Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="tha-dishes">
                
            </div>
        </section>
        </>
    )
}

export default SpecialSection
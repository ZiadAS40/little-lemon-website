import RatingCard from "./RatingCard"

let customersFeedback = [
    {
        name:"mark",
        rating: 4,
        discreption : "The food is good and Fresh",
        getImageSrc : ()=> require("../icons_assets/mike.jpg")
    },
    {
        name:"Robert",
        rating: 5,
        discreption : "brilliant stuff and good serves",
        getImageSrc : ()=> require("../icons_assets/robert.jpg")

    },
    {
        name:"Zach",
        rating: 4.5,
        discreption : "good experience,I will come again",
        getImageSrc : ()=> require("../icons_assets/zach.jpg")
    },
    {
        name:"Ali",
        rating: 4.6,
        discreption : "the place in clean and the food is fresh",
        getImageSrc : ()=> require("../icons_assets/Ali.jpg")
    }

]


function RatingSection(){
let ratingCards = customersFeedback.map(cus => {
    return <RatingCard
    key={cus.name}
    name ={cus.name}
    rating = {cus.rating}
    disc = {cus.discreption} 
    getImageSrc = {cus.getImageSrc()}
    />
}) 
    return(
        <>
        <section className="rating-sec">
             <div className="container">
                <h1 className="rate-heading"> Our Customer Feedback!</h1>
                <div className="rating-cards-conainer">
                 {ratingCards}
                </div>           
            
             </div>
        </section>
        </>
    )
}

export default RatingSection
function RatingCard ({name,rating,disc,getImageSrc}){
    return(
        <>
        <div className="rating-card">
            <div className="content-container">
              <div></div>
              <div className="img-name-cont">
                <img src={getImageSrc} alt="custumer " className="customer-img" />
                <h4>{name}</h4>
              </div>
              <p>{disc}</p>
            </div>
        </div>
        </>
    )
}

export default RatingCard
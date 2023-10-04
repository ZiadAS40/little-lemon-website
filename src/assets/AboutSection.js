import Imageone from "../icons_assets/Mario and Adrian A.jpg"
import ImageTwo from "../icons_assets/Mario and Adrian b.jpg"

function AboutSection(){
    return(
        <>
        <section className="about-sec">
          <div className="container">
            <div className="el-container">
               <div className="heading-co">
                 <h2>Little Lemon</h2>
                 <h3>Chicago</h3>
               </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>


            <div className="images-contaier">
              <div className="image-one">
                  <img src={Imageone} alt="stuff 1"/>
              </div>
              <div className="image-one">
                  <img src={ImageTwo} alt="stuff 2"/>
              </div>
            </div>
          </div>

        </section>
        
        </>
    )
}

export default AboutSection
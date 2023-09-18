function Nav(){
    let link ="https//:www.google.com" ;
    return(
        <>
        <ul>
            <li><a href ={link} key = {1} className="home">Home</a></li>
            <li><a href ={link} key = {2} className="about">About</a></li>
            <li><a  href ={link} key = {3} className="contact">contact</a></li>
            <li><a  href ={link} key = {4} className="rating">Rating</a></li>
        </ul>
        </>
    )
}

export default Nav
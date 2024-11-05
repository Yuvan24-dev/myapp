import Arrowclr from './img/color-arrow.png'; 
import abtrightimg from './img/about-img.png'; 
function AboutSection(){
 return(   
<section className="p-4 about_section ">
<div className="row">
<div className="col-12 col-sm-6"  >
<div className ="detail_Box">
<div className="heading_container">
<h2>About our Company</h2></div>
<p>
Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
'Content here, content here', making it look like readable English. Many desktop publishing
 packages and web pagend web page editors now use Lorem Ipsum as their default model text, 
 </p>
<a href="#">
 <span>Read More</span>   
 <img src={Arrowclr}></img>
</a>
</div>    
</div>  
{/* left side ended */}
<div className="col-12 col-sm-6">
<div className="img_box">
<img src={abtrightimg}></img>
</div>
</div>   
</div>
</section>
 )
}

export default AboutSection;

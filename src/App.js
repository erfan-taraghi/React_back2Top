import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { useEffect } from "react/cjs/react.development";


function App() {
  const [showBtn , setShowBtn ] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", function () {
      if(window.pageYOffset > 400){
        setShowBtn(true);
      }else{
        setShowBtn(false);
      }
    })
  }, [])
  
  const scrollTopBtn = () => {
    window.scroll({top : 0 , behavior : "smooth"})
  }

  return (
    <>  
      <section id="sectionOne">بخش اول</section>
      <section id="sectionTwo">بخش دوم</section>
      <section id="sectionThree">بخش سوم</section>
      <section id="sectionFour">بخش چهارم</section>

      <button onClick={scrollTopBtn} className={showBtn ? "to-top active" : "to-top"}>
       <FaChevronUp />
      </button>
    </> 
  );
}

export default App;

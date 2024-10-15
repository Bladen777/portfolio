//local imports
import Header from "./Header/Header";
import Footer from "./Footer";
import AnimatedOutlet from "../routes/AnimatedOutlet";
import {Content_Provider} from "./Content_Popup/Content_Context";




function App() {


  
  return (
      <>
        <Content_Provider>
          <Header />
          <div id="animated_outlet">
            <AnimatedOutlet /> 
          </div>
          <Footer />
        </Content_Provider>
      </>
  )
}

export default App

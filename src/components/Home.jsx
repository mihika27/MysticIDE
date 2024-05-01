import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
//fragments are faster than other elemets
//self closing tag 
//jsx does not allow adjacent JSX element


const Home = () =>{
    return(
         <> 
       
        <Header/>        
        <Code/> 
        <Result/>
        </>
    
    
    )
}
export default Home;
import React,{useState,useEffect} from "react";
import LIST from './component/List'
import FORM from './component/Form'


function App() {

  const [links, setLinks] = useState();

  const loadLinks = async () => {
      const res = await fetch('/api/getLinks');
      const Links = await res.json();
      setLinks(Links)
      // console.log(Links);
  }

  // console.log("use", links);

  useEffect(() => {
      loadLinks();
  }, [])

  return (
    <div className="App">

     <FORM loadLinks={loadLinks} />
     <LIST links={links} loadLinks={loadLinks}/>

    </div>
  );
}

export default App;

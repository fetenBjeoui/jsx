import { render } from "@testing-library/react";
import React from "react";
import './App.css';
import './component/profil/Address';
import Address from "./component/profil/Address";
import './component/profil/FullName';
import FullName from "./component/profil/FullName";
import ProfilPhoto from "./component/profil/ProfilPhoto";


const App = () => {
   render()
   {
  return (
   <div className="App-header">
   
   <div className="image">
      <ProfilPhoto/>
      </div>
      <React.Fragment>
    <Address/>
    </React.Fragment>
   <div>
       <FullName/>
</div>
 </div>
  );
  };

};
export default App;
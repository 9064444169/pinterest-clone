import { Add, Chat, Notifications, FavoriteRounded, Person, QuestionMark } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import MenuContainer from './Components/MenuContainer';
import Pin from './Components/Pin';
import Store from './Components/Store';

function App() {

  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");
    
    function setMenuActive(){
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add('active')
    }

    allIcon.forEach(n => n.addEventListener('click', setMenuActive))
  },[]);

  return (
    <div className="App">
     <div className="menuContainer">
     <img src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" alt="pinterest" className="logo" />
     
     <div className="subMenu">
       <div>
         <MenuContainer icon={<Person />} 
         />
          <MenuContainer icon={<Notifications />} 
         />
          <MenuContainer icon={<Chat />} 
         />
       </div>

       <div>
         <MenuContainer icon={<FavoriteRounded />} 
         />
       </div>

       <div>
         <MenuContainer icon={<QuestionMark />} 
         />
          <MenuContainer icon={<Add />} 
         />
       </div>
     </div>
     </div>
        <main>
          <div className="searchBox">
            <input type="text" placeholder='Search the images' />
            <div className="search">
              <img src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be" alt="arrow" />
            </div>
          </div>
          <div className="mainContainer">

            {
              Store && Store.map((data) => (

                <Pin pinSize={data.size} img={data.img} name={data.name} link={data.link}/>
                
              ))
            }
          </div>
        </main>    
    </div>
  );
}

export default App;

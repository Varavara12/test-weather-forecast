import React from 'react';

class Forms extends React.Component{
     render() {
         return(
             <div>
                 <form>
                     <input type="text" name="city" placeholder="Выберите город"/>
                     <button>Получить</button>
                 </form>
             </div>
         )
     }
}

export default Forms
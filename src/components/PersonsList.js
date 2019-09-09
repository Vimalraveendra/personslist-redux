import React from 'react';
import Person from './Person';
import './PersonsList.css';

const PersonsList = ({personsArray}) =>{  
	return(
        <React.Fragment>
         <div className='grid-container'>
           {
             personsArray.map(user=>{
             return <Person key ={user.login.uuid}
                         firstName={user.name.first}
                         lastName = {user.name.last}
                         img= {user.picture.large}
                         email={user.email}
                         cell={user.cell}
                         city={user.location.city}
                     />
            })
           }
          </div>
       </React.Fragment>
		)
}


export default PersonsList;
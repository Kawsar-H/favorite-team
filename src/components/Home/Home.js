import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'
import background from '../../images/th.jfif';

const Home = () => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res=>res.json())
      .then(data=>setTeams(data.teams))
    }, [])
   

    const styleCss ={
        background: `url(${background})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px',
        
        }
    //------------
    return (
        <div style={{backgroundColor:"orange"}}>
            <div style={styleCss}>
              <h1 className="headline">Your Favorite Team</h1>
             </div>  
       <div className="row">
       {
         teams.map((team)=><Team team={team} key={team.idTeam}></Team>)
       }
       </div>
        </div>
    );
};

export default Home;
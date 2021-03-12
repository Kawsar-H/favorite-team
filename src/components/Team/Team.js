
import { Link } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
  const { strTeamLogo, strTeam, strLeague, strSport, idTeam } = props.team;

  return (
    <div className="col-md-4 divDesign">
      <img className="img" src={strTeamLogo} alt="" />
      <h1>{strTeam}</h1>
      <h3>{strLeague}</h3>
      <h3>{strSport}</h3>
      <Link to={`/about/${idTeam}`}><button style={{ backgroundColor: "yellow", width: '100px', padding: '5px' }}>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>



    </div>
  );
};

export default Team;
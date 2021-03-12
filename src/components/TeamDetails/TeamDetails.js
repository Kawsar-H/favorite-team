import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFlag,faFutbol, faVenusDouble, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitterSquare, faYoutube} from '@fortawesome/free-brands-svg-icons'






const TeamDetails = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))

    }, [id])


    return (
        <main style={{backgroundColor:"black"}}>

            <div style={{
                background: `url(${teamDetails.strStadiumThumb})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '500px',
                opacity: '0.6'
            }}>
                <img className="image" src={teamDetails.strTeamLogo} alt="clubteam" />
            </div>
            <div className="row  mt-3">
                <div className="col-md-6 text-center p-5 divone bg-warning">
                    <h1>{teamDetails.strTeam}</h1>
                    <h2><FontAwesomeIcon icon={faClock} /> Founded: {teamDetails.intFormedYear}</h2>
                    <h2><FontAwesomeIcon icon={faFlag} /> Country: {teamDetails.strCountry}</h2>
                    <h2><FontAwesomeIcon icon={faFutbol} /> Sport Type: {teamDetails.strSport}</h2>
                    <h2><FontAwesomeIcon icon={faVenusDouble} /> Gender: {TeamDetails.strGender}</h2>

                </div>
                <div className="col-md-6 divone">
                    {
                        teamDetails.strGender && teamDetails.strGender === "Male" ? (
                            <img className="img-fluid" src={male} alt="playerphoto" />
                        ) : (
                            <img className="img-fluid" src={female} alt="womenplayer" />
                        )}
                </div>

            </div>
            <div className="divtwo">
                <p>{teamDetails.strStadiumDescription}</p>
            </div>



            <div className="cointainer">
                <div className="chlid">
                <span style={{marginRight:'20px'}}><a targe="_blank" href={`https:/${teamDetails.strFacebook}`}><FontAwesomeIcon icon={faFacebookF} className="fa-4x bg-white rounded p-1" /></a></span>
                <span style={{marginRight:'20px'}}><a targe="_blank" href={`https:/${teamDetails.strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} className="fa-4x bg-white rounded p-1" /></a></span>
                <span style={{marginRight:'20px'}}><a targe="_blank" href={`https:/${teamDetails.strYoutube}`}><FontAwesomeIcon icon={faYoutube} className="fa-4x bg-white rounded p-1" /></a></span>
                </div>
            </div>








        </main>





    );
};

export default TeamDetails;
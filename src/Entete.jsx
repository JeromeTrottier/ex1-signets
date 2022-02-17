import './Entete.scss';
import Avatar from '@mui/material/Avatar';

export default function Entete(props){
    return (
        <header className="Entete">
            <nav>
                <a href="#">Signets</a>
            </nav>
            <div className="utilisateur">
                <a href="#">Camille Semaan</a>
                <Avatar alt="Camille Semaan" src="images/avatar/utilisateur001.jpeg"/>
            </div>
        </header>
    );
}
import './Welcome.css';

function Welcome(props) {
    return (
        <div className="welcome-container">
            <div className="welcome-message">
                Bem Vindo, <span className="props-name">{props.name}</span>!
            </div>
        </div>
    );
}

export default Welcome;

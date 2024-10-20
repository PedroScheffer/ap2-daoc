import './Header.css'

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <span className="header-subtitle">{subtitle}</span>
            <h1 className="header-title">{title}</h1>
        </div>
    )
}

export default Header
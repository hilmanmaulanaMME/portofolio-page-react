export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-wrapper">
                    <div className="logo-box">
                        <span>Hilman Maulana</span>
                    </div>
                    <div className="navbar-list">
                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="./">About Me</a></li>
                            <li><a href="./">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
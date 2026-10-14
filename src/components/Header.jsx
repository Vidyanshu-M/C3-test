function Header ({batchName,totalStudents}){
    return (
        <header className="header">
            <h1 className="header__title">{batchName}</h1>
            <h2 className = "header__Subtitle">Total Students: {totalStudents}</h2>
            <div className="student__count"></div>

        </header>
    );
}
export default Header;
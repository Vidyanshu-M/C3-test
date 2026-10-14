function StudentCard({ student }) {
    return (
        <div className="student-card">
            <h3 className="student-card__name">{student.name}</h3>
            <p className="student-card__city">{student.city}</p>
            <p className="student-card__emoji">{student.emoji}</p>
            <p className="student-card__fun-fact">{student.funFact}</p>
            <div className="skills">
                {student.skills.map((skill) => (
                    <span className="skill_tag" key={skill}>{skill}</span>
                ))}
        </div>
        </div>
    );
}
export default StudentCard;
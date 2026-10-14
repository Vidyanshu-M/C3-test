import students from "./data";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
    const batchName = "Batch 2024";

    return (
        <div className="app">
            <Header batchName={batchName} total={students.length}/>
            <main className="container">
            <StudentList students={students} />
            </main>
        </div>
    );
}

export default App;
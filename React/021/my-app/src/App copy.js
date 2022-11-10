import "./app.css";
import { One } from "./components/One";
import { Two } from "./components/Two";

function App() {
    const style = { backgroundColor: "black", color: "white" };
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                hello 1
            </div>
            <div style={style}>hello 2</div>
            <h2 className="hello">hello</h2>
            <h2 className="hi">hello</h2>
            <One />
            <Two />
        </div>
    );
}

export default App;

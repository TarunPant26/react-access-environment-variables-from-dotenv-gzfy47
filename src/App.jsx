export default function App() {
    return (
        <div class="card m-3">
            <h5 class="card-header">React - Access Environment Variables from dotenv (.env)</h5>
            <div class="card-body">
                <p>REACT_APP_MY_ENV_VARIABLE: {process.env.REACT_APP_MY_ENV_VARIABLE}</p>
                <p>SERVER_SIDE_ONLY_VAR: {process.env.SERVER_SIDE_ONLY_VAR}</p>
            </div>
        </div>
    );
}

import { Navigation } from "./index";
export default function Header(props) {
    return (
        <header className="text-center border border-top-0 border-start-0 border-end-0">
            <h1>Liam Peachey</h1>
            <Navigation {...props} />
        </header>
    );
}
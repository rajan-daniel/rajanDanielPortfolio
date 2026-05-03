import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Roadmap from "./components/Roadmap";
import ToolsLists from "./components/ToolsList";

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <TechLists />
                    <ToolsLists />
                    <Roadmap />
                </main>
            </div>
        </>
    );
}

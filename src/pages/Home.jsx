import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
    return (
        <div className="flex relative fex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero />
            <img src={wave} alt="" className="absolute bottom-0 w-full"/>
        </div>
    );
};

export default Home;
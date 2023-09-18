import SportMenu from "./SportMenu";
import SingleSlider from "./SingleSlider";

const MainMenuRe = () => {
    return (
        <div className="MainMenuRe min-h-screen">
                <SportMenu main={true} />
                <SingleSlider />
                
        </div>
    )
}

export default MainMenuRe;
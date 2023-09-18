import { useNavigate } from "react-router-dom"

const Mainbottom = ({title, color, url}) => {
    const Navigate = useNavigate();
    return (
        <div>
             <div className="main-menu-button my-3 flex items-center justify-between px-3 NanumSquareEB text-black mx-auto">
                <div className="text-lg flex items-center">{title}</div>
                <div className={`text-sm main-menu-sub-button-${color} text-center flex items-center justify-center`}>
                    <button onClick={() => { Navigate(`${url}`) }}>바로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Mainbottom;
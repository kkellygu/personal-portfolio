import "./personal.css"
import standin from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/IMG_9660.JPG';

export default function Personal(){
    return(
        <div className="personal" id="personal">
            <h1>extracurriculars</h1>
            <ul>
                <li className="active">csa</li>
                <li>aKDPhi</li>
                <li>guzheng</li>
                <li>dance</li>
                <li>photography</li>
            </ul>
            
            <div className="container">
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
                <div className="item">
                    <img src={standin} alt="whoop" />
                    <h3>presidency</h3>
                </div>
            </div>
        </div>
    )
}
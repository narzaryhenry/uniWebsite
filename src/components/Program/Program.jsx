import "./Program.css";
import prog_1 from "../../assets/program-1.png";
import prog_2 from "../../assets/program-2.png";
import prog_3 from "../../assets/program-3.png";
import prog_icon_1 from "../../assets/program-icon-1.png";
import prog_icon_2 from "../../assets/program-icon-2.png";
import prog_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={prog_1} alt="Program-1" />
        <div className="caption">
          <img src={prog_icon_1} alt="Icon-1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prog_2} alt="Program-2" />
        <div className="caption">
          <img src={prog_icon_2} alt="Icon-1" />
          <p>Post-Grad Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prog_3} alt="Program-3" />
        <div className="caption">
          <img src={prog_icon_3} alt="Icon-1" />
          <p>Doctoral Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;

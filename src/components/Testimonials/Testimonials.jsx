import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                &quot;Choosing to pursue my degree at Edusity was one of the
                best decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations. I've grown both
                personally and academically in ways I never imagined possible,
                and I'm grateful for the friendships and experiences I've gained
                along the way.&quot;
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emma Thompson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                &quot;Pursuing my degree at Edusity has opened countless doors
                for me. The environment fosters growth and innovation, making
                learning an exciting journey. I've had the privilege of working
                on projects that challenge my thinking and inspire creativity,
                all while receiving guidance from passionate instructors who
                truly care about our success.&quot;
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Michael Brown</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                &quot;The faculty at Edusity are incredibly supportive, and the
                resources available to students are exceptional. I feel prepared
                to take on the challenges ahead. The collaborative atmosphere
                encourages us to share ideas and learn from one another, making
                every class an enriching experience that I look forward to each
                week.&quot;
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sarah Miller</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                &quot;My experience at Edusity has been transformative. The
                community is welcoming, and the learning atmosphere inspires me
                to excel. I’ve taken part in various extracurricular activities
                that have enriched my academic journey and allowed me to develop
                skills beyond the classroom. I truly feel at home here.&quot;
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { Translate } from "react-redux-i18n";
import { Images } from "../../config/courses";
import "../../../scss/coursesBlock.scss";

export default class CoursesSlider extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      isAuto: true,
      isRestarted: false,
    };
  }

  componentDidMount() {
    this.time();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      clearInterval(this.interval);
      clearInterval(this.timerCarousel);
    }
  }

  setIsRestarted = (boolean) => {
    if (boolean) {
      this.setState({ isRestarted: true });
    } else {
      this.setState({ isRestarted: false });
    }
  };

  time = () => {
    if (this.state.isAuto) {
      this.setState({ isAuto: false });
      this.timer = setTimeout(this.startCarousel, 2000);
    }
  };

  startCarousel = () => {
    this.interval = setInterval(() => this.carousel(1), 10000);
    this.setIsRestarted(false);
  };

  changeIndex = (n) => {
    this.setState({ slideIndex: n });
  };

  carousel = (n, btn) => {
    if ((btn === "left" || btn === "right") && !this.state.isRestarted) {
      clearInterval(this.interval);
      this.timerCarousel = setTimeout(this.startCarousel, 1000);
      this.setIsRestarted(true);
    }
    let i = 0;
    const { slideIndex } = this.state;
    let index = slideIndex + n;
    this.changeIndex(index);
    const slides = document.getElementsByClassName("slide_container");

    if (index > slides.length) {
      index = 1;
      this.changeIndex(1);
    }
    if (index < 1) {
      index = slides.length;
      this.changeIndex(slides.length);
    }
    while (i < slides.length) {
      slides[i].style.display = "none";
      i += 1;
    }
    slides[index - 1].style.display = "block";
  };

  render() {
    return (
      <div className="front">
        <div className="why_we">
          <a onClick={() => this.carousel(-1, "left")}>
            <img
              className="arrowLeft"
              src={Images.arrowLeft}
              alt="arrow left"
            />
          </a>
          <div className="why_we_text">
            <div className="slide_container">
              <h1 className="slider_header">
                <Translate value="courses.slider_container.slider_1.header" />
              </h1>
              <div className="slider_text">
                <Translate value="courses.slider_container.slider_1.text" />
              </div>
            </div>
            <div className="slide_container" style={{ display: "none" }}>
              <h1 className="slider_header">
                <Translate value="courses.slider_container.slider_2.header" />
              </h1>
              <div className="slider_text">
                <Translate value="courses.slider_container.slider_2.text" />
              </div>
            </div>
            <div className="slide_container" style={{ display: "none" }}>
              <h1 className="slider_header">
                <Translate value="courses.slider_container.slider_3.header" />
              </h1>
              <div className="slider_text">
                <Translate value="courses.slider_container.slider_3.text" />
              </div>
            </div>
            <div className="slide_container" style={{ display: "none" }}>
              <h1 className="slider_header">
                <Translate value="courses.slider_container.slider_4.header" />
              </h1>
              <div className="slider_text">
                <Translate value="courses.slider_container.slider_4.text" />
              </div>
            </div>
          </div>
          <a onClick={() => this.carousel(1, "right")}>
            <img
              className="arrowRight"
              src={Images.arrowRight}
              alt="arrow right"
            />
          </a>
        </div>
      </div>
    );
  }
}

/* eslint-disable */
import React from 'react';
import { InView } from 'react-intersection-observer'

import './rocketStyles/track-gray-past.css';
import './rocketStyles/track-blue-present.css';
import './rocketStyles/rocket-past.css';
import './rocketStyles/jet-fire.css';
import './rocketStyles/main.css';

import './img/rocket-small.svg';
import './img/rocket-start.svg';
import './img/sample.svg';

import anime from './js/anime.min';

class RocketComponent extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      animationWasStarted: false
    }
    this.animation = null;
  }

  changeAnimation(status){
    this.setState({
      animationWasStarted:status
    })
  }

  componentDidMount() {
    const id = "rocket-path";
    const path = anime.path("#" + id);
    const boom = document.getElementById("boom-bam");
    const pathRocketBig = anime.path("#rocket-path-final");

    const rocketSmall = document.querySelector(".space-rocket-small");
    const rocketBig = document.getElementById("space-rocket");
    const jetFire = document.querySelector(".jet-fire");

    const boomAnimation = anime({
      targets: "#boom-bam",
      scale: 2,
      easing: "linear",
      duration: 500,
      autoplay: false,
      direction: "alternate",
      loop: 1,
    });


      this.animation = anime({
      targets: rocketSmall,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      direction: "reverse",
      easing: "linear",
      duration: 4000,
      autoplay: false,
      loop: 1,
      update: function(anim) {
        const progress = Math.round(anim.progress);

        if (progress < 36) {
          anim.pause();

          anime.set(boom, {
            left: "41px",
            top: "135px",
            opacity: 1
          });

          anime.set(rocketSmall, {
            opacity: 0
          });

          anime.set(rocketBig, {
            opacity: 1
          });

          anime.set(jetFire, {
            opacity: 1
          });

          boomAnimation.play();

          anime({
            targets: rocketBig,
            translateX: pathRocketBig("x"),
            translateY: pathRocketBig("y"),
            rotate: pathRocketBig("angle"),
            easing: "linear",
            scale: 0.4,
            direction: "reverse",
            duration: 1500,
          });

          anime({
            targets: jetFire,
            translateX: pathRocketBig("x"),
            translateY: pathRocketBig("y"),
            rotate: pathRocketBig("angle"),
            scale: 0.4,
            easing: "linear",
            direction: "reverse",
            duration: 1500,
          });

        }
      }
    });

    anime({
      targets: ".rocket-direction",
      translateY: path("y"),
      easing: "linear",
      duration: 4000,
      loop: true
    });

    anime({
      targets: ".jetS.left",
      scaleX: 4,
      easing: "linear",
      delay: 10,
      duration: 140,
      loop: true
    });

    anime({
      targets: ".jetS.center",
      scaleX: 3,
      easing: "linear",
      duration: 140,
      loop: true
    });

    anime({
      targets: ".jetS.right",
      scaleX: 4,
      easing: "linear",
      duration: 140,
      loop: true
    });

    anime({
      targets: ".smoke-right.el2",
      translateY: -10,
      opacity: 0,
      easing: "easeOutCubic",
      scale: 1.1,

      duration: 1000,
      loop: true
    });

    anime({
      targets: ".smoke-right.el1",
      translateY: -10,
      opacity: 0,
      easing: "easeOutCubic",
      scale: 1.1,
      duration: 500,
      loop: true
    });

    anime({
      targets: ".smoke-left.el2",
      opacity: 0,
      easing: "easeOutCubic",
      scale: 1.1,
      delay: 15,
      duration: 1000,
      loop: true
    });

    anime({
      targets: ".smoke-left.el1",
      opacity: 0,
      easing: "easeOutCubic",
      scale: 1.1,
      duration: 500,
      loop: true
    });

  }

    createTimeLine() {
    const tl = anime.timeline({
      easing: "linear",
      duration: 4000
    });

    tl.add({
      targets: ".space-rocket-start-past.pos0",
      opacity: 1,
      delay: 0,
      duration: 400
    })
      .add({
        targets: ".space-rocket-small-past.pos1",
        opacity: 1,
        duration: 450
      })
      .add({
        targets: ".space-rocket-small-past.pos2",
        opacity: 1,
        delay: 0,
        duration: 450
      })
      .add({
        targets: ".space-rocket-small-past.pos3",
        opacity: 1,
        delay: 0,
        duration: 450
      })
      .add({
        targets: ".space-rocket-small-past.pos4",
        opacity: 1,
        delay: 0,
        duration: 400
      })
      .add({
        targets: ".space-rocket-small-past.pos4",
        opacity: 1,
        delay: 400,
        duration: 300
      });

      for (let i = 1; i <= 15; i++) {
        tl.add({
          targets: `.track-blue.pos${i}`,
          opacity: 1,
          delay: i <= 9 ? 15 : 30,
          duration: 55
        });
      }

    const tlPast = anime.timeline({
      easing: "linear",
      duration: 4000
    });

    for (let i = 1; i <= 30; i++) {
      tlPast.add({
        targets: `.track-past.pos${i}`,
        opacity: 1,
        duration: i < 14 ? (150) : (i > 26 ? 180 : 50)
      });
    }
  }

  startAnimation() {
    this.createTimeLine();
    this.animation.play();
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="container-rocket">
          <svg
            className="platform"
            width="86"
            height="29"
            viewBox="0 0 86 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M78.3066 5.94896C77.2179 2.50579 73.9551 0 70.1088 0C65.8614 0 62.328 3.05591 61.6453 7.0551C61.6047 7.0546 61.564 7.05408 61.5241 7.05408C57.5794 7.05408 54.3702 10.2186 54.3702 14.108C54.3702 16.4415 52.1238 18.3403 49.3624 18.3403C46.601 18.3403 44.3546 16.4413 44.3546 14.108C44.3546 13.3293 43.7137 12.6973 42.9239 12.6973C42.1342 12.6973 41.4932 13.3293 41.4932 14.108C41.4932 16.4415 39.2468 18.3403 36.4854 18.3403C33.7241 18.3403 31.4777 16.4413 31.4777 14.108C31.4777 10.6674 28.9657 7.79584 25.6556 7.17847C25.0255 3.1186 21.4608 0 17.1698 0C13.4213 0 10.2291 2.38091 9.06127 5.68911C3.98446 6.16478 0 10.3907 0 15.5189V26.8053C0 27.584 0.640951 28.216 1.43072 28.216H84.4168C85.2081 28.216 85.8475 27.584 85.8475 26.8053V15.5189C85.8477 10.9153 82.6356 7.03813 78.3066 5.94896ZM70.1089 2.82177C72.2352 2.82177 74.0924 3.97112 75.0792 5.67212C71.8927 5.90676 69.1165 7.61717 67.4548 10.1127C66.6626 8.77896 65.5737 8.00562 64.4583 7.56995C64.8946 4.8818 67.2615 2.82177 70.1089 2.82177ZM17.1695 2.82177C19.892 2.82177 22.1743 4.70546 22.7507 7.22031C20.8418 7.63531 19.446 8.80297 18.5288 10.3214C17.1115 8.07282 14.8037 6.42497 12.0956 5.8587C13.0519 4.05551 14.9664 2.82177 17.1695 2.82177ZM82.9861 25.3944H2.86161V15.5189C2.86161 11.6293 6.07079 8.46497 10.0155 8.46497C13.9603 8.46497 17.1695 11.6295 17.1695 15.5189C17.1695 16.2976 17.8104 16.9296 18.6002 16.9296C19.39 16.9296 20.0309 16.2976 20.0309 15.5189C20.0309 13.4224 20.9352 9.8757 24.3232 9.8757C26.6898 9.8757 28.6156 11.7747 28.6156 14.108C28.6156 17.9976 32.1454 21.1619 36.4849 21.1619C39.1433 21.1619 41.4985 19.9741 42.9236 18.1598C44.3487 19.9741 46.7037 21.1619 49.3622 21.1619C53.7018 21.1619 57.2316 17.9976 57.2316 14.108C57.2316 11.7745 59.1575 9.8757 61.5239 9.8757C63.5228 9.8757 65.8163 10.5176 65.8163 15.5189C65.8163 16.2976 66.4572 16.9296 67.247 16.9296C68.0383 16.9296 68.6777 16.2976 68.6777 15.5189C68.6777 11.6293 71.8869 8.46497 75.8316 8.46497C79.7764 8.46497 82.9856 11.6295 82.9856 15.5189L82.9861 25.3944Z"
              fill="#909EB1"
            />
          </svg>

          <svg version="1.1" x="0px" y="0px" viewBox="0 0 125 691" width="125">
            <path
              id="rocket-path"
              className="st11"
              d="M43.39,62.19c18.8,44.72,14.12,67.73,5.29,80.54c-10.23,14.85-25.93,15.88-33.15,34.58
               c-7.48,19.36,1.31,39.07,4.47,46.17c1.49,3.34,17.9,38.65,52.88,43.53c4.26,0.59,30.14,4.2,41.29-11.39
               c12.3-17.2-3.39-43.69-6.31-48.61c-2.65-4.48-21.14-35.7-51.46-33.36c-26.08,2.01-43.15,27.49-47.19,48.41
               c-5.74,29.73,14.26,53.24,16.27,55.53c19.28,21.95,37.67,12.76,63.46,37.02c7.84,7.38,25.76,24.23,24.2,45.36
               c-1.44,19.55-18.86,33.19-28.68,40.88c-25.64,20.08-43.9,15.1-50.44,30.51c-7.26,17.1,8.53,39,10.37,41.49
               c16.49,22.3,37.69,17.7,44.34,35.39c6.41,17.04-7.43,36.85-9.76,40.07C63,570.32,41.09,566.08,32.41,582.66
               c-4.61,8.81-5.35,30.51,11.39,58.37"
            />
            <path
              id="rocket-path-final"
              className="st11"
              d="M55.3,74.9c0,88.4-42.1,78.4-42.1,124.5c0,36.7,29.5,65.4,57.5,65.4c17.1,0,35.4-3.7,43.4-22.5 c4.6-10.8,6-30.7-14.6-52.2"
            />

            <circle id="fly-path" cx="50" cy="76" r="3" fill="none" />
          </svg>

          <div className="track-past pos1"></div>
          <div className="track-past pos2"></div>
          <div className="track-past pos3"></div>
          <div className="track-past pos4"></div>
          <div className="track-past pos5"></div>
          <div className="track-past pos6"></div>
          <div className="track-past pos7"></div>
          <div className="track-past pos8"></div>
          <div className="track-past pos9"></div>
          <div className="track-past pos10"></div>
          <div className="track-past pos11"></div>
          <div className="track-past pos12"></div>

          <div className="track-past pos13"></div>
          <div className="track-past pos14"></div>
          <div className="track-past pos15"></div>

          <div className="track-past pos16"></div>
          <div className="track-past pos17"></div>
          <div className="track-past pos18"></div>

          <div className="track-past pos19"></div>
          <div className="track-past pos20"></div>
          <div className="track-past pos21"></div>

          <div className="track-past pos22"></div>
          <div className="track-past pos23"></div>
          <div className="track-past pos24"></div>

          <div className="track-past pos25"></div>
          <div className="track-past pos26"></div>
          <div className="track-past pos27"></div>

          <div className="track-blue pos1"></div>
          <div className="track-blue pos2"></div>
          <div className="track-blue pos3"></div>
          <div className="track-blue pos4"></div>
          <div className="track-blue pos5"></div>
          <div className="track-blue pos6"></div>
          <div className="track-blue pos7"></div>
          <div className="track-blue pos8"></div>
          <div className="track-blue pos9"></div>
          <div className="track-blue pos10"></div>
          <div className="track-blue pos11"></div>
          <div className="track-blue pos12"></div>
          <div className="track-blue pos13"></div>
          <div className="track-blue pos14"></div>
          <div className="track-blue pos15"></div>

          <div className="jet-fire">
            <div className="jetS left"></div>
            <div className="jetS center"></div>
            <div className="jetS right"></div>
          </div>

          <svg
            id="space-rocket"
            width="157"
            height="85"
            viewBox="0 0 157 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.3415 3.12281C99.3412 4.96405 91.9577 17.2622 88.7361 21.4101C89.2608 21.7071 89.7842 22.0094 90.3041 22.3221C91.9274 23.3089 93.5973 24.146 95.3079 24.8378C95.529 24.8949 95.7376 24.9773 95.9314 25.0806C99.6959 26.5155 103.656 27.245 107.768 27.245L110.772 27.245C112.264 27.245 113.474 28.3357 113.474 29.6795L113.474 54.0256C113.474 55.3695 112.264 56.4601 110.772 56.4601L107.771 56.4601C103.656 56.4601 99.6914 57.1917 95.9011 58.6426C95.7238 58.7342 95.5345 58.8088 95.3346 58.8624C93.5977 59.5638 91.8978 60.4163 90.2387 61.4243C89.7414 61.7233 89.2409 62.0134 88.7387 62.2982C91.6419 66.0362 99.3409 78.6994 99.3412 80.5817C99.3415 82.464 66 91.464 52.4107 70.9554C35.1937 70.0762 18.3733 62.5088 5.64092 48.7961L0.632291 43.4178C-0.210742 42.5122 -0.210742 41.1924 0.63229 40.2868L5.63866 34.9111C18.3662 21.205 35.1789 13.6379 52.4014 12.7607C72 -6.53598 99.3418 1.28158 99.3415 3.12281Z"
              fill="#3870DE"
            />
            <path
              className="smoke-right el2"
              d="M124.872 22.7096C124.872 23.5381 124.2 24.2096 123.372 24.2096C122.543 24.2096 121.872 23.5381 121.872 22.7096L124.872 22.7096ZM131.016 25.1612L131.942 26.3417C131.512 26.6782 130.934 26.7551 130.432 26.5428C129.93 26.3304 129.582 25.8621 129.525 25.3197L131.016 25.1612ZM136.686 26.7956C136.686 27.624 136.014 28.2956 135.186 28.2956C134.358 28.2956 133.686 27.624 133.686 26.7956L136.686 26.7956ZM121.872 22.7096C121.872 21.2984 122.641 20.199 123.646 19.5398C124.631 18.8948 125.878 18.6305 127.1 18.7674C128.342 18.9064 129.61 19.464 130.618 20.5294C131.63 21.5983 132.305 23.0979 132.508 25.0026L129.525 25.3197C129.38 23.9558 128.926 23.106 128.439 22.5916C127.949 22.0737 127.35 21.8141 126.767 21.7488C126.165 21.6814 125.631 21.8257 125.291 22.0489C124.972 22.2581 124.872 22.4865 124.872 22.7096L121.872 22.7096ZM130.091 23.9807C130.7 23.5035 131.358 23.1054 132.032 22.8587C132.697 22.6154 133.479 22.4839 134.262 22.6885C136.08 23.1634 136.686 24.9656 136.686 26.7956L133.686 26.7956C133.686 26.1152 133.574 25.7703 133.5 25.6289C133.449 25.5329 133.449 25.5768 133.504 25.591C133.505 25.5913 133.375 25.5619 133.063 25.6761C132.76 25.7869 132.375 26.0017 131.942 26.3417L130.091 23.9807Z"
              fill="#909EB1"
            />
            <path
              className="smoke-right el1"
              d="M116.204 22.8779C111.616 21.2188 112.39 13.9063 119.596 15.4446C116.672 11.4216 129.24 7.30642 129.851 15.5944C130.562 10.9876 138.785 12.0632 137.273 16.4989C141.924 15.4524 148.203 22.231 141.672 26.275"
              stroke="#909EB1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              className="smoke-left el1"
              d="M116.204 61.2903C111.616 62.9494 112.39 70.2619 119.596 68.7236C116.672 72.7466 129.24 76.8618 129.851 68.5738C130.562 73.1806 138.785 72.1051 137.273 67.6693C141.924 68.7158 148.203 61.9372 141.672 57.8932"
              stroke="#909EB1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="smoke-left el2"
              d="M124.872 61.5683C124.872 60.7399 124.2 60.0683 123.372 60.0683C122.543 60.0683 121.872 60.7399 121.872 61.5683L124.872 61.5683ZM131.016 59.6071L131.813 58.3363C131.381 58.0652 130.84 58.0325 130.378 58.2495C129.916 58.4666 129.597 58.9036 129.529 59.4095L131.016 59.6071ZM136.686 58.2996C136.686 57.4712 136.014 56.7996 135.186 56.7996C134.358 56.7996 133.686 57.4712 133.686 58.2996L136.686 58.2996ZM121.872 61.5683C121.872 62.983 122.826 63.933 123.772 64.429C124.729 64.9306 125.916 65.1267 127.067 65.0236C128.231 64.9193 129.473 64.4989 130.497 63.6332C131.543 62.7489 132.283 61.4653 132.503 59.8047L129.529 59.4095C129.403 60.3639 129.013 60.9598 128.56 61.3421C128.086 61.743 127.46 61.9764 126.8 62.0355C126.127 62.0958 125.533 61.9651 125.165 61.7721C124.786 61.5734 124.872 61.4611 124.872 61.5683L121.872 61.5683ZM130.219 60.8779C131.368 61.5981 132.832 62.1764 134.19 61.8925C134.937 61.7363 135.618 61.3201 136.082 60.6142C136.521 59.9443 136.686 59.1359 136.686 58.2996L133.686 58.2996C133.686 58.7708 133.59 58.943 133.574 58.9677C133.568 58.9759 133.574 58.966 133.591 58.9549C133.606 58.945 133.606 58.9496 133.576 58.956C133.501 58.9716 133.307 58.9815 132.969 58.8825C132.64 58.7864 132.245 58.6071 131.813 58.3363L130.219 60.8779Z"
              fill="#909EB1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M86.3281 42.2457C86.3281 49.2076 80.9072 54.3616 73.5127 54.3616C66.1509 54.3616 60.6968 49.2408 60.6968 42.2457C60.6968 35.2507 66.1509 30.1299 73.5127 30.1299C80.9072 30.1299 86.3281 35.2839 86.3281 42.2457ZM73.5127 49.711C69.3296 49.711 66.1842 46.6645 66.1842 42.2132C66.1842 37.7619 69.3296 34.7161 73.5127 34.7161C77.6953 34.7161 80.8407 37.7619 80.8407 42.2132C80.8407 46.6645 77.6953 49.711 73.5127 49.711ZM57.4104 35.2016L57.8786 34.1625C58.2431 33.3527 57.9146 32.4015 57.1298 31.9878C54.9833 30.8563 51.95 30.1299 48.9382 30.1299C42.2457 30.1299 39 33.4767 39 37.3921C39 42.4273 43.666 43.4946 47.5357 44.3798C50.2771 45.0068 52.6188 45.5425 52.6188 47.3327C52.6188 48.8058 51.3805 50.0106 48.1686 50.0106C46.5753 50.0106 44.8835 49.655 43.1989 48.9297C42.3426 48.5606 41.3499 48.9743 40.9983 49.8387L40.5735 50.8852C40.2372 51.7141 40.6028 52.6749 41.4197 53.0373C43.395 53.9147 45.786 54.3616 48.1348 54.3616C54.7935 54.3616 58.0059 51.0486 58.0059 47.065C58.0059 41.9759 53.3475 40.8935 49.4797 39.9948C46.7343 39.3569 44.3871 38.8784 44.3871 36.9914C44.3871 35.5516 45.6919 34.4803 48.9044 34.4803C51.0729 34.4803 53.3202 35.0782 55.1411 36.012C55.9862 36.4453 57.0205 36.0666 57.4104 35.2016Z"
              fill="white"
            />
          </svg>

          <svg
            id="boom-bam"
            width="111"
            height="98"
            viewBox="0 0 111 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.7778 41.1617L27.5054 20.8179L45.8956 31.1657C47.336 31.9762 49.1524 31.1909 49.5486 29.5863L54.4292 9.82137L59.3106 30.0442C59.7692 31.9442 62.1328 32.6067 63.5121 31.2219L75.7859 18.8986L73.33 33.538C73.033 35.3084 74.6434 36.8056 76.3875 36.3805L93.4243 32.2284L80.1703 45.4823C78.7898 46.8629 79.4536 49.2222 81.3514 49.6803L100.781 54.3701L81.3796 58.0496C79.4959 58.4068 78.6989 60.6641 79.9406 62.1249L98.7723 84.2799L74.5387 72.5303C73.0866 71.8262 71.3577 72.6621 71.0076 74.2375L68.9684 83.4138L61.5752 76.3726C60.5066 75.3549 58.7937 75.4793 57.8834 76.6407L47.1296 90.3611L46.3595 68.7993C46.3008 67.1555 44.698 66.0153 43.1259 66.4991L24.0651 72.364L35.0059 58.9526C36.0699 57.6484 35.5671 55.6866 34.0069 55.055L33.444 56.4454L34.0069 55.055L10.0671 45.3634L38.7133 45.0275C40.6855 45.0044 41.8555 42.8135 40.7778 41.1617ZM103.037 54.9148C103.037 54.9147 103.036 54.9146 103.036 54.9144L103.037 54.9148ZM100.91 85.3164L100.909 85.3157L100.91 85.3164ZM22.4867 72.8496C22.4871 72.8495 22.4874 72.8494 22.4878 72.8493L22.4867 72.8496Z"
              fill="#FDD60B"
              stroke="#E9961A"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M47.6384 43.43L52.5436 51.1699C52.7155 51.4412 52.5909 51.8018 52.2882 51.9089L43.7566 54.9296C43.2871 55.0958 43.3227 55.7713 43.8071 55.8872L52.3172 57.9233C52.565 57.9826 52.7285 58.2186 52.697 58.4714L52.0414 63.7273C51.9846 64.1828 52.5203 64.4677 52.8663 64.166L57.6476 59.9954C57.8559 59.8137 58.172 59.8355 58.3534 60.044L62.7686 65.1186C63.0721 65.4674 63.6458 65.2528 63.6458 64.7904L63.6458 58.617C63.6458 58.3425 63.8671 58.1193 64.1416 58.117L72.4796 58.0469C73.0177 58.0424 73.1699 57.3076 72.6779 57.0897L65.5966 53.9539C65.3132 53.8283 65.2111 53.4778 65.3829 53.2197L70.4471 45.6104C70.7167 45.2054 70.3077 44.693 69.853 44.8661L61.9992 47.8551C61.7364 47.9551 61.4427 47.8187 61.3496 47.5533L58.583 39.6686C58.4183 39.199 57.7434 39.2322 57.6255 39.7157L55.8989 46.7975C55.8177 47.1308 55.4326 47.2851 55.1437 47.1003L48.3302 42.7412C47.8796 42.4529 47.352 42.9781 47.6384 43.43Z"
              fill="#E9961A"
            />
          </svg>

          <div className="space-rocket-start-past pos0"></div>

          <div className="space-rocket-small-past pos1"></div>
          <div className="space-rocket-small-past pos2"></div>
          <div className="space-rocket-small-past pos3"></div>
          <div className="space-rocket-small-past pos4"></div>

          <div className="space-rocket-small"></div>
        </div>

        <InView
          onChange={(inView) => {
            if (inView && !this.state.animationWasStarted) {
              this.startAnimation();
              this.changeAnimation(true);
            }
          }}
        />
      </div>
    );
  }
}

export default RocketComponent;

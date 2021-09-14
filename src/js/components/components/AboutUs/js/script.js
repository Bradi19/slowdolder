/* eslint-disable */
const id = 'rocket-path';
const path = anime.path('#' + id);
const flyPath = anime.path('#fly-path');
const pathRocketBig = anime.path('#rocket-path-final');

const rocketSmall = document.querySelector('.space-rocket-small');
const rocketBig = document.getElementById('space-rocket');
const jetFire = document.querySelector('.jet-fire');

const ball = document.querySelector('.ball');
const passanger = document.querySelector('.passanger');

const boomAnimation = anime({
  targets: '#boom-bam',
  scale: 2,
  easing: 'linear',
  duration: 500,
  autoplay: false,
  direction: 'alternate',
  loop: 1,
  complete: startBoomPulse,
});

let tl = anime.timeline({
  easing: 'linear',
  duration: 4000
});

tl.add({
  targets: '.space-rocket-start-past.pos0',
  opacity: 1,
  delay: 0,
  duration: 400
})
  .add({
    targets: '.space-rocket-small-past.pos1',
    opacity: 1,
    // delay: 300,
    duration: 450
  })
  .add({
    targets: '.space-rocket-small-past.pos2',
    opacity: 1,
    delay: 0,
    duration: 450
  })
  .add({
    targets: '.space-rocket-small-past.pos3',
    opacity: 1,
    delay: 0,
    duration: 450
  })
  .add({
    targets: '.space-rocket-small-past.pos4',
    opacity: 1,
    delay: 0,
    duration: 400
  })
  .add({
    targets: '.space-rocket-small-past.pos5',
    opacity: 1,
    delay: 400,
    duration: 500
  });

for (let i = 1; i <= 9; i++) {
  tl.add({
    targets: `.track-blue.pos${i}`,
    opacity: 1,
    delay: i === 1 ? 500 : 0,
    duration: 65
  });
}

var tlPast = anime.timeline({
  easing: 'linear',
  duration: 4000
});

for (let i = 1; i <= 30; i++) {
  tlPast.add({
    targets: `.track-past.pos${i}`,
    opacity: 1,
    duration: i < 14 ? (150) : (i > 26 ? 180 : 50)
  });
}

let counter = 0;

const animation = anime({
  targets: rocketSmall,
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 4000,
  loop: 2,
  update: function(anim) {
    const progress = Math.round(anim.progress);

    if (progress === 25) {
      animation.pause();
      const boom = document.getElementById('boom-bam');

      anime.set(boom, {
        left: '15px',
        top: '216px',
        opacity: 1
      });

      anime.set(rocketSmall, {
        opacity: 0
      });

      anime.set(rocketBig, {
        opacity: 1
      });

      anime.set(jetFire, {
        opacity: 1,
      });
      boomAnimation.play();

      anime({
        targets: rocketBig,
        translateX: pathRocketBig('x'),
        translateY: pathRocketBig('y'),
        rotate: pathRocketBig('angle'),
        easing: 'linear',
        scale: 0.4,
        direction: 'reverse',
        duration: 1500,
        complete: starAnimationFly
      });
      anime({
        targets: jetFire,
        translateX: pathRocketBig('x'),
        translateY: pathRocketBig('y'),
        rotate: pathRocketBig('angle'),
        scale: 0.4,
        easing: 'linear',
        direction: 'reverse',
        duration: 1500,
      });

    }
  },
});

animation.reverse();
animation.play();

function starAnimationFly() {
  anime.set(jetFire, {
    opacity: 1
  });

  const animationRocketFly = anime({
    targets: [rocketBig,jetFire],
    translateX: flyPath('x'),
    translateY: flyPath('y'),
    easing: 'linear',
    duration: 2000,
    loop: true
  });

  animationRocketFly.play();
}

function startBoomPulse() {
  // anime({
  //   targets: '#boom-bam',    
  //   scale: 1.1,
  //   easing: 'linear',        
  //   direction: 'alternate',
  //   // rotate: '360deg',
  //   duration: 1000,        
  //   loop: true
  // });
}

anime({
  targets: '.rocket-direction',
  translateY: path('y'),
  easing: 'linear',
  duration: 4000,
  loop: true
});

anime({
  targets: '.jetS.left',
  scaleX: 4,
  easing: 'linear',
  delay: 10,
  duration: 140,
  loop: true
});

anime({
  targets: '.jetS.center',
  scaleX: 3,
  easing: 'linear',
  duration: 140,
  loop: true
});

anime({
  targets: '.jetS.right',
  scaleX: 4,
  easing: 'linear',
  duration: 140,
  loop: true,
});

// right jet
// right jet inner
anime({
  targets: '.smoke-right.el2',
  translateY: -10,
  opacity: 0,
  easing: 'easeOutCubic',
  scale: 1.1,

  duration: 1000,
  loop: true
});

// right jet outer
anime({
  targets: '.smoke-right.el1',
  translateY: -10,
  opacity: 0,
  easing: 'easeOutCubic',
  scale: 1.1,
  duration: 500,
  loop: true
});

// left jet
// left jet inner
anime({
  targets: '.smoke-left.el2',
  opacity: 0,
  easing: 'easeOutCubic',
  scale: 1.1,
  delay: 15,
  duration: 1000,
  loop: true
});

// left jet outer
anime({
  targets: '.smoke-left.el1',
  opacity: 0,
  easing: 'easeOutCubic',
  scale: 1.1,
  duration: 500,
  loop: true,
});

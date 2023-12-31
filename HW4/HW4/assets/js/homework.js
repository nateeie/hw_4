//Задание 1


const FeatureContent = document.querySelectorAll('.features-content');
const ContentHide = document.querySelectorAll('.content-hide');

FeatureContent.forEach((firstBlock, index) => {
  firstBlock.addEventListener('mouseover', () => {
    ContentHide[index].style.display = 'block';
  });

  firstBlock.addEventListener('mouseout', () => {
    ContentHide[index].style.display = 'none';
  });
});


//Задание 2
function showTab(index) {
  tabsContent.forEach(function (tabContent, contentIndex) {
    tabContent.style.display = contentIndex === index ? 'block' : 'none';
  });
}

function setActiveTab(link) {
  const activeTab = document.querySelector('.ui-tabs-active a');
  activeTab.parentNode.classList.remove('ui-tabs-active');
  link.parentNode.classList.add('ui-tabs-active');
}

const tabsMenu = document.querySelectorAll('.tabs-menu a');
const tabsContent = document.querySelectorAll('.tabs-content article');

tabsContent[0].style.display = 'block';
document.querySelector('.tabs-menu .ui-tabs-active a').parentNode.classList.add('ui-tabs-active');

tabsMenu.forEach(function (tabMenuLink, index) {
  tabMenuLink.addEventListener('click', function (event) {
    event.preventDefault();

    showTab(index);

    setActiveTab(this);
  });
});

//Задание 3
const targetDate = new Date('2023-12-31');
const countdownElements = {
  days: document.querySelector('.days .value'),
  hours: document.querySelector('.hours .value'),
  minutes: document.querySelector('.minutes .value'),
  seconds: document.querySelector('.seconds .value'),
};

const updateCountdown = () => {
  const currentDate = new Date();
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  if (timeDiff > 0) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    countdownElements.days.textContent = days < 10 ? '0' + days : days;

    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdownElements.hours.textContent = hours < 10 ? '0' + hours : hours;

    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    countdownElements.minutes.textContent = minutes < 10 ? '0' + minutes : minutes;

    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    countdownElements.seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  } else {
    countdownElements.days.textContent = '00';
    countdownElements.hours.textContent = '00';
    countdownElements.minutes.textContent = '00';
    countdownElements.seconds.textContent = '00';
  }
};

setInterval(updateCountdown, 1000);

//Задание 4

const coursesMass = [
  {
    cardImg: {
      src: 'assets/images/courses-01.jpg',
      alt: 'Course #1',
    },
    header: 'Digital Marketing',
    descr:
      'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-01.png',
      alt: 'Author #1',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-02.jpg',
      alt: 'Course #2',
    },
    header: 'Business World',
    descr:
      'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
    authorImg: {
      src: 'assets/images/author-02.png',
      alt: 'Author #2',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-03.jpg',
      alt: 'Course #3',
    },
    header: 'Media Technology',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
    authorImg: {
      src: 'assets/images/author-03.png',
      alt: 'Author #3',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-04.jpg',
      alt: 'Course #4',
    },
    header: 'Communications',
    descr:
      'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-04.png',
      alt: 'Author #4',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-05.jpg',
      alt: 'Course #5',
    },
    header: 'Business Ethics',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
    authorImg: {
      src: 'assets/images/author-05.png',
      alt: 'Author #5',
    },
  },
]

function formatCourses(courses) {
  return courses.map((course) => {
    return `
              <div class="carousel__item">
                <img src="${course.cardImg.src}" alt="${course.cardImg.alt}">
                <div class="carousel__content">
                  <h4>${course.header}</h4>
                  <p>${course.descr}</p>
                  <div class="item__last-row">
                    <img src="${course.authorImg.src}" alt="${course.authorImg.alt}">
                    <div class="text-button-pay">
                      <a href="#">Pay <i class="fa fa-angle-double-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            `;
  }).join('');
}

function insertAdjacentHTML(selector, position, html) {
  const targetElement = document.querySelector(selector);
  targetElement.insertAdjacentHTML(position, html);
}

function insertCourses() {
  const formattedCourses = formatCourses(coursesMass);
  const targetSelector = '.carousel__wrapper';
  insertAdjacentHTML(targetSelector, 'afterbegin', formattedCourses);
}

document.addEventListener('DOMContentLoaded', insertCourses);
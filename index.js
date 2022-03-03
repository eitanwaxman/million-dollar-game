let i = 0;
let seconds = 0
setInterval(() => {
  i = i + 1
  seconds = i / 100
  return seconds
}, 10)

const button = document.querySelector("button");
const header = document.querySelector("h1");
const subHeader = document.querySelector("h2");
const loading = document.getElementsByClassName("loading");
const image = document.getElementsByClassName("image");

function gameOver() {
  let results = result()
  header.innerHTML = timer();
  subHeader.innerHTML = results[0];
  image[0].src = results[1];
  loading[0].style.display = "none";
  button.style.display = "none"
}

function timer() {
  return "You lasted " + seconds + " seconds"
}

function result() {
  let text = ""
  let image = ""
  if (seconds < 1) {
    text = "You are as patient as a Gen Z teen with ADHD "
    image = "https://www.adweek.com/wp-content/uploads/2017/05/data-generationnow-content-2017.png"
  } else if (seconds >= 1 && seconds < 3) {
    text = "You are as patient as a Tik Tok addict"
    image = "https://miro.medium.com/max/1200/1*YwMofVA6VPzdbtXEhOMi1A.png"
  } else if (seconds >= 3 && seconds < 5) {
    text = "You are as patient as a Goldfish"
    image = "https://www.pngitem.com/pimgs/m/13-134875_clip-art-cartoon-fish-clip-art-goldfish-clipart.png"
  } else if (seconds >= 5 && seconds < 7) {
    text = "You are as patient as a the average Youtube watcher"
    image = "https://english.newstrack.com/wp-content/uploads/2018/03/UTUBE.jpg"
  } else if (seconds >= 7 && seconds < 10) {
    text = "You the modern equivalent of a Zen Master"
    image = "https://cdn1.vectorstock.com/i/1000x1000/83/10/cartoon-buddhist-monk-in-meditation-poses-vector-21648310.jpg"
  } else if (seconds >= 10 && seconds < 20) {
    text = "Wow. You must have gotten distracted"
    image = "https://thumbs.dreamstime.com/b/school-boy-writes-homework-distracted-flying-bee-vector-school-character-distance-learning-home-school-boy-writes-193959834.jpg"
  } else if (seconds >= 20 && seconds < 40) {
    text = "Amazing. You are as patient as somone born in the 90's"
    image = "https://img.buzzfeed.com/buzzfeed-static/static/2017-07/11/19/asset/buzzfeed-prod-fastlane-03/sub-buzz-3432-1499814244-7.jpg"
  } else if (seconds >= 40 && seconds < 60) {
    text = "Unbelievable. You are as patient as the top 1% of the worlds population"
    image = "https://cdn4.vectorstock.com/i/1000x1000/41/28/cartoon-number-one-mascot-vector-4924128.jpg"
  } else if (seconds >= 60 && seconds < 300) {
    text = "Common. You must have fallen asleep"
    image = "https://st2.depositphotos.com/2400497/6754/v/600/depositphotos_67547425-stock-illustration-man-sleeping.jpg"
  } else {
    text = "Okay now you're just being greedy"
    image = "https://st.depositphotos.com/1695366/1400/v/950/depositphotos_14000859-stock-illustration-cartoon-greedy-pig.jpg"
  }
  return [text, image]
}

button.onclick = gameOver
timer()

import './index.html';
import './style.css';

new Vue ({
  el: '#app',
  data: {
    upLikes: 0,
    downLikes: 0,
    joke: "The secret service isn't allowed to yell\"Get down!\" anymore when the president is about to be attacked. Now they have to yell \"Donald, duck!\"",
  },
  methods: {
    likesUp: function(upLikes) {
      this.upLikes += 1;
    },
    likesDown: function(downLikes) {
      this.downLikes += 1;
    },
  }
})

/*let upLikes = 0;
let downLikes = 0;

const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');

btnUp.addEventListener('click', () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
});

btnDown.addEventListener('click', () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
});
*/

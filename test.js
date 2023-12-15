const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');

const zeroblock = document.getElementById('zeroblock');
const oneblock = document.getElementById('oneblock');
const twoblock = document.getElementById('twoblock');

const values = {
  zero: 0,
  one: 0,
  two: 0,
}
const checkBest = () => {
  if(values.zero > values.one && values.zero > values.two) {
    zeroblock.classList.add('golden')
    oneblock.classList.remove('golden')
    twoblock.classList.remove('golden')
  } else if(values.one > values.two && values.one > values.zero) {
    oneblock.classList.add('golden')
    twoblock.classList.remove('golden')
    zeroblock.classList.remove('golden')
  } else if(values.two > values.one && values.two > values.zero) {
    twoblock.classList.add('golden')
    oneblock.classList.remove('golden')
    zeroblock.classList.remove('golden')
  }
}
const output = () => {
  zero.innerHTML = values.zero;
  one.innerHTML = values.one;
  two.innerHTML = values.two;
}

const random = () => {
  return Math.round(Math.random() * 2);
}

const recorse = () => {
  const rand = random()
  if(rand === 0) {
    values.zero++;
  }else if(rand === 1) {
    values.one++;
  } else if(rand === 2) {
    values.two++;
  }
  checkBest();
  output();
  setTimeout(() => {
    console.log('rec')
    recorse();
  }, 20);
}

recorse();
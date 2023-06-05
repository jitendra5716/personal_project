// const container = document.getElementById('container');
const checkBox = document.getElementById('checkbox');
const heading = document.getElementsByTagName('h1')[0];
const Body = document.getElementsByTagName('body')[0];
checkBox.addEventListener('change',function(){
    if (this.checked) {
        document.body.style.backgroundColor='black';
        heading.style.color = 'white';

      } else {
        document.body.style.backgroundColor = 'white';
        heading.style.color = 'black';
      }
})
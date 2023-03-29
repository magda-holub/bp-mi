function revealer() {
  let button = document.getElementById('bpToggle')

  let toggle = function (element) {
      element.classList.toggle('is-visible');
  };

  document.addEventListener('click', function (event) {
      if (!event.target.classList.contains('toggle')) return;
      event.preventDefault();

      let content = document.querySelector(event.target.hash);
      if (!content) return;

      toggle(content);

  }, false);

  button.addEventListener('click', function handleClick(){
      let initialText = document.getElementById('bpToggle--text__collapsed').textContent;

      if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
          button.textContent = document.getElementById('bpToggle--text__expanded').textContent;
      } else {
          button.textContent = initialText;
      }
  });
}; revealer();

$("#h1cc").insertAfter("#categoryUpperDescription")

if (window.location.href.indexOf("testingBP") > -1) {
document.getElementById("bpTest").style.display = "block"
}

function hamburger() {
var icon = document.getElementById('bpHamburger'),
    list = document.getElementById('bpHamburgerList');

icon.addEventListener('click', function() {
  this.classList.toggle('open');
  list.classList.toggle('active')
})
}; hamburger();
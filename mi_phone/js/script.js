// brand page reveal hidden content button
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
        let initialText = document.getElementById('bpToggle__text--collapsed').textContent;

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = document.getElementById('bpToggle__text--expanded').textContent;
        } else {
            button.textContent = initialText;
        }
    });
}; revealer();

// hide testing template in production - presentation for vendor
function template() {
    if (window.location.href.indexOf("testingBP") > -1) {
        document.getElementById("bpTest").style.display = "block"
    };
}; template();

// header menu
function hamburger() {
  var icon = document.getElementById('bpHamburger'),
      list = document.getElementById('bpHamburgerList');

  icon.addEventListener('click', function() {
    this.classList.toggle('open');
    list.classList.toggle('active')
  })
}; hamburger();
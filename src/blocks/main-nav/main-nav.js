(function(){

  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggler = document.getElementById('main-nav-toggler');
  if(toggler){
    toggler.addEventListener('click', mainNavVisibleToggle);

    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
      document.getElementById('main-nav').classList.toggle('main-nav--open');
      document.body.classList.toggle('lock');
    }
  }


  // Добавление метода .parents()
  Element.prototype.parents = function(selector) {
    var elements = [];
    var elem = this;
    var ishaveselector = selector !== undefined;

    while ((elem = elem.parentElement) !== null) {
      if (elem.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }

      if (!ishaveselector || elem.matches(selector)) {
        elements.push(elem);
      }
    }

    return elements;
  };

  // Добавление метода .closest() (полифил, собственно)
  // (function(e){
  //  e.closest = e.closest || function(css){
  //    var node = this;

  //    while (node) {
  //       if (node.matches(css)) return node;
  //       else node = node.parentElement;
  //    }
  //    return null;
  //  }
  // })(Element.prototype);

}());

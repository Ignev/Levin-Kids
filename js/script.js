window.addEventListener("DOMContentLoaded", function () {
  const module = document.querySelector(".module");
  const close = document.querySelector(".close");
  const recordingOpen = document.querySelectorAll(".recording__btn");
  const menu = document.querySelector(".menu__wrappere");
  const menuCloseBtn = document.querySelector(".menu__close");
  const menuOpenBtn = document.querySelector(".burger");
  const tabsItem = document.querySelectorAll(".tabs__item");
  const servesOptions = document.querySelectorAll(".serves__options");
  const headerContent = document.querySelector(".header__fixed");
  const header = document.querySelector(".header");
  const accordionItem = document.querySelectorAll(".accordion__item");
  const nameInput = document.querySelector(".module__name")
  const body = document.body;

  nameInput.addEventListener("input", () => {
    nameInput.innerHTML.replace(/[^А-яЁё A-Za-z]/g,"") = nameInput.innerHTML.replace(/[^А-яЁё A-Za-z]/g,"")
  })

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.68673, 37.527157],
        zoom: 16,
      }),
      myStreet1 = new ymaps.Placemark(
        [55.68973, 37.527157],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "img/mapIcon.png",
          iconImageSize: [73, 73],
          iconImageOffset: [-30, -60],
        }
      );
    myMap.geoObjects.add(myStreet1);
    myMap.behaviors.disable("scrollZoom");
  }

  var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  headerContent.style.width = header.clientWidth + "px";

  window.addEventListener("resize", () => {
    headerContent.style.width = header.clientWidth + "px";
    // body.style.width = window.clientWidth;
  });

  const openModule = () => {
    module.classList.add("module-active");
    // disableScroll();
  };

  const closeModule = () => {
    module.classList.remove("module-active");
    // enableScroll();
  };

  document.body.addEventListener("scroll", function () {
    if (document.body.scrollTop > header.clientHeight) {
      header.classList.add("header-fix");
    } else {
      header.classList.remove("header-fix");
    }
  });

  const openMenu = () => {
    menu.classList.add("menu__wrappere-active");
    // disableScroll();
  };
  const closeMenu = () => {
    menu.classList.remove("menu__wrappere-active");
    // enableScroll();
  };

  tabsItem.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      tabsItem.forEach((tab) => {
        tab.classList.remove("tabs__item-active");
      });
      servesOptions.forEach((options) => {
        options.classList.remove("serves__options-active");
      });
      e.target.classList.add("tabs__item-active");
      servesOptions[e.target.dataset.number].classList.add(
        "serves__options-active"
      );
    });
  });

  accordionItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.parentNode.classList.contains("accordion__item-active")) {
        e.target.parentNode.classList.remove("accordion__item-active");
      } else {
        e.target.parentNode.classList.add("accordion__item-active");
      }
    });
  });

  recordingOpen.forEach((btn) => {
    btn.addEventListener("click", openModule);
  });
  close.addEventListener("click", closeModule);
  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);





   [].forEach.call( document.querySelectorAll('.module__tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });



});

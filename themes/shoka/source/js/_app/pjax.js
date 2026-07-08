const domInit = function() {
  $.each('.overview .menu > .item', function(el) {
    siteNav.child('.menu').appendChild(el.cloneNode(true));
  })

  loadCat.addEventListener('click', Loader.vanish);
  menuToggle.addEventListener('click', sideBarToggleHandle);
  $('.dimmer').addEventListener('click', sideBarToggleHandle);

  quickBtn.child('.down').addEventListener('click', goToBottomHandle);
  quickBtn.child('.up').addEventListener('click', backToTopHandle);

  if(!toolBtn) {
    toolBtn = siteHeader.createChild('div', {
      id: 'tool',
      innerHTML: '<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'
    });
  }

  toolPlayer = toolBtn.child('.player');
  backToTop = toolBtn.child('.back-to-top');
  goToComment = toolBtn.child('.chat');
  showContents = toolBtn.child('.contents');

  backToTop.addEventListener('click', backToTopHandle);
  goToComment.addEventListener('click', goToCommentHandle);
  showContents.addEventListener('click', sideBarToggleHandle);

  mediaPlayer(toolPlayer)
  $('main').addEventListener('click', function() {
    toolPlayer.player.mini()
  })
}

const pjaxReload = function () {
  pagePosition()

  if(sideBar.hasClass('on')) {
    transition(sideBar, function () {
        sideBar.removeClass('on');
        menuToggle.removeClass('close');
      }); // 'transition.slideRightOut'
  }

  $('#main').innerHTML = ''
  $('#main').appendChild(loadCat.lastChild.cloneNode(true));
  pageScroll(0);
}

var artalkInstance = null;

const isDarkTheme = function() {
  return HTML.attr('data-theme') === 'dark';
}

const applyArtalkThemeClass = function(dark) {
  var element = $('#comments');
  if(!element) return;

  $.each('#comments .atk', function(item) {
    item.toggleClass('atk-dark-mode', dark);
  });
}

const syncArtalkTheme = function(dark) {
  dark = dark === undefined ? isDarkTheme() : dark;

  if(artalkInstance && typeof artalkInstance.setDarkMode === "function") {
    artalkInstance.setDarkMode(dark);
  }

  applyArtalkThemeClass(dark);
}

window.addEventListener('theme:change', function(event) {
  syncArtalkTheme(event.detail ? event.detail.theme === 'dark' : undefined);
});

if(window.MutationObserver) {
  new MutationObserver(function() {
    syncArtalkTheme();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

const artalkComments = function() {
  var element = $('#comments');
  if(!element || !LOCAL.artalk || !CONFIG.artalk || !CONFIG.artalk.server) return;

  if(artalkInstance && typeof artalkInstance.destroy === "function") {
    artalkInstance.destroy();
  }
  artalkInstance = null;
  element.innerHTML = "";

  vendorCss('artalk');
  LOCAL.comment = true;
  vendorCss('comment');
  vendorJs('artalk', function() {
    if(typeof Artalk !== "object" || typeof Artalk.init !== "function") return;

    var options = Object.assign({}, CONFIG.artalk);
    options = Object.assign(options, typeof LOCAL.artalk === "object" ? LOCAL.artalk : {});
    options.el = '#comments';
    options.pageKey = LOCAL.path;
    options.pageTitle = LOCAL.title || document.title;
    options.darkMode = isDarkTheme();

    artalkInstance = Artalk.init(options);
    syncArtalkTheme(options.darkMode);

    setTimeout(function(){
      syncArtalkTheme();
      positionInit(1);
      postFancybox('.atk');
    }, 1000);
  }, window.Artalk);
}

const siteRefresh = function (reload) {
  LOCAL_HASH = 0
  LOCAL_URL = window.location.href

  vendorCss('katex');
  vendorJs('copy_tex');
  vendorCss('mermaid');
  vendorJs('chart');
  artalkComments();

  if(!reload) {
    $.each('script[data-pjax]', pjaxScript);
  }

  originTitle = document.title

  resizeHandle()

  menuActive()

  sideBarTab()
  sidebarTOC()

  registerExtURL()
  postBeauty()
  tabFormat()

  toolPlayer.player.load(LOCAL.audio || CONFIG.audio || {})

  Loader.hide()

  setTimeout(function(){
    positionInit()
  }, 500);

  cardActive()

  lazyload.observe()
}

const siteInit = function () {

  domInit()

  if(typeof Pjax === "function") {
    pjax = new Pjax({
            selectors: [
              'head title',
              '.languages',
              '.pjax',
              'script[data-config]'
            ],
            analytics: false,
            cacheBust: false
          })
  } else {
    pjax = {
      refresh: function() {}
    }
  }

  if(window.quicklink && CONFIG.quicklink) {
    CONFIG.quicklink.ignores = LOCAL.ignores
    quicklink.listen(CONFIG.quicklink)
  }

  visibilityListener()
  themeColorListener()

  pagefindSearch(pjax)

  window.addEventListener('scroll', scrollHandle)

  window.addEventListener('resize', resizeHandle)

  window.addEventListener('pjax:send', pjaxReload)

  window.addEventListener('pjax:success', siteRefresh)

  window.addEventListener('beforeunload', function() {
    pagePosition()
  })

  siteRefresh(1)
}

window.addEventListener('DOMContentLoaded', siteInit);

console.log('%c Theme.Shoka v' + CONFIG.version + ' %c adopted by kwicxy at http://pages.rosmontis.love/ ', 'color: white; background: #e9546b; padding:5px 0;', 'padding:4px;border:1px solid #e9546b;')

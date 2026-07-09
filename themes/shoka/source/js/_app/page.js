const cardActive = function() {
  if(!$('.index.wrap'))
    return

  if (!window.IntersectionObserver) {
    $.each('.index.wrap article.item, .index.wrap section.item', function(article) {
      if( article.hasClass("show") === false){
          article.addClass("show");
      }
    })
  } else {
    var io = new IntersectionObserver(function(entries) {

        entries.forEach(function(article) {
          if (article.target.hasClass("show")) {
            io.unobserve(article.target)
          } else {
            if (article.isIntersecting || article.intersectionRatio > 0) {
              article.target.addClass("show");
              io.unobserve(article.target);
            }
          }
        })
    }, {
        root: null,
        threshold: [0.3]
    });

    $.each('.index.wrap article.item, .index.wrap section.item', function(article) {
      io.observe(article)
    })

    $('.index.wrap .item:first-child').addClass("show")
  }

  $.each('.cards .item', function(element, index) {
    ['mouseenter', 'touchstart'].forEach(function(item){
      element.addEventListener(item, function(event) {
        if($('.cards .item.active')) {
          $('.cards .item.active').removeClass('active')
        }
        element.addClass('active')
      })
    });
    ['mouseleave'].forEach(function(item){
      element.addEventListener(item, function(event) {
        element.removeClass('active')
      })
    });
  });
}

const registerExtURL = function() {
  $.each('span.exturl', function(element) {
      var link = document.createElement('a');
      // https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
      link.href = decodeURIComponent(atob(element.dataset.url).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      link.rel = 'noopener external nofollow noreferrer';
      link.target = '_blank';
      link.className = element.className;
      link.title = element.title || element.innerText;
      link.innerHTML = element.innerHTML;
      if(element.dataset.backgroundImage) {
        link.dataset.backgroundImage = element.dataset.backgroundImage;
      }
      element.parentNode.replaceChild(link, element);
    });
}

const postFancybox = function(p) {
  if($(p + ' .md img')) {
    vendorCss('fancybox');
    vendorJs('fancybox', function() {
      var q = jQuery.noConflict();

      $.each(p + ' p.gallery', function(element) {
        var box = document.createElement('div');
        box.className = 'gallery';
        box.attr('data-height', element.attr('data-height')||220);

        box.innerHTML = element.innerHTML.replace(/<br>/g, "")

        element.parentNode.insertBefore(box, element);
        element.remove();
      });

      $.each(p + ' .md img:not(.emoji):not(.vemoji)', function(element) {
        var $image = q(element);
        var info, captionClass = 'image-info';
        if(!$image.is('a img')) {
          var imageLink = $image.attr('data-src') || $image.attr('src');
          $image.data('safe-src', imageLink)
          var $imageWrapLink = $image.wrap('<a class="fancybox" href="'+imageLink+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent('a');
          if (!$image.is('.gallery img')) {
            $imageWrapLink.attr('data-fancybox', 'default').attr('rel', 'default');
          } else {
            captionClass = 'jg-caption'
          }
        }
        if(info = element.attr('title')) {
          $imageWrapLink.attr('data-caption', info);
          var para = document.createElement('span');
          var txt = document.createTextNode(info);
          para.appendChild(txt);
          para.addClass(captionClass);
          element.insertAfter(para);
        }
      });

      $.each(p + ' div.gallery', function (el, i) {
        q(el).justifiedGallery({rowHeight: q(el).data('height')||120, rel: 'gallery-' + i}).on('jg.complete', function () {
          q(this).find('a').each(function(k, ele) {
            ele.attr('data-fancybox', 'gallery-' + i);
          });
        });
      });

      q.fancybox.defaults.hash = false;
      q(p + ' .fancybox').fancybox({
        loop   : true,
        helpers: {
          overlay: {
            locked: false
          }
        }
      });
    }, window.jQuery);
  }
}

const getMermaidCodeBody = function(code) {
  return code.trim().replace(/^---\s*[\r\n][\s\S]*?[\r\n]---\s*/, '').trim();
}

const isMermaidCode = function(code) {
  return /^(sequenceDiagram|flowchart|graph|classDiagram|stateDiagram|stateDiagram-v2|erDiagram|journey|gantt|pie|gitGraph|mindmap|timeline|quadrantChart|requirementDiagram|C4Context|C4Container|C4Component|C4Dynamic|block|packet|architecture|sankey|xychart|kanban|radar-beta|eventmodeling|treemap-beta|venn-beta|ishikawa-beta|wardley-beta|treeView-beta)\b/.test(
    getMermaidCodeBody(code)
  );
}

const restoreMermaidCode = function() {
  $.each('.md figure.highlight', function(element) {
    var code = element.child('.code');
    var lines = [];

    if(!code)
      return

    $.each('.line', function(line) {
      lines.push(line.innerText);
    }, code);

    var content = lines.join('\n').replace(/\s+$/g, '');
    if(!isMermaidCode(content))
      return

    var pre = document.createElement('pre');
    pre.className = 'mermaid';
    pre.textContent = content;
    element.parentNode.replaceChild(pre, element);
  });
}

const restoreRenderedMermaid = function() {
  $.each('.md pre.mermaid', function(element) {
    if(element.dataset.mermaidCode) {
      element.removeAttribute('data-processed');
      element.textContent = element.dataset.mermaidCode;
    }
  });
}

const cacheMermaidCode = function() {
  $.each('.md pre.mermaid', function(element) {
    var code = element.textContent.replace(/\s+$/g, '');

    if(isMermaidCode(code))
      element.dataset.mermaidCode = code;
  });
}

const getMermaidApi = function() {
  if(!window.mermaid)
    return null

  if(typeof window.mermaid.initialize === 'function')
    return window.mermaid

  if(window.mermaid.default && typeof window.mermaid.default.initialize === 'function')
    return window.mermaid.default

  return null
}

const getCssVariable = function(name, fallback) {
  var value = getComputedStyle(HTML).getPropertyValue(name).trim();

  if(!value)
    return fallback;

  var matched = value.match(/^var\((--[^,\s)]+)(?:,\s*([^)]+))?\)$/);
  if(matched)
    return getCssVariable(matched[1], matched[2] || fallback);

  return value;
}

const getMermaidThemeVariables = function() {
  var bg = getCssVariable('--mermaid-bg', '#fdfdfd');
  var surface = getCssVariable('--mermaid-surface', '#f7f7f7');
  var altSurface = getCssVariable('--mermaid-alt-surface', '#ffffff');
  var line = getCssVariable('--mermaid-line', '#666666');
  var text = getCssVariable('--mermaid-text', '#333333');
  var muted = getCssVariable('--mermaid-muted', '#999999');
  var accent = getCssVariable('--mermaid-accent', '#e9546b');
  var noteBg = getCssVariable('--mermaid-note-bg', '#fff8c5');
  var noteBorder = getCssVariable('--mermaid-note-border', '#e6c86e');
  var noteText = getCssVariable('--mermaid-note-text', '#222222');

  return {
    background: 'transparent',
    mainBkg: bg,
    secondBkg: surface,
    tertiaryColor: altSurface,
    primaryColor: bg,
    primaryTextColor: text,
    primaryBorderColor: line,
    secondaryColor: surface,
    secondaryTextColor: text,
    secondaryBorderColor: line,
    tertiaryTextColor: text,
    tertiaryBorderColor: line,
    lineColor: line,
    textColor: text,
    fontFamily: getCssVariable('--mermaid-font-family', '"trebuchet ms", verdana, arial'),
    nodeTextColor: text,
    clusterBkg: surface,
    clusterBorder: line,
    edgeLabelBackground: surface,
    noteBkgColor: noteBg,
    noteTextColor: noteText,
    noteBorderColor: noteBorder,
    actorBkg: bg,
    actorBorder: line,
    actorTextColor: text,
    actorLineColor: line,
    signalColor: line,
    signalTextColor: text,
    labelBoxBkgColor: surface,
    labelBoxBorderColor: line,
    labelTextColor: text,
    loopTextColor: text,
    activationBkgColor: surface,
    activationBorderColor: line,
    sequenceNumberColor: getCssVariable('--mermaid-contrast-text', '#fdfdfd'),
    sectionBkgColor: bg,
    altSectionBkgColor: altSurface,
    sectionBkgColor2: bg,
    sectionBkgColor3: altSurface,
    sectionBkgColor4: bg,
    sectionBkgColor5: altSurface,
    sectionBkgColor6: bg,
    sectionBkgColor7: altSurface,
    taskBkgColor: line,
    taskTextColor: getCssVariable('--mermaid-contrast-text', '#fdfdfd'),
    taskTextOutsideColor: text,
    taskTextLightColor: text,
    taskTextDarkColor: text,
    taskBorderColor: line,
    activeTaskBkgColor: bg,
    activeTaskBorderColor: line,
    doneTaskBkgColor: bg,
    doneTaskBorderColor: getCssVariable('--color-green', '#0a7426'),
    critBkgColor: accent,
    critBorderColor: accent,
    todayLineColor: accent,
    titleColor: text,
    c0: accent,
    c1: getCssVariable('--color-blue', '#38a1db'),
    c2: getCssVariable('--color-green', '#0a7426'),
    c3: getCssVariable('--color-purple', '#9d5b8b'),
    c4: muted
  };
}

const renderMermaid = function() {
  if(!LOCAL.mermaid)
    return

  restoreRenderedMermaid();
  restoreMermaidCode();
  cacheMermaidCode();

  if(!$('.md .mermaid'))
    return

  vendorCss('mermaid');
  vendorJs('mermaid', function() {
    var mermaidApi = getMermaidApi();
    if(!mermaidApi)
      return

    mermaidApi.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: getMermaidThemeVariables(),
      flowchart: {
        htmlLabels: false,
        useMaxWidth: true
      }
    });

    mermaidApi.run({
      nodes: document.querySelectorAll('.md .mermaid')
    }).then(function() {
      $.each('pre.mermaid > svg', function (element) {
        element.style.maxWidth = ''
      });
    }).catch(function(error) {
      console.error(error);
    });
  }, getMermaidApi());
}

window.addEventListener('theme:change', function() {
  if(!LOCAL.mermaid || !$('.md pre.mermaid'))
    return

  setTimeout(renderMermaid, 0);
});

const postBeauty = function () {
  loadComments();

  if(!$('.md'))
    return

  renderMermaid();

  postFancybox('.post.block');

  $('.post.block').oncopy = function(event) {
    showtip(LOCAL.copyright)

    if(LOCAL.nocopy) {
      event.preventDefault()
      return
    }

    var copyright = $('#copyright')
    if(window.getSelection().toString().length > 30 && copyright) {
      event.preventDefault();
      var author = "# " + copyright.child('.author').innerText
      var link = "# " + copyright.child('.link').innerText
      var license = "# " + copyright.child('.license').innerText
      var htmlData = author + "<br>" + link + "<br>" + license + "<br><br>" + window.getSelection().toString().replace(/\r\n/g, "<br>");;
      var textData = author + "\n" + link + "\n" + license + "\n\n" + window.getSelection().toString().replace(/\r\n/g, "\n");
      if (event.clipboardData) {
          event.clipboardData.setData("text/html", htmlData);
          event.clipboardData.setData("text/plain", textData);
      } else if (window.clipboardData) {
          return window.clipboardData.setData("text", textData);
      }
    }
  }

  $.each('li ruby', function(element) {
    var parent = element.parentNode;
    if(element.parentNode.tagName != 'LI') {
      parent = element.parentNode.parentNode;
    }
    parent.addClass('ruby');
  })

  $.each('ol[start]', function(element) {
    element.style.counterReset = "counter " + parseInt(element.attr('start') - 1)
  })

  $.each('.md table', function (element) {
    element.wrap({
      className: 'table-container'
    });
  });

  $.each('.highlight > .table-container', function (element) {
    element.className = 'code-container'
  });

  $.each('figure.highlight', function (element) {

    var code_container = element.child('.code-container');
    var caption = element.child('figcaption');

    element.insertAdjacentHTML('beforeend', '<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');

    var copyBtn = element.child('.copy-btn');
    if(LOCAL.nocopy) {
      copyBtn.remove()
    } else {
      copyBtn.addEventListener('click', function (event) {
        var target = event.currentTarget;
        var comma = '', code = '';
        code_container.find('pre').forEach(function(line) {
          code += comma + line.innerText;
          comma = '\n'
        })

        clipBoard(code, function(result) {
          target.child('.ic').className = result ? 'ic i-check' : 'ic i-times';
          target.blur();
          showtip(LOCAL.copyright);
        })
      });
      copyBtn.addEventListener('mouseleave', function (event) {
        setTimeout(function () {
          event.target.child('.ic').className = 'ic i-clipboard';
        }, 1000);
      });
    }

    var breakBtn = element.child('.breakline-btn');
    breakBtn.addEventListener('click', function (event) {
      var target = event.currentTarget;
      if (element.hasClass('breakline')) {
        element.removeClass('breakline');
        target.child('.ic').className = 'ic i-align-left';
      } else {
        element.addClass('breakline');
        target.child('.ic').className = 'ic i-align-justify';
      }
    });

    var fullscreenBtn = element.child('.fullscreen-btn');
    var removeFullscreen = function() {
      element.removeClass('fullscreen');
      element.scrollTop = 0;
      BODY.removeClass('fullscreen');
      fullscreenBtn.child('.ic').className = 'ic i-expand';
    }
    var fullscreenHandle = function(event) {
      var target = event.currentTarget;
      if (element.hasClass('fullscreen')) {
        removeFullscreen();
        hideCode && hideCode();
        pageScroll(element)
      } else {
        element.addClass('fullscreen');
        BODY.addClass('fullscreen');
        fullscreenBtn.child('.ic').className = 'ic i-compress';
        showCode && showCode();
      }
    }
    fullscreenBtn.addEventListener('click', fullscreenHandle);
    caption && caption.addEventListener('click', fullscreenHandle);

    if(code_container && code_container.find("tr").length > 15) {
      
      code_container.style.maxHeight = "300px";
      code_container.insertAdjacentHTML('beforeend', '<div class="show-btn"><i class="ic i-angle-down"></i></div>');
      var showBtn = code_container.child('.show-btn');

      var showCode = function() {
        code_container.style.maxHeight = ""
        showBtn.addClass('open')
      }

      var hideCode = function() {
        code_container.style.maxHeight = "300px"
        showBtn.removeClass('open')
      }

      showBtn.addEventListener('click', function(event) {
        if (showBtn.hasClass('open')) {
          removeFullscreen()
          hideCode()
          pageScroll(code_container)
        } else {
          showCode()
        }
      });
    }
  });

  $.each('pre.mermaid > svg', function (element) {
    element.style.maxWidth = ''
  });

  $.each('.reward button', function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      var qr = $('#qr')
      if(qr.display() === 'inline-flex') {
        transition(qr, 0)
      } else {
        transition(qr, 1, function() {
          qr.display('inline-flex')
        }) // slideUpBigIn
      }
    });
  });

  //quiz
  $.each('.quiz > ul.options li', function (element) {
    element.addEventListener('click', function (event) {
      if (element.hasClass('correct')) {
        element.toggleClass('right')
        element.parentNode.parentNode.addClass('show')
      } else {
        element.toggleClass('wrong')
      }
    });
  });

  $.each('.quiz > p', function (element) {
    element.addEventListener('click', function (event) {
      element.parentNode.toggleClass('show')
    });
  });

  $.each('.quiz > p:first-child', function (element) {
    var quiz = element.parentNode;
    var type = 'choice'
    if(quiz.hasClass('true') || quiz.hasClass('false'))
      type = 'true_false'
    if(quiz.hasClass('multi'))
      type = 'multiple'
    if(quiz.hasClass('fill'))
      type = 'gap_fill'
    if(quiz.hasClass('essay'))
      type = 'essay'
    element.attr('data-type', LOCAL.quiz[type])
  });

  $.each('.quiz .mistake', function (element) {
    element.attr('data-type', LOCAL.quiz.mistake)
  });

  $.each('div.tags a', function(element) {
    element.className = ['primary', 'success', 'info', 'warning', 'danger'][Math.floor(Math.random() * 5)]
  })

  $.each('.md div.player', function(element) {
    mediaPlayer(element, {
      type: element.attr('data-type'),
      mode: 'order',
      btns: []
    }).player.load(JSON.parse(element.attr('data-src'))).fetch()
  })
}

const tabFormat = function() {
  // tab
  var first_tab
  $.each('div.tab', function(element, index) {
    if(element.attr('data-ready'))
      return

    var id = element.attr('data-id');
    var title = element.attr('data-title');
    var box = $('#' + id);
    if(!box) {
      box = document.createElement('div');
      box.className = 'tabs';
      box.id = id;
      box.innerHTML = '<div class="show-btn"></div>'

      var showBtn = box.child('.show-btn');
      showBtn.addEventListener('click', function(event) {
        pageScroll(box)
      });

      element.parentNode.insertBefore(box, element);
      first_tab = true;
    } else {
      first_tab = false;
    }

    var ul = box.child('.nav ul');
    if(!ul) {
      ul = box.createChild('div', {
        className: 'nav',
        innerHTML: '<ul></ul>'
      }).child('ul');
    }

    var li = ul.createChild('li', {
      innerHTML: title
    });

    if(first_tab) {
      li.addClass('active');
      element.addClass('active');
    }

    li.addEventListener('click', function(event) {
      var target = event.currentTarget;
      box.find('.active').forEach(function(el) {
        el.removeClass('active');
      })
      element.addClass('active');
      target.addClass('active');
    });

    box.appendChild(element);
    element.attr('data-ready', true)
  });
}

const loadComments = function () {
  var element = $('#comments');
  if (!element) {
    goToComment.display("none")
    return;
  } else {
    goToComment.display("")
  }

  LOCAL.comment = true;

  if (!window.IntersectionObserver) {
    vendorCss('artalk');
    vendorCss('comment');
    transition(element, 'bounceUpIn');
  } else {
    var io = new IntersectionObserver(function(entries, observer) {
      var entry = entries[0];
      vendorCss('artalk');
      vendorCss('comment');
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        transition($('#comments'), 'bounceUpIn');
        observer.disconnect();
      }
    });

    io.observe(element);
  }
}

const pagefindSearch = function(pjax) {
  if(CONFIG.search === null || CONFIG.search.provider !== "pagefind")
    return

  if(!siteSearch) {
    siteSearch = BODY.createChild("div", {
      id: "search",
      innerHTML: '<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"><input class="search-input" type="search" autocomplete="off"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'
    });
  }

  if(siteSearch.dataset.initialized === "true")
    return

  siteSearch.dataset.initialized = "true";

  var searchInput = $(".search-input");
  var searchStats = $("#search-stats");
  var searchHits = $("#search-hits");
  var searchPagination = $("#search-pagination");
  var pageSize = (CONFIG.search.hits && CONFIG.search.hits.per_page) || 10;
  var pagefindInstance = null;
  var pagefindLoading = null;
  var searchToken = 0;
  var currentResults = [];
  var renderedCount = 0;
  var loadingMoreToken = null;

  searchInput.placeholder = LOCAL.search.placeholder;

  const escapeHTML = function(text) {
    return String(text || "").replace(/[&<>"']/g, function(match) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[match];
    });
  };

  const pagefindURL = function() {
    var root = CONFIG.root || "/";
    return root.replace(/\/?$/, "/") + "pagefind/pagefind.js";
  };

  const renderStats = function(hits, time) {
    var stats = LOCAL.search.stats
      .replace(/\$\{hits}/, hits)
      .replace(/\$\{time}/, time);
    searchStats.innerHTML = stats + "<hr>";
  };

  const renderMessage = function(message) {
    searchStats.innerHTML = "";
    searchHits.innerHTML = '<div id="hits-empty">' + message + "</div>";
    searchPagination.innerHTML = "";
  };

  const refreshResults = function() {
    if(pjax && searchHits) {
      pjax.refresh(searchHits);
    }
  };

  const loadPagefind = function() {
    if(pagefindInstance) {
      return Promise.resolve(pagefindInstance);
    }

    if(!pagefindLoading) {
      pagefindLoading = import(pagefindURL()).then(function(pagefind) {
        pagefindInstance = pagefind;
        return pagefind;
      });
    }

    return pagefindLoading;
  };

  const renderMoreResults = function(token) {
    if(loadingMoreToken === token) {
      return;
    }

    loadingMoreToken = token;
    var nextResults = currentResults.slice(renderedCount, renderedCount + pageSize);
    Promise.all(nextResults.map(function(result) {
      return result.data();
    })).then(function(results) {
      if(loadingMoreToken === token) {
        loadingMoreToken = null;
      }

      if(token !== searchToken) {
        return;
      }

      var items = results.map(function(result) {
        var title = escapeHTML(result.meta && result.meta.title ? result.meta.title : result.url);
        var excerpt = result.excerpt ? '<span class="excerpt">' + result.excerpt + "</span>" : "";
        return '<li class="item"><a href="' + escapeHTML(result.url) + '">' + title + excerpt + "</a></li>";
      }).join("");

      if(renderedCount === 0) {
        searchHits.innerHTML = "<ol>" + items + "</ol>";
      } else {
        var list = searchHits.querySelector("ol");
        if(list) {
          list.insertAdjacentHTML("beforeend", items);
        }
      }

      renderedCount += results.length;
      if(renderedCount < currentResults.length) {
        searchPagination.innerHTML = '<button class="page-number search-load-more" type="button">加载更多...</button>';
      } else {
        searchPagination.innerHTML = "";
      }

      refreshResults();
    }).catch(function(error) {
      if(loadingMoreToken === token) {
        loadingMoreToken = null;
      }
      renderMessage(escapeHTML(error.message || "Pagefind result loading failed."));
    });
  };

  const performSearch = function() {
    var query = searchInput.value.trim();
    var token = ++searchToken;

    if(!query) {
      currentResults = [];
      renderedCount = 0;
      searchStats.innerHTML = "";
      searchHits.innerHTML = "";
      searchPagination.innerHTML = "";
      return;
    }

    var startedAt = Date.now();
    loadPagefind().then(function(pagefind) {
      return pagefind.debouncedSearch(query);
    }).then(function(search) {
      if(token !== searchToken || search === null) {
        return;
      }

      currentResults = search.results || [];
      renderedCount = 0;
      renderStats(currentResults.length, Date.now() - startedAt);

      if(currentResults.length === 0) {
        renderMessage(LOCAL.search.empty.replace(/\$\{query}/, escapeHTML(query)));
        return;
      }

      renderMoreResults(token);
    }).catch(function(error) {
      renderMessage(escapeHTML(error.message || "Pagefind search failed."));
    });
  };

  searchInput.addEventListener("input", performSearch);
  searchPagination.addEventListener("click", function(event) {
    if(event.target.classList.contains("search-load-more")) {
      renderMoreResults(searchToken);
    }
  });

  // Handle and trigger popup window
  $.each(".search", function(element) {
    element.addEventListener("click", function() {
      document.body.style.overflow = "hidden";
      transition(siteSearch, "shrinkIn", function() {
          loadPagefind();
          searchInput.focus();
        }) // transition.shrinkIn
    });
  });

  // Monitor main search box
  const onPopupClose = function() {
    document.body.style.overflow = "";
    transition(siteSearch, 0); // "transition.shrinkOut"
  };

  siteSearch.addEventListener("click", function(event) {
    if (event.target === siteSearch) {
      onPopupClose();
    }
  });
  $(".close-btn").addEventListener("click", onPopupClose);
  window.addEventListener("pjax:success", onPopupClose);
  window.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
      onPopupClose();
    }
  });
}

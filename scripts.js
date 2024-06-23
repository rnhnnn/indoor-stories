(function () {
  // Compendium: Menu
  $('.collection-menu-item').on('click', function () {
    // Toggle 'active' class for collection menu items
    $('.collection-menu-item').removeClass('active');
    $(this).addClass('active');

    // Toggle 'active' class for corresponding collections
    $('.collection').removeClass('active');
    $($(this).data('collection')).addClass('active');
  });

  // Journal Open
  $('.journal-index-button').on('click', function () {
    // Calculate scrollbar width once
    var scrollbarWidth = $(window).outerWidth() - $(document).width();

    // Toggle classes and apply padding for journal open
    $('body').addClass('fixed');
    $('.journal-index').addClass('active');
    $('body').css('paddingRight', scrollbarWidth);
  });

  // Journal Close
  $('.journal-index-list-item a, .journal-index').on('click', function () {
    // Toggle classes and reset padding for journal close
    $('body').removeClass('fixed');
    $('.journal-index').removeClass('active');
    $('body').css('paddingRight', '0');
  });

  // Prevent propagation
  $(".journal-index-box, .journal-index-list").click(function(e) {
    e.stopPropagation();
  });

    // Player
    var player = document.querySelector('#player');
    var games = document.querySelectorAll('.game');

    games.forEach(game => {
        game.onclick = function () {
            var dataAudio = this.getAttribute('data-audio');
            if (player.getAttribute('data-playing') != dataAudio) {
                player.setAttribute('data-playing', dataAudio);
                player.src = 'audios/' + dataAudio;
            }

            var activeEl = document.querySelector('.game.is-active');
            if (activeEl) activeEl.classList.remove('is-active');

            if (player.paused) {
                player.play();
                this.classList.add('is-active');
            } else {
                player.pause()
            }
        };
    });
})();
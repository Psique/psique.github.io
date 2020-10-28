/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {
  // Remove no-js class
  $("html").removeClass("no-js");

  // Animate to section when nav is clicked
  $("header a").click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to top
  $("#to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Scroll to first element
  $("#lead-down span").click(function () {
    var scrollDistance = $("#lead").next().offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      500
    );
  });

  // Create timeline
  $("#experience-timeline").each(function () {
    $this = $(this); // Store reference to this
    $userContent = $this.children("div"); // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass("vtimeline-content")
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        );
    });

    // Add dates to the timeline if exists
    $this.find(".vtimeline-content").each(function () {
      var date = $(this).data("date");
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + "</span>");
      }
    });

    // Add icons to each block
    $this.find(".vtimeline-point").each(function () {
      companyName = $(this)
        .children("div.vtimeline-block")
        .children("div.vtimeline-content")
        .children("h4")
        .text();

      fontAwesomeIcon = false;
      switch (companyName) {
        case "Classgap":
          fontAwesomeIcon = "chalkboard-teacher";
          break;
        case "Glibum":
          fontAwesomeIcon = "file-code";
          break;
      }

      if (fontAwesomeIcon) {
        $(this).prepend(
          '<div class="vtimeline-icon"><i style="color:gray; font-size: 1.75em;" class="fas fa-' +
            fontAwesomeIcon +
            '"></i></div>'
        );
      } else {
        if (companyName === "Universitat Pompeu Fabra") {
          $(this).prepend(
            '<div class="vtimeline-icon"><img width="46" height="35" src="/images/' +
              companyName +
              '.png" style="border-radius: 30px; margin-top: 8px;"/></div>'
          );
        } else {
          $(this).prepend(
            '<div class="vtimeline-icon"><img width="50" height="50" src="/images/' +
              companyName +
              '.png" /></div>'
          );
        }
      }
    });
  });

  // Open mobile menu
  $("#mobile-menu-open").click(function () {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function () {
    $("header, body").removeClass("active");
  });

  // Load additional projects
  $("#view-more-projects").click(function (e) {
    e.preventDefault();
    $(this).fadeOut(300, function () {
      $("#more-projects").fadeIn(300);
    });
  });
})(jQuery);

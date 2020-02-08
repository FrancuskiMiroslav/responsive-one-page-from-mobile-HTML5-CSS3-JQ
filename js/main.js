/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
// animate smooth scroll //
$("#mywork").on("click", (function() {
  var images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
}));

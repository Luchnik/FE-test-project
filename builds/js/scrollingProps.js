$(document).ready(function() {
  $("#flexisel").flexisel({
    visibleItems: 5,
    animationSpeed: 600,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
          changePoint:480,
          visibleItems: 1
      },
      landscape: {
          changePoint:640,
          visibleItems: 2
      },
      tablet: {
          changePoint:768,
          visibleItems: 3
      }
    }
  });
});

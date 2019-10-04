

function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
  var g = document.querySelector(grid),
      gc = document.querySelectorAll(gridCell),
      gcLength = gc.length,
      gHeight = 0,
      i;
  
  for(i=0; i<gcLength; ++i) {
    gHeight+=gc[i].offsetHeight+parseInt(gridGutter);
  }
  
  if(window.screen.width >= 732)
    g.style.height = gHeight/dGridCol + gHeight/(gcLength+1) + "px";   
  else
    g.style.height = gHeight/mGridCol + gHeight/(gcLength+1) + "px";
}

var masonryGrid = document.querySelector('.masonry');
masonryGrid.insertAdjacentHTML("afterend", "<div class='masonry-preloader'>Loading...</div>");
var masonryPreloader = document.querySelector('.masonry-preloader');

["resize", "load"].forEach(function(event) {
  // Adding little preloader information
  masonryGrid.style.display="none";
  window.addEventListener(event, function() {
    imagesLoaded( document.querySelector('.masonry'), function() {
      masonryGrid.style.display="flex";
      masonryPreloader.style.display="none";
      // A masonry grid with 8px gutter, with 3 columns on desktop, 2 on tablet, and 1 column on mobile devices.
      masonry(".masonry", ".masonry-brick", 8, 3, 2, 1);
      console.log("Loaded");
    });
  }, false);
});

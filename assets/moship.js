var nextArrow = `
<button class="moship-next moship-arrow" aria-label="Next" type="button" style="">
  <svg enable-background="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
      <g>
          <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
      </g>
  </svg>
</button>
`;

var prevArrow = `
<button class="moship-prev moship-arrow" aria-label="Previous" type="button" style="">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
    <g>
      <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
    </g>
  </svg>
</button>
`;

$(".product-gallery").append(`${prevArrow}${nextArrow}`);

$(".moship-prev").click(function () {
  var thumbnails = [];
  $("button.product-gallery--media-thumbnail").each(function () {
    thumbnails.push(this);
  });
  for (var i = 0; i < thumbnails.length; i++) {
    console.log($(thumbnails[i]));
    if ($(thumbnails[i]).attr("data-product-gallery-selected") == "true") {
      if (i == 0) {
        $(thumbnails[thumbnails.length - 1]).click();
      } else {
        $(thumbnails[i - 1]).click();
      }
      break;
    }
  }
});

$(".moship-next").click(function () {
  var thumbnails = [];
  $("button.product-gallery--media-thumbnail").each(function () {
    thumbnails.push(this);
  });
  for (var i = 0; i < thumbnails.length; i++) {
    console.log($(thumbnails[i]));
    if ($(thumbnails[i]).attr("data-product-gallery-selected") == "true") {
      if (i + 1 == thumbnails.length) {
        $(thumbnails[0]).click();
      } else {
        $(thumbnails[i + 1]).click();
      }
      break;
    }
  }
});

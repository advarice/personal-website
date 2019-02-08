var stockObj = '';

$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:8080/testStartEndAdjusted',
    type: 'GET',
    success: function (data) {
      var n = 0;
      $.each(data, function (key, value) {
        if (n % 3 == 0) {
          stockObj += '<div ><ul class="list-group">';
        }

        var gainLoseDetail = '';
        if (value.startPrice <= value.endPrice) {
          gainLoseDetail = 'Total Gain: ' + ((value.endPrice - value.startPrice) / value.startPrice * 100).toFixed(2) + '%';
        } else {
          gainLoseDetail = 'Total Loss: ' + ((value.startPrice - value.endPrice) / value.startPrice * 100).toFixed(2) + '%';
        }
        stockObj += '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">';
        stockObj += '<div class="d-flex w-100 justify-content-between">';
        stockObj += '<h6 class="mb-1">' + value.stockEntity.name + '</h6>';
        stockObj += '</div>';
        stockObj += '<h8 class="mb-1">' + value.stockEntity.stockSymbol + '</h8>';
        stockObj += '</br>';
        stockObj += '<small class="mb-1">' + value.startDate + ' to ' + value.endDate + '</small>';
        stockObj += '</br>';
        stockObj += '<small class="mb-1">' + gainLoseDetail + '</small>';
        stockObj += '</a>';
        n += 1;
        if (n % 3 == 0 || n == data.length) {
          stockObj += '</ul></div>';
        }
      });
      $('#abc').html(stockObj);
      $('.bxslider').bxSlider({
        pager: false,
      });
    }
  });
});

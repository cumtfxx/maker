$(function () {
  var $oResultBox = $('#resultBox');					
  var stores = data.Stores;								
  $('#paging').paging({
    nowPage: 1,
    allPages: Math.ceil(stores.length / 6),				
    displayPage: 7,										
    callBack: function (now) {
      var currentPages = now * 6 < stores.length ? 6 : stores.length - (now - 1) * 6;

      $oResultBox.html('');

      for (var i = 0; i < currentPages; i++) {
        var num = (now - 1) * 6 + i;
		var str1="";
		for(var m=0; m<stores[num].imgList.length;m++)
		{
			str1=str1+'<div class="position-relative">'+
							'<img alt="" style="width: 100%;cursor: pointer;height:50px" src="'+ stores[num].imgList[m].url +'">'+
							'<div class="position-absolute" style="top: 0;z-index: 10;visibility: hidden;background-color:dimgrey;color: white">'+
								'<img style="width: 250px" src="'+ stores[num].imgList[m].url+'">'+
								'<div style="color: red;font-size: 22px">￥'+stores[num].imgList[m].info.goodsPrice +'</div>'+
								'<div style="font-size: 15px" class="p-2">'+stores[num].imgList[m].info.goodsName +'</div>'+
							'</div>'+
						  '</div>';
		}
        var create_dl = $('<dl class="col-12 col-md-4 col-sm-6 mb-3 flex mx-0 px-1"></dl>');			
        var _html = '<div>'+'<div class="card" style="width:250px">'+
					  '<img class="card-img-top" src="'+stores[num].imageUrl+ '" alt="" style="width:100%;height: 220px">'+
					   '<div class="img-list my-2 d-flex">'+str1+'</div>'+
					 ' <div class="card-body mt-0 pt-1 px-3">'+
						'<div class="store-name my-1">'+ stores[num].name +'</div>'+
						'<div class="store-introduce my-2">'+ stores[num].introduce +'</div>'+
						'<div>'+
							'<div class="browse float-left">'+stores[num].browseNum +'次浏览</div>'+
							'<div class="store-link float-right"><a href="store.html">进入店铺</a></div>'+
						'</div>'+
					  '</div>'+
					'</div>'+
					'</div>';

        create_dl.html(_html);
        $oResultBox.append(create_dl);
      }
    }
  });
	$(".list li").addClass("page-link");
});

;(function ($, window, document, undefined) {

  var Paging = function (elem, options) {
    var self = this;
    this.$oPaging = elem;
    this.$oFirst = this.$oPaging.find('.first');
    this.$oLast = this.$oPaging.find('.last');
    this.$oPrev = this.$oPaging.find('.prev');
    this.$oNext = this.$oPaging.find('.next');
    this.$oList = this.$oPaging.find('.list');
    this.$aItem = this.$oList.find('li');
    this.$oGo = this.$oPaging.find('.go');
    this.$oGo_text = this.$oGo.find('input');
    this.$oGo_btn = this.$oGo.find('button');

    this.defaults = {
      nowPage: 1,
      allPages: 10,
      displayPage: 5
    };

    this.opts = $.extend({}, this.defaults, options);

    this.nowPage = this.opts.nowPage;
    this.allPages = this.opts.allPages;
    this.displayPage = this.opts.displayPage > this.allPages 
                     ? this.opts.displayPage = this.allPages 
                     : this.opts.displayPage;
    this.iNum = this.nowPage;
    this.min_halfPage = Math.floor(this.displayPage / 2);
    this.big_halfPage = Math.ceil(this.displayPage / 2);
  };

  Paging.prototype = {
    clickFn: function () {
      this.cleanClassName();
      this.setPaging(this.iNum);
      this.detectionPage(this.iNum);

      this.opts.callBack && this.opts.callBack(this.iNum);
    },

    cleanClassName: function () {
      this.$aItem.removeClass('cur');
    },

    detectionPage: function (currentPage) {
      if (currentPage >= this.big_halfPage + 1) {
        this.$oFirst.removeClass('disable');
      } else {
        this.$oFirst.addClass('disable');
      }

      if ((this.allPages - currentPage) >= this.big_halfPage) {
        this.$oLast.removeClass('disable');
      } else {
        this.$oLast.addClass('disable');
      }

      if (currentPage > 1) {
        this.$oPrev.removeClass('disable');
      } else {
        this.$oPrev.addClass('disable');
      }

      if (currentPage < this.allPages) {
        this.$oNext.removeClass('disable');
      } else {
        this.$oNext.addClass('disable');
      }
    },

    setPaging: function (currentPage) {
      this.$aItem = this.$oList.find('li');

      for (var i = 1; i <= this.displayPage; i++) {
        if (currentPage <= this.min_halfPage) {
          this.$aItem.eq(i - 1).text(i).attr('index', '#' + i);

          for (var j = 1; j <= this.min_halfPage; j++) {
            if (currentPage === j && i === j) {
              this.$aItem.eq(i - 1).addClass('cur');
            }
          }
        } else if ((this.allPages - currentPage) < this.min_halfPage) {
          var nowNum = this.allPages - this.displayPage + i;

          this.$aItem.eq(i - 1).text(nowNum).attr('index', '#' + nowNum);

          for (var j = 0; j < this.min_halfPage; j ++) {
            if ((this.allPages - currentPage) === j && i === this.displayPage - j) {
              this.$aItem.eq(i - 1).addClass('cur');
            }
          }
        } else {
          var nowNum = currentPage - this.big_halfPage + i;

          if (i === this.big_halfPage) {
            this.$aItem.eq(i - 1).addClass('cur');
          }

          this.$aItem.eq(i - 1).text(nowNum).attr('index', '#' + nowNum);
        }
      }
    },

    initalPaging: function () {
      for (var i = 1; i <= this.displayPage; i ++) {
        var $create_li = $('<li></li>');

        $create_li.text(i).attr('index', '#' + i);

        this.$oList.append($create_li);
      }

      if (this.allPages <= this.displayPage) {
        this.$aItem.eq(this.nowPage - 1).addClass('cur');
      } else {
        this.$oGo.css({display: 'inline-block'});
        this.$oGo_text.attr('placeholder', 'Total: ' + this.allPages);
      }

      this.setPaging(this.nowPage);
      this.detectionPage(this.nowPage);
    },

    inital: function () {
      var self = this;

      this.initalPaging();
      this.opts.callBack && this.opts.callBack(this.iNum);

      this.$aItem.click(function () {
        if (!$(this).hasClass('cur')) {
          self.iNum = parseInt($(this).attr('index').substring(1));

          self.clickFn();
        }
      });

      this.$oFirst.click(function () {
        if (!$(this).hasClass('disable')) {
          self.iNum = 1;

          self.clickFn();
        }
      });

      this.$oLast.click(function () {
        if (!$(this).hasClass('disable')) {
          self.iNum = self.allPages;

          self.clickFn();
        }
      });

      this.$oPrev.click(function () {
        if (!$(this).hasClass('disable')) {
          self.iNum --;

          self.clickFn();
        }
      });

      this.$oNext.click(function () {
        if (!$(this).hasClass('disable')) {
          self.iNum ++;

          self.clickFn();
        }
      });

      this.$oGo_btn.click(function () {
        var value = self.$oGo_text.val();
        var reg = new RegExp(/^[0-9]*[1-9][0-9]*$/);

        if (value !== '' && reg.test(value) && value <= self.allPages) {
          self.iNum = parseInt(value);

          self.clickFn();

          self.$oGo_text.val('')
        } else {
          self.$oGo_text.val('')
        }
      });
    },

    constructor: Paging
  };

  $.fn.paging = function (options) {
    var paging = new Paging(this, options);

    return paging.inital();
  };

})(jQuery, window, document, undefined);
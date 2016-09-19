'use strict';

// 传入要显示参数
var showOBJ = {
  img: '../images/pic_woman.png', //轮廓图片
  arr: ['台灣', '台湾', 'Taiwan', '臺灣', '中国', 'china', '香港', '厦门'], //数据数组
  onearr: ['80 美女'], // 初始大小和着重点
  fontsize: 30, // 数量
  canvaswidth: 654,
  canvasheight: 836,
  canvasbg: '#22222d' // wordcloud2.js 里也要修改颜色
}

// 数据处理
var examples = {
  'taiwan': {
    list: (function() {
      // 通过向后台获取 
      var names = showOBJ.arr;
      var str = showOBJ.onearr;
      var i = showOBJ.fontsize;
      while (--i) {
        names.forEach(function(name) {
          str.push(i + ' ' + name);
        });
      }

      return str.join('\n');
    }()),

    option: '{\n' +
      '  gridSize: 4,\n' +
      '  weightFactor: 1,\n' +
      '  fontFamily: \'Hiragino Mincho Pro, serif\',\n' +
      '  color: \'random-dark\',\n' +
      '  backgroundColor: \'#f0f0f0\',\n' +
      '  rotateRatio: 0,\n' +
      '  ellipticity: 1,\n' +
      '  shape: function(theta) {\n' +
      '    /' + '/ Function for simple shapes can be generated manually with http://timdream.org/wordcloud2.js/shape-generator.html.\n' +
      '    var max = 1026;\n' +
      '    var leng = [290,296,299,301,305,309,311,313,315,316,318,321,325,326,327,328,330,330,331,334,335,338,340,343,343,343,346,349,353,356,360,365,378,380,381,381,381,391,394,394,395,396,400,400,408,405,400,400,400,401,401,403,404,405,408,410,413,414,414,415,416,418,420,423,425,430,435,440,446,456,471,486,544,541,533,532,533,537,540,537,535,535,533,546,543,539,531,529,530,533,529,528,529,522,521,520,509,520,520,533,522,523,526,528,527,532,537,539,539,540,539,538,533,532,524,523,513,503,482,467,443,438,435,431,429,427,426,422,422,426,426,423,419,414,410,407,404,401,396,393,393,395,392,389,388,383,379,378,376,375,372,369,368,359,343,335,332,327,323,314,308,300,294,290,288,289,290,282,275,269,263,257,242,244,237,235,235,232,231,225,224,221,219,218,218,217,217,215,215,214,214,214,214,214,215,215,216,213,213,212,211,209,207,205,204,206,205,205,205,205,204,203,203,201,200,199,197,195,193,192,192,190,189,187,186,186,183,183,182,182,181,179,180,179,178,178,177,177,176,176,176,176,175,175,175,175,175,175,174,174,175,175,175,175,176,177,176,177,177,177,180,179,179,180,179,179,179,178,178,178,178,177,178,177,179,179,179,180,180,181,181,181,183,183,184,184,186,187,189,189,192,195,193,194,193,194,194,191,189,196,195,196,199,200,201,200,200,200,200,202,203,204,205,210,210,210,211,210,214,218,219,226,231,233,235,235,235,235,236,238,240,241,243,245,246,249,249,249,255,257,264,271,272,274,275,276,276,278,285,292,294,296,301,304,313,320,330,333,337,342,345,348,352,358,363,376,386,379,386,387,387,399,402,402,410,415,420,425,430,429,436,435,438,442,447,451,454,455,474,477,481,484,492,486,488,501,509,544,553,552,553,564,579,593,600,627,637,644,644,643,641,640,641,641,643,643,648,651,653,659,671,678,685,690,698,705,711,715,722,729,738,760,770,777,780,788,792,796,800,803,806,808,810,809,815,819,821,823,826,828,830,834,838,849,854,861,884,891,909,932,996,1026,1016,1011,1015,1018,999,987,827,806,779,754,734,727,700,690,686,682,677,675,672,668,665,664,658,641,614,610,609,609,608,596,591,583,577,576,570,561,553,547,539,531,526,525,524,519,513,502,484,480,478,470,464,458,453,450,448,448,445,441,435,431,423,420,411,408,405,398,388,385,385,385,383,379,372,370,369,368,366,367,371,370,367,365,345,343,342,340,336,334,331,329,326,323,323,322,321,321,319,318,315,313,312,309,308,307,306,305,304,303,303,302,302,300,299,299,297,296,294,292,291,290,289,290,291,291,289,289,285,285,286,287,287,288,288,288,288,288,289,288,287,279,275,273,272,272,272,274,274,274,275,275,277,281,284,285,286,286,286,283,280,279,279,280,281,283,284,288,291];\n\n' +
      '    return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;\n' +
      '  }\n' +
      '}'
  }
};

var maskCanvas;

jQuery(function($) {
  var $form = $('#form');
  var $canvas = $('#canvas');
  var $htmlCanvas = $('#html-canvas');
  var $canvasContainer = $('#canvas-container');
  var $loading = $('#loading');

  var $list = $('#input-list');
  var $options = $('#config-option');
  var $width = $('#config-width');
  var $height = $('#config-height');
  var $mask = $('#config-mask');
  var $dppx = $('#config-dppx');
  var $css = $('#config-css');
  var $webfontLink = $('#link-webfont');

  if (!WordCloud.isSupported) {
    $('#not-supported').prop('hidden', false);
    $form.find('textarea, input, select, button').prop('disabled', true);
    return;
  }

  var $box = $('<div id="box" hidden />');
  $canvasContainer.append($box);
  window.drawBox = function drawBox(item, dimension) {
    if (!dimension) {
      $box.prop('hidden', true);

      return;
    }

    var dppx = $dppx.val();

    $box.prop('hidden', false);
    $box.css({
      left: dimension.x / dppx + 'px',
      top: dimension.y / dppx + 'px',
      width: dimension.w / dppx + 'px',
      height: dimension.h / dppx + 'px'
    });
  };

  // Update the default value if we are running in a hdppx device
  if (('devicePixelRatio' in window) &&
    window.devicePixelRatio !== 1) {
    $dppx.val(window.devicePixelRatio);
  }

  $canvas.on('wordcloudstop', function wordcloudstopped(evt) {
    $loading.prop('hidden', true);
  });

  // run 函数开始

  var run = function run() {
    $loading.prop('hidden', false);

    // Load web font
    $webfontLink.prop('href', $css.val());

    // devicePixelRatio
    var devicePixelRatio = parseFloat($dppx.val());

    // Set the width and height
    var width = showOBJ.canvaswidth;
    var height = showOBJ.canvasheight;
    var pixelWidth = width;
    var pixelHeight = height;

    if (devicePixelRatio !== 1) {
      $canvas.css({
        'width': width + 'px',
        'height': height + 'px'
      });

      pixelWidth *= devicePixelRatio;
      pixelHeight *= devicePixelRatio;
    } else {
      $canvas.css({
        'width': '',
        'height': ''
      });
    }

    $canvas.attr('width', pixelWidth);
    $canvas.attr('height', pixelHeight);

    $htmlCanvas.css({
      'width': pixelWidth + 'px',
      'height': pixelHeight + 'px'
    });

    // Set the options object
    var options = {};
    if ($options.val()) {
      options = (function evalOptions() {
        try {
          return eval('(' + $options.val() + ')');
        } catch (error) {
          alert('The following Javascript error occurred in the option definition; all option will be ignored: \n\n' +
            error.toString());
          return {};
        }
      })();
    }

    // Set devicePixelRatio options
    if (devicePixelRatio !== 1) {
      if (!('gridSize' in options)) {
        options.gridSize = 8;
      }
      options.gridSize *= devicePixelRatio;

      if (options.origin) {
        if (typeof options.origin[0] == 'number')
          options.origin[0] *= devicePixelRatio;
        if (typeof options.origin[1] == 'number')
          options.origin[1] *= devicePixelRatio;
      }

      if (!('weightFactor' in options)) {
        options.weightFactor = 1;
      }
      if (typeof options.weightFactor == 'function') {
        var origWeightFactor = options.weightFactor;
        options.weightFactor =
          function weightFactorDevicePixelRatioWrap() {
            return origWeightFactor.apply(this, arguments) * devicePixelRatio;
          };
      } else {
        options.weightFactor *= devicePixelRatio;
      }
    }

    // 获得数据字符串
    var datastring = examples.taiwan.list;

    // 把数据进行遍历切割

    var list = [];
    $.each(datastring.split('\n'), function each(i, line) {
      if (!$.trim(line))
        return;

      var lineArr = line.split(' ');
      var count = parseFloat(lineArr.shift()) || 0;
      list.push([lineArr.join(' '), count]);
    });
    options.list = list;


    if (maskCanvas) {
      options.clearCanvas = false;

      /* Determine bgPixel by creating
         another canvas and fill the specified background color. */
      var bctx = document.createElement('canvas').getContext('2d');

      bctx.fillStyle = options.backgroundColor || showOBJ.canvasbg;
      bctx.fillRect(0, 0, 1, 1);
      var bgPixel = bctx.getImageData(0, 0, 1, 1).data;

      var maskCanvasScaled = document.createElement('canvas');
      maskCanvasScaled.width = $canvas[0].width;
      maskCanvasScaled.height = $canvas[0].height;
      var ctx = maskCanvasScaled.getContext('2d');

      ctx.drawImage(maskCanvas,
        0, 0, maskCanvas.width, maskCanvas.height,
        0, 0, maskCanvasScaled.width, maskCanvasScaled.height);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var newImageData = ctx.createImageData(imageData);
      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] > 128) {
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3];
        } else {
          // This color must not be the same w/ the bgPixel.
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3] ? (bgPixel[3] - 1) : 0;
        }
      }

      ctx.putImageData(newImageData, 0, 0);

      ctx = $canvas[0].getContext('2d');
      ctx.drawImage(maskCanvasScaled, 0, 0);

      maskCanvasScaled = ctx = imageData = newImageData = bctx = bgPixel = undefined;
    }

    // All set, call the WordCloud()
    // Order matters here because the HTML canvas might by
    // set to display: none.
    WordCloud([$canvas[0], $htmlCanvas[0]], options);
  };


  // run 函数结束

  //  直接执行
  (function() {
    maskCanvas = null;

    var img = new Image();
    img.src = showOBJ.img;
    var url = img.src;

    img.onload = function readPixels() {
      window.URL.revokeObjectURL(url);

      maskCanvas = document.createElement('canvas');
      maskCanvas.width = 654;
      maskCanvas.height = 823;

      var ctx = maskCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var imageData = ctx.getImageData(
        0, 0, maskCanvas.width, maskCanvas.height);
      var newImageData = ctx.createImageData(imageData);

      for (var i = 0; i < imageData.data.length; i += 4) {
        var tone = imageData.data[i] +
          imageData.data[i + 1] +
          imageData.data[i + 2];
        var alpha = imageData.data[i + 3];

        if (alpha < 128 || tone > 128 * 3) {
          // Area not to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 255;
          newImageData.data[i + 3] = 0;
        } else {
          // Area to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 0;
          newImageData.data[i + 3] = 255;
        }
      }

      ctx.putImageData(newImageData, 0, 0);
    };
  })();


  var loadExampleData = function loadExampleData(name) {
    var example = examples[name];

    $options.val(example.option || '');
    $list.val(example.list || '');
    $css.val(example.fontCSS || '');
    $width.val(example.width || '');
    $height.val(example.height || '');
  };

  var changeHash = function changeHash(name) {
    if (window.location.hash === '#' + name ||
      (!window.location.hash && !name)) {
      // We got a same hash, call hashChanged() directly
      hashChanged();
    } else {
      // Actually change the hash to invoke hashChanged()
      window.location.hash = '#' + name;
    }
  };

  var hashChanged = function hashChanged() {
    var name = window.location.hash.substr(1);
    if (!name) {
      // If there is no name, run as-is.
      run();
    } else if (name in examples) {
      // If the name matches one of the example, load it and run it
      loadExampleData(name);
      run();
    } else {
      // If the name doesn't match, reset it.
      window.location.replace('#');
    }
  }

  $(window).on('hashchange', hashChanged);

  if (!window.location.hash ||
    !(window.location.hash.substr(1) in examples)) {
    // If the initial hash doesn't match to any of the examples,
    // or it doesn't exist, reset it to #love
    window.location.replace('#love');
  } else {
    hashChanged();
  }
  setTimeout(function() {
    changeHash('');
    $form.animate({
      'opacity': 1
    });
  }, 500)



});
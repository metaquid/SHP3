$(document).ready(function() {

  var body = $('body');
  var authorText = $('p');
  var quoteText = $('blockquote');
  var buttons = $('.btn');
  var quoteBoard = $('#quoteBoard');
  var link = $('.twitter');
  var quotes = [

    ["I am the master of my fate; I am the captain of my soul.", "William Ernest Henley"],
    ["I strive not to be a success, but rather to be of value.", "Albert Einstein"],
    ["I believe that every person is born with talent.", "Maya Angelou"],
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen R. Covey"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am not afraid of storms, for I am learning how to sail my ship.", "Louisa May Alcott"],
    ["I am the change that I wish to see in the world.", "Mahatma Gandhi"],
    ["I am enough of an artist to draw freely upon my imagination.", "Albert Einstein"],
    ["I am deliberate and afraid of nothing.", "Audre Lorde"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I believe in human dignity as the source of national purpose, human liberty as the source of national action.", "Franklin D. Roosevelt"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am not interested in picking up crumbs of compassion thrown from the table of someone who considers himself my master. I want the full menu of rights.", "Bishop Desmond Tutu"],
    ["I am not a liberator. Liberators do not exist. The people liberate themselves.", "Che Guevara"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.", "Abraham Lincoln"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am not a teacher, but an awakener.", "Robert Frost"],
    ["I am not a saint, unless you think of a saint as a sinner who keeps on trying.", "Nelson Mandela"],
    ["I am the wisest man alive, for I know one thing, and that is that I know nothing.", "Socrates"],
    ["I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.", "Alexander the Great"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am not a hands-on manager.", "Michael Bloomberg"],
    ["I am convinced that men hate each other because they fear each other. They fear each other because they don't know each other, and they don't know each other because they don't communicate with each other, and they don't communicate with each other because they are separated from each other.", "Martin Luther King Jr."],
    ["I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them.", "Robert A. Heinlein"],
    ["I am for truth, no matter who tells it. I am for justice, no matter who it is for or against.", "Malcolm X"],
    ["I am always doing that which I cannot do, in order that I may learn how to do it.", "Pablo Picasso"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am a woman with thoughts and questions and shit to say. I say if I'm beautiful. I say if I'm strong. You will not determine my story – I will.", "Amy Schumer"],
    ["I am an optimist. It does not seem too much use being anything else.", "Winston Churchill"],
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen R. Covey"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.", "Abraham Lincoln"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am not a teacher, but an awakener.", "Robert Frost"],
    ["I am not a saint, unless you think of a saint as a sinner who keeps on trying.", "Nelson Mandela"],
    ["I am the wisest man alive, for I know one thing, and that is that I know nothing.", "Socrates"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am for truth, no matter who tells it. I am for justice, no matter who it is for or against.", "Malcolm X"],
    ["I am always doing that which I cannot do, in order that I may learn how to do it.", "Pablo Picasso"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am a woman with thoughts and questions and shit to say. I say if I'm beautiful. I say if I'm strong. You will not determine my story – I will.", "Amy Schumer"],
    ["I am an optimist. It does not seem too much use being anything else.", "Winston Churchill"],
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen R. Covey"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.", "Abraham Lincoln"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am for truth, no matter who tells it. I am for justice, no matter who it is for or against.", "Malcolm X"],
    ["I am always doing that which I cannot do, in order that I may learn how to do it.", "Pablo Picasso"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am a woman with thoughts and questions and shit to say. I say if I'm beautiful. I say if I'm strong. You will not determine my story – I will.", "Amy Schumer"],
    ["I am an optimist. It does not seem too much use being anything else.", "Winston Churchill"],
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen R. Covey"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.", "Abraham Lincoln"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am the author of my life. Unfortunately, I am writing in pen, and I can’t erase my mistakes.", "Bill Kaulitz"],
    ["I am not someone who is ashamed of my past. I'm actually really proud. I know I made a lot of mistakes, but they, in turn, were my life lessons.", "Drew Barrymore"],
    ["I am not a has-been. I am a will be.", "Lauren Bacall"],
    ["I am for truth, no matter who tells it. I am for justice, no matter who it is for or against.", "Malcolm X"],
    ["I am always doing that which I cannot do, in order that I may learn how to do it.", "Pablo Picasso"],
    ["I am a woman with thoughts and questions and shit to say. I say if I'm beautiful. I say if I'm strong. You will not determine my story – I will.", "Amy Schumer"],
    ["I am an optimist. It does not seem too much use being anything else.", "Winston Churchill"],
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen R. Covey"],
    ["I am determined to be cheerful and happy in whatever situation I may find myself.", "Martha Washington"],
    ["I am free of all prejudice. I hate everyone equally.", "W.C. Fields"],
    ["I am determined to live life with purpose and passion.", "Tony Robbins"],
    ["I am not what happened to me, I am what I choose to become.", "Carl Jung"],
    ["I am bound to live up to what light I have.", "Abraham Lincoln"],
    ["I am the wisest man alive, for I know one thing, and that is that I know nothing.", "Socrates"],
    ["I am convinced that men hate each other because they fear each other.", "Martin Luther King Jr."],
    ["I am not interested in picking up crumbs of compassion thrown from the table of someone who considers himself my master.", "Bishop Desmond Tutu"],
    ["I am not a liberator. Liberators do not exist. The people liberate themselves.", "Che Guevara"],
    ["I am not a hands-on manager.", "Michael Bloomberg"],
    ["I am convinced that men hate each other because they fear each other.", "Martin Luther King Jr."],

  ];

  window.onload = setBoard;

  $(".btn").click(function(e) {
    e.preventDefault();
  }).mouseup(function() {
    $(this).blur();
  });
  $("#right").click(function() {
    var delay = 1000;
    quoteBoard.fadeOut(delay);
    setTimeout(function() {
      setBoard();
    }, delay);
    quoteBoard.fadeIn(delay);
  });

  function setBoard() {
    setRandomColor();
    changeQuote();
  }

  function setRandomColor() {
    var color = new RColor;
    var c1 = color.get(true, 0.65, 0.99);

    quoteText.css('color', c1);
    body.css('background-color', c1);
    buttons.css('background-color', c1);
  }

  var iterator = 0;
  var lastNumbers = [];

  function changeQuote() {

    var random;
    do {
      var wasUsed = false;
      random = Math.floor(Math.random() * quotes.length);

      for (var i = 0; i < lastNumbers.length; i++) {
        if (lastNumbers[i] == random) {
          wasUsed = true;
          break;
        }
      }

      if (!wasUsed) {
        lastNumbers[iterator] = random
        iterator = iterator >= 60 ? 0 : iterator + 1;
      }
    } while (wasUsed);

    quoteText.html(quotes[random][0]);
    authorText.html(quotes[random][1]);
    var tweet = "https://twitter.com/intent/tweet?text=\"" + quotes[random][0].replaceAll("&#59", "%3B") + "\"%20-%20" + quotes[random][1] + "&hashtags=quotes";
    tweet = adjustTweet(tweet);
    link.attr('href', tweet);
  }

  function adjustTweet(t) {
    if ((t.replaceAll("%3B", ";").replaceAll("%20", " ").length - 46) > 140) {
      t = t.substr(0, t.length - 16);
      if ((t.replaceAll("%3B", ";").replaceAll("%20", " ").length - 38) > 140) {
        t = t.substr(0, 182);
        if (t[t.length - 1] != '.' && t[t.length - 1] != '%3B' && t[t.length - 1] != '"') {
          if (t[t.length - 2] == '.' || t[t.length - 2] == '%3B' || t[t.length - 2] == '"' || t[t.length - 1] == '-') {
            t = t.substr(0, t.length - 1);
          } else if (t[t.length - 3] == '.' || t[t.length - 3] == '%3B' || t[t.length - 3] == '"' || t[t.length - 2] == '-') {
            t = t.substr(0, t.length - 2);
          } else if (t[t.length - 3] == '-') {
            t = t.substr(0, t.length - 3);
          } else if (t[t.length - 4] == '-') {
            t = t.substr(0, t.length - 4);
          } else if (t[t.length - 4] == ' ') {
            t = t.substr(0, t.length - 4) + "...";
          } else {
            t = t.substr(0, t.length - 3) + "...";
          }
        }
      }
    }
    return t;
  }

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  $('.popup').click(function(event) {
    var width = 575,
      height = 400,
      left = ($(window).width() - width) / 2,
      top = ($(window).height() - height) / 2,
      url = this.href,
      opts = 'status=1' +
      ',width=' + width +
      ',height=' + height +
      ',top=' + top +
      ',left=' + left;

    window.open(url, 'twitter', opts);

    return false;
  });
});

// *** RANDOM COLORS ***
(function(root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.RColor = factory();
  }
}(this, function() {

  var RColor = function() {
    this.hue = Math.random(),
      this.goldenRatio = 0.618033988749895;
    this.hexwidth = 2;
  };

  RColor.prototype.hsvToRgb = function(h, s, v) {
    var h_i = Math.floor(h * 6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      r = 255,
      g = 255,
      b = 255;
    switch (h_i) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
    }
    return [Math.floor(r * 200), Math.floor(g * 200), Math.floor(b * 250)]; /* 256 before but more light color */
  };

  RColor.prototype.padHex = function(str) {
    if (str.length > this.hexwidth) return str;
    return new Array(this.hexwidth - str.length + 1).join('0') + str;
  };

  RColor.prototype.get = function(hex, saturation, value) {
    this.hue += this.goldenRatio;
    this.hue %= 1;
    if (typeof saturation !== "number") saturation = 0.5;
    if (typeof value !== "number") value = 0.95;
    var rgb = this.hsvToRgb(this.hue, saturation, value);
    if (hex)
      return "#" + this.padHex(rgb[0].toString(16)) +
        this.padHex(rgb[1].toString(16)) +
        this.padHex(rgb[2].toString(16));
    else
      return rgb;
  };

  return RColor;

}));


function changeImage() {
        // images base name
        var imageNames = "SHP3-";

        // casual image from 0 to 23
        var randomIndex = Math.floor(Math.random() * 23);

        // image path
        var newImagePath = "img/" + imageNames + randomIndex + ".jpg";

        // get image and modify src
        var imageElement = document.getElementById("image");
	
        setTimeout(function() {
            imageElement.src = newImagePath;
        }, 1000);
}
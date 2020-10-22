var Random = (function () {
  function Random(seed) {
      this._multiplier = 48271;
      this._modulus = 2147483647;
      this._seed = seed;
      this._mq = Math.floor(this._modulus / this._multiplier);
      this._mr = this._modulus % this._multiplier;
  }
  Random.prototype.getInteger = function () {
      var temp = this._multiplier * (this._seed % this._mq) - (this._mr * Math.floor(this._seed / this._mq));

      if (temp > 0) {
          this._seed = temp;
      } else {
          this._seed = temp + this._modulus;
      }

      return this._seed;
  };

  Random.prototype.getReal = function () {
      var temp = this.getInteger();

      return temp / this._modulus;
  };

  Random.prototype.getSeed = function () {
      return this._seed;
  };
  return Random;
})();

window.onload = function() {
  (function($){

    const sideMsg = ["I am not worthy", "I am alive?", "You are going to die here", "You are worthless", "Where is thy God now?", "Shut up!", "I am emptiness", "You are worthless", "Ha ha ha!", "I am God!", "Kill yourself!", "Scream. I want to hear you scream", "I stink"]
    let g_timer = null;
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    function mcTimer(message) {
      g_timer = window.setTimeout(function() {
        console.log(message);
        clearTimeout(g_timer);
      }, getRandomInt(3400, 12000));
    }
    
    function mcTimerReset() {
      clearTimeout(g_timer);
    }
    
    
    let rnd = new Random(1);

    //console.log(rnd.getInteger());


    //mcTimer("something goes here");

    function doSomething() {}
      (function loop() {
        var rand = getRandomInt(8400, 18000);
        setTimeout(function() {
          var randM = getRandomInt(0, sideMsg.length);
          $("body .voices").remove();
          $("body").append("<p class='voices' data-text='"+sideMsg[randM]+"'>"+sideMsg[randM]+"</p>")
          doSomething();
          loop();  
        }, rand);
    }());


    
    
    
    

    /*$(".overlay").animate({opacity: 1}, 2500, function(){
      alert("done");
    });*/

  })(jQuery);
}

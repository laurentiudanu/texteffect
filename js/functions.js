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

    const sideMsg = ["message 1", "message 2", "message 3", "message 4", "message 5", "message 6"]
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

    console.log(rnd.getInteger());


    mcTimer("something goes here");

    function doSomething() {}
      (function loop() {
        var rand = getRandomInt(5400, 18000);
        setTimeout(function() {
          var randM = getRandomInt(0, 5);
          console.log(sideMsg[randM]);
          doSomething();
          loop();  
        }, rand);
    }());


    
    
    
    

    /*$(".overlay").animate({opacity: 1}, 2500, function(){
      alert("done");
    });*/

  })(jQuery);
}

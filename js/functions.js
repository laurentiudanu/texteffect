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


    let g_timer = null;

    function mcTimer(message) {
      g_timer = window.setTimeout(function() {
        console.log(message)
      }, getRandomInt(1400, 3000));
    }
    
    function mcTimerReset() {
      clearTimeout(g_timer);
    }
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    let rnd = new Random(4);

    console.log(rnd.getInteger());
    mcTimer("something goes here");

    /*$(".overlay").animate({opacity: 1}, 2500, function(){
      alert("done");
    });*/

  })(jQuery);
}

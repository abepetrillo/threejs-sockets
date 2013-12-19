(function(exports){
  var keyCodes = {
    up: 38,
    right: 39,
    down: 40,
    left: 37
  }

  var keyMethods = []
  keyMethods[keyCodes.up] = function(){
    mesh.translateZ(10)
  }
  keyMethods[keyCodes.right] = function(){
    mesh.rotation.y -= 0.1;
  }
  keyMethods[keyCodes.down] = function(){
    mesh.translateZ(-10)
  }
  keyMethods[keyCodes.left] = function(){
    mesh.rotation.y += 0.1;
  }



  exports.attachEvents = function(docElement){
    docElement.onkeydown = function(e) {
      console.log(e.keyCode)
      keyMethods[e.keyCode]();
    }
  }
})(typeof exports === 'undefined'? this['keyBindings']={} : exports);
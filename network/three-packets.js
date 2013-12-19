(function(exports){
  exports.meshToPacket = function (obj) {
    var rotation = obj.rotation.toArray(),
        position = obj.position;

    return {
      rotation: rotation,
      position: position
    }
  }

  exports.updateMeshFromPacket = function (mesh, packet) {
    mesh.rotation.fromArray(packet.rotation);
    mesh.position = packet.position;
  }
})(typeof exports === 'undefined'? this['packetizer']={} : exports);
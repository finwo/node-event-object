(function(exports) {
  exports.eventObject = function(sourceObject) {
    var listeners = {};
    sourceObject = sourceObject || {};
    sourceObject.trigger = function(name, data) {
      data = data || true;
      if( listeners[name] ) {
        listeners[name].forEach(function(callback) {
          data = data && callback.call(null, data);
        });
      }
      return data;
    };
    sourceObject.on = function(name, callback) {
      if(name.forEach) {
        name.forEach(function(currentName) {
          sourceObject.on(currentName, callback);
        });
        return sourceObject;
      }
      listeners[name] = listeners[name] || [];
      listeners[name].push(callback);
      return sourceObject;
    };
  };
})(typeof exports === 'object' ? exports : this);

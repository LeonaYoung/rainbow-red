
var rainbow = {};
module['exports'] = rainbow;

rainbow.addSuffix = function(str, suffix) {
  if (!str) return '';
  return str + suffix;
}

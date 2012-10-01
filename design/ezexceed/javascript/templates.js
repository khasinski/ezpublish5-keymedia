this['JST'] = this['JST'] || {};

this['JST']['keymedia/scaler'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"customattributes\"></div>\n\n<section class=\"keymedia-crop\">\n    <ul class=\"nav nav-pills inverted\"></ul>\n</section>\n\n<div class=\"keymedia-crop-container\">\n    <div class=\"image-wrap\">\n        <img src=\"";
  foundHelper = helpers.media;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.media; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" />\n    </div>\n</div>\n";
  return buffer;});

this['JST']['keymedia/browser'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<form onsubmit=\"javascript: return false;\" class=\"form-search\">\n    <input type=\"text\" class=\"q input-long\" placeholder=\"";
  foundHelper = helpers.translate;
  stack1 = foundHelper ? foundHelper.call(depth0, "Search for media", {hash:{}}) : helperMissing.call(depth0, "translate", "Search for media", {hash:{}});
  buffer += escapeExpression(stack1) + "\">\n    <button type=\"button\" class=\"btn search\">\n        ";
  foundHelper = helpers.translate;
  stack1 = foundHelper ? foundHelper.call(depth0, "Search for media", {hash:{}}) : helperMissing.call(depth0, "translate", "Search for media", {hash:{}});
  buffer += escapeExpression(stack1) + "\n    </button>\n    <div class=\"upload-container\" id=\"keymedia-browser-local-file-container-";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <button type=\"button\" class=\"btn upload\" id=\"keymedia-browser-local-file-";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n            ";
  foundHelper = helpers.translate;
  stack1 = foundHelper ? foundHelper.call(depth0, "Upload new", {hash:{}}) : helperMissing.call(depth0, "translate", "Upload new", {hash:{}});
  buffer += escapeExpression(stack1) + "\n        </button>\n    </div>\n</form>\n<div class=\"keymedia-thumbs\"></div>\n";
  return buffer;});

this['JST']['keymedia/item'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " shared";}

  buffer += "<div class=\"item\">\n    <a class=\"pick\" data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <img src=\"";
  stack1 = depth0.thumb;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" />\n        <p class=\"meta\">";
  foundHelper = helpers.filename;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.filename; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "<br /><span class=\"details\">";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " x ";
  foundHelper = helpers.height;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></p>\n        <span class=\"share";
  stack1 = depth0.shared;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n    </a>\n</div>\n";
  return buffer;});

this['JST']['keymedia/scalerattributes'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " value=\"";
  foundHelper = helpers.alttext;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.alttext; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <label>Class\n    <select name=\"cssclass\">\n        <option value=\"\"> - </option>\n        ";
  stack1 = depth0.classes;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    </label>\n";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n            <option value=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  stack1 = depth0.selected;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}
function program5(depth0,data) {
  
  
  return " selected";}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<label>View\n    <select name=\"viewmode\">\n        <option value=\"\"> - </option>\n        ";
  stack1 = depth0.viewmodes;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</label>\n";
  return buffer;}
function program8(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <option value=\"";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"\n        ";
  stack1 = depth0.selected;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}
function program9(depth0,data) {
  
  
  return " selected";}

  buffer += "<input type=\"text\" name=\"alttext\" placeholder=\"";
  stack1 = depth0.tr;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.alttext;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"";
  stack1 = depth0.alttext;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n";
  stack1 = depth0.classes;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = depth0.viewmodes;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});

this['JST']['keymedia/scaledversion'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a>\n    ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "<br />\n    <small>";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "x";
  foundHelper = helpers.height;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</small>\n</a>\n<div class=\"overlay\"></div>\n";
  return buffer;});
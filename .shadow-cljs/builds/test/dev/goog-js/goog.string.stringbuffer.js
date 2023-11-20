["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/stringbuffer.js"],"~:js","goog.provide(\"goog.string.StringBuffer\");\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\ngoog.string.StringBuffer.prototype.buffer_ = \"\";\ngoog.string.StringBuffer.prototype.set = function(s) {\n  this.buffer_ = \"\" + s;\n};\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {\n    for (let i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\ngoog.string.StringBuffer.prototype.clear = function() {\n  this.buffer_ = \"\";\n};\ngoog.string.StringBuffer.prototype.getLength = function() {\n  return this.buffer_.length;\n};\ngoog.string.StringBuffer.prototype.toString = function() {\n  return this.buffer_;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utility for fast string concatenation.\n */\n\ngoog.provide('goog.string.StringBuffer');\n\n\n\n/**\n * Utility class to facilitate string concatenation.\n *\n * @param {*=} opt_a1 Optional first initial item to append.\n * @param {...*} var_args Other initial items to\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\n * @constructor\n */\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  'use strict';\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\n\n\n/**\n * Internal buffer for the string to be concatenated.\n * @type {string}\n * @private\n */\ngoog.string.StringBuffer.prototype.buffer_ = '';\n\n\n/**\n * Sets the contents of the string buffer object, replacing what's currently\n * there.\n *\n * @param {*} s String to set.\n */\ngoog.string.StringBuffer.prototype.set = function(s) {\n  'use strict';\n  this.buffer_ = '' + s;\n};\n\n\n/**\n * Appends one or more items to the buffer.\n *\n * Calling this with null, undefined, or empty arguments is an error.\n *\n * @param {*} a1 Required first string.\n * @param {*=} opt_a2 Optional second string.\n * @param {...?} var_args Other items to append,\n *     e.g., sb.append('foo', 'bar', 'baz').\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\n * @suppress {duplicate}\n */\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  'use strict';\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\n    for (let i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\n\n\n/**\n * Clears the internal buffer.\n */\ngoog.string.StringBuffer.prototype.clear = function() {\n  'use strict';\n  this.buffer_ = '';\n};\n\n\n/**\n * @return {number} the length of the current contents of the buffer.\n */\ngoog.string.StringBuffer.prototype.getLength = function() {\n  'use strict';\n  return this.buffer_.length;\n};\n\n\n/**\n * @return {string} The concatenated string.\n * @override\n */\ngoog.string.StringBuffer.prototype.toString = function() {\n  'use strict';\n  return this.buffer_;\n};\n","~:compiled-at",1700249173489,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.stringbuffer.js\",\n\"lineCount\":29,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,0BAAb,CAAA;AAYAD,IAAKE,CAAAA,MAAOC,CAAAA,YAAZ,GAA2BC,QAAQ,CAACC,MAAD,EAASC,QAAT,CAAmB;AAEpD,MAAID,MAAJ,IAAc,IAAd;AACE,QAAKE,CAAAA,MAAOC,CAAAA,KAAZ,CAAkB,IAAlB,EAAwBC,SAAxB,CAAA;AADF;AAFoD,CAAtD;AAaAT,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUC,CAAAA,OAAnC,GAA6C,EAA7C;AASAX,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUE,CAAAA,GAAnC,GAAyCC,QAAQ,CAACC,CAAD,CAAI;AAEnD,MAAKH,CAAAA,OAAL,GAAe,EAAf,GAAoBG,CAApB;AAFmD,CAArD;AAkBAd,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUH,CAAAA,MAAnC,GAA4CQ,QAAQ,CAACC,EAAD,EAAKC,MAAL,EAAaX,QAAb,CAAuB;AAGzE,MAAKK,CAAAA,OAAL,IAAgBO,MAAA,CAAOF,EAAP,CAAhB;AACA,MAAIC,MAAJ,IAAc,IAAd;AACE,SAAK,IAAIE,IAAI,CAAb,EAAgBA,CAAhB,GAAoBV,SAAUW,CAAAA,MAA9B,EAAsCD,CAAA,EAAtC;AACE,UAAKR,CAAAA,OAAL,IAAgBF,SAAA,CAAUU,CAAV,CAAhB;AADF;AADF;AAKA,SAAO,IAAP;AATyE,CAA3E;AAgBAnB,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUW,CAAAA,KAAnC,GAA2CC,QAAQ,EAAG;AAEpD,MAAKX,CAAAA,OAAL,GAAe,EAAf;AAFoD,CAAtD;AASAX,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUa,CAAAA,SAAnC,GAA+CC,QAAQ,EAAG;AAExD,SAAO,IAAKb,CAAAA,OAAQS,CAAAA,MAApB;AAFwD,CAA1D;AAUApB,IAAKE,CAAAA,MAAOC,CAAAA,YAAaO,CAAAA,SAAUe,CAAAA,QAAnC,GAA8CC,QAAQ,EAAG;AAEvD,SAAO,IAAKf,CAAAA,OAAZ;AAFuD,CAAzD;;\",\n\"sources\":[\"goog/string/stringbuffer.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utility for fast string concatenation.\\n */\\n\\ngoog.provide('goog.string.StringBuffer');\\n\\n\\n\\n/**\\n * Utility class to facilitate string concatenation.\\n *\\n * @param {*=} opt_a1 Optional first initial item to append.\\n * @param {...*} var_args Other initial items to\\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\\n * @constructor\\n */\\ngoog.string.StringBuffer = function(opt_a1, var_args) {\\n  'use strict';\\n  if (opt_a1 != null) {\\n    this.append.apply(this, arguments);\\n  }\\n};\\n\\n\\n/**\\n * Internal buffer for the string to be concatenated.\\n * @type {string}\\n * @private\\n */\\ngoog.string.StringBuffer.prototype.buffer_ = '';\\n\\n\\n/**\\n * Sets the contents of the string buffer object, replacing what's currently\\n * there.\\n *\\n * @param {*} s String to set.\\n */\\ngoog.string.StringBuffer.prototype.set = function(s) {\\n  'use strict';\\n  this.buffer_ = '' + s;\\n};\\n\\n\\n/**\\n * Appends one or more items to the buffer.\\n *\\n * Calling this with null, undefined, or empty arguments is an error.\\n *\\n * @param {*} a1 Required first string.\\n * @param {*=} opt_a2 Optional second string.\\n * @param {...?} var_args Other items to append,\\n *     e.g., sb.append('foo', 'bar', 'baz').\\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\\n * @suppress {duplicate}\\n */\\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\\n  'use strict';\\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\\n  this.buffer_ += String(a1);\\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\\n    for (let i = 1; i < arguments.length; i++) {\\n      this.buffer_ += arguments[i];\\n    }\\n  }\\n  return this;\\n};\\n\\n\\n/**\\n * Clears the internal buffer.\\n */\\ngoog.string.StringBuffer.prototype.clear = function() {\\n  'use strict';\\n  this.buffer_ = '';\\n};\\n\\n\\n/**\\n * @return {number} the length of the current contents of the buffer.\\n */\\ngoog.string.StringBuffer.prototype.getLength = function() {\\n  'use strict';\\n  return this.buffer_.length;\\n};\\n\\n\\n/**\\n * @return {string} The concatenated string.\\n * @override\\n */\\ngoog.string.StringBuffer.prototype.toString = function() {\\n  'use strict';\\n  return this.buffer_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"StringBuffer\",\"goog.string.StringBuffer\",\"opt_a1\",\"var_args\",\"append\",\"apply\",\"arguments\",\"prototype\",\"buffer_\",\"set\",\"goog.string.StringBuffer.prototype.set\",\"s\",\"goog.string.StringBuffer.prototype.append\",\"a1\",\"opt_a2\",\"String\",\"i\",\"length\",\"clear\",\"goog.string.StringBuffer.prototype.clear\",\"getLength\",\"goog.string.StringBuffer.prototype.getLength\",\"toString\",\"goog.string.StringBuffer.prototype.toString\"]\n}\n"]
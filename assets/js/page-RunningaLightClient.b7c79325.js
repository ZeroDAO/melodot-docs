(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{454:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"running-a-light-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-a-light-client"}},[t._v("#")]),t._v(" Running a Light Client")]),t._v(" "),s("h2",{attrs:{id:"_1-introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[t._v("#")]),t._v(" 1. Introduction")]),t._v(" "),s("p",[t._v("The light client of the Melodot network is currently operational on the development network. Light nodes can obtain block headers of final blocks from the Melodot network via RPC and verify data validity through sampling.")]),t._v(" "),s("h2",{attrs:{id:"_2-operating-mechanism"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-operating-mechanism"}},[t._v("#")]),t._v(" 2. Operating Mechanism")]),t._v(" "),s("p",[t._v("Melodot light nodes obtain data availability through sampling. They do not need to trust any node, nor do they need to download the entire data set.")]),t._v(" "),s("p",[t._v("Light nodes first obtain the block headers of the latest final blocks from full nodes. Then they construct sample IDs from the metadata in the block headers and sample these random samples in a separate data network, verifying the data through the KZG commitments in the block headers.")]),t._v(" "),s("h2",{attrs:{id:"_3-building"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-building"}},[t._v("#")]),t._v(" 3. Building")]),t._v(" "),s("p",[t._v("Building from source:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:ZeroDAO/melodot.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" melodot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" build-light\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_4-execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-execution"}},[t._v("#")]),t._v(" 4. Execution")]),t._v(" "),s("p",[t._v("Ensure that the Melodot development network is started first, and then run the light node to join the development network:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" run-light-dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5-rpc-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-rpc-interface"}},[t._v("#")]),t._v(" 5. RPC Interface")]),t._v(" "),s("h3",{attrs:{id:"post-das-blockconfidence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-das-blockconfidence"}},[t._v("#")]),t._v(" POST /das_blockConfidence")]),t._v(" "),s("p",[t._v("Obtain the confidence level by block hash, which will return the confidence level as parts per million.")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"method":"das_blockConfidence",\\\n"params":["0xc964c3636fdf33bcc4ccc7ad854b32862e02ec50f02a00ba43f0b02c4fbb67e3"],\\\n"id":1,"jsonrpc":"2.0"}\'')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-X POST localhost:4177\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[t._v("Responses")])])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("937500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"post-das-isavailable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-das-isavailable"}},[t._v("#")]),t._v(" POST /das_isAvailable")]),t._v(" "),s("p",[t._v("Obtain whether the data of a block is available by block hash. If it returns null, it means there is no data for that block.")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"method":"das_isAvailable",\\\n"params":["0xc964c3636fdf33bcc4ccc7ad854b32862e02ec50f02a00ba43f0b02c4fbb67e3"],\\\n"id":1,"jsonrpc":"2.0"}\'')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-X POST localhost:4177\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[t._v("Responses")])])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{457:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"node-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-types"}},[e._v("#")]),e._v(" Node Types")]),e._v(" "),s("p",[e._v("Melodot nodes are categorized into three main types: consensus nodes, light clients, and farmer nodes. They work together to maintain the high throughput and security of the Melodot network. Consensus nodes are responsible for consensus, light clients for verification, and farmer nodes for data storage.")]),e._v(" "),s("h2",{attrs:{id:"consensus-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-nodes"}},[e._v("#")]),e._v(" Consensus Nodes")]),e._v(" "),s("p",[e._v("The role of consensus nodes is to handle data transactions and a minimal amount of other necessary transactions, such as transfers. The design principle of consensus nodes is to be light enough that validators undertake as few tasks as possible. This allows them to perform other duties without impacting consensus, thereby enhancing the scalability of the system.")]),e._v(" "),s("p",[e._v("Specifically, consensus nodes are responsible for:")]),e._v(" "),s("ul",[s("li",[e._v("Processing data transactions")]),e._v(" "),s("li",[e._v("Reaching consensus and producing blocks")]),e._v(" "),s("li",[e._v("Handling transactions related to farmer incentives")]),e._v(" "),s("li",[e._v("Preliminary sampling for data availability")]),e._v(" "),s("li",[e._v("Handling a minimal amount of other necessary transactions like transfers")])]),e._v(" "),s("p",[e._v("It should be noted that consensus nodes are not responsible for the ultimate data availability. Architecturally, validators do not need to be concerned about whether the data is available; they should only care if the data transactions are valid. However, for greater availability, we will introduce another role of data providers in the future to ensure data availability, while consensus nodes will only need to do simple sampling. Additionally, consensus nodes do not actually download and store data; that is the responsibility of farmer nodes.")]),e._v(" "),s("p",[e._v("Looking at a finer granularity, consensus nodes are further divided into validator nodes, full nodes, boot nodes, consensus light nodes, and so on.")]),e._v(" "),s("h2",{attrs:{id:"light-clients"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#light-clients"}},[e._v("#")]),e._v(" Light Clients")]),e._v(" "),s("p",[e._v("Light clients validate data availability through sampling without needing to trust third parties, including validators. Currently, light clients communicate with consensus nodes via RPC. In the future, we will introduce more communication methods, such as communicating with consensus nodes through a P2P network, and possessing the ability of final blocks, which will greatly enhance the security of light clients by making them not need to trust consensus nodes.")]),e._v(" "),s("p",[e._v("Light clients provide RPC services, which can be used to obtain the data confidence level and availability of each block. We will introduce SDKs in more languages in the future, making it more convenient to integrate light clients into applications.")]),e._v(" "),s("p",[e._v("From the system's perspective, light clients also become data providers while sampling. The scale of the light clients determines the amount of data that can be accommodated in a single block.")]),e._v(" "),s("h2",{attrs:{id:"farmer-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#farmer-nodes"}},[e._v("#")]),e._v(" Farmer Nodes")]),e._v(" "),s("p",[e._v("Farmer nodes earn rewards by storing data and provide samples to other sampling nodes through off-chain consensus. Farmer nodes are the backbone of the entire network, enhancing your ability to retrieve data.")]),e._v(" "),s("p",[e._v("It is important to note that farmer nodes do not affect the security of data availability.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
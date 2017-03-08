// Schord v0.0.1
// made by nokko
// discord.io (here uglified) licensed under the MIT license and made by izy521 and contributors!
// :)

(function(ext) {
    //Load the discord.io library
    !function(e){function n(e,n){return e?v(n,[Error(e)]):!1}function t(e,n,t,r){if("function"==typeof r){if(t=t||{},!n&&i(t))return r(null,t.body),!0
    var s=Error(n||e)
    return s.name="ResponseError",s.statusCode=t.statusCode,s.statusMessage=t.statusMessage,s.response=t.body,r(s),!1}}function i(e){return 2===(e.statusCode/100|0)}function r(e){return e?e.statusCode+" "+e.statusMessage+"\n"+JSON.stringify(e.body):null}function s(e,n,i,r){N(e,n,function(n){e._req("post",ve.MESSAGES(n),i,function(e,n){t("Unable to send messages",e,n,r)})})}function o(e,n,t,i){if(e[t]||(e[t]={}),-1===n)return void(e[t][i.id]=i)
    var r=Object.keys(e[t])
    r.length>n&&delete e[t][r[0]],e[t][i.id]=i}function a(e,n){return{content:e+"",nonce:Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),embed:n||{}}}function u(e){var n={accept:"*/*","accept-language":"en-US;q=0.8"}
    ge&&(n["accept-encoding"]="gzip, deflate",n.user_agent="DiscordBot (https://github.com/izy521/discord.io, "+be+")",n.dnt=1)
    try{n.authorization=(e.bot?"Bot ":"")+e.internals.token}catch(t){}return n}function c(e,n,t,i,r){return 0>=i?s(e,n,t,r):void e.simulateTyping(n,function(){setTimeout(c,Math.min(i,5e3),e,n,t,i-5e3,r)})}function l(e){return"object"==typeof e?e.name+":"+e.id:e.indexOf(":")>-1?e:encodeURIComponent(decodeURIComponent(e))}function d(e,t){var i,r,s,o,a=u(this)
    if(r="function"==typeof arguments[2]?arguments[2]:(i=arguments[2],arguments[3]),ge)return s=ke.parse(t),s.method=e,s.headers=a,o=Me[s.protocol.slice(0,-1)].request(s,function(e){var n=[]
    e.on("data",function(e){n[n.length]=e}),e.once("end",function(){n=Buffer.concat(n),Ce.gunzip(n,function(t,i){t||(i=""+i)
    try{e.body=JSON.parse(i||n)}catch(s){}return r(null,e)})})}),("object"===E(i)||"get"===e.toLowerCase())&&o.setHeader("Content-Type","application/json; charset=utf-8"),i instanceof me&&o.setHeader("Content-Type","multipart/form-data; boundary="+i.boundary),i&&o.write(i.result||JSON.stringify(i),i.result?"binary":"utf-8"),o.end(),o.once("error",function(e){return r(e.message)})
    o=new XMLHttpRequest,o.open(e.toUpperCase(),t,!0)
    for(var c in a)o.setRequestHeader(c,a[c])
    return o.onreadystatechange=function(){if(4==o.readyState){o.statusCode=o.status,o.statusMessage=o.statusText
    try{o.body=JSON.parse(o.responseText)}catch(e){return n(e,r)}r(null,o)}},("object"===E(i)||"get"===e.toLowerCase())&&o.setRequestHeader("Content-Type","application/json; charset=utf-8"),i instanceof me&&o.setRequestHeader("Content-Type","multipart/form-data; boundary="+i.boundary),i?o[i.result?"sendAsBinary":"send"](i.result?i.result:JSON.stringify(i)):void o.send(null)}function f(e,n){e&&1==e.readyState&&e.send(JSON.stringify(n))}function h(e){try{return JSON.parse(JSON.stringify(e))}catch(n){}}function m(e,n,t){t||(t=[])
    for(var i in e)t.indexOf(i)>-1||(n[i]=e[i])}function _(e,n){n.forEach(function(n){Object.defineProperty(e,n[0],{configurable:!0,writable:!0,value:n[1]})},e)}function E(e){return Object.prototype.toString.call(e).match(/ (.*)]/)[1].toLowerCase()}function v(e,n){return"function"==typeof e?e.apply(null,n):void 0}function p(e){var n=0,t="",i=Object.keys(e)
    for(n;n<i.length;n++)t+=i[n]+"="+e[i[n]]+"&"
    return"?"+t.slice(0,-1)}function g(e,n){if(n.t){var t=n.t.split("_"),i=1,r=[t[0].toLowerCase()]
    for(i;i<t.length;i++)r[0]+=t[i][0]+t[i].slice(1).toLowerCase()
    for(i=2;i<arguments.length;i++)r.push(arguments[i])
    r.push(n),e.emit.apply(e,r)}}function b(e,n){return n=n||{},n.binary?JSON.parse(""+Ce.inflateSync(e)):JSON.parse(e)}function S(e,n){if(e){var t,i,r,s,o,a=e._evts
    if(ge)return n?e.removeAllListeners(n):e.removeAllListeners()
    if(n&&a[n])for(t=0;t<a[n].length;t++)e.removeListener(n,a[n][t])
    if(!n)for(i=Object.keys(a),r=0;r<i.length;r++)for(s=a[i[r]],o=0;o<s.length;o++)e.removeListener(i[r],s[o])}}function I(e,n){return n.roles.reduce(function(n,t){var i=e.roles[t]
    return i&&i.position>n[0]&&i.color?[i.position,i.color]:n},[-1,null])[1]}function y(e,n){return n|1<<e}function D(e,n){return n&~(1<<e)}function A(e,n){return 1==(n>>e&1)}function R(e){return function(){return 1==(this._permissions>>e&1)}}function C(e){return function(n){return n===!0?this._permissions|=1<<e:n===!1?this._permissions&=~(1<<e):void 0}}function w(e,n){for(var t=0;t<n.length;t++)e.servers[n[t].id]=new ae(e,n[t])}function O(e,n){for(var t=0;t<n.length;t++)e.directMessages[n[t].id]=new ce(e._uIDToDM,n[t])}function N(e,n,t){return e._uIDToDM[n]?t(e._uIDToDM[n]):e.users[n]?e.createDMChannel(n,function(e,n){return e?console.log("Internal ID resolver error: "+e):void t(n.id)}):t(n)}function T(e){return e.detail||([e.data][0]?[e.data]:[e.code])}function M(e,n){return e.servers={},e.channels={},e.users={},e.directMessages={},e.internals={oauth:{},version:be,settings:{}},e._connecting=!0,G(e.internals),U(e,n)}function U(e,n){return n.token?k(e,n.token):void 0}function k(e,n){return e.internals.token=n,d("get",ve.GATEWAY,function(n,t){return n||!i(t)?(e._connecting=!1,e.emit("disconnect","Error GETing gateway:\n"+r(t),0)):L(e,t.body.url+"/?encoding=json&v="+Se)})}function L(e,n){e._ws=new Ee(n),e.internals.gatewayUrl=n,e._ws.once("close",x.bind(e)),e._ws.once("error",x.bind(e)),e._ws.on("message",V.bind(e))}function q(e,n,t){return n[0]?(f(e._ws,pe.OFFLINE_USERS(n)),setTimeout(q,0,e,n,t)):v(t)}function j(e,n,t){var i=Object.keys(e.servers).every(function(n){return!e.servers[n].unavailable})
    return i||n[0]?void(e._ready=e.emit("ready",t)):setTimeout(j,0,e,n,t)}function G(e){_(e,[["_pings",[]],["_lastHB",0]]),Object.defineProperty(e,"ping",{get:function(){return 0|(e._pings.reduce(function(e,n){return e+n},0)/e._pings.length||0)},set:function(){}})}function B(e){return"array"===E(e)&&2===e.length&&e[0]<=e[1]&&e[1]>1?e:null}function P(e){var n,t=e.internals
    return t.sequence&&t.token&&t.sessionID?n=pe.RESUME(e):(n=pe.IDENTIFY(e),e._shard&&(n.d.shard=e._shard)),e._connecting=!1,f(e._ws,n)}function V(e,n){var t,i,r,s,a,u,c,l,d=b(e,n),_=d.d,E=this
    switch(E.internals.sequence=d.s,d.op){case 10:P(E),E.presenceStatus="online",E.connected=!0,E._mainKeepAlive=setInterval(function(){E.internals.heartbeat=setTimeout(E._ws.close.bind(E._ws,1e3,"No heartbeat received"),15e3),E.internals._lastHB=Date.now(),f(E._ws,pe.HEARTBEAT(E))},_.heartbeat_interval)
    break
    case 11:clearTimeout(E.internals.heartbeat),E.internals._pings.unshift(Date.now()-E.internals._lastHB),E.internals._pings=E.internals._pings.slice(0,10)}switch(E.emit("any",d),E.emit("debug",d),d.t){case"READY":return m(_.user,E),E.internals.sessionID=_.session_id,w(E,_.guilds),O(E,_.private_channels),E.bot&&E.getOauthInfo(function(e,n){return e?console.log(e):(E.internals.oauth=n,void(E.inviteURL="https://discordapp.com/oauth2/authorize?client_id="+n.id+"&scope=bot"))}),E.bot||E.getAccountSettings(function(e,n){return e?console.log(e):void(E.internals.settings=n)}),function(){if(!E._ready){var e=[!1]
    setTimeout(function(){e[0]=!0},3500),j(E,e,d)}}()
    case"MESSAGE_CREATE":return E.emit("message",_.author.username,_.author.id,_.channel_id,_.content,d),g(E,d,_.author.username,_.author.id,_.channel_id,_.content),o(E._messageCache,E._messageCacheLimit,_.channel_id,_)
    case"MESSAGE_UPDATE":try{g(E,d,E._messageCache[_.channel_id][_.id],_)}catch(v){g(E,d,void 0,_)}return o(E._messageCache,E._messageCacheLimit,_.channel_id,_)
    case"PRESENCE_UPDATE":if(!_.guild_id)break
    u=_.guild_id,a=_.user.id,E.users[a]||(E.users[a]=new le(_.user)),t=E.users[a],r=E.servers[u].members[a]||{},m(_.user,t),t.game=_.game,m(_,r,["user","guild_id","game"]),E.emit("presence",t.username,t.id,r.status,t.game,d)
    break
    case"USER_UPDATE":m(_,E)
    break
    case"USER_SETTINGS_UPDATE":m(_,E.internals)
    break
    case"GUILD_CREATE":return E.servers[_.id]=new ae(E,_),g(E,d,E.servers[_.id])
    case"GUILD_UPDATE":return s=h(E.servers[_.id]),ae.update(E,_),g(E,d,s,E.servers[_.id])
    case"GUILD_DELETE":return g(E,d,E.servers[_.id]),delete E.servers[_.id]
    case"GUILD_MEMBER_ADD":return E.users[_.user.id]=new le(_.user),E.servers[_.guild_id].members[_.user.id]=new de(E,E.servers[_.guild_id],_),E.servers[_.guild_id].member_count+=1,g(E,d,E.servers[_.guild_id].members[_.user.id])
    case"GUILD_MEMBER_UPDATE":return s=h(E.servers[_.guild_id].members[_.user.id]),de.update(E,E.servers[_.guild_id],_),g(E,d,s,E.servers[_.guild_id].members[_.user.id])
    case"GUILD_MEMBER_REMOVE":if(_.user&&_.user.id===E.id)return
    return E.servers[_.guild_id].member_count-=1,g(E,d,E.servers[_.guild_id].members[_.user.id]),delete E.servers[_.guild_id].members[_.user.id]
    case"GUILD_ROLE_CREATE":return E.servers[_.guild_id].roles[_.role.id]=new fe(_.role),g(E,d,E.servers[_.guild_id].roles[_.role.id])
    case"GUILD_ROLE_UPDATE":return i=E.servers[_.guild_id],s=h(i.roles[_.role.id]),fe.update(i,_),Object.keys(i.members).forEach(function(e){var n=i.members[e]
    n.roles.indexOf(_.role.id)<0||(n.color=I(i,n))}),g(E,d,s,i.roles[_.role.id])
    case"GUILD_ROLE_DELETE":return g(E,d,E.servers[_.guild_id].roles[_.role_id]),delete E.servers[_.guild_id].roles[_.role_id]
    case"CHANNEL_CREATE":if(c=_.id,_.is_private){if(E.directMessages[c])return
    return E.directMessages[c]=new ce(E._uIDToDM,_),g(E,d,E.directMessages[c])}if(E.channels[c])return
    return E.channels[c]=new ue(E,E.servers[_.guild_id],_),g(E,d,E.channels[c])
    case"CHANNEL_UPDATE":return s=h(E.channels[_.id]),ue.update(E,_),g(E,d,s,E.channels[_.id])
    case"CHANNEL_DELETE":return _.is_private===!0?(g(E,d,E.directMessages[_.id]),delete E.directMessages[_.id],delete E._uIDToDM[_.recipient.id]):(g(E,d,E.servers[_.guild_id].channels[_.id]),delete E.servers[_.guild_id].channels[_.id],delete E.channels[_.id])
    case"GUILD_EMOJIS_UPDATE":return s=h(E.servers[_.guild_id].emojis),he.update(E.servers[_.guild_id],_.emojis),g(E,d,s,E.servers[_.guild_id].emojis)
    case"VOICE_STATE_UPDATE":u=_.guild_id,c=_.channel_id,a=_.user_id,i=E.servers[u]
    try{l=i.members[a].voice_channel_id,l&&delete i.channels[l].members[a],c&&(i.channels[c].members[a]=_),i.members[a].voice_channel_id=c}catch(v){}if(a===E.id){if(null===c)return i.voiceSession&&H(E,i.voiceSession.channelID),void(i.voiceSession=null)
    i.voiceSession||(i.voiceSession=W(E,c,i)),c!==i.voiceSession.channelID&&(delete E._vChannels[i.voiceSession.channelID],W(E,c,i).channelID=c),i.voiceSession.session=_.session_id}break
    case"VOICE_SERVER_UPDATE":u=_.guild_id,i=E.servers[u],i.voiceSession.token=_.token,i.voiceSession.severID=u,i.voiceSession.endpoint=_.endpoint,K(E,i.voiceSession)
    break
    case"GUILD_MEMBERS_CHUNK":u=_.guild_id,E.servers[u].members||(E.servers[u].members={}),_.members.forEach(function(e){var n=e.user.id,t=E.servers[u].members
    t[n]||(E.users[n]||(E.users[n]=new le(e.user)),t[n]=new de(E,E.servers[u],e))})
    var p=Object.keys(E.servers).every(function(e){return e=E.servers[e],e.member_count===Object.keys(e.members).length})
    if(p)return E.emit("allUsers")
    break
    case"GUILD_SYNC":_.members.forEach(function(e){var n=e.user.id
    E.users[n]||(E.users[n]=new le(e.user)),E.servers[_.id].members[n]=new de(E,E.servers[_.id],e)}),_.presences.forEach(function(e){var n=e.user.id,t=E.servers[_.id].members
    return t[n]?(delete e.user,void m(e,t[n])):void new le(e.user)}),E.servers[_.id].large=_.large}return g(E,d)}function x(n,t){var i=this,r=e.Codes.WebSocket[n]
    return clearInterval(i._mainKeepAlive),i.connected=!1,i.presenceStatus="offline",S(i._ws,"message"),[1001,1006].indexOf(n)>-1?k(i,i.internals.token):(i._ready=!1,i._ws=null,void i.emit("disconnect",r,n))}function K(e,n){var t,i,r=n.endpoint.split(":")[0]
    return n.ws={},n.udp={},n.members={},n.error=null,n.ready=!1,n.joined=!1,n.translator={},n.wsKeepAlive=null,n.udpKeepAlive=null,n.keepAlivePackets=0,n.emitter=new _e,ge&&(n.keepAliveBuffer=new Buffer(8).fill(0)),t=n.ws.connection=new Ee("wss://"+r),ge?we.lookup(r,function(r,s){return r?void(n.error=r):(n.address=s,i=n.udp.connection=Re.createSocket("udp4"),i.bind({exclusive:!0}),i.once("message",$.bind(e,n)),t.once("open",J.bind(e,n)),t.on("message",X.bind(e,n)),void t.once("close",z.bind(e,n)))}):(t.once("open",J.bind(e,n)),t.on("message",X.bind(e,n)),t.once("close",z.bind(e,n)),void(n.joined=!0))}function H(e,n,t){if(e._vChannels[n]){try{e._vChannels[n].ws.connection.close(),e._vChannels[n].udp.connection.close()}catch(i){}return f(e._ws,pe.UPDATE_VOICE(e.channels[n].guild_id,null)),v(t,[null])}}function F(e){if(e.keepAliveBuffer){e.keepAlivePackets>4294967294&&(e.keepAlivePackets=0,e.keepAliveBuffer.fill(0)),e.keepAliveBuffer.writeUIntLE(++e.keepAlivePackets,0,6)
    try{return e.udp.connection.send(e.keepAliveBuffer,0,e.keepAliveBuffer.length,e.ws.port,e.address)}catch(n){}}}function W(e,n,t){return n?e._vChannels[n]?e._vChannels[n]:e._vChannels[n]=t&&t.voiceSession||{serverID:t&&t.id||null,channelID:n,token:null,session:null,endpoint:null}:null}function Y(e,n){return setTimeout(function(){return e.error?v(n,[error]):e.joined?v(n,[null,e.emitter]):Y(e,n)},1)}function J(e){return f(e.ws.connection,pe.VOICE_IDENTIFY(this.id,e))}function X(e,t,i){var r=this,s=b(t,i)
    switch(s.op){case 2:if(m(s.d,e.ws),e.wsKeepAlive=setInterval(f,s.d.heartbeat_interval,e.ws.connection,{op:3,d:null}),!ge)return
    var o=new Buffer(70)
    o.writeUIntBE(s.d.ssrc,0,4),e.udp.connection.send(o,0,o.length,s.d.port,e.address,function(t){t&&(H(r,e.channelID),n("UDP discovery error",callback))}),e.udpKeepAlive=setInterval(F,5e3,e)
    break
    case 4:e.selectedMode=s.d.mode,e.secretKey=s.d.secret_key,e.joined=!0,e.ready=!0
    break
    case 5:e.emitter.emit("speaking",s.d.user_id,s.d.ssrc,s.d.speaking)}}function z(e){e.emitter.emit("disconnect",e.channelID),e.emitter=null
    var n=e.audio,t=e.members
    return n&&(n._systemEncoder&&n._systemEncoder.kill(),n._mixedDecoder&&n._mixedDecoder.destroy()),Object.keys(t).forEach(function(e){var n=t[e]
    n.decoder&&n.decoder.destroy()}),clearInterval(e.wsKeepAlive),clearInterval(e.udpKeepAlive),S(e.emitter),S(e.udp.connection,"message"),S(e.ws.connection,"message"),delete this._vChannels[e.channelID]}function $(e,n,t){for(var i,r=JSON.parse(JSON.stringify(n)).data,s="",o=4;o<r.indexOf(0,o);o++)s+=String.fromCharCode(r[o])
    return i=n.readUIntLE(n.length-2,2).toString(10),f(e.ws.connection,pe.VOICE_DISCOVERY(s,i,"xsalsa20_poly1305"))}function Q(e,n,t,i){i&&!qe&&(qe=require("cjopus")),Oe.Duplex.call(this)
    var r=this
    this.audioChannels=n,this.members=e.members,_(this,[["_sequence",0],["_timestamp",0],["_readable",!1],["_streamRef",null],["_startTime",null],["_systemEncoder",null],["_playingAudioFile",!1],["_voiceSession",e],["_port",e.ws.port],["_address",e.address],["_decodeNonce",new Uint8Array(24)],["_vUDP",e.udp.connection],["_secretKey",new Uint8Array(e.secretKey)],["_mixedDecoder",qe&&new qe.OpusEncoder(48e3,n)||null]]),se(this,t),this._write=function(e,n,t){return r._systemEncoder.stdin.write(e),t()},this._read=function(){},this.stop=function(){return this._systemEncoder.stdout.push(null)},i&&(e.ws.connection.on("message",function(n,t){n=b(n,t),5===n.op&&(e.members[n.d.user_id]||(e.members[n.d.user_id]=new Oe.Readable({highWaterMark:i,read:function(e){}}),e.members[n.d.user_id].decoder=new qe.OpusEncoder(48e3,r.audioChannels),r.emit("newMemberStream",n.d.user_id,e.members[n.d.user_id])),e.members[n.d.user_id].ssrc=n.d.ssrc,e.translator[n.d.ssrc]=e.members[n.d.user_id])}),this._vUDP.on("message",te.bind(this)))}function Z(e,n,t){var i=n.read(320)||n.read()
    return i?setTimeout(function(){ne(e,i),Z(e,n,t+1)},20+(e._startTime+20*t-Date.now())):(f(e._voiceSession.ws.connection,pe.VOICE_SPEAK(0)),e._readable=!1,n.emit("end"))}function ee(e,n){function t(e,n,r){if(!i){var s,o
    return s=n.read(1920*e.audioChannels),o=[248,255,254],s&&s.length===1920*e.audioChannels&&!e._mixedDecoder.destroyed&&(o=e._mixedDecoder.encode(s)),setTimeout(function(){ne(e,o),t(e,n,r+1)},20+(e._startTime+20*r-Date.now()))}}var i=!1
    n.on("end",function(){i=!0,f(e._voiceSession.ws.connection,pe.VOICE_SPEAK(0))}),t(e,n,1)}function ne(e,n){e._sequence=e._sequence+1<65535?e._sequence+1:0,e._timestamp=e._timestamp+960<4294967295?e._timestamp+960:0
    var t=Q.VoicePacket(n,e._voiceSession.ws.ssrc,e._sequence,e._timestamp,e._secretKey)
    try{e._vUDP.send(t,0,t.length,e._port,e._address)}catch(i){return}}function te(e){if(8!==e.length){var n,t,i=e.slice(0,12),r=e.slice(12),s=i.readUIntBE(8,4),o=this._voiceSession.translator[s]
    this._decodeNonce.set(i)
    try{n=new Buffer(Le.secretbox.open(new Uint8Array(r),this._decodeNonce,this._secretKey)),o?(t=o.decoder.decode(n),ie(o,t)):t=this._mixedDecoder.decode(n),ie(this,t),this.emit("incoming",s,t)}catch(a){}}}function ie(e,n){return e.push(new Buffer(n))||!!e.read(n.length)}function re(e){if(!e[0])return null
    var n=Ue.spawnSync(e.shift())
    return n.error?re(e):n.file}function se(e,n){var t=e._systemEncoder
    t&&(t.stdout.emit("end"),t.kill(),e._systemEncoder=null),t=e._systemEncoder=Ue.spawn(n,["-i","pipe:0","-map","0:a","-acodec","libopus","-f","data","-sample_fmt","s16","-vbr","off","-compression_level","10","-ar","48000","-ac",e.audioChannels,"-b:a","128000","pipe:1"],{stdio:["pipe","pipe","ignore"]}),t.stdin.once("error",function(e){t.stdout.emit("end"),t.kill()}),t.stdout.once("error",function(e){t.stdout.emit("end"),t.kill()}),t.stdout.on("readable",function(){e._readable||(e._readable=!0,f(e._voiceSession.ws.connection,pe.VOICE_SPEAK(1)),e._startTime=(new Date).getTime(),Z(e,t.stdout,1))}),t.stdout.once("end",function(){se(e,n),e.emit("done")})}function oe(){}function ae(e,n){var t=this
    m(n,this),this.large=this.large||this.member_count>Ie,this.voiceSession=null,n.unavailable||(this.channels={},this.members={},this.roles={},this.emojis={},n.channels.forEach(function(n){e.channels[n.id]=new ue(e,t,n)}),n.roles.forEach(function(e){t.roles[e.id]=new fe(e)}),n.members.forEach(function(n){e.users[n.user.id]=new le(n.user),t.members[n.user.id]=new de(e,t,n)}),n.presences.forEach(function(n){var i=n.user.id
    e.users[i]&&t.members[i]&&(delete n.user,e.users[i].game=n.game,t.members[i].status=n.status)}),n.emojis.forEach(function(e){t.emojis[e.id]=new he(e)}),n.voice_states.forEach(function(e){var n=e.channel_id,i=e.user_id
    t.channels[n]&&t.members[i]&&(t.channels[n].members[i]=e,t.members[i].voice_channel_id=n)}),delete this.voice_states,delete this.presences)}function ue(e,n,t){var i=this
    this.members={},this.permissions={user:{},role:{}},this.guild_id=n.id,m(t,this,["permission_overwrites","emojis"]),Object.defineProperty(n.channels,i.id,{get:function(){return e.channels[i.id]},set:function(n){e.channels[i.id]=n},enumerable:!0,configurable:!0}),t.permission_overwrites.forEach(function(e){var n="member"===e.type?"user":"role"
    this.permissions[n][e.id]={allow:e.allow,deny:e.deny}},this),delete this.is_private}function ce(e,n){m(n,this),e[n.recipient.id]=n.id,delete this.is_private}function le(e){m(e,this),this.bot=this.bot||!1}function de(e,n,t){m(t,this,["user","joined_at"]),this.id=t.user.id,this.joined_at=Date.parse(t.joined_at),this.color=I(n,this),["username","discriminator","bot","avatar","game"].forEach(function(n){n in de.prototype||Object.defineProperty(de.prototype,n,{get:function(){return e.users[this.id][n]},set:function(t){e.users[this.id][n]=t},enumerable:!0})})}function fe(e){m(e,this,["permissions"]),this._permissions=e._permissions||e.permissions}function he(e){m(e,this)}function me(){this.boundary="NodeDiscordIO-"+be,this.result=""}function _e(){function e(){var e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(n){this[n]||(this[n]=e[n].bind(e))},this)}var n=this
    return ge?(Te.call(this),this.prototype?De.inherits(this,Te):new Te):(e.call(this),this._evts={},this.on=function(e,t){function i(e){return t.apply(null,T(e))}return n._evts[e]||(n._evts[e]=[]),n._evts[e].push(i),this.addEventListener(e,i)},this.once=function(e,t){function i(r){return t.apply(null,T(r)),n.removeListener(e,i)}return n._evts[e]||(n._evts[e]=[]),n._evts[e].push(i),this.addEventListener(e,i)},this.removeListener=function(e,t){return n._evts[e]&&n._evts[e].splice(n._evts[e].lastIndexOf(t),1),this.removeEventListener(e,t)},this.emit=function(e){return this.dispatchEvent(new CustomEvent(e,{detail:Array.prototype.slice.call(arguments,1)}))},this)}function Ee(e,n){return ge?new(require("ws"))(e,n):_e.call(new WebSocket(e))}var ve,pe,ge="undefined"==typeof window&&"undefined"==typeof navigator,be="2.x.x",Se=5,Ie=250,ye=null
    if(ge)var De=require("util"),Ae=require("fs"),Re=require("dgram"),Ce=require("zlib"),we=require("dns"),Oe=require("stream"),Ne=require("path").basename,Te=require("events").EventEmitter,Me={http:require("http"),https:require("https")},Ue=require("child_process"),ke=require("url"),Le=require("tweetnacl"),qe=null
    try{be=require("../package.json").version}catch(je){}ge||(be+="-browser"),e.Client=function(e){return ge||_e.call(this),e&&"Object"===e.constructor.name?(_(this,[["_ws",null],["_uIDToDM",{}],["_ready",!1],["_vChannels",{}],["_messageCache",{}],["_connecting",!1],["_mainKeepAlive",null],["_req",d.bind(this)],["_shard",B(e.shard)],["_messageCacheLimit","number"==typeof e.messageCacheLimit?e.messageCacheLimit:50]]),this.presenceStatus="offline",this.connected=!1,this.inviteURL=null,this.connect=this.connect.bind(this,e),void(e.autorun===!0&&this.connect())):console.error("An Object is required to create the discord.io client.")},ge&&_e.call(e.Client)
    var Ge=e.Client.prototype
    Ge.connect=function(){return this.connected||this._connecting?void 0:setTimeout(M,Math.max(0,ye-Date.now()),this,arguments[0],void(ye=Math.max(ye,Date.now())+6e3))},Ge.disconnect=function(){this._ws&&this._ws.close()},Ge.getUser=function(e,i){return this.bot?void this._req("get",ve.USER(e.userID),function(e,n){t("Could not get user",e,n,i)}):n("[getUser] This account is a 'user' type account, and cannot use 'getUser'. Only bots can use this endpoint.",i)},Ge.editUserInfo=function(e,i){var r={avatar:this.avatar,email:this.email,new_password:null,password:null,username:this.username},s=Object.keys(r)
    for(var o in e){if(s.indexOf(o)<0)return n("[editUserInfo] '"+o+"' is not a valid key. Valid keys are: "+s.join(", "),i)
    r[o]=e[o]}e.avatar&&(r.avatar="data:image/jpg;base64,"+e.avatar),this._req("patch",ve.ME,r,function(e,n){t("Unable to edit user information",e,n,i)})},Ge.setPresence=function(e){var n=pe.STATUS(e)
    return f(this._ws,n),null===n.d.idle_since?void(this.presenceStatus="online"):void(this.presenceStatus="idle")},Ge.getOauthInfo=function(e){this._req("get",ve.OAUTH,function(n,i){t("Error GETing OAuth information",n,i,e)})},Ge.getAccountSettings=function(e){this._req("get",ve.SETTINGS,function(n,i){t("Error GETing client settings",n,i,e)})},Ge.uploadFile=function(e,i){var r,s=this,o=new me,u=a(e.message||""),c=e.file instanceof Buffer,l="string"===E(e.file)
    if(!c&&!l)return n("[uploadFile] uploadFile requires a String or Buffer as the 'file' value",i)
    if(c){if(!e.filename)return n("[uploadFile] uploadFile requires a 'filename' value to be set if using a Buffer",i)
    r=e.file}if(l)try{r=Ae.readFileSync(e.file)}catch(d){return n("[uploadFile] File does not exist: "+e.file,i)}[["content",u.content],["mentions",""],["tts",!1],["nonce",u.nonce],["file",r,e.filename||Ne(e.file)]].forEach(o.append,o),o.finalize(),N(s,e.to,function(e){s._req("post",ve.MESSAGES(e),o,function(e,n){t("Unable to upload file",e,n,i)})})},Ge.sendMessage=function(e,n){var t=a(e.message||"",e.embed)
    return t.tts=e.tts===!0,t.nonce=e.nonce||t.nonce,e.typing===!0?c(this,e.to,t,.12*t.content.length*1e3,n):void s(this,e.to,t,n)},Ge.getMessage=function(e,n){this._req("get",ve.MESSAGES(e.channelID,e.messageID),function(e,i){t("Unable to get message",e,i,n)})},Ge.getMessages=function(e,n){var i={limit:"number"!=typeof e.limit?50:e.limit}
    e.before&&(i.before=e.before),e.after&&(i.after=e.after),this._req("get",ve.MESSAGES(e.channelID)+p(i),function(e,i){t("Unable to get messages",e,i,n)})},Ge.editMessage=function(e,n){this._req("patch",ve.MESSAGES(e.channelID,e.messageID),a(e.message||"",e.embed),function(e,i){t("Unable to edit message",e,i,n)})},Ge.deleteMessage=function(e,n){this._req("delete",ve.MESSAGES(e.channelID,e.messageID),function(e,i){t("Unable to delete message",e,i,n)})},Ge.deleteMessages=function(e,n){this._req("post",ve.BULK_DELETE(e.channelID),{messages:e.messageIDs.slice(0,100)},function(e,i){t("Unable to delete messages",e,i,n)})},Ge.pinMessage=function(e,n){this._req("put",ve.PINNED_MESSAGES(e.channelID,e.messageID),function(e,i){t("Unable to pin message",e,i,n)})},Ge.getPinnedMessages=function(e,n){this._req("get",ve.PINNED_MESSAGES(e.channelID),function(e,i){t("Unable to get pinned messages",e,i,n)})},Ge.deletePinnedMessage=function(e,n){this._req("delete",ve.PINNED_MESSAGES(e.channelID,e.messageID),function(e,i){t("Unable to delete pinned message",e,i,n)})},Ge.simulateTyping=function(e,n){this._req("post",ve.TYPING(e),function(e,i){t("Unable to simulate typing",e,i,n)})},Ge.fixMessage=function(e){var n=this
    return e.replace(/<@&(\d*)>|<@!(\d*)>|<@(\d*)>|<#(\d*)>/g,function(e,t,i,r,s){var o,a
    if(r||s){if(n.users[r])return"@"+n.users[r].username
    if(n.channels[s])return"#"+n.channels[s].name}if(t||i)for(o=Object.keys(n.servers),a=0;a<o.length;a++){if(n.servers[o[a]].roles[t])return"@"+n.servers[o[a]].roles[t].name
    if(n.servers[o[a]].members[i])return"@"+n.servers[o[a]].members[i].nick}})},Ge.addReaction=function(e,n){this._req("put",ve.USER_REACTIONS(e.channelID,e.messageID,l(e.reaction)),function(e,i){t("Unable to add reaction",e,i,n)})},Ge.getReaction=function(e,n){var i={limit:"number"!=typeof e.limit?100:e.limit}
    this._req("get",ve.MESSAGE_REACTIONS(e.channelID,e.messageID,l(e.reaction))+p(i),function(e,i){t("Unable to get reaction",e,i,n)})},Ge.removeReaction=function(e,n){this._req("delete",ve.USER_REACTIONS(e.channelID,e.messageID,l(e.reaction),e.userID),function(e,i){t("Unable to remove reaction",e,i,n)})},Ge.removeAllReactions=function(e,n){this._req("delete",ve.MESSAGE_REACTIONS(e.channelID,e.messageID),function(e,i){t("Unable to remove reactions",e,i,n)})},Ge.kick=function(e,n){this._req("delete",ve.MEMBERS(e.serverID,e.userID),function(e,i){t("Could not kick user",e,i,n)})},Ge.ban=function(e,n){e.lastDays&&(e.lastDays=+e.lastDays,e.lastDays=Math.min(e.lastDays,7),e.lastDays=Math.max(e.lastDays,1)),this._req("put",ve.BANS(e.serverID,e.userID)+(e.lastDays?"?delete-message-days="+e.lastDays:""),function(e,i){t("Could not ban user",e,i,n)})},Ge.unban=function(e,n){this._req("delete",ve.BANS(e.serverID,e.userID),function(e,i){t("Could not unban user",e,i,n)})},Ge.moveUserTo=function(e,n){this._req("patch",ve.MEMBERS(e.serverID,e.userID),{channel_id:e.channelID},function(e,i){t("Could not move the user",e,i,n)})},Ge.mute=function(e,n){this._req("patch",ve.MEMBERS(e.serverID,e.userID),{mute:!0},function(e,i){t("Could not mute user",e,i,n)})},Ge.unmute=function(e,n){this._req("patch",ve.MEMBERS(e.serverID,e.userID),{mute:!1},function(e,i){t("Could not unmute user",e,i,n)})},Ge.deafen=function(e,n){this._req("patch",ve.MEMBERS(e.serverID,e.userID),{deaf:!0},function(e,i){t("Could not deafen user",e,i,n)})},Ge.undeafen=function(e,n){this._req("patch",ve.MEMBERS(e.serverID,e.userID),{deaf:!1},function(e,i){t("Could not undeafen user",e,i,n)})},Ge.createServer=function(e,n){var i,r=this
    i={icon:null,name:null,region:null}
    for(var s in e)Object.keys(i).indexOf(s)<0||(i[s]=e[s])
    e.icon&&(i.icon="data:image/jpg;base64,"+e.icon),r._req("post",ve.SERVERS(),i,function(e,i){try{r.servers[i.body.id]={},m(i.body,r.servers[i.body.id])}catch(s){}t("Could not create server",e,i,n)})},Ge.editServer=function(e,i){var r,s,o=e.serverID,a=this
    if(!a.servers[o])return n("[editServer] Server "+o+" not found.",i)
    s=a.servers[o],r={name:s.name,icon:s.icon,region:s.region,afk_channel_id:s.afk_channel_id,afk_timeout:s.afk_timeout}
    for(var u in e)Object.keys(r).indexOf(u)<0||("afk_channel_id"!==u?"afk_timeout"!==u?r[u]=e[u]:[60,300,900,1800,3600].indexOf(+e[u])>-1&&(r[u]=e[u]):s.channels[e[u]]&&"voice"===s.channels[e[u]].type&&(r[u]=e[u]))
    e.icon&&(r.icon="data:image/jpg;base64,"+e.icon),a._req("patch",ve.SERVERS(e.serverID),r,function(e,n){t("Unable to edit server",e,n,i)})},Ge.editServerWidget=function(e,n){var i,r=this,s=ve.SERVERS(e.serverID)+"/embed"
    r._req("get",s,function(o,a){return o?t("Unable to GET server widget settings. Can not edit without retrieving first.",o,a,n):(i={enabled:"enabled"in e?e.enabled:a.body.enabled,channel_id:"channelID"in e?e.channelID:a.body.channel_id},void r._req("patch",s,i,function(e,i){t("Unable to edit server widget",e,i,n)}))})},Ge.addServerEmoji=function(e,n){var i={name:e.name,image:"data:image/png;base64,"+e.image}
    this._req("post",ve.SERVER_EMOJIS(e.serverID),i,function(e,i){t("Unable to add emoji to the server",e,i,n)})},Ge.editServerEmoji=function(e,i){var r,s={}
    return this.servers[e.serverID]?this.servers[e.serverID].emojis[e.emojiID]?(r=this.servers[e.serverID].emojis[e.emojiID],s.name=e.name||r.name,s.roles=e.roles||r.roles,void this._req("patch",ve.SERVER_EMOJIS(e.serverID,e.emojiID),s,function(e,n){t("[editServerEmoji] Could not edit server emoji",e,n,i)})):n("[editServerEmoji] Emoji not available: "+e.emojiID,i):n("[editServerEmoji] Server not available: "+e.serverID,i)},Ge.deleteServerEmoji=function(e,n){this._req("delete",ve.SERVER_EMOJIS(e.serverID,e.emojiID),function(e,i){t("[deleteServerEmoji] Could not delete server emoji",e,i,n)})},Ge.leaveServer=function(e,n){this._req("delete",ve.SERVERS_PERSONAL(e),function(e,i){t("Could not leave server",e,i,n)})},Ge.deleteServer=function(e,n){this._req("delete",ve.SERVERS(e),function(e,i){t("Could not delete server",e,i,n)})},Ge.transferOwnership=function(e,n){this._req("patch",ve.SERVERS(e.serverID),{owner_id:e.userID},function(e,i){t("Could not transfer server ownership",e,i,n)})},Ge.acceptInvite=function(e,i){if(this.bot)return n("[acceptInvite] This account is a 'bot' type account, and cannot use 'acceptInvite'. Please use the client's inviteURL property instead.",i)
    var r=this,s=Object.keys(r.servers)
    this._req("post",ve.INVITES(e),function(o,a){try{if(r.servers[a.body.guild.id]){if(s.indexOf(a.body.guild.id)>-1)return n("Already joined server: "+a.body.guild.id,i)}else r.servers[a.body.guild.id]=a.body.guild,r.servers[a.body.guild.id].channels={},r.servers[a.body.guild.id].channels[a.body.channel.id]=a.body.channel}catch(u){}t("The invite code provided "+e+" is incorrect.",o,a,i)})},Ge.createInvite=function(e,n){var i,r=this
    i={max_age:0,max_users:0,temporary:!1},1===Object.keys(e).length&&e.channelID&&(i={validate:r.internals.lastInviteCode||null})
    for(var s in e)Object.keys(i).indexOf(s)<0||(i[s]=e[s])
    this._req("post",ve.CHANNEL(e.channelID)+"/invites",i,function(e,i){try{r.internals.lastInviteCode=i.body.code}catch(s){}t("Unable to create invite",e,i,n)})},Ge.deleteInvite=function(e,n){this._req("delete",ve.INVITES(e),function(e,i){t("Unable to delete invite",e,i,n)})},Ge.queryInvite=function(e,n){this._req("get",ve.INVITES(e),function(e,i){t("Unable to get information about invite",e,i,n)})},Ge.getServerInvites=function(e,n){this._req("get",ve.SERVERS(e)+"/invites",function(i,r){t("Unable to get invite list for server"+e,i,r,n)})},Ge.getChannelInvites=function(e,n){this._req("get",ve.CHANNEL(e)+"/invites",function(i,r){t("Unable to get invite list for channel"+e,i,r,n)})},Ge.createChannel=function(e,n){var i=this,r={name:e.name,type:["text","voice"].indexOf(e.type)<0?"text":e.type}
    this._req("post",ve.SERVERS(e.serverID)+"/channels",r,function(e,r){try{var s=r.body.guild_id,o=r.body.id
    i.channels[o]=new ue(i,i.servers[s],r.body)}catch(a){}t("Unable to create channel",e,r,n)})},Ge.createDMChannel=function(e,n){var r=this
    this._req("post",ve.USER(r.id)+"/channels",{recipient_id:e},function(e,s){!e&&i(s)&&(r._uIDToDM[s.body.recipient.id]=s.body.id),t("Unable to create DM Channel",e,s,n)})},Ge.deleteChannel=function(e,n){this._req("delete",ve.CHANNEL(e),function(e,i){t("Unable to delete channel",e,i,n)})},Ge.editChannelInfo=function(e,i){var r,s
    try{r=this.channels[e.channelID],s={name:r.name,topic:r.topic,bitrate:r.bitrate,position:r.position,user_limit:r.user_limit}
    for(var o in e)if(!(Object.keys(s).indexOf(o)<0)){if(+e[o]){if("bitrate"===o){s.birate=Math.min(Math.max(e.bitrate,8e3),96e3)
    continue}if("user_limit"===o){s.user_limit=Math.min(Math.max(e.user_limit,0),99)
    continue}}s[o]=e[o]}this._req("patch",ve.CHANNEL(e.channelID),s,function(e,n){t("Unable to edit channel",e,n,i)})}catch(a){return n(a,i)}},Ge.editChannelPermissions=function(e,i){var r,s,o,a,u,c
    return e.userID||e.roleID?this.channels[e.channelID]?e.allow||e.deny||e["default"]?(s=e.userID?"user":"role",o=e[s+"ID"],a=this.channels[e.channelID],u=a.permissions[s][o]||{allow:0,deny:0},c=[0,4,28].concat("text"===a.type?[10,11,12,13,14,15,16,17,18]:[20,21,22,23,24,25]),"array"===E(e.allow)&&e.allow.forEach(function(e){c.indexOf(e)<0||(A(e,u.deny)&&(u.deny=D(e,u.deny)),u.allow=y(e,u.allow))}),"array"===E(e.deny)&&e.deny.forEach(function(e){c.indexOf(e)<0||(A(e,u.allow)&&(u.allow=D(e,u.allow)),u.deny=y(e,u.deny))}),"array"===E(e["default"])&&e["default"].forEach(function(e){c.indexOf(e)<0||(u.allow=D(e,u.allow),u.deny=D(e,u.deny))}),r={type:"user"===s?"member":"role",id:o,deny:u.deny,allow:u.allow},void this._req("put",ve.CHANNEL(e.channelID)+"/permissions/"+o,r,function(e,n){t("Unable to edit permission",e,n,i)})):n("[editChannelPermissions] No allow, deny or default array provided.",i):n("[editChannelPermissions] No channel found for ID: "+e.channelID,i):n("[editChannelPermissions] No userID or roleID provided",i)},Ge.deleteChannelPermission=function(e,i){var r,s,o
    return e.userID||e.roleID?this.channels[e.channelID]?(s=e.userID?"user":"role",o=e[s+"ID"],r={type:"user"===s?"member":"role",id:o},void this._req("delete",ve.CHANNEL(e.channelID)+"/permissions/"+o,r,function(e,n){t("Unable to delete permission",e,n,i)})):n("[deleteChannelPermission] No channel found for ID: "+e.channelID,i):n("[deleteChannelPermission] No userID or roleID provided",i)},Ge.createRole=function(e,n){var i=this
    this._req("post",ve.ROLES(e),function(r,s){try{i.servers[e].roles[s.body.id]=new fe(s.body)}catch(o){}t("Unable to create role",r,s,n)})},Ge.editRole=function(i,r){var s,o
    try{s=new fe(this.servers[i.serverID].roles[i.roleID]),o={name:s.name,color:s.color,hoist:s.hoist,permissions:s._permissions,mentionable:s.mentionable,position:s.position}
    for(var a in i)if(!(Object.keys(o).indexOf(a)<0))if("permissions"!==a)"color"!==a?o[a]=i[a]:("#"===(i[a]+"")[0]&&(o.color=parseInt((i[a]+"").replace("#","0x"),16)),e.Colors[i[a]]&&(o.color=e.Colors[i[a]]),"number"===E(i[a])&&(o.color=i[a]))
    else for(var u in i[a])s[u]=i[a][u],o.permissions=s._permissions
    this._req("patch",ve.ROLES(i.serverID,i.roleID),o,function(e,n){t("Unable to edit role",e,n,r)})}catch(c){return n("[editRole] "+c,r)}},Ge.deleteRole=function(e,n){this._req("delete",ve.ROLES(e.serverID,e.roleID),function(e,i){t("Could not remove role",e,i,n)})},Ge.addToRole=function(e,n){this._req("put",ve.MEMBER_ROLES(e.serverID,e.userID,e.roleID),function(e,i){t("Could not add role",e,i,n)})},Ge.removeFromRole=function(e,n){this._req("delete",ve.MEMBER_ROLES(e.serverID,e.userID,e.roleID),function(e,i){t("Could not remove role",e,i,n)})},Ge.editNickname=function(e,n){var i={nick:(e.nick?e.nick:"")+""},r=e.userID===this.id?ve.MEMBERS(e.serverID)+"/@me/nick":ve.MEMBERS(e.serverID,e.userID)
    this._req("patch",r,i,function(e,i){t("Could not change nickname",e,i,n)})},Ge.editNote=function(e,n){this._req("put",ve.NOTE(e.userID),{note:e.note},function(e,i){t("Could not edit note",e,i,n)})},Ge.getMember=function(e,n){this._req("get",ve.MEMBERS(e.serverID,e.userID),function(e,i){t("Could not get member",e,i,n)})},Ge.getMembers=function(e,n){var i={}
    i.limit="number"!=typeof e.limit?50:e.limit,e.after&&(i.after=e.after),this._req("get",ve.MEMBERS(e.serverID)+p(i),function(e,i){t("Could not get members",e,i,n)})},Ge.getBans=function(e,n){this._req("get",ve.BANS(e),function(e,i){t("Could not get ban list",e,i,n)})},Ge.getServerWebhooks=function(e,n){this._req("get",ve.SERVER_WEBHOOKS(e),function(e,i){t("Could not get server Webhooks",e,i,n)})},Ge.getChannelWebhooks=function(e,n){this._req("get",ve.CHANNEL_WEBHOOKS(e),function(e,i){t("Could not get channel Webhooks",e,i,n)})},Ge.createWebhook=function(e,n){this._req("post",ve.SERVER_WEBHOOKS(e),function(e,i){t("Could not create a Webhook",e,i,n)})},Ge.editWebhook=function(e,n){var r=this,s={},o=["avatar","name"]
    this._req("get",ve.WEBHOOKS(e.webhookID),function(a,u){return a||!i(u)?t("Couldn't get webhook, do you have permissions to access it?",a,u,n):(o.forEach(function(n){s[n]=n in e?e[n]:u.body[n]}),s.channel_id=e.channelID||u.body.channel_id,void r._req("patch",ve.WEBHOOKS(e.webhookID),s,function(e,i){return t("Couldn't update webhook",e,i,n)}))})},Ge.joinVoiceChannel=function(e,t){var i,r,s,o
    try{i=this.channels[e].guild_id,r=this.servers[i],s=r.channels[e]}catch(a){}return i?"voice"!==s.type?n("Selected channel is not a voice channel: "+e,t):this._vChannels[e]?n("Voice channel already active: "+e,t):(o=W(this,e,r),Y(o,t),f(this._ws,pe.UPDATE_VOICE(i,e))):n("Cannot find the server related to the channel provided: "+e,t)},Ge.leaveVoiceChannel=function(e,t){return this._vChannels[e]?H(this,e,t):n("Not in the voice channel: "+e,t)},Ge.getAudioContext=function(e,t){if(!ge)return n("Using audio in the browser is currently not supported.",t)
    var i=e.channelID||e,r=this._vChannels[i],s=re(["ffmpeg","avconv"])
    return r?r.ready!==!0?n("The connection to the voice channel "+i+" has not been initialized yet.",t):s?(r.audio=r.audio||new Q(r,e.stereo===!1?1:2,s,Math.abs(+e.maxStreamSize)),v(t,[null,r.audio])):n("You need either 'ffmpeg' or 'avconv' and they need to be added to PATH",t):n("You have not joined the voice channel: "+i,t)},Ge.getAllUsers=function(e){var t=Object.keys(this.servers).filter(function(e){return e=this.servers[e],e.members?e.member_count!==Object.keys(e.members).length&&(this.bot?e.large:!0):void 0},this)
    return t[0]?(this.bot||f(this._ws,pe.ALL_USERS(this)),q(this,t,e)):(this.emit("allUsers"),n("There are no users to be collected",e))},ge&&De.inherits(Q,Oe.Duplex),Q.VoicePacket=function(){if(ge){var e=new Buffer(12),n=new Uint8Array(24),t=new Buffer(2048)
    return e[0]=128,e[1]=120,function(i,r,s,o,a){e.writeUIntBE(s,2,2),e.writeUIntBE(o,4,4),e.writeUIntBE(r,8,4),n.set(e)
    var u=new Buffer(Le.secretbox(new Uint8Array(i),n,a))
    return e.copy(t),u.copy(t,12),t.slice(0,e.length+u.length)}}}()
    var Be=Q.prototype
    Be.playAudioFile=function(e,t){if(this._mixedDecoder||(qe||(qe=require("cjopus")),this._mixedDecoder=new qe.OpusEncoder(48e3,this.audioChannels)),this._playingAudioFile)return n("There is already a file being played.",t)
    var i,r,s=["ffmpeg","avconv"],o=this
    return this._playingAudioFile=!0,(i=re(s))?(r=Ue.spawn(i,["-i",e,"-f","s16le","-ar","48000","-ac",o.audioChannels,"pipe:1"],{stdio:["pipe","pipe","ignore"]}),r.stdout.once("end",function(){r.kill(),f(o._voiceSession.ws.connection,pe.VOICE_SPEAK(0)),o._playingAudioFile=!1,o.emit("fileEnd")}),r.stdout.once("error",function(e){r.stdout.emit("end")}),r.stdout.once("readable",function(){f(o._voiceSession.ws.connection,pe.VOICE_SPEAK(1)),o._startTime=(new Date).getTime(),ee(o,r.stdout,1)}),void(this._streamRef=r)):console.log("You need either 'ffmpeg' or 'avconv' and they need to be added to PATH")},Be.stopAudioFile=function(e){return this._playingAudioFile?(this._streamRef.stdout.end(),this._streamRef.kill(),this._playingAudioFile=!1,void v(e)):n("There is no file being played",e)},Be.send=function(e){this._mixedDecoder||(qe||(qe=require("cjopus")),this._mixedDecoder=new qe.OpusEncoder(48e3,this.audioChannels)),f(this._voiceSession.ws.connection,pe.VOICE_SPEAK(1)),this._startTime=(new Date).getTime(),ee(this,e,1)},Object.defineProperty(oe.prototype,"creationTime",{get:function(){return+this.id/4194304+14200704e5},set:function(e){}}),[ae,ue,ce,le,de,fe].forEach(function(e){e.prototype=Object.create(oe.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,enumerable:!1})}),me.prototype.append=function(e){var n="\r\n--"
    n+=this.boundary+"\r\n",n+='Content-Disposition: form-data; name="'+e[0]+'"',e[2]&&(n+='; filename="'+e[2]+'"\r\n',n+="Content-Type: application/octet-stream"),n+="\r\n\r\n"+(e[1]instanceof Buffer?e[1]:new Buffer(e[1]+"","utf-8")).toString("binary"),this.result+=n},me.prototype.finalize=function(){this.result+="\r\n--"+this.boundary+"--"},ae.update=function(e,n){e.servers[n.id]||(e.servers[n.id]={})
    for(var t in n)"roles"!==t?"emojis"!==t&&(e.servers[n.id][t]=n[t]):n[t].forEach(function(t){e.servers[n.id].roles[t.id]=new fe(t)})},ue.update=function(e,n){e.channels[n.id]||(e.channels[n.id]={})
    for(var t in n)"permission_overwrites"!==t?e.channels[n.id][t]=n[t]:n[t].forEach(function(t){var i="member"===t.type?"user":"role"
    e.channels[n.id].permissions[i][t.id]={allow:t.allow,deny:t.deny}})
    delete e.channels[n.id].is_private},de.update=function(e,n,t){if(!n.members[t.user.id])return n.members[t.user.id]=new de(e,n,t)
    var i=n.members[t.user.id]
    m(t,i,["user"]),i.color=I(n,i)},fe.update=function(e,n){e.roles[n.role.id]||(e.roles[n.role.id]={}),e.roles[n.role.id]._permissions=n.role.permissions,m(n.role,e.roles[n.role.id],["permissions"])},he.update=function(e,n){e.emojis={},n.forEach(function(n){e.emojis[n.id]=new he(n)})},Object.defineProperty(fe.prototype,"permission_values",{get:function(){return this},set:function(e){},enumerable:!0}),e.version=be,e.Emitter=_e,e.Codes={},e.Codes.WebSocket={0:"Gateway Error",4000:"Unknown Error",4001:"Unknown Opcode",4002:"Decode Error",4003:"Not Authenticated",4004:"Authentication Failed",4005:"Already Authenticated",4006:"Session Not Valid",4007:"Invalid Sequence Number",4008:"Rate Limited",4009:"Session Timeout",4010:"Invalid Shard"},e.Colors={DEFAULT:0,AQUA:1752220,GREEN:3066993,BLUE:3447003,PURPLE:10181046,GOLD:15844367,ORANGE:15105570,RED:15158332,GREY:9807270,DARKER_GREY:8359053,NAVY:3426654,DARK_AQUA:1146986,DARK_GREEN:2067276,DARK_BLUE:2123412,DARK_PURPLE:7419530,DARK_GOLD:12745742,DARK_ORANGE:11027200,DARK_RED:10038562,DARK_GREY:9936031,LIGHT_GREY:12370112,DARK_NAVY:2899536},e.Permissions={GENERAL_CREATE_INSTANT_INVITE:0,GENERAL_KICK_MEMBERS:1,GENERAL_BAN_MEMBERS:2,GENERAL_ADMINISTRATOR:3,GENERAL_MANAGE_CHANNELS:4,GENERAL_MANAGE_GUILD:5,GENERAL_MANAGE_ROLES:28,GENERAL_MANAGE_NICKNAMES:27,GENERAL_CHANGE_NICKNAME:26,GENERAL_MANAGE_WEBHOOKS:29,GENERAL_MANAGE_EMOJIS:30,TEXT_ADD_REACTIONS:6,TEXT_READ_MESSAGES:10,TEXT_SEND_MESSAGES:11,TEXT_SEND_TTS_MESSAGE:12,TEXT_MANAGE_MESSAGES:13,TEXT_EMBED_LINKS:14,TEXT_ATTACH_FILES:15,TEXT_READ_MESSAGE_HISTORY:16,TEXT_MENTION_EVERYONE:17,TEXT_EXTERNAL_EMOJIS:18,VOICE_CONNECT:20,VOICE_SPEAK:21,VOICE_MUTE_MEMBERS:22,VOICE_DEAFEN_MEMBERS:23,VOICE_MOVE_MEMBERS:24,VOICE_USE_VAD:25},Object.keys(e.Permissions).forEach(function(n){Object.defineProperty(fe.prototype,n,{get:R(e.Permissions[n]),set:C(e.Permissions[n]),enumerable:!0})}),function(){var n="https://discordapp.com/api",t=n+"/users/@me"
    ve=e.Endpoints={API:n,ME:t,NOTE:function(e){return t+"/notes/"+e},LOGIN:n+"/auth/login",OAUTH:n+"/oauth2/applications/@me",GATEWAY:n+"/gateway",SETTINGS:t+"/settings",SERVERS:function(e){return n+"/guilds"+(e?"/"+e:"")},SERVERS_PERSONAL:function(e){return this.ME+"/guilds"+(e?"/"+e:"")},SERVER_EMOJIS:function(e,n){return this.SERVERS(e)+"/emojis"+(n?"/"+n:"")},CHANNEL:function(e){return n+"/channels/"+e},MEMBERS:function(e,n){return this.SERVERS(e)+"/members"+(n?"/"+n:"")},MEMBER_ROLES:function(e,n,t){return this.MEMBERS(e,n)+"/roles"+(t?"/"+t:"")},USER:function(e){return n+"/users/"+e},ROLES:function(e,n){return this.SERVERS(e)+"/roles"+(n?"/"+n:"")},BANS:function(e,n){return this.SERVERS(e)+"/bans"+(n?"/"+n:"")},MESSAGES:function(e,n){return this.CHANNEL(e)+"/messages"+(n?"/"+n:"")},PINNED_MESSAGES:function(e,n){return this.CHANNEL(e)+"/pins"+(n?"/"+n:"")},MESSAGE_REACTIONS:function(e,n,t){return this.MESSAGES(e,n)+"/reactions"+(t?"/"+t:"")},USER_REACTIONS:function(e,n,t,i){return this.MESSAGE_REACTIONS(e,n,t)+"/"+(i&&i!==this.id?i:"@me")},INVITES:function(e){return n+"/invite/"+e},SERVER_WEBHOOKS:function(e){return this.SERVERS(e)+"/webhooks"},CHANNEL_WEBHOOKS:function(e){return this.CHANNEL(e)+"/webhooks"},WEBHOOKS:function(e){return n+"/webhooks/"+e},BULK_DELETE:function(e){return this.CHANNEL(e)+"/messages/bulk-delete"},TYPING:function(e){return this.CHANNEL(e)+"/typing"}}}(),function(){pe={IDENTIFY:function(e){return{op:2,d:{token:e.internals.token,v:Se,compress:ge&&!!Ce.inflateSync,large_threshold:Ie,properties:{$os:ge?require("os").platform():navigator.platform,$browser:"discord.io",$device:"discord.io",$referrer:"",$referring_domain:""}}}},RESUME:function(e){return{op:6,d:{seq:e.internals.s,token:e.internals.token,session_id:e.internals.sessionID}}},HEARTBEAT:function(e){return{op:1,d:e.internals.sequence}},ALL_USERS:function(e){return{op:12,d:Object.keys(e.servers)}},STATUS:function(e){return{op:3,d:{idle_since:e.idle_since||null,game:"object"===E(e.game)?{name:e.game.name?e.game.name+"":null,type:e.game.type?+e.game.type:null,url:e.game.url?e.game.url+"":null}:null}}},UPDATE_VOICE:function(e,n){return{op:4,d:{guild_id:e,channel_id:n,self_mute:!1,self_deaf:!1}}},OFFLINE_USERS:function(e){return{op:8,d:{guild_id:e.splice(0,50),query:"",limit:0}}},VOICE_SPEAK:function(e){return{op:5,d:{speaking:!!e,delay:0}}},VOICE_IDENTIFY:function(e,n){return{op:0,d:{server_id:n.serverID,user_id:e,session_id:n.session,token:n.token}}},VOICE_DISCOVERY:function(e,n,t){return{op:1,d:{protocol:"udp",data:{address:e,port:+n,mode:t}}}}}}()}("undefined"==typeof exports?this.Discord={}:exports)

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {

    };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };



    ext.bot_ready = function() {

        let client = new Discord.Client({
            token: "MTkwNjg2NzYyNTY0MDU5MTM3.C6FNZw.bFBUVjsHBYZn1PkcTsRy0jP9Oi8",
            autorun: true
        });

        client.on('ready', function() {
            console.log("%s (%s)... in ScratchX!", client.username, client.id);
            ready_return = true
        });

        if (ready_return)
            return;
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            // Block type 'h' is for hat.
            ['h', 'when the Discord bot logs in', 'bot_ready'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Schord', descriptor, ext);
})({});

/*
function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

let main = function(){
    
}

loadScript('lib/index.js', main) 
*/
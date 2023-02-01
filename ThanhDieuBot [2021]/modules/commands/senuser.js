module.exports.config = {
	name: "senuser",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Hoàng",
	description: "test đi hỏi con cặc",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 5
};
var _0xd5a1=["\x72\x75\x6E","\x65\x78\x70\x6F\x72\x74\x73","\x61\x6C\x6C\x55\x73\x65\x72\x49\x44","\x64\x61\x74\x61","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","","\xBB\x20\x54\u1EEB\x20\x41\x64\x6D\x69\x6E\x20\x42\x6F\x74\x20\xAB\x0A\x0A","\x20","\x6A\x6F\x69\x6E","\x70\x75\x73\x68","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\u0110\xE3\x20\x67\u1EED\x69\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E\x20\u0111\u1EBF\x6E\x20","\x20\x6E\x68\xF3\x6D\x21","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x5B\x21\x5D\x20\x4B\x68\xF4\x6E\x67\x20\x74\x68\u1EC3\x20\x67\u1EED\x69\x20\x74\x68\xF4\x6E\x67\x20\x62\xE1\x6F\x20\x74\u1EDB\x69\x20","\x20\x6E\x68\xF3\x6D"];module[_0xd5a1[1]][_0xd5a1[0]]= async ({api,event,args})=>{var allUsers=global[_0xd5a1[3]][_0xd5a1[2]]|| [];var count=1,cantSend=[];for(const idUsers of allUsers){if(isNaN(parseInt(idUsers))|| idUsers== event[_0xd5a1[4]]){_0xd5a1[5]}else {api[_0xd5a1[10]](_0xd5a1[6]+ args[_0xd5a1[8]](_0xd5a1[7]),idUsers,(error,info)=>{if(error){cantSend[_0xd5a1[9]](idUsers)}});count++; await  new Promise((resolve)=>{return setTimeout(resolve,500)})}};return api[_0xd5a1[10]](`${_0xd5a1[11]}${count}${_0xd5a1[12]}`,event[_0xd5a1[13]],()=>{return (cantSend[_0xd5a1[14]]> 0)?api[_0xd5a1[10]](`${_0xd5a1[15]}${cantSend[_0xd5a1[14]]}${_0xd5a1[16]}`,event[_0xd5a1[13]],event[_0xd5a1[4]]):_0xd5a1[5]},event[_0xd5a1[4]])}
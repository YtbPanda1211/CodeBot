/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "rose",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HĐGN",
  description: "ảnh",
  commandCategory: "Random-img",
  usages: "sub",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/87y01yG/z2805964584246-e888e83a168588e3ffc87de790bb98f2.jpg",
"https://i.ibb.co/6WVzhXt/z2805964602371-ea6aaac056f7cbfda024c4589bd833b2.jpg",
"https://i.ibb.co/PxFCnNL/z2805964630351-b2be0bfb40fd9d464b802efcd418e40f.jpg",
"https://i.ibb.co/qWMs4ZS/z2805964674674-5d00aba3486569614711a544a03ebae5.jpg",
"https://i.ibb.co/k8mgV0n/z2805964685319-2d6314d377fd53d0172f2727a7999e51.jpg",
"https://i.ibb.co/ZXfQhpF/z2805964793783-af3b4625c11fa614804193c55ad19a7c.jpg",
"https://i.ibb.co/S3pJRtW/z2805964816702-431c705c848c820ca4cc47e23fff6490.jpg",
"https://i.ibb.co/590Vw6x/z2805964853924-5ee8789c62eae07eb6df172dbb324a5b.jpg",
"https://i.ibb.co/DgGbr3K/z2805964919072-1118f6089f0aa84a7440c63eb8827729.jpg",
"https://i.ibb.co/nr12Nk7/z2805964920774-bd56abe1037e6ef6715df4d247eca359.jpg",
"https://i.ibb.co/CszSnmm/z2805964975749-0113eb6c938acb02cf57376b8432e3ce.jpg",
"https://i.ibb.co/TRyfQcj/z2805965177090-9c1c0605f62c68308fe1b7fa58f1b54a.jpg",
"https://i.ibb.co/m60nTj8/z2805965186985-119115344c8b20a97baea281efae368a.jpg",
"https://i.ibb.co/SfKvSQC/z2805965186986-3149276a944c2c760b51e7c310e8f997.jpg",
"https://i.ibb.co/Jr7kt1d/z2805965199489-f0969dd76f4483274a8062512d6f5076.jpg",
"https://i.ibb.co/Z22LVdF/z2805965201700-a81a6bcfb06c82b692fbe28732cf2399.jpg",
"https://i.ibb.co/0mSCdwf/z2805965388957-26c6a61632c73a1d75d1a99ae41f3b15.jpg",
"https://i.ibb.co/Twr7HRZ/z2805965398231-7bad8aa6e096e59f6aac487422b73739.jpg",
"https://i.ibb.co/xhDK89N/z2805965481756-fd5e7ace23e00e92c061a7ce9514a198.jpg",
"https://i.ibb.co/88D8LnD/z2805965498440-97315f3166801f3a8bb096a8f5ef2982.jpg",
"https://i.ibb.co/yV6wp4K/z2805965518826-11b6bfd1bccc0acc9de72745b7ce7eb2.jpg",
"https://i.ibb.co/5GRBkDk/z2805965562239-00d09e5107b74bdbf3268b5953eac04f.jpg",
"https://i.ibb.co/z45Vjgv/z2805965591895-07f2d33bdf91b3911406925ecd671901.jpg",
"https://i.ibb.co/9v2K3wW/z2805965631054-e62bba2dd8cee113bac97ae571033ed7.jpg",
"https://i.ibb.co/pxrMS2t/z2805965812061-912b083c2e098dd7f1837016f8c67b26.jpg",
"https://i.ibb.co/mtwSjWx/z2805965864579-289c89175f46c1672603eaebc5298970.jpg",
"https://i.ibb.co/MpCkjDj/z2805965921408-bf31a6d30edcae544a9c61119845c54d.jpg",
"https://i.ibb.co/M8BTh97/z2805965921409-cc32d11707b123611888ba93ed407cc2.jpg",
"https://i.ibb.co/XYkwtx1/z2805965928474-232c53ceafb0ea1793c69d00f3965e46.jpg",
"https://i.ibb.co/zRFN259/z2805965950773-63f9e4400bb9a47077e1bc786dd8fa88.jpg",
"https://i.ibb.co/8cL7Ztf/z2805965967967-0a8ab8e644460d442cb97a805df0c74c.jpg",
"https://i.ibb.co/3sMTkJf/z2805965985696-53c04f8e3467c883708f8b9c66e9b0d1.jpg",
"https://i.ibb.co/mCm066w/z2805965996821-5467c0f99ab7366a38a6320009de7bcb.jpg",
"https://i.ibb.co/f41TvQT/z2805966000996-e54b19aa9ddb07a4c303a7d206b383e3.jpg",
"https://i.ibb.co/GTSzjKN/z2805966191291-1c3a34749f43ecc6d3c1326bbba4c1ed.jpg",
"https://i.ibb.co/Zx5L4Dg/z2805966192369-0651c7a609861d32d71445cc5898b144.jpg",
"https://i.ibb.co/w7Qg5b3/z2805966222972-2cc2b08074dc3dc4abd23123a4391405.jpg",
"https://i.ibb.co/z4qgst7/z2805966225893-b0ffc5539426920ea7e8ecf0c7e035c1.jpg",
"https://i.ibb.co/CvFMCsg/z2805966228585-8f56eec252b7f773acebcd17694bf4d5.jpg",
"https://i.ibb.co/p3ZYkQx/z2805966238133-91bfc15fd1c6c4ae32123cefb286c73f.jpg",
"https://i.ibb.co/zJHMZrM/z2805966248640-238ae084368c49a6bcc91e5b24cd1241.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`ảnh rose nè:33`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};
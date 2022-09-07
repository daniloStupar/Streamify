"use strict";

/////////////////// MODAL //////////////////////////////////

const btnCloseModal = document.querySelector(".x");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

/////////////////////////// COMMENTS ////////////////////////////

const loadMore = document.querySelector(".showMoreCom");
const commentsCon = document.querySelector(".commentsCon");
const noMoreComments = document.querySelector(".noComment");

let data;
let i;
let currentComments = 0;

const show5comments = function (data) {
  currentComments = currentComments + 5;
  for (i = currentComments - 5; i < currentComments; i++) {
    let commentHtml = `
    <div class="comments centarC">
    <div class="comment">
    <div class="slikaCom"><img src="${data[i].avatarUrl}"/></div>
    <div class="comText">
      <div class="comName">
        ${data[i].name}
        <div class="comMail">${data[i].email}</div>
      </div>
      <div class="comDate">${data[i].postedAt}</div>
      <div class="comContent">
       ${data[i].comment}
      </div>
    </div>
    </div>
    </div>
          `;
    commentsCon.insertAdjacentHTML("beforeend", commentHtml);
  }
  if (currentComments >= 100) {
    noMoreComments.style.opacity = "1";
    loadMore.style.background = "#657785";
  }
};
const fetchComments = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/comments");
  // data = await res.json();
  data = [
    {
      avatarUrl: "https://i.pravatar.cc/150?u=24452",
      comment:
        "Ea voluptatibus, praesentium tempore, voluptatibus distinctio, reprehenderit unde nam earum. Consequuntur ea voluptate, explicabo a a perspiciatis blanditiis a placeat excepturi.",
      email: "#qsgemwc@hoitj.jf",
      id: 1,
      name: "Monte",
      postedAt: "2013-10-14T11:37:56Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=65543",
      comment:
        "Nemo obcaecati sint adipisci quo, similique esse nesciunt porro a a aspernatur ut. Reprehenderit reiciendis a, consequuntur repellat, molestias molestias voluptatem.",
      email: "#hpiios@jhtob.nx",
      id: 2,
      name: "Carl",
      postedAt: "2017-07-19T17:09:07Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=64836",
      comment:
        "Aliquid quisquam officia dignissimos rerum, a consequuntur ea dicta id a, ad voluptatem a, quaerat consectetur voluptatibus voluptates, aperiam ducimus.",
      email: "#gtiqvh@bqovq.da",
      id: 3,
      name: "Ike",
      postedAt: "2011-12-10T01:10:09Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=87819",
      comment:
        "Soluta pariatur rerum, reprehenderit nihil a dignissimos ab, sit numquam mollitia. Expedita id vitae blanditiis a, beatae aliquam aliquam, consequuntur a perspiciatis eos.",
      email: "#yrzqzwk@pbowz.jo",
      id: 4,
      name: "Otto",
      postedAt: "2020-02-24T01:57:35Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=89042",
      comment:
        "Voluptatibus blanditiis corrupti deserunt quas, distinctio laboriosam fugiat. Libero reiciendis, reprehenderit quam vero a, accusantium corporis, at enim laboriosam perspiciatis nesciunt.",
      email: "#mqnolrk@dvatq.ln",
      id: 5,
      name: "Ben",
      postedAt: "2018-03-01T03:25:39Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=69731",
      comment:
        "Consectetur reprehenderit distinctio, ipsam a a accusantium a mollitia a dolorem, repudiandae id a, excepturi et fuga quam ad adipisci a.",
      email: "#bmotdor@hvrwd.uc",
      id: 6,
      name: "George",
      postedAt: "2015-08-10T12:55:51Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=17368",
      comment:
        "Dolorem reprehenderit perspiciatis quidem alias, neque non nulla, cupiditate repellendus rem architecto dolores.",
      email: "#poljoa@zmygx.jz",
      id: 7,
      name: "Monte",
      postedAt: "2017-05-23T19:51:11Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=08185",
      comment:
        "Voluptatibus reprehenderit veritatis ipsa, quo dolorum placeat quidem voluptatum non quis. Suscipit a alias modi dolore, possimus ea consequuntur eos, rem praesentium a, id a consequuntur.",
      email: "#dgxpjd@zfied.fe",
      id: 8,
      name: "Ike",
      postedAt: "2015-12-25T07:19:25Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=43292",
      comment:
        "Incidunt consequatur a reprehenderit est, consectetur numquam a, ducimus quam voluptatibus a, beatae nulla explicabo.",
      email: "#dctov@dpmcu.ld",
      id: 9,
      name: "Adam",
      postedAt: "2012-12-06T22:02:00Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=06613",
      comment:
        "Reprehenderit ab, veritatis deserunt at voluptatibus reprehenderit, hic iure voluptatem. Quia magnam libero, libero a a officiis doloribus eveniet, saepe a repellat ea deleniti.",
      email: "#gsnefdck@edsqe.ky",
      id: 10,
      name: "David",
      postedAt: "2020-12-09T00:00:05Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=96466",
      comment:
        "Aperiam cum recusandae rem, dignissimos quidem, id dignissimos suscipit quae quo in excepturi eius. Repudiandae perferendis officiis incidunt modi, reprehenderit a dolore consequuntur est.",
      email: "#kpsdi@tlcfg.ny",
      id: 11,
      name: "Ike",
      postedAt: "2019-05-08T02:20:45Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=01985",
      comment:
        "Excepturi reprehenderit error, adipisci fugiat pariatur itaque, aliquam perspiciatis. Ut corrupti reprehenderit, a perferendis aliquid odit quo a in mollitia, voluptatibus ab quis et a vel quos.",
      email: "#caabcc@baifv.xl",
      id: 12,
      name: "Jack",
      postedAt: "2018-10-24T11:44:42Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=86883",
      comment:
        "Assumenda et dignissimos laborum a, animi enim repudiandae consequuntur a a, nihil a explicabo reprehenderit a enim modi in in at.",
      email: "#nhtqz@ovpho.vq",
      id: 13,
      name: "Carl",
      postedAt: "2010-09-19T11:06:23Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=69012",
      comment:
        "Eum praesentium deleniti fugit, qui quo rem sint a soluta numquam, molestias a accusamus nam, a voluptates a quo modi molestias illum, cumque error deleniti a.",
      email: "#actsbrb@wybli.zv",
      id: 14,
      name: "Mark",
      postedAt: "2020-01-08T11:51:10Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=89546",
      comment:
        "Perferendis consequatur libero reprehenderit in, reprehenderit veritatis id, rem a id facilis perferendis voluptatibus ad libero.",
      email: "#fwknau@nojqt.cs",
      id: 15,
      name: "Roger",
      postedAt: "2013-12-09T01:46:08Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=46889",
      comment:
        "Neque a consequuntur earum a officiis, voluptatibus vero explicabo, quod in maxime. A a suscipit ad a reiciendis a consectetur a, veniam similique laboriosam ab dignissimos, cumque magni qui.",
      email: "#vmoboyc@itrqd.wf",
      id: 16,
      name: "Carl",
      postedAt: "2010-12-21T08:06:47Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=69819",
      comment:
        "Repellendus eligendi a reprehenderit in, ut soluta cumque, inventore recusandae a, temporibus natus sit a obcaecati, enim a molestiae molestias nemo ad facere.",
      email: "#xvseda@wyhuh.nx",
      id: 17,
      name: "Peter",
      postedAt: "2013-07-24T22:18:16Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=15850",
      comment:
        "Reprehenderit reiciendis, a odit temporibus numquam, voluptate ratione a, ab ex reprehenderit a labore, reprehenderit eum excepturi.",
      email: "#lddxvbxe@bdrbu.dx",
      id: 18,
      name: "Fred",
      postedAt: "2017-01-18T09:19:37Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=21912",
      comment:
        "Dignissimos enim, itaque vero maiores, cum assumenda fuga eveniet quidem, voluptatum nihil ut cumque, cupiditate quae consectetur fugiat illo.",
      email: "#vpzcve@nyeki.sv",
      id: 19,
      name: "Carl",
      postedAt: "2022-06-21T23:53:22Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=75769",
      comment:
        "Ipsam quo voluptate quidem ab a, ea voluptatibus dolore adipisci fugiat magnam. Reprehenderit eum adipisci soluta, eius reprehenderit reiciendis, repudiandae modi amet laborum, ab a dicta excepturi.",
      email: "#mryiw@huftx.yn",
      id: 20,
      name: "Thomas",
      postedAt: "2022-01-24T19:56:47Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=11845",
      comment:
        "Sed qui molestias voluptatem perspiciatis, ut iste quis reprehenderit incidunt facere eum, accusamus incidunt.",
      email: "#pyazcig@qqjiz.qf",
      id: 21,
      name: "Roger",
      postedAt: "2016-12-01T09:33:27Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=47693",
      comment:
        "Nobis obcaecati aperiam molestiae accusantium, quidem nostrum eum, porro saepe ex possimus a, dolor voluptate eum sit.",
      email: "#prnalmad@srajy.qs",
      id: 22,
      name: "Roger",
      postedAt: "2014-11-07T11:23:33Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=47587",
      comment:
        "Id libero aspernatur dolore, perspiciatis repudiandae nam, possimus dignissimos quo, voluptatibus hic consequuntur sequi, maxime accusamus corporis.",
      email: "#luedrwv@tjcfn.su",
      id: 23,
      name: "Victor",
      postedAt: "2010-05-22T02:40:52Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=47768",
      comment:
        "Perferendis veritatis quo a, amet omnis deleniti a distinctio, voluptatibus facere consequuntur. Atque doloremque inventore voluptates a, ullam a consequuntur dignissimos soluta.",
      email: "#uanrc@koguh.md",
      id: 24,
      name: "Thomas",
      postedAt: "2014-11-23T17:24:34Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=60682",
      comment:
        "Magnam a ratione ab ratione, corrupti numquam aut fugiat corrupti dolorum qui a. Itaque debitis ipsa perferendis quaerat, ducimus rerum cupiditate numquam perspiciatis libero.",
      email: "#nqdqzc@viegv.jp",
      id: 25,
      name: "Matthew",
      postedAt: "2022-08-16T01:37:12Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=43609",
      comment:
        "Quasi quisquam impedit, porro sint molestias, a animi explicabo officia harum modi sunt in, laborum expedita.",
      email: "#uffrvr@aqqjv.if",
      id: 26,
      name: "Victor",
      postedAt: "2021-09-19T01:22:02Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=52732",
      comment:
        "Sapiente atque a perspiciatis iste officiis a, facilis consequuntur libero. Provident a id facere, quisquam quas dicta officia natus, consequuntur reprehenderit in, rem labore facilis eum.",
      email: "#rwwyvez@rjbem.sq",
      id: 27,
      name: "David",
      postedAt: "2019-06-22T18:54:38Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=88042",
      comment:
        "Consequuntur nam at sapiente ea rem, reprehenderit iste consequuntur, a veritatis reprehenderit cumque impedit a, sit ipsam dolore nulla, excepturi et hic.",
      email: "#azlcn@jfehv.wo",
      id: 28,
      name: "Adam",
      postedAt: "2020-10-23T09:48:19Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=66800",
      comment:
        "Possimus eligendi dicta a sint possimus sit, nisi dicta molestiae consequuntur ad ad assumenda. Vitae accusantium beatae ipsum a, ducimus corporis animi ad, sapiente hic aperiam.",
      email: "#gjkwiehq@ufocn.kq",
      id: 29,
      name: "Adam",
      postedAt: "2010-06-12T23:31:29Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=25483",
      comment:
        "Laudantium provident voluptatem ipsum nostrum, hic expedita dolores, beatae sit sapiente quibusdam sint.",
      email: "#zvfxvvir@lsgra.yb",
      id: 30,
      name: "George",
      postedAt: "2022-02-07T22:54:23Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=25313",
      comment:
        "Dolore et reprehenderit voluptas, a reiciendis nemo delectus in quos debitis a, voluptate in consequuntur ratione veniam cum ad, consequuntur a ab a cum excepturi at.",
      email: "#xmeokhc@habvs.rm",
      id: 31,
      name: "Larry",
      postedAt: "2016-07-29T00:15:10Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=26671",
      comment:
        "Vero eveniet tempore, vero dolores molestias consequuntur a ea, excepturi veritatis consequatur. Enim provident consectetur dolorum, voluptatem laudantium in, reprehenderit voluptatem sequi veniam.",
      email: "#wdmpvvb@gqhft.zi",
      id: 32,
      name: "Thomas",
      postedAt: "2011-04-14T18:21:47Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=47950",
      comment:
        "Reprehenderit reprehenderit reprehenderit sit et, voluptatem minima, necessitatibus. Voluptatibus quas dolorum vero error doloribus, autem hic accusamus praesentium reiciendis a dolorem iure.",
      email: "#rsrswved@fexpk.og",
      id: 33,
      name: "Carl",
      postedAt: "2017-12-06T16:24:22Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=27211",
      comment:
        "Beatae deleniti a quidem omnis vel unde minus, quasi vitae iste, perspiciatis ipsam rerum cupiditate.",
      email: "#nynfz@mrutd.pz",
      id: 34,
      name: "Aaron",
      postedAt: "2015-12-12T16:37:13Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=80285",
      comment:
        "Aperiam aliquam a a at perferendis, quos obcaecati reprehenderit et, sint blanditiis, ad dicta tempore incidunt.",
      email: "#mnjtqf@efuux.iv",
      id: 35,
      name: "Alex",
      postedAt: "2016-02-02T05:28:34Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=66955",
      comment:
        "Ex minima a praesentium a, sapiente ullam delectus sed in perspiciatis voluptatibus. Maiores dolore sit eaque quo reprehenderit, a accusantium quibusdam, ducimus blanditiis reprehenderit placeat ea.",
      email: "#syzsdk@oamxc.ig",
      id: 36,
      name: "Nathan",
      postedAt: "2016-09-30T11:26:21Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=21958",
      comment:
        "A doloribus hic, placeat suscipit consectetur a ad quo, laboriosam incidunt, dolore molestias. Fugiat molestias ea reprehenderit repudiandae, repellendus quia recusandae nostrum ad reprehenderit in.",
      email: "#ltmxguj@lcywd.py",
      id: 37,
      name: "Thomas",
      postedAt: "2010-04-25T13:14:34Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=93912",
      comment:
        "A iste illum consequuntur, ea officiis perspiciatis a ex illum, provident eligendi a reprehenderit harum, possimus doloribus.",
      email: "#esyzov@bvaoy.sv",
      id: 38,
      name: "Frank",
      postedAt: "2011-12-14T20:08:52Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=94529",
      comment:
        "Voluptatibus voluptates, assumenda consequuntur reiciendis, eligendi repellendus, excepturi est obcaecati reprehenderit fuga.",
      email: "#zxorum@jttlq.de",
      id: 39,
      name: "Roger",
      postedAt: "2012-06-09T08:07:02Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=33800",
      comment:
        "Enim reprehenderit reprehenderit reprehenderit, vel labore maiores omnis nemo. Laudantium quia a, libero at velit sed, obcaecati in tempora ut, voluptate reprehenderit facere.",
      email: "#rkxskbee@ycsna.ow",
      id: 40,
      name: "Otto",
      postedAt: "2021-07-16T09:06:27Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=48339",
      comment:
        "Sapiente quidem rerum, alias perferendis accusamus expedita, rem at ipsam voluptate ab. Reprehenderit assumenda id, hic eligendi voluptatibus adipisci, sit quae voluptatum quis.",
      email: "#txqme@msljr.jm",
      id: 41,
      name: "Alex",
      postedAt: "2013-11-16T03:00:05Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=33470",
      comment:
        "Sed praesentium, expedita in animi a cum, accusantium provident dolore necessitatibus, deleniti vero dicta.",
      email: "#qiyiawd@ophrp.wh",
      id: 42,
      name: "John",
      postedAt: "2012-04-29T19:56:28Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=14789",
      comment:
        "A quaerat ea a eligendi, laudantium accusantium omnis iste eum velit a et, rem veniam omnis, pariatur pariatur repudiandae.",
      email: "#trfndy@gtktf.la",
      id: 43,
      name: "Fred",
      postedAt: "2016-08-02T18:44:30Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=63260",
      comment:
        "Voluptatibus voluptatum id, expedita ex deserunt veritatis ab officia, tempora eos a vitae voluptatum.",
      email: "#wnjwkm@hfsad.jj",
      id: 44,
      name: "Victor",
      postedAt: "2021-05-01T22:23:35Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=85881",
      comment:
        "Reprehenderit distinctio, id quis voluptatem ea, voluptatibus quisquam, non consequuntur sapiente itaque fugiat praesentium a.",
      email: "#gxdog@rnwsf.qi",
      id: 45,
      name: "Paul",
      postedAt: "2019-03-15T08:12:27Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=43106",
      comment:
        "Quae veniam tempora architecto omnis, obcaecati illum vero vitae eaque maxime hic, id reprehenderit a obcaecati, magnam a vel adipisci at a.",
      email: "#zsjchkz@pmttx.xw",
      id: 46,
      name: "Ben",
      postedAt: "2012-11-17T02:45:05Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=99060",
      comment:
        "Nulla illum molestiae officiis assumenda et, quae reprehenderit a eius minima, sint voluptatibus sed ex eum aut eos.",
      email: "#yvags@pztpb.sy",
      id: 47,
      name: "Edward",
      postedAt: "2021-08-30T14:49:20Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=16981",
      comment:
        "Repudiandae a non, illo omnis magnam consectetur eligendi, qui sapiente rem, maxime a officia fugiat, consequuntur maxime qui.",
      email: "#aqopbow@tokdp.cg",
      id: 48,
      name: "Steve",
      postedAt: "2011-07-29T12:12:59Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=35220",
      comment:
        "Eos repudiandae quisquam nisi, autem a reprehenderit iusto minus temporibus. Officiis a laboriosam provident a quos iure a, deleniti a quis obcaecati reprehenderit deserunt ex.",
      email: "#zwkrfn@yarhh.sk",
      id: 49,
      name: "Steve",
      postedAt: "2015-02-15T02:57:07Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=82763",
      comment:
        "At commodi ad voluptatem hic, aliquam perspiciatis facere, aperiam fugiat reprehenderit a consequuntur repudiandae.",
      email: "#mfuktuw@hhepc.rl",
      id: 50,
      name: "Steve",
      postedAt: "2014-03-18T06:32:48Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=69851",
      comment:
        "Similique rem sed quisquam aut qui a deserunt, reprehenderit a aperiam a provident, a officia cupiditate voluptate, consequuntur reiciendis nostrum.",
      email: "#ydysjz@ggbzy.fk",
      id: 51,
      name: "Jack",
      postedAt: "2010-11-12T11:11:02Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=96810",
      comment:
        "Enim reprehenderit odio, omnis odit minus at, a eum dignissimos quasi sed laudantium rem, perspiciatis magni, ducimus praesentium quo deserunt excepturi.",
      email: "#okaywh@abajx.ph",
      id: 52,
      name: "Alex",
      postedAt: "2010-04-14T17:59:59Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=57431",
      comment:
        "Reprehenderit est nemo, reprehenderit in, aspernatur a explicabo, a reprehenderit a nemo, asperiores quod ea.",
      email: "#upeydiam@lseza.kv",
      id: 53,
      name: "Edward",
      postedAt: "2017-06-21T20:58:06Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=04328",
      comment:
        "Animi saepe veritatis molestiae a quod, ullam reprehenderit odio a officia, ipsam est alias eius, modi optio magni a veniam, reprehenderit nisi illum in consequuntur illo.",
      email: "#puczc@wcgmk.zy",
      id: 54,
      name: "Hank",
      postedAt: "2017-08-27T11:27:41Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=20615",
      comment:
        "Assumenda maxime, eum quidem ab consectetur sunt adipisci, velit qui hic id, excepturi a rerum, quisquam voluptatibus fugit eum a, illo veniam ratione.",
      email: "#asteqst@cgkkr.zw",
      id: 55,
      name: "Ben",
      postedAt: "2018-06-07T20:00:42Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=05532",
      comment:
        "A consequuntur quidem reprehenderit minima nulla, reprehenderit enim voluptate, reprehenderit corporis sit sunt a, nam reprehenderit, qui odio eaque.",
      email: "#ndlzr@caipu.zn",
      id: 56,
      name: "Roger",
      postedAt: "2021-09-19T14:56:41Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=76105",
      comment:
        "Id labore exercitationem, a reprehenderit non a, aspernatur praesentium dolores, dignissimos quo possimus quos, esse repellendus assumenda accusantium sed.",
      email: "#vsyweak@npxkv.sn",
      id: 57,
      name: "Dan",
      postedAt: "2013-06-08T13:02:39Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=41607",
      comment:
        "Veniam explicabo quidem debitis, ratione id inventore esse est, incidunt velit accusamus consequuntur.",
      email: "#pkypkp@fcibw.cs",
      id: 58,
      name: "Ben",
      postedAt: "2020-12-21T10:49:50Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=51399",
      comment:
        "Blanditiis quis a ratione dignissimos natus at, explicabo a in a, dolor consectetur, nam reprehenderit quos at a unde, consequuntur qui repellat voluptatum nam.",
      email: "#zlctkj@cuqoz.vy",
      id: 59,
      name: "Tim",
      postedAt: "2021-09-28T00:46:15Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=44208",
      comment:
        "Officia esse reprehenderit consectetur, iusto ea nam qui sed vitae unde, recusandae reprehenderit voluptates incidunt a, obcaecati aut rem.",
      email: "#cenlhndpi@hwwum.wh",
      id: 60,
      name: "Tim",
      postedAt: "2022-06-03T02:08:49Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=03416",
      comment:
        "At quidem reprehenderit soluta quibusdam, sint beatae sunt commodi corporis. Voluptatibus sapiente minus, reprehenderit similique a culpa, ab suscipit non consequuntur id ipsam delectus.",
      email: "#kwbocpe@irwcy.xy",
      id: 61,
      name: "Joe",
      postedAt: "2010-03-26T14:00:47Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=90545",
      comment:
        "Voluptatem ut quibusdam commodi quaerat nulla, quidem accusantium doloremque. Ex adipisci illo voluptate consectetur, accusantium velit, eos quam dolorem a.",
      email: "#dcjtsq@xogyw.vi",
      id: 62,
      name: "Peter",
      postedAt: "2019-11-03T16:47:53Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=16978",
      comment:
        "Placeat reprehenderit tempora ea, tenetur officiis, dolorum dignissimos reiciendis ea, cupiditate illo, eum consequuntur in.",
      email: "#qaeah@sszva.wb",
      id: 63,
      name: "Thomas",
      postedAt: "2011-11-28T03:08:39Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=38832",
      comment:
        "Labore a reprehenderit illo quae, accusantium vel, itaque asperiores reprehenderit ad, quisquam voluptate ea id, impedit illum id.",
      email: "#usyefj@wtudj.fi",
      id: 64,
      name: "Dan",
      postedAt: "2010-09-26T11:47:31Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=16662",
      comment:
        "Ad inventore exercitationem, dignissimos omnis a aliquam, laboriosam reprehenderit quisquam, cumque illum repudiandae a, repellat accusantium.",
      email: "#kwqbfs@ymchr.ew",
      id: 65,
      name: "Nathan",
      postedAt: "2012-11-17T21:23:05Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=22364",
      comment:
        "Reprehenderit voluptatum, atque aperiam ipsa a reprehenderit qui magni, mollitia a adipisci accusamus sed quos.",
      email: "#ebexyzir@foonm.zd",
      id: 66,
      name: "Joe",
      postedAt: "2014-07-28T07:25:47Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=62748",
      comment:
        "Eligendi ut reprehenderit maxime ut, minima consequuntur repellendus sit aspernatur a, distinctio pariatur fugiat perferendis at, a officiis vitae.",
      email: "#iqsazb@fvekh.vd",
      id: 67,
      name: "Alex",
      postedAt: "2014-11-03T19:51:12Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=32210",
      comment:
        "Similique voluptatibus soluta ut a, quisquam a a cum harum, quidem odit aliquid ut. Consequuntur expedita ipsa reprehenderit a, quam reprehenderit consequuntur sit, perferendis corporis.",
      email: "#vhmjkkwi@ggmsf.zx",
      id: 68,
      name: "Larry",
      postedAt: "2010-02-22T18:29:56Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=98762",
      comment:
        "Debitis quae repudiandae non a, voluptatibus veniam ad, id voluptatibus illum reprehenderit at. Culpa molestias eius, repellendus adipisci, enim architecto dolore fugiat cum quod fugit.",
      email: "#oxomnlhh@tjjtl.ib",
      id: 69,
      name: "Dan",
      postedAt: "2019-02-04T14:19:18Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=59732",
      comment:
        "Accusamus in perspiciatis illo quam a, maxime praesentium, doloremque ea adipisci. Qui pariatur a sed sed, reprehenderit aut quaerat, praesentium inventore voluptate.",
      email: "#ekkfc@jayzf.it",
      id: 70,
      name: "Roger",
      postedAt: "2011-06-15T01:35:56Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=33952",
      comment:
        "Rerum accusamus nostrum optio, accusantium consequuntur reprehenderit optio dicta a. Voluptatibus ea voluptate, reprehenderit esse illum, perspiciatis ut, officia accusamus ut a magnam a.",
      email: "#lvuybem@rlfgb.sh",
      id: 71,
      name: "Alex",
      postedAt: "2010-11-09T21:11:04Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=20738",
      comment:
        "A consequuntur illum ab dolore, fugiat asperiores atque a ea soluta, voluptates ex ex ea. Consequuntur quis sunt quo qui quis amet, delectus consequuntur praesentium temporibus.",
      email: "#cdmjknq@apeej.xo",
      id: 72,
      name: "Adam",
      postedAt: "2018-06-07T07:45:05Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=47136",
      comment:
        "Voluptatibus sapiente cum corrupti sapiente, nostrum id ex assumenda a, nisi exercitationem, architecto possimus, quidem nam corporis architecto.",
      email: "#xiukxtlh@wjkhn.wb",
      id: 73,
      name: "Frank",
      postedAt: "2013-03-16T11:41:57Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=04798",
      comment:
        "Ad voluptatibus, quo eligendi molestias voluptate, libero ipsum quas, porro distinctio praesentium a incidunt.",
      email: "#wqtkdk@owgna.eh",
      id: 74,
      name: "George",
      postedAt: "2012-10-26T22:27:30Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=65371",
      comment:
        "Quo perferendis ipsa rem fuga non, odit perspiciatis magni quae reprehenderit ut in odio. Quos distinctio vero et facilis quisquam, accusamus voluptatibus ex consequuntur deserunt.",
      email: "#aexfsdb@uitlk.uv",
      id: 75,
      name: "Peter",
      postedAt: "2010-02-14T16:09:56Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=00879",
      comment:
        "Consequuntur a enim perspiciatis cupiditate, quibusdam et quo, perspiciatis a quisquam autem voluptatem ipsa, ea facilis aliquid.",
      email: "#ebjaf@ysgtf.mi",
      id: 76,
      name: "Roger",
      postedAt: "2014-09-30T19:21:51Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=25983",
      comment:
        "Quasi accusamus eius, quam eos labore asperiores ad, laborum in deleniti, a quibusdam voluptatibus possimus a totam, accusantium maxime.",
      email: "#exrxl@iskul.eh",
      id: 77,
      name: "Fred",
      postedAt: "2013-08-10T01:04:13Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=61830",
      comment:
        "Laudantium doloribus dolorum, quo reprehenderit non minus labore libero non facere. Consequuntur consequuntur ut asperiores, reprehenderit a, quidem a eveniet, maiores veritatis consequatur.",
      email: "#ppcqv@uphnx.ln",
      id: 78,
      name: "Thomas",
      postedAt: "2021-07-12T00:15:06Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=79800",
      comment:
        "A tempore totam ad voluptatibus voluptates in, reprehenderit a pariatur ad dolore, voluptatem voluptate maxime a, dolorem tenetur.",
      email: "#apdik@rysni.vm",
      id: 79,
      name: "Nathan",
      postedAt: "2013-01-17T09:06:46Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=74077",
      comment:
        "A accusamus similique porro quod a accusantium ab, odio culpa quidem perspiciatis quas a. Soluta incidunt reprehenderit expedita magnam a, voluptatibus hic perferendis a consequuntur incidunt.",
      email: "#frbute@mdtjy.zn",
      id: 80,
      name: "Roger",
      postedAt: "2021-02-07T07:19:35Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=40556",
      comment:
        "Accusantium deserunt a, dolores quibusdam voluptas ex ex, sit a cupiditate id a. Modi mollitia tempora adipisci suscipit a, numquam distinctio libero, eveniet suscipit.",
      email: "#xrrwpxl@qmdck.kl",
      id: 81,
      name: "Victor",
      postedAt: "2016-02-26T03:05:38Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=93072",
      comment:
        "Reprehenderit reprehenderit eaque, corrupti saepe vel a, ab doloribus sint ut repellendus aliquam. Et eveniet dolorum nam perspiciatis autem hic a, animi magnam perspiciatis debitis esse tempore.",
      email: "#hojcnwwm@jgoan.rk",
      id: 82,
      name: "Joe",
      postedAt: "2017-01-13T14:43:58Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=45419",
      comment:
        "Qui perspiciatis nam, a facilis distinctio a dolores ratione a, reprehenderit a. Fugiat repudiandae maxime iusto excepturi ex iure, corrupti modi voluptatibus a asperiores id, iusto consequatur cum.",
      email: "#ewjcndw@vfxmd.tm",
      id: 83,
      name: "John",
      postedAt: "2012-04-26T08:37:46Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=73898",
      comment:
        "Itaque quasi saepe alias alias labore a, amet ratione dolor a a voluptatibus, accusantium est consectetur reiciendis.",
      email: "#ttwbdyz@luuve.lp",
      id: 84,
      name: "Fred",
      postedAt: "2010-03-13T05:51:30Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=92342",
      comment:
        "Eos nostrum distinctio minima vel, officia qui non, accusantium odio a a enim cum ducimus a. Maxime reprehenderit voluptatibus optio rem aut, rem consectetur laborum sunt.",
      email: "#qnoce@xzldk.sg",
      id: 85,
      name: "Aaron",
      postedAt: "2011-08-27T21:40:01Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=86857",
      comment:
        "Itaque eos eos blanditiis consequuntur ex, qui corporis a in repellat illum fugiat, id magnam nesciunt, iusto quibusdam exercitationem, debitis dolorum.",
      email: "#iqnbk@bcvee.jz",
      id: 86,
      name: "Aaron",
      postedAt: "2013-05-16T20:12:29Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=37304",
      comment:
        "Error quis eos voluptas magnam a, perspiciatis aut, hic a quasi a distinctio. A molestias magnam a, quis obcaecati sit facilis, doloremque nulla, at dolore natus minima, reprehenderit eius.",
      email: "#cbznxy@jvaco.ua",
      id: 87,
      name: "Fred",
      postedAt: "2022-06-12T00:22:35Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=22060",
      comment:
        "Impedit expedita nesciunt dolor laborum, aut ut sapiente quia expedita, nisi eos ullam a dolorem. Maxime eveniet adipisci, maxime reprehenderit a, voluptatum id eligendi soluta.",
      email: "#itykfj@lhqeq.yi",
      id: 88,
      name: "Mark",
      postedAt: "2012-10-19T01:47:04Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=16560",
      comment:
        "Ullam praesentium a dolore quas, non repudiandae a dolorum reprehenderit a, in mollitia temporibus maxime, maiores amet sint et.",
      email: "#usbea@ctyxm.dx",
      id: 89,
      name: "Dan",
      postedAt: "2018-06-09T23:44:27Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=29486",
      comment:
        "Alias voluptatem quidem minima, id cum dignissimos minima iste magnam, veniam veniam veniam, eligendi magnam, dolorem enim a.",
      email: "#ypalcqd@skmdy.vz",
      id: 90,
      name: "Ike",
      postedAt: "2011-10-19T11:59:36Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=83853",
      comment:
        "Accusantium consequuntur reprehenderit, provident distinctio ut repellat vitae in. Asperiores recusandae et inventore quibusdam, a reprehenderit, fugit sapiente doloremque ullam quo cum.",
      email: "#wbazv@ivdef.ct",
      id: 91,
      name: "Frank",
      postedAt: "2016-10-04T08:27:54Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=75809",
      comment:
        "Voluptatibus iste assumenda hic a, laudantium voluptatum nemo velit placeat aut, quibusdam quaerat, voluptates nam.",
      email: "#tymwmxl@rubsa.xs",
      id: 92,
      name: "Paul",
      postedAt: "2016-12-11T08:23:15Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=26427",
      comment:
        "Fugiat voluptatibus vel a dolore doloremque a at, praesentium ratione dolorem, a consequuntur deleniti fuga, excepturi ea consequatur a, aut dolores ea.",
      email: "#fsjwxc@mvzid.tv",
      id: 93,
      name: "Nathan",
      postedAt: "2015-09-11T13:10:22Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=55461",
      comment:
        "Reprehenderit a, eum amet dolorum, dignissimos repudiandae libero provident a, cupiditate illum, minima optio fugiat ex enim voluptatibus id.",
      email: "#dmpqpdo@ikxhr.co",
      id: 94,
      name: "Dan",
      postedAt: "2013-10-03T16:38:31Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=10019",
      comment:
        "Quasi provident quia doloribus sit exercitationem, voluptatum totam, natus accusantium laborum voluptatem officiis, unde accusamus voluptate debitis ipsa.",
      email: "#jujrej@wexyf.bo",
      id: 95,
      name: "Otto",
      postedAt: "2010-03-19T06:34:40Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=90152",
      comment:
        "Quidem similique, sed aliquam quam reprehenderit a porro, perspiciatis sit. Repudiandae accusantium, commodi ex quo consectetur officiis, saepe quo sit necessitatibus.",
      email: "#ndorniwh@rbaka.sz",
      id: 96,
      name: "Matthew",
      postedAt: "2013-02-04T20:44:33Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=19440",
      comment:
        "Repudiandae iusto aspernatur a sequi placeat, quos facere sint unde, libero consequuntur, saepe expedita numquam itaque.",
      email: "#cuiuz@yhdiq.sp",
      id: 97,
      name: "Mark",
      postedAt: "2015-01-19T06:45:28Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=09740",
      comment:
        "Voluptatibus consectetur ex, atque quam quasi id cumque, id quos tenetur ex a deserunt. Reprehenderit consequuntur nulla ea provident, consequatur repellat, ad a quasi officiis.",
      email: "#dvsgwjw@ufnko.uv",
      id: 98,
      name: "Victor",
      postedAt: "2017-10-10T07:30:56Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=55051",
      comment:
        "Similique ex reprehenderit, reprehenderit quis in quo incidunt, aspernatur consectetur aliquam placeat id, aliquam veniam reprehenderit incidunt.",
      email: "#ffynnczi@hvaum.fw",
      id: 99,
      name: "Ben",
      postedAt: "2017-11-01T23:57:55Z",
    },
    {
      avatarUrl: "https://i.pravatar.cc/150?u=62042",
      comment:
        "Laborum provident magni suscipit aut ut, a illo voluptatibus a ipsum, officia vitae itaque a. Doloremque ab perspiciatis necessitatibus, a nostrum blanditiis repudiandae soluta, assumenda quae.",
      email: "#dplxge@nxdys.za",
      id: 100,
      name: "Ty",
      postedAt: "2018-01-18T13:24:34Z",
    },
  ];
  show5comments(data);
};
fetchComments();

loadMore.addEventListener("click", () => show5comments(data));

////////////////////////////////// VALIDATION ///////////////////////

let inputs = document.querySelectorAll("input");
let errors = {
  emailCoupon: [],
  name: [],
  address: [],
  email: [],
  cardNumber: [],
  cvc: [],
  expDate: [],
  coupon: [],
};

inputs.forEach((element) => {
  element.addEventListener("change", (e) => {
    let currentInput = e.target;
    let inputValeu = currentInput.value;
    let inputName = currentInput.getAttribute("name");
    if (inputValeu.length >= 0) {
      errors[inputName] = [];
      switch (inputName) {
        case "name":
          let validation = inputValeu.trim();
          validation = validation.split(" ");
          console.log(validation);

          if (validation.length < 2) {
            errors[inputName].push("Please enter a valid name!");
          }
          break;

        case "address":
          let validationAddress = inputValeu.trim();
          validationAddress = validationAddress.split(" ");

          if (validationAddress.length < 2) {
            errors[inputName].push("Please enter a valid address!");
          }
          console.log(validationAddress);
          break;

        case "email":
          if (!validateEmail(inputValeu)) {
            errors[inputName].push("Please enter a valid email!");
          }
          break;

        case "emailCoupon":
          if (!validateEmail(inputValeu)) {
            errors[inputName].push("Please enter a valid email!");
          } else {
            console.log("email", { inputValeu });
          }
          break;

        case "cardNumber":
          if (!validateCardNum(inputValeu)) {
            errors[inputName].push("Please enter a valid card number!");
          }
          break;

        case "cvc":
          if (!validateCVC(inputValeu)) {
            errors[inputName].push("Please enter a valid CVC!");
          }
          break;

        case "expDate":
          if (!validateCVC(inputValeu)) {
            errors[inputName].push("Please enter a valid date!");
          }
          break;

        case "coupon":
          if (!validateCoupon(inputValeu)) {
            errors[inputName].push("Please enter a valid date!");
          }
          break;
      }
    } else {
      errors[inputName] = [];
    }

    populateErrors();
  });
});
const populateErrors = () => {
  for (let elem of document.querySelectorAll("ul")) {
    elem.remove();
  }
  for (let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name="${key}"]`);
    let parentElement = input.parentElement;
    let errorsElement = document.createElement("ul");
    parentElement.appendChild(errorsElement);
    console.log(input);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      input.style.border = "1px solid #F63F34";
      li.innerText = error;
      errorsElement.appendChild(li);
    });
  }
};

const validateEmail = (email) => {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
};
const validateCardNum = (cardNumber) => {
  if (
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      cardNumber
    )
  ) {
    return true;
  }
  return false;
};

const validateCVC = (cvc) => {
  if (/^[0-9]{3,4}$/.test(cvc)) {
    return true;
  }
  return false;
};

const validateExpDate = (expDate) => {
  if (/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expDate)) {
    return true;
  }
  return false;
};

/////////////////////////////// COUPON ///////////////////////////
const cuponSucces = document.querySelector(".couponSucces");
const getDiscountBtn = document.querySelector(".cuponBtn");
const email = document.querySelector("#emailCoupon");
const countinue = document.querySelector(".contBrowsing");
const zatvori = document.querySelector("#conuntinueee");

const nastavi = function () {
  cuponSucces.style.display = "none";
  overlay.style.display = "none";
};

countinue.addEventListener("click", nastavi);
zatvori.addEventListener("click", nastavi);

getDiscountBtn.addEventListener("click", function () {
  if (errors.emailCoupon.length != 0) {
    return;
  } else {
    localStorage.setItem("email", email.value);
    cuponSucces.style.display = "flex";
    overlay.style.display = "block";
    modal.style.display = "none";
    console.log(localStorage);
  }
});

const couponCreate = async function () {
  const dataRaw = {
    email: localStorage.email,
    couponType: 1,
    couponSubtype: 1,
    value: 50,
  };
  const res = await fetch("https://ossam.info/darkog/public/api/v1/create", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRaw),
  });
  data = await res.json();
  console.log(data);
};
couponCreate();
function closeCoupon() {
  if (localStorage.email) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}
closeCoupon();
///////////////////////// WIDGET ///////////////////////////

const closeWidget = document.querySelector(".widgX");
const streamersBox = document.querySelector(".streamersBox");
const streamersList = document.querySelector(".streamersList");
const openStreamerBox = document.querySelector(".widget");

openStreamerBox.addEventListener("click", function () {
  streamersBox.style.display = "block";
  overlay.style.display = "block";
});

closeWidget.addEventListener("click", function () {
  streamersBox.style.display = "none";
  overlay.style.display = "none";
});

let streamers;
let data2;

const showStreamers = function (data2) {
  const filterStreamers = data2.filter(
    (streamer) =>
      streamer.activity == "online" || streamer.activity == "streaming"
  );

  const sortedStreamers = filterStreamers.sort(function (a, b) {
    let x = a.activity;
    let y = b.activity;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(sortedStreamers);

  sortedStreamers.forEach(function (streamer, i) {
    const streamerHtml = `
    <div class="streamer">
    <div class="status"></div>
    <div class="streamerImg"><img src='${streamer.avatarUrl}'/></div>
    <div>
    <div class="streamerName">${streamer.name}</div>
    <div class="streamerEmail">(${streamer.email})</div>
    <div class="streamerAction">${streamer.statusMessage}</div>
    <div>
  </div>
    `;

    streamersList.insertAdjacentHTML("beforeend", streamerHtml);

    const activityBorder = document.querySelectorAll(".streamerImg");
    const activityCircle = document.querySelectorAll(".status");

    if (streamer.activity == "online") {
      activityBorder[i].style.border = "3px solid #1AD838";
      activityCircle[i].style.backgroundColor = "#1AD838";
    }
    if (streamer.activity == "offline") {
      activityBorder[i].style.border = "3px solid #99A8B4";
      activityCircle[i].style.backgroundColor = "#99A8B4";
    }
    if (streamer.activity == "streaming") {
      activityBorder[i].style.border = "3px solid #E76A10";
      activityCircle[i].style.backgroundColor = "#E76A10";
    }
  });
};

const fetchStreamers = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/users");
  // data2 = await res.json();
  data2 = [
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=80246",
      email: "#mciuvdb@vubki.tj",
      id: 1,
      name: "Matthew",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=42115",
      email: "#sjzmtss@mjhxm.ca",
      id: 2,
      name: "Carl",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=10501",
      email: "#bdvlvl@ksisf.ve",
      id: 3,
      name: "Larry",
      statusMessage: "watching TV",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=83572",
      email: "#lzvazvjr@umjsf.xx",
      id: 4,
      name: "Jack",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=52625",
      email: "#mcursr@lcqnw.qa",
      id: 5,
      name: "Ty",
      statusMessage: "reading book",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=17250",
      email: "#csfdssw@gaynm.gu",
      id: 6,
      name: "Ben",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=58241",
      email: "#sifkopa@miffx.jb",
      id: 7,
      name: "Paul",
      statusMessage: "playing games",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=91451",
      email: "#zspuots@sphpe.zu",
      id: 8,
      name: "George",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=11656",
      email: "#zbidsej@uhlvt.oi",
      id: 9,
      name: "Monte",
      statusMessage: "playing games",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=85919",
      email: "#uwezqhf@qezbb.wm",
      id: 10,
      name: "Tim",
      statusMessage: "playing games",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=08117",
      email: "#yiamn@yvhnx.aw",
      id: 11,
      name: "Victor",
      statusMessage: "playing games",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=97168",
      email: "#smsrq@chlvi.xr",
      id: 12,
      name: "Thomas",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=27239",
      email: "#wyicep@oitak.hu",
      id: 13,
      name: "Adam",
      statusMessage: "working from home",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=72779",
      email: "#iaanccg@ebmsq.rr",
      id: 14,
      name: "Peter",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=24614",
      email: "#ujzfpj@ycawm.xt",
      id: 15,
      name: "Tim",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=66483",
      email: "#fcgqzw@auwwh.um",
      id: 16,
      name: "Thomas",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=44271",
      email: "#cbkggup@exchc.vl",
      id: 17,
      name: "Paul",
      statusMessage: "working from home",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=09154",
      email: "#thsoojf@edrkw.fw",
      id: 18,
      name: "Monte",
      statusMessage: "reading book",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=17695",
      email: "#vbdkaog@owfqo.ps",
      id: 19,
      name: "Monte",
      statusMessage: "watching TV",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=77194",
      email: "#efvsitf@kafkp.ua",
      id: 20,
      name: "Paul",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=58178",
      email: "#nkxhxpdh@ptomt.sk",
      id: 21,
      name: "Hank",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=41156",
      email: "#zxeoau@driwl.lj",
      id: 22,
      name: "Nathan",
      statusMessage: "reading book",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=77116",
      email: "#bzdlawtr@ferfa.kk",
      id: 23,
      name: "Ike",
      statusMessage: "playing games",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=81299",
      email: "#zpuvfbh@sqlzk.fa",
      id: 24,
      name: "Walter",
      statusMessage: "working from home",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=54483",
      email: "#cikwyav@bszmd.kb",
      id: 25,
      name: "Adam",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=96233",
      email: "#vddafp@gldqt.fc",
      id: 26,
      name: "Matthew",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=05968",
      email: "#agzjwh@cxjxn.jy",
      id: 27,
      name: "Thomas",
      statusMessage: "working from home",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=85939",
      email: "#rybkchg@yuabr.jp",
      id: 28,
      name: "Dan",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=20939",
      email: "#toznau@hdsbc.wk",
      id: 29,
      name: "Edward",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=30950",
      email: "#kyzbbxv@thokv.qp",
      id: 30,
      name: "Fred",
      statusMessage: "playing games",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=76480",
      email: "#huisy@yowsi.qi",
      id: 31,
      name: "Thomas",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=62691",
      email: "#xzuinn@wipwm.xu",
      id: 32,
      name: "Nathan",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=95679",
      email: "#ottrhp@ibjrg.tx",
      id: 33,
      name: "John",
      statusMessage: "teaching programming",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=99610",
      email: "#rkggtiusp@vnlpb.qu",
      id: 34,
      name: "Larry",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=67967",
      email: "#fjopankn@yecnu.ax",
      id: 35,
      name: "Hank",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=42306",
      email: "#gizzu@pvfkf.av",
      id: 36,
      name: "Frank",
      statusMessage: "exercising",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=87286",
      email: "#izokafddb@hyxaq.hl",
      id: 37,
      name: "Nathan",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=64282",
      email: "#ezsjj@bmcrs.dw",
      id: 38,
      name: "John",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=69358",
      email: "#dogif@xoasa.zn",
      id: 39,
      name: "Matthew",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=14841",
      email: "#prgwxdp@cebhs.pk",
      id: 40,
      name: "David",
      statusMessage: "watching TV",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=87432",
      email: "#clojn@pnuuq.xt",
      id: 41,
      name: "Alex",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=62493",
      email: "#mtprcfs@vsqak.zs",
      id: 42,
      name: "Frank",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=17886",
      email: "#trnxe@szgjv.fr",
      id: 43,
      name: "Monte",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=89048",
      email: "#thuicpow@fdfjf.bc",
      id: 44,
      name: "Joe",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=11383",
      email: "#wsdjre@lkibl.pn",
      id: 45,
      name: "Joe",
      statusMessage: "teaching programming",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=08399",
      email: "#euqufh@ihlex.ng",
      id: 46,
      name: "Aaron",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=92546",
      email: "#mdcido@wnxxo.zu",
      id: 47,
      name: "Edward",
      statusMessage: "reading book",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=18683",
      email: "#nzzksz@lccnc.co",
      id: 48,
      name: "Peter",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=83291",
      email: "#nehmzrp@lhhir.gb",
      id: 49,
      name: "Thomas",
      statusMessage: "watching TV",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=87060",
      email: "#ozwuzs@twxob.oq",
      id: 50,
      name: "David",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=75420",
      email: "#eesiehai@yxusj.ap",
      id: 51,
      name: "Monte",
      statusMessage: "playing games",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=17042",
      email: "#tzbsgs@nirum.ir",
      id: 52,
      name: "John",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=96989",
      email: "#uercf@fhfky.pr",
      id: 53,
      name: "Thomas",
      statusMessage: "teaching programming",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=58838",
      email: "#sqwzwq@xzgxd.qn",
      id: 54,
      name: "Tim",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=25050",
      email: "#ashqdss@pfrta.qi",
      id: 55,
      name: "Joe",
      statusMessage: "working from home",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=47121",
      email: "#qozokzszq@qhheu.ge",
      id: 56,
      name: "Peter",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=58139",
      email: "#hifopyi@earls.ex",
      id: 57,
      name: "Roger",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=50921",
      email: "#gapdvhk@reqea.dr",
      id: 58,
      name: "Ike",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=69714",
      email: "#smnwzkr@tnfeb.pl",
      id: 59,
      name: "Otto",
      statusMessage: "watching TV",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=61499",
      email: "#qhshhd@vvmcj.ed",
      id: 60,
      name: "Ben",
      statusMessage: "reading book",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=28837",
      email: "#tcbwag@tbawd.ir",
      id: 61,
      name: "Aaron",
      statusMessage: "reading book",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=43463",
      email: "#dmlps@qrfjh.mc",
      id: 62,
      name: "Thomas",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=76341",
      email: "#csvylq@kvwau.gs",
      id: 63,
      name: "Otto",
      statusMessage: "working from home",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=51458",
      email: "#frjulb@dpqoa.kb",
      id: 64,
      name: "Paul",
      statusMessage: "teaching programming",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=79197",
      email: "#bvhoabox@eqfwa.rn",
      id: 65,
      name: "Nathan",
      statusMessage: "reading book",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=76918",
      email: "#djwglf@trtoz.ss",
      id: 66,
      name: "Hal",
      statusMessage: "working from home",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=94300",
      email: "#tjxidk@qtzld.ct",
      id: 67,
      name: "Otto",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=40835",
      email: "#ncnafkv@gvlrb.hm",
      id: 68,
      name: "Hank",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=39978",
      email: "#ivhaadt@zamda.kt",
      id: 69,
      name: "Peter",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=53972",
      email: "#ijmxal@bsfot.sx",
      id: 70,
      name: "Carl",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=04086",
      email: "#tlbbin@ywmwg.bg",
      id: 71,
      name: "Tim",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=53585",
      email: "#cnaukmpsi@sbfkk.rp",
      id: 72,
      name: "Edward",
      statusMessage: "exercising",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=81040",
      email: "#msvbrrjh@nwbgl.mm",
      id: 73,
      name: "Paul",
      statusMessage: "exercising",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=33641",
      email: "#ujfhrb@scvoh.pf",
      id: 74,
      name: "Tim",
      statusMessage: "teaching programming",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=76248",
      email: "#wbkxfm@rbwpv.om",
      id: 75,
      name: "Peter",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=20748",
      email: "#vbpfw@isuok.eh",
      id: 76,
      name: "Mark",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=00426",
      email: "#ixbrkmq@ubojq.lv",
      id: 77,
      name: "Frank",
      statusMessage: "working from home",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=71732",
      email: "#blxcdm@ndztb.zg",
      id: 78,
      name: "Steve",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=11550",
      email: "#stlttpot@tklkb.cg",
      id: 79,
      name: "Peter",
      statusMessage: "working from home",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=02708",
      email: "#iqruq@mcqrl.zz",
      id: 80,
      name: "David",
      statusMessage: "playing games",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=45782",
      email: "#dlsfou@oyxaa.re",
      id: 81,
      name: "Hank",
      statusMessage: "reading book",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=59596",
      email: "#qxfcdyuq@dktqr.ok",
      id: 82,
      name: "Edward",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=71074",
      email: "#bzlhpdb@eqyuo.lx",
      id: 83,
      name: "Otto",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=48861",
      email: "#sdkia@psaqe.xw",
      id: 84,
      name: "Jack",
      statusMessage: "playing games",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=32091",
      email: "#npnkd@ttxjo.nv",
      id: 85,
      name: "Adam",
      statusMessage: "working from home",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=39582",
      email: "#yvdith@ropbn.qe",
      id: 86,
      name: "Nathan",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=53330",
      email: "#obzbikv@mxalq.yg",
      id: 87,
      name: "David",
      statusMessage: "watching TV",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=61997",
      email: "#tssheq@qkrmf.nj",
      id: 88,
      name: "Thomas",
      statusMessage: "playing games",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=73851",
      email: "#hsrxqlcf@flicb.ov",
      id: 89,
      name: "Roger",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=83745",
      email: "#hqashaemq@xbjgs.ro",
      id: 90,
      name: "Dan",
      statusMessage: "exercising",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=61433",
      email: "#lzzruyd@gcaar.im",
      id: 91,
      name: "Mark",
      statusMessage: "reading book",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=38426",
      email: "#llhbee@txyjl.db",
      id: 92,
      name: "Dan",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=38363",
      email: "#uisftvk@icpkd.wv",
      id: 93,
      name: "Fred",
      statusMessage: "reading book",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=47006",
      email: "#deslbven@latxk.hv",
      id: 94,
      name: "Aaron",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=97101",
      email: "#thlepnjn@ebcqv.va",
      id: 95,
      name: "Carl",
      statusMessage: "teaching programming",
    },
    {
      activity: "offline",
      avatarUrl: "https://i.pravatar.cc/150?u=43885",
      email: "#bommjj@ocrfk.zl",
      id: 96,
      name: "Larry",
      statusMessage: "watching TV",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=64652",
      email: "#ihsmuv@xlqnq.ym",
      id: 97,
      name: "Victor",
      statusMessage: "teaching programming",
    },
    {
      activity: "online",
      avatarUrl: "https://i.pravatar.cc/150?u=34544",
      email: "#ipjsb@xlomq.ah",
      id: 98,
      name: "Roger",
      statusMessage: "playing games",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=76891",
      email: "#mnkmzk@ibjvb.ft",
      id: 99,
      name: "David",
      statusMessage: "exercising",
    },
    {
      activity: "streaming",
      avatarUrl: "https://i.pravatar.cc/150?u=91230",
      email: "#oglhvga@xkjhg.mr",
      id: 100,
      name: "George",
      statusMessage: "reading book",
    },
  ];
  showStreamers(data2);
};
fetchStreamers();

//////////////////// PRICING ///////////////////////////

const prekidacOff = document.querySelector(".prekidac2");
const prekidacOn = document.querySelector(".prekidac");
const oldPrice = document.querySelectorAll(".oldprice");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const indPrice = document.querySelectorAll(".indPrice");
const famPrice = document.querySelectorAll(".famPr");
const coPrice = document.querySelectorAll(".coPr");
const oldReg = document.querySelectorAll(".oldReg");
const famReg = document.querySelectorAll(".famReg");
const coReg = document.querySelectorAll(".coReg");

let individual = 4.99;
let family = 9.99;
let couple = 6.99;
let packetTime = "Monthly";
let totalFamily = family;
let totalIndividual = individual;
let totalCouple = couple;
let discountIndividual = 0.0;
let discountFamily = 0.0;
let discountCouple = 0.0;

let indYearReg = individual * 12;
let famYearReg = family * 12;
let coupleYearReg = couple * 12;

let individualYear = (individual * 12 - 0.2 * (individual * 12)).toFixed(2);
let famYear = (family * 12 - 0.2 * (family * 12)).toFixed(2);
let coupleYear = (couple * 12 - 0.2 * (couple * 12)).toFixed(2);

indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
famPrice.forEach((el) => (el.innerHTML = `${family}€`));
coPrice.forEach((el) => (el.innerHTML = `${couple}€`));
prekidacOff.addEventListener("click", function () {
  prekidacOff.style.display = "none";
  prekidacOn.style.display = "flex";
  month.style.fontWeight = "400";
  year.style.fontWeight = "600";

  packetTime = "Yearly";

  individual = individualYear;
  family = famYear;
  couple = coupleYear;

  indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
  famPrice.forEach((el) => (el.innerHTML = `${family}€`));
  coPrice.forEach((el) => (el.innerHTML = `${couple}€`));

  individual = indYearReg;
  family = famYearReg;
  couple = coupleYearReg;

  discountIndividual = (indYearReg - individualYear).toFixed(2);
  discountFamily = (famYearReg - famYear).toFixed(2);
  discountCouple = (coupleYearReg - coupleYear).toFixed(2);

  totalIndividual = individualYear;
  totalFamily = famYear;
  totalCouple = coupleYear;

  oldPrice.forEach((el) => {
    el.style.opacity = "1";
  });
  oldReg.forEach((el) => (el.innerHTML = `${indYearReg}€`));
  famReg.forEach((el) => (el.innerHTML = `${famYearReg}€`));
  coReg.forEach((el) => (el.innerHTML = `${coupleYearReg}€`));
});

prekidacOn.addEventListener("click", function () {
  prekidacOff.style.display = "flex";
  prekidacOn.style.display = "none";
  month.style.fontWeight = "600";
  year.style.fontWeight = "400";

  packetTime = "Monthly";
  individual = 4.99;
  family = 9.99;
  couple = 6.99;

  totalFamily = family;
  totalIndividual = individual;
  totalCouple = couple;

  discountIndividual = 0.0;
  discountFamily = 0.0;
  discountCouple = 0.0;

  indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
  famPrice.forEach((el) => (el.innerHTML = `${family}€`));
  coPrice.forEach((el) => (el.innerHTML = `${couple}€`));

  oldPrice.forEach((el) => {
    el.style.opacity = "0";
  });
});
///////////////////// ORDER FORM ///////////////////////////////////

const Individual = document.querySelectorAll(".choose1");
const Family = document.querySelectorAll(".choose2");
const Couple = document.querySelectorAll(".choose3");
const paketTip = document.querySelector(".paketTip");
const paketVrijeme = document.querySelector(".paketVrijeme");
const paketCijena = document.querySelector(".packet-price");
const subtotal = document.querySelector(".subtotal");
const discount = document.querySelector(".discount");
const totalPrice = document.querySelector(".totalPrice");
const familyPaket = "FAMILY";
const couplePaket = "COUPLE";
const individualPaket = "INDIVIDUAL";

Individual.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = individualPaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountIndividual}€`;
    paketCijena.innerHTML = `${individual}€`;
    subtotal.innerHTML = `${individual}€`;
    totalPrice.innerHTML = `${totalIndividual}€`;
  })
);

Couple.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = couplePaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountCouple}€`;
    paketCijena.innerHTML = `${couple}€`;
    subtotal.innerHTML = `${couple}€`;
    totalPrice.innerHTML = `${totalCouple}€`;
  })
);

Family.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = individualPaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountFamily}€`;
    paketCijena.innerHTML = `${family}€`;
    subtotal.innerHTML = `${family}€`;
    totalPrice.innerHTML = `${totalFamily}€`;
  })
);

//////////////////////////////// SLIDER //////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(1);
    createDots();

    activateDot(1);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////// GO TO TOP //////////////////////////////////

const goToTop = document.querySelector(".goToTop");

goToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

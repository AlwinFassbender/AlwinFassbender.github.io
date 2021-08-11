'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1d1e4bac9ed0f0a33d209104496873a",
"index.html": "eba260e0efd1f06a58dcb8b6db19c309",
"/": "eba260e0efd1f06a58dcb8b6db19c309",
"LICENSE": "df7f55710d64f72a84c837cfda2c30e9",
"main.dart.js": "00af69c893d9c98088baccab04cc9d59",
"README.md": "a3125b6ddb5a394725c5d8549cf07fb3",
"icons/Icon-192.png": "32e06a37cae63a0caf0aa1d68637d774",
"icons/favicon.png": "065b9f87841f92a0edcdc2fa3f0d1d4a",
"icons/Icon-512.png": "b48f25da0718e0ade9431cc93e06910b",
"manifest.json": "5898fb99700c77e7095eff5a5e0b0e49",
".git/config": "1d472865da65bc945219a8df4934c795",
".git/objects/92/046111a485c8b90bbbd672b787c4bd122a6252": "ecb2228086a62188bf84641f192a7221",
".git/objects/0c/938d800fff4391ad115538b60ae05175ba4eac": "4e25045d79ffcd82b6744437f82ce6f7",
".git/objects/0c/c6bbf26587adef700d558113fd1e1c75ebcb0d": "9ca0b466338957191a8804874668203f",
".git/objects/66/14fd98da8c9057c9d1069e26607d33e372e628": "d660c8c21b207e6531cc7f3dba6b25a7",
".git/objects/66/c4b0c8923d5b77a017bc8cc72695ac37fcbedf": "a872ca2090fd231d07c703b8d1442405",
".git/objects/57/08a25e4542dc315325a799c074d7c842d9cd52": "8b521ba92d1cd279ce034cd141242776",
".git/objects/9e/44b46bbca68ec73b46c4ba393545a06661b568": "8561ef239351198477fff6b195c25e16",
".git/objects/32/5bbd4ecf9d39ffa58ee662740fd989c3577205": "719f883edc862fc761418bf46f6ccfe6",
".git/objects/69/425dfb2dc81992e9d0a095deffdeb545c218f6": "f16b1eb2a225e979b7e15abacaed1f37",
".git/objects/56/3bb66d675c9694f947e926baec7e084b7a9413": "aba3d689f0187af5f07a3cfc790035d5",
".git/objects/56/08844231377fda959b03d2085dc512182c6af3": "3343ef6f497d4aaf6623ef9cb2046964",
".git/objects/51/af7f32d1f351e28050751f007451ebf66be976": "c483bdbc9bbffd041b7ed53197dc35c0",
".git/objects/51/c8ac5bcdd8b41cd1fd7ae7df8396e7c4a81459": "9294779d55ab4b4c1f3c6992589478c5",
".git/objects/51/27f24f25c049897967ddaeae91ad334dbc9028": "485816d5b306229a5d54b6da9074b648",
".git/objects/3d/15d7a70e7cfd0cf6462793c08320443c182a47": "156efc89d2d5e198f77b53cd2557a42f",
".git/objects/58/5c527518d378dd8ba6cc03f6d850c06d33def6": "24df74d2943177a3ae30b020d1307137",
".git/objects/94/57715b7cbf5d577fbfae857e1c20c528219938": "b5ed80c6800578af34152dc565bf18a7",
".git/objects/0e/8752414cc1da8624870a6f66d4b1b759aabaad": "43e3c0760022cba89831e283b191eb47",
".git/objects/60/5b1b8d20ff2088d7881317722328fc8550ab10": "f263c924b9bef96a53d6ee8e76db757e",
".git/objects/33/796c81f19f3796213bb73987558fe4175014ea": "5673d8bfd520a0c5f1fdff948500cd48",
".git/objects/33/32ac3a127aedfe0439245985884d7d799551ff": "719dbb22787f5e3f1ec43e8de9843b28",
".git/objects/05/a2bf20a7409c800ddcc7d061ba079eb9d7464f": "673471588974c2599eced7b415cc7c21",
".git/objects/9c/7a5b3e8dc4dabfed1f559506103ad758cead5e": "a13d432ec91e9a88f873922b987a6f19",
".git/objects/02/f978d6e5d35903e00394f71ed33937f0bf0bb7": "b37cf3bf72af6ed4a9f5e4e8dcf1ced3",
".git/objects/02/a7bbd8cbcff5db85ed3f5e36f145c58ca4c05f": "a3aea9adc1a7d32cc262da4138fbaf5e",
".git/objects/b2/bb86188a263a326cd012fe0a19567a3bf86ef6": "29959a1d49f1ac093863ec92d02cc580",
".git/objects/ac/f6dff0d4808661599e16c9106b52d95a43fbd8": "6536632d0865269519c1129db2f1b7b7",
".git/objects/ad/e8dcf2a737330f67b833155a7b484b041d473b": "960920550873d71237cf0782fea4461f",
".git/objects/b3/0cb18ef466f604c74f00ac76cd11942579d64f": "8168524f363de9e8ae19a2945c5b64ea",
".git/objects/b3/17c89b1db2cfdddfacf8e561c9f8a6bde21ac5": "a86ac78acb5a09be8d3d207e1e5af5cf",
".git/objects/da/adbe68587ea5cf7a5f24a7dc5f8c474750849b": "126a2c715dfb89dcb24b8349d324a3e0",
".git/objects/b4/1388e4741184efacddbfdc39a1ffbe2802c0a9": "c6499fae9473dff1f3b68b4d8f2dd478",
".git/objects/b4/51ebc0ef11a8cf6627a0ea9b3f6443e99931f8": "32c2aeb7254e63212a07befc9792cd13",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/d1/96b2883e6cbc2c852d1ac49ea915c0c81aa8b5": "c835874045612e5b273ba0ab48e69835",
".git/objects/d6/5cb637bcf83e669491857fdeb28de3ed3e4e9d": "4b3497716ac8eba39db1578399dbcc70",
".git/objects/ae/67e4c940e21473311f69902a8e57442807cbfd": "13d14113fcf40b9fb65badf6ea2f382f",
".git/objects/ae/5474c87a3a88a5d0275c5efee7a4ad61403c53": "0f0a87c8905862c25c425fbb173d5597",
".git/objects/d8/aeed77707b8ebf72eb5f9eaf78f18560d698c9": "38a6d52fc5da2e2d35b429deca416bf6",
".git/objects/ab/2b67a761c77af9dbdc20fce2f808658f264fad": "b01b30531b6087d18805e8a0ea78e5b3",
".git/objects/e2/4adb431521f921b8da29ee8f0dae7d1ff67ca4": "4f57ea236e50667de6707abac6b9578e",
".git/objects/f3/b0b0989cfa5b8e9c69b44963489fd263c5f753": "724ebf0142b12d18d3ade5c0baf8b0d3",
".git/objects/f3/d05f39df3b67693738e7b3eb07eee51f707643": "46fa06145fdcec6c813974a050a7026f",
".git/objects/c7/64ff5ebc8f744c7bf2b2563462d0ff4ad077a9": "c2af1a1dcaf4ffc78acf1b05f71b2013",
".git/objects/ee/46df1d6a6dcd63149d01976052caa69fe9d5c5": "f9bff687accf92082668b627a59fc9e9",
".git/objects/c9/2054665049b27b40ef5bf1c382cfabd51048e2": "ac7f2c4aeacb61cb39e8a53fd200be2c",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/a992fc4520e9f10e4a6423f61ce74e520b34c9": "00b52e81a50034faa078802e680d3738",
".git/objects/f2/875c53684fe8552f4f31dadd7abb47823cab86": "40d16f8f1b5258b53ce1fb32a5d8c1b1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c6/fe5fb2c7d2ff28baadaa4310c51a6957638bc9": "5564b8e40fa547e56aaabe26b88044a9",
".git/objects/c6/3edd11c83b86068f79c43b053605919839c0c7": "57b68bf43ae5b29a6fe109d93c053b22",
".git/objects/18/575bea3007e8373da619709f00879dc1e8d48e": "90918c47a6b0d5181afb075f937e0390",
".git/objects/27/26b0a0005b6b6041d7f530de3e755bfc4c7dad": "e3329a46d1b67066078b234bf35b0833",
".git/objects/pack/pack-25ce13baae58ff9c3e8cdbea676bf46441ef610a.idx": "64c4cd85417d8ed80c20e335bc99fcc6",
".git/objects/pack/pack-25ce13baae58ff9c3e8cdbea676bf46441ef610a.pack": "5325fed38d76f060b8a95b99d495c252",
".git/objects/7d/e8107eeab98e7c9329b115495fd8502a007dbd": "43d582582b6711920c03e3be04914246",
".git/objects/7d/f7e59b4564a1b13b808eb6e70f3d99a6400d03": "3f5af61181af07c2b63766c5b51d37a5",
".git/objects/89/21888f8ca5c4619af27355036954e6288cc923": "8131400c78e8b040f0d8ab6a5dc68fe9",
".git/objects/1f/2e851d3a6e95e8b502d0853bdced99c805ed8f": "a25a233579491980d3fa0c26488c9308",
".git/objects/87/0920927824f0939477a84db38ac53cae0c8cf8": "4d77a6daa36d3d0458062bc83ca6707b",
".git/objects/80/89a5225a80c9786b80d9171e676ad6d676ecdf": "4a2edeee03314705e2270decc84791ad",
".git/objects/28/902497cbdb6bfe821c8fa20090812fbbc3edf0": "d39db187517b735fd5740f510674fcd4",
".git/objects/17/7ee2d9f731732529ebba01ac56554a442aeef9": "d9f1ef2f9b85e5bb41e788962a4c2971",
".git/objects/7b/02ac919ec20c2c86af5aabb2cc6c45d78f3fc1": "b12e0f7827174ce9a95d4f38985b4626",
".git/objects/8f/46ca7a1d9a35c55936c1edae2491aad47c7e4d": "bdff75de9aebea15d550413967f4b42a",
".git/objects/8a/cbf0c7b07bd70be30eeae61e8e052acf397cb6": "0140f9894ee815fd15944a5533b80f46",
".git/objects/8a/ae80a344590ef39f47bd832ff1d8b15e41e097": "5cd3dc4584e523ccece2c60ff014e463",
".git/objects/7e/3597ab610a17195616e92759f5c3896ccbb355": "a1e14f4de34b65ebdefd192b7b77e061",
".git/objects/4d/f5bf6913b22d998af97936990ccf9fe9d7f20f": "01b19bbf5d22165dea94943f99293714",
".git/objects/4d/34f73ae1d12fc42d891e653d28fa68bef396bb": "9d613a17c50b457116a7af0413e8b3e3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/13d17a52395391dc69e555ccaf062b103627d6": "3eb065b5cb1535a0ba946b8f39eaafef",
".git/objects/72/46281cccb754cbc1fbb7dccbd8230913124eb7": "1b3fd3207606be1909e55006baf7ca52",
".git/objects/2f/7d5d1bbae17f5197cbafdc67077c34a743633b": "02a2af97770d7a5e60f818a4df9d1165",
".git/objects/43/46828ba990b66bdf0c61b515491ca5dadedacf": "ce091cfbf03aa14502317297b1707834",
".git/objects/91/e33060f4f3c3502e57b68bd3ce3752786ebdc5": "c940c55a9817063de837174aa39b8c0f",
".git/objects/65/907b41af7f4bdca6859a4d372544e85cb5ff9a": "88ff813148e1b291246c3e24b6c63bc6",
".git/objects/62/81858d8238b5bedb9544bd51b6ea9f7bca7784": "c6037d9e70447510672d8d7ce1cb3ff9",
".git/objects/96/6325c223e09c8288dadad5d2fd74cc483a9954": "d7f96a6bb7b4cdb5c14ae2c6e711363b",
".git/objects/3f/8fafab2ceaeb020b0f92d75306017e0dc5a31b": "29427ea6c6900685e9365b41709ff6a6",
".git/objects/5e/b650f8d1a38d31adc063e1940ee27caf0aff86": "0aba3a6dae62811c0ce53f2238835fc1",
".git/objects/5b/50c412d7c3e6066ce96427bf55f7bfa43bff03": "fc5991e5cb5de3e407b66a97980e19c4",
".git/objects/08/76d1a069dabb1eedc1f04a8aaa8b627fa409d3": "f09b3996a3aa470769499a024dc702bb",
".git/objects/06/78d7ab608cce05bb7bd909ac1016da9fd39b54": "769c9d820402162024be793689402295",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fd6ebc97d7ce694fe0355351d7483de80583f4": "d40212d8795423b530cf8fb7239732ea",
".git/objects/d4/042990c4b5f6ae39f7eb3d3ab015ced25dc75b": "9089a494d25fed5b97a25b8f09b93bd2",
".git/objects/d4/fc06524780f3fe917ddd1eceb59e36a2d1e821": "95315e26b64c9f3049741127ca6086a6",
".git/objects/dc/bc497215b5331b40e66875a16f89cdb04ba782": "b86b068be60b6970d8d0a51dd201e74d",
".git/objects/dc/9a2d291f5040edda6993b680621a2bec41b8c4": "dae2be65ad8fcfbf6239f2c365ad2eed",
".git/objects/d5/e95f727b70f807391f603c50790d52a77d98a5": "d8d1752586fe5b782f6a8b65a68d5a4c",
".git/objects/aa/7e36eee62b0d8442c93c1ee05b4e7b3d133e58": "e86ea1c12a67e809f0205d5fc8c704f7",
".git/objects/af/1553f168975433abebf81a656c08e8af60b160": "aa55009753a553d1e93bebca97fa7763",
".git/objects/b7/9a89206cf409f515171ee25148aebe600bf9e6": "2e1dfc73b3452a0d763873c15cd989d2",
".git/objects/b7/2e57f81bab5b55f7cfe33c69f7c8277458f0b6": "b9211fc5c6a1199825d3f19aff84faeb",
".git/objects/db/74e913c40f8c4d28269793112d18ddcb60eac5": "16287bfb0d4a6532509ac801ab13b8b0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/69ab34c54b35ceeb694b2b9cb6184aab85a001": "fd30c1c135d1ef2b15531a707e783e1b",
".git/objects/c4/39aac7a5aa7a48384e75464375a5b11219d821": "199c1506b87fce6eeff539ad74d7cfba",
".git/objects/f0/3604fc4b9bbaf4b41a7b3592a5de80b246d358": "18fc410815eb42a6d815a006307f5c1f",
".git/objects/f0/a8728462e68901a1a2bbca1244bea978481843": "e56ba58947afd7009a1eaed43be43594",
".git/objects/e8/306390ec4ea85af85c046d35b5c972d6620c8e": "be1e21325aba4e01c29bc11323ea9a68",
".git/objects/ff/44a23691fb0c2ffd099cf9f877d62ba2ef84f8": "ecf14ee013974b8aa50e8b5876adac5c",
".git/objects/c5/45430a8ffd82f77d6f4fc42deb3d205d2dce4e": "6e688328b0b0df008841648b412d260d",
".git/objects/c5/57560fbe6deebe3c1c9d227abba8886bfca7dc": "31d245226005bee17612f28fa2e93ae5",
".git/objects/f6/89770e08ea958468be6416bb6078d2a8a34403": "1ca577d2a2062aab00cbfd42f3b62a28",
".git/objects/e9/6471c822e19ceb7a157537d0d7d0de92962826": "5812cca6f8caf5ce5011f4dcb2ed65a7",
".git/objects/e7/268fb8c0bf471f59520ac4dd36ba4907a291dc": "dccb70bc26e15a13162381e546848dd0",
".git/objects/e0/c63818195f8298dfe55749e0b5edb677708e34": "8b828f18804c35b939f5c4cf9579a5cf",
".git/objects/46/d229b1b6537d9e017041ad8f572e5790f09891": "6b429201d6126896cd346f28bdeadb5e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c1b74efeb8f4e5b4dc9be5cb6f6de10747f7d5": "91152545f54c964b1086f3d3c5d3d9b6",
".git/objects/79/5a55a71700f0ac64debc4f3db795a7ae425080": "acc1723ffaef8326c6de6523e10b3d56",
".git/objects/77/450c3c7e4a915e0541dfd16df7d0e2e404286d": "572ce9a884327d0222611bb7157bf21a",
".git/objects/48/e7c387f78d55538cb2a9b388f1ea8dde0e7cfa": "e32cd7f246651a73d4aa726277c8778d",
".git/objects/48/bc5dfe49ea4aa4f3b41275a9b775c1f9c24c7a": "52d3b61bba07cb137a342b649faf17be",
".git/objects/1e/df61a8226ebb253ef3f56ad4d3c75aab01fe13": "8ae9de312b8218021ab325cf4ea13c12",
".git/objects/1e/f272d8cd0a44d1e3388cd3324d2d44e712bfbf": "a93a385235aafe8e9bd65a0b047a5a31",
".git/objects/24/acde66904519f006ea163178de3a7839d9945a": "41ec0c4862379c1d6ff17096e86f6e7b",
".git/objects/4f/ddd3594273bb88eae34b55a2ac68ce82df31e7": "a8ff1ff484f089529a2e274ce65b706a",
".git/objects/15/fa59c77726a48785352313414735a96f45cbf6": "78b6377874001c0b59f505727d755c74",
".git/objects/15/00cd04e18eb396bb75758c3a83a1d82f59900c": "d50b795685a2cda95a6eb56ee4704707",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/ea613ec5f33a084c212e36f4fe423642e15530": "786748b85dd4cf24d0aab895f03806c0",
".git/objects/1d/6588256987373fa072a46563daf42783004def": "ffcf59c9b288ee259f0254ea61db0736",
".git/objects/1d/8b4394847e238d4a8aef13342aafa5dac5a1c2": "19a5a30ef01e370a5f91d2782acbb91f",
".git/objects/71/0ba68e8507c6cb718ba8d0edddb50ae53d57b5": "b12c02d2f5b1e7cfeffea2a549424f27",
".git/objects/76/4b287eb1d4a1d0fe53121567c20fe5bc9b56d3": "242dd8f66baec49929bb6a5034ff0a2c",
".git/objects/76/0c59961c4565f315d27ac0ad4108368ad45f3c": "e11beab99599182e7abdfc43cd2badad",
".git/objects/76/0f39a66a49283f34dd1ef8f7451a436dac8c7f": "f1e81106e3927499a17803fd717450ac",
".git/objects/76/415eb0a47c8fae3edcd13c54ecd439c0c258f9": "bf90723ccf311b295d5ebbb5749b7633",
".git/objects/49/6ee2ca6a2f08396a4076fe43dedf3dc0da8b6d": "6589e8096e1d164d9dddd885d15a514e",
".git/objects/40/82dd6d6c1291a1eabbc605a266f33fcd6ae4b2": "d2b83402cfedf4f7be1e1fcff37dacb5",
".git/objects/40/f8cd564e22c2d7fca8c6ac0dd01715d2f18527": "a6d095338f738c7b7c4792c392e734fb",
".git/objects/2e/f46d7e0315fc60d8fa6d6ad026ab19fc56f162": "46e37ebf84a3b15b5f3d583be563f025",
".git/objects/13/be3736fe0d7e67419220d3c7d4b78ea37f7f13": "ddd59e824da004c621f628334269dc6b",
".git/objects/13/c0a0b7bc8fdbadfbd56d465368ff19cb7d189a": "6059e4b81db47bb99561124dbf5b814b",
".git/objects/7f/a18a822a38d682dea8cce6dcce884f87674bb2": "073fcedcf0c305020a5ca1a7a7ee36eb",
".git/objects/22/aaa165919b10c42402e86cfcb63bcbb3e10c03": "0b64c54f21d574c0c4dc8b13942d1307",
".git/objects/25/c4356a596e8c229e7034a476a902f396b32046": "4c8bd843180951a3fff0596231fca3be",
".git/objects/25/dca9ac99093e3ecd3a6dbf8efcc03a0100020b": "87d8f1ca3c1885d78203ec8bc61350e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98e4c91c3176094af13c9b90151f47e7",
".git/logs/refs/heads/main": "888505c7a353c87cb949b71dd856cff7",
".git/logs/refs/remotes/page/master": "1b99bbc8d9fb61c5590bd1a6fe034a30",
".git/logs/refs/remotes/alwin_ssh/main": "9122e408aab51a1138d13af12cbf09b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "24306584832be42dfe3cddd0ebb1730f",
".git/refs/remotes/page/master": "096726c5b75eaf2fab9d7cd6e65dcd13",
".git/refs/remotes/alwin_ssh/main": "24306584832be42dfe3cddd0ebb1730f",
".git/index": "9e30599e6f1930f924791637b3e676e4",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "40e2d886c5758bd979ea591d3946c186",
".git/FETCH_HEAD": "c04b494c983c4cff61058c3776df0ae2",
"assets/AssetManifest.json": "5c8d11811567465dfc35526d72f3b4e9",
"assets/NOTICES": "150523907797d717b2284262d920b62b",
"assets/FontManifest.json": "74221364dc936e0acf66c8c0c64b6ea9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/speciesInfo.csv": "c2ca2ca94f32df0dcb75c3b652510276",
"assets/assets/images.csv": "11cfcce3ca742f7e59f8780b8bf195e1",
"assets/assets/info.txt": "7362c9c53cec739ac6286b96e6d09f45",
"assets/assets/fonts/Noto_Serif/NotoSerif-BoldItalic.ttf": "b458e9f281a4b584f8daaed5e74e7a58",
"assets/assets/fonts/Noto_Serif/NotoSerif-Regular.ttf": "d1c72e0e788cf2bbc1de53da57599bec",
"assets/assets/fonts/Noto_Serif/NotoSerif-Italic.ttf": "1d43d0f9b7b2e15a9639af5141bde606",
"assets/assets/fonts/Noto_Serif/NotoSerif-Bold.ttf": "77c225c157db0de7043cc9524bf5bd03"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

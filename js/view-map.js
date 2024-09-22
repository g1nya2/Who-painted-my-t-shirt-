// Define the course-specific maps
const courseMaps = {
    0: [
        {
            name: "1경-1",
            center: new kakao.maps.LatLng(35.900087940579276,128.55929069181593),
            lines: [
                [
                    new kakao.maps.LatLng(35.9034909756013,128.56508383497788),
                    new kakao.maps.LatLng(35.90291756783768,128.564828868867),
                    new kakao.maps.LatLng(35.90238712102084,128.56404310415243),
                    new kakao.maps.LatLng(35.90176600082885,128.56329987014485),
                    new kakao.maps.LatLng(35.90203353363326,128.5621310811102),
                    new kakao.maps.LatLng(35.90233651589283,128.5610072843051),
                    new kakao.maps.LatLng(35.90247444586822,128.56010175965773),
                    new kakao.maps.LatLng(35.90176838585408,128.55895815529024),
                    new kakao.maps.LatLng(35.90093302531685,128.558055704804),
                    new kakao.maps.LatLng(35.90001150588013,128.55823700252125),
                    new kakao.maps.LatLng(35.89927016906346,128.55842182923462),
                    new kakao.maps.LatLng(35.89847448960835,128.5586277381038),
                    new kakao.maps.LatLng(35.897951959089646,128.5586174919869),
                    new kakao.maps.LatLng(35.897440923790384,128.5577214455851),
                    new kakao.maps.LatLng(35.897055435390484,128.55687217066446),
                    new kakao.maps.LatLng(35.89672686533257,128.55580251354726),
                    new kakao.maps.LatLng(35.89634423050847,128.5547318077418),
                    new kakao.maps.LatLng(35.89609029297237,128.55346427490647),
                ]
            ]
        }
    ],
    1: [
        {
            name: "1경-2",
            center: new kakao.maps.LatLng(35.900087940579276,128.55929069181593),
            lines: [
                [
                    new kakao.maps.LatLng(35.90352859983308,128.56496273816188),
                    new kakao.maps.LatLng(35.90335361309473,128.56456055131804),
                    new kakao.maps.LatLng(35.90303794111509,128.56388977100647),
                    new kakao.maps.LatLng(35.902758013366565,128.56324185120405),
                    new kakao.maps.LatLng(35.9023353771257,128.56248037006222),
                    new kakao.maps.LatLng(35.90198538497649,128.56167602069553),
                    new kakao.maps.LatLng(35.90138601040534,128.56064526327708),
                    new kakao.maps.LatLng(35.900943612242294,128.56001633094903),
                    new kakao.maps.LatLng(35.900307035858766,128.55907347569467),
                    new kakao.maps.LatLng(35.899844885890374,128.55857708136782),
                    new kakao.maps.LatLng(35.89929494111534,128.55790176254317),
                    new kakao.maps.LatLng(35.898851091451654,128.55738358902283),
                    new kakao.maps.LatLng(35.89819446513798,128.5565954434204),
                    new kakao.maps.LatLng(35.89775233131803,128.5559444136441),
                    new kakao.maps.LatLng(35.897274443954956,128.5552705409768),
                    new kakao.maps.LatLng(35.896726486171566,128.5544402528666),
                    new kakao.maps.LatLng(35.89639101711587,128.55390208398745),
                    new kakao.maps.LatLng(35.896076142081995,128.55316496953148),
                ]
            ]
        }
    ],
    2: [
        {
            name: "1경-3",
            center: new kakao.maps.LatLng(35.901398270524425,128.56108853888963),
            lines: [
                [
                    new kakao.maps.LatLng(35.90359151927458,128.56497505336364),
                    new kakao.maps.LatLng(35.903580716772886,128.56442103214934),
                    new kakao.maps.LatLng(35.90294546110483,128.5647629616051),
                    new kakao.maps.LatLng(35.90239468758721,128.56415401311472),
                    new kakao.maps.LatLng(35.90191396474727,128.56370151443272),
                    new kakao.maps.LatLng(35.901635188903136,128.56296502004062),
                    new kakao.maps.LatLng(35.90088966263888,128.5620864467049),
                    new kakao.maps.LatLng(35.90014297756517,128.56129647281892),
                    new kakao.maps.LatLng(35.89959420001273,128.5605325507804),
                    new kakao.maps.LatLng(35.89899165012914,128.5597454330693),
                    new kakao.maps.LatLng(35.89854694583504,128.55929368752737),
                    new kakao.maps.LatLng(35.89920969184499,128.55822128319377),
                    new kakao.maps.LatLng(35.89988814912773,128.55732637947833),
                    new kakao.maps.LatLng(35.90104870721769,128.55816873085305),
                    new kakao.maps.LatLng(35.90168816624545,128.55889012625826),
                    new kakao.maps.LatLng(35.90115182948299,128.55994288702098),
                    new kakao.maps.LatLng(35.90205492921775,128.56117896892366),
                    new kakao.maps.LatLng(35.90269132699571,128.56074842819294),
                    new kakao.maps.LatLng(35.90301927396132,128.5618624783837),
                    new kakao.maps.LatLng(35.90336551688947,128.56295474518583),
                    new kakao.maps.LatLng(35.903498415720975,128.56382129941625),
                ]
            ]
        }
    ],
    3: [
        {
            name: "2경-1",
            center: new kakao.maps.LatLng(35.889884431216075,128.59990189102717),
            lines: [
                [
                    new kakao.maps.LatLng(35.89081120314001,128.59696092466518),
                    new kakao.maps.LatLng(35.8907743941283,128.59701832556104),
                    new kakao.maps.LatLng(35.890758002574394,128.59706506220488),
                    new kakao.maps.LatLng(35.89074611549821,128.59711188931328),
                    new kakao.maps.LatLng(35.890759371281334,128.59713153566324),
                    new kakao.maps.LatLng(35.890747741890145,128.59715898786843),
                    new kakao.maps.LatLng(35.89072463035626,128.59720282089003),
                    new kakao.maps.LatLng(35.89067825996745,128.59730155821293),
                    new kakao.maps.LatLng(35.890628827174176,128.59746114259113),
                    new kakao.maps.LatLng(35.89059301813478,128.5976126947945),
                    new kakao.maps.LatLng(35.89059172918897,128.5977095690477),
                    new kakao.maps.LatLng(35.890590476995406,128.59780367545923),
                    new kakao.maps.LatLng(35.89058257848447,128.59788934256682),
                    new kakao.maps.LatLng(35.890549242171446,128.5980243327345),
                    new kakao.maps.LatLng(35.890491167834405,128.59815605696568),
                    new kakao.maps.LatLng(35.89046181495085,128.59816100409932),
                    new kakao.maps.LatLng(35.89042120083361,128.59816572487196),
                    new kakao.maps.LatLng(35.8904117129411,128.5982015255605),
                    new kakao.maps.LatLng(35.89040152506408,128.598289914979),
                    new kakao.maps.LatLng(35.89037568192702,128.59836968394805),
                    new kakao.maps.LatLng(35.89034304515396,128.59845208485123),
                    new kakao.maps.LatLng(35.89031506020565,128.5985235049488),
                    new kakao.maps.LatLng(35.89029645268074,128.59856742788614),
                    new kakao.maps.LatLng(35.89027961834869,128.59864737779347),
                    new kakao.maps.LatLng(35.890260789675615,128.598707907618),
                    new kakao.maps.LatLng(35.89022423781953,128.59874593253448),
                    new kakao.maps.LatLng(35.89008756303597,128.5991972277775),
                    new kakao.maps.LatLng(35.89006408214699,128.5992687379739),
                    new kakao.maps.LatLng(35.89002258325203,128.5993398856935),
                    new kakao.maps.LatLng(35.88997621115436,128.59943862084566),
                    new kakao.maps.LatLng(35.88987962591656,128.5995861796233),
                    new kakao.maps.LatLng(35.88977750351583,128.59981114593916),
                    new kakao.maps.LatLng(35.88921201684389,128.60065801128553),
                    new kakao.maps.LatLng(35.8891656805985,128.60075397685645),
                    new kakao.maps.LatLng(35.88917753363237,128.60087879911777),
                    new kakao.maps.LatLng(35.88921678248904,128.60097648777585),
                    new kakao.maps.LatLng(35.88920755316645,128.60116179319246),
                ]
            ]
        }
    ],
    4: [
        {
            name: "2경-2",
            center: new kakao.maps.LatLng(35.889884431216075,128.59990189102717),
            lines: [
                [
                    new kakao.maps.LatLng(35.89081759176954,128.5969887388252),
                    new kakao.maps.LatLng(35.89078377785279,128.5971597117662),
                    new kakao.maps.LatLng(35.890619288022215,128.59817801229508),
                    new kakao.maps.LatLng(35.89056531747075,128.59850915638987),
                    new kakao.maps.LatLng(35.89051005195656,128.59876829109456),
                    new kakao.maps.LatLng(35.890412210341765,128.5988410750391),
                    new kakao.maps.LatLng(35.8903943766435,128.59882687357742),
                    new kakao.maps.LatLng(35.89019862705324,128.59931574123243),
                    new kakao.maps.LatLng(35.890159454107035,128.599381398713),
                    new kakao.maps.LatLng(35.8898074148721,128.600102445268),
                    new kakao.maps.LatLng(35.88965917475968,128.60023788912827),
                    new kakao.maps.LatLng(35.88950469618174,128.6005033281517),
                    new kakao.maps.LatLng(35.88975827562277,128.6004087649325),
                ]
            ]
        }
    ],
    5: [
        {
            name: "2경-3",
            center: new kakao.maps.LatLng(35.889884431216075,128.59990189102717),
            lines: [
                [
                    new kakao.maps.LatLng(35.88887592051309,128.60136552212333),
                    new kakao.maps.LatLng(35.88889755636641,128.6012635228011),
                    new kakao.maps.LatLng(35.88898210733913,128.60117386443093),
                    new kakao.maps.LatLng(35.889107604587096,128.60105457663195),
                    new kakao.maps.LatLng(35.88918333094511,128.6009508974987),
                    new kakao.maps.LatLng(35.8895070591006,128.60049507010535),
                    new kakao.maps.LatLng(35.88964307707418,128.60026248201916),
                    new kakao.maps.LatLng(35.889779982222635,128.60013234721038),
                    new kakao.maps.LatLng(35.88996938685652,128.59978178417336),
                    new kakao.maps.LatLng(35.89017093653092,128.5993650183278),
                    new kakao.maps.LatLng(35.89024263622349,128.59922526389698),
                    new kakao.maps.LatLng(35.890401833590616,128.59877442072326),
                    new kakao.maps.LatLng(35.89051757345361,128.59837253642416),
                    new kakao.maps.LatLng(35.890495119745395,128.59819766498444),
                    new kakao.maps.LatLng(35.8905961656305,128.59788407847955),
                    new kakao.maps.LatLng(35.89060213760117,128.59760457231053),
                ]
            ]
        }
    ],
    6: [
        {
            name: "3경-1",
            center: new kakao.maps.LatLng(35.93245677894916,128.56708680608907),
            lines: [
                [
                    new kakao.maps.LatLng(35.93290397728938,128.5673449397325),
                    new kakao.maps.LatLng(35.932833206726414,128.5672438202293),
                    new kakao.maps.LatLng(35.93279411241729,128.56713224598585),
                    new kakao.maps.LatLng(35.93274157672782,128.56701486640767),
                    new kakao.maps.LatLng(35.93265257082339,128.56693000781218),
                    new kakao.maps.LatLng(35.9325406083609,128.56687793693868),
                    new kakao.maps.LatLng(35.93208497818597,128.56657532019656),
                    new kakao.maps.LatLng(35.93191366142443,128.566583019676),
                    new kakao.maps.LatLng(35.93180911738211,128.5666529773708),
                ]
            ]
        }
    ],
    7: [
        {
            name: "3경-2",
            center: new kakao.maps.LatLng(35.93208169373141,128.5675170676111),
            lines: [
                [
                    new kakao.maps.LatLng(35.93177869199763,128.56691275934878),
                    new kakao.maps.LatLng(35.93187113821427,128.56742426925558),
                    new kakao.maps.LatLng(35.931833240324,128.5679110457613),
                    new kakao.maps.LatLng(35.93185912760565,128.5683436813638),
                    new kakao.maps.LatLng(35.931887474577714,128.56858800388864),
                ]
            ]
        }
    ],
    8: [
        {
            name: "3경-3",
            center: new kakao.maps.LatLng(35.93208169373141,128.5675170676111),
            lines: [
                [
                    new kakao.maps.LatLng(35.931907644542804,128.5687684543174),
                    new kakao.maps.LatLng(35.93189326221867,128.56883465079792),
                    new kakao.maps.LatLng(35.931821479385015,128.5688110720406),
                    new kakao.maps.LatLng(35.93178195216275,128.56873273023623),
                    new kakao.maps.LatLng(35.93177547667531,128.56853870055565),
                    new kakao.maps.LatLng(35.931759629944885,128.56837218600992),
                    new kakao.maps.LatLng(35.93177791974943,128.56800690405484),
                    new kakao.maps.LatLng(35.931799752885944,128.56737022933925),
                    new kakao.maps.LatLng(35.93170395874923,128.56677001314605),
                    new kakao.maps.LatLng(35.931746717928874,128.5662556324676),
                ]
            ]
        }
    ],
    9: [
        {
            name: "4경-1",
            center: new kakao.maps.LatLng(35.90022573180077,128.602887249244),
            lines: [
                [
                    new kakao.maps.LatLng(35.89803446905307,128.5989445417045),
                    new kakao.maps.LatLng(35.89804615535767,128.60009661207678),
                    new kakao.maps.LatLng(35.898184842418964,128.6015225872422),
                    new kakao.maps.LatLng(35.89789071670708,128.60262973004532),
                    new kakao.maps.LatLng(35.89810529684879,128.60343148110053),
                    new kakao.maps.LatLng(35.89870903152097,128.6041081856453),
                    new kakao.maps.LatLng(35.89862010922795,128.60469338784483),
                    new kakao.maps.LatLng(35.89881724957525,128.60545049764548),
                    new kakao.maps.LatLng(35.899021493906055,128.6056761324032),
                    new kakao.maps.LatLng(35.89987368441836,128.60461901661085),
                    new kakao.maps.LatLng(35.900726922860876,128.6055056856222),
                    new kakao.maps.LatLng(35.9015904482419,128.60562281217878),
                    new kakao.maps.LatLng(35.90194111771884,128.60601755224647),
                    new kakao.maps.LatLng(35.902381638798396,128.60474718402014),
                    new kakao.maps.LatLng(35.90232125630587,128.60387096649558),
                    new kakao.maps.LatLng(35.90209462741424,128.60397161388136),
                    new kakao.maps.LatLng(35.90124950776853,128.60247594113372),
                    new kakao.maps.LatLng(35.90044077096936,128.6023045756244),
                    new kakao.maps.LatLng(35.900051911886116,128.60173187989193),
                    new kakao.maps.LatLng(35.90033192775887,128.601006529765),
                    new kakao.maps.LatLng(35.90023976764534,128.60048411809385),
                    new kakao.maps.LatLng(35.89974293956668,128.5998981836628),
                    new kakao.maps.LatLng(35.89966229077837,128.59918772412183),
                    new kakao.maps.LatLng(35.89925023774523,128.59900222543746),
                    new kakao.maps.LatLng(35.897974632302834,128.59802408554424),
                    new kakao.maps.LatLng(35.89784273948509,128.59777777702158),
                    new kakao.maps.LatLng(35.897440134810076,128.5975592543517),
                    new kakao.maps.LatLng(35.897494061662485,128.5982470046202),
                    new kakao.maps.LatLng(35.89799546888558,128.59848966849702),
                    new kakao.maps.LatLng(35.89801556637544,128.5990106134732),

                ]
            ]
        }
    ],
    10: [
        {
            name: "4경-2",
            center: new kakao.maps.LatLng(35.8999299077142,128.5995613724726),
            lines: [
                [
                    new kakao.maps.LatLng(35.896983273751715,128.59599954497006),
                    new kakao.maps.LatLng(35.896725134266156,128.5964373684537),
                    new kakao.maps.LatLng(35.8972250060104,128.5969651747509),
                    new kakao.maps.LatLng(35.897369603948974,128.59727264916168),
                    new kakao.maps.LatLng(35.897386928024474,128.59749450230146),
                    new kakao.maps.LatLng(35.90001604432695,128.5978297721806),
                    new kakao.maps.LatLng(35.901372420004186,128.59815608774096),
                    new kakao.maps.LatLng(35.90150478653127,128.60242294028842),
                    new kakao.maps.LatLng(35.901367583170654,128.6025752351103),
                    new kakao.maps.LatLng(35.9006357921088,128.60237773039472),
                    new kakao.maps.LatLng(35.90005907482095,128.6017015662992),
                    new kakao.maps.LatLng(35.90038782770988,128.60103811387359),
                    new kakao.maps.LatLng(35.900145245908384,128.60030777352574),
                    new kakao.maps.LatLng(35.89978584281073,128.59989074059126),
                    new kakao.maps.LatLng(35.89966967428917,128.5991408015236),
                    new kakao.maps.LatLng(35.89927519673937,128.59898888316548),
                    new kakao.maps.LatLng(35.899364702887546,128.59937278938273),
                    new kakao.maps.LatLng(35.899577161109015,128.59999729552422),
                    new kakao.maps.LatLng(35.898676568145916,128.60097041717498),
                    new kakao.maps.LatLng(35.898765991636125,128.60068425697554),
                    new kakao.maps.LatLng(35.898507528606494,128.59979301975554),
                    new kakao.maps.LatLng(35.898036529364,128.59862062947713),
                    new kakao.maps.LatLng(35.89804863399253,128.5983882907559),
                    new kakao.maps.LatLng(35.89749140410197,128.59827740816127),
                    new kakao.maps.LatLng(35.8973571332277,128.59753266686948),
                    new kakao.maps.LatLng(35.89732463269541,128.59726620786563),
                    new kakao.maps.LatLng(35.897193032767895,128.5969977580656),
                    new kakao.maps.LatLng(35.89674803187431,128.59657903665254),
                    new kakao.maps.LatLng(35.89690012459717,128.5959840315054),
                ]
            ]
        }
    ],
    11: [
        {
            name: "4경-3",
            center: new kakao.maps.LatLng(35.89763152153357,128.60010487826867),
            lines: [
                [
                    new kakao.maps.LatLng(35.90014409123973,128.6049512067272),
                    new kakao.maps.LatLng(35.89989148033171,128.60463598927203),
                    new kakao.maps.LatLng(35.89966766251738,128.60452625283125),
                    new kakao.maps.LatLng(35.89949797223356,128.60441207188387),
                    new kakao.maps.LatLng(35.89932023453607,128.60422573819628),
                    new kakao.maps.LatLng(35.89926869575357,128.60403641443173),
                    new kakao.maps.LatLng(35.899296394928946,128.60364933071014),
                    new kakao.maps.LatLng(35.89925740745307,128.60353225132738),
                    new kakao.maps.LatLng(35.89963682371568,128.60312457271445),
                    new kakao.maps.LatLng(35.89920595314441,128.60232398426936),
                    new kakao.maps.LatLng(35.8982253827402,128.60152340407456),
                    new kakao.maps.LatLng(35.89822759799202,128.60135731828848),
                    new kakao.maps.LatLng(35.898448243692876,128.60136730126337),
                    new kakao.maps.LatLng(35.89866120847302,128.60093965038772),
                    new kakao.maps.LatLng(35.898751222332464,128.60060920035284),
                    new kakao.maps.LatLng(35.89850575584006,128.59975698901522),
                    new kakao.maps.LatLng(35.89826657034186,128.59944760237167),
                    new kakao.maps.LatLng(35.898062092595985,128.599238593952),
                    new kakao.maps.LatLng(35.89804139820183,128.59842414010774),
                    new kakao.maps.LatLng(35.89783632903716,128.59825942426264),
                    new kakao.maps.LatLng(35.89750786989715,128.59822513172787),
                    new kakao.maps.LatLng(35.897384712608805,128.5974916889649),
                    new kakao.maps.LatLng(35.897347376088405,128.59725005201227),
                    new kakao.maps.LatLng(35.89721777064994,128.59700102388),
                    new kakao.maps.LatLng(35.897052982092596,128.5968565042615),
                    new kakao.maps.LatLng(35.89694343194847,128.59679338996355),
                    new kakao.maps.LatLng(35.896803749095874,128.596624456437),
                    new kakao.maps.LatLng(35.89685106123807,128.59611594855767),
                    new kakao.maps.LatLng(35.897000412737995,128.59538798429008),
                    new kakao.maps.LatLng(35.89675555164774,128.5955048966583),
                    new kakao.maps.LatLng(35.896221593521524,128.59567691830208),
                    new kakao.maps.LatLng(35.89582026813288,128.59603987602102),
                    new kakao.maps.LatLng(35.89525521941284,128.5961780431177),
                    new kakao.maps.LatLng(35.89508650679301,128.59666748999135),
                    new kakao.maps.LatLng(35.89509117197974,128.5969942941828),
                    new kakao.maps.LatLng(35.893981858165816,128.59723226667637),
                    new kakao.maps.LatLng(35.893991590474954,128.59683930758638),
                    new kakao.maps.LatLng(35.89395082229534,128.59668621056576),
                    new kakao.maps.LatLng(35.893773741330875,128.59661897417567),
                    new kakao.maps.LatLng(35.89357496135443,128.59784427587002),
                    new kakao.maps.LatLng(35.89413331215173,128.59837878238193),
                    new kakao.maps.LatLng(35.89429417954664,128.59831003048376),
                    new kakao.maps.LatLng(35.894399813990745,128.59832876655085),
                    new kakao.maps.LatLng(35.894963764096154,128.59844254820263),
                    new kakao.maps.LatLng(35.89570383546498,128.5986955422408),
                    new kakao.maps.LatLng(35.89574113233456,128.59893994274668),
                    new kakao.maps.LatLng(35.89613025443717,128.5989865324965),
                    new kakao.maps.LatLng(35.896314573243416,128.59918682311874),
                    new kakao.maps.LatLng(35.89802590923347,128.59924894128832),
                ]
            ]
        }
    ],
    12: [
        {
            name: "5경-1",
            center: new kakao.maps.LatLng(35.88778370009875,128.60908694952246),
            lines: [
                [
                    new kakao.maps.LatLng(35.88843416899916,128.60391194957958),
                    new kakao.maps.LatLng(35.88890924496285,128.60544975248868),
                    new kakao.maps.LatLng(35.88903472954835,128.6068476192101),
                    new kakao.maps.LatLng(35.88906898748229,128.60698120042568),
                    new kakao.maps.LatLng(35.88899684180183,128.60698527935767),
                    new kakao.maps.LatLng(35.888937172385916,128.6070671288331),
                    new kakao.maps.LatLng(35.888888067664624,128.60703291420396),
                    new kakao.maps.LatLng(35.88879273284967,128.60708635757342),
                    new kakao.maps.LatLng(35.888652279176256,128.607144425874),
                    new kakao.maps.LatLng(35.888429855831454,128.60726728104956),
                    new kakao.maps.LatLng(35.8883213038748,128.6072983087338),
                    new kakao.maps.LatLng(35.888722315556144,128.60931635029456),
                    new kakao.maps.LatLng(35.88888174201072,128.60935556769132),
                    new kakao.maps.LatLng(35.88857844822875,128.61164451562718),
                    new kakao.maps.LatLng(35.887504526266284,128.61343886002985),
                    new kakao.maps.LatLng(35.88737926109556,128.61370762712113),
                    new kakao.maps.LatLng(35.887748816386356,128.61403626941217),
                    new kakao.maps.LatLng(35.887048582827425,128.61517926614025),
                    new kakao.maps.LatLng(35.88697576693239,128.615233155939),
                    new kakao.maps.LatLng(35.886635326420084,128.61542003082135),
                    new kakao.maps.LatLng(35.886250660403896,128.6148751435304),
                    new kakao.maps.LatLng(35.88617925899549,128.61482386206544),
                    new kakao.maps.LatLng(35.88606850834362,128.61468319250656),
                    new kakao.maps.LatLng(35.88602186187286,128.61446630941265),
                    new kakao.maps.LatLng(35.88595202299456,128.61429878709555),
                    new kakao.maps.LatLng(35.88572739522438,128.61424993272527),
                    new kakao.maps.LatLng(35.88565651436565,128.6141599051848),
                    new kakao.maps.LatLng(35.885652118102,128.61381653475595),
                    new kakao.maps.LatLng(35.88627573209942,128.61300973864059),
                    new kakao.maps.LatLng(35.88644447907145,128.61285812978377),
                    new kakao.maps.LatLng(35.88660127356288,128.61259000381335),
                    new kakao.maps.LatLng(35.88678163029975,128.61224483830418),
                    new kakao.maps.LatLng(35.887035320660544,128.61180703060577),
                    new kakao.maps.LatLng(35.88704836790592,128.6111705523913),
                    new kakao.maps.LatLng(35.88708809122863,128.61022454798766),
                    new kakao.maps.LatLng(35.8870989462529,128.60907862992315),
                    new kakao.maps.LatLng(35.88713794520348,128.60751247586597),
                    new kakao.maps.LatLng(35.88760759622631,128.6074333793764),
                    new kakao.maps.LatLng(35.88739301152654,128.60730722929068),
                    new kakao.maps.LatLng(35.88722842042109,128.6071488689059),
                    new kakao.maps.LatLng(35.88713221107373,128.60693098519874),
                    new kakao.maps.LatLng(35.887099360252904,128.60669223461665),
                    new kakao.maps.LatLng(35.88714862626904,128.6063776265263),
                    new kakao.maps.LatLng(35.88721871098229,128.60619078743386),
                    new kakao.maps.LatLng(35.887413884319955,128.606083991343),
                    new kakao.maps.LatLng(35.88771657278049,128.6060236617666),
                    new kakao.maps.LatLng(35.88801475672981,128.60596324079754),
                    new kakao.maps.LatLng(35.88841166900524,128.60593249834344),
                    new kakao.maps.LatLng(35.88876731170716,128.60561853425324),
                    new kakao.maps.LatLng(35.88890555457921,128.60538877067336),
                    new kakao.maps.LatLng(35.88844746062956,128.60392882868157),
                ]
            ]
        }
    ],
    13: [
        {
            name: "5경-2",
            center: new kakao.maps.LatLng(35.889973944927156,128.61408697538127),
            lines: [
                [
                    new kakao.maps.LatLng(35.885306361371555,128.61473415846777),
                    new kakao.maps.LatLng(35.885781225528845,128.61426763586175),
                    new kakao.maps.LatLng(35.88648377261645,128.6142929713541),
                    new kakao.maps.LatLng(35.88709995085896,128.61403970942067),
                    new kakao.maps.LatLng(35.88749581484345,128.61341653558011),
                    new kakao.maps.LatLng(35.888047206442224,128.6126193273284),
                    new kakao.maps.LatLng(35.8887243626495,128.6125223206009),
                    new kakao.maps.LatLng(35.88948527488322,128.61222767672973),
                    new kakao.maps.LatLng(35.88984137922591,128.6118805239053),
                    new kakao.maps.LatLng(35.89059777286867,128.61259353797038),
                    new kakao.maps.LatLng(35.890574401721715,128.61299173784823),
                    new kakao.maps.LatLng(35.89095791816109,128.61328745095744),
                    new kakao.maps.LatLng(35.89132921751969,128.61315101824297),
                    new kakao.maps.LatLng(35.89198642234868,128.6131975764716),
                    new kakao.maps.LatLng(35.8923233219374,128.61293862410076),
                    new kakao.maps.LatLng(35.893006958601134,128.61303001620917),
                    new kakao.maps.LatLng(35.89351205287641,128.61299596576106),
                    new kakao.maps.LatLng(35.89468975541001,128.61253256816633),
                    new kakao.maps.LatLng(35.89499046937621,128.61228394557438),
                    new kakao.maps.LatLng(35.895312794683974,128.6131100281707),
                    new kakao.maps.LatLng(35.89450609221162,128.6134591277577),
                    new kakao.maps.LatLng(35.89452910156148,128.61375861503004),
                    new kakao.maps.LatLng(35.89363126637759,128.61418337742705),
                    new kakao.maps.LatLng(35.89309601930276,128.61444937519974),
                    new kakao.maps.LatLng(35.89230524645565,128.6149538189811),
                    new kakao.maps.LatLng(35.891606645966164,128.6153050840452),
                    new kakao.maps.LatLng(35.891025458276324,128.61563658044884),
                    new kakao.maps.LatLng(35.89036199758009,128.6160549939033),
                    new kakao.maps.LatLng(35.889793244336396,128.61613202704842),
                    new kakao.maps.LatLng(35.889193440576875,128.61650742815402),
                    new kakao.maps.LatLng(35.88890232361109,128.61671191631294),
                    new kakao.maps.LatLng(35.88843713940516,128.61645883054442),
                    new kakao.maps.LatLng(35.88756938449102,128.61598716219035),
                    new kakao.maps.LatLng(35.88697822260163,128.61572045166088),
                    new kakao.maps.LatLng(35.886107634615605,128.61545914236694),
                    new kakao.maps.LatLng(35.88528700372172,128.61483342721675),
                ]
            ]
        }
    ],
    14: [
        {
            name: "5경-3",
            center: new kakao.maps.LatLng(35.88987152278129,128.6077836876409),
            lines: [
                [
                    new kakao.maps.LatLng(35.89231888474951,128.6092396440471),
                    new kakao.maps.LatLng(35.89148838581045,128.61002019130643),
                    new kakao.maps.LatLng(35.89027470315043,128.6098073522105),
                    new kakao.maps.LatLng(35.89039690635457,128.6087577721253),
                    new kakao.maps.LatLng(35.8907106599229,128.6075348731174),
                    new kakao.maps.LatLng(35.89008685056126,128.6070128467221),
                    new kakao.maps.LatLng(35.88900592483266,128.60697992589752),
                    new kakao.maps.LatLng(35.88884677433488,128.6054041949498),
                    new kakao.maps.LatLng(35.888416742568324,128.6038673021057),
                    new kakao.maps.LatLng(35.88672865077263,128.60476344853535),
                    new kakao.maps.LatLng(35.88652300934533,128.60666397877998),
                    new kakao.maps.LatLng(35.88696813789843,128.6067338783512),
                    new kakao.maps.LatLng(35.88699374315336,128.6071773471625),
                    new kakao.maps.LatLng(35.887136626876085,128.60727436240674),
                    new kakao.maps.LatLng(35.8875828216135,128.60743287855442),
                    new kakao.maps.LatLng(35.888345782107145,128.6073209514838),
                    new kakao.maps.LatLng(35.88873379929388,128.6092999716851),
                    new kakao.maps.LatLng(35.89128179958027,128.61013782599593),
                    new kakao.maps.LatLng(35.8923378193773,128.60933969805134),
                ]
            ]
        }
    ],
    15: [
        {
            name: "6경-1",
            center: new kakao.maps.LatLng(35.94241988832362,128.56890420914385),
            lines: [
                [
                    new kakao.maps.LatLng(35.94338185325515,128.56804223111416),
                    new kakao.maps.LatLng(35.942950287925264,128.56796721347814),
                    new kakao.maps.LatLng(35.94264484906208,128.56789468870514),
                    new kakao.maps.LatLng(35.94263934803624,128.56831568146805),
                    new kakao.maps.LatLng(35.94263326623805,128.56878098912586),
                    new kakao.maps.LatLng(35.942627182637054,128.56924629664425),
                    new kakao.maps.LatLng(35.942602789342544,128.5697334051015),
                    new kakao.maps.LatLng(35.942559796174095,128.5702644715989),
                    new kakao.maps.LatLng(35.94222151152935,128.56994749429867),
                    new kakao.maps.LatLng(35.94192042128122,128.56954260329798),
                    new kakao.maps.LatLng(35.94181434127827,128.56938536426713),
                    new kakao.maps.LatLng(35.94191051566933,128.56892184263552),
                    new kakao.maps.LatLng(35.941916597908424,128.56845653924586),
                    new kakao.maps.LatLng(35.941922388841036,128.56801339303087),
                    new kakao.maps.LatLng(35.941924994227236,128.56781397719288),
                    new kakao.maps.LatLng(35.94162042352498,128.56767498239424),
                    new kakao.maps.LatLng(35.941224604499595,128.56762283771718),
                    new kakao.maps.LatLng(35.9410226426464,128.56790696452688),
                    new kakao.maps.LatLng(35.94101656266757,128.56837226279896),
                ]
            ]
        }
    ],
    16: [
        {
            name: "6경-2",
            center: new kakao.maps.LatLng(35.94241988832362,128.56890420914385),
            lines: [
                [
                    new kakao.maps.LatLng(35.943436197005205,128.5680211414949),
                    new kakao.maps.LatLng(35.94293313834047,128.5679003846721),
                    new kakao.maps.LatLng(35.94246597090545,128.56779142016404),
                    new kakao.maps.LatLng(35.941953468647114,128.56770372451933),
                    new kakao.maps.LatLng(35.9415130385993,128.5676174537983),
                    new kakao.maps.LatLng(35.9411714185048,128.5675552986471),
                    new kakao.maps.LatLng(35.941093412282186,128.56800809531225),
                    new kakao.maps.LatLng(35.94101525958043,128.56847196955343),
                    new kakao.maps.LatLng(35.94144320437478,128.56882395236542),
                    new kakao.maps.LatLng(35.941735433028235,128.56921758145901),
                    new kakao.maps.LatLng(35.94208156960455,128.5696233612472),
                    new kakao.maps.LatLng(35.94242770470077,128.57002914458124),
                    new kakao.maps.LatLng(35.9427017660843,128.57043350516892),
                    new kakao.maps.LatLng(35.9429602731124,128.57064917248547),
                    new kakao.maps.LatLng(35.9431063024756,128.57050800098432),
                    new kakao.maps.LatLng(35.94316688004722,128.57001052394787),
                    new kakao.maps.LatLng(35.94320885791881,128.56955700501913),
                    new kakao.maps.LatLng(35.94325969826317,128.5691147425233),
                    new kakao.maps.LatLng(35.943357319921276,128.56854042360544),
                    new kakao.maps.LatLng(35.943407432711986,128.56815355381113),
                ]
            ]
        }
    ],
    17: [
        {
            name: "6경-3",
            center: new kakao.maps.LatLng(35.94241988832362,128.56890420914385),
            lines: [
                [
                    new kakao.maps.LatLng(35.943089734239265,128.57039685632157),
                    new kakao.maps.LatLng(35.943153934310175,128.56962240880344),
                    new kakao.maps.LatLng(35.94321581193167,128.56902522116897),
                    new kakao.maps.LatLng(35.94329802128116,128.5682511270645),
                    new kakao.maps.LatLng(35.943452008582014,128.56750061256037),
                    new kakao.maps.LatLng(35.943549622594624,128.56692628998164),
                    new kakao.maps.LatLng(35.943191285950874,128.56676407053516),
                    new kakao.maps.LatLng(35.942742569322576,128.56662223164662),
                    new kakao.maps.LatLng(35.942239219715425,128.56652364228083),
                    new kakao.maps.LatLng(35.9417721953564,128.56640360829496),
                    new kakao.maps.LatLng(35.94121450194421,128.56632611203324),
                    new kakao.maps.LatLng(35.94112912254831,128.5673439164684),
                    new kakao.maps.LatLng(35.941066964145385,128.56796324716058),
                    new kakao.maps.LatLng(35.94096992479388,128.5684932363346),
                    new kakao.maps.LatLng(35.940731055858805,128.56884311854063),
                    new kakao.maps.LatLng(35.94041808555403,128.56934667174986),
                    new kakao.maps.LatLng(35.940860422902965,128.5699759752762),
                    new kakao.maps.LatLng(35.941216435819456,128.5703154606516),
                    new kakao.maps.LatLng(35.941624471817235,128.57081111933792),
                    new kakao.maps.LatLng(35.94190840993422,128.57114918486965),
                    new kakao.maps.LatLng(35.942281566810024,128.5715555089834),
                    new kakao.maps.LatLng(35.94249343047835,128.57189215238284),
                    new kakao.maps.LatLng(35.942689597289146,128.572051180715),
                    new kakao.maps.LatLng(35.94300344940275,128.57148115178992),
                    new kakao.maps.LatLng(35.94304673806498,128.57092792559806),
                ]
            ]
        }
    ],
    18: [
        {
            name: "7경-1",
            center: new kakao.maps.LatLng(35.88966015733441,128.54441832355485),
            lines: [
                [
                    new kakao.maps.LatLng(35.89196122579288,128.55360508348662),
                    new kakao.maps.LatLng(35.89411766862062,128.55130488966768),
                    new kakao.maps.LatLng(35.891887000769906,128.5443397592527),
                    new kakao.maps.LatLng(35.8907051850504,128.5416367966281),
                    new kakao.maps.LatLng(35.890277089560506,128.54058750691414),
                    new kakao.maps.LatLng(35.8895420342026,128.53887890396607),
                    new kakao.maps.LatLng(35.88845097651409,128.53682015301766),
                    new kakao.maps.LatLng(35.88837249928671,128.5359105603937),
                    new kakao.maps.LatLng(35.88790609706279,128.5343290388815),
                    new kakao.maps.LatLng(35.888070951436234,128.534121812755),
                    new kakao.maps.LatLng(35.887166461523734,128.53226608987387),
                ]
            ]
        }
    ],
    19: [
        {
            name: "7경-2",
            center: new kakao.maps.LatLng(35.896630624996476,128.56044114351477),
            lines: [
                [
                    new kakao.maps.LatLng(35.891952646365546,128.55357169213588),
                    new kakao.maps.LatLng(35.893955856318236,128.55197176051925),
                    new kakao.maps.LatLng(35.89603093919646,128.557350486444),
                    new kakao.maps.LatLng(35.9019738358621,128.5653308564625),
                ]
            ]
        }
    ],
    20: [
        {
            name: "7경-3",
            center: new kakao.maps.LatLng(35.89630940902532,128.54065456802624),
            lines: [
                [
                    new kakao.maps.LatLng(35.89773479516172,128.54684011090023),
                    new kakao.maps.LatLng(35.89733325452926,128.54723100879448),
                    new kakao.maps.LatLng(35.89758525853207,128.54865356024004),
                    new kakao.maps.LatLng(35.89701697514909,128.54939560775338),
                    new kakao.maps.LatLng(35.896591931954795,128.54741593351815),
                    new kakao.maps.LatLng(35.89590466427734,128.54760190739893),
                    new kakao.maps.LatLng(35.89527658900777,128.54739032932383),
                    new kakao.maps.LatLng(35.89469020055084,128.54534112264906),
                    new kakao.maps.LatLng(35.89431648936247,128.5421664331924),
                    new kakao.maps.LatLng(35.8917417399621,128.53775311293776),
                    new kakao.maps.LatLng(35.890780948787594,128.5346669127142),
                    new kakao.maps.LatLng(35.8903047754631,128.5338492928814),
                ]
            ]
        }
    ],
    21: [
        {
            name: "8경-1",
            center: new kakao.maps.LatLng(35.89752497308674,128.5852092529396),
            lines: [
                [
                    new kakao.maps.LatLng(35.89847379501219,128.58518110499386),
                    new kakao.maps.LatLng(35.8982153564246,128.58530331790246),
                    new kakao.maps.LatLng(35.897932814541434,128.5852035423345),
                    new kakao.maps.LatLng(35.897844478364355,128.58506887662156),
                    new kakao.maps.LatLng(35.897503231353575,128.5849790071222),
                    new kakao.maps.LatLng(35.897178613799035,128.58499468482546),
                    new kakao.maps.LatLng(35.89699894467279,128.58495233900547),
                    new kakao.maps.LatLng(35.89682550743618,128.58512054632672),
                    new kakao.maps.LatLng(35.89669414555847,128.5851733027024),
                    new kakao.maps.LatLng(35.89651048356958,128.58509211413448),
                    new kakao.maps.LatLng(35.896432106221276,128.58488566117938),
                    new kakao.maps.LatLng(35.89630505557289,128.58461178758407),
                ]
            ]
        }
    ],
    22: [
        {
            name: "8경-2",
            center: new kakao.maps.LatLng(35.89730515320927,128.5861601102665),
            lines: [
                [
                    new kakao.maps.LatLng(35.89775798799319,128.5854769388588),
                    new kakao.maps.LatLng(35.897588278435606,128.5853628007961),
                    new kakao.maps.LatLng(35.897462298182695,128.58534921287463),
                    new kakao.maps.LatLng(35.89724216166218,128.58530052137885),
                    new kakao.maps.LatLng(35.89717739438486,128.58525769752103),
                    new kakao.maps.LatLng(35.89709772474974,128.58531979124012),
                    new kakao.maps.LatLng(35.89694065143128,128.58527235776546),
                    new kakao.maps.LatLng(35.896886583451206,128.58544294510557),
                    new kakao.maps.LatLng(35.89680978736559,128.58545802617633),
                    new kakao.maps.LatLng(35.89671966872207,128.58579955924233),
                    new kakao.maps.LatLng(35.89749536669812,128.58608637892192),
                    new kakao.maps.LatLng(35.89733669620248,128.58684186833494),
                    new kakao.maps.LatLng(35.89744711388639,128.5870102017885),
                    new kakao.maps.LatLng(35.89745806613583,128.58720423782566),
                    new kakao.maps.LatLng(35.897614150531204,128.58732641398143),
                    new kakao.maps.LatLng(35.89776433635939,128.5872131222614),
                    new kakao.maps.LatLng(35.8978744571443,128.58706303530548),
                ]
            ]
        }
    ],
    23: [
        {
            name: "8경-3",
            center: new kakao.maps.LatLng(35.89687572500135,128.58626506207582),
            lines: [
                [
                    new kakao.maps.LatLng(35.89730926670127,128.58687177771415),
                    new kakao.maps.LatLng(35.89735861270984,128.58671770912733),
                    new kakao.maps.LatLng(35.89744902658132,128.58635402976657),
                    new kakao.maps.LatLng(35.897490386815974,128.58612227422904),
                    new kakao.maps.LatLng(35.89734690054636,128.5860695723865),
                    new kakao.maps.LatLng(35.89662075216856,128.5857837419437),
                    new kakao.maps.LatLng(35.89649085236285,128.58572577480535),
                    new kakao.maps.LatLng(35.89637091198095,128.58559601819192),
                    new kakao.maps.LatLng(35.896248002013124,128.585349914065),
                    new kakao.maps.LatLng(35.89620144906292,128.5851219459527),
                ]
            ]
        }
    ],
};

// List of course names to be used for displaying the title, with 3 maps per course
const courseNames = [
    "금호강하중도", // 0, 1, 2
    "꽃보라동산", // 3, 4, 5
    "운암지수변공원", // 6, 7, 8
    "팔달대교 야경", // 9, 10, 11
    "경북대학교 캠퍼스", // 12, 13, 14
    "함지공원", // 15, 16, 17
    "구암서원", // 18, 19, 20
    "침산정" // 21, 22, 23
];

// Get the selected course index from localStorage
const selectedCourse = localStorage.getItem('selectedCourse');

// Get the elements to update
const courseItemsContainer = document.getElementById('course-items');
const courseTitleElement = document.querySelector('h1');

// Check if a course is selected and if the course exists in courseNames
if (selectedCourse !== null) {
    const courseBaseIndex = parseInt(selectedCourse) * 3; // Base index for the selected course

    // Update the course title with the corresponding course name
    courseTitleElement.innerText = courseNames[selectedCourse] + " 코스";

    // Loop through the 3 map variants for the selected course
    for (let i = 0; i < 3; i++) {
        const mapIndex = courseBaseIndex + i; // Calculate the map index for each map
        console.log("Rendering mapIndex:", mapIndex); // Debug log for the map index

        // Get the correct map data from the courseMaps based on mapIndex
        const mapData = courseMaps[mapIndex]; // Fix: Correctly access mapData using mapIndex

        // Check if mapData exists for this mapIndex
        if (mapData) {
            // Create a container for the map   
            const courseElement = document.createElement('div');
            courseElement.classList.add('course-item-map');

            courseElement.style.display = 'block';
            courseElement.style.textAlign = 'center'; // Optionally center the content

            // Create the map div with a unique ID for each map
            const mapDiv = document.createElement('div');
            mapDiv.id = `map${mapIndex}`;
            mapDiv.style.width = '240px';
            mapDiv.style.height = '280px';
            mapDiv.style.margin = '0 auto'; // Center the map div
            courseElement.appendChild(mapDiv);

            // Add the course name below the map
            const courseName = document.createElement('div');
            courseName.innerText = mapData[0].name; // Display the name of the course
            courseName.style.marginTop = '1px'; // Add spacing between map and text 
            courseName.style.whiteSpace = 'nowrap'; // Prevent line breaks
            courseElement.appendChild(courseName); // Add the name below the map

            // Append the course element with the map to the container
            courseItemsContainer.appendChild(courseElement);

            // Initialize the Kakao map after adding the div to the DOM
            initMap(mapDiv, mapData[0]); // Access the first entry for each course
        } else {
            console.error(`No map data found for index: ${mapIndex}`);
        }
    }
} else {
    courseTitleElement.innerText = "No course selected or map not available.";
}

// Function to initialize each Kakao Map
function initMap(mapContainer, mapData) {
    var mapOptions = {
        center: mapData.center,
        level: 4, // Adjust the zoom level as needed
    };

    // Create a new map instance for each course
    var map = new kakao.maps.Map(mapContainer, mapOptions);

    // Add polylines to the map
    mapData.lines.forEach(lineCoords => {
        var polyline = new kakao.maps.Polyline({
            map: map,
            path: lineCoords,
            strokeColor: "#39f", // Line color
            strokeOpacity: 1, // Line opacity
            strokeWeight: 3, // Line thickness
        });
    });
}
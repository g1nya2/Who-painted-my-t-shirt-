// Define the course-specific maps
const courseMaps = {
    0: [
        {
            name: "course 1",
            center: new kakao.maps.LatLng(35.88778370009875, 128.60908694952246), // Center of Kyungpook National University
            lines: [
                [
                    new kakao.maps.LatLng(35.88843416899916, 128.60391194957958),
                    new kakao.maps.LatLng(35.88890924496285, 128.60544975248868),
                    new kakao.maps.LatLng(35.88903472954835, 128.6068476192101),
                    new kakao.maps.LatLng(35.88906898748229, 128.60698120042568),
                    new kakao.maps.LatLng(35.88899684180183, 128.60698527935767),
                    new kakao.maps.LatLng(35.888937172385916, 128.6070671288331),
                    new kakao.maps.LatLng(35.888888067664624, 128.60703291420396),
                    new kakao.maps.LatLng(35.88879273284967, 128.60708635757342),
                    new kakao.maps.LatLng(35.888652279176256, 128.607144425874),
                    new kakao.maps.LatLng(35.888429855831454, 128.60726728104956),
                    new kakao.maps.LatLng(35.8883213038748, 128.6072983087338),
                    new kakao.maps.LatLng(35.888722315556144, 128.60931635029456),
                    new kakao.maps.LatLng(35.88888174201072, 128.60935556769132),
                    new kakao.maps.LatLng(35.88857844822875, 128.61164451562718),
                    new kakao.maps.LatLng(35.887504526266284, 128.61343886002985),
                    new kakao.maps.LatLng(35.88737926109556, 128.61370762712113),
                    new kakao.maps.LatLng(35.887748816386356, 128.61403626941217),
                    new kakao.maps.LatLng(35.887048582827425, 128.61517926614025),
                    new kakao.maps.LatLng(35.88697576693239, 128.615233155939),
                    new kakao.maps.LatLng(35.886635326420084, 128.61542003082135),
                    new kakao.maps.LatLng(35.886250660403896, 128.6148751435304),
                    new kakao.maps.LatLng(35.88617925899549, 128.61482386206544),
                    new kakao.maps.LatLng(35.88606850834362, 128.61468319250656),
                    new kakao.maps.LatLng(35.88602186187286, 128.61446630941265),
                    new kakao.maps.LatLng(35.88595202299456, 128.61429878709555),
                    new kakao.maps.LatLng(35.88572739522438, 128.61424993272527),
                    new kakao.maps.LatLng(35.88565651436565, 128.6141599051848),
                    new kakao.maps.LatLng(35.885652118102, 128.61381653475595),
                    new kakao.maps.LatLng(35.88627573209942, 128.61300973864059),
                    new kakao.maps.LatLng(35.88644447907145, 128.61285812978377),
                    new kakao.maps.LatLng(35.88660127356288, 128.61259000381335),
                    new kakao.maps.LatLng(35.88678163029975, 128.61224483830418),
                    new kakao.maps.LatLng(35.887035320660544, 128.61180703060577),
                    new kakao.maps.LatLng(35.88704836790592, 128.6111705523913),
                    new kakao.maps.LatLng(35.88708809122863, 128.61022454798766),
                    new kakao.maps.LatLng(35.8870989462529, 128.60907862992315),
                    new kakao.maps.LatLng(35.88713794520348, 128.60751247586597),
                    new kakao.maps.LatLng(35.88760759622631, 128.6074333793764),
                    new kakao.maps.LatLng(35.88739301152654, 128.60730722929068),
                    new kakao.maps.LatLng(35.88722842042109, 128.6071488689059),
                    new kakao.maps.LatLng(35.88713221107373, 128.60693098519874),
                    new kakao.maps.LatLng(35.887099360252904, 128.60669223461665),
                    new kakao.maps.LatLng(35.88714862626904, 128.6063776265263),
                    new kakao.maps.LatLng(35.88721871098229, 128.60619078743386),
                    new kakao.maps.LatLng(35.887413884319955, 128.606083991343),
                    new kakao.maps.LatLng(35.88771657278049, 128.6060236617666),
                    new kakao.maps.LatLng(35.88801475672981, 128.60596324079754),
                    new kakao.maps.LatLng(35.88841166900524, 128.60593249834344),
                    new kakao.maps.LatLng(35.88876731170716, 128.60561853425324),
                    new kakao.maps.LatLng(35.88890555457921, 128.60538877067336),
                    new kakao.maps.LatLng(35.88844746062956, 128.60392882868157), // Closing the loop      
                ],
            ]
        }
    ],
    1: [
        {
            name: "course 2",
            center: new kakao.maps.LatLng(35.88778370009875, 128.60908694952246), // Example for 2경 route center
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
                ],
            ]
        }
    ],
    2: [
        {
            name: "course 3",
            center: new kakao.maps.LatLng(35.88987152278129,128.6077836876409), // Example for 2경 route center
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

                ],
            ]
        }
    ],
    // Add additional routes for each 경 as needed
};

// List of course names to be used for displaying the title
const courseNames = [
    "금호강하중도",
    "꽃보라동산",
    "운암지수변공원",
    "팔달대교 야경",
    "경북대학교 캠퍼스",
    "함지공원",
    "구암서원",
    "침산정"
];

// Get the selected course index from localStorage
const selectedCourse = localStorage.getItem('selectedCourse');

// Get the elements to update
const courseItemsContainer = document.getElementById('course-items');
const courseTitleElement = document.querySelector('h1');

// Check if a course is selected and if the course exists in courseMaps
if (selectedCourse !== null && courseMaps[selectedCourse]) {
    // Update the course title with the corresponding course name
    courseTitleElement.innerText = courseNames[selectedCourse] + " 코스";

    // Display the relevant map information
    courseMaps[selectedCourse].forEach((mapData, index) => {
        // Create a container for the map
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-item-map');

        // Create the map div with a unique ID for each map
        const mapDiv = document.createElement('div');
        mapDiv.id = `map${index}`;
        mapDiv.style.width = '300px';
        mapDiv.style.height = '300px';
        courseElement.appendChild(mapDiv);

        // Append the course element with the map to the container
        courseItemsContainer.appendChild(courseElement);

        // Initialize the Kakao map after adding the div to the DOM
        initMap(mapDiv, mapData);
    });
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
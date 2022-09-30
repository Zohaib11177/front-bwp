const CountryList = [
    { value: "AF", code: "AFG", name: "Afghanistan", number: "004" },
    { value: "AL", code: "ALB", name: "Albania", number: "008" },
    { value: "DZ", code: "DZA", name: "Algeria", number: "012" },
    { value: "AS", code: "ASM", name: "American Samoa", number: "016" },
    { value: "AD", code: "AND", name: "Andorra", number: "020" },
    { value: "AO", code: "AGO", name: "Angola", number: "024" },
    { value: "AI", code: "AIA", name: "Anguilla", number: "660" },
    { value: "AQ", code: "ATA", name: "Antarctica", number: "010" },
    { value: "AG", code: "ATG", name: "Antigua and Barbuda", number: "028" },
    { value: "AR", code: "ARG", name: "Argentina", number: "032" },
    { value: "AM", code: "ARM", name: "Armenia", number: "051" },
    { value: "AW", code: "ABW", name: "Aruba", number: "533" },
    { value: "AU", code: "AUS", name: "Australia", number: "036" },
    { value: "AT", code: "AUT", name: "Austria", number: "040" },
    { value: "AZ", code: "AZE", name: "Azerbaijan", number: "031" },
    { value: "BS", code: "BHS", name: "Bahamas ", number: "044" },
    { value: "BH", code: "BHR", name: "Bahrain", number: "048" },
    { value: "BD", code: "BGD", name: "Bangladesh", number: "050" },
    { value: "BB", code: "BRB", name: "Barbados", number: "052" },
    { value: "BY", code: "BLR", name: "Belarus", number: "112" },
    { value: "BE", code: "BEL", name: "Belgium", number: "056" },
    { value: "BZ", code: "BLZ", name: "Belize", number: "084" },
    { value: "BJ", code: "BEN", name: "Benin", number: "204" },
    { value: "BM", code: "BMU", name: "Bermuda", number: "060" },
    { value: "BT", code: "BTN", name: "Bhutan", number: "064" },
    {
        value: "BO",
        code: "BOL",
        name: "Bolivia (Plurinational State of)",
        number: "068",
    },
    {
        value: "BQ",
        code: "BES",
        name: "Bonaire, Sint Eustatius and Saba",
        number: "535",
    },
    { value: "BA", code: "BIH", name: "Bosnia and Herzegovina", number: "070" },
    { value: "BW", code: "BWA", name: "Botswana", number: "072" },
    { value: "BV", code: "BVT", name: "Bouvet Island", number: "074" },
    { value: "BR", code: "BRA", name: "Brazil", number: "076" },
    {
        value: "IO",
        code: "IOT",
        name: "British Indian Ocean Territory ",
        number: "086",
    },
    { value: "BN", code: "BRN", name: "Brunei Darussalam", number: "096" },
    { value: "BG", code: "BGR", name: "Bulgaria", number: "100" },
    { value: "BF", code: "BFA", name: "Burkina Faso", number: "854" },
    { value: "BI", code: "BDI", name: "Burundi", number: "108" },
    { value: "CV", code: "CPV", name: "Cabo Verde", number: "132" },
    { value: "KH", code: "KHM", name: "Cambodia", number: "116" },
    { value: "CM", code: "CMR", name: "Cameroon", number: "120" },
    { value: "CA", code: "CAN", name: "Canada", number: "124" },
    { value: "KY", code: "CYM", name: "Cayman Islands ", number: "136" },
    {
        value: "CF",
        code: "CAF",
        name: "Central African Republic ",
        number: "140",
    },
    { value: "TD", code: "TCD", name: "Chad", number: "148" },
    { value: "CL", code: "CHL", name: "Chile", number: "152" },
    { value: "CN", code: "CHN", name: "China", number: "156" },
    { value: "CX", code: "CXR", name: "Christmas Island", number: "162" },
    {
        value: "CC",
        code: "CCK",
        name: "Cocos (Keeling) Islands ",
        number: "166",
    },
    { value: "CO", code: "COL", name: "Colombia", number: "170" },
    { value: "KM", code: "COM", name: "Comoros ", number: "174" },
    {
        value: "CD",
        code: "COD",
        name: "Congo (the Democratic Republic)",
        number: "180",
    },
    { value: "CG", code: "COG", name: "Congo ", number: "178" },
    { value: "CK", code: "COK", name: "Cook Islands ", number: "184" },
    { value: "CR", code: "CRI", name: "Costa Rica", number: "188" },
    { value: "HR", code: "HRV", name: "Croatia", number: "191" },
    { value: "CU", code: "CUB", name: "Cuba", number: "192" },
    { value: "CW", code: "CUW", name: "Curaçao", number: "531" },
    { value: "CY", code: "CYP", name: "Cyprus", number: "196" },
    { value: "CZ", code: "CZE", name: "Czechia", number: "203" },
    { value: "CI", code: "CIV", name: "Côte d'Ivoire", number: "384" },
    { value: "DK", code: "DNK", name: "Denmark", number: "208" },
    { value: "DJ", code: "DJI", name: "Djibouti", number: "262" },
    { value: "DM", code: "DMA", name: "Dominica", number: "212" },
    {
        value: "DO",
        code: "DOM",
        name: "Dominican Republic ",
        number: "214",
    },
    { value: "EC", code: "ECU", name: "Ecuador", number: "218" },
    { value: "EG", code: "EGY", name: "Egypt", number: "818" },
    { value: "SV", code: "SLV", name: "El Salvador", number: "222" },
    { value: "GQ", code: "GNQ", name: "Equatorial Guinea", number: "226" },
    { value: "ER", code: "ERI", name: "Eritrea", number: "232" },
    { value: "EE", code: "EST", name: "Estonia", number: "233" },
    { value: "SZ", code: "SWZ", name: "Eswatini", number: "748" },
    { value: "ET", code: "ETH", name: "Ethiopia", number: "231" },
    {
        value: "FK",
        code: "FLK",
        name: "Falkland Islands  [Malvinas]",
        number: "238",
    },
    { value: "FO", code: "FRO", name: "Faroe Islands ", number: "234" },
    { value: "FJ", code: "FJI", name: "Fiji", number: "242" },
    { value: "FI", code: "FIN", name: "Finland", number: "246" },
    { value: "FR", code: "FRA", name: "France", number: "250" },
    { value: "GF", code: "GUF", name: "French Guiana", number: "254" },
    { value: "PF", code: "PYF", name: "French Polynesia", number: "258" },
    {
        value: "TF",
        code: "ATF",
        name: "French Southern Territories ",
        number: "260",
    },
    { value: "GA", code: "GAB", name: "Gabon", number: "266" },
    { value: "GM", code: "GMB", name: "Gambia ", number: "270" },
    { value: "GE", code: "GEO", name: "Georgia", number: "268" },
    { value: "DE", code: "DEU", name: "Germany", number: "276" },
    { value: "GH", code: "GHA", name: "Ghana", number: "288" },
    { value: "GI", code: "GIB", name: "Gibraltar", number: "292" },
    { value: "GR", code: "GRC", name: "Greece", number: "300" },
    { value: "GL", code: "GRL", name: "Greenland", number: "304" },
    { value: "GD", code: "GRD", name: "Grenada", number: "308" },
    { value: "GP", code: "GLP", name: "Guadeloupe", number: "312" },
    { value: "GU", code: "GUM", name: "Guam", number: "316" },
    { value: "GT", code: "GTM", name: "Guatemala", number: "320" },
    { value: "GG", code: "GGY", name: "Guernsey", number: "831" },
    { value: "GN", code: "GIN", name: "Guinea", number: "324" },
    { value: "GW", code: "GNB", name: "Guinea-Bissau", number: "624" },
    { value: "GY", code: "GUY", name: "Guyana", number: "328" },
    { value: "HT", code: "HTI", name: "Haiti", number: "332" },
    {
        value: "HM",
        code: "HMD",
        name: "Heard Island and McDonald Islands",
        number: "334",
    },
    { value: "VA", code: "VAT", name: "Holy See ", number: "336" },
    { value: "HN", code: "HND", name: "Honduras", number: "340" },
    { value: "HK", code: "HKG", name: "Hong Kong", number: "344" },
    { value: "HU", code: "HUN", name: "Hungary", number: "348" },
    { value: "IS", code: "ISL", name: "Iceland", number: "352" },
    { value: "IN", code: "IND", name: "India", number: "356" },
    { value: "ID", code: "IDN", name: "Indonesia", number: "360" },
    {
        value: "IR",
        code: "IRN",
        name: "Iran (Islamic Republic)",
        number: "364",
    },
    { value: "IQ", code: "IRQ", name: "Iraq", number: "368" },
    { value: "IE", code: "IRL", name: "Ireland", number: "372" },
    { value: "IM", code: "IMN", name: "Isle of Man", number: "833" },
    { value: "IL", code: "ISR", name: "Israel", number: "376" },
    { value: "IT", code: "ITA", name: "Italy", number: "380" },
    { value: "JM", code: "JAM", name: "Jamaica", number: "388" },
    { value: "JP", code: "JPN", name: "Japan", number: "392" },
    { value: "JE", code: "JEY", name: "Jersey", number: "832" },
    { value: "JO", code: "JOR", name: "Jordan", number: "400" },
    { value: "KZ", code: "KAZ", name: "Kazakhstan", number: "398" },
    { value: "KE", code: "KEN", name: "Kenya", number: "404" },
    { value: "KI", code: "KIR", name: "Kiribati", number: "296" },
    {
        value: "KP",
        code: "PRK",
        name: "Korea (the Democratic People's Republic)",
        number: "408",
    },
    {
        value: "KR",
        code: "KOR",
        name: "Korea (the Republic)",
        number: "410",
    },
    { value: "KW", code: "KWT", name: "Kuwait", number: "414" },
    { value: "KG", code: "KGZ", name: "Kyrgyzstan", number: "417" },
    {
        value: "LA",
        code: "LAO",
        name: "Lao People's Democratic Republic ",
        number: "418",
    },
    { value: "LV", code: "LVA", name: "Latvia", number: "428" },
    { value: "LB", code: "LBN", name: "Lebanon", number: "422" },
    { value: "LS", code: "LSO", name: "Lesotho", number: "426" },
    { value: "LR", code: "LBR", name: "Liberia", number: "430" },
    { value: "LY", code: "LBY", name: "Libya", number: "434" },
    { value: "LI", code: "LIE", name: "Liechtenstein", number: "438" },
    { value: "LT", code: "LTU", name: "Lithuania", number: "440" },
    { value: "LU", code: "LUX", name: "Luxembourg", number: "442" },
    { value: "MO", code: "MAC", name: "Macao", number: "446" },
    { value: "MG", code: "MDG", name: "Madagascar", number: "450" },
    { value: "MW", code: "MWI", name: "Malawi", number: "454" },
    { value: "MY", code: "MYS", name: "Malaysia", number: "458" },
    { value: "MV", code: "MDV", name: "Maldives", number: "462" },
    { value: "ML", code: "MLI", name: "Mali", number: "466" },
    { value: "MT", code: "MLT", name: "Malta", number: "470" },
    { value: "MH", code: "MHL", name: "Marshall Islands ", number: "584" },
    { value: "MQ", code: "MTQ", name: "Martinique", number: "474" },
    { value: "MR", code: "MRT", name: "Mauritania", number: "478" },
    { value: "MU", code: "MUS", name: "Mauritius", number: "480" },
    { value: "YT", code: "MYT", name: "Mayotte", number: "175" },
    { value: "MX", code: "MEX", name: "Mexico", number: "484" },
    {
        value: "FM",
        code: "FSM",
        name: "Micronesia (Federated States of)",
        number: "583",
    },
    {
        value: "MD",
        code: "MDA",
        name: "Moldova (the Republic)",
        number: "498",
    },
    { value: "MC", code: "MCO", name: "Monaco", number: "492" },
    { value: "MN", code: "MNG", name: "Mongolia", number: "496" },
    { value: "ME", code: "MNE", name: "Montenegro", number: "499" },
    { value: "MS", code: "MSR", name: "Montserrat", number: "500" },
    { value: "MA", code: "MAR", name: "Morocco", number: "504" },
    { value: "MZ", code: "MOZ", name: "Mozambique", number: "508" },
    { value: "MM", code: "MMR", name: "Myanmar", number: "104" },
    { value: "NA", code: "NAM", name: "Namibia", number: "516" },
    { value: "NR", code: "NRU", name: "Nauru", number: "520" },
    { value: "NP", code: "NPL", name: "Nepal", number: "524" },
    { value: "NL", code: "NLD", name: "Netherlands ", number: "528" },
    { value: "NC", code: "NCL", name: "New Caledonia", number: "540" },
    { value: "NZ", code: "NZL", name: "New Zealand", number: "554" },
    { value: "NI", code: "NIC", name: "Nicaragua", number: "558" },
    { value: "NE", code: "NER", name: "Niger ", number: "562" },
    { value: "NG", code: "NGA", name: "Nigeria", number: "566" },
    { value: "NU", code: "NIU", name: "Niue", number: "570" },
    { value: "NF", code: "NFK", name: "Norfolk Island", number: "574" },
    {
        value: "MP",
        code: "MNP",
        name: "Northern Mariana Islands ",
        number: "580",
    },
    { value: "NO", code: "NOR", name: "Norway", number: "578" },
    { value: "OM", code: "OMN", name: "Oman", number: "512" },
    { value: "PK", code: "PAK", name: "Pakistan", number: "586" },
    { value: "PW", code: "PLW", name: "Palau", number: "585" },
    { value: "PS", code: "PSE", name: "Palestine, State of", number: "275" },
    { value: "PA", code: "PAN", name: "Panama", number: "591" },
    { value: "PG", code: "PNG", name: "Papua New Guinea", number: "598" },
    { value: "PY", code: "PRY", name: "Paraguay", number: "600" },
    { value: "PE", code: "PER", name: "Peru", number: "604" },
    { value: "PH", code: "PHL", name: "Philippines ", number: "608" },
    { value: "PN", code: "PCN", name: "Pitcairn", number: "612" },
    { value: "PL", code: "POL", name: "Poland", number: "616" },
    { value: "PT", code: "PRT", name: "Portugal", number: "620" },
    { value: "PR", code: "PRI", name: "Puerto Rico", number: "630" },
    { value: "QA", code: "QAT", name: "Qatar", number: "634" },
    {
        value: "MK",
        code: "MKD",
        name: "Republic of North Macedonia",
        number: "807",
    },
    { value: "RO", code: "ROU", name: "Romania", number: "642" },
    {
        value: "RU",
        code: "RUS",
        name: "Russian Federation ",
        number: "643",
    },
    { value: "RW", code: "RWA", name: "Rwanda", number: "646" },
    { value: "RE", code: "REU", name: "Réunion", number: "638" },
    { value: "BL", code: "BLM", name: "Saint Barthélemy", number: "652" },
    {
        value: "SH",
        code: "SHN",
        name: "Saint Helena, Ascension and Tristan da Cunha",
        number: "654",
    },
    { value: "KN", code: "KNA", name: "Saint Kitts and Nevis", number: "659" },
    { value: "LC", code: "LCA", name: "Saint Lucia", number: "662" },
    {
        value: "MF",
        code: "MAF",
        name: "Saint Martin (French part)",
        number: "663",
    },
    {
        value: "PM",
        code: "SPM",
        name: "Saint Pierre and Miquelon",
        number: "666",
    },
    {
        value: "VC",
        code: "VCT",
        name: "Saint Vincent and the Grenadines",
        number: "670",
    },
    { value: "WS", code: "WSM", name: "Samoa", number: "882" },
    { value: "SM", code: "SMR", name: "San Marino", number: "674" },
    { value: "ST", code: "STP", name: "Sao Tome and Principe", number: "678" },
    { value: "SA", code: "SAU", name: "Saudi Arabia", number: "682" },
    { value: "SN", code: "SEN", name: "Senegal", number: "686" },
    { value: "RS", code: "SRB", name: "Serbia", number: "688" },
    { value: "SC", code: "SYC", name: "Seychelles", number: "690" },
    { value: "SL", code: "SLE", name: "Sierra Leone", number: "694" },
    { value: "SG", code: "SGP", name: "Singapore", number: "702" },
    {
        value: "SX",
        code: "SXM",
        name: "Sint Maarten (Dutch part)",
        number: "534",
    },
    { value: "SK", code: "SVK", name: "Slovakia", number: "703" },
    { value: "SI", code: "SVN", name: "Slovenia", number: "705" },
    { value: "SB", code: "SLB", name: "Solomon Islands", number: "090" },
    { value: "SO", code: "SOM", name: "Somalia", number: "706" },
    { value: "ZA", code: "ZAF", name: "South Africa", number: "710" },
    {
        value: "GS",
        code: "SGS",
        name: "South Georgia and the South Sandwich Islands",
        number: "239",
    },
    { value: "SS", code: "SSD", name: "South Sudan", number: "728" },
    { value: "ES", code: "ESP", name: "Spain", number: "724" },
    { value: "LK", code: "LKA", name: "Sri Lanka", number: "144" },
    { value: "SD", code: "SDN", name: "Sudan ", number: "729" },
    { value: "SR", code: "SUR", name: "Suriname", number: "740" },
    { value: "SJ", code: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
    { value: "SE", code: "SWE", name: "Sweden", number: "752" },
    { value: "CH", code: "CHE", name: "Switzerland", number: "756" },
    { value: "SY", code: "SYR", name: "Syrian Arab Republic", number: "760" },
    { value: "TW", code: "TWN", name: "Taiwan", number: "158" },
    { value: "TJ", code: "TJK", name: "Tajikistan", number: "762" },
    {
        value: "TZ",
        code: "TZA",
        name: "Tanzania, United Republic",
        number: "834",
    },
    { value: "TH", code: "THA", name: "Thailand", number: "764" },
    { value: "TL", code: "TLS", name: "Timor-Leste", number: "626" },
    { value: "TG", code: "TGO", name: "Togo", number: "768" },
    { value: "TK", code: "TKL", name: "Tokelau", number: "772" },
    { value: "TO", code: "TON", name: "Tonga", number: "776" },
    { value: "TT", code: "TTO", name: "Trinidad and Tobago", number: "780" },
    { value: "TN", code: "TUN", name: "Tunisia", number: "788" },
    { value: "TR", code: "TUR", name: "Turkey", number: "792" },
    { value: "TM", code: "TKM", name: "Turkmenistan", number: "795" },
    {
        value: "TC",
        code: "TCA",
        name: "Turks and Caicos Islands ",
        number: "796",
    },
    { value: "TV", code: "TUV", name: "Tuvalu", number: "798" },
    { value: "UG", code: "UGA", name: "Uganda", number: "800" },
    { value: "UA", code: "UKR", name: "Ukraine", number: "804" },
    {
        value: "AE",
        code: "ARE",
        name: "United Arab Emirates ",
        number: "784",
    },
    {
        value: "GB",
        code: "GBR",
        name: "United Kingdom of Great Britain and Northern Ireland ",
        number: "826",
    },
    {
        value: "UM",
        code: "UMI",
        name: "United States Minor Outlying Islands ",
        number: "581",
    },
    {
        value: "US",
        code: "USA",
        name: "United States of America ",
        number: "840",
    },
    { value: "UY", code: "URY", name: "Uruguay", number: "858" },
    { value: "UZ", code: "UZB", name: "Uzbekistan", number: "860" },
    { value: "VU", code: "VUT", name: "Vanuatu", number: "548" },
    {
        value: "VE",
        code: "VEN",
        name: "Venezuela (Bolivarian Republic)",
        number: "862",
    },
    { value: "VN", code: "VNM", name: "Viet Nam", number: "704" },
    {
        value: "VG",
        code: "VGB",
        name: "Virgin Islands (British)",
        number: "092",
    },
    { value: "VI", code: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
    { value: "WF", code: "WLF", name: "Wallis and Futuna", number: "876" },
    { value: "EH", code: "ESH", name: "Western Sahara", number: "732" },
    { value: "YE", code: "YEM", name: "Yemen", number: "887" },
    { value: "ZM", code: "ZMB", name: "Zambia", number: "894" },
    { value: "ZW", code: "ZWE", name: "Zimbabwe", number: "716" },
    { value: "AX", code: "ALA", name: "Åland Islands", number: "248" },
];
export { CountryList };

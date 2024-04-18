export type CountryCode = {
  id: number
  label: string
  code: string
}

const countryCodes: Record<number, CountryCode> = {
  1: {
    id: 1,
    label: 'Andorra',
    code: '376',
  },
  2: {
    id: 2,
    label: 'United Arab Emirates',
    code: '971',
  },
  3: {
    id: 3,
    label: 'Afghanistan',
    code: '93',
  },
  4: {
    id: 4,
    label: 'Antigua and Barbuda',
    code: '1-268',
  },
  5: {
    id: 5,
    label: 'Anguilla',
    code: '1-264',
  },
  6: {
    id: 6,
    label: 'Albania',
    code: '355',
  },
  7: {
    id: 7,
    label: 'Armenia',
    code: '374',
  },
  8: {
    id: 8,
    label: 'Angola',
    code: '244',
  },
  9: {
    id: 9,
    label: 'Antarctica',
    code: '672',
  },
  10: {
    id: 10,
    label: 'Argentina',
    code: '54',
  },
  11: {
    id: 11,
    label: 'American Samoa',
    code: '1-684',
  },
  12: {
    id: 12,
    label: 'Austria',
    code: '43',
  },
  13: {
    id: 13,
    label: 'Australia',
    code: '61',
  },
  14: {
    id: 14,
    label: 'Aruba',
    code: '297',
  },
  15: {
    id: 15,
    label: 'Alland Islands',
    code: '358',
  },
  16: {
    id: 16,
    label: 'Azerbaijan',
    code: '994',
  },
  17: {
    id: 17,
    label: 'Bosnia and Herzegovina',
    code: '387',
  },
  18: {
    id: 18,
    label: 'Barbados',
    code: '1-246',
  },
  19: {
    id: 19,
    label: 'Bangladesh',
    code: '880',
  },
  20: {
    id: 20,
    label: 'Belgium',
    code: '32',
  },
  21: {
    id: 21,
    label: 'Burkina Faso',
    code: '226',
  },
  22: {
    id: 22,
    label: 'Bulgaria',
    code: '359',
  },
  23: {
    id: 23,
    label: 'Bahrain',
    code: '973',
  },
  24: {
    id: 24,
    label: 'Burundi',
    code: '257',
  },
  25: {
    id: 25,
    label: 'Benin',
    code: '229',
  },
  26: {
    id: 26,
    label: 'Saint Barthelemy',
    code: '590',
  },
  27: {
    id: 27,
    label: 'Bermuda',
    code: '1-441',
  },
  28: {
    id: 28,
    label: 'Brunei Darussalam',
    code: '673',
  },
  29: {
    id: 29,
    label: 'Bolivia',
    code: '591',
  },
  30: {
    id: 30,
    label: 'Brazil',
    code: '55',
  },
  31: {
    id: 31,
    label: 'Bahamas',
    code: '1-242',
  },
  32: {
    id: 32,
    label: 'Bhutan',
    code: '975',
  },
  33: {
    id: 33,
    label: 'Bouvet Island',
    code: '47',
  },
  34: {
    id: 34,
    label: 'Botswana',
    code: '267',
  },
  35: {
    id: 35,
    label: 'Belarus',
    code: '375',
  },
  36: {
    id: 36,
    label: 'Belize',
    code: '501',
  },
  37: {
    id: 37,
    label: 'Canada',
    code: '1',
  },
  38: {
    id: 38,
    label: 'Cocos (Keeling) Islands',
    code: '61',
  },
  39: {
    id: 39,
    label: 'Congo, Democratic Republic of the',
    code: '243',
  },
  40: {
    id: 40,
    label: 'Central African Republic',
    code: '236',
  },
  41: {
    id: 41,
    label: 'Congo, Republic of the',
    code: '242',
  },
  42: {
    id: 42,
    label: 'Switzerland',
    code: '41',
  },
  43: {
    id: 43,
    label: 'Cote d\'Ivoire',
    code: '225',
  },
  44: {
    id: 44,
    label: 'Cook Islands',
    code: '682',
  },
  45: {
    id: 45,
    label: 'Chile',
    code: '56',
  },
  46: {
    id: 46,
    label: 'Cameroon',
    code: '237',
  },
  47: {
    id: 47,
    label: 'China',
    code: '86',
  },
  48: {
    id: 48,
    label: 'Colombia',
    code: '57',
  },
  49: {
    id: 49,
    label: 'Costa Rica',
    code: '506',
  },
  50: {
    id: 50,
    label: 'Cuba',
    code: '53',
  },
  51: {
    id: 51,
    label: 'Cape Verde',
    code: '238',
  },
  52: {
    id: 52,
    label: 'Curacao',
    code: '599',
  },
  53: {
    id: 53,
    label: 'Christmas Island',
    code: '61',
  },
  54: {
    id: 54,
    label: 'Cyprus',
    code: '357',
  },
  55: {
    id: 55,
    label: 'Czech Republic',
    code: '420',
  },
  56: {
    id: 56,
    label: 'Germany',
    code: '49',
  },
  57: {
    id: 57,
    label: 'Djibouti',
    code: '253',
  },
  58: {
    id: 58,
    label: 'Denmark',
    code: '45',
  },
  59: {
    id: 59,
    label: 'Dominica',
    code: '1-767',
  },
  60: {
    id: 60,
    label: 'Dominican Republic',
    code: '1-809',
  },
  61: {
    id: 61,
    label: 'Algeria',
    code: '213',
  },
  62: {
    id: 62,
    label: 'Ecuador',
    code: '593',
  },
  63: {
    id: 63,
    label: 'Estonia',
    code: '372',
  },
  64: {
    id: 64,
    label: 'Egypt',
    code: '20',
  },
  65: {
    id: 65,
    label: 'Western Sahara',
    code: '212',
  },
  66: {
    id: 66,
    label: 'Eritrea',
    code: '291',
  },
  67: {
    id: 67,
    label: 'Spain',
    code: '34',
  },
  68: {
    id: 68,
    label: 'Ethiopia',
    code: '251',
  },
  69: {
    id: 69,
    label: 'Finland',
    code: '358',
  },
  70: {
    id: 70,
    label: 'Fiji',
    code: '679',
  },
  71: {
    id: 71,
    label: 'Falkland Islands (Malvinas)',
    code: '500',
  },
  72: {
    id: 72,
    label: 'Micronesia, Federated States of',
    code: '691',
  },
  73: {
    id: 73,
    label: 'Faroe Islands',
    code: '298',
  },
  74: {
    id: 74,
    label: 'France',
    code: '33',
  },
  75: {
    id: 75,
    label: 'Gabon',
    code: '241',
  },
  76: {
    id: 76,
    label: 'United Kingdom',
    code: '44',
  },
  77: {
    id: 77,
    label: 'Grenada',
    code: '1-473',
  },
  78: {
    id: 78,
    label: 'Georgia',
    code: '995',
  },
  79: {
    id: 79,
    label: 'French Guiana',
    code: '594',
  },
  80: {
    id: 80,
    label: 'Guernsey',
    code: '44',
  },
  81: {
    id: 81,
    label: 'Ghana',
    code: '233',
  },
  82: {
    id: 82,
    label: 'Gibraltar',
    code: '350',
  },
  83: {
    id: 83,
    label: 'Greenland',
    code: '299',
  },
  84: {
    id: 84,
    label: 'Gambia',
    code: '220',
  },
  85: {
    id: 85,
    label: 'Guinea',
    code: '224',
  },
  86: {
    id: 86,
    label: 'Guadeloupe',
    code: '590',
  },
  87: {
    id: 87,
    label: 'Equatorial Guinea',
    code: '240',
  },
  88: {
    id: 88,
    label: 'Greece',
    code: '30',
  },
  89: {
    id: 89,
    label: 'South Georgia and the South Sandwich Islands',
    code: '500',
  },
  90: {
    id: 90,
    label: 'Guatemala',
    code: '502',
  },
  91: {
    id: 91,
    label: 'Guam',
    code: '1-671',
  },
  92: {
    id: 92,
    label: 'Guinea-Bissau',
    code: '245',
  },
  93: {
    id: 93,
    label: 'Guyana',
    code: '592',
  },
  94: {
    id: 94,
    label: 'Hong Kong',
    code: '852',
  },
  95: {
    id: 95,
    label: 'Heard Island and McDonald Islands',
    code: '672',
  },
  96: {
    id: 96,
    label: 'Honduras',
    code: '504',
  },
  97: {
    id: 97,
    label: 'Croatia',
    code: '385',
  },
  98: {
    id: 98,
    label: 'Haiti',
    code: '509',
  },
  99: {
    id: 99,
    label: 'Hungary',
    code: '36',
  },
  100: {
    id: 100,
    label: 'Indonesia',
    code: '62',
  },
  101: {
    id: 101,
    label: 'Ireland',
    code: '353',
  },
  102: {
    id: 102,
    label: 'Israel',
    code: '972',
  },
  103: {
    id: 103,
    label: 'Isle of Man',
    code: '44',
  },
  104: {
    id: 104,
    label: 'India',
    code: '91',
  },
  105: {
    id: 105,
    label: 'British Indian Ocean Territory',
    code: '246',
  },
  106: {
    id: 106,
    label: 'Iraq',
    code: '964',
  },
  107: {
    id: 107,
    label: 'Iran, Islamic Republic of',
    code: '98',
  },
  108: {
    id: 108,
    label: 'Iceland',
    code: '354',
  },
  109: {
    id: 109,
    label: 'Italy',
    code: '39',
  },
  110: {
    id: 110,
    label: 'Jersey',
    code: '44',
  },
  111: {
    id: 111,
    label: 'Jamaica',
    code: '1-876',
  },
  112: {
    id: 112,
    label: 'Jordan',
    code: '962',
  },
  113: {
    id: 113,
    label: 'Japan',
    code: '81',
  },
  114: {
    id: 114,
    label: 'Kenya',
    code: '254',
  },
  115: {
    id: 115,
    label: 'Kyrgyzstan',
    code: '996',
  },
  116: {
    id: 116,
    label: 'Cambodia',
    code: '855',
  },
  117: {
    id: 117,
    label: 'Kiribati',
    code: '686',
  },
  118: {
    id: 118,
    label: 'Comoros',
    code: '269',
  },
  119: {
    id: 119,
    label: 'Saint Kitts and Nevis',
    code: '1-869',
  },
  120: {
    id: 120,
    label: 'Korea, Democratic People\'s Republic of',
    code: '850',
  },
  121: {
    id: 121,
    label: 'Korea, Republic of',
    code: '82',
  },
  122: {
    id: 122,
    label: 'Kuwait',
    code: '965',
  },
  123: {
    id: 123,
    label: 'Cayman Islands',
    code: '1-345',
  },
  124: {
    id: 124,
    label: 'Kazakhstan',
    code: '7',
  },
  125: {
    id: 125,
    label: 'Lao People\'s Democratic Republic',
    code: '856',
  },
  126: {
    id: 126,
    label: 'Lebanon',
    code: '961',
  },
  127: {
    id: 127,
    label: 'Saint Lucia',
    code: '1-758',
  },
  128: {
    id: 128,
    label: 'Liechtenstein',
    code: '423',
  },
  129: {
    id: 129,
    label: 'Sri Lanka',
    code: '94',
  },
  130: {
    id: 130,
    label: 'Liberia',
    code: '231',
  },
  131: {
    id: 131,
    label: 'Lesotho',
    code: '266',
  },
  132: {
    id: 132,
    label: 'Lithuania',
    code: '370',
  },
  133: {
    id: 133,
    label: 'Luxembourg',
    code: '352',
  },
  134: {
    id: 134,
    label: 'Latvia',
    code: '371',
  },
  135: {
    id: 135,
    label: 'Libya',
    code: '218',
  },
  136: {
    id: 136,
    label: 'Morocco',
    code: '212',
  },
  137: {
    id: 137,
    label: 'Monaco',
    code: '377',
  },
  138: {
    id: 138,
    label: 'Moldova, Republic of',
    code: '373',
  },
  139: {
    id: 139,
    label: 'Montenegro',
    code: '382',
  },
  140: {
    id: 140,
    label: 'Saint Martin (French part)',
    code: '590',
  },
  141: {
    id: 141,
    label: 'Madagascar',
    code: '261',
  },
  142: {
    id: 142,
    label: 'Marshall Islands',
    code: '692',
  },
  143: {
    id: 143,
    label: 'Macedonia, the Former Yugoslav Republic of',
    code: '389',
  },
  144: {
    id: 144,
    label: 'Mali',
    code: '223',
  },
  145: {
    id: 145,
    label: 'Myanmar',
    code: '95',
  },
  146: {
    id: 146,
    label: 'Mongolia',
    code: '976',
  },
  147: {
    id: 147,
    label: 'Macao',
    code: '853',
  },
  148: {
    id: 148,
    label: 'Northern Mariana Islands',
    code: '1-670',
  },
  149: {
    id: 149,
    label: 'Martinique',
    code: '596',
  },
  150: {
    id: 150,
    label: 'Mauritania',
    code: '222',
  },
  151: {
    id: 151,
    label: 'Montserrat',
    code: '1-664',
  },
  152: {
    id: 152,
    label: 'Malta',
    code: '356',
  },
  153: {
    id: 153,
    label: 'Mauritius',
    code: '230',
  },
  154: {
    id: 154,
    label: 'Maldives',
    code: '960',
  },
  155: {
    id: 155,
    label: 'Malawi',
    code: '265',
  },
  156: {
    id: 156,
    label: 'Mexico',
    code: '52',
  },
  157: {
    id: 157,
    label: 'Malaysia',
    code: '60',
  },
  158: {
    id: 158,
    label: 'Mozambique',
    code: '258',
  },
  159: {
    id: 159,
    label: 'Namibia',
    code: '264',
  },
  160: {
    id: 160,
    label: 'New Caledonia',
    code: '687',
  },
  161: {
    id: 161,
    label: 'Niger',
    code: '227',
  },
  162: {
    id: 162,
    label: 'Norfolk Island',
    code: '672',
  },
  163: {
    id: 163,
    label: 'Nigeria',
    code: '234',
  },
  164: {
    id: 164,
    label: 'Nicaragua',
    code: '505',
  },
  165: {
    id: 165,
    label: 'Netherlands',
    code: '31',
  },
  166: {
    id: 166,
    label: 'Norway',
    code: '47',
  },
  167: {
    id: 167,
    label: 'Nepal',
    code: '977',
  },
  168: {
    id: 168,
    label: 'Nauru',
    code: '674',
  },
  169: {
    id: 169,
    label: 'Niue',
    code: '683',
  },
  170: {
    id: 170,
    label: 'New Zealand',
    code: '64',
  },
  171: {
    id: 171,
    label: 'Oman',
    code: '968',
  },
  172: {
    id: 172,
    label: 'Panama',
    code: '507',
  },
  173: {
    id: 173,
    label: 'Peru',
    code: '51',
  },
  174: {
    id: 174,
    label: 'French Polynesia',
    code: '689',
  },
  175: {
    id: 175,
    label: 'Papua New Guinea',
    code: '675',
  },
  176: {
    id: 176,
    label: 'Philippines',
    code: '63',
  },
  177: {
    id: 177,
    label: 'Pakistan',
    code: '92',
  },
  178: {
    id: 178,
    label: 'Poland',
    code: '48',
  },
  179: {
    id: 179,
    label: 'Saint Pierre and Miquelon',
    code: '508',
  },
  180: {
    id: 180,
    label: 'Pitcairn',
    code: '870',
  },
  181: {
    id: 181,
    label: 'Puerto Rico',
    code: '1',
  },
  182: {
    id: 182,
    label: 'Palestine, State of',
    code: '970',
  },
  183: {
    id: 183,
    label: 'Portugal',
    code: '351',
  },
  184: {
    id: 184,
    label: 'Palau',
    code: '680',
  },
  185: {
    id: 185,
    label: 'Paraguay',
    code: '595',
  },
  186: {
    id: 186,
    label: 'Qatar',
    code: '974',
  },
  187: {
    id: 187,
    label: 'Reunion',
    code: '262',
  },
  188: {
    id: 188,
    label: 'Romania',
    code: '40',
  },
  189: {
    id: 189,
    label: 'Serbia',
    code: '381',
  },
  190: {
    id: 190,
    label: 'Russian Federation',
    code: '7',
  },
  191: {
    id: 191,
    label: 'Rwanda',
    code: '250',
  },
  192: {
    id: 192,
    label: 'Saudi Arabia',
    code: '966',
  },
  193: {
    id: 193,
    label: 'Solomon Islands',
    code: '677',
  },
  194: {
    id: 194,
    label: 'Seychelles',
    code: '248',
  },
  195: {
    id: 195,
    label: 'Sudan',
    code: '249',
  },
  196: {
    id: 196,
    label: 'Sweden',
    code: '46',
  },
  197: {
    id: 197,
    label: 'Singapore',
    code: '65',
  },
  198: {
    id: 198,
    label: 'Saint Helena',
    code: '290',
  },
  199: {
    id: 199,
    label: 'Slovenia',
    code: '386',
  },
  200: {
    id: 200,
    label: 'Svalbard and Jan Mayen',
    code: '47',
  },
  201: {
    id: 201,
    label: 'Slovakia',
    code: '421',
  },
  202: {
    id: 202,
    label: 'Sierra Leone',
    code: '232',
  },
  203: {
    id: 203,
    label: 'San Marino',
    code: '378',
  },
  204: {
    id: 204,
    label: 'Senegal',
    code: '221',
  },
  205: {
    id: 205,
    label: 'Somalia',
    code: '252',
  },
  206: {
    id: 206,
    label: 'Suriname',
    code: '597',
  },
  207: {
    id: 207,
    label: 'South Sudan',
    code: '211',
  },
  208: {
    id: 208,
    label: 'Sao Tome and Principe',
    code: '239',
  },
  209: {
    id: 209,
    label: 'El Salvador',
    code: '503',
  },
  210: {
    id: 210,
    label: 'Sint Maarten (Dutch part)',
    code: '1-721',
  },
  211: {
    id: 211,
    label: 'Syrian Arab Republic',
    code: '963',
  },
  212: {
    id: 212,
    label: 'Swaziland',
    code: '268',
  },
  213: {
    id: 213,
    label: 'Turks and Caicos Islands',
    code: '1-649',
  },
  214: {
    id: 214,
    label: 'Chad',
    code: '235',
  },
  215: {
    id: 215,
    label: 'French Southern Territories',
    code: '262',
  },
  216: {
    id: 216,
    label: 'Togo',
    code: '228',
  },
  217: {
    id: 217,
    label: 'Thailand',
    code: '66',
  },
  218: {
    id: 218,
    label: 'Tajikistan',
    code: '992',
  },
  219: {
    id: 219,
    label: 'Tokelau',
    code: '690',
  },
  220: {
    id: 220,
    label: 'Timor-Leste',
    code: '670',
  },
  221: {
    id: 221,
    label: 'Turkmenistan',
    code: '993',
  },
  222: {
    id: 222,
    label: 'Tunisia',
    code: '216',
  },
  223: {
    id: 223,
    label: 'Tonga',
    code: '676',
  },
  224: {
    id: 224,
    label: 'Turkey',
    code: '90',
  },
  225: {
    id: 225,
    label: 'Trinidad and Tobago',
    code: '1-868',
  },
  226: {
    id: 226,
    label: 'Tuvalu',
    code: '688',
  },
  227: {
    id: 227,
    label: 'Taiwan, Province of China',
    code: '886',
  },
  228: {
    id: 228,
    label: 'United Republic of Tanzania',
    code: '255',
  },
  229: {
    id: 229,
    label: 'Ukraine',
    code: '380',
  },
  230: {
    id: 230,
    label: 'Uganda',
    code: '256',
  },
  231: {
    id: 231,
    label: 'United States',
    code: '1',
  },
  232: {
    id: 232,
    label: 'Uruguay',
    code: '598',
  },
  233: {
    id: 233,
    label: 'Uzbekistan',
    code: '998',
  },
  234: {
    id: 234,
    label: 'Holy See (Vatican City State)',
    code: '379',
  },
  235: {
    id: 235,
    label: 'Saint Vincent and the Grenadines',
    code: '1-784',
  },
  236: {
    id: 236,
    label: 'Venezuela',
    code: '58',
  },
  237: {
    id: 237,
    label: 'British Virgin Islands',
    code: '1-284',
  },
  238: {
    id: 238,
    label: 'US Virgin Islands',
    code: '1-340',
  },
  239: {
    id: 239,
    label: 'Vietnam',
    code: '84',
  },
  240: {
    id: 240,
    label: 'Vanuatu',
    code: '678',
  },
  241: {
    id: 241,
    label: 'Wallis and Futuna',
    code: '681',
  },
  242: {
    id: 242,
    label: 'Samoa',
    code: '685',
  },
  243: {
    id: 243,
    label: 'Kosovo',
    code: '383',
  },
  244: {
    id: 244,
    label: 'Yemen',
    code: '967',
  },
  245: {
    id: 245,
    label: 'Mayotte',
    code: '262',
  },
  246: {
    id: 246,
    label: 'South Africa',
    code: '27',
  },
  247: {
    id: 247,
    label: 'Zambia',
    code: '260',
  },
  248: {
    id: 248,
    label: 'Zimbabwe',
    code: '263',
  },
}

export class CountryCodeModel {
  static find(id: number): CountryCode {
    return countryCodes[id]
  }

  static all(): CountryCode[] {
    return Object.values(countryCodes)
  }
}

class Pays {
    constructor(name, capitale, continent, options) {
        this.name = name;
        this.capitale = capitale;
        this.continent = continent;
        this.options = options;
        if (options == undefined) {
            this.options = {};
        }
        /*
            Options :
                - statut (partiellement reconnu)
                - alias (nom pays)
        */
    }

    getDrapeau() {
        return "img/flags/" + this.name.toLowerCase().replaceAll(' ', '_') + ".png";
    }
}

const AFRIQUE_DU_SUD = new Pays("Afrique du Sud", "Pretoria", "Afrique");
const AFGHANISTAN = new Pays("Afghanistan", "Kaboul", "Asie");
const ALBANIE = new Pays("Albanie", "Tirana", "Europe");
const ALGÉRIE = new Pays("Algérie", "Alger", "Afrique");
const ALLEMAGNE = new Pays("Allemagne", "Berlin", "Europe");
const ANDORRE = new Pays("Andorre", "Andorre-la-Vieille", "Europe");
const ANGOLA = new Pays("Angola", "Luanda", "Afrique");
const ANTIGUA_ET_BARBUDA = new Pays("Antigua-et-Barbuda", "Saint John’s", "Amérique du nord");
const ARABIE_SAOUDITE = new Pays("Arabie Saoudite", "Riyad", "Asie");
const ARGENTINE = new Pays("Argentine", "Buenos Aires", "Amérique du sud");
const ARMENIE = new Pays("Arménie", "Erevan", "Asie");
const AUSTRALIE = new Pays("Australie", "Canberra", "Océanie");
const AUTRICHE = new Pays("Autriche", "Vienne", "Europe");
const AZERBAÏDJAN = new Pays("Azerbaïdjan", "Bakou", "Asie");
const BAHAMAS = new Pays("Bahamas", "Nassau", "Amérique du nord");
const BAHREIN = new Pays("Bahreïn", "Manama", "Asie");
const BANGLADESH = new Pays("Bangladesh", "Dacca", "Asie");
const BARBADE = new Pays("Barbade", "Bridgetown", "Amérique du nord");
const BELGIQUE = new Pays("Belgique", "Bruxelles", "Europe");
const BELIZE = new Pays("Belize", "Belmopan", "Amérique du nord");
const BÉNIN = new Pays("Bénin", "Porto-Novo", "Afrique");
const BHOUTAN = new Pays("Bhoutan", "Thimphou", "Asie");
const BIELORUSSIE = new Pays("Biélorussie", "Minsk", "Europe");
const BIRMANIE = new Pays("Birmanie", "Naypyidaw", "Asie");
const BOLIVIE = new Pays("Bolivie", "Sucre", "Amérique du sud");
const BOSNIE_HERZÉGOVINE = new Pays("Bosnie-Herzégovine", "Sarajevo", "Europe");
const BOTSWANA = new Pays("Botswana", "Gaborone", "Afrique");
const BRESIL = new Pays("Brésil", "Brasilia", "Amérique du sud");
const BRUNEI = new Pays("Brunei", "Bandar Seri Begawan", "Asie");
const BULGARIE = new Pays("Bulgarie", "Sofia", "Europe");
const BURKINA_FASO = new Pays("Burkina Faso", "Ouagadougou", "Afrique");
const BURUNDI = new Pays("Burundi", "Gitega", "Afrique");
const CAMBODGE = new Pays("Cambodge", "Phnom Penh", "Asie");
const CAMEROUN = new Pays("Cameroun", "Yaoundé", "Afrique");
const CANADA = new Pays("Canada", "Ottawa", "Amérique du nord");
const CAP_VERT = new Pays("Cap-Vert", "Praia", "Afrique");
const CHILI = new Pays("Chili", "Santiago", "Amérique du sud");
const CHINE = new Pays("Chine", "Pékin", "Asie");
const CHYPRE = new Pays("Chypre", "Nicosie", "Europe");
const COLOMBIE = new Pays("Colombie", "Bogota", "Amérique du sud");
const COMORES = new Pays("Comores", "Moroni", "Afrique");
const COREE_DU_NORD = new Pays("Corée du Nord", "Pyongyang", "Asie");
const COREE_DU_SUD = new Pays("Corée du Sud", "Séoul", "Asie");
const COSTA_RICA = new Pays("Costa Rica", "San José", "Amérique du nord");
const COTE_IVOIRE = new Pays("Côte d'Ivoire", "Yamoussoukro", "Afrique");
const CROATIE = new Pays("Croatie", "Zagreb", "Europe");
const CUBA = new Pays("Cuba", "La Havane", "Amérique du nord");
const DANEMARK = new Pays("Danemark", "Copenhague", "Europe");
const DJIBOUTI = new Pays("Djibouti", "Djibouti", "Afrique");
const DOMINIQUE = new Pays("Dominique", "Roseau", "Amérique du nord");
const EGYPTE = new Pays("Égypte", "Le Caire", "Afrique");
const EMIRATS_ARABES_UNIS = new Pays("Émirats arabes unis", "Abou Dabi", "Asie");
const EQUATEUR = new Pays("Équateur", "Quito", "Amérique du sud");
const ERYTHRÉE = new Pays("Érythrée", "Asmara", "Afrique");
const ESPAGNE = new Pays("Espagne", "Madrid", "Europe");
const ESWATINI = new Pays("Eswatini", "Mbabane", "Afrique");
const ESTONIE = new Pays("Estonie", "Tallinn", "Europe");
const ETATS_UNIS = new Pays("États-Unis", "Washington, D.C.", "Amérique du nord");
const ETHIOPIE = new Pays("Éthiopie", "Addis-Abeba", "Afrique");
const FIDJI = new Pays("Fidji", "Suva", "Océanie");
const FINLANDE = new Pays("Finlande", "Helsinki", "Europe");
const FRANCE = new Pays("France", "Paris", "Europe");
const GABON = new Pays("Gabon", "Libreville", "Afrique");
const GAMBIE = new Pays("Gambie", "Banjul", "Afrique");
const GEORGIE = new Pays("Géorgie", "Tbilissi", "Eurasie");
const GHANA = new Pays("Ghana", "Accra", "Afrique");
const GRECE = new Pays("Grèce", "Athènes", "Europe");
const GRENADE = new Pays("Grenade", "Saint-Georges", "Amérique du nord");
const GUATEMALA = new Pays("Guatemala", "Guatemala", "Amérique du nord");
const GUINE = new Pays("Guinée", "Conakry", "Afrique");
const GUINE_EQUATORIALE = new Pays("Guinée équatoriale", "Malabo", "Afrique");
const GUINEE_BISSAU = new Pays("Guinée-Bissau", "Bissau", "Afrique");
const GUYANA = new Pays("Guyana", "Georgetown", "Amérique du nord");
const HAITI = new Pays("Haïti", "Port-au-Prince", "Amérique du nord");
const HONDURAS = new Pays("Honduras", "Tegucigalpa", "Amérique du nord");
const HONGRIE = new Pays("Hongrie", "Budapest", "Europe");
const ILES_MARSHALL = new Pays("Iles Marshall", "Majuro", "Océanie");
const INDE = new Pays("Inde", "New Delhi", "Asie");
const INDONÉSIE = new Pays("Indonésie", "Jakarta", "Asie");
const IRAK = new Pays("Irak", "Bagdad", "Asie");
const IRAN = new Pays("Iran", "Téhéran", "Asie");
const IRLANDE = new Pays("Irlande", "Dublin", "Europe");
const ISLANDE = new Pays("Islande", "Reykjavik", "Europe");
const ISRAEL = new Pays("Israël", "Jérusalem", "Asie");
const ITALIE = new Pays("Italie", "Rome", "Europe");
const JAMAIQUE = new Pays("Jamaïque", "Kingston", "Amérique du nord");
const JAPON = new Pays("Japon", "Tokyo", "Asie");
const JORDANIE = new Pays("Jordanie", "Amman", "Asie");
const KAZAKHSTAN = new Pays("Kazakhstan", "Noursoultan", "Asie");
const KENYA = new Pays("Kenya", "Nairobi", "Afrique");
const KIRGHIZISTAN = new Pays("Kirghizistan", "Bichkek", "Asie");
const KIRIBATI = new Pays("Kiribati", "Tarawa-Sud", "Océanie");
const KOWEIT = new Pays("Koweït", "Koweït", "Asie");
const LAOS = new Pays("Laos", "Vientiane", "Asie");
const LESOTHO = new Pays("Lesotho", "Maseru", "Afrique");
const LETTONIE = new Pays("Lettonie", "Riga", "Europe");
const LIBAN = new Pays("Liban", "Beyrouth", "Asie");
const LIBERIA = new Pays("Libéria", "Monrovia", "Afrique");
const LIBYE = new Pays("Libye", "Tripoli", "Afrique");
const LIECHTENSTEIN = new Pays("Liechtenstein", "Vaduz", "Europe");
const LITUANIE = new Pays("Lituanie", "Vilnius", "Europe");
const LUXEMBOURG = new Pays("Luxembourg", "Luxembourg", "Europe");
const MACEDOINE_DU_NORD = new Pays("Macédoine du Nord", "Skopje", "Europe");
const MADAGASCAR = new Pays("Madagascar", "Antananarivo", "Afrique");
const MALAISIE = new Pays("Malaisie", "Kuala Lumpur", "Asie");
const MALAWI = new Pays("Malawi", "Lilongwe", "Afrique");
const MALDIVES = new Pays("Maldives", "Malé", "Asie");
const MALI = new Pays("Mali", "Bamako", "Afrique");
const MALTE = new Pays("Malte", "La Valette", "Europe");
const MAROC = new Pays("Maroc", "Rabat", "Afrique");
const MAURICE = new Pays("Maurice", "Port-Louis", "Afrique");
const MAURITANIE = new Pays("Mauritanie", "Nouakchott", "Afrique");
const MEXIQUE = new Pays("Mexique", "Mexico", "Amérique du nord");
const MICRONESIE = new Pays("Micronésie", "Palikir", "Océanie");
const MOLDAVIE = new Pays("Moldavie", "Chișinău", "Europe");
const MONACO = new Pays("Monaco", "Monaco", "Europe");
const MONGOLIE = new Pays("Mongolie", "Oulan-Bator", "Asie");
const MONTENEGRO = new Pays("Monténégro", "Podgorica", "Europe");
const MOZAMBIQUE = new Pays("Mozambique", "Maputo", "Afrique");
const NAMIBIE = new Pays("Namibie", "Windhoek", "Afrique");
const NAURU = new Pays("Nauru", "Yaren", "Océanie");
const NEPAL = new Pays("Népal", "Katmandou", "Asie");
const NICARAGUA = new Pays("Nicaragua", "Managua", "Amérique du nord");
const NIGER = new Pays("Niger", "Niamey", "Afrique");
const NIGERIA = new Pays("Nigeria", "Abuja", "Afrique");
const NORVEGE = new Pays("Norvège", "Oslo", "Europe");
const NOUVELLE_ZELANDE = new Pays("Nouvelle-Zélande", "Wellington", "Océanie");
const OMAN = new Pays("Oman", "Mascate", "Asie");
const OUGANDA = new Pays("Ouganda", "Kampala", "Afrique");
const OUZBEKISTAN = new Pays("Ouzbékistan", "Tachkent", "Asie");
const PAKISTAN = new Pays("Pakistan", "Islamabad", "Asie");
const PALAOS = new Pays("Palaos", "Ngerulmud", "Océanie");
const PANAMA = new Pays("Panama", "Panama", "Amérique du nord");
const PAPOUASIE_NOUVELLE_GUINEE = new Pays("Papouasie-Nouvelle-Guinée", "Port Moresby", "Océanie");
const PARAGUAY = new Pays("Paraguay", "Asuncion", "Amérique du sud");
const PAYS_BAS = new Pays("Pays-Bas", "Amsterdam", "Europe");
const PEROU = new Pays("Pérou", "Lima", "Amérique du sud");
const PHILIPPINES = new Pays("Philippines", "Manille", "Asie");
const POLOGNE = new Pays("Pologne", "Varsovie", "Europe");
const PORTUGAL = new Pays("Portugal", "Lisbonne", "Europe");
const QATAR = new Pays("Qatar", "Doha", "Asie");
const REPUBLIQUE_CENTRAFRICAINE = new Pays("République centrafricaine", "Bangui", "Afrique");
const REPUBLIQUE_DEMOCRATIQUE_DU_CONGO = new Pays("République démocratique du Congo", "Kinshasa", "Afrique");
const REPUBLIQUE_DOMINICAINE = new Pays("République dominicaine", "Saint-Domingue", "Amérique du sud");
const REPUBLIQUE_DU_CONGO = new Pays("République du Congo", "Brazzaville", "Afrique", { alias: ["Congo"] });
const REPUBLIQUE_TCHEQUE = new Pays("Tchèquie", "Prague", "Europe", { alias: ["République Tchèque"] });
const ROUMANIE = new Pays("Roumanie", "Bucarest", "Europe");
const ROYAUME_UNI = new Pays("Royaume-Uni", "Londres", "Europe");
const RUSSIE = new Pays("Russie", "Moscou", "Eurasie");
const RWANDA = new Pays("Rwanda", "Kigali", "Afrique");
const SAINT_CHRISTOPHE_ET_NIEVES = new Pays("Saint-Christophe-et-Nièvès", "Basseterre", "Amérique du nord", { alias: ["Saint-Kitts-et-Nevis"] });
const SAINT_MARIN = new Pays("Saint-Marin", "Saint-Marin", "Europe");
const SAINT_VINCENT_ET_LES_GRENADINES = new Pays("Saint-Vincent-et-les-Grenadines", "Kingstown", "Amérique du nord");
const SAINTE_LUCIE = new Pays("Sainte-Lucie", "Castries", "Amérique du sud");
const SALOMON = new Pays("Salomon", "Honiara", "Océanie");
const SALVADOR = new Pays("Salvador", "San Salvador", "Amérique du sud");
const SAMOA = new Pays("Samoa", "Apia", "Océanie");
const SAO_TOME_ET_PRINCIPE = new Pays("Sao Tomé-et-Principe", "Sao Tomé", "Afrique");
const SENEGAL = new Pays("Sénégal", "Dakar", "Afrique");
const SERBIE = new Pays("Serbie", "Belgrade", "Europe");
const SEYCHELLES = new Pays("Seychelles", "Victoria", "Afrique");
const SIERRA_LEONE = new Pays("Sierra Leone", "Freetown", "Afrique");
const SINGAPOUR = new Pays("Singapour", "Singapour", "Asie");
const SLOVAQUIE = new Pays("Slovaquie", "Bratislava", "Europe");
const SLOVENIE = new Pays("Slovénie", "Ljubljana", "Europe");
const SOMALIE = new Pays("Somalie", "Mogadiscio", "Afrique");
const SOUDAN = new Pays("Soudan", "Khartoum", "Afrique");
const SOUDAN_DU_SUD = new Pays("Soudan du Sud", "Djouba", "Afrique");
const SRI_LANKA = new Pays("Sri Lanka", "Sri Jayawardenapura Kotte", "Asie");
const SUEDE = new Pays("Suède", "Stockholm", "Europe");
const SUISSE = new Pays("Suisse", "Berne", "Europe");
const SURINAME = new Pays("Suriname", "Paramaribo", "Amérique du sud");
const SYRIE = new Pays("Syrie", "Damas", "Asie");
const TADJIKISTAN = new Pays("Tadjikistan", "Douchanbé", "Asie");
const TANZANIE = new Pays("Tanzanie", "Dodoma", "Afrique");
const TCHAD = new Pays("Tchad", "N’Djaména", "Afrique");
const THAILANDE = new Pays("Thaïlande", "Bangkok", "Asie");
const TIMOR_ORIENTAL = new Pays("Timor oriental", "Dili", "Asie");
const TOGO = new Pays("Togo", "Lomé", "Afrique");
const TONGA = new Pays("Tonga", "Nukuʻalofa", "Océanie");
const TRINITE_ET_TOBAGO = new Pays("Trinité-et-Tobago", "Port-d’Espagne", "Amérique du nord");
const TUNISIE = new Pays("Tunisie", "Tunis", "Afrique");
const TURKMENISTAN = new Pays("Turkménistan", "Achgabat", "Asie");
const TURQUIE = new Pays("Turquie", "Ankara", "Eurasie");
const TUVALU = new Pays("Tuvalu", "Funafuti", "Océanie");
const UKRAINE = new Pays("Ukraine", "Kiev", "Europe");
const URUGUAY = new Pays("Uruguay", "Montevideo", "Amérique du sud");
const VANUATU = new Pays("Vanuatu", "Port-Vila", "Océanie");
const VATICAN = new Pays("Vatican", "Vatican", "Europe");
const VENEZUELA = new Pays("Venezuela", "Caracas", "Amérique du sud");
const VIETNAM = new Pays("Viêt Nam", "Hanoi", "Asie");
const YEMEN = new Pays("Yémen", "Sanaa", "Asie");
const ZAMBIE = new Pays("Zambie", "Lusaka", "Afrique");
const ZIMBABWE = new Pays("Zimbabwe", "Harare", "Afrique");

const ILES_COOK = new Pays("Iles Cook", "Avarua", "Océanie");
const KOSOVO = new Pays("Kosovo", "Pristina", "Europe");
const NIUE = new Pays("Niue", "Alofi", "Océanie");
const PALESTINE = new Pays("Palestine", "Ramallah", "Asie");
const TAIWAN = new Pays("Taïwan", "Taipei", "Asie");

const PAYS = [
    AFRIQUE_DU_SUD, AFGHANISTAN, ALBANIE, ALGÉRIE, ALLEMAGNE, ANDORRE, ANGOLA, ANTIGUA_ET_BARBUDA, ARABIE_SAOUDITE,
    ARGENTINE, ARMENIE, AUSTRALIE, AUTRICHE, AZERBAÏDJAN, BAHAMAS, BAHREIN, BANGLADESH, BARBADE, BELGIQUE, BELIZE,
    BÉNIN, BHOUTAN, BIELORUSSIE, BIRMANIE, BOLIVIE, BOSNIE_HERZÉGOVINE, BOTSWANA, BRESIL, BRUNEI, BULGARIE, BURKINA_FASO,
    BURUNDI, CAMBODGE, CAMEROUN, CANADA, CAP_VERT, CHILI, CHINE, CHYPRE, COLOMBIE, COMORES, COREE_DU_NORD, COREE_DU_SUD,
    COSTA_RICA, COTE_IVOIRE, CROATIE, CUBA, DANEMARK, DJIBOUTI, DOMINIQUE, EGYPTE, EMIRATS_ARABES_UNIS, EQUATEUR, ERYTHRÉE,
    ESPAGNE, ESWATINI, ESTONIE, ETATS_UNIS, ETHIOPIE, FIDJI, FINLANDE, FRANCE, GABON, GAMBIE, GEORGIE, GHANA, GRECE,
    GRENADE, GUATEMALA, GUINE, GUINE_EQUATORIALE, GUINEE_BISSAU, GUYANA, HAITI, HONDURAS, HONGRIE, ILES_MARSHALL,
    INDE, INDONÉSIE, IRAK, IRAN, IRLANDE, ISLANDE, ISRAEL, ITALIE, JAMAIQUE, JAPON, JORDANIE, KAZAKHSTAN, KENYA,
    KIRGHIZISTAN, KIRIBATI, KOWEIT, LAOS, LESOTHO, LETTONIE, LIBAN, LIBERIA, LIBYE, LIECHTENSTEIN, LITUANIE, LUXEMBOURG,
    MACEDOINE_DU_NORD, MADAGASCAR, MALAISIE, MALAWI, MALDIVES, MALI, MALTE, MAROC, MAURICE, MAURITANIE, MEXIQUE,
    MICRONESIE, MOLDAVIE, MONACO, MONGOLIE, MONTENEGRO, MOZAMBIQUE, NAMIBIE, NAURU, NEPAL, NICARAGUA, NIGER, NIGERIA,
    NORVEGE, NOUVELLE_ZELANDE, OMAN, OUGANDA, OUZBEKISTAN, PAKISTAN, PALAOS, PANAMA, PAPOUASIE_NOUVELLE_GUINEE,
    PARAGUAY, PAYS_BAS, PEROU, PHILIPPINES, POLOGNE, PORTUGAL, QATAR, REPUBLIQUE_CENTRAFRICAINE, REPUBLIQUE_DEMOCRATIQUE_DU_CONGO,
    REPUBLIQUE_DOMINICAINE, REPUBLIQUE_DU_CONGO, REPUBLIQUE_TCHEQUE, ROUMANIE, ROYAUME_UNI, RUSSIE, RWANDA,
    SAINT_CHRISTOPHE_ET_NIEVES, SAINT_MARIN, SAINT_VINCENT_ET_LES_GRENADINES, SAINTE_LUCIE, SALOMON, SALVADOR, SAMOA,
    SAO_TOME_ET_PRINCIPE, SENEGAL, SERBIE, SEYCHELLES, SIERRA_LEONE, SINGAPOUR, SLOVAQUIE, SLOVENIE, SOMALIE, SOUDAN,
    SOUDAN_DU_SUD, SRI_LANKA, SUEDE, SUISSE, SURINAME, SYRIE, TADJIKISTAN, TANZANIE, TCHAD, THAILANDE, TIMOR_ORIENTAL,
    TOGO, TONGA, TRINITE_ET_TOBAGO, TUNISIE, TURKMENISTAN, TURQUIE, TUVALU, UKRAINE, URUGUAY, VANUATU, VATICAN,
    VENEZUELA, VIETNAM, YEMEN, ZAMBIE, ZIMBABWE
]

let PAYS_EUROPE = PAYS.filter(elt => elt.continent == "Europe" || elt.continent == "Eurasie");
let PAYS_ASIE = PAYS.filter(elt => elt.continent == "Asie" || elt.continent == "Eurasie");
let PAYS_AFRIQUE = PAYS.filter(elt => elt.continent == "Afrique");
let PAYS_AMERIQUE = PAYS.filter(elt => elt.continent == "Amérique du nord" || elt.continent == "Amérique du sud");
let PAYS_AMERIQUE_DU_NORD = PAYS.filter(elt => elt.continent == "Amérique du sud");
let PAYS_AMERIQUE_DU_SUD = PAYS.filter(elt => elt.continent == "Amérique du nord");
let PAYS_OCEANIE = PAYS.filter(elt => elt.continent == "Océanie");

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//if (localStorage.getItem("type") == "1") {
    PAYS_EUROPE = shuffleArray(PAYS_EUROPE);
    PAYS_ASIE = shuffleArray(PAYS_ASIE);
    PAYS_AFRIQUE = shuffleArray(PAYS_AFRIQUE);
    PAYS_AMERIQUE = shuffleArray(PAYS_AMERIQUE);
    PAYS_AMERIQUE_DU_NORD = shuffleArray(PAYS_AMERIQUE_DU_NORD);
    PAYS_AMERIQUE_DU_SUD = shuffleArray(PAYS_AMERIQUE_DU_SUD);
    PAYS_OCEANIE = shuffleArray(PAYS_OCEANIE);
//}

class Departement {
    constructor(name, numero, region, prefecture, options) {
        this.name = name;
        this.numero = numero;
        this.region = region;
        this.prefecture = prefecture;
        this.options = options;
    }
}

const REGIONS = {
    AUVERGNE: "Auvergne-Rhône-Alpes",
    BOURGOGNE: "Bourgogne-Franche-Comté",
    BRETAGNE: "Bretagne",
    CENTRE: "Centre-Val de Loire",
    CORSE: "Corse",
    GRAND_EST: "Grand Est",
    HAUT_DE_FRANCE: "Hauts-de-France",
    IDF: "Île-de-France",
    NORMANDIE: "Normandie",
    NOUVELLE_AQUITAINE: "Nouvelle-Aquitaine",
    OCCITANIE: "Occitanie",
    PAYS_DE_LA_LOIRE: "Pays de la Loire",
    PACA: "Provence-Alpes-Côte d'Azur",
    GUADELOUPE: "Guadeloupe",
    GUYANE: "Guyane",
    REUNION: "La Réunion",
    MAYOTTE: "Mayotte",
    MARTINIQUE: "Martinique"
}

let REGIONS_LIST = [
    REGIONS.AUVERGNE, REGIONS.BOURGOGNE, REGIONS.BRETAGNE, REGIONS.CENTRE, REGIONS.CORSE, REGIONS.GRAND_EST,
    REGIONS.HAUT_DE_FRANCE, REGIONS.IDF, REGIONS.NORMANDIE, REGIONS.NOUVELLE_AQUITAINE, REGIONS.OCCITANIE,
    REGIONS.PAYS_DE_LA_LOIRE, REGIONS.PACA, REGIONS.GUADELOUPE, REGIONS.GUYANE, REGIONS.REUNION, REGIONS.MAYOTTE,
    REGIONS.MARTINIQUE
];

REGIONS_LIST = shuffleArray(REGIONS_LIST);

const AIN = new Departement("Ain", "01", REGIONS.AUVERGNE, "Bourg-en-Bresse");
const AISNE = new Departement("Aisne", "02", REGIONS.HAUT_DE_FRANCE, "Laon");
const ALLIER = new Departement("Allier", "03", REGIONS.AUVERGNE, "Moulins");
const ALPES_DE_HAUTE_PROVENCE = new Departement("Alpes-de-Haute-Provence", "04", REGIONS.PACA, "Digne-les-Bains");
const HAUTES_ALPES = new Departement("Hautes-Alpes", "05", REGIONS.PACA, "Gap");
const ALPES_MARITIMES = new Departement("Alpes-Maritimes", "06", REGIONS.PACA, "Nice");
const ARDECHE = new Departement("Ardèche", "07", REGIONS.AUVERGNE, "Privas");
const ARDENNES = new Departement("Ardennes", "08", REGIONS.GRAND_EST, "Charleville-Mézières");
const ARIEGE = new Departement("Ariege", "09", REGIONS.OCCITANIE, "Foix");
const AUBE = new Departement("Aube", "10", REGIONS.GRAND_EST, "Troyes");
const AUDE = new Departement("Aude", "11", REGIONS.OCCITANIE, "Carcassonne");
const AVEYRON = new Departement("Aveyron", "12", REGIONS.OCCITANIE, "Rodez");
const BOUCHES_DU_RHONE = new Departement("Bouches-du-Rhône", "13", REGIONS.PACA, "Marseille");
const CALVADOS = new Departement("Calvados", "14", REGIONS.NORMANDIE, "Caen");
const CANTAL = new Departement("Cantal", "15", REGIONS.AUVERGNE, "Aurillac");
const CHARENTE = new Departement("Charente", "16", REGIONS.NOUVELLE_AQUITAINE, "Angoulême");
const CHARENTE_MARITIME = new Departement("Charente-Maritime", "17", REGIONS.NOUVELLE_AQUITAINE, "La Rochelle");
const CHER = new Departement("Cher", "18", REGIONS.CENTRE, "Bourges");
const CORREZE = new Departement("Corrèze", "19", REGIONS.NOUVELLE_AQUITAINE, "Tulle");
const CORSE_DU_SUD = new Departement("Corse-du-Sud", "2A", REGIONS.CORSE, "Ajaccio");
const HAUTE_CORSE = new Departement("Haute-Corse", "2B", REGIONS.CORSE, "Bastia");
const COTES_D_OR = new Departement("Côtes-d'Armor", "21", REGIONS.BOURGOGNE, "Dijon");
const COTES_D_ARMOR = new Departement("Côtes-d'Armor", "22", REGIONS.BRETAGNE, "Saint-Brieuc");
const CREUSE = new Departement("Creuse", "23", REGIONS.NOUVELLE_AQUITAINE, "Guéret");
const DORDOGNE = new Departement("Dordogne", "24", REGIONS.NOUVELLE_AQUITAINE, "Périgueux");
const DOUBS = new Departement("Doubs", "25", REGIONS.BOURGOGNE, "Besançon");
const DROME = new Departement("Drôme", "26", REGIONS.AUVERGNE, "Valence");
const EURE = new Departement("Eure", "27", REGIONS.NORMANDIE, "Évreux");
const EURE_ET_LOIR = new Departement("Eure-et-Loir", "28", REGIONS.CENTRE, "Chartres");
const FINISTERE = new Departement("Finistère", "29", REGIONS.BRETAGNE, "Quimper");
const GARD = new Departement("Gard", "30", REGIONS.OCCITANIE, "Nîmes");
const HAUTE_GARONNE = new Departement("Haute-Garonne", "31", REGIONS.OCCITANIE, "Toulouse");
const GERS = new Departement("Gers", "32", REGIONS.OCCITANIE, "Auch");
const GIRONDE = new Departement("Gironde", "33", REGIONS.NOUVELLE_AQUITAINE, "Bordeaux");
const HÉRAULT = new Departement("Hérault", "34", REGIONS.OCCITANIE, "Montpellier");
const ILLE_ET_VILAINE = new Departement("Ille-et-Vilaine", "35", REGIONS.BRETAGNE, "Rennes");
const INDRE = new Departement("Indre", "36", REGIONS.CENTRE, "Châteauroux");
const INDRE_ET_LOIRE = new Departement("Indre-et-Loire", "37", REGIONS.CENTRE, "Tours");
const ISERE = new Departement("Isère", "38", REGIONS.AUVERGNE, "Grenoble");
const JURA = new Departement("Jura", "39", REGIONS.BOURGOGNE, "Lons-le-Saunier");
const LANDES = new Departement("Landes", "40", REGIONS.NOUVELLE_AQUITAINE, "Mont-de-Marsan");
const LOIR_ET_CHER = new Departement("Loire-et-Cher", "41", REGIONS.CENTRE, "Blois");
const LOIRE = new Departement("Loire", "42", REGIONS.AUVERGNE, "Saint-Étienne");
const HAUTE_LOIRE = new Departement("Haute-Loire", "43", REGIONS.AUVERGNE, "Le Puy-en-Velay");
const LOIRE_ATLANTIQUE = new Departement("Loire-Atlantique", "44", REGIONS.PAYS_DE_LA_LOIRE, "Nantes");
const LOIRET = new Departement("Loiret", "45", REGIONS.CENTRE, "Orléans");
const LOT = new Departement("Lot", "46", REGIONS.OCCITANIE, "Cahors");
const LOT_ET_GARONNE = new Departement("Lot-et-Garonne", "47", REGIONS.NOUVELLE_AQUITAINE, "Agen");
const LOZERE = new Departement("Lozère", "48", REGIONS.OCCITANIE, "Mende");
const MAINE_ET_LOIRE = new Departement("Maine-et-Loire", "49", REGIONS.PAYS_DE_LA_LOIRE, "Angers");
const MANCHE = new Departement("Manche", "50", REGIONS.NORMANDIE, "Saint-Lô");
const MARNE = new Departement("Marne", "51", REGIONS.GRAND_EST, "Châlons-en-Champagne");
const HAUTE_MARNE = new Departement("Haute-Marne", "52", REGIONS.GRAND_EST, "Chaumont");
const MAYENNE = new Departement("Mayenne", "53", REGIONS.PAYS_DE_LA_LOIRE, "Laval");
const MEURTHE_ET_MOSELLE = new Departement("Meurthe-et-Moselle", "54", REGIONS.GRAND_EST, "Nancy");
const MEUSE = new Departement("Meuse", "55", REGIONS.GRAND_EST, "Bar-le-Duc");
const MORBIHAN = new Departement("Morbihan", "56", REGIONS.BRETAGNE, "Vannes");
const MOSELLE = new Departement("Moselle", "57", REGIONS.GRAND_EST, "Metz");
const NIEVRE = new Departement("Nièvre", "58", REGIONS.BOURGOGNE, "Nevers");
const NORD = new Departement("Nord", "59", REGIONS.HAUT_DE_FRANCE, "Lille");
const OISE = new Departement("Oise", "60", REGIONS.HAUT_DE_FRANCE, "Beauvais");
const ORNE = new Departement("Orne", "61", REGIONS.NORMANDIE, "Alençon");
const PAS_DE_CALAIS = new Departement("Pas-de-Calais", "62", REGIONS.HAUT_DE_FRANCE, "Arras");
const PUY_DE_DOME = new Departement("Puy-de-Dôme", "63", REGIONS.AUVERGNE, "Clermont-Ferrand");
const PYRENEES_ATLANTIQUES = new Departement("Pyrénées-Atlantiques", "64", REGIONS.NOUVELLE_AQUITAINE, "Pau");
const HAUTES_PYRENEES = new Departement("Hautes-Pyrénées", "65", REGIONS.OCCITANIE, "Tarbes");
const PYRENEES_ORIENTALES = new Departement("Pyrénées-Orientales", "66", REGIONS.OCCITANIE, "Perpignan");
const BAS_RHIN = new Departement("Bas-Rhin", "67", REGIONS.GRAND_EST, "Strasbourg");
const HAUT_RHIN = new Departement("Haut-Rhin", "68", REGIONS.GRAND_EST, "Colmar");
const RHONE = new Departement("Rhône", "69", REGIONS.AUVERGNE, "Lyon");
const HAUTE_SAONE = new Departement("Haute-Saône", "70", REGIONS.BOURGOGNE, "Vesoul");
const SAONE_ET_LOIRE = new Departement("Saône-et-Loire", "71", REGIONS.BOURGOGNE, "Mâcon");
const SARTHE = new Departement("Sarthe", "72", REGIONS.PAYS_DE_LA_LOIRE, "Le Mans");
const SAVOIE = new Departement("Savoie", "73", REGIONS.AUVERGNE, "Chambéry");
const HAUTE_SAVOIE = new Departement("Haute-Savoie", "74", REGIONS.AUVERGNE, "Annecy");
const PARIS = new Departement("Paris", "75", REGIONS.IDF, "Paris");
const SEINE_MARITIME = new Departement("Seine-Maritime", "76", REGIONS.NORMANDIE, "Rouen");
const SEINE_ET_MARNE = new Departement("Seine-et-Marne", "77", REGIONS.IDF, "Melun");
const YVELINES = new Departement("Yvelines", "78", REGIONS.IDF, "Versailles");
const DEUX_SÈVRES = new Departement("Deux-Sèvres", "79", REGIONS.NOUVELLE_AQUITAINE, "Niort");
const SOMME = new Departement("Somme", "80", REGIONS.HAUT_DE_FRANCE, "Amiens");
const TARN = new Departement("Tarn", "81", REGIONS.OCCITANIE, "Albi");
const TARN_ET_GARONNE = new Departement("Tarn-et-Garonne", "82", REGIONS.OCCITANIE, "Montauban");
const VAR = new Departement("Var", "83", REGIONS.PACA, "Toulon");
const VAUCLUSE = new Departement("Vaucluse", "84", REGIONS.PACA, "Avignon");
const VENDEE = new Departement("Vendée", "85", REGIONS.PAYS_DE_LA_LOIRE, "La Roche-sur-Yon");
const VIENNE = new Departement("Vienne", "86", REGIONS.NOUVELLE_AQUITAINE, "Poitiers");
const HAUTE_VIENNE = new Departement("Haute-Vienne", "87", REGIONS.NOUVELLE_AQUITAINE, "Limoges");
const VOSGES = new Departement("Vosges", "88", REGIONS.GRAND_EST, "Épinal");
const YONNE = new Departement("Yonne", "89", REGIONS.BOURGOGNE, "Auxerre");
const TERRITOIRE_DE_BELFORT = new Departement("Territoire de Belfort", "90", REGIONS.BOURGOGNE, "Belfort");
const ESSONNE = new Departement("Essonne", "91", REGIONS.IDF, "Évry-Courcouronnes");
const HAUTS_DE_SEINE = new Departement("Hauts-de-Seine", "92", REGIONS.IDF, "Nanterre");
const SEINE_SUR_MARNE = new Departement("Seine-sur-Marne", "93", REGIONS.IDF, "Bobigny");
const VAL_DE_MARNE = new Departement("Val-de-Marne", "94", REGIONS.IDF, "Créteil");
const VAL_DOISE = new Departement("Val-d'Oise", "95", REGIONS.IDF, "Pontoise");
const GUADELOUPE = new Departement("Guadeloupe", "971", REGIONS.GUADELOUPE, "Basse-Terre");
const MARTINIQUE = new Departement("Martinique", "972", REGIONS.MARTINIQUE, "Fort-de-France");
const GUYANE = new Departement("Guyane", "973", REGIONS.GUYANE, "Cayenne");
const REUNION = new Departement("Réunion", "974", REGIONS.REUNION, "Saint-Denis");
const MAYOTTE = new Departement("Mayotte", "976", REGIONS.MAYOTTE, "Dzaoudzi");

let DEPARTEMENTS = [
    AIN, AISNE, ALLIER, ALPES_DE_HAUTE_PROVENCE, HAUTES_ALPES, ALPES_MARITIMES, ARDECHE, ARDENNES, ARIEGE,
    AUBE, AUDE, AVEYRON, BOUCHES_DU_RHONE, CALVADOS, CHARENTE, CHARENTE_MARITIME, CHER, CORREZE, CORSE_DU_SUD,
    HAUTE_CORSE, COTES_D_OR, COTES_D_ARMOR, CREUSE, DORDOGNE, DOUBS, DROME, EURE, EURE_ET_LOIR, FINISTERE,
    GARD, HAUTE_GARONNE, GERS, GIRONDE, HÉRAULT, ILLE_ET_VILAINE, INDRE, INDRE_ET_LOIRE, ISERE, JURA, LANDES,
    LOIR_ET_CHER, LOIRE, HAUTE_LOIRE, LOIRE_ATLANTIQUE, LOIRET, LOT, LOT_ET_GARONNE, LOZERE, MAINE_ET_LOIRE,
    MANCHE, MARNE, HAUTE_MARNE, MAYENNE, MEURTHE_ET_MOSELLE, MEUSE, MORBIHAN, MOSELLE, NIEVRE, NORD, OISE,
    ORNE, PAS_DE_CALAIS, PUY_DE_DOME, PYRENEES_ATLANTIQUES, HAUTES_PYRENEES, PYRENEES_ORIENTALES, BAS_RHIN,
    HAUT_RHIN, RHONE, HAUTE_SAONE, SAONE_ET_LOIRE, SARTHE, SAVOIE, HAUTE_SAVOIE, PARIS, SEINE_MARITIME,
    SEINE_ET_MARNE, YVELINES, DEUX_SÈVRES, SOMME, TARN, TARN_ET_GARONNE, VAR, VAUCLUSE, VENDEE, VIENNE,
    HAUTE_VIENNE, VOSGES, YONNE, TERRITOIRE_DE_BELFORT, ESSONNE, HAUTS_DE_SEINE, SEINE_SUR_MARNE, VAL_DE_MARNE,
    VAL_DOISE, GUADELOUPE, MARTINIQUE, GUYANE, REUNION, MAYOTTE
];

DEPARTEMENTS = shuffleArray(DEPARTEMENTS);
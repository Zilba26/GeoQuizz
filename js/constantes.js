class Pays {
    constructor(name, capitale, continent, options) {
        this.name = name;
        this.capitale = capitale;
        this.continent = continent;
        this.options = options;
        /*
            Options :
                - statut (partiellement reconnu)
                - alias (nom pays)
        */
    }

    getDrapeau() {
        return "img/flags/" + this.name.toLowerCase().replaceAll(' ', '_')  + ".png";
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
const GEORGIE = new Pays("Georgie", "Tbilissi", "Eurasie");
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
const REPUBLIQUE_DU_CONGO = new Pays("République du Congo", "Brazzaville", "Afrique", {alias: ["Congo"]});
const REPUBLIQUE_TCHEQUE = new Pays("Tchèquie", "Prague", "Europe", {alias: ["République Tchèque"]});
const ROUMANIE = new Pays("Roumanie", "Bucarest", "Europe");
const ROYAUME_UNI = new Pays("Royaume-Uni", "Londres", "Europe");
const RUSSIE = new Pays("Russie", "Moscou", "Eurasie");
const RWANDA = new Pays("Rwanda", "Kigali", "Afrique");
const SAINT_CHRISTOPHE_ET_NIEVES = new Pays("Saint-Christophe-et-Nièvès", "Basseterre", "Amérique du nord", {alias: ["Saint-Kitts-et-Nevis"]});
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

const PAYS_EUROPE = PAYS.filter(elt => elt.continent == "Europe" || elt.continent == "Eurasie");
const PAYS_ASIE = PAYS.filter(elt => elt.continent == "Asie" || elt.continent == "Eurasie");
const PAYS_AFRIQUE = PAYS.filter(elt => elt.continent == "Afrique");
const PAYS_AMERIQUE = PAYS.filter(elt => elt.continent == "Amérique du nord" || elt.continent == "Amérique du sud");
const PAYS_AMERIQUE_DU_NORD = PAYS.filter(elt => elt.continent == "Amérique du sud");
const PAYS_AMERIQUE_DU_SUD = PAYS.filter(elt => elt.continent == "Amérique du nord");
const PAYS_OCEANIE = PAYS.filter(elt => elt.continent == "Océanie");
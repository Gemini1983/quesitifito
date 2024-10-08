const questions = [

    {
        number: 1,
        question: "Domanda 1: Il Regolamento 1107/2009, relativo all'immissione sul mercato dei PF, contiene:",
        answers: {
            a: "le procedure per l'autorizzazione dei PF e alcuni obblighi per gli utilizzatori di PF",
            b: "le procedure per l'immissione sul mercato dei PF e le sanzioni relative",
            c: "le procedure per l'immissione sul mercato dei PF che devono essere applicate da tutti gli Stati  Membri"
        },
        correctAnswer: "a"
    },
    {
        number: 2,
        question: "Domanda 2: Il regolamento CLP, relativo alla classificazione, etichettatura e confezionamento dei PF, prevede:",
        answers: {
            a: "l'obbligo della Scheda dati di Sicurezza per i PF classificati pericolosi",
            b: "l'armonizzazione delle indicazioni di pericolo a livello mondiale",
            c: "l'obbligo di fornire all'acquirente i PF sempre nei loro imballaggi originali"
        },
        correctAnswer: "b"
    },
    {
        number: 3,
        question: "Domanda 3: I Limiti Massimi dei Residui - LMR - sui prodotti destinati all'alimentazione sono fissati:",
        answers: {
            a: "dal Ministero della Salute con appositi decreti",
            b: "da Regolamenti UE",
            c: "da Decisioni della UE che i singoli Stati Membri devono recepire"
        },
        correctAnswer: "b"
    },
    {
        number: 4,
        question: "Domanda 4: In materia di tutela delle acque valgono le:",
        answers: {
            a: "disposizioni comunali",
            b: "le norme nazionali di recepimento delle direttive comunitarie",
            c: "disposizioni regionali"
        },
        correctAnswer: "b"
    },
    {
        number: 5,
        question: "Domanda 5: La direttiva 2009/128/CE riguarda:",
        answers: {
            a: "l'uso sostenibile dei PF",
            b: "l'immissione in commercio dei PF",
            c: "i residui massimi ammessi dei PF sulle derrate destinate al consumo umano e animale"
        },
        correctAnswer: "a"
    },
    {
        number: 6,
        question: "Domanda 6: La direttiva 2009/128/CE, per quanto riguarda la difesa delle colture, prevede che:",
        answers: {
            a: "a partire dall'1 gennaio 2020 tutte le aziende dovranno applicare l'agricoltura biologica",
            b: "a partire dall'1 gennaio 2016 tutte le aziende dovranno applicare i disciplinari regionali di difesa integrata",
            c: "a partire dall'1 gennaio 2014 tutte le aziende devono applicare i principi e criteri della difesa integrata"
        },
        correctAnswer: "c"
    },
    {
        number: 7,
        question: "Domanda 7: Chi può richiedere il certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari?",
        answers: {
            a: "Tutti i lavoratori agricoli",
            b: "Tutti i cittadini maggiorenni",
            c: "Solo chi effettua i trattamenti antiparassitari"
        },
        correctAnswer: "b"
    },
    {
        number: 8,
        question: "Domanda 8: Ogni quanti anni deve essere rinnovato il certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari?",
        answers: {
            a: "10 anni",
            b: "5 anni",
            c: "3 anni"
        },
        correctAnswer: "b"
    },
    {
        number: 9,
        question: "Domanda 9: A cosa serve il certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari?",
        answers: {
            a: "Per acquistare tutti i prodotti fitosanitari destinati ad un uso professionale",
            b: "Per acquistare prodotti fitosanitari classificati come molto tossici, tossici e nocivi",
            c: "Per acquistare prodotti fitosanitari etichettati con il simbolo di pericolo T+ e l'indicazione di pericolo MOLTO TOSSICO"
        },
        correctAnswer: "a"
    },
    {
        number: 10,
        question: "Domanda 10: E' necessario acquisire il certificato di abilitazione per acquistare prodotti fitosanitari pericolosi per l'ambiente?",
        answers: {
            a: "Sempre",
            b: "Sì, perché sono pericolosi",
            c: "Solo quando vengono irrorati su terreni seminativi in pieno campo"
        },
        correctAnswer: "a"
    },
    {
        number: 11,
        question: "Domanda 11: Chi può richiedere il certificato di abilitazione alla vendita dei prodotti fitosanitari?",
        answers: {
            a: "Solo chi è in possesso di un diploma o laurea in discipline agrarie, forestali, biologiche, ambientali, chimiche, mediche e veterinarie",
            b: "Tutti i cittadini maggiorenni",
            c: "Solo chi vende prodotti fitosanitari destinati ad utilizzatori professionali"
        },
        correctAnswer: "a"
    },
    {
        number: 12,
        question: "Domanda 12: E' necessario frequentare un corso di formazione per rinnovare il certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari?",
        answers: {
            a: "Sì",
            b: "No, il corso di formazione è previsto solo per il rilascio del certificato di abilitazione",
            c: "Sì, ma solo se si è smarrito il certificato di abilitazione"
        },
        correctAnswer: "a"
    },
    {
        number: 13,
        question: "Domanda 13: Quali tipi di norme riguardano l'acquisto e l'utilizzo dei prodotti fitosanitari?",
        answers: {
            a: "Normative nazionali",
            b: "Normative comunitarie",
            c: "Normative comunitarie e nazionali"
        },
        correctAnswer: "c"
    },
    {
        number: 14,
        question: "Domanda 14: Quali prodotti fitosanitari può utilizzare un agricoltore hobbista?",
        answers: {
            a: "I prodotti fitosanitari destinati ad utilizzatori non professionali",
            b: "I prodotti fitosanitari non classificati",
            c: "I prodotti fitosanitari per piante ornamentali"
        },
        correctAnswer: "a"
    },
    {
        number: 15,
        question: "Domanda 15: Quali prodotti fitosanitari sono di libera vendita?",
        answers: {
            a: "I prodotti fitosanitari per utilizzatori professionali",
            b: "I prodotti fitosanitari pronti all'uso",
            c: "I prodotti fitosanitari destinati ad essere utilizzati su piante ornamentali o edibili, coltivate in forma amatoriale e destinate all'autoconsumo familiare"
        },
        correctAnswer: "c"
    },
    {
        number: 16,
        question: "Domanda 16: Quale attività svolge il consulente?",
        answers: {
            a: "Autorizza l'immissione in commercio dei prodotti fitosanitari",
            b: "Attività di assistenza tecnica nell'ambito della difesa fitosanitaria integrata e biologica",
            c: "Vendita di prodotti fitosanitari per utilizzatori professionali"
        },
        correctAnswer: "b"
    },
    {
        number: 17,
        question: "Domanda 17: Il contoterzista è considerato:",
        answers: {
            a: "un utilizzatore professionale",
            b: "un distributore",
            c: "un consulente"
        },
        correctAnswer: "a"
    },
    {
        number: 18,
        question: "Domanda 18: Cosa si intende per utilizzatore professionale?",
        answers: {
            a: "Colui che utilizza i prodotti fitosanitari nell'ambito di un'attività professionale sia nel settore agricolo che in altri settori",
            b: "Solo l'Imprenditorie Agricolo Professionalo (IAP) che utilizza i prodotti fitosanitari tossici",
            c: "Solo il contoterzista che utilizza i prodotti fitosanitari tossici"
        },
        correctAnswer: "a"
    },
    {
        number: 19,
        question: "Domanda 19: Cosa si intende per utilizzatore professionale?",
        answers: {
            a: "Colui che utilizza i prodotti fitosanitari nell'ambito di un'attività professionale sia nel settore agricolo che in altri settori",
            b: "Solo l'Imprenditorie Agricolo Professionalo (IAP) che utilizza i prodotti fitosanitari tossici",
            c: "Solo il contoterzista che utilizza i prodotti fitosanitari tossici"
        },
        correctAnswer: "a"
    },
    {
        number: 20,
        question: "Domanda 20: Il PAN prevede l'obbligo di controllo funzionale delle irroratrici?",
        answers: {
            a: "Sì, per tutte le aziende che utilizzano in modo professionale i mezzi irroranti",
            b: "No, è legalmente prevista solo la forma di adesione 'volontaria' al servizio di controllo delle attrezzature",
            c: "Solo per le aziende che aderiscono ad alcune misure del PSR (Piano di sviluppo rurale) o che rientrano nel contesto applicativo dell'OCM ortofrutta"
        },
        correctAnswer: "a"
    },
    {
        number: 21,
        question: "Domanda 21: In merito alle macchine, il PAN prevede:",
        answers: {
            a: "che tutti i mezzi siano opportunamente tarati per evitare l'inquinamento ambientale",
            b: "che le attrezzature irroranti di nuova fabbricazione siano progettate e costruite secondo criteri che tutelino la salute dell'uomo e l'ambiente",
            c: "controlli funzionali periodici delle attrezzature, regolazione o taratura e manutenzione dei mezzi meccanici operanti in agricoltura"
        },
        correctAnswer: "c"
    },
    {
        number: 22,
        question: "Domanda 22: Cos'è il PAN?",
        answers: {
            a: "E' il piano per l'uso sostenibile dei prodotti fitosanitari",
            b: "E' il piano per il controllo funzionale e la taratura delle macchine irroratrici",
            c: "E' il piano per la difesa integrata delle colture agrarie"
        },
        correctAnswer: "a"
    },
    {
        number: 23,
        question: "Domanda 23: Il PAN prevede che?",
        answers: {
            a: "gli utilizzatori professionali abbiano compiuto 18 anni e che siano diplomati o laureati",
            b: "i distributori siano diplomati o laureati",
            c: "i consulenti, se diplomati o laureati in materie agrarie, sono esentati dall'obbligo della frequenza ai corsi di formazione"
        },
        correctAnswer: "b"
    },
    {
        number: 24,
        question: "Domanda 24: Il PAN prevede la possibile di effettuare l'irrorazione aerea?",
        answers: {
            a: "L'irrorazione aerea può essere autorizzata, in deroga, se è un consorzio di tutela a farne richiesta",
            b: "L'irrorazione aerea può essere autorizzata, in deroga, sia per contrastare un'emergenza fitosanitaria che per la difesa ordinaria",
            c: "L'irrorazione aerea è sempre vietata"
        },
        correctAnswer: "b"
    },
    {
        number: 25,
        question: "Domanda 25: Cosa norma il regolamento Reach?",
        answers: {
            a: "La registrazione, la valutazione, l'autorizzazione e la restrizione delle sostanze chimiche",
            b: "I controlli in materia di classificazione, etichettatura ed imballaggio dei prodotti fitosanitari",
            c: "La verifica degli obblighi di pre-registrazione e registrazione delle sostanze attive in quanto tali o in quanto contenute nei prodotti fitosanitari"
        },
        correctAnswer: "a"
    },
    {
        number: 26,
        question: "Domanda 26: E' prevista la sospensione dell'abilitazione dell'utilizzatore professionale quando...",
        answers: {
            a: "si utilizzano prodotti fitosanitari autorizzati in Italia ma non ammessi sulla coltura",
            b: "si utilizzano prodotti fitosanitari illegali o revocati",
            c: "si acquistano prodotti fitosanitari revocati, non autorizzati o illegali"
        },
        correctAnswer: "a"
    },
    {
        number: 27,
        question: "Domanda 27: E' prevista la revoca dell'abilitazione dell'utilizzatore professionale in caso di...",
        answers: {
            a: "reiterazione del mancato rispetto delle indicazioni riportate in etichetta elativamente alle prescrizioni per la tutela della salute o dell'ambiente",
            b: "mancato rispetto delle indicazioni riportate in etichetta relativamente alle prescrizioni per la tutela della salute o dell'ambiente e utilizzo non corretto del prodotto fitosanitario nella fase di distribuzione con il rischio di fenomeni di deriva",
            c: "utilizzo di prodotti fitosanitari autorizzati in Italia ma non ammessi sulla coltura"
        },
        correctAnswer: "a"
    },
    {
        number: 28,
        question: "Domanda 28: E' prevista la revoca dell'abilitazione del distributore in caso di...",
        answers: {
            a: "non corretta conservazione e manipolazione dei prodotti fitosanitari che comportino un rischio per la salute o per l'ambiente",
            b: "reiterazione nel non fornire informazioni o fornire informazioni insufficienti sul corretto uso dei prodotti fitosanitari e dei coadiuvanti, in materia di rischi e sicurezza per la salute umana e per l'ambiente connessi al loro impiego",
            c: "vendita ad utilizzatori non professionali di prodotti destinati ad uso professionale"
        },
        correctAnswer: "b"
    },
    {
        number: 29,
        question: "Domanda 29: E' prevista la sospensione dell'abilitazione del consulente quando...",
        answers: {
            a: "c'è reiterazione nel fornire informazioni non corrette sull'impiego dei prodotti fitosanitari sull'applicazione delle tecniche di difesa integrata e biologica",
            b: "si consiglia l'utilizzo di prodotti fitosanitari non autorizzati, illegali o revocati",
            c: "si forniscono informazioni non corrette sull'impiego dei prodotti fitosanitari e/o sull'applicazione delle tecniche di difesa integrata e biologica"
        },
        correctAnswer: "c"
    },
    {
        number: 30,
        question: "Domanda 30: Le lotte obbligatorie agli organismi nocivi:",
        answers: {
            a: "sono regolamentate da appositi Decreti Ministeriali",
            b: "non sono regolamentate da apposite leggi",
            c: "riguardano tutti gli organismi nocivi ai vegetali"
        },
        correctAnswer: "a"
    },
    {
        number: 31,
        question: "Domanda 31: Le lotte obbligatorie agli organismi nocivi:",
        answers: {
            a: "obbligano i cittadini e le amministrazioni a rispettare determinate prescrizioni fitosanitarie",
            b: "si riferiscono solo alle aziende vivaistiche",
            c: "riguardano solo le specie vegetali economicamente più rilevanti"
        },
        correctAnswer: "a"
    },
    {
        number: 32,
        question: "Domanda 32: E' in vigore un Decreto Ministeriale di lotta obbligatoria per le patate?",
        answers: {
            a: "No",
            b: "Sì",
            c: "Solo pre le patate importate da paesi terzi"
        },
        correctAnswer: "b"
    },
    {
        number: 33,
        question: "Domanda 33: Se una palma di cui siamo proprietari presenta presunti sintomi da punteruolo rosso:",
        answers: {
            a: "la tagliamo ed eliminiamo i residui vegetali trattandoli come rifiuti urbani",
            b: "prima del taglio abbiamo l'obbligo di inoltrare la segnalazione al Servizio Fitosanitario Regionale",
            c: "prima del taglio abbiamo l'obbligo comunicarlo al Corpo Forestale dello Stato"
        },
        correctAnswer: "b"
    },
    {
        number: 34,
        question: "Domanda 34: Che cosa stabiliscono i Decreti di lotta obbligatoria?",
        answers: {
            a: "L'eliminazione di specie erbacee invasive, di nuova comparsa, diffi cilmente controllabili con i diserbanti disponibili",
            b: "Gli interventi diretti a punire la contraffazione ed il traffico illegale dei PF",
            c: "Gli interventi per limitare la diffusione di avversità delle piante particolarmente pericolose"
        },
        correctAnswer: "c"
    },
    {
        number: 35,
        question: "Domanda 35: Le fisiopatie sono:",
        answers: {
            a: "malattie di natura fisiologica",
            b: "malattie di natura virale",
            c: "malattie che inducono sintomi a distribuzione tipicamente asimmetrica"
        },
        correctAnswer: "a"
    },
    {
        number: 36,
        question: "Domanda 36: La presenza di patine e muffe è tipica di malattie:",
        answers: {
            a: "batteriche",
            b: "fungine",
            c: "virali"
        },
        correctAnswer: "b"
    },
    {
        number: 37,
        question: "Domanda 37: Le cocciniglie e le cicaline sono insetti che provocano danno per effetto di:",
        answers: {
            a: "erosioni",
            b: "punture di suzione",
            c: "escavazione di gallerie (mine)"
        },
        correctAnswer: "b"
    },
    {
        number: 38,
        question: "Domanda 38: I nematodi galligeni sono nematodi:",
        answers: {
            a: "fogliari",
            b: "che vivono liberi nel terreno",
            c: "endoparassiti radicicoli"
        },
        correctAnswer: "c"
    },
    {
        number: 39,
        question: "Domanda 39: Come si manifesta la 'stanchezza' del terreno?",
        answers: {
            a: "Con la diminuzione progressiva e costante della produzione e l'aumento delle malattie parassitarie in genere",
            b: "Con l'aumento di tutte le erbe infestanti",
            c: "Con l'accresciuta richiesta di acqua da parte della coltura"
        },
        correctAnswer: "a"
    },
    {
        number: 40,
        question: "Domanda 40: A cosa è dovuta la 'stanchezza' dei terreni?",
        answers: {
            a: "Alle troppe lavorazioni meccaniche e scarsa letamazione",
            b: "All'uso continuo di geodisinfestanti e fertilizzanti chimici",
            c: "Al continuo ripetersi della stessa coltura sullo stesso terreno"
        },
        correctAnswer: "c"
    },
    {
        number: 41,
        question: "Domanda 41: Cosa può provocare la pratica della monocoltura con impiego di prodotti fitosanitari?",
        answers: {
            a: "L'accumulo nel terreno di residui chimici ed il selezionarsi di erbe resistenti",
            b: "La riduzione di malattie delle piante con l'aumento della produzione agricola",
            c: "Il miglioramento della struttura del terreno e della sua fertilità"
        },
        correctAnswer: "a"
    },
    {
        number: 42,
        question: "Domanda 42: Una fisiopatia è un danno alle piante che può derivare da:",
        answers: {
            a: "agenti infettivi e insetti",
            b: "condizioni ambientali non favorevoli",
            c: "solo agenti infettivi o patogeni delle piante"
        },
        correctAnswer: "b"
    },
    {
        number: 43,
        question: "Domanda 43: Gli insetti sono dotati di?",
        answers: {
            a: "quattro paia di zampe",
            b: "tre paia di zampe",
            c: "due paia di ali e di zampe"
        },
        correctAnswer: "b"
    },
    {
        number: 44,
        question: "Domanda 44: Il corpo degli acari si differenzia da quello degli insetti?",
        answers: {
            a: "per avere quattro paia di zampe",
            b: "per essere diviso in tre parti: capo, torace e addome",
            c: "per avere un paio di ali"
        },
        correctAnswer: "a"
    },
    {
        number: 45,
        question: "Domanda 45: Le avversità fungine, in generale sono favorite dalle seguenti condizioni ambientali",
        answers: {
            a: "caldo asciutte",
            b: "freddo eccessivo",
            c: "prolungata umidità e bagnature"
        },
        correctAnswer: "c"
    },
    {
        number: 46,
        question: "Domanda 46: I batteri si possono controllare preferibilmente:",
        answers: {
            a: "con PF antibotici, ma solo se regolarmente registrati sulla coltura",
            b: "con sistemi di prevenzione",
            c: "con interventi a base di rame ogni volta che si irriga o si verifica una pioggia"
        },
        correctAnswer: "b"
    },
    {
        number: 47,
        question: "Domanda 47: Le manifestazioni provocate dai batteri sulle piante sono spesso rappresentate da:",
        answers: {
            a: "maculature, gocce di essudato e marciumi molli",
            b: "presenza di muffe in genere di colore bianco-grigiastro",
            c: "presenza di decolorazioni, anulature e striature con colorazioni anomale"
        },
        correctAnswer: "a"
    },
    {
        number: 48,
        question: "Domanda 48: La flavescenza dorata della vite viene trasmessa da:",
        answers: {
            a: "insetti di diverse specie, come afidi, cimici e cicaline",
            b: "da cicaline che si nutrono della linfa delle piante di vite",
            c: "da afidi che possono trasportare la malattia anche da piante spontanee"
        },
        correctAnswer: "b"
    },
    {
        number: 49,
        question: "Domanda 49: La flavescenza dorata della vite viene trasmessa da:",
        answers: {
            a: "insetti di diverse specie, come afidi, cimici e cicaline",
            b: "da cicaline che si nutrono della linfa delle piante di vite",
            c: "da afidi che possono trasportare la malattia anche da piante spontanee"
        },
        correctAnswer: "b"
    },
    {
        number: 50,
        question: "Domanda 50: Per controllare i fitoplasmi che causano la flavescenza dorata della vite o la moria del pero occorre:",
        answers: {
            a: "effettuare specifici interventi con fungicidi",
            b: "intervenire contro gli insetti vettori, se e quando presenti",
            c: "effettuare lo sfalcio delle erbe infestanti a filari alterni, in modo da favorire il controllo biologico della malattia"
        },
        correctAnswer: "b"
    },
    {
        number: 51,
        question: "Domanda 51: I virus delle piante coltivate possono essere controllati attraverso:",
        answers: {
            a: "prodotti fitosanitari ad attività viricida, ma solo se registrati sulla coltura interessata",
            b: "sia con mezzi preventivi che con prodotti specifici",
            c: "esclusivamente con metodi preventivi"
        },
        correctAnswer: "c"
    },
    {
        number: 52,
        question: "Domanda 52: Gli acari parassiti delle piante:",
        answers: {
            a: "causano prevalentemente decolorazioni, bronzature fogliari e rugginosità sui frutti",
            b: "causano decolorazioni ed erosioni fogliari, oltre all'accartocciamento delle foglie",
            c: "arrecano danni principalmente in quanto sono in grado di propagare altre pericolose malattie, come le virosi"
        },
        correctAnswer: "a"
    },
    {
        number: 53,
        question: "Domanda 53: Gli attacchi di acari sono favoriti da:",
        answers: {
            a: "condizioni climatiche caldo umide e piogge frequenti",
            b: "concimazioni azotate e irrigazioni eccessive",
            c: "temperature elevate e situazioni di stress idrico"
        },
        correctAnswer: "c"
    },
    {
        number: 54,
        question: "Domanda 54: Per il controllo dei nematodi dannosi alle colture è possibile:",
        answers: {
            a: "effettuare rotazioni sufficientemente lunghe",
            b: "lavorare profondamente il terreno in modo da interrare completamente i resti della coltura precedente",
            c: "applicare la tecnica della solarizzazione mantenendo la copertura del terreno con film trasparente per almeno 1 settimana"
        },
        correctAnswer: "a"
    },
    {
        number: 55,
        question: "Domanda 55: Che cosa sono i fitofagi?",
        answers: {
            a: "Sono gli insetti e gli acari dannosi alle colture",
            b: "Sono i virus e i batteri che attaccano le piante coltivate",
            c: "Sono i funghi che danneggiano le colture agrarie"
        },
        correctAnswer: "a"
    },
    {
        number: 56,
        question: "Domanda 56: Che cosa sono gli insetti predatori?",
        answers: {
            a: "Sono specie che si nutrono di insetti o acari dannosi alle piante",
            b: "Sono insetti dannosi che vanno eliminati dalle colture agrarie",
            c: "Sono l'insieme degli insetti utili e dannosi che si possono trovare sulle colture agrarie"
        },
        correctAnswer: "a"
    },
    {
        number: 57,
        question: "Domanda 57: I fitoseidi sono:",
        answers: {
            a: "insetti predatori degli acari dannosi",
            b: "acari predatori di acari dannosi",
            c: "chiamati volgarmente 'ragnetto rosso' possono, in particolari condizioni, arrecare gravi danni alle colture"
        },
        correctAnswer: "b"
    },
    {
        number: 58,
        question: "Domanda 58: Cosa si intende per organismo antagonista?",
        answers: {
            a: "Un organismo che combatte i nemici naturali dei parassiti",
            b: "Un organismo che danneggia le piante",
            c: "Un organismo che combatte i parassiti delle colture"
        },
        correctAnswer: "c"
    },
    {
        number: 59,
        question: "Domanda 59: Un'erba infestante esercita un'azione parassitaria?",
        answers: {
            a: "Si",
            b: "No",
            c: "Dipende dal tipo"
        },
        correctAnswer: "a"
    },
    {
        number: 60,
        question: "Domanda 60: Gli insetti e gli acari presenti sulle colture sono tutti dannosi?",
        answers: {
            a: "No",
            b: "Si",
            c: "Dipende dallo stadio di sviluppo"
        },
        correctAnswer: "a"
    },
    {
        number: 61,
        question: "Domanda 61: In quale stadio di sviluppo la mosca dell'olivo è dannosa?",
        answers: {
            a: "Allo stadio di adulto",
            b: "Allo stadio di uovo e di pupa",
            c: "Allo stadio di larva"
        },
        correctAnswer: "c"
    },
    {
        number: 62,
        question: "Domanda 62: Le api possono danneggiare la vite?",
        answers: {
            a: "Sì, quando rompono gli acini d'uva per succhiarne il succo zuccherino",
            b: "Solo allo stadio di larva",
            c: "No, mai"
        },
        correctAnswer: "c"
    },
    {
        number: 63,
        question: "Domanda 63: Per evitare danni alle api è sufficiente allontanare gli alveari da un frutteto prima di trattarlo con insetticidi?",
        answers: {
            a: "Si, se non sono in periodo riproduttivo",
            b: "No, bisogna anche sfalciare le erbe sottostanti ed evitare di trattare in periodi di fioritura",
            c: "Si, ma di almeno 500 metri dall'area interessata al trattamento"
        },
        correctAnswer: "b"
    },
    {
        number: 64,
        question: "Domanda 64: Sono consentiti i trattamenti insetticidi durante il periodo della fioritura?",
        answers: {
            a: "Sì, su tutte le colture in caso di forti infestazioni",
            b: "Solamente sulle colture erbacee, assolutamente no sui frutteti",
            c: "No, in nessun caso per non danneggiare gli insetti impollinatori"
        },
        correctAnswer: "c"
    },
    {
        number: 65,
        question: "Domanda 65: Il punteruolo rosso della palma:",
        answers: {
            a: "E' un insetto che colpisce le palme ed altre piante arboree",
            b: "E' un batterio",
            c: "E' un insetto che colpisce solo le palme"
        },
        correctAnswer: "c"
    },
    {
        number: 66,
        question: "Domanda 66: Il Cinipide del castagno:",
        answers: {
            a: "causa la comparsa di galle",
            b: "non può essere combattuto con nessun organismo antagonista",
            c: "non è presente nel territorio laziale"
        },
        correctAnswer: "a"
    },
    {
        number: 67,
        question: "Domanda 67: L'essudato rosso che si può riscontrare su piante di Actinidia:",
        answers: {
            a: "non è un sintomo di attacco di PSA",
            b: "E' un tipico sintomo di attacco di PSA",
            c: "E' causato da un insetto"
        },
        correctAnswer: "b"
    },
    {
        number: 68,
        question: "Domanda 68: Il Torymus:",
        answers: {
            a: "E' l'insetto antagonista naturale del Cinipide del castagno",
            b: "E' l'insetto antagonista naturale del Cerambicide asiatico",
            c: "E' un organismo nocivo per le specie erbacee"
        },
        correctAnswer: "a"
    },
    {
        number: 69,
        question: "Domanda 69: Che cosa sono i prodotti fitosanitari?",
        answers: {
            a: "Sono le sostanze attive ed i preparati, contenenti una o più sostanze attive, destinati ad essere utilizzati per il controllo degli organismi nocivi delle colture, per il controllo delle piante infestanti nelle coltivazioni e per favorire o regolare le produzioni vegetali.",
            b: "Sono esclusivamente gli insetticidi e fungicidi utilizzati per la difesa delle piante e delle derrate alimentari",
            c: "Sono tutti i prodotti classificati come molto tossici, tossici e nocivi che vengono utilizzati per la difesa della piante agrarie ed ornamentali"
        },
        correctAnswer: "a"
    },
    {
        number: 70,
        question: "Domanda 70: Che cosa si intende per sostanza attiva?",
        answers: {
            a: "Un prodotto che può essere acquistato solamente da chi possiede il certificato di abilitazione",
            b: "E' la parte del formulato commerciale che serve per migliorare le prestazioni del prodotto",
            c: "E' la sostanza che svolge un'attività di contrasto nei confronti degli organismi nocivi o delle avversità da combattere"
        },
        correctAnswer: "c"
    },
    {
        number: 71,
        question: "Domanda 71: Perchè è importante conoscere l'attività della sostanza attiva?",
        answers: {
            a: "Perchè specifica se il prodotto è nocivo nei confronti degli insetti ed acari utili",
            b: "Perchè indirizza l'agricoltore nella scelta del prodotto in relazione all'avversità da combattere",
            c: "Perchè indica la quantità minima di prodotto necessaria per combattere i parassiti"
        },
        correctAnswer: "b"
    },
    {
        number: 72,
        question: "Domanda 72: Nel campo dei prodotti fitosanitari, cosa si intende per formulazione?",
        answers: {
            a: "Una miscela di due sostanze attive",
            b: "Il procedimento di solubilizzazione in acqua di un prodotto fitosanitario",
            c: "Il prodotto fitosanitario come acquistato dal rivenditore"
        },
        correctAnswer: "c"
    },
    {
        number: 73,
        question: "Domanda 73: Da cosa sono costituiti i coformulanti?",
        answers: {
            a: "Da sostanze inerti o diluenti",
            b: "Da sostanze attive che completano il prodotto fitosanitario",
            c: "Da coadiuvanti"
        },
        correctAnswer: "a"
    },
    {
        number: 74,
        question: "Domanda 74: Cosa sono i coformulanti?",
        answers: {
            a: "Sostanze che agiscono contro i parassiti da combattere",
            b: "Sostanze che completano il prodotto fitosanitario e riducono la concentrazione della sostanza attiva",
            c: "Sostanze che riducono l'intervallo di sicurezza"
        },
        correctAnswer: "b"
    },
    {
        number: 75,
        question: "Domanda 75: Che cosa sono i coadiuvanti?",
        answers: {
            a: "Sostanze che aumentano l'efficacia delle sostanze attive e ne favoriscono la distribuzione",
            b: "Sostanze che aumentano l'efficacia di un prodotto fitosanitario",
            c: "Sostanze che riducono l'intervallo di sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 76,
        question: "Domanda 76: Cosa sono i bagnanti-adesivanti?",
        answers: {
            a: "Prodotti che prevengono le fisiopatie",
            b: "Coadiuvanti di prodotti fitosanitari che favoriscono una maggior copertura della superficie irrorata e aumentano la resistenza al dilavamento",
            c: "Coadiuvanti antischiuma degli erbicidi di post-emergenza"
        },
        correctAnswer: "b"
    },
    {
        number: 77,
        question: "Domanda 77: Cos'è un sospensivante?",
        answers: {
            a: "E' un composto che favorisce la dispersione in acqua di un formulato in polvere bagnabile",
            b: "E' una sostanza altamente instabile",
            c: "E' un composto che favorisce la formazione di una emulsione"
        },
        correctAnswer: "a"
    },
    {
        number: 78,
        question: "Domanda 78: I corroboranti sono:",
        answers: {
            a: "sono sostanze di origine naturale, diverse dai fertilizzanti, che migliorano la resistenza delle piante nei confronti degli organismi nocivi e le proteggono da danni non provocati da parassiti",
            b: "sono sostanze che sostituiscono i coformulanti quando questi non sono già presenti nel prodotto fitosanitario",
            c: "sono sostanze di origine naturale che vengono distribuite al terreno e che aumentano l'assorbimento dei fertilizzanti"
        },
        correctAnswer: "a"
    },
    {
        number: 79,
        question: "Domanda 79: Quali sono i prodotti fitosanitari destinati ad utilizzatori non professionali?",
        answers: {
            a: "Sono tutti i prodotti fitosanitari classificati come non pericolosi",
            b: "Sono i prodotti impiegabili su piante ornamentali e da fiore, in appartamento, balcone e giardino domestico (PPO) e quelli utilizzabili su piante edibili coltivate in forma amatoriale, il cui raccolto sia destinato al consumo familiare, nonché  su tappeti erbosi ed aree incolte",
            c: "Sono tutti i coformulanti in quanto non risultano tossici per l'uomo"
        },
        correctAnswer: "b"
    },
    {
        number: 80,
        question: "Domanda 80: I prodotti impiegabili su piante edibili coltivate in ambito domestico?",
        answers: {
            a: "possono essere acquistati esclusivamente da coloro che possiedono il certificato di abilitazione",
            b: "possono essere acquistati sia dagli utilizzatori non professionali che da coloro che possiedono il certificato di abilitazione",
            c: "possono essere acquistati ovunque e solo dagli utilizzatori non professionali"
        },
        correctAnswer: "b"
    },
    {
        number: 81,
        question: "Domanda 81: Che cosa sono i prodotti fitosanitari anticrittogamici?",
        answers: {
            a: "Sono prodotti idonei per la lotta contro le malattie delle piante causate dai funghi",
            b: "Sono prodotti che servono esclusivamente per il contenimento dei marciumi post-raccolta",
            c: "Sono prodotti idonei per la lotta contro gli acari dannosi alle piante"
        },
        correctAnswer: "a"
    },
    {
        number: 82,
        question: "Domanda 82: E' razionale effettuare trattamenti per prevenire una malattia dovuta a funghi?",
        answers: {
            a: "Si, perché può ridurre l'infezione",
            b: "Si, purchè sia tempestiva",
            c: "No, perché non è in grado di bloccare l'imminente infezione"
        },
        correctAnswer: "b"
    },
    {
        number: 83,
        question: "Domanda 83: Un trattamento fungicida curativo?",
        answers: {
            a: "E' efficace soprattutto se l'intervento è tempestivo",
            b: "non è utile per la coltura perché l'infezione è già in atto",
            c: "deve essere fatto con prodotti citotropici o sistemici"
        },
        correctAnswer: "c"
    },
    {
        number: 84,
        question: "Domanda 84: Qual è la caratteristica di un prodotto fungicida sistemico?",
        answers: {
            a: "La capacità di agire sistematicamente nei confronti di tutte le avversità presenti sulla pianta indipendentemente dal tipo di patogeno",
            b: "La caratteristica di non risultare tossico per l'operatore che effettua il trattamento e di rispettare l'ambiente",
            c: "La capacità di essere assorbito dai tessuti vegetali, di trasferirsi per via linfatica nella pianta, e quindi combattere i patogeni non raggiungibili con i prodotti di copertura"
        },
        correctAnswer: "c"
    },
    {
        number: 85,
        question: "Domanda 85: In quale gruppo si deve scegliere il prodotto da utilizzare per combattere le peronospore dannosi alle colture?",
        answers: {
            a: "Insetticidi",
            b: "Anticrittogamici",
            c: "Acaricidi"
        },
        correctAnswer: "b"
    },
    {
        number: 86,
        question: "Domanda 86: Qual è l'epoca di intervento legata all'attività di un prodotto fungicida di copertura?",
        answers: {
            a: "Preventiva: impedisce lo sviluppo dell'infezione",
            b: "Curativa: consente di combattere la malattia durante l'incubazione",
            c: "Eradicante: blocca lo sviluppo di infezioni già manifeste"
        },
        correctAnswer: "a"
    },
    {
        number: 87,
        question: "Domanda 87: E' corretto utilizzare i prodotti fungicidi con finalità eradicanti?",
        answers: {
            a: "Sì, perché si interviene solo quando la malattia è presente sulla coltura e si evitano trattamenti inutili",
            b: "No, perché il trattamento coSì effettuato risulta eccessivamente costoso",
            c: "No, perché il trattamento può risultare inefficace e si può incorrere nell'insorgenza di fenomeni di resistenza del patogeno"
        },
        correctAnswer: "c"
    },
    {
        number: 88,
        question: "Domanda 88: Quale categoria di antiparassitario utilizzo in caso di infestazione di afidi?",
        answers: {
            a: "Acaricida",
            b: "Insetticida",
            c: "Nematocida"
        },
        correctAnswer: "b"
    },
    {
        number: 89,
        question: "Domanda 89:   Con gli insetticidi di impiego agricolo possono essere trattati i parassiti degli animali?",
        answers: {
            a: "Sì, solamente se questi non producono latte",
            b: "No, mai",
            c: "Sì, solo su ricetta del veterinario"
        },
        correctAnswer: "b"
    },
    {
        number: 90,
        question: "Domanda 90: A che cosa serve un prodotto fitosanitario insetticida?",
        answers: {
            a: "A combattere gli insetti pronubi e antagonisti",
            b: "A combattere le malattie crittogamiche",
            c: "A combattere gli insetti dannosi alle colture (fitofagi)"
        },
        correctAnswer: "c"
    },
    {
        number: 91,
        question: "Domanda 91: E' consigliabile fare un trattamento insetticida preventivo?",
        answers: {
            a: "Si, in quanto si impedisce l'eventuale diffusione dell'infestazione",
            b: "No, perché non è presente il bersaglio cui è diretto il trattamento",
            c: "No, perché rappresenta un onere troppo elevato per l'agricoltore"
        },
        correctAnswer: "b"
    },
    {
        number: 92,
        question: "Domanda 92: Che cosa si intende per selettività di un insetticida?",
        answers: {
            a: "La capacità di agire sugli insetti nocivi pur essendo di bassa tossicità per l'uomo",
            b: "La capacità di eliminare tutti gli insetti presenti nella coltura",
            c: "La capacità di agire nei confronti dei fitofagi e di rispettare il più possibile gli insetti utili"
        },
        correctAnswer: "c"
    },
    {
        number: 93,
        question: "Domanda 93: Nella scelta di un prodotto fitosanitario, è preferibile quello?",
        answers: {
            a: "selettivo",
            b: "a largo spettro d'azione",
            c: "polivalente"
        },
        correctAnswer: "a"
    },
    {
        number: 94,
        question: "Domanda 94: Quale è la modalità di azione dei prodotti insetticidi e acaricidi?",
        answers: {
            a: "Stimolazione delle difese naturali della pianta",
            b: "Limitazione dell'accoppiamento tra maschi e femmine",
            c: "Ingestione, contatto e asfissia"
        },
        correctAnswer: "c"
    },
    {
        number: 95,
        question: "Domanda 95: Fra le modalità d'azione degli insetticidi quale è la più selettiva?",
        answers: {
            a: "Per contatto",
            b: "Per ingestione",
            c: "Per asfissia"
        },
        correctAnswer: "b"
    },
    {
        number: 96,
        question: "Domanda 96: E' importante conoscere gli stadi di sviluppo degli insetti?",
        answers: {
            a: "Sì, per definire l'epoca di intervento in relazione al prodotto impiegato",
            b: "Sì, perché gli insetticidi agiscono solo sulle larve e non sugli altri stadi di sviluppo",
            c: "No, non influisce sull'effetto del trattamento se l'insetticida è a largo spettro d'azione"
        },
        correctAnswer: "a"
    },
    {
        number: 97,
        question: "Domanda 97: In presenza di resistenza ad un insetticida, che cos'è opportuno fare?",
        answers: {
            a: "Aumentare il dosaggio del prodotto in questione e ripetere l'intervento frequentemente",
            b: "Utilizzare prodotti tossici o molto tossici per eliminare gli insetti dannosi resistenti all'insetticida in",
            c: "questione prodotti fitossanitari con diverso meccanismo d'azione Alternare"
        },
        correctAnswer: "c"
    },
    {
        number: 98,
        question: "Domanda 98: In presenza di un'infestazione da insetti dannosi come è possibile intervenire?",
        answers: {
            a: "Utilizzando i feromoni",
            b: "Utilizzando i fitoregolarori",
            c: "Utilizzando i fertilizzanti"
        },
        correctAnswer: "a"
    },
    {
        number: 99,
        question: "Domanda 99: L'uso dei feromoni nella difesa delle colture determina?",
        answers: {
            a: "la morte degli insetti dannosi",
            b: "il disorientamento sessuale degli insetti",
            c: "la mutazione genetica dei fitofagi"
        },
        correctAnswer: "b"
    },
    {
        number: 100,
        question: "Domanda 100: Il bacillus thuringiensis utilizzato in agricoltura è:",
        answers: {
            a: "un attrattivo sessuale degli insetti",
            b: "regolatore di sviluppo e sterilizzante dei fitofagi",
            c: "un bio-insetticida"
        },
        correctAnswer: "c"
    },
    {
        number: 101,
        question: "Domanda 101: A che cosa serve un prodotto fitosanitario acaricida?",
        answers: {
            a: "A combattere gli insetti parassiti degli animali",
            b: "A combattere le malattie crittogamiche",
            c: "A combattere gli acari dannosi alle piante"
        },
        correctAnswer: "c"
    },
    {
        number: 102,
        question: "Domanda 102: A che cosa serve un prodotto fitosanitario diserbante?",
        answers: {
            a: "A contenere lo sviluppo indesiderato delle erbe infestanti",
            b: "Ad eliminare tutte le piante infestate da organismi nocivi",
            c: "Al solo diserbo di fossi, canali e giardini"
        },
        correctAnswer: "a"
    },
    {
        number: 103,
        question: "Domanda 103: Che cosa si intende per selettività di un diserbante?",
        answers: {
            a: "Che solo la coltura è danneggiata mentre le erbe infestanti sono risparmiate",
            b: "Che il prodotto agisce sulle erbe infestanti da controllare rispettando la coltura",
            c: "Che il prodotto agisce sulle erbe infestanti da controllare rispettando gli insetti ed acari utili"
        },
        correctAnswer: "b"
    },
    {
        number: 104,
        question: "Domanda 104: In base alla modalità d'azione, quali erbicidi possono influire negativamente sulla coltura che segue quella trattata?",
        answers: {
            a: "Disseccanti",
            b: "Antigerminanti residuali",
            c: "Ad assorbimento fogliare sistemico"
        },
        correctAnswer: "b"
    },
    {
        number: 105,
        question: "Domanda 105: Con quale altro termine si definiscono gli erbicidi?",
        answers: {
            a: "Fitoregolatori",
            b: "Disseccanti",
            c: "Diserbanti"
        },
        correctAnswer: "c"
    },
    {
        number: 106,
        question: "Domanda 106: Per combattere le erbe infestanti perenni è conveniente?",
        answers: {
            a: "usare prodotti erbicidi a largo spettro d'azione",
            b: "usare prodotti erbicidi che agiscono per contatto",
            c: "usare prodotti erbicidi traslocabili"
        },
        correctAnswer: "c"
    },
    {
        number: 107,
        question: "Domanda 107: Un erbicida che agisce per contatto può essere usato efficacemente?",
        answers: {
            a: "su tutti i tipi di erbe infestanti",
            b: "solo sulle erbe infestanti annuali",
            c: "solo sulle erbe infestanti perenni"
        },
        correctAnswer: "b"
    },
    {
        number: 108,
        question: "Domanda 108: Non rispettare l'epoca di intervento riportata sull'etichetta di un diserbante può dar luogo a:",
        answers: {
            a: "danni consistenti alla coltura o alla sua distruzione",
            b: "nessun danno perché i diserbanti vengono applicati solo in pre-semina",
            c: "danni consistenti soltanto se si interviene dopo una pioggia"
        },
        correctAnswer: "a"
    },
    {
        number: 109,
        question: "Domanda 109: L'uso ripetuto degli stessi erbicidi può dar luogo:",
        answers: {
            a: "alla presenza di piante rinate della coltura precedente",
            b: "a malerbe resistenti agli erbicidi impiegati, che si diffondono con il tempo",
            c: "a malerbe che soffocano la coltura"
        },
        correctAnswer: "b"
    },
    {
        number: 110,
        question: "Domanda 110: Quali fenomeni si possono manifestare impiegando un erbicida a dose più alta di quella consigliata?",
        answers: {
            a: "Aumento della produzione perché si eliminano tutte le infestanti",
            b: "Nessuno, se dato in pre-emergenza",
            c: "Fitotossicità per la coltura"
        },
        correctAnswer: "c"
    },
    {
        number: 111,
        question: "Domanda 111: Cosa sono i prodotti fitosanitari fitoregolatori?",
        answers: {
            a: "Prodotti utilizzati per combattere le malattie crittogamiche",
            b: "Prodotti impiegati per la concia delle sementi",
            c: "Prodotti di sintesi che promuovono o inibiscono determinati processi naturali delle piante"
        },
        correctAnswer: "c"
    },
    {
        number: 112,
        question: "Domanda 112: I fitoregolatori sono prodotti utilizzati in agricoltura per?",
        answers: {
            a: "limitare la diffusione delle erbe infestanti",
            b: "proteggere i vegetali dagli organismi nocivi",
            c: "favorire o regolare i processi vitali delle piante"
        },
        correctAnswer: "c"
    },
    {
        number: 113,
        question: "Domanda 113: Cos'è un prodotto fitosanitario 'regolatore di crescita'?",
        answers: {
            a: "E' una sostanza attiva che stimola crescita e difese naturali delle piante contro i parassiti",
            b: "E' una sostanza attiva che interferisce con il sistema ormonale del fitofago impedendo o danneggiando la formazione dell'adulto",
            c: "E' una sostanza attiva che interferisce con i processi cellulari del fungo impedendo o danneggiando la formazione delle spore"
        },
        correctAnswer: "b"
    },
    {
        number: 114,
        question: "Domanda 114: Cos'è l'azione citotropica segnalata nell'etichetta di alcuni prodotti?",
        answers: {
            a: "E' l'azione di penetrazione della sostanza attiva nei tessuti vegetali",
            b: "E' la capacità della sostanza attiva di traslocare all'interno del sistema linfatico della pianta",
            c: "E' l'azione di copertura svolta della sostanza attiva sulla vegetazione"
        },
        correctAnswer: "a"
    },
    {
        number: 115,
        question: "Domanda 115: Quando un prodotto fitosanitario svolge un'azione citotropica-translaminare?",
        answers: {
            a: "Quando è capace di penetrare nelle foglie e di traslocare a livello sistemico nel resto della pianta",
            b: "Quando è capace di penetrare nelle foglie e di raggiungere la parte opposta a quella direttamente interessata dal trattamento",
            c: "Quando ha una traslocazione esclusivamente basipeta"
        },
        correctAnswer: "b"
    },
    {
        number: 116,
        question: "Domanda 116: Cosa si intende per prodotto fitosanitario fitotossico?",
        answers: {
            a: "Che è mortale per l'uomo",
            b: "Che provoca danni alle colture trattate",
            c: "Che provoca danni all'entomofauna utile"
        },
        correctAnswer: "b"
    },
    {
        number: 117,
        question: "Domanda 117: La fitotossicità può essere causata dalla?",
        answers: {
            a: "eccessiva concentrazione della sostanza attiva",
            b: "bassa concentrazione della sostanza attiva",
            c: "giusta concentrazione della sostanza attiva"
        },
        correctAnswer: "a"
    },
    {
        number: 118,
        question: "Domanda 118: In quali condizioni è consigliabile utilizzare i fungicidi a base di zolfo?",
        answers: {
            a: "Con il sole e senza vento",
            b: "Nelle ore più fresche della giornata",
            c: "Di notte in presenza di ventilazione moderata"
        },
        correctAnswer: "b"
    },
    {
        number: 119,
        question: "Domanda 119: Che cosa è la persistenza d'azione di un prodotto fitosanitario?",
        answers: {
            a: "La capacità di non essere asportato dalla pioggia",
            b: "La capacità di essere attivo nel tempo, nei confronti delle avversità per cui è registrato",
            c: "La capacità di agire anche durante il riposo vegetativo di una pianta"
        },
        correctAnswer: "b"
    },
    {
        number: 120,
        question: "Domanda 120: E' possibile miscelare prodotti fitosanitari diversi?",
        answers: {
            a: "No, mai",
            b: "Sì, previa consultazione delle indicazioni di compatibilità riportate in etichetta",
            c: "Sì sempre, se aventi la medesima classificazione d'uso"
        },
        correctAnswer: "b"
    },
    {
        number: 121,
        question: "Domanda 121: Prima di miscelare due prodotti fitosanitari per un trattamento, cosa bisogna fare?",
        answers: {
            a: "Preparare una dose doppia di acqua, perché i prodotti sono due",
            b: "Preparare due soluzioni distinte e poi unirle, per renderle complementari",
            c: "Leggere la voce compatibilità sulle due etichette"
        },
        correctAnswer: "c"
    },
    {
        number: 122,
        question: "Domanda 122: Perchè si sceglie di usare una miscela?",
        answers: {
            a: "Per ridurre i costi dei trattamenti",
            b: "Per effettuare, con un solo passaggio, un trattamento erbicida ed insetticida",
            c: "Per essere più tempestivi nell'effettuazione dei trattamenti"
        },
        correctAnswer: "a"
    },
    {
        number: 123,
        question: "Domanda 123: Cosa si intende per compatibilità?",
        answers: {
            a: "La possibilità di miscelare solo prodotti acidi tra loro, solo prodotti alcalini tra loro e prodotti neutri con tutti gli altri",
            b: "La possibilità di miscelare prodotti acidi sia con prodotti alcalini che neutri",
            c: "La possibilità di miscelare tra loro solo i prodotti alcalini e quelli neutri con tutti gli altri"
        },
        correctAnswer: "a"
    },
    {
        number: 124,
        question: "Domanda 124: Cosa si intende per prodotto neutro?",
        answers: {
            a: "Un prodotto che, per problemi di incompatibilità chimica, non è possibile miscelare",
            b: "Un prodotto che risulta compatibile esclusivamente con i prodotti basici",
            c: "Un prodotto che risulta compatibile con prodotti acidi, basici e neutri"
        },
        correctAnswer: "c"
    },
    {
        number: 125,
        question: "Domanda 125: Quali prodotti fitosanitari non è possibile miscelare?",
        answers: {
            a: "Più insetticidi",
            b: "Insetticidi e fungicidi",
            c: "Insetticidi ed erbicidi"
        },
        correctAnswer: "c"
    },
    {
        number: 126,
        question: "Domanda 126: Per 'prodotto fitosanitario non miscibile con prodotti alcalini' si intende....",
        answers: {
            a: "un prodotto fitosanitario miscibile con prodotti acidi o neutri",
            b: "un prodotto fitosanitario miscibile esclusivamente con prodotti basici",
            c: "un prodotto fitosanitario che è miscibile solo con insetticidi o fungicidi"
        },
        correctAnswer: "a"
    },
    {
        number: 127,
        question: "Domanda 127: Quando l'operatore agricolo miscela due o più prodotti fitosanitari con intervalli di sicurezza diversi, dopo quanti giorni può effettuare la raccolta?",
        answers: {
            a: "Dopo il numero di giorni indicato sul prodotto con il tempo di carenza più lungo",
            b: "Dopo il numero di giorni indicato per il prodotto più tossico",
            c: "Non prima di venti giorni"
        },
        correctAnswer: "a"
    },
    {
        number: 128,
        question: "Domanda 128: Cosa sono i trattamenti a secco?",
        answers: {
            a: "I diserbi eseguiti su terreno libero",
            b: "I trattamenti che non hanno bisogno di acqua come mezzo disperdente",
            c: "I trattamenti eseguiti con la pompa a spalla"
        },
        correctAnswer: "b"
    },
    {
        number: 129,
        question: "Domanda 129: Cos'è un formulato 'flowable'?",
        answers: {
            a: "E' una sospensione fluida molto stabile in cui è dispersa una sostanza attiva solida",
            b: "E' una formulazione polverulenta idonea per trattamenti ad alti volumi",
            c: "E' una sospensione in cui la sostanza attiva dispersa è allo stato liquido"
        },
        correctAnswer: "a"
    },
    {
        number: 130,
        question: "Domanda 130: Cos'è una sospensione microincapsulata?",
        answers: {
            a: "E' quella in cui la sostanza attiva risulta racchiusa in piccoli sacchetti predosati",
            b: "E' quella in cui la sostanza attiva, allo stato solido, è suddivisa in tante piccolissime capsule",
            c: "E' quella in cui la sostanza attiva, dispersa allo stato liquido, è circondata da una membrana porosa"
        },
        correctAnswer: "c"
    },
    {
        number: 131,
        question: "Domanda 131: Quali vantaggi offrono le nuove formulazioni dei prodotti fitosanitari (es. granuli idrodisperdibili, fluido microincapsulato, ecc.)?",
        answers: {
            a: "Nessuno, la loro efficacia non cambia",
            b: "Economici, in quanto diminuisce la quantità di prodotto che viene distribuita sulla coltura",
            c: "Minore pericolosità per l'operatore e maggiore facilità nella preparazione della miscela"
        },
        correctAnswer: "c"
    },
    {
        number: 132,
        question: "Domanda 132: In caso si riscontri una minore efficacia del trattamento, cosa è opportuno fare?",
        answers: {
            a: "Aumentare la dose del prodotto impiegato per aumentare proporzionalmente l'efficacia del trattamento",
            b: "Sostituire il prodotto impiegato con uno più tossico e caratterizzato da una differente modalità di azione",
            c: "Consultare un tecnico specializzato ed eventualmente sostituire il prodotto con un altro, registrato per la coltura e l'avversità da combattere"
        },
        correctAnswer: "c"
    },
    {
        number: 133,
        question: "Domanda 133: Cosa sono i trattamenti a calendario?",
        answers: {
            a: "Sono quelli consigliati sui lunari",
            b: "Sono quelli effettuati a date fisse uguali ogni anno",
            c: "Sono quelli effettuati a scopo cautelativo in momenti fenologici prestabiliti senza tenere conto della presenza del parassita"
        },
        correctAnswer: "c"
    },
    {
        number: 134,
        question: "Domanda 134: Quali inconvenienti ha determinato l'uso indiscriminato della lotta chimica?",
        answers: {
            a: "La selezione di popolazioni di insetti resistenti ai prodotti fitosanitari",
            b: "La selezione di popolazioni di insetti antagonisti",
            c: "La comparsa della fitotossicità"
        },
        correctAnswer: "a"
    },
    {
        number: 135,
        question: "Domanda 135: Nella lotta ai fitofagi sono da preferire gli insetticidi di prima e seconda generazione oppure quelli di terza e quarta?",
        answers: {
            a: "Sono da preferire gli insetticidi di prima e seconda generazione",
            b: "Sono da preferire gli insetticidi di terza e quarta generazione",
            c: "Dipende dal tipo di insetto che si vuole combattere"
        },
        correctAnswer: "b"
    },
    {
        number: 136,
        question: "Domanda 136: E' corretto eseguire i trattamenti fitosanitari a calendario seguendo esclusivamente le fasi fenologiche?",
        answers: {
            a: "No, perché non si è certi che il parassita sia presente, o abbia raggiunto un livello di reale dannosità per la coltura",
            b: "Sì, perché coSì si è sicuri di colpire in tempo l'avversità da combattere",
            c: "Sì, ma solo se il trattamento viene effettuato a scopo preventivo con prodotti di copertura"
        },
        correctAnswer: "a"
    },
    {
        number: 137,
        question: "Domanda 137: Su cosa si basa la lotta guidata?",
        answers: {
            a: "Sulla valutazione del costo dell'intervento fitosanitario rispetto al danno economico previsto",
            b: "Sull'esecuzione dei trattamenti a turni fissi in base dell'andamento meteorologico",
            c: "Sulla presenza di una guida tecnica nell'ambito delle rivendite o di un consulente all'interno dell'azienda che decide le strategie di difesa fitosanitaria"
        },
        correctAnswer: "a"
    },
    {
        number: 138,
        question: "Domanda 138: Cosa si intende per soglia economica di intervento?",
        answers: {
            a: "La presenza del parassita in percentuale tale da giustificare il trattamento",
            b: "La presenza del parassita in misura tale da provocare un danno alla coltura",
            c: "Il limite di infestazione o infezione oltre il quale la pianta viene danneggiata"
        },
        correctAnswer: "a"
    },
    {
        number: 139,
        question: "Domanda 139: Quando si raggiunge la soglia economica di intervento?",
        answers: {
            a: "Nel momento in cui, in base alle condizioni meteorologiche ed alla percentuale di infestazione, risulta conveniente effettuare il trattamento",
            b: "Nel momento in cui la presunta perdita di prodotto supera il costo del trattamento",
            c: "Nel momento in cui arriva l'epoca prevista per iniziare i trattamenti su una determinata coltura, contro uno specifico parassita"
        },
        correctAnswer: "b"
    },
    {
        number: 140,
        question: "Domanda 140: A cosa servono le trappole a feromoni nella lotta guidata?",
        answers: {
            a: "Ad evidenziare la presenza degli insetti utili",
            b: "Ad evidenziare la presenza ed il grado di infestazione di un parassita",
            c: "A catturare le femmine che devono deporre le uova"
        },
        correctAnswer: "b"
    },
    {
        number: 141,
        question: "Domanda 141: Qual è un possibile mezzo di previsione delle infezioni fungine e quindi della necessità di effettuare i trattamenti ?",
        answers: {
            a: "Il controllo dei parametri meteorologici",
            b: "Il controllo dell'umidità relativa dell'aria",
            c: "Non esistono mezzi di previsione, ai primi sintomi occorre trattare tempestivamente"
        },
        correctAnswer: "a"
    },
    {
        number: 142,
        question: "Domanda 142: Cos'è una stazione agrometeorologica?",
        answers: {
            a: "Una struttura coperta, presente nel campo, contenente strumentazioni per il rilevamento della piovosit?",
            b: "Una struttura coperta, presente nel campo, contenente strumentazioni per il rilevamento dei dati meteorologici",
            c: "Uno strumento che elabora e trasmette i dati meteorologici"
        },
        correctAnswer: "b"
    },
    {
        number: 143,
        question: "Domanda 143: Quando è il momento adatto per effettuare il primo trattamento contro la peronospora della vite?",
        answers: {
            a: "Quando la vite 'piange': si tratta del periodo in cui la pianta risulta più suscettibile all'infezione peronosporica",
            b: "Quando sulla pagina superiore delle foglie sono visibili le 'macchie d'olio': segni evidenti dell'avvenuta infezione peronosporica",
            c: "Con germogli di 10 cm di lunghezza, dopo una pioggia di almeno 10 mm e con una temperatura minima di almeno 10 °C"
        },
        correctAnswer: "c"
    },
    {
        number: 144,
        question: "Domanda 144: Cos'è la regola dei 'tre dieci' ?",
        answers: {
            a: "Un metodo per stimare l'inizio dell'infezione peronosporica ed il momento per effettuare il relativo trattamento",
            b: "Un metodo per ricordare il sesto d'impianto della vite e predisporre il giusto volume di distribuzione del prodotto",
            c: "La proporzione che deve essere mantenuta tra insetticidi, fungicidi ed acaricidi usati sulla vite nei trattamenti"
        },
        correctAnswer: "a"
    },
    {
        number: 145,
        question: "Domanda 145: Come avviene la valutazione della soglia di intervento?",
        answers: {
            a: "Valutando la scadenza del precedente intervento fitosanitario in base alle caratteristiche del prodotto utilizzato",
            b: "Attraverso monitoraggi e campionamenti di campo effettuati con procedura standard e ripetibile",
            c: "Dividendo il numero di piante presenti nel campo coltivato per il numero di trattamenti fatti in un anno"
        },
        correctAnswer: "b"
    },
    {
        number: 146,
        question: "Domanda 146: Cosa si intende per lotta integrata?",
        answers: {
            a: "L'utilizzo di tutti i fattori e le tecniche di difesa disponibili, siano esse di natura chimica, fisica, agronomica, biologica, biotecnologica",
            b: "L'utilizzo integrato di prodotti fitosanitari selettivi, dopo un'attenta lettura delle etichette",
            c: "L'utilizzo di antagonisti naturali per il contenimento degli organismi dannosi"
        },
        correctAnswer: "a"
    },
    {
        number: 147,
        question: "Domanda 147: Cosa si intende per lotta fitopatologica integrata?",
        answers: {
            a: "L'uso congiunto e razionale di mezzi agronomici, fisici, biologici e chimici",
            b: "L'insieme dei prodotti fitosanitari utilizzati e riportati sul registro dei trattamenti",
            c: "L'uso congiunto e razionale di insetticidi, fungicidi ed erbicidi"
        },
        correctAnswer: "a"
    },
    {
        number: 148,
        question: "Domanda 148: Cosa prevede la difesa integrata volontaria?",
        answers: {
            a: "Il rispetto dei disciplinari di produzione integrata",
            b: "Il divieto dell'utilizzo di prodotti fitosanitari di sintesi",
            c: "La drastica riduzione del numero dei trattamenti"
        },
        correctAnswer: "a"
    },
    {
        number: 149,
        question: "Domanda 149: Qual è l'obiettivo della produzione integrata?",
        answers: {
            a: "L'ottenimento di produzioni di qualità nel rispetto del produttore, del consumatore e dell'ambiente",
            b: "Favorire la produzione di prodotti integrali e biologici",
            c: "Incentivare, attraverso aiuti economici, la costituzione di aziende ad indirizzo misto zootecnico e fruttiviticolo"
        },
        correctAnswer: "a"
    },
    {
        number: 150,
        question: "Domanda 150: Cosa si intende per lotta biologica?",
        answers: {
            a: "La totale abolizione dell'impiego di prodotti fitosanitari molto tossici, tossici e nocivi",
            b: "L'uso di antagonisti naturali per contenere le popolazioni degli organismi dannosi alle colture",
            c: "L'impiego di prodotti fitosanitari selettivi che non eliminano gli insetti utili"
        },
        correctAnswer: "b"
    },
    {
        number: 151,
        question: "Domanda 151: Le tecniche di lotta biologica possono essere utilizzate solo in agricoltura biologica?",
        answers: {
            a: "No, anche nell'agricoltura tradizionale, integrata, nonché  nell'ambiente forestale ed urbano",
            b: "Sì, poichè per utilizzare queste tecniche occorre aderire ad un regolamento comunitario specifico",
            c: "Sì, perché lotta e agricoltura biologica sono la stessa cosa"
        },
        correctAnswer: "a"
    },
    {
        number: 152,
        question: "Domanda 152: Che cosa si intende per agricoltura biologica?",
        answers: {
            a: "Un sistema di produzione compatibile con l'ambiente che per la difesa delle colture si basa sull'abolizione dei prodotti fitosanitari",
            b: "Un sistema di produzione compatibile con l'ambiente che per la difesa delle colture si basa sull'impiego di soli prodotti fitosanitari non classificati",
            c: "Un sistema di produzione compatibile con l'ambiente che per la difesa delle colture si basa sull'abolizione delle sostanze chimiche di sintesi"
        },
        correctAnswer: "c"
    },
    {
        number: 153,
        question: "Domanda 153: Quali prodotti fitosanitari possono essere utilizzati per la produzione biologica?",
        answers: {
            a: "Nessuno",
            b: "Solo quelli definiti biologici",
            c: "Solo quelli indicati da un apposito regolamento"
        },
        correctAnswer: "c"
    },
    {
        number: 154,
        question: "Domanda 154: Cos'è la solarizzazione?",
        answers: {
            a: "L'installazione di apparecchiature per misurare la radiazione solare",
            b: "Il numero di ore di insolazione giornaliera",
            c: "La sterilizzazione del terreno tramite le radiazioni solari"
        },
        correctAnswer: "c"
    },
    {
        number: 155,
        question: "Domanda 155: Quali vantaggi comporta la pacciamatura?",
        answers: {
            a: "Favorisce la maturazione dei frutti",
            b: "Impedisce lo sviluppo delle erbe infestanti",
            c: "Protegge la coltura in atto dai parassiti del terreno"
        },
        correctAnswer: "b"
    },
    {
        number: 156,
        question: "Domanda 156: Nella lotta biologica in serra si utilizzano?",
        answers: {
            a: "agenti chimici non nocivi",
            b: "prodotti con breve tempo di carenza",
            c: "antagonisti naturali dei nemici delle piante"
        },
        correctAnswer: "c"
    },
    {
        number: 157,
        question: "Domanda 157: La difesa fitosanitaria a basso apporto di prodotti fitosanitari include:",
        answers: {
            a: "sia la difesa integrata che la lotta a calendario",
            b: "sia la difesa integrata che la lotta guidata",
            c: "sia la difesa integrata che l'agricoltura biologica"
        },
        correctAnswer: "c"
    },
    {
        number: 158,
        question: "Domanda 158: Tra le seguenti pratiche colturali, quali possono favorire lo sviluppo di una malattia nelle piante?",
        answers: {
            a: "Le concimazioni azotate abbondanti",
            b: "Le rotazioni colturali lunghe",
            c: "Le sistemazioni del terreno"
        },
        correctAnswer: "a"
    },
    {
        number: 159,
        question: "Domanda 159: Cosa significa il parametro della Dose Letale 50 (DL50)?",
        answers: {
            a: "Il 50% del prodotto può essere letale per via ingestiva, cutanea e inalatoria",
            b: "La dose che uccide il 50% degli animali da esperimento sottoposti al trattamento",
            c: "La dose da diluire al 50% per avere un'azione tossica per gli animali da esperimento per via ingestiva in maniera superiore a quella inalatoria"
        },
        correctAnswer: "b"
    },
    {
        number: 160,
        question: "Domanda 160: Cosa significa il parametro della Concentrazione Letale 50 (CL50)?",
        answers: {
            a: "La dose di aria satura di prodotto fitosanitario che viene somministrata a 50 animali da esperimento su un totale di 100, mentre ai rimanenti 50 animali viene somministrata dell'acqua satura di prodotto fitosanitario concentrato",
            b: "La concentrazione in aria o acqua del prodotto che agisce allo stato di gas o di vapore e che ottiene lo stesso effetto della Dose Letale 50",
            c: "Il 50% del prodotto che può essere letale per via ingestiva, cutanea e inalatoria"
        },
        correctAnswer: "b"
    },
    {
        number: 161,
        question: "Domanda 161: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari molto tossici?",
        answers: {
            a: "Sono etichettati e contrassegnati con croce di Sant'Andrea in un riquadro rettangolare di colore giallo-arancio e l'indicazione di pericolo Molto Tossico",
            b: "Sono etichettati e contrassegnati in caratteri ben visibili: attenzione, manipolare con prudenza 'Prodotto Molto Tossico",
            c: "Sono etichettati e contrassegnati con il simbolo di pericolo T+, con teschio su tibie incrociate di colore nero in campo giallo arancione e l'indicazione di pericolo Molto Tossico"
        },
        correctAnswer: "c"
    },
    {
        number: 162,
        question: "Domanda 162: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari tossici?",
        answers: {
            a: "Sono etichettati e contrassegnati con il simbolo di pericolo T, con teschio su tibie incrociate di colore nero in campo giallo arancione e l'indicazione di pericolo Tossico",
            b: "Sono etichettati e contrassegnati in caratteri ben visibili: attenzione, manipolare con prudenza 'Prodotto Tossico'",
            c: "Sono etichettati e contrassegnati con croce di Sant'Andrea in un riquadro rettangolare di colore giallo-arancio e la scritta Tossico"
        },
        correctAnswer: "a"
    },
    {
        number: 163,
        question: "Domanda 163: Fino al 31 maggio 2017 e secondo la vecchia normativa, Come sono etichettati e contrassegnati i prodotti fitosanitari nocivi?",
        answers: {
            a: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un quadrato rettangolare di colore giallo-arancio e l'indicazione di pericolo 'Nocivo'",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo Xn, con croce di S. Andrea nera in campo giallo arancione e l'indicazione di pericolo Nocivo",
            c: "Sono etichettati e contrassegnati con croce di S. Andrea nera in campo giallo arancione e l'indicazione di pericolo Prodotto Nocivo"
        },
        correctAnswer: "b"
    },
    {
        number: 164,
        question: "Domanda 164: Fino al 31 maggio 2017 e secondo la vecchia normativa, la croce di Sant'Andrea si trova solo su prodotti nocivi?",
        answers: {
            a: "No, anche sui prodotti irritanti e sensibilizzanti",
            b: "Sì",
            c: "No, anche sui prodotti infiammabili"
        },
        correctAnswer: "a"
    },
    {
        number: 165,
        question: "Domanda 165: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari sensibilizzanti per inalazione?",
        answers: {
            a: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un riquadro rettangolare di colore giallo-arancio e la scritta Irritante",
            b: "Con la sola scritta 'Nocivo', senza nessun contrassegno e disegno particolare",
            c: "Sono etichettati e contrassegnati con il simbolo di pericolo Xn, con croce di S. Andrea nera in campo giallo arancio e l'indicazione di pericolo Nocivo"
        },
        correctAnswer: "c"
    },
    {
        number: 166,
        question: "Domanda 166: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari sensibilizzanti per contatto con la pelle?",
        answers: {
            a: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un riquadro rettangolare di colore giallo-arancio e l'indicazione di pericolo Irritante",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo Xn, con croce di S. Andrea nera in campo giallo arancio e l'indicazione di pericolo Nocivo",
            c: "Sono etichettati e contrassegnati con il simbolo di pericolo Xi, con croce di S. Andrea nera in campo giallo-arancio e l'indicazione di pericolo Irritante"
        },
        correctAnswer: "c"
    },
    {
        number: 167,
        question: "Domanda 167: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari irritanti?",
        answers: {
            a: "Con una 'I' maiuscola, inserita su di un quadrato di color giallo-arancio, e l'indicazione di pericolo Irritante",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo Xi, con croce di S. Andrea nera in campo giallo-arancio e l'indicazione di pericolo Irritante",
            c: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un riquadro rettangolare di colore giallo-arancio e la scritta 'Irritante'"
        },
        correctAnswer: "b"
    },
    {
        number: 168,
        question: "Domanda 168: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari cancerogeni, mutageni e tossici per il ciclo riproduttivo di categoria 3?",
        answers: {
            a: "Sono etichettati e contrassegnati con il simbolo di pericolo Xi, con croce di S. Andrea nera in campo giallo-arancio e l'indicazione di pericolo Irritante",
            b: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un quadrato rettangolare di colore giallo-arancio e l'indicazione di pericolo 'Prodotto Molto Tossico'",
            c: "Sono etichettati e contrassegnati con il simbolo di pericolo Xn, con croce di S. Andrea nera in campo giallo arancio e l'indicazione di pericolo Nocivo"
        },
        correctAnswer: "c"
    },
    {
        number: 169,
        question: "Domanda 169: Fino al 31 maggio 2017 e secondo la vecchia normativa, come si fa a capire dall'etichetta se un prodotto fitosanitario è nocivo per inalazione?",
        answers: {
            a: "Si capisce dalla lettura del simbolo di pericolo riportato in etichetta",
            b: "Si capisce dalla lettura del nome commerciale e della sostanza attiva contenuta nel prodotto fitosanitario",
            c: "Si capisce dalla lettura della frase di rischio nell'etichettatura di pericolo"
        },
        correctAnswer: "c"
    },
    {
        number: 170,
        question: "Domanda 170: Fino al 31 maggio 2017 e secondo la vecchia normativa, come sono etichettati e contrassegnati i prodotti fitosanitari facilmente infiammabili?",
        answers: {
            a: "Sono etichettati e contrassegnati con il simbolo di pericolo F, con fiamma nera in campo giallo- arancio e l'indicazione di pericolo Infiammabile",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo F, con fiamma nera in campo giallo-arancio e l'indicazione di pericolo Facilmente Infiammabile",
            c: "Sono etichettati e contrassegnati con croce di Sant'Andrea in un riquadro rettangolare di colore giallo-arancio e l'indicazione di pericolo Infiammabile"
        },
        correctAnswer: "b"
    },
    {
        number: 171,
        question: "Domanda 171: I prodotti sensibilizzanti per la pelle sono meno dannosi sugli insetti ed acari utili rispetto ai prodotti tossici di categoria 1, 2 e 3?",
        answers: {
            a: "Sì, sugli insetti e acari utili sono meno dannosi",
            b: "No, l'effetto sugli insetti ed acari utili non è legato alla tossicità per la salute umana",
            c: "Dipende da ciò che è riportato in etichetta e dalla DL50"
        },
        correctAnswer: "b"
    },
    {
        number: 172,
        question: "Domanda 172: Che cosa si intende per etichettatura di pericolo dei prodotti fitosanitari?",
        answers: {
            a: "E' un'informazione sintetica delle principali proprietà pericolose",
            b: "E' l'etichetta che deve essere apposta per legge sulle confezioni di tutti i prodotti fitosanitari",
            c: "E' il simbolo di pericolo presente sull'etichetta di tutti i prodotti fitosanitari"
        },
        correctAnswer: "a"
    },
    {
        number: 173,
        question: "Domanda 173: Cosa troviamo sull'etichetta di un prodotto fitosanitario?",
        answers: {
            a: "La classificazione delle miscele e delle sostanze chimiche",
            b: "I pittogrammi",
            c: "Le modalità per archiviare i preparati pericolosi"
        },
        correctAnswer: "b"
    },
    {
        number: 174,
        question: "Domanda 174: Cosa troviamo sull'etichetta di un prodotto fitosanitario",
        answers: {
            a: "Le indicazioni di pericolo poste sotto al pittogramma",
            b: "Le avvertenze di 'pericolo' o 'attenzione'",
            c: "Le frasi di rischio"
        },
        correctAnswer: "b"
    },
    {
        number: 175,
        question: "Domanda 175: Con la classificazione CLP cosa cambia in etichetta rispetto alla normativa DPD?",
        answers: {
            a: "Le frasi di rischio vengono sostituite con le indicazioni di pericolo",
            b: "Si aggiungono i consigli di prudenza",
            c: "Si aggiunge la tossicità DL50"
        },
        correctAnswer: "a"
    },
    {
        number: 176,
        question: "Domanda 176: Cosa è un pittogramma di pericolo?",
        answers: {
            a: "Una frase attribuita ad una classe e categoria di pericolo che descrive la natura del pericolo e il grado di pericolo",
            b: "Un codice alfanumerico composto dalla lettera H seguita da tre numeri destinato a comunicare informazioni specifiche sul pericolo in questione",
            c: "Una composizione grafica comprendente un simbolo e un bordo, destinata a comunicare informazioni specifiche sul pericolo in questione"
        },
        correctAnswer: "c"
    },
    {
        number: 177,
        question: "Domanda 177: In etichetta è riportato 'attenzione' ...",
        answers: {
            a: "come avvertenza per indicare il grado relativo del pericolo",
            b: "come avvertenza per le categorie di minore entità di pericolo",
            c: "come avvertenza per le categorie di maggiore entità di pericolo"
        },
        correctAnswer: "b"
    },
    {
        number: 178,
        question: "Domanda 178: Quali sono le frasi 'H'?",
        answers: {
            a: "Quelle relative ai consigli di prudenza",
            b: "Quelle relative all'indicazione di rischio",
            c: "Quelle relative all'indicazione di pericolo"
        },
        correctAnswer: "c"
    },
    {
        number: 179,
        question: "Domanda 179: Cos'è l'indicazione di pericolo?",
        answers: {
            a: "E' la frase attribuita ad una classe e categoria di pericolo che descrive la natura del pericolo e che sostituisce la vecchia frase di rischio",
            b: "E' una frase che descrive la misura o le misure raccomandate per ridurre al minimo o prevenire gli effetti nocivi dell'esposizione a una sostanza o miscela pericolosa conseguente al suo impiego o smaltimento",
            c: "E' la frase che fornisce ulteriori precisazioni sulla valutazione del rischio e che ha lo scopo di stabilire come i prodotti fitosanitari possono essere impiegati senza rischi per la salute e l'ambiente"
        },
        correctAnswer: "a"
    },
    {
        number: 180,
        question: "Domanda 180: Con la variazione di classificazione in funzione dei nuovi criteri CLP ?",
        answers: {
            a: "al prodotto, secondo la normativa DPD classificato molto tossico, con i criteri CLP può essere attribuita la classificazione con il simbolo del punto esclamativo",
            b: "prodotto, secondo la normativa DPD classificato tossico, con i criteri CLP può essere attribuita la classificazione con il simbolo del punto esclamativo",
            c: "al prodotto, secondo la normativa DPD classificato nocivo, con i criteri CLP può essere attribuita la classificazione con il simbolo del teschio"
        },
        correctAnswer: "c"
    },
    {
        number: 181,
        question: "Domanda 181: Quali sono le frasi 'P'?",
        answers: {
            a: "Quelle relative ai consigli di prudenza",
            b: "Quelle relative all'indicazione di rischio",
            c: "Quelle relative all'indicazione di pericolo"
        },
        correctAnswer: "a"
    },
    {
        number: 182,
        question: "Domanda 182: Come vengono espressi i consigli di prudenza?",
        answers: {
            a: "Con un codice alfanumerico composto dalla lettera H seguita da tre numeri",
            b: "Con un codice alfanumerico composto dalla lettera P seguita da tre numeri",
            c: "Con un codice alfanumerico composto dalla lettera R seguita da tre numeri"
        },
        correctAnswer: "b"
    },
    {
        number: 183,
        question: "Domanda 183: In etichetta trovo ?",
        answers: {
            a: " la categoria4 indicata con il punto esclamativo",
            b: " la categoria 3 indicata con il punto esclamativo",
            c: " la categoria 2 indicata con il punto esclamativo"
        },
        correctAnswer: "a"
    },
    {
        number: 184,
        question: "Domanda 184: In etichetta trovo ?",
        answers: {
            a: "le categorie4 e 3 indicate con il teschio",
            b: "le categorie 3 e 2 indicate con il punto esclamativo",
            c: "le categorie 1 e 2 indicate con il teschio"
        },
        correctAnswer: "c"
    },
    {
        number: 185,
        question: "Domanda 185: Il Regolamento CLP suddivide i pericoli in:",
        answers: {
            a: "3 classi (pericoloso per la salute umana, pericoloso per l'ambiente, pericoloso per l'ambiente acquatico)",
            b: "4 classi (chimico-fisico, pericoloso per la salute umana, pericoloso per l'ambiente, supplementare)",
            c: "5 classi (tossicità acuta, cancerogenicità, pericolose per lo strato di ozono, pericoloso per l'ambiente acquatico, liquidi infiammabili ed esplosivi)"
        },
        correctAnswer: "b"
    },
    {
        number: 186,
        question: "Domanda 186: I consigli di prudenza sono suddivisi in ...",
        answers: {
            a: "5 gruppi",
            b: "7 gruppi",
            c: "9 gruppi"
        },
        correctAnswer: "a"
    },
    {
        number: 187,
        question: "Domanda 187: A cosa si riferisce il consiglio di prudenza 'P5'?",
        answers: {
            a: "All'utilizzo del prodotto fitosanitario",
            b: "Alla conservazione",
            c: "Allo smaltimento"
        },
        correctAnswer: "c"
    },
    {
        number: 188,
        question: "Domanda 188: Sono autorizzate le etichette multilingue?",
        answers: {
            a: "No, le etichette devono essere scritte nella lingua ufficiale dello Stato membro in cui la sostanza o miscela è immessa sul mercato",
            b: "Sì",
            c: "Solo con speciale deroga"
        },
        correctAnswer: "b"
    },
    {
        number: 189,
        question: "Domanda 189: Qual è il colore dello sfondo dei nuovi pittogrammi in etichetta?",
        answers: {
            a: " Arancio",
            b: " Giallo",
            c: " Bianco"
        },
        correctAnswer: "c"
    },
    {
        number: 190,
        question: "Domanda 190: Quale è il colore dello sfondo dei pittogrammi utilizzati per il trasporto su strada di merci pericolose?",
        answers: {
            a: "Arancio",
            b: "Giallo",
            c: "Bianco"
        },
        correctAnswer: "a"
    },
    {
        number: 191,
        question: "Domanda 191: Come sono etichettati e contrassegnati i prodotti fitosanitari tossici acuti di categoria 1, 2 e 3?",
        answers: {
            a: "Sono etichettati e contrassegnati con una croce di Sant'Andrea in un riquadro rettangolare di colore giallo-arancio",
            b: "Con scritto, in caratteri ben visibili: attenzione, manipolare con prudenza 'prodotto Molto Tossico'",
            c: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo del teschio su tibie incrociate di colore nero con avvertenza sottostante 'pericolo'"
        },
        correctAnswer: "c"
    },
    {
        number: 192,
        question: "Domanda 192: Come vengono etichettati e contrassegnati i prodotti fitosanitari tossici acuti di categoria 4?",
        answers: {
            a: "Sono etichettati e contrassegnati con il simbolo di pericolo T, con teschio su tibie incrociate di colore nero in campo giallo arancione e l'indicazione di pericolo Tossico",
            b: "Con scritto, in caratteri ben visibili: attenzione, manipolare con prudenza 'prodotto Tossico",
            c: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo del punto esclamativo di colore nero con avvertenza sottostante 'attenzione..."
        },
        correctAnswer: "c"
    },
    {
        number: 193,
        question: "Domanda 193: Come sono etichettati e contrassegnati i prodotti fitosanitari 'tossici sulla prole per gli effetti della lattazione'?",
        answers: {
            a: "Non è previsto nessun pittogramma ed avvertenza, ma è prevista l'indicazione di pericolo H",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo T, con teschio su tibie incrociate di colore nero in campo giallo arancione e l'indicazione di pericolo Tossico",
            c: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo del punto esclamativo di colore nero con avvertenza sottostante 'attenzione..."
        },
        correctAnswer: "a"
    },
    {
        number: 194,
        question: "Domanda 194: Il punto esclamativo si trova solo su prodotti tossici di categoria4?",
        answers: {
            a: "No, anche sui prodotti irritanti e sensibilizzanti per la pelle",
            b: "Sì",
            c: "Indica prodotti tossici che sono contemporaneamente infiammabili"
        },
        correctAnswer: "a"
    },
    {
        number: 195,
        question: "Domanda 195: Come sono etichettati e contrassegnati i prodotti fitosanitari sensibilizzanti per inalazione?",
        answers: {
            a: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un quadrato rettangolare di colore giallo-arancio e la scritta 'Irritante",
            b: "Con la sola scritta 'Nocivo', senza nessun contrassegno e disegno particolare",
            c: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo della persona danneggiata di colore nero con avvertenza sottostante di 'pericolo..."
        },
        correctAnswer: "c"
    },
    {
        number: 196,
        question: "Domanda 196: Come sono etichettati e contrassegnati i prodotti fitosanitari sensibilizzanti per contatto con la pelle?",
        answers: {
            a: "Sono etichettati e contrassegnati con un teschio nero su ossa incrociate inserite in un quadrato rettangolare di colore giallo-arancio e la scritta 'Irritante",
            b: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo del punto esclamativo di colore nero con avvertenza sottostante di 'attenzione?",
            c: "Con la sola scritta 'Nocivo', senza disegni particolari, ma il colore e sempre giallo-arancio"
        },
        correctAnswer: "b"
    },
    {
        number: 197,
        question: "Domanda 197: Come sono etichettati e contrassegnati i prodotti fitosanitari irritanti per le vie respiratorie?",
        answers: {
            a: "Con una (I) maiuscola, inserita su di un quadrato di color arancio",
            b: "Sono etichettati e contrassegnati con il simbolo di pericolo Xi, con croce di S. Andrea nera in campo giallo arancione e l'indicazione di pericolo Irritante",
            c: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo del punto esclamativo di colore nero con avvertenza sottostante di 'attenzione..."
        },
        correctAnswer: "c"
    },
    {
        number: 198,
        question: "Domanda 198: Come sono etichettati e contrassegnati i prodotti fitosanitari cancerogeni, mutageni e tossici per il ciclo riproduttivo di categoria 2?",
        answers: {
            a: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente il simbolo della persona danneggiata punto esclamativo di colore nero con avvertenza sottostante 'attenzione'",
            b: "Con la sola scritta 'Nocivo', senza nessun contrassegno e disegno particolare",
            c: "Sono etichettati e contrassegnati con il simbolo di pericolo Xn, con croce di S. Andrea nera in campo giallo arancio e l'indicazione di pericolo Nocivo"
        },
        correctAnswer: "a"
    },
    {
        number: 199,
        question: "Domanda 199: Come sono etichettati e contrassegnati i prodotti fitosanitari facilmente infiammabili?",
        answers: {
            a: "Sono etichettati e contrassegnati con il simbolo di pericolo F, con fiamma nera in campo giallo-arancione e l'indicazione di pericolo Facilmente Infiammabile?",
            b: "Sono etichettati e contrassegnati con un pittogramma a forma di losanga con fondo bianco e bordo rosso contenente una fiamma di colore nero con avvertenza sottostante di 'pericolo?",
            c: "Sono etichettati e contrassegnati con una croce di Sant'Andrea in un riquadro rettangolare di colore giallo-arancio e la scritta 'Infiammabile'"
        },
        correctAnswer: "b"
    },
    {
        number: 200,
        question: "Domanda 200: Un prodotto fitosanitario non classificato pericoloso può contenere sostanze pericolose per la salute dell'uomo?",
        answers: {
            a: "Sì, può contenere sostanze molto pericolose, anche se in piccole quantità",
            b: "No, perché non è classificato pericoloso",
            c: "No, perché non è obbligatorio ottenere la scheda di sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 201,
        question: "Domanda 201: Che cosa si intende per etichettatura di pericolo dei prodotti fitosanitari?",
        answers: {
            a: "L'insieme del pittogramma, delle avvertenze, delle indicazioni di pericolo, dei consigli di prudenza con il nome del prodotto fitosanitario e dell'impresa che lo ha immesso in commercio",
            b: "E' l'etichetta che deve essere apposta per legge sulle confezioni di tutti i prodotti chimici",
            c: " E' il simbolo di pericolo presente sull'etichetta delle confezioni"
        },
        correctAnswer: "a"
    },
    {
        number: 202,
        question: "Domanda 202: Ottenere la scheda di sicurezza dei prodotti fitosanitari è obbligatorio?",
        answers: {
            a: "Sempre, per prodotti pericolosi e non pericolosi contenenti almeno una sostanza pericolosa",
            b: "Sempre, ma solo per confezioni con contenuto superiore a 1 Kg per i formulati solidi o 1 litro per quelli liquidi",
            c: "No, non è obbligatorio ottenere la scheda di sicurezza per i prodotti fitosanitari non classificati pericolosi"
        },
        correctAnswer: "a"
    },
    {
        number: 203,
        question: "Domanda 203: Di quante voci informative è composta la scheda di sicurezza?",
        answers: {
            a: "18 voci obbligatorie",
            b: "11 voci per i prodotti fitosanitari non pericolosi e 16 per quelli pericolosi",
            c: "16 voci obbligatorie"
        },
        correctAnswer: "c"
    },
    {
        number: 204,
        question: "Domanda 204: A cosa serve la scheda di sicurezza di un prodotto fitosanitario?",
        answers: {
            a: "Serve per scegliere le necessarie misure di prevenzione e protezione per l'uomo e l'ambiente",
            b: "Serve per la salvaguardia della salute dell'uomo e dell'ambiente quando si impiegano prodotti molto tossici, tossici e nocivi",
            c: "Serve per adottare, alla fine del trattamento, un corretto smaltimento della miscela fitoiatrica residua e dei contenitori dei prodotti fitosanitari"
        },
        correctAnswer: "a"
    },
    {
        number: 205,
        question: "Domanda 205: Come ci si deve comportare se non viene consegnata la scheda di sicurezza di un prodotto fitosanitario all'atto dell'acquisto?",
        answers: {
            a: "Si aspetta che venga consegnata in un secondo momento, anche per corrispondenza o posta elettronica",
            b: "Se non viene consegnata vuol dire che non è necessaria",
            c: "Si richiede obbligatoriamente al rivenditore"
        },
        correctAnswer: "c"
    },
    {
        number: 206,
        question: "Domanda 206: Quando deve essere fornita obbligatoriamente la scheda di dati di sicurezza dei prodotti fitosanitari?",
        answers: {
            a: "La prima volta che si acquista un prodotto fitosanitario",
            b: "Sempre, ma solo per confezioni con contenuto superiore a 1 litro",
            c: "Mai, non è obbligatorio fornire la scheda di dati di sicurezza per i prodotti fitosanitari"
        },
        correctAnswer: "a"
    },
    {
        number: 207,
        question: "Domanda 207: La scheda di dati di sicurezza di un prodotto fitosanitario può essere consegnata su CD o per via elettronica?",
        answers: {
            a: "Sì, ma solo se si dichiara di essere in possesso di un computer o di essere collegati a internet",
            b: "No, la scheda di dati di sicurezza deve essere consegnata sempre a mano in fotocopia cartacea",
            c: "Si richiede obbligatoriamente al rivenditore"
        },
        correctAnswer: "a"
    },
    {
        number: 208,
        question: "Domanda 208: Se non si è in possesso del computer come possiamo avere la scheda di dati di sicurezza di un prodotto fitosanitario all'atto del primo acquisto?",
        answers: {
            a: "Va bene lo stesso anche se non l'abbiamo, perché l'etichetta è sufficiente",
            b: "Se non viene consegnata vuol dire che non è necessaria",
            c: "Richiediamo la fotocopia cartacea"
        },
        correctAnswer: "c"
    },
    {
        number: 209,
        question: "Domanda 209: Si incorre in sanzioni se non si è in possesso della scheda di dati di sicurezza di un prodotto fitosanitario in fase di utilizzo?",
        answers: {
            a: "Sì, anche fino a 18.000 euro",
            b: "Se non viene consegnata non si incorre in nessuna sanzione",
            c: "Solo il rivenditore viene sanzionato"
        },
        correctAnswer: "a"
    },
    {
        number: 210,
        question: "Domanda 210: A cosa serve la scheda di dati di sicurezza di un prodotto fitosanitario per un datore di lavoro?",
        answers: {
            a: "Serve solo quando si impiegano prodotti molto pericolosi",
            b: "Serve prevalentemente per valutare il rischio da agenti chimici pericolosi e per scegliere le necessarie misure di prevenzione e protezione per l'uomo e l'ambiente",
            c: "Serve per adottare un corretto smaltimento dei contenitori"
        },
        correctAnswer: "b"
    },
    {
        number: 211,
        question: "Domanda 211: E' prevista la scheda di dati di sicurezza per i prodotti fitosanitari solo infiammabili, ma non pericolosi per la salute?",
        answers: {
            a: "No, la SDS deve essere consegnata solo per i prodotti fitosanitari pericolosi",
            b: "No, i prodotti fitosanitari infiammabili non sono mai pericolosi per la salute",
            c: "Sì, la SDS deve essere consegnata per tutti i prodotti fitosanitari pericolosi"
        },
        correctAnswer: "c"
    },
    {
        number: 212,
        question: "Domanda 212: Passando da un'attrezzatura a volume normale ad una a basso volume la dose per ettaro indicata in etichetta deve cambiare?",
        answers: {
            a: "No",
            b: "Si",
            c: "Dipende dal tipo di trattamento che si intende effettuare"
        },
        correctAnswer: "a"
    },
    {
        number: 213,
        question: "Domanda 213: Cosa si intende per intervallo di sicurezza?",
        answers: {
            a: "L'intervallo di tempo espresso in giorni che deve intercorrere tra un trattamento e l'accesso, in totale sicurezza, nel terreno trattato",
            b: "L'intervallo di tempo espresso in giorni che deve intercorrere tra l'ultimo trattamento e la raccolta o la messa in commercio di derrate alimentari immagazzinate",
            c: "L'intervallo di tempo espresso in giorni che deve intercorrere tra il primo trattamento e la raccolta o la messa in commercio di derrate alimentari immagazzinate"
        },
        correctAnswer: "b"
    },
    {
        number: 214,
        question: "Domanda 214: L'intervallo di sicurezza di un prodotto fitosanitario varia se viene diminuita la concentrazione di impiego?",
        answers: {
            a: "Non varia",
            b: "No, aumenta proporzionalmente alle concentrazioni",
            c: "Diminuisce aumentando la quantità di acqua impiegata"
        },
        correctAnswer: "a"
    },
    {
        number: 215,
        question: "Domanda 215: L'intervallo di sicurezza di un prodotto fitosanitario varia se viene diminuita la dose di impiego?",
        answers: {
            a: "Diminuisce riducendo la quantità di acqua impiegata",
            b: "Diminuisce proporzionalmente alle concentrazioni",
            c: "Non varia"
        },
        correctAnswer: "c"
    },
    {
        number: 216,
        question: "Domanda 216: Se si rende necessario eseguire un trattamento in prossimità della raccolta, quale tipo di prodotto occorre impiegare?",
        answers: {
            a: "Un prodotto fitosanitario che non venga assorbito per via cutanea per evitare rischi a carico della salute di chi esegue la raccolta",
            b: "Un prodotto fitosanitario che possieda un tempo di carenza inferiore a quello che intercorre tra il trattamento e la presumibile data di raccolta",
            c: "Qualsiasi prodotto fitosanitario purchè il prodotto raccolto venga lavato accuratamente prima del consumo"
        },
        correctAnswer: "b"
    },
    {
        number: 217,
        question: "Domanda 217: Posso ridurre il tempo di carenza diminuendo la dose del prodotto?",
        answers: {
            a: "Si, diminuendo la dose riesco a ridurre il tempo di carenza",
            b: "No",
            c: "Dipende dalla classificazione tossicologica del prodotto utilizzato"
        },
        correctAnswer: "b"
    },
    {
        number: 218,
        question: "Domanda 218: Se si effettuano trattamenti della frutta in post-raccolta, prima di immetterla sul mercato è necessario?",
        answers: {
            a: "pulirla in maniera da eliminare i residui dei prodotti fitosanitari",
            b: "lavarla se si utilizza prima del giorno di scadenza del periodo di sicurezza",
            c: "rispettare i tempi di carenza"
        },
        correctAnswer: "c"
    },
    {
        number: 219,
        question: "Domanda 219: Il lavaggio e la conservazione dei prodotti ortofrutticoli successivi al trattamento, modificano l'intervallo di sicurezza di un prodotto fitosanitario applicato in campo?",
        answers: {
            a: "Annullano l'intervallo di sicurezza",
            b: "Lasciano inalterato l'intervallo di sicurezza",
            c: "Riducono l'intervallo di sicurezza"
        },
        correctAnswer: "c"
    },
    {
        number: 220,
        question: "Domanda 220: Nel caso di vegetali destinati alla trasformazione industriale o surgelati, si deve o no tenere conto dell'intervallo di sicurezza?",
        answers: {
            a: "Sì, sempre",
            b: "No, se i vegetali vengono lavati",
            c: "No, in quanto l'intervallo di sicurezza può esaurirsi durante la trasformazione o la surgelazione dei vegetali e comunque prima del consumo"
        },
        correctAnswer: "a"
    },
    {
        number: 221,
        question: "Domanda 221: Il tempo di carenza è indicato in etichetta?",
        answers: {
            a: "Sì, sempre quando le colture o le derrate hanno una destinazione alimentare",
            b: "A discrezione della ditta produttrice del formulato",
            c: "Quando non è indicato in etichetta lo troviamo riportato sulla scheda di sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 222,
        question: "Domanda 222: Dovendo fare un trattamento su coltura ortiva a raccolta scalare:",
        answers: {
            a: "bisogna rispettare i tempi di carenza soltanto per l'ultima raccolta",
            b: "non bisogna rispettare i tempi di carenza in quanto la raccolta è scalare",
            c: "bisogna sempre rispettare i tempi di carenza"
        },
        correctAnswer: "b"
    },
    {
        number: 223,
        question: "Domanda 223: Cosa si intende per limite di tolleranza?",
        answers: {
            a: "Il residuo massimo di prodotto fitosanitario tollerato sui prodotti agricoli freschi o sulle derrate immesse al consumo",
            b: "La quantità massima di prodotto fitosanitario che è possibile distribuire in campo senza arrecare danni all'ambiente",
            c: "La dose massima di prodotto fitosanitario tollerata dalla pianta affinchè non si verifichino delle ustioni o comunque fenomeni di fitotossicità"
        },
        correctAnswer: "a"
    },
    {
        number: 224,
        question: "Domanda 224: Che cosa si intende per residuo ammesso o limite di tolleranza di un prodotto fitosanitario?",
        answers: {
            a: "La percentuale di sostanza attiva presente nel formulato del prodotto commerciale autorizzato",
            b: "La quantità massima di prodotto fitosanitario che può essere presente sui prodotti destinati all'alimentazione",
            c: "La quantità di prodotto fitosanitario che rimane nell'irroratrice al termine del trattamento, da smaltire come previsto per i rifiuti speciali"
        },
        correctAnswer: "b"
    },
    {
        number: 225,
        question: "Domanda 225: Che cos'è l'R.M.A.?",
        answers: {
            a: "E' il residuo massimo ammesso di una sostanza attiva tollerata nei prodotti destinati all'alimentazione perché sicuramente non nocivo",
            b: "E' il residuo minimo ammesso di una sostanza attiva tollerata nei prodotti destinati all'alimentazione perché sicuramente non nocivo",
            c: "E' il rischio mortale associato di una sostanza attiva che deve essere indicato in etichetta"
        },
        correctAnswer: "a"
    },
    {
        number: 226,
        question: "Domanda 226: Cosa si intende per tempo di rientro?",
        answers: {
            a: "L'intervallo di tempo che deve intercorrere tra il trattamento con prodotti fitosanitari e l'accesso di uomini o animali nella zona trattata",
            b: "L'intervallo di tempo, espresso in giorni, che deve intercorrere tra l'ultimo trattamento con prodotti fitosanitari e la raccolta",
            c: "L'intervallo di tempo che deve intercorrere tra l'ultimo trattamento con prodotti fitosanitari e la vendita del prodotto"
        },
        correctAnswer: "a"
    },
    {
        number: 227,
        question: "Domanda 227: Qual è il tempo di rientro ottimale?",
        answers: {
            a: " Come minimo48 ore, se non indicato diversamente in etichetta",
            b: " Il tempo dato dall'intervallo di sicurezza",
            c: " Dipende dalla classificazione tossicologica del prodotto fitosanitario utilizzato"
        },
        correctAnswer: "a"
    },
    {
        number: 228,
        question: "Domanda 228: Che cosa è il tempo di rientro per l'operatore agricolo?",
        answers: {
            a: "L'intervallo di tempo tra il trattamento eseguito con un prodotto sistemico ed il suo assorbimento all'interno della pianta",
            b: "L'intervallo di tempo tra il trattamento e il rientro nell'area trattata per svolgere attività lavorative senza mezzi protettivi",
            c: "L'intervallo di tempo tra il momento in cui si esegue il trattamento e il rientro in azienda"
        },
        correctAnswer: "b"
    },
    {
        number: 229,
        question: "Domanda 229: A cosa serve il rispetto del tempo di rientro in un frutteto?",
        answers: {
            a: "Ad evitare la commercializzazione di frutta con residui superiori al limite di tolleranza",
            b: "Per avere nell'aria una quantità di prodotti fitosanitari tollerabile",
            c: "Ad evitare l'assorbimento di prodotti fitosanitari attraverso la cute nel momento in cui si effettuano operazioni colturali"
        },
        correctAnswer: "c"
    },
    {
        number: 230,
        question: "Domanda 230: Quando in etichetta non è indicato il tempo di rientro per l'operatore agricolo quanto tempo è consigliabile aspettare prima di entrare nelle aree trattate senza misure protettive?",
        answers: {
            a: "Almeno48 ore",
            b: "1 giorno",
            c: "Non è necessario aspettare del tempo e rispettare alcuna misura protettiva in quanto in etichetta non sono descritte le precauzioni da prendere"
        },
        correctAnswer: "a"
    },
    {
        number: 231,
        question: "Domanda 231: Tutti i prodotti fitosanitari possono essere distribuiti sulle colture protette?",
        answers: {
            a: "Si, purchè si rispetti il campo di impiego indicato in etichetta",
            b: "No, per le colture protette sono previsti prodotti fitosanitari specifici",
            c: "Si, purchè non vi sia il divieto in etichetta o sia richiesta una specifica autorizzazione"
        },
        correctAnswer: "c"
    },
    {
        number: 232,
        question: "Domanda 232: Cosa non riporta l'etichetta di un prodotto fitosanitario?",
        answers: {
            a: "I pittogrammi",
            b: "La classificazione di rischio",
            c: "Il residuo massimo ammesso della sostanza attiva nei prodotti alimentari"
        },
        correctAnswer: "c"
    },
    {
        number: 233,
        question: "Domanda 233: Un prodotto registrato per la tentredine del pero, può essere utilizzato anche per la tentredine del susino?",
        answers: {
            a: "Sì, in quanto è un prodotto specifico contro la tentredine",
            b: "No, se non riporta in etichetta anche il susino come coltura autorizzata",
            c: "Sì, l'uso del prodotto dipende dalle sostanze attive in esso contenute e non dalla coltura da trattare"
        },
        correctAnswer: "b"
    },
    {
        number: 234,
        question: "Domanda 234: Un prodotto acaricida può essere impiegato su qualsiasi coltura per la lotta contro gli acari?",
        answers: {
            a: "No, solo sulle colture indicate in etichetta",
            b: "Sì, se il campo di impiego è ampio",
            c: "Si, in quanto è un prodotto specifico"
        },
        correctAnswer: "a"
    },
    {
        number: 235,
        question: "Domanda 235: E' corretto impiegare, per i prodotti fitosanitari, dosi più alte di quelle massime indicate in etichetta?",
        answers: {
            a: "No, mai",
            b: "Sì a volte, in base alle diverse emergenze fitosanitarie",
            c: "Sì, ma solamente se miscelati"
        },
        correctAnswer: "a"
    },
    {
        number: 236,
        question: "Domanda 236: E' possibile impiegare prodotti fitosanitari per scopi diversi da quelli indicati in etichetta?",
        answers: {
            a: "No, i prodotti fitosanitari vanno utilizzati esclusivamente come riportato in etichetta",
            b: "Sì, solamente su consiglio del venditore o del tecnico che fornisce l'assistenza",
            c: "Sì, solo se realmente necessario e in mancanza di alternative fitoiatriche"
        },
        correctAnswer: "a"
    },
    {
        number: 237,
        question: "Domanda 237: Per la scelta del prodotto fitosanitario da utilizzarsi in un trattamento, è necessario:",
        answers: {
            a: "verificare in etichetta le registrazioni e le modalità di impiego",
            b: "scegliere un prodotto sistemico perché se piove il trattamento è più efficace",
            c: "non occorrono particolari precauzioni purchè il trattamento venga effettuato in assenza di vento"
        },
        correctAnswer: "a"
    },
    {
        number: 238,
        question: "Domanda 238: I prodotti fitosanitari possono essere impiegati per trattamenti di aree non agricole?",
        answers: {
            a: "Sì, purchè si rispetti il tempo di carenza",
            b: "No, in quanto potrebbero intossicare la popolazione",
            c: "Sì, quando è specificatamente indicato in etichetta"
        },
        correctAnswer: "c"
    },
    {
        number: 239,
        question: "Domanda 239: Un prodotto fitosanitario non classificato pericoloso è un agente chimico pericoloso?",
        answers: {
            a: "Sì, perché può essere pericoloso durante l'impiego",
            b: "No, perché non è classificato pericoloso",
            c: "No, perché non è obbligatorio ottenere la scheda di sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 240,
        question: "Domanda 240: L'indicazione riportata in etichetta di un antiparassitario di una dose di 1,5 litri per ettaro equivale a:",
        answers: {
            a: "1,5 litri per 100 litri di acqua",
            b: "1,5 litri per 1.000 metri quadrati di terreno",
            c: "0,75 litri per 5.000 metri quadrati di terreno"
        },
        correctAnswer: "c"
    },
    {
        number: 241,
        question: "Domanda 241: Nel caso si debbano trattare 9.000 metri quadrati di terreno e la dose prescritta in etichetta sia di un litro per ettaro si dovrà:",
        answers: {
            a: "usare comunque un litro",
            b: "usare 0,9 litri e conservare il residuo",
            c: "smaltire 0,1 litri e preparare la soluzione"
        },
        correctAnswer: "b"
    },
    {
        number: 242,
        question: "Domanda 242: Se un prodotto è consigliato in etichetta, per una certa coltura, alla dose massima di 125 ml per 100 litri di acqua, posso preparare una diluizione con400 ml in400 litri di acqua?",
        answers: {
            a: "Si, in quanto 125 è la dose massima consigliata",
            b: "Si, in quanto si supera di pochissimo la dose massima consigliata",
            c: "No, in quanto non si può superare la dose massima consigliata"
        },
        correctAnswer: "a"
    },
    {
        number: 243,
        question: "Domanda 243: Un prodotto consigliato alla dose di 75 ml per 100 litri di acqua, in quale quantità può essere diluito in una botte che ha portata di 250 litri?",
        answers: {
            a: "187,5 ml",
            b: "151,5 ml",
            c: "210,5 ml"
        },
        correctAnswer: "a"
    },
    {
        number: 244,
        question: "Domanda 244: L'immissione in commercio e la produzione dei prodotti fitosanitari sono soggette ad una specifica autorizzazione?",
        answers: {
            a: "Non necessitano di autorizzazione perché i prodotti fitosanitari sono di libera produzione e vendita",
            b: "Sono soggette ad autorizzazione dell'Azienda Unità Sanitaria Locale",
            c: "Sono soggette ad autorizzazione del Ministero della Salute"
        },
        correctAnswer: "c"
    },
    {
        number: 245,
        question: "Domanda 245: I prodotti fitosanitari dove possono essere realizzati?",
        answers: {
            a: "In tutte le industrie chimiche",
            b: "Solo nelle industrie farmaceutiche autorizzate dal Ministero della Salute",
            c: "Solo nelle industrie autorizzate per la produzione di prodotti fitosanitari"
        },
        correctAnswer: "c"
    },
    {
        number: 246,
        question: "Domanda 246: E' possibile utilizzare prodotti di cui sia stata ritirata l'autorizzazione?",
        answers: {
            a: "Sì, purchè nell'utilizzo si eseguano le indicazioni di un tecnico",
            b: "No, in nessun caso dopo il termine di utilizzo previsto dall'autorizzazione",
            c: "Sì, solamente se fanno parte delle scorte di magazzino e vengono utilizzati in epoche lontane dalla raccolta"
        },
        correctAnswer: "b"
    },
    {
        number: 247,
        question: "Domanda 247: Dove devono essere detenuti e venduti i prodotti fitosanitari?",
        answers: {
            a: "In locali areati in cui è possibile vendere anche altri prodotti per l'agricoltura",
            b: "In locali refrigerati in quanto molti prodotti fitosanitari si degradano con le alte temperature",
            c: "In locali autorizzati e non adibiti al deposito o alla vendita di generi alimentari e mangimi"
        },
        correctAnswer: "c"
    },
    {
        number: 248,
        question: "Domanda 248: Dove possono essere acquistati i prodotti fitosanitari?",
        answers: {
            a: "Da qualunque distributore, purchè maggiorenne e in possesso di un diploma o laurea in discipline agrarie, forestali, biologiche, ambientali, chimiche, mediche e veterinarie",
            b: "Esclusivamente dai distributori autorizzati",
            c: "Da qualunque distributore, purchè abbia alle sue dipendenze personale in grado di fornire informazioni sull'uso dei prodotti e in materia di sicurezza per la salute umana e per l'ambiente"
        },
        correctAnswer: "b"
    },
    {
        number: 249,
        question: "Domanda 249: Possono essere acquistati prodotti fitosanitari in confezioni non sigillate o non originali?",
        answers: {
            a: "No, in nessun caso",
            b: "Sì, purchè si tratti di prodotti registrati",
            c: "Sì, purchè il distributore ne garantisca la provenienza"
        },
        correctAnswer: "a"
    },
    {
        number: 250,
        question: "Domanda 250: Il certificato di abilitazione può essere lasciato in deposito presso il distributore?",
        answers: {
            a: "Sì, se gli acquisti vengono eseguiti sempre nella medesima rivendita",
            b: "No, in quanto il certificato di abilitazione è un documento strettamente personale",
            c: "Sì, fino alla data di scadenza del certificato di abilitazione, dopo va ritirato e rinnovato"
        },
        correctAnswer: "b"
    },
    {
        number: 251,
        question: "Domanda 251: Quale responsabilità assume chi acquista prodotti fitosanitari ad uso professionale?",
        answers: {
            a: "Nessuna responsabilità se il prodotto viene impiegato da coadiuvanti familiari",
            b: "La responsabilità diretta nel caso di impiego del prodotto da parte di persone minorenni",
            c: "La responsabilità diretta di un'idonea conservazione e di un impiego corretto del prodotto"
        },
        correctAnswer: "c"
    },
    {
        number: 252,
        question: "Domanda 252: Il titolare del certificato di abilitazione all'acquisto e all'utilizzo può rivendere o regalare ad altre persone prodotti fitosanitari ad uso professionale?",
        answers: {
            a: "Sì, ma solamente se è certo che vengano impiegati correttamente, secondo le indicazioni riportate in etichetta e le voci informative delle schede di sicurezza",
            b: "No, in nessun caso",
            c: "Sì, se queste persone sono in possesso del medesimo certificato di abilitazione"
        },
        correctAnswer: "b"
    },
    {
        number: 253,
        question: "Domanda 253: Come comportarsi all'atto dell'acquisto di prodotti fitosanitari?",
        answers: {
            a: "Controllare la corretta etichettatura dei prodotti fitosanitari",
            b: "Controllare che i prodotti siano venduti in confezioni integre e non in forma sfusa",
            c: "Rivolgersi unicamente a rivenditori autorizzati e controllare la corretta etichettatura"
        },
        correctAnswer: "c"
    },
    {
        number: 254,
        question: "Domanda 254: In caso di dubbi circa la provenienza e l'autenticità di prodotti fitosanitari, cosa fare?",
        answers: {
            a: "Riportare i prodotti fitosanitari appena acquistati al rivenditore, per non correre rischi",
            b: "Avvisare le autorità competenti",
            c: "Smaltire correttamente le confezioni sospette attraverso le ditte autorizzate"
        },
        correctAnswer: "b"
    },
    {
        number: 255,
        question: "Domanda 255: Quali sono i rischi nell'utilizzare prodotti illegali?",
        answers: {
            a: "Rischi legati a frode fiscale per l'agricoltore con ripercussioni giudiziarie e sanzionatorie",
            b: "Rischi per la collettività, per l'agricoltore e per le aziende produttrici di prodotti fitosanitari",
            c: "Rischi economici per le aziende produttrici autorizzate che subiscono la concorrenza sleale da parte delle aziende illegali"
        },
        correctAnswer: "b"
    },
    {
        number: 256,
        question: "Domanda 256: Quale deve essere il comportamento nel caso in cui si manifestino delle perdite di prodotto fitosanitario al momento del loro trasporto dal rivenditore all'azienda agricola o al momento della loro distribuzione con il mezzo irrorante?",
        answers: {
            a: "Fermare il traffico, lavare la strada e convogliare il residuo nei fossi",
            b: "Raccogliere personalmente il materiale disperso, riporlo in adeguato contenitore e smaltirlo come rifiuto speciale pericoloso",
            c: "Informare la pubblica autorità sanitaria e ambientale e comunque adoperarsi per evitare ulteriori danni"
        },
        correctAnswer: "c"
    },
    {
        number: 257,
        question: "Domanda 257: Durante il trasporto dei prodotti fitosanitari dal punto vendita al centro aziendale è più importante verificare?",
        answers: {
            a: "l'assenza di perdite dai contenitori",
            b: "il corretto funzionamento delle luci del veicolo e la scorta di carburante",
            c: "la presenza di un estintore a bordo del veicolo"
        },
        correctAnswer: "a"
    },
    {
        number: 258,
        question: "Domanda 258: Per trasportare i prodotti fitosanitari dal punto vendita al centro aziendale è meglio utilizzare?",
        answers: {
            a: "un rimorchio agricolo",
            b: "un furgone con il piano di carico separato dalla cabina di guida",
            c: "un'automobile con portabagagli"
        },
        correctAnswer: "b"
    },
    {
        number: 259,
        question: "Domanda 259: Come debbono essere conservati i prodotti fitosanitari?",
        answers: {
            a: "Entro locali, recinti o armadi areati, chiusi a chiave, su cui deve essere apposto un cartello con un teschio e la scritta veleno",
            b: "In un luogo appartato dell'abitazione, anche adibito a deposito gasolio e fertilizzanti",
            c: "E' sufficiente che siano tenuti separati da sostanze alimentari o mangimi"
        },
        correctAnswer: "a"
    },
    {
        number: 260,
        question: "Domanda 260: Dove devono essere detenuti i prodotti fitosanitari dall'utilizzatore professionale?",
        answers: {
            a: "In un locale qualsiasi purchè riparato dalla pioggia e chiuso a chiave",
            b: "In un locale refrigerato e fornito di opportuni armadi",
            c: "In locali idonei e non adibiti al deposito di generi alimentari e mangimi"
        },
        correctAnswer: "c"
    },
    {
        number: 261,
        question: "Domanda 261: Quale deve essere il comportamento nel caso in cui le confezioni presenti nel locale adibito a magazzino dei prodotti fitosanitari si rompano e fuoriescano quantità anche minime di prodotto fitosanitario?",
        answers: {
            a: "Occorre lavare la superficie imbrattata con acqua e convogliare il residuo nella fognatura per evitare l'inquinamento ambientale",
            b: "Occorre pulire immediatamente le superfici imbrattate, raccogliere il prodotto, se liquido, con materiale assorbente quale segatura o sabbia per impedire che il prodotto finisca nella fognatura e smaltire il rifiuto secondo le norme vigenti",
            c: "E' sufficiente asciugare la superficie con una spugna o con uno strofinaccio con l'ausilio dei dispositivi di protezione individuali per evitare il rischio di intossicazione"
        },
        correctAnswer: "b"
    },
    {
        number: 262,
        question: "Domanda 262: Se si devono pesare prodotti fitosanitari in polvere:",
        answers: {
            a: "E' meglio pesarli in un locale chiuso per evitare di inquinare l'ambiente",
            b: "E' meglio pesarli all'aperto, in assenza di vento, cercando di non alzare polvere e di non disperderli",
            c: "E' indifferente pesarli in un locale chiuso o all'aperto, purchè sia lontano dall'abitazione"
        },
        correctAnswer: "b"
    },
    {
        number: 263,
        question: "Domanda 263: Quando si deve preparare una soluzione per il trattamento con un prodotto fitosanitario in polvere, è preferibile...",
        answers: {
            a: "riempire la cisterna con l'acqua necessaria e poi immettervi la polvere",
            b: "riempire la cisterna con la metà dell'acqua necessaria, sciogliere a parte con poca acqua la polvere, immettere il tutto nella cisterna e dopo portare a volume agitando",
            c: "immettere nella cisterna la polvere e poi, agitando, tutta l'acqua necessaria"
        },
        correctAnswer: "b"
    },
    {
        number: 264,
        question: "Domanda 264: Dove è opportuno miscelare i prodotti fitosanitari?",
        answers: {
            a: "Su un tavolo sotto una tettoia possibilmente lontano dall'abitazione e dagli allevamenti",
            b: "Nell'area attrezzata o nel luogo più prossimo alla coltura che si intende trattare ed in ogni caso lontano da abitazioni, pozzi e corsi d'acqua superficiali",
            c: "In un locale con porta munita di serratura, separato dall'abitazione e non accessibile ai minori"
        },
        correctAnswer: "b"
    },
    {
        number: 265,
        question: "Domanda 265: E' permesso prelevare acqua dai fossi o dai canali direttamente con mezzi irroranti?",
        answers: {
            a: "No in nessun caso, per evitare rischi di contaminazione delle acque",
            b: "Sì, purchè si lavi prima dell'uso il tubo aspirante",
            c: "Sì, ma solo con mezzi aspiranti separati ed autonomi dall'attrezzatura irrorante"
        },
        correctAnswer: "c"
    },
    {
        number: 266,
        question: "Domanda 266: La tracimazione della miscela dall'attrezzatura è da evitare?",
        answers: {
            a: "No, purchè il prodotto tracimato non inquini pozzi e corsi d'acqua circostanti",
            b: "Sì, sempre",
            c: "No, se si tratta di prodotti non classificati molto tossici, tossici o nocivi"
        },
        correctAnswer: "b"
    },
    {
        number: 267,
        question: "Domanda 267: Quando si effettuano trattamenti, è opportuno:",
        answers: {
            a: "preparare una quantità di miscela irrorante effettivamente necessaria per il trattamento",
            b: "scaricare la soluzione avanzata sul terreno evitando che finisca nel più vicino fossato",
            c: "distribuire la soluzione rimasta nella coltura limitrofa"
        },
        correctAnswer: "a"
    },
    {
        number: 268,
        question: "Domanda 268: Durante la fase di riempimento del serbatoio dell'irroratrice con la miscela fitoiatrica è più importante?",
        answers: {
            a: "  evitare di lasciare la macchina incustodita",
            b: "  utilizzare solo acqua pulita",
            c: "mantenere costantemente in agitazione il liquido del serbatoio"
        },
        correctAnswer: "a"
    },
    {
        number: 269,
        question: "Domanda 269: Per ridurre al minimo la quantità di miscela residua nel serbatoio al termine del trattamento, risulta utile?",
        answers: {
            a: "impiegare basse pressioni di esercizio",
            b: "evitare di effettuare l'ultima parte del trattamento in aree declivi",
            c: "verificare la corretta taratura dell'irroratrice"
        },
        correctAnswer: "c"
    },
    {
        number: 270,
        question: "Domanda 270: Per stemperare il prodotto concentrato è meglio utilizzare?",
        answers: {
            a: "sempre lo stesso recipiente (es. secchio)",
            b: "un recipiente diverso per ciascun tipo di prodotto",
            c: "un dispositivo pre-miscelatore"
        },
        correctAnswer: "c"
    },
    {
        number: 271,
        question: "Domanda 271: Prima di effettuare il trasferimento dell'irroratrice dal centro aziendale al campo da trattare è più importante verificare?",
        answers: {
            a: "la presenza della protezione del cardano",
            b: "la pressione di gonfiaggio dei pneumatici della trattrice e dell'irroratrice",
            c: "l'assenza di gocciolamenti dall'irroratrice"
        },
        correctAnswer: "c"
    },
    {
        number: 272,
        question: "Domanda 272: Prima di effettuare il trasferimento dell'irroratrice dal centro aziendale al campo da trattare è di fondamentale importanza verificare?",
        answers: {
            a: "la perfetta chiusura del serbatoio e di tutte le valvole dell'irroratrice",
            b: "la corretta erogazione degli ugelli",
            c: "la presenza dei pittogrammi sul serbatoio della macchina irroratrice"
        },
        correctAnswer: "a"
    },
    {
        number: 273,
        question: "Domanda 273: Per limitare il rischio di inquinamento puntiforme da prodotti fitosanitari durante la distribuzione della miscela fitoiatrica è opportuno?",
        answers: {
            a: "operare con pressioni di esercizio non superiori a 10 bar",
            b: "operare con velocità di avanzamento superiori a 6 Km/ora",
            c: "verificare che i getti erogati dagli ugelli non colpiscano parti della macchina irroratrice"
        },
        correctAnswer: "c"
    },
    {
        number: 274,
        question: "Domanda 274: Per limitare il rischio di inquinamento puntiforme da prodotti fitosanitari durante la distribuzione della miscela fitoiatrica è molto importante?",
        answers: {
            a: "interrompere l'erogazione della miscela durante le svolte in capezzagna",
            b: "effettuare le svolte nel minor tempo possibile senza interrompere l'erogazione del liquido",
            c: "non variare mai la velocità di avanzamento durante le svolte"
        },
        correctAnswer: "a"
    },
    {
        number: 275,
        question: "Domanda 275: Per ridurre i rischi di inquinamento puntiforme da prodotti fitosanitari è prioritario?",
        answers: {
            a: "rendere minimi i quantitativi di reflui del trattamento",
            b: "disporre di elevati quantitativi d'acqua pulita per diluire i reflui",
            c: "utilizzare prodotti fitosanitari poco tossici"
        },
        correctAnswer: "a"
    },
    {
        number: 276,
        question: "Domanda 276: Come è opportuno segnalare un campo trattato con prodotti fitosanitari?",
        answers: {
            a: "Recintando adeguatamente i campi trattati",
            b: "Appendendo agli alberi i contenitori dei prodotti fitosanitari per rendere nota la tipologia del prodotto utilizzato",
            c: "Applicando cartelli in numero sufficiente, con avvertimenti idonei, ai margini delle colture trattate"
        },
        correctAnswer: "c"
    },
    {
        number: 277,
        question: "Domanda 277: E' opportuno irrorare una coltura in presenza di vento?",
        answers: {
            a: "Si, ma solo durante le ore più fresche della giornata",
            b: "Si, ma solo dopo aver osservato l'anemometro",
            c: "No comunque"
        },
        correctAnswer: "c"
    },
    {
        number: 278,
        question: "Domanda 278: In caso di giornata ventosa è corretto eseguire il trattamento?",
        answers: {
            a: "Sì, se è necessario essere tempestivi, purchè si utilizzi la maschera protettiva",
            b: "No, per il rischio che la nube tossica colpisca l'operatore e si sposti lontano dalla coltura trattata",
            c: "Sì, purchè si riduca la pressione di esercizio e la velocità di avanzamento"
        },
        correctAnswer: "b"
    },
    {
        number: 279,
        question: "Domanda 279: Quali precauzioni è d'obbligo adottare trattando in prossimità di strade, corsi d'acqua e colture confinanti?",
        answers: {
            a: "Nessuna precauzione se il prodotto fitosanitario non è classificato come molto tossico, tossico o nocivo",
            b: "Tutte le precauzioni affinchè la nube irrorante non fuoriesca dall'appezzamento irrorato",
            c: "Nessuna precauzione particolare se il trattamento viene effettuato in assenza di vento"
        },
        correctAnswer: "b"
    },
    {
        number: 280,
        question: "Domanda 280: L'azionamento del sistema lava impianto a fine trattamento consente di:",
        answers: {
            a: "diluire la miscela residua nel serbatoio che sarà poi distribuita direttamente sulla coltura",
            b: "effettuare un risciacquo sommario delle pareti interne del serbatoio e delle tubazioni",
            c: "effettuare direttamente in campo il risciacquo del serbatoio e delle tubazioni in modo da poter distribuire l'acqua di lavaggio direttamente sulle colture"
        },
        correctAnswer: "c"
    },
    {
        number: 281,
        question: "Domanda 281: La pulizia interna dell'irroratrice dovrebbe essere effettuata:",
        answers: {
            a: "almeno una volta l'anno",
            b: "tutte le volte in cui si cambia il tipo di miscela fitoiatrica",
            c: "soltanto quando si impiegano prodotti ad elevata tossicità"
        },
        correctAnswer: "b"
    },
    {
        number: 282,
        question: "Domanda 282: Come è giusto che sia il serbatoio della macchina irroratrice?",
        answers: {
            a: "Con pareti interne lisce, con spigoli e con agitatore",
            b: "Con pareti interne lisce, senza spigoli e con agitatore",
            c: "Con pareti interne ruvide, senza spigoli e con agitatore"
        },
        correctAnswer: "b"
    },
    {
        number: 283,
        question: "Domanda 283: A cosa serve l'agitatore nel serbatoio delle macchine irroratrici?",
        answers: {
            a: "Ad assicurare l'omogeneità della miscela acqua-prodotto fitosanitario",
            b: "A migliorare il risciacquo del serbatoio",
            c: "A modificare la concentrazione della miscela acqua sostanza attiva"
        },
        correctAnswer: "a"
    },
    {
        number: 284,
        question: "Domanda 284: Quale è la pressione di esercizio consigliabile per una pompa a membrana?",
        answers: {
            a: "Tra40 e 50 bar",
            b: "Fino a 30 bar",
            c: "Meno di 20 bar"
        },
        correctAnswer: "c"
    },
    {
        number: 285,
        question: "Domanda 285: A cosa serve un manometro?",
        answers: {
            a: "A controllare la pressione di esercizio",
            b: "A controllare il compensatore pneumatico",
            c: "A controllare la pompa"
        },
        correctAnswer: "a"
    },
    {
        number: 286,
        question: "Domanda 286: Gli ugelli che si usurano meno sono quelli realizzati in:",
        answers: {
            a: "ottone, acciaio",
            b: "acciaio, polimeri plastici",
            c: "polimeri plastici, ceramica"
        },
        correctAnswer: "c"
    },
    {
        number: 287,
        question: "Domanda 287: Gli ugelli che si usurano più velocemente sono quelli realizzati in:",
        answers: {
            a: "ottone, acciaio",
            b: "acciaio, polimeri plastici",
            c: "polimeri plastici, ceramica"
        },
        correctAnswer: "a"
    },
    {
        number: 288,
        question: "Domanda 288: Come si esegue la pulizia degli ugelli?",
        answers: {
            a: "Con aghi",
            b: "Soffiando, avvicinandoli alla bocca",
            c: "Con pennelli o getti d'aria compressa"
        },
        correctAnswer: "c"
    },
    {
        number: 289,
        question: "Domanda 289: Soffiare dentro gli ugelli di distribuzione otturati è corretto?",
        answers: {
            a: "No, in nessun caso, per il grave rischio di intossicazione",
            b: "Sì, ma solo se non si usano prodotti molto tossici, tossici e nocivi",
            c: "Sì, in quanto è l'unico metodo veloce per eliminare l'otturazione ed evitare la distribuzione disomogenea del prodotto"
        },
        correctAnswer: "a"
    },
    {
        number: 290,
        question: "Domanda 290: Come si dispongono gli ugelli a fessura sulla barra?",
        answers: {
            a: "Con le fessure parallele tra loro e non inclinate rispetto all'asse della barra",
            b: "Inclinando le fessure di 5° - 10° rispetto all'asse della barra",
            c: "Inclinando le fessure di 15° - 20° rispetto all'asse della barra"
        },
        correctAnswer: "b"
    },
    {
        number: 291,
        question: "Domanda 291: Quando l'altezza di lavoro della barra irroratrice è piuttosto elevata si hanno:",
        answers: {
            a: "eccessive sovrapposizioni dei getti",
            b: "giuste sovrapposizioni dei getti",
            c: "zone non trattate"
        },
        correctAnswer: "a"
    },
    {
        number: 292,
        question: "Domanda 292: Quando l'altezza di lavoro della barra irroratrice è molto vicina al suolo si hanno:",
        answers: {
            a: "eccessive sovrapposizioni dei getti",
            b: "giuste sovrapposizioni dei getti",
            c: "zone non trattate"
        },
        correctAnswer: "c"
    },
    {
        number: 293,
        question: "Domanda 293: Cosa si intende per volume nel trattamento fitosanitario?",
        answers: {
            a: "Le dimensioni della botte irroratrice",
            b: "La quantità della miscela acqua-sostanza attiva distribuita ad ettaro",
            c: "La quantità della miscela acqua-sostanza attiva distribuita nella superficie trattata"
        },
        correctAnswer: "b"
    },
    {
        number: 294,
        question: "Domanda 294: Le macchine irroratrici a polverizzazione pneumatica in genere operano a...",
        answers: {
            a: "volume alto (700-1000 litri /ha)",
            b: "volume medio (300-700 litri/ha)",
            c: "volume basso (150-300 litri/ha)"
        },
        correctAnswer: "c"
    },
    {
        number: 295,
        question: "Domanda 295: Nelle macchine irroratrici ad alto volume la quantità di prodotto da irrorare per ettaro, rispetto a quelle a basso volume, è ...",
        answers: {
            a: "maggiore",
            b: "minore",
            c: "circa uguale"
        },
        correctAnswer: "c"
    },
    {
        number: 296,
        question: "Domanda 296: Cosa accade quando il volume di distribuzione è troppo elevato?",
        answers: {
            a: "Gocciolamento a terra del prodotto a causa delle gocce troppo grandi",
            b: "Dispersione in atmosfera del prodotto a causa delle gocce troppo piccole",
            c: "Buona diluizione della sostanza attiva e ripartizione uniforme su grandi superfici"
        },
        correctAnswer: "a"
    },
    {
        number: 297,
        question: "Domanda 297: L'irrorazione a bassi volumi può determinare:",
        answers: {
            a: "Percolazione",
            b: "gocciolamento",
            c: "deriva"
        },
        correctAnswer: "c"
    },
    {
        number: 298,
        question: "Domanda 298: Con temperature alte e umidità relativa bassa si deve assolutamente evitare:",
        answers: {
            a: "l'applicazione di alti volumi di distribuzione",
            b: "l'applicazione di medi volumi di distribuzione",
            c: "l'applicazione di bassi volumi di distribuzione"
        },
        correctAnswer: "c"
    },
    {
        number: 299,
        question: "Domanda 299: Durante un trattamento, quando si ha la garanzia di un grado di copertura totale della vegetazione?",
        answers: {
            a: "Quando si irrora con bassi volumi",
            b: "Quando si irrora con medi volumi",
            c: "Quando si irrora con alti volumi"
        },
        correctAnswer: "a"
    },
    {
        number: 300,
        question: "Domanda 300: Le barre irroratrici vanno usate con pressioni di esercizio:",
        answers: {
            a: "da 1 a 10 bar",
            b: "da 5 a 15 bar",
            c: "da 10 a 20 bar"
        },
        correctAnswer: "a"
    },
    {
        number: 301,
        question: "Domanda 301: La pressione di esercizio da impiegare negli atomizzatori può arrivare fino a:",
        answers: {
            a: "10 bar",
            b: "15 bar",
            c: "25 bar"
        },
        correctAnswer: "c"
    },
    {
        number: 302,
        question: "Domanda 302: Cosa si intende per 'deriva'?",
        answers: {
            a: "L'evaporazione della miscela fitoiatrica che si verifica quando la temperatura è superiore ai 15° e l'umidità relativa dell'aria è inferiore all'80%",
            b: "Una serie di fenomeni per i quali una frazione di sostanza attiva non raggiunge il bersaglio depositandosi poi anche a grandi distanze",
            c: "L'aumento della velocità del vento e le conseguenti turbolenze atmosferiche"
        },
        correctAnswer: "c"
    },
    {
        number: 303,
        question: "Domanda 303: Cosa si intende per 'gocciolamento'?",
        answers: {
            a: "Il trattamento effettuato ad alto volume, quindi con gocce di prodotto troppo grosse",
            b: "L'eccesso di prodotto che non viene trattenuto dalle superfici trattate e pertanto cade al suolo",
            c: "L'irregolarità di distribuzione del prodotto a causa della mancanta taratura della macchina"
        },
        correctAnswer: "b"
    },
    {
        number: 304,
        question: "Domanda 304: Nella macchina irroratrice dopo 8 ore di lavoro occorre controllare:",
        answers: {
            a: "pressione del compensatore, stato di usura degli ugelli e regolatore di pressione",
            b: "livello e stato dell'olio, pulizia degli ugelli, membrane antigoccia e filtri di aspirazione",
            c: "fissaggio dei piedi della pompa e viti in genere, lubrificazione di snodi e mozzi delle ruote, pressione dei pneumatici"
        },
        correctAnswer: "b"
    },
    {
        number: 305,
        question: "Domanda 305: Come verifico che l'irroratrice distribuisce la giusta quantità di prodotti fitosanitari?",
        answers: {
            a: "Pulendo gli ugelli con fil di ferro dopo ogni trattamento",
            b: "Soffiando negli ugelli quando sembrano ostruiti",
            c: "Effettuando la periodica taratura della macchina irroratrice"
        },
        correctAnswer: "c"
    },
    {
        number: 306,
        question: "Domanda 306: In cosa consiste la taratura delle macchine irroratrici?",
        answers: {
            a: "Pulizia dei filtri, controllo e pulizia degli ugelli, controllo della tenuta dei tubi",
            b: "Lubrificazione degli snodi, controllo del regolatore di pressione, controllo della pressione del compensatore",
            c: "Controllo della portata, del manometro, del circuito idraulico, dell'assetto delle barre"
        },
        correctAnswer: "c"
    },
    {
        number: 307,
        question: "Domanda 307: Qual è lo scopo della taratura delle macchine?",
        answers: {
            a: "Adattare perfettamente l'irroratrice alla coltura da trattare ed alla sua fase fenologica",
            b: "Verificare che la distribuzione del prodotto fitosanitario sia uniforme ed omogeneo",
            c: "Verificare i parametri di uniformità, funzionalità e tenuta dei diversi componenti della macchina"
        },
        correctAnswer: "a"
    },
    {
        number: 308,
        question: "Domanda 308: Il controllo funzionale, la regolazione e la manutenzione delle macchine irroratrici sono necessarie per:",
        answers: {
            a: "fare meno trattamenti poichè aumenta notevolmente l'efficienza dell'attrezzatura",
            b: "ridurre i tempi necessari per i trattamenti poichè si utilizzano minori quantità d'acqua, avendo la possibilità di operare a più bassi volumi",
            c: "ridurre gli effetti negativi sulla salute e l'ambiente e migliorare l'efficacia dei trattamenti"
        },
        correctAnswer: "c"
    },
    {
        number: 309,
        question: "Domanda 309: Con quale periodicità deve avvenire il controllo funzionale delle attrezzature impiegate per uso professionale?",
        answers: {
            a: "Le attrezzature nuove devono essere controllate dopo 7 anni dall'acquisto",
            b: "Le attrezzature nuove devono essere controllate entro 3 anni dall'acquisto",
            c: "Le attrezzature nuove devono essere controllate almeno 1 volta entro 5 anni dall'acquisto"
        },
        correctAnswer: "c"
    },
    {
        number: 310,
        question: "Domanda 310: E' necessaria la manutenzione ordinaria alle macchine utilizzate per i trattamenti?",
        answers: {
            a: "No, visto che le nuove attrezzature sono garantite e certificate dal costruttore",
            b: "Sì, ad opera dello stesso agricoltore, con lavaggi periodici per evitare di intasare tubi e raccordi",
            c: "Sì, controllando ugelli, raccordi e tubi, rubinetti e manometri, per verificare lo stato di usura e il calo degli standard di efficacia"
        },
        correctAnswer: "c"
    },
    {
        number: 311,
        question: "Domanda 311: Il contoterzista deve provvedere al controllo funzionale della propria irroratrice ogni?",
        answers: {
            a: "3 anni",
            b: "2 anni",
            c: "5 anni"
        },
        correctAnswer: "b"
    },
    {
        number: 312,
        question: "Domanda 312: Vi sono casi in cui è permesso al trattore avere l'albero cardanico scoperto?",
        answers: {
            a: "Si, ma solo nei casi in cui lo preveda il libretto di uso e manutenzione",
            b: "No, mai",
            c: "Si,ma solo nei casi in cui vi sia totale assenza di persone fra trattore e serbatoio"
        },
        correctAnswer: "b"
    },
    {
        number: 313,
        question: "Domanda 313: Cosa devono avere le trattrici gommate per ridurre i rischi degli operatori connessi al ribaltamento?",
        answers: {
            a: "Il telaio",
            b: "Un ottimo impianto frenante",
            c: "Pneumatici non usurati"
        },
        correctAnswer: "a"
    },
    {
        number: 314,
        question: "Domanda 314: Quale tipo di trattrice occorre utilizzare quando la pendenza del terreno arriva fino al 15%?",
        answers: {
            a: "A ruote a trazione semplice",
            b: "A ruote a doppia trazione",
            c: "Cingolata"
        },
        correctAnswer: "a"
    },
    {
        number: 315,
        question: "Domanda 315: Quale tipo di trattrice occorre utilizzare quando la pendenza del terreno è tra 25 e 40%?",
        answers: {
            a: "A ruote a trazione semplice",
            b: "A ruote a doppia trazione",
            c: "Cingolata"
        },
        correctAnswer: "c"
    },
    {
        number: 316,
        question: "Domanda 316: Quale tipo di trattrice occorre utilizzare quando la pendenza del terreno è tra 15 e 25%?",
        answers: {
            a: "A ruote a trazione semplice",
            b: "A ruote a doppia trazione",
            c: "Cingolata"
        },
        correctAnswer: "b"
    },
    {
        number: 317,
        question: "Domanda 317: Cosa rappresenta il marchio 'CE' apposto sulle macchine irroratrici?",
        answers: {
            a: "La garanzia del possesso di requisiti di sicurezza stabiliti a livello comunitario",
            b: "La garanzia del possesso di dispositivi di sicurezza degli ingranaggi e degli organi di trasmissione, come stabilito a livello comunitario",
            c: "La garanzia del possesso di organi di comando per la facile manovrabilità da parte dell'agricoltore, come stabilito a livello comunitario"
        },
        correctAnswer: "a"
    },
    {
        number: 318,
        question: "Domanda 318: Come si deve comportare l'operatore al termine del trattamento?",
        answers: {
            a: "Deve lavarsi il viso, le mani e le braccia con acqua calda e sapone neutro",
            b: "Nessuna precauzione perché al termine del trattamento non si corre più alcun pericolo",
            c: "Deve spogliarsi e lavarsi abbondantemente con acqua e sapone"
        },
        correctAnswer: "c"
    },
    {
        number: 319,
        question: "Domanda 319: E' obbligatorio registrare i trattamenti alle colture agricole con prodotti fitosanitari?",
        answers: {
            a: "Sì, ma solo quando si utilizzano prodotti molto tossici, tossici o nocivi poichè sono solo questi prodotti che vanno riportati nel registro dei trattamenti",
            b: "Sì, sempre",
            c: "No, è obbligatorio solo per le aziende che aderiscono ad alcune misure del PSR (Piano di sviluppo rurale) o che rientrano nel contesto applicativo dell'OCM ortofrutta"
        },
        correctAnswer: "b"
    },
    {
        number: 320,
        question: "Domanda 320: Da chi deve essere compilato il registro dei trattamenti?",
        answers: {
            a: "Dal commercialista",
            b: "Dall'utilizzatore o in alternativa da un suo delegato o dal contoterzista",
            c: "Dal distributore che ha venduto il prodotto utilizzato per il trattamento fitosanitario"
        },
        correctAnswer: "b"
    },
    {
        number: 321,
        question: "Domanda 321: Il registro dei trattamenti deve esser compilato solo per i trattamenti effettuati nelle aziende agricole?",
        answers: {
            a: "Sì, indipendentemente dalla coltura trattata",
            b: "No, anche per i trattamenti effettuati negli orti e giardini familiari",
            c: "No, anche per la difesa delle derrate alimentari e per gli impieghi extra-agricoli"
        },
        correctAnswer: "c"
    },
    {
        number: 322,
        question: "Domanda 322: Nel registro dei trattamenti, o quaderno di campagna, vanno annotati i trattamenti effettuati con?",
        answers: {
            a: "tutti i prodotti fitosanitari e relativi coadiuvanti indipendentemente dalla classe tossicologica di appartenenza",
            b: "i prodotti fitosanitari classificati come molto tossici, tossici e nocivi e quelli pericolosi",
            c: "diserbanti, insetticidi, acaricidi, nematocidi e fungicidi"
        },
        correctAnswer: "a"
    },
    {
        number: 323,
        question: "Domanda 323: Quali informazioni essenziali devono essere riportate sul registro dei trattamenti o quaderno di campagna dopo aver effettuato un trattamento?",
        answers: {
            a: "Data del trattamento, prodotto impiegato e coltura trattata e nominativo dell'eventuale contoterzista",
            b: "Data del trattamento, sostanza attiva utilizzata ed appezzamento interessato",
            c: "Data del trattamento, formulato e sostanza attiva utilizzati, nome di chi ha effettuato il trattamento"
        },
        correctAnswer: "a"
    },
    {
        number: 324,
        question: "Domanda 324: Il registro dei trattamenti deve essere conservato per?",
        answers: {
            a: "per l'intera durata dell'azienda presso il proprio commercialista",
            b: "per un anno presso il proprio consulente aziendale",
            c: "per almeno un anno e comunque per un periodo di tempo rapportato al tempo di permanenza del prodotto in commercio"
        },
        correctAnswer: "c"
    },
    {
        number: 325,
        question: "Domanda 325: Entro quanto tempo dal trattamento deve essere aggiornato il quaderno di campagna?",
        answers: {
            a: "Entro 20 giorni e comunque deve essere sempre a disposizione in caso di controlli in campo per la condizionalit?",
            b: "Entro 30 giorni e comunque deve essere a disposizione e completato a richiesta dell'autorità o dell'operatore del settore alimentare",
            c: "Entro la settimana successiva dopo l'effettuazione del trattamento fitosanitario, se passa più tempo si rischia di dimenticare"
        },
        correctAnswer: "b"
    },
    {
        number: 326,
        question: "Domanda 326: Gli imballaggi dei prodotti fitosanitari possono essere utilizzati per altri scopi?",
        answers: {
            a: "Sì, solo quelli dei prodotti meno pericolosi e se adeguatamente bonificati",
            b: "No, mai",
            c: "Sì purchè non siano adibiti a contenere sostanze alimentari"
        },
        correctAnswer: "b"
    },
    {
        number: 327,
        question: "Domanda 327: I contenitori usati dei prodotti fitosanitari possono essere immessi nei cassonetti dei rifiuti urbani?",
        answers: {
            a: "Sì, ma solo nel caso non si attui la raccolta differenziata",
            b: "No",
            c: "Sì, ma solo nei Comuni dove sono presenti gli inceneritori"
        },
        correctAnswer: "b"
    },
    {
        number: 328,
        question: "Domanda 328: E' consentito abbandonare o disperdere i contenitori vuoti di prodotti fitosanitari?",
        answers: {
            a: "No, in nessun caso",
            b: "Sì, ma solo in attesa di interrarli o bruciarli",
            c: "Sì, purchè lontano da sorgenti o corsi d'acqua"
        },
        correctAnswer: "a"
    },
    {
        number: 329,
        question: "Domanda 329: I contenitori dei prodotti fitosanitari dopo l'uso debbono essere:",
        answers: {
            a: "bonificati e riutilizzati per altri scopi previsti dall'attività agricola",
            b: "bonificati e conferiti presso un inceneritore",
            c: "bonificati e custoditi, in un deposito temporaneo, in attesa di essere conferiti ad una ditta autorizzata al loro smaltimento"
        },
        correctAnswer: "c"
    },
    {
        number: 330,
        question: "Domanda 330: Quali rischi possono provenire dai contenitori vuoti abbandonati dei prodotti fitosanitari?",
        answers: {
            a: "Nessuno, se il contenitore è stato bonificato ed è costituito da materiale non infiammabile",
            b: "Intossicazioni a chi ne viene in contatto ed inquinamento delle acque e del suolo",
            c: "Solo un grave deturpamento del paesaggio"
        },
        correctAnswer: "b"
    },
    {
        number: 331,
        question: "Domanda 331: Cosa occorre fare dei recipienti vuoti dei prodotti fitosanitari?",
        answers: {
            a: "Bonificarli e buttarli nelle immondizie dandone comunicazione all'azienda municipale dell'igiene urbana",
            b: "Bonificarli e distruggerli, bruciandoli o interrandoli, dandone comunicazione all'Unità Sanitaria Locale e all'ARPA",
            c: "Bonificarli e conferirli ai depositi appositamente attrezzati"
        },
        correctAnswer: "c"
    },
    {
        number: 332,
        question: "Domanda 332: I prodotti fitosanitari non più utilizzabili come devono essere smaltiti?",
        answers: {
            a: "Sotterrati in luoghi isolati lontano da abitazioni e non utilizzati per le coltivazioni agrarie",
            b: "Conferendoli a trasportatori iscritti all'Albo Gestori Ambientali",
            c: "Riversandoli nel corso d'acqua più vicino, solo se l'acqua non è destinata al consumo umano"
        },
        correctAnswer: "b"
    },
    {
        number: 333,
        question: "Domanda 333: Cosa occorre fare dell'acqua di lavaggio derivante dalla bonifica dei contenitori vuoti di prodotti fitosanitari?",
        answers: {
            a: "Deve essere scaricata per terra, avendo cura di non bagnarsi con eventuali schizzi",
            b: "Deve essere versata nella miscela preparata per effettuare il trattamento",
            c: "E' possibile scaricarla in fognatura o nel pozzetto dell'area attrezzata"
        },
        correctAnswer: "b"
    },
    {
        number: 334,
        question: "Domanda 334: Come vengono classificati i rifiuti derivanti dall'esercizio delle attività agricole?",
        answers: {
            a: "Solidi urbani",
            b: "Solidi agricoli",
            c: "Speciali"
        },
        correctAnswer: "c"
    },
    {
        number: 335,
        question: "Domanda 335: A spese di chi devono essere smaltiti i rifiuti provenienti dall'esercizio delle attività agricole?",
        answers: {
            a: "Del servizio pubblico",
            b: "Del produttore",
            c: "Di terzi autorizzati"
        },
        correctAnswer: "b"
    },
    {
        number: 336,
        question: "Domanda 336: Quali sono le due categorie in cui si suddividono i rifiuti speciali?",
        answers: {
            a: "Autorizzati e non autorizzati",
            b: "Pericolosi e non pericolosi",
            c: "Smaltibili e non smaltibili"
        },
        correctAnswer: "b"
    },
    {
        number: 337,
        question: "Domanda 337: Come trattare i contenitori vuoti dei prodotti fitosanitari?",
        answers: {
            a: "Risciacquarli con acqua, da distribuire sulla coltura trattata, e accumularli in depositi temporanei",
            b: "Senza alcun risciacquo, depositarli in magazzino. Periodicamente, la ditta autorizzata provvederà al loro smaltimento",
            c: "Bruciarli in modo da poter smaltire le ceneri nel cassonetto dei rifiuti solidi urbani"
        },
        correctAnswer: "a"
    },
    {
        number: 338,
        question: "Domanda 338: I prodotti fitosanitari non più utilizzabili devono:",
        answers: {
            a: "essere conservati per almeno due anni per la progressiva inattivazione",
            b: "essere conferiti a soggetti autorizzati per lo smaltimento di rifiuti speciali",
            c: "essere bonificati ed eliminati con i rifiuti urbani"
        },
        correctAnswer: "b"
    },
    {
        number: 339,
        question: "Domanda 339: Cosa bisogna fare delle sementi conciate con prodotti molto fitosanitari avanzate dalla semina?",
        answers: {
            a: "Destinarle all'alimentazione zootecnica",
            b: "Considerarle rifiuti 'speciali' pericolosi e smaltirle come tali",
            c: "Interrarle o bruciarle"
        },
        correctAnswer: "b"
    },
    {
        number: 340,
        question: "Domanda 340: I contenitori vuoti di prodotti fitosanitari vengono classificati come?",
        answers: {
            a: "rifiuti speciali",
            b: "rifiuti speciali pericolosi",
            c: "rifiuti speciali non pericolosi"
        },
        correctAnswer: "b"
    },
    {
        number: 341,
        question: "Domanda 341: Per quanto tempo è possibile stoccare in azienda i rifiuti speciali non pericolosi?",
        answers: {
            a: "Fino al raggiungimento di 10 metri cubi, e comunque massimo per un anno",
            b: "Fino al raggiungimento di 20 metri cubi, e comunque massimo per un anno",
            c: "Per massimo 6 mesi"
        },
        correctAnswer: "b"
    },
    {
        number: 342,
        question: "Domanda 342: Per quanto tempo è possibile stoccare in azienda i rifiuti speciali pericolosi?",
        answers: {
            a: "Fino al raggiungimento di 10 metri cubi, e comunque massimo per un anno",
            b: "Fino al raggiungimento di 20 metri cubi, e comunque massimo per un anno",
            c: "Per massimo 3 mesi"
        },
        correctAnswer: "a"
    },
    {
        number: 343,
        question: "Domanda 343: I contenitori vuoti di prodotti fitosanitari possono rimanere in deposito temporaneo presso l'azienda?",
        answers: {
            a: "all'aperto, purchè confinati entro la proprietà privata",
            b: "all'aperto, sotto coperture provvisionali",
            c: "in ambienti con requisiti tali da impedire qualsiasi dispersione e per un periodo massimo di un anno"
        },
        correctAnswer: "c"
    },
    {
        number: 344,
        question: "Domanda 344: I rifiuti derivanti dall'impiego dei prodotti fitosanitari possono essere trasportati?",
        answers: {
            a: "miscelati indifferentemente tra pericolosi e non pericolosi",
            b: "racchiusi singolarmente in contenitori a perdere",
            c: "raggruppati per tipologie omogenee"
        },
        correctAnswer: "c"
    },
    {
        number: 345,
        question: "Domanda 345: E' esentato dalla compilazione del 'documento di trasporto' per il trasporto dei rifiuti derivanti dall'impiego dei prodotti fitosanitari?",
        answers: {
            a: "l'imprenditore agricolo che trasporta occasionalmente rifiuti non pericolosi per un massimo di 30 Kg o litri per volta",
            b: "l'imprenditore agricolo che opera per conto della ditta di smaltimento autorizzata",
            c: "l'imprenditore agricolo che trasporta occasionalmente rifiuti non pericolosi per un massimo di 50 Kg o litri per volta"
        },
        correctAnswer: "a"
    },
    {
        number: 346,
        question: "Domanda 346: Non vi è obbligo di tenuta del registro di carico/scarico dei rifiuti speciali di origine agricola quando?",
        answers: {
            a: "l'agricoltore risciacqua tre volte i contenitori dei prodotti fitosanitari da smaltire",
            b: "l'agricoltore smaltisce gli indumenti contaminati da prodotti fitosanitari",
            c: "l'agricoltore che produce rifiuti speciali non pericolosi"
        },
        correctAnswer: "c"
    },
    {
        number: 347,
        question: "Domanda 347: L'imprenditore agricolo è tenuto alla denuncia annuale al catasto dei rifiuti se?",
        answers: {
            a: "ha prodotto rifiuti speciali ed ha realizzato, nell'anno di riferimento, un volume di affari inferiore a 8.000 euro",
            b: "ha prodotto rifiuti speciali pericolosi ed ha realizzato, nell'anno di riferimento, un volume di affari superiore a 8.000,00 euro",
            c: "ha prodotto rifiuti speciali ed ha realizzato, nell'anno di riferimento, un volume di affari di almeno 6.000 euro"
        },
        correctAnswer: "b"
    },
    {
        number: 348,
        question: "Domanda 348: Il formulario di trasporto dei rifiuti deve essere redatto?",
        answers: {
            a: "in due esemplari, uno per il produttore ed uno per il trasportatore",
            b: "in tre esemplari, uno per il produttore, uno per il trasportatore ed uno per lo smaltitore",
            c: "in quattro esemplari, uno per il produttore, due per il trasportatore ed uno per lo smaltitore"
        },
        correctAnswer: "c"
    },
    {
        number: 349,
        question: "Domanda 349: Come è corretto smaltire gli oli usati?",
        answers: {
            a: "Con l'eliminazione diretta da parte di chi li ha prodotti",
            b: "A pagamento, tramite ditte autorizzate, con importi proporzionali alla quantità da smaltire",
            c: "Gratuitamente, tramite il consorzio obbligatorio oli usati"
        },
        correctAnswer: "c"
    },
    {
        number: 350,
        question: "Domanda 350: Non rispettando le norme precauzionali per l'uso dei prodotti fitosanitari a quale rischio per la salute si sottopone l'operatore?",
        answers: {
            a: "Intossicazione acuta con senso di nausea e vomito",
            b: "Intossicazione acuta, cronica e possibile sviluppo di malattie allergiche",
            c: "Intossicazione cronica, sviluppo di malattie allergiche e cancro"
        },
        correctAnswer: "b"
    },
    {
        number: 351,
        question: "Domanda 351: Quando si può verificare un'intossicazione acuta?",
        answers: {
            a: "Quando l'organismo è esposto, in tempi brevi, a quantità elevate di sostanze pericolose per la salute",
            b: "Quando l'organismo è esposto a quantità relativamente piccole di prodotti fitosanitari, in casi di esposizione a grandi quantità si ha l'intossicazione cronica",
            c: "Solo quando l'organismo è esposto a prodotti fitosanitari come tossici"
        },
        correctAnswer: "a"
    },
    {
        number: 352,
        question: "Domanda 352: Quando si può verificare un'intossicazione cronica?",
        answers: {
            a: "Solo se l'organismo è esposto, in tempi brevi, a quantità elevate di sostanze pericolose per la salute",
            b: "Anche per esposizione prolungata a quantità relativamente piccole di prodotti fitosanitari",
            c: "Solo quando l'organismo è esposto a prodotti fitosanitari classificati come tossici"
        },
        correctAnswer: "b"
    },
    {
        number: 353,
        question: "Domanda 353: Attraverso quali vie d'assorbimento dell'uomo può avvenire un'intossicazione acuta?",
        answers: {
            a: "Solamente per ingestione ed inalazione, la via d'assorbimento per contatto provoca un'intossicazione cronica",
            b: "Solamente per contatto con le mani e con il corpo",
            c: "Per ingestione, per contatto e per inalazione"
        },
        correctAnswer: "c"
    },
    {
        number: 354,
        question: "Domanda 354: Attraverso quali vie d'assorbimento dell'uomo può avvenire un'intossicazione cronica?",
        answers: {
            a: "Solamente per ingestione ed inalazione, la via d'assorbimento per contatto provoca un'intossicazione acuta",
            b: "Per ingestione, per contatto e per inalazione",
            c: "Particolarmente per ingestione e per contatto con le mani e con il corpo"
        },
        correctAnswer: "b"
    },
    {
        number: 355,
        question: "Domanda 355: Quali rischi può comportare l'ingestione di alcolici durante i trattamenti con prodotti fitosanitari?",
        answers: {
            a: "Sbalzi di pressione",
            b: "Interazione tossica con alcol etilico",
            c: "Disturbi gastroenterici"
        },
        correctAnswer: "b"
    },
    {
        number: 356,
        question: "Domanda 356: Quali provvedimenti adottare se durante i trattamenti con prodotti fitosanitari compaiono chiazze cutanee (arrossamenti della pelle e bolle)?",
        answers: {
            a: "Il soggetto si deve allontanare dalla fonte di contaminazione, lavare accuratamente con acqua le superfici cutanee interessate e rivolgersi al medico",
            b: "Il soggetto si deve allontanare dalla fonte di contaminazione, cospargere immediatamente le superfici cutanee interessate con una pomata medicata e rivolgersi al medico",
            c: "Il soggetto si deve allontanare dalla fonte di contaminazione, disinfettare con alcol le superfici cutanee interessate e rivolgersi al medico"
        },
        correctAnswer: "a"
    },
    {
        number: 357,
        question: "Domanda 357: All'insorgere di un malessere che si ritiene collegato con l'impiego dei prodotti fitosanitari, come è opportuno comportarsi?",
        answers: {
            a: "Bere del latte e distendersi per qualche ora",
            b: "Provocare il vomito e mettersi a riposo",
            c: "Rivolgersi al pronto soccorso portando con sè la scheda di sicurezza o l'etichetta dei prodotti utilizzati"
        },
        correctAnswer: "c"
    },
    {
        number: 358,
        question: "Domanda 358: Nel caso di intossicazione acuta da prodotti fitosanitari, quali provvedimenti immediati occorre adottare?",
        answers: {
            a: "Spogliare e lavare con acqua l'intossicato, somministrare una bevanda calda, chiamare il 118 a cui verrà consegnata la scheda di sicurezza o l'etichetta del prodotto che ha causato l'intossicazione",
            b: "Spogliare, lavare con acqua e mettere a letto l'intossicato, chiamare il medico curante facendogli vedere il luogo dell'intossicazione nonché  la scheda di sicurezza o l'etichetta del prodotto che ha causato l'intossicazione",
            c: "Chiamare il 118, trasportare l'intossicato lontano dal luogo della contaminazione, spogliarlo e lavarlo con acqua e non somministrare alcuna bevanda, aspettare l'arrivo del personale del 118 a cui verrà consegnata la scheda di sicurezza o l'etichetta del prodotto che ha causato l'intossicazione"
        },
        correctAnswer: "c"
    },
    {
        number: 359,
        question: "Domanda 359: In caso di malessere o di intossicazione che si ritiene collegato con l'impiego dei prodotti fitosanitari, quale documentazione è necessario portare con sè al pronto soccorso?",
        answers: {
            a: "Il registro dei trattamenti eseguiti nei 30 giorni precedenti all'intossicazione",
            b: "La scheda di sicurezza o l'etichetta dei prodotti fitosanitari impiegati",
            c: "Il certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari rilasciato dalla Regione"
        },
        correctAnswer: "b"
    },
    {
        number: 360,
        question: "Domanda 360: Dove si concentrano, prevalentemente, i residui dei prodotti fitosanitari?",
        answers: {
            a: "Nell'aria",
            b: "Nelle falde acquifere",
            c: "Lungo le catene alimentari"
        },
        correctAnswer: "c"
    },
    {
        number: 361,
        question: "Domanda 361: Cosa avviene nel passaggio tra un anello e l'altro della catena alimentare?",
        answers: {
            a: "Il passaggio di aria ed acqua",
            b: "L'aumento di concentrazione di residui di elementi persistenti da un anello della catena a quello successivo",
            c: "Il passaggio di energia attraverso le sostanze nutritive"
        },
        correctAnswer: "b"
    },
    {
        number: 362,
        question: "Domanda 362: A quale categoria europea appartengono i dispositivi di protezione individuale (DPI) per il rischio d'esposizione a prodotti fitosanitari?",
        answers: {
            a: "Alla prima categoria",
            b: "Alla terza categoria",
            c: "Alla seconda categoria"
        },
        correctAnswer: "b"
    },
    {
        number: 363,
        question: "Domanda 363: Occorre indossare tutti i dispositivi di protezione individuale?",
        answers: {
            a: "durante il trattamento, mentre nelle fasi di preparazione del prodotto è sufficiente indossare i guanti",
            b: "durante il trattamento solo se non procura disagi personali, ma la maschera è indispensabile se il trattamento lo si esegue contro vento",
            c: "sempre, nelle fasi di manipolazione e durante il trattamento"
        },
        correctAnswer: "c"
    },
    {
        number: 364,
        question: "Domanda 364: Perchè è importante utilizzare i dispositivi di protezione individuale prima di manipolare i prodotti fitosanitari?",
        answers: {
            a: "Perchè si evita di respirare e di assorbire attraverso la pelle i prodotti fitosanitari da distribuire",
            b: "Perchè si evita l'assorbimento cutaneo dei prodotti fitosanitari da distribuire",
            c: "Perchè si evita l'assorbimento gastrico e cutaneo dei prodotti fitosanitari da distribuire"
        },
        correctAnswer: "a"
    },
    {
        number: 365,
        question: "Domanda 365: Quali sono i requisiti essenziali di salute e di sicurezza che deve possedere un dispositivo di protezione individuale (DPI)?",
        answers: {
            a: "Dichiarazione di conformità CE, marcatura CE, nota informativa",
            b: "Attestato di certificazione CE e certificazione rilasciata da un organismo di controllo autorizzato (Organismo Notificato)",
            c: "Nota tecnica illustrativa delle modalità di impiego e data di scadenza"
        },
        correctAnswer: "a"
    },
    {
        number: 366,
        question: "Domanda 366: L'addestramento per l'impiego dei DPI per le vie respiratorie negli ambienti di lavoro deve essere compiuto da:",
        answers: {
            a: "un tecnico competente",
            b: "un ispettore del lavoro",
            c: "dal responsabile della sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 367,
        question: "Domanda 367: Per quale categoria di dispositivi di protezione individuale (DPI) è obbligatorio l'addestramento dei lavoratori?",
        answers: {
            a: "Per tutti i DPI di 3a categoria",
            b: "Per DPI per l'udito e di 3a categoria",
            c: "Per tutte le categorie di DPI"
        },
        correctAnswer: "b"
    },
    {
        number: 368,
        question: "Domanda 368: Dove è corretto conservare tuta, stivali, guanti e mascherina utilizzati per i trattamenti fitosanitari?",
        answers: {
            a: "In uno specifico armadietto chiuso a chiave possibilmente posto accanto quello dei prodotti fitosanitari",
            b: "In un armadietto posto nel giardino di casa possibilmente chiuso a chiave",
            c: "Nell'officina delle riparazioni"
        },
        correctAnswer: "a"
    },
    {
        number: 369,
        question: "Domanda 369: Un DPI per la protezione del corpo o delle mani rispetta i requisiti essenziali di salute e di sicurezza quando:",
        answers: {
            a: "possiede la marcatura CE, la nota informativa scritta che indichi che è in grado di proteggere ad esempio in caso di contatto con prodotti fitosanitari e l'addestramento all'impiego è effettuata da un formatore qualificato",
            b: "possiede la marcatura CE e l'addestramento all'impiego è effettuata da un formatore qualificato",
            c: "possiede la marcatura, la dichiarazione di conformità CE e la nota informativa scritta che indica che è in grado di proteggere in caso di contatto con prodotti fitosanitari"
        },
        correctAnswer: "c"
    },
    {
        number: 370,
        question: "Domanda 370: I dispositivi di protezione individuale possono essere scambiati tra i lavoratori della stessa azienda?",
        answers: {
            a: "Si, se il lavoratori sono provvisti di regolare contratto di lavoro",
            b: "No",
            c: "Si, se opportunamente lavati"
        },
        correctAnswer: "b"
    },
    {
        number: 371,
        question: "Domanda 371: Quando viene prescritto l'impiego dei dispositivi di protezione individuale, questi devono essere indossati:",
        answers: {
            a: "solamente se si esegue il trattamento in una giornata ventosa",
            b: "solamente se non procura disagi personali nell'effettuazione del trattamento",
            c: "sempre, quando non siano sufficienti le misure di protezione collettiva"
        },
        correctAnswer: "c"
    },
    {
        number: 372,
        question: "Domanda 372: Come devono essere conservati i DPI?",
        answers: {
            a: "Appesi, in luoghi freschi e riparati",
            b: "Lontano dalla portata dei bambini",
            c: "In magazzini asciutti e areati"
        },
        correctAnswer: "b"
    },
    {
        number: 373,
        question: "Domanda 373: Come deve essere la tuta protettiva degli addetti ai trattamenti?",
        answers: {
            a: "Di terza categoria per la protezione da agenti chimici pericolosi",
            b: "Impermeabile e traspirante, in grado di proteggere in caso di contatto con prodotti fitosanitari",
            c: "Possedere la marcatura e la dichiarazione di conformità CE e la nota informativa scritta che indichi che è in grado di proteggere in caso di contatto con prodotti fitosanitari"
        },
        correctAnswer: "c"
    },
    {
        number: 374,
        question: "Domanda 374: Qual è il miglior tipo di protezione che deve garantire una tuta da impiegare per trattamenti fitosanitari con trattori non in possesso della cabina pressurizzata?",
        answers: {
            a: "Tuta Tipo 3,4, 5, 6",
            b: "Tuta Tipo 5 e 6",
            c: "Tuta Tipo 6"
        },
        correctAnswer: "a"
    },
    {
        number: 375,
        question: "Domanda 375: Se si contamina con un prodotto concentrato una tuta protettiva in tessuto, cosa bisogna fare?",
        answers: {
            a: "Lavarla a secco e riporla in un armadio, chiuso a chiave, fino alla prossima utilizzazione",
            b: "Lavarla con acqua calda e sapone",
            c: "Avviarla alla distruzione perché le sostanze sono di difficile rimozione"
        },
        correctAnswer: "c"
    },
    {
        number: 376,
        question: "Domanda 376: A quale categoria appartengono i guanti in nitrile ed in neoprene da indossare quando si aprono le confezioni dei prodotti fitosanitari?",
        answers: {
            a: "1a categoria",
            b: "2a categoria",
            c: "3a categoria"
        },
        correctAnswer: "c"
    },
    {
        number: 377,
        question: "Domanda 377: Per proteggere le mani durante l'impiego dei prodotti fitosanitari è opportuno utilizzare guanti:",
        answers: {
            a: "in gomma di nitrile o in pelle",
            b: "in gomma di nitrile o in tessuto non tessuto",
            c: "in gomma di nitrile o in neoprene"
        },
        correctAnswer: "c"
    },
    {
        number: 378,
        question: "Domanda 378: Nel togliersi i guanti dopo lavorazioni con prodotti fitosanitari è molto utile:",
        answers: {
            a: "sfilarseli uno alla volta aiutandosi con al mano restata libera",
            b: "sfilarseli rapidamente uno alla volata rovesciandoli",
            c: "sfilarseli contemporaneamente a poco a poco aiutandosi ogni volta con la mano più protetta"
        },
        correctAnswer: "c"
    },
    {
        number: 379,
        question: "Domanda 379: Le formulazioni in granuli possono essere maneggiate a mani nude?",
        answers: {
            a: "Si, in quanto i granuli non permettono l'assorbimento del prodotto",
            b: "No",
            c: "Solamente se c'è acqua per lavarsi"
        },
        correctAnswer: "b"
    },
    {
        number: 380,
        question: "Domanda 380: Qual è il tipo di dispositivo di protezione individuale (DPI) per la protezione delle vie respiratorie più idoneo per un operatore agricolo, con barba o basette lunghe, che sta aprendo le confezioni di prodotti fitosanitari?",
        answers: {
            a: "Semimaschera o Quarto di maschera",
            b: "Casco elettroventilato",
            c: "Facciale filtrante"
        },
        correctAnswer: "b"
    },
    {
        number: 381,
        question: "Domanda 381: Quale manutenzione richiede la maschera che viene usata durante il trattamento?",
        answers: {
            a: "Va lavata dopo l'uso, separando il filtro che va sostituito frequentemente, seguendo le indicazioni del costruttore",
            b: "Va revisionata almeno una volta all'anno presso il rivenditore autorizzato che rilascia sempre un attestato di conformità CE",
            c: "Va lavata con acqua e sapone dopo l'uso, asciugata e riposta in armadio chiuso a chiave"
        },
        correctAnswer: "a"
    },
    {
        number: 382,
        question: "Domanda 382: L'utilizzatore di una maschera con filtro 'antigas' efficace contro i vapori organici...",
        answers: {
            a: "deve controllare sul filtro la data di scadenza",
            b: "non deve accertarsi della data di scadenza se non è mai stato usato",
            c: "può ritenere irrilevante l'indicazione della data di scadenza sul filtro purchè non superi il numero di ore d'uso fissato dal costruttore"
        },
        correctAnswer: "a"
    },
    {
        number: 383,
        question: "Domanda 383: L'utilizzatore di una maschera con filtro antipolvere ...",
        answers: {
            a: "E' inutile che si accerti della data di fabbricazione o di scadenza in quanto la sicurezza di funzionamento del filtro non è soggetta ad essere influenzata dall'invecchiamento",
            b: "deve controllare la data di fabbricazione o di scadenza in quanto la sicurezza di funzionamento del filtro è soggetta ad essere influenzata dall'invecchiamento",
            c: "deve solo accertarsi che il filtro sia integro"
        },
        correctAnswer: "b"
    },
    {
        number: 384,
        question: "Domanda 384: L'utilizzatore di maschere con filtri accoppiati (antigas/antipolvere) deve accertarsi che il flusso d'aria all'ingresso...",
        answers: {
            a: "incontri prima il filtro antigas",
            b: "incontri prima il filtro antipolvere",
            c: "incontri indifferentemente prima un tipo di filtro e poi l'altro"
        },
        correctAnswer: "b"
    },
    {
        number: 385,
        question: "Domanda 385: Il filtro combinato per la protezione da polveri e gas che si producono nell'uso dei prodotti fitosanitari a quale categoria deve appartenere?",
        answers: {
            a: "1a categoria",
            b: "2a categoria",
            c: "3a categoria"
        },
        correctAnswer: "c"
    },
    {
        number: 386,
        question: "Domanda 386: In quante classi europee (EN) di protezione si suddividono i filtri antipolvere?",
        answers: {
            a: "2",
            b: "3",
            c: "6"
        },
        correctAnswer: "b"
    },
    {
        number: 387,
        question: "Domanda 387: In quante classi europee (EN) si suddividono i filtri per antigas?",
        answers: {
            a: "4",
            b: "3",
            c: "5"
        },
        correctAnswer: "b"
    },
    {
        number: 388,
        question: "Domanda 388: Con quali colori è contrassegnato un filtro combinato per polveri e gas che si producono nell'uso dei prodotti fitosanitari?",
        answers: {
            a: "Grigio-bianco",
            b: "Bianco-marrone",
            c: "Bianco-grigio-marrone"
        },
        correctAnswer: "b"
    },
    {
        number: 389,
        question: "Domanda 389: Nei trattamenti fitosanitari qual è il tipo di filtro che devono avere le trattrici con cabina pressurizzata?",
        answers: {
            a: "Non è necessario il filtro quando il prodotto fitosanitario non è pericoloso",
            b: "Un filtro combinato in grado di trattenere polveri, vapori e nebbie",
            c: "Un filtro idoneo per le polveri dei prodotti fitosanitari molto tossici, tossici e nocivi"
        },
        correctAnswer: "b"
    },
    {
        number: 390,
        question: "Domanda 390: Se un operatore deve proteggere le vie respiratorie dall'inalazione di vapori di un prodotto fitosanitario 'tossico', deve far uso di un filtro 'antigas' (efficace contro i vapori organici) ....",
        answers: {
            a: "contrassegnato dalla lettera K",
            b: "contrassegnato dalla lettera G",
            c: "contrassegnato dalla lettera A"
        },
        correctAnswer: "c"
    },
    {
        number: 391,
        question: "Domanda 391: Quali sono le misure preventive e protettive da adottare obbligatoriamente quando vi è un rischio chimico rilevante per la salute e la sicurezza dei lavoratori?",
        answers: {
            a: "L'utilizzo corretto dei dispositivi di protezione individuale",
            b: "Tutte le misure specifiche di prevenzione e protezione, le disposizioni in caso d'incidenti e la sorveglianza sanitaria",
            c: "Effettuare visite specialistiche ed analisi mediche periodiche"
        },
        correctAnswer: "b"
    },
    {
        number: 392,
        question: "Domanda 392: Le misure preventive e protettive più idonee per l'impiego dei prodotti fitosanitari:",
        answers: {
            a: "sono quelle che vengono adottate nelle aziende agricole dopo un'attenta analisi degli aspetti tossicologici e tecnico-applicativi dei prodotti fitosanitari",
            b: "sono quelle conseguenti alla valutazione del rischio chimico della propria azienda",
            c: "sono quelle conseguenti alla scelta dei dispositivi di protezione individuale migliori presenti in commercio e che forniscono la massima protezione della salute ed il massimo comfort"
        },
        correctAnswer: "b"
    },
    {
        number: 393,
        question: "Domanda 393: E' opportuno che una donna in gravidanza o in allattamento o un giovane di età inferiore a 18 anni collabori ai trattamenti con prodotti fitosanitari?",
        answers: {
            a: "Sì, purchè abbiano ricevuto correttamente informazione, formazione e addestramento",
            b: "Sì, purchè provvisti di dispositivi di protezione individuali (DPI)",
            c: "No, in nessun caso"
        },
        correctAnswer: "c"
    },
    {
        number: 394,
        question: "Domanda 394: E' vietato alle donne in gravidanza o fino a sette mesi dopo il parto o ai giovani di età inferiore a 18 anni collaborare ai trattamenti con prodotti fitosanitari?",
        answers: {
            a: "Sì",
            b: "No, purchè siano provvisti di dispositivi di protezione individuali (DPI)",
            c: "No, purchè abbiano ricevuto correttamente informazione, formazione e addestramento"
        },
        correctAnswer: "a"
    },
    {
        number: 395,
        question: "Domanda 395: Chi è abilitato ad effettuare le visite mediche nelle aziende agricole?",
        answers: {
            a: "Il medico USL scelto mediante il sistema delle prenotazioni specialistiche",
            b: "Il medico USL scelto dal responsabile della sicurezza o dai lavoratori",
            c: "Il medico competente nominato dal datore di lavoro o dall'imprenditore agricolo"
        },
        correctAnswer: "c"
    },
    {
        number: 396,
        question: "Domanda 396: Sono obbligatorie le visite mediche nell'impiego dei prodotti fitosanitari?",
        answers: {
            a: "Sì, per i dipendenti che sono esposti ad un rischio rilevante per la salute",
            b: "Sì, per tutti dipendenti addetti alle lavorazioni agricole",
            c: "Sì, ma solo per i dipendenti abilitati all'acquisto dei prodotti fitosanitari molto tossici, tossici e nocivi"
        },
        correctAnswer: "a"
    },
    {
        number: 397,
        question: "Domanda 397: E' obbligatorio sostituire un prodotto fitosanitario pericoloso con uno meno pericoloso per la salute dei lavoratori?",
        answers: {
            a: "Sì, nel caso di un prodotto fitosanitario di pari efficacia fitosanitaria",
            b: "No, se è un prodotto fitosanitario che usano tutte le aziende agricole, regolarmente autorizzato",
            c: "Sì, nel caso sia prescritto nella scheda di sicurezza"
        },
        correctAnswer: "a"
    },
    {
        number: 398,
        question: "Domanda 398: Quali sono le disposizioni in caso d'incidente o d'emergenza?",
        answers: {
            a: "Indossare i dispositivi di protezione individuale di 3° categoria",
            b: "Le misure antincendio, di primo soccorso e le procedure da osservare in situazioni pericolose",
            c: "Effettuare periodiche visite mediche per tutti i lavoratori"
        },
        correctAnswer: "b"
    },
    {
        number: 399,
        question: "Domanda 399: Per effettuare i trattamenti fitosanitari in modo da soddisfare gli obblighi in materia di salute e di sicurezza sul lavoro il lavoratore deve?",
        answers: {
            a: "partecipare al corso di formazione per il rilascio del certificato di abilitazione all'acquisto e all'impego dei prodotti fitosanitari e al termine sostenere il relativo esame",
            b: "essere informato dei rischi, formato sui rischi ed addestrato all'uso delle misure protettive",
            c: "partecipare ad un corso di informazione e di formazione sulla sicurezza nei luoghi di lavoro dove alla sua conclusione deve apporre una firma obbligatoria sul registro di partecipazione"
        },
        correctAnswer: "b"
    },
    {
        number: 400,
        question: "Domanda 400: E' sanzionato l'imprenditore agricolo che non esegue l'informazione, la formazione e l'addestramento dei propri lavoratori all'impiego dei prodotti fitosanitari?",
        answers: {
            a: "Sì, con un'ammenda fino a 10.000 euro",
            b: "Sì, con un'ammenda fino a4000 euro",
            c: "No, in quanto spetta al lavoratore provvedere all'acquisizione del certificato di abilitazione"
        },
        correctAnswer: "b"
    },
    {
        number: 401,
        question: "Domanda 401: E' sanzionato un lavoratore che nell'impiego dei prodotti fitosanitari non rispetta l'informazione, la formazione e l'addestramento che gli ha fornito il datore di lavoro?",
        answers: {
            a: "No, in quanto sottopone a rischio esclusivamente la propria salute",
            b: "Sì, con un'ammenda fino a 2.000,00 euro",
            c: "Sì, con un'ammenda fino a 600,00 euro"
        },
        correctAnswer: "c"
    },
    {
        number: 402,
        question: "Domanda 402: Chi è responsabile di eventuali danni agronomici e ambientali o di intossicazione verso terzi che potrebbero verificarsi in seguito all'uso scorretto dei prodotti fitosanitari per utilizzatori professionali?",
        answers: {
            a: "Chiunque abbia effettuato il trattamento in possesso dei necessari requisiti professionali ed il titolare del certificato di abilitazione che ha acquistato il prodotto fitosanitario",
            b: "Il distributore e la ditta autorizzata alla produzione",
            c: "Chiunque abbia effettuato il trattamento in possesso dei necessari requisiti professionali e il distributore titolare del certificato di abilitazione alla vendita"
        },
        correctAnswer: "a"
    },
    {
        number: 403,
        question: "Domanda 403: Chi è responsabile di eventuali danni agronomici e ambientali o di intossicazione verso terzi che potrebbero verificarsi a seguito dell'uso scorretto dei prodotti fitosanitari per utilizzatori non professionali?",
        answers: {
            a: "Il distributore titolare del certificato di abilitazione alla vendita e la ditta autorizzata alla produzione dei prodotti fitosanitari non professionali",
            b: "L'utilizzatore dei prodotti fitosanitari",
            c: "Il titolare del certificato di abilitazione che ha acquistato il prodotto fitosanitario"
        },
        correctAnswer: "b"
    },
    {
        number: 404,
        question: "Domanda 404: Chi è responsabile di un impiego dei prodotti fitosanitari non conforme all'etichettatura presente nelle confezioni?",
        answers: {
            a: "Chiunque sia l'utilizzatore dei prodotti fitosanitari",
            b: "Il titolare dell'azienda agricola",
            c: "Il distributore dei prodotti fitosanitari"
        },
        correctAnswer: "a"
    },
    {
        number: 405,
        question: "Domanda 405: Chi è responsabile di eventuali intossicazioni conseguenti al cattivo uso del dispositivo di protezione individuale (DPI) per la protezione delle vie respiratorie?",
        answers: {
            a: "Chi non ha cambiato il filtro del DPI e si è dimenticato di leggere attentamente la nota informativa",
            b: "Chi ha venduto il prodotto fitosanitario e non ha rilasciato un attestato di conformità CE, la nota informativa e una dichiarazione di conformità CE",
            c: "Il datore di lavoro che ha acquistato il prodotto fitosanitario e chi, pur informato, formato ed addestrato, ha utilizzato scorrettamente il DPI"
        },
        correctAnswer: "a"
    },
    {
        number: 406,
        question: "Domanda 406: E' sanzionato il datore di lavoro che non fa eseguire le visite mediche obbligatorie ai propri lavoratori che impiegano i prodotti fitosanitari?",
        answers: {
            a: "No, se il lavoratore provvede da sè",
            b: "Sì, ma solo se il lavoratore non è in possesso del certificato di abilitazione previsto per gli utilizzatori",
            c: "Sì, qualora il lavoratore sia esposto ad un rischio rilevante per la salute"
        },
        correctAnswer: "c"
    },
    {
        number: 407,
        question: "Domanda 407: Sono sanzionati i datori di lavoro che non adempiono agli obblighi in materia di tutela della salute e sicurezza sul lavoro relativi al contratto d'appalto o al contratto d'opera fra l'agricoltore e le imprese appaltatrici o i contoterzisti?",
        answers: {
            a: "No",
            b: "Sì, con un'ammenda fino a 5000 euro",
            c: "Sì, ma solo se il lavoratore non è in possesso del certificato di abilitazione previsto per gli utilizzatori"
        },
        correctAnswer: "b"
    },
    {
        number: 408,
        question: "Domanda 408: Cosa deve verificare un agricoltore che affida i trattamenti fitosanitari ad un contoterzista?",
        answers: {
            a: "Almeno l'iscrizione alla Camera di commercio, il possesso del certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari ed il tesserino di riconoscimento",
            b: "Almeno l'iscrizione ad una associazione di categoria agricola e d il possesso del certificato di abilitazione all'acquisto e all'utilizzo dei prodotti fitosanitari",
            c: "Che non abbia avuto condanne penali passate in giudicato e che abbia provveduto al controllo funzionale delle macchine"
        },
        correctAnswer: "a"
    },
    {
        number: 409,
        question: "Domanda 409: Un agricoltore che affida i trattamenti fitosanitari ad un contoterzista deve opportunamente:",
        answers: {
            a: "consegnare un elenco di comportamenti corretti da tenere nella propria azienda prima, durante e dopo i trattamenti fitosanitari",
            b: "predisporre e concordare un adeguato contratto d'appalto",
            c: "richiedere un'autocertificazione dove venga evidenziata un'elevata capacità professionale"
        },
        correctAnswer: "b"
    },
    {
        number: 410,
        question: "Domanda 410: Qual è l'entità delle sanzioni in misura ridotta per un cattivo impiego e una cattiva conservazione dei prodotti fitosanitari non in conformità alle indicazioni e alle prescrizioni presenti nell'etichetta e nella scheda di sicurezza?",
        answers: {
            a: "300 euro",
            b: "Inferiore a 3000 euro",
            c: "Sempre maggiore a 3000 euro"
        },
        correctAnswer: "c"
    },
    {
        number: 411,
        question: "Domanda 411: L'impiego dei prodotti fitosanitari può causare danni all'ambiente?",
        answers: {
            a: "No, se il prodotto non è classificato pericoloso",
            b: "Sì, possono contaminare il suolo, l'aria, le acque superficiali e sotterranee",
            c: "No, se in azienda non vi sono corpi idrici superficiali"
        },
        correctAnswer: "b"
    },
    {
        number: 412,
        question: "Domanda 412: Dove avviene, prevalentemente, il processo di degradazione dei prodotti fitosanitari?",
        answers: {
            a: "Nell'acqua",
            b: "Nell'aria",
            c: "Nel suolo"
        },
        correctAnswer: "c"
    },
    {
        number: 413,
        question: "Domanda 413: Cosa si intende per organismi non bersaglio?",
        answers: {
            a: "Gli insetti che muoiono, siano essi fitofagi o utili, a seguito di un trattamento insetticida",
            b: "Gli organismi raggiunti dai prodotti fitosanitari con attività sistemica",
            c: "Le specie animali e vegetali, terrestri o acquatiche, che subiscono, in modo diretto e indiretto, un condizionamento a seguito di un trattamento fitosanitario"
        },
        correctAnswer: "c"
    },
    {
        number: 414,
        question: "Domanda 414: Quali sono le modalità attraverso le quali i prodotti fitosanitari si disperdono nell'ambiente?",
        answers: {
            a: "Deriva, volatilità, ruscellamento e lisciviazione",
            b: "Contatto, asfissia e ingestione",
            c: "Abbandono nell'ambiente e bruciatura dei contenitori vuoti non bonificati"
        },
        correctAnswer: "a"
    },
    {
        number: 415,
        question: "Domanda 415: Quando in etichetta è riportata una fascia di rispetto di 30 metri dai corpi idrici occorre:",
        answers: {
            a: "non avere un pozzo con acqua potabile nel raggio di 30 metri rispetto al punto di preparazione della miscela",
            b: "lasciare una fascia non trattata di almeno 30 metri fra la coltura e un corpo idrico",
            c: "eseguire il trattamento solo con vento in direzione opposta al corpo idrico al fine di rispettare i parametri riportati in etichetta"
        },
        correctAnswer: "b"
    },
    {
        number: 416,
        question: "Domanda 416: Esiste un divieto legale d'impiego dei prodotti fitosanitari in aree di rispetto intorno a pozzi o sorgenti di acque destinate al consumo umano?",
        answers: {
            a: "Sì, entro un raggio di 200 metri",
            b: "No, non esiste un divieto legale ma solo l'obbligo di adottare tutte le precauzioni per tutelare le acque destinate al consumo umano",
            c: "Sì, entro un raggio di 50 metri, salvo deroghe specifiche"
        },
        correctAnswer: "a"
    },
    {
        number: 417,
        question: "Domanda 417: Per tutelare gli organismi non bersaglio di interesse agricolo è necessario:",
        answers: {
            a: "rispettare scrupolosamente eventuali vincoli applicativi riportati in etichetta",
            b: "utilizzare i prodotti insetticidi alla dose più bassa riportata in etichetta durante la fioritura",
            c: "dare la preferenza ai prodotti di copertura"
        },
        correctAnswer: "a"
    },
    {
        number: 418,
        question: "Domanda 418: Nelle aree 'specifiche' è sempre vietato l'uso dei prodotti fitosanitari?",
        answers: {
            a: "Nelle aree specifiche il loro uso è sempre vietato",
            b: "Nelle aree specifiche il loro uso è vietato ma esistono deroghe",
            c: "Nelle aree specifiche il loro uso, in determinati casi, può essere vietato o ridotto al minimo"
        },
        correctAnswer: "c"
    },
    {
        number: 419,
        question: "Domanda 419: Di cosa si deve tenere conto per la tutela delle aree specifiche?",
        answers: {
            a: "Della salute umana, dell'ambiente e della biodiversità e dei risultati dell'analisi del rischio",
            b: "Della salute umana, della biodiversità e dell'ambiente in particolar modo dell'entomofauna utile",
            c: "Della salute umana e dei risultati dell'analisi del rischio riferiti ai corpi idrici"
        },
        correctAnswer: "a"
    },
    {
        number: 420,
        question: "Domanda 420: Quali sono i Siti che formano la Rete Natura 2000?",
        answers: {
            a: "Le Zone Speciali di Conservazione (ZSC) e le Zone di Protezione Speciale (ZPS)",
            b: "Le Zone Speciali di Conservazione (ZSC), le Zone di Protezione Speciale (ZPS) e le Riserve naturali",
            c: "Le Zone Speciali di Conservazione (ZSC), le Zone di Protezione Speciale (ZPS) e i Parchi regionali e nazionali"
        },
        correctAnswer: "a"
    },
    {
        number: 421,
        question: "Domanda 421: Cos'è la valutazione di incidenza o VINCA?",
        answers: {
            a: "E un procedimento facoltativo per i Piani, i progetti o anche i singoli interventi che possono avere incidenza significativa sulla conservazione degli habitat e delle specie animali e vegetali",
            b: " presenti in un Sito della Rete Natura 2000",
            c: " E' un procedimento obbligatorio da adottare prima di realizzare qualsiasi tipo di intervento nell'ambito di in un Sito della Rete Natura 2000"
        },
        correctAnswer: "c"
    },
    {
        number: 422,
        question: "Domanda 422: In cosa consiste la tracciabilità di un alimento?",
        answers: {
            a: "Nella possibilità di inserire un codice identificativo sulle confezioni dei prodotti alimentari",
            b: "Nel seguire il percorso effettuato dai prodotti alimentari dal produttore al consumatore e viceversa",
            c: "Nel seguire le tracce dell'alimento"
        },
        correctAnswer: "b"
    },
    {
        number: 423,
        question: "Domanda 423: Per garantire la qualità e la sicurezza dei prodotti alimentari l'agricoltore è tenuto a:",
        answers: {
            a: "compilare il quaderno di campagna ed il registro dei trattamenti",
            b: "conservare in maniera corretta i prodotti alimentari",
            c: "assicurare che i prodotti primari siano protetti da contaminazioni, tenendo conto delle trasformazioni successive"
        },
        correctAnswer: "c"
    },
    {
        number: 424,
        question: "Domanda 424: Per ottemperare all'obbligo della tracciabilità l'agricoltore deve:",
        answers: {
            a: "conservare la documentazione inerente la consegna a commercianti (dettaglianti o grossisti) o all'industria della propria produzione",
            b: "nulla in quanto si tratta di un sistema indipendente",
            c: "registrare le consegne effettuate"
        },
        correctAnswer: "a"
    },
    {
        number: 425,
        question: "Domanda 425: I prodotti primari sono:",
        answers: {
            a: "i prodotti della terra, dell'allevamento, della caccia e della pesca",
            b: "i primi prodotti che si raccolgono nei campi",
            c: "le principali produzioni della zona"
        },
        correctAnswer: "a"
    },
    {
        number: 426,
        question: "Domanda 426: Nel gestire le produzioni primarie deve essere utilizzata acqua:",
        answers: {
            a: "potabile",
            b: "di qualsiasi qualità",
            c: "acqua priva microrganismi e/o sostanze nocive"
        },
        correctAnswer: "c"
    },
];

window.questions = questions;
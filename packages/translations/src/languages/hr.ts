import type { DefaultTranslationsObject, Language } from '../types.js'

export const hrTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Račun',
    accountOfCurrentUser: 'Račun od trenutnog korisnika',
    accountVerified: 'Račun je uspješno verificiran.',
    alreadyActivated: 'Već aktivirano',
    alreadyLoggedIn: 'Već prijavljen',
    apiKey: 'API ključ',
    authenticated: 'Autenticiran',
    backToLogin: 'Nazad na prijavu',
    beginCreateFirstUser: 'Za početak, kreiraj svog prvog korisnika.',
    changePassword: 'Promjeni lozinku',
    checkYourEmailForPasswordReset:
      'Provjerite email s poveznicom koja će Vam omogućiti sigurnu promjenu lozinke.',
    confirmGeneration: 'Potvrdi kreiranje',
    confirmPassword: 'Potvrdi lozinku',
    createFirstUser: 'Kreiraj prvog korisnika',
    emailNotValid: 'Email nije ispravan',
    emailOrUsername: 'E-mail ili Korisničko ime',
    emailSent: 'Email poslan',
    emailVerified: 'Email uspješno provjeren.',
    enableAPIKey: 'Omogući API ključ',
    failedToUnlock: 'Neuspješno otključavanje.',
    forceUnlock: 'Prisilno otključaj',
    forgotPassword: 'Zaboravljena lozinka',
    forgotPasswordEmailInstructions:
      'Molim unesite svoj email. Primit ćete poruku s uputama za ponovno postavljanje lozinke.',
    forgotPasswordQuestion: 'Zaboravljena lozinka?',
    forgotPasswordUsernameInstructions:
      'Molimo unesite vaše korisničko ime ispod. Upute o tome kako resetirati vašu lozinku bit će poslane na e-adresu povezanu s vašim korisničkim imenom.',
    generate: 'Generiraj',
    generateNewAPIKey: 'Generiraj novi API ključ',
    generatingNewAPIKeyWillInvalidate:
      'Generiranje novog API ključa će <1>poništiti</1> prethodni ključ. Jeste li sigurni da želite nastaviti?',
    lockUntil: 'Zaključaj dok',
    logBackIn: 'Ponovna prijava',
    loggedIn: 'Za prijavu s drugim korisničkim računom potrebno je prvo <0>odjaviti se</0>',
    loggedInChangePassword:
      'Da biste promijenili lozinku, otvorite svoj <0>račun</0> i promijenite lozinku tamo.',
    loggedOutInactivity: 'Odjavljeni se zbog neaktivnosti.',
    loggedOutSuccessfully: 'Uspješno ste odjavljeni..',
    loggingOut: 'Odjavljujem se...',
    login: 'Prijava',
    loginAttempts: 'Pokušaji prijave',
    loginUser: 'Prijava korisnika',
    loginWithAnotherUser:
      'Za prijavu s drugim korisničkim računom potrebno je prvo <0>odjaviti se</0>',
    logOut: 'Odjava',
    logout: 'Odjava',
    logoutSuccessful: 'Odjava uspješna.',
    logoutUser: 'Odjava korisnika',
    newAccountCreated:
      'Novi račun je kreiran. Pristupite računu klikom na <a href="{{serverURL}}">{{serverURL}}</a>. Molim kliknite na sljedeći link ili zalijepite URL, koji se nalazi ispod, u preglednik da biste potvrdili svoj email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Nakon što potvrdite email, moći ćete se prijaviti.',
    newAPIKeyGenerated: 'Novi API ključ generiran.',
    newPassword: 'Nova lozinka',
    passed: 'Autentifikacija je prošla',
    passwordResetSuccessfully: 'Lozinka uspješno resetirana.',
    resetPassword: 'Restartiranje lozinke',
    resetPasswordExpiration: 'Restartiranje roka trajanja lozinke',
    resetPasswordToken: 'Restartiranje lozinke tokena',
    resetYourPassword: 'Restartiraj svoju lozinku',
    stayLoggedIn: 'Ostani prijavljen',
    successfullyRegisteredFirstUser: 'Uspješno registriran prvi korisnik.',
    successfullyUnlocked: 'Uspješno otključano',
    tokenRefreshSuccessful: 'Osvježavanje tokena uspješno.',
    unableToVerify: 'Nije moguće potvrditi',
    username: 'Korisničko ime',
    usernameNotValid: 'Uneseno korisničko ime nije valjano.',
    verified: 'Potvrđeno',
    verifiedSuccessfully: 'Uspješno potvrđeno',
    verify: 'Potvrdi',
    verifyUser: 'Potvrdi korisnika',
    verifyYourEmail: 'Potvrdi svoj email',
    youAreInactive:
      'Neaktivni ste neko vrijeme i uskoro ćete biti automatski odjavljeni zbog vlastite sigurnosti. Želite li ostati prijavljeni?',
    youAreReceivingResetPassword:
      'Primili ste ovo jer ste Vi (ili netko drugi)  zatražili promjenu lozinke za Vaš račun. Molim kliknite na poveznicu ili zalijepite ovo u svoje preglednik da biste završili proces:',
    youDidNotRequestPassword:
      'Ako niste zatražili ovo, molim ignorirajte ovaj email i Vaša lozinka ostat će nepromijenjena.',
  },
  error: {
    accountAlreadyActivated: 'Ovaj račun je već aktiviran.',
    autosaving: 'Nastao je problem pri automatskom spremanju ovog dokumenta.',
    correctInvalidFields: 'Molim ispravite nevaljana polja.',
    deletingFile: 'Dogodila se pogreška pri brisanju datoteke.',
    deletingTitle:
      'Dogodila se pogreška pri brisanju {{title}}. Molim provjerite svoju internetsku vezu i pokušajte ponovno.',
    emailOrPasswordIncorrect: 'Email ili lozinka netočni.',
    followingFieldsInvalid_one: ' Ovo polje je nevaljano:',
    followingFieldsInvalid_other: 'Ova polja su nevaljana:',
    incorrectCollection: 'Nevaljana kolekcija',
    invalidFileType: 'Nevaljan tip datoteke',
    invalidFileTypeValue: 'Nevaljan tip datoteke: {{value}}',
    loadingDocument: 'Pojavio se problem pri učitavanju dokumenta čiji je ID {{id}}.',
    localesNotSaved_one: 'Sljedeću lokalnu postavku nije bilo moguće spremiti:',
    localesNotSaved_other: 'Sljedeće lokalne postavke nije bilo moguće spremiti:',
    logoutFailed: 'Odjava nije uspjela.',
    missingEmail: 'Nedostaje email.',
    missingIDOfDocument: 'Nedostaje ID dokumenta da bi se ažurirao.',
    missingIDOfVersion: 'Nedostaje ID verzije.',
    missingRequiredData: 'Nedostaju obvezni podaci.',
    noFilesUploaded: 'Nijedna datoteka nije učitana.',
    noMatchedField: 'Nema podudarajućih polja za "{{label}}"',
    notAllowedToAccessPage: 'Nemate dopuštenje pristupiti ovoj stranici.',
    notAllowedToPerformAction: 'Nemate dopuštenje izvršiti ovu radnju.',
    notFound: 'Traženi resurs nije pronađen.',
    noUser: 'Nema korisnika',
    previewing: 'Pojavio se problem pri pregledavanju ovog dokumenta.',
    problemUploadingFile: 'Pojavio se problem pri učitavanju datoteke.',
    tokenInvalidOrExpired: 'Token je nevaljan ili je istekao.',
    tokenNotProvided: 'Token nije pružen.',
    unableToDeleteCount: 'Nije moguće izbrisati {{count}} od {{total}} {{label}}.',
    unableToUpdateCount: 'Nije moguće ažurirati {{count}} od {{total}} {{label}}.',
    unauthorized: 'Neovlašten, morate biti prijavljeni da biste uputili ovaj zahtjev.',
    unknown: 'Došlo je do nepoznate pogreške.',
    unPublishingDocument: 'Pojavio se problem pri poništavanju objave ovog dokumenta.',
    unspecific: 'Došlo je do pogreške.',
    userEmailAlreadyRegistered: 'Korisnik s navedenom e-poštom je već registriran.',
    userLocked: 'Ovaj korisnik je zaključan zbog previše neuspješnih pokušaja prijave.',
    usernameAlreadyRegistered: 'Korisnik s navedenim korisničkim imenom već je registriran.',
    usernameOrPasswordIncorrect: 'Korisničko ime ili lozinka koju ste unijeli su netočni.',
    valueMustBeUnique: 'Vrijednost mora biti jedinstvena.',
    verificationTokenInvalid: 'Verifikacijski token je nevaljan.',
  },
  fields: {
    addLabel: 'Dodaj {{label}}',
    addLink: 'Dodaj poveznicu',
    addNew: 'Dodaj novi',
    addNewLabel: 'Dodaj novi {{label}}',
    addRelationship: 'Dodaj odnos',
    addUpload: 'Dodaj učitavanje',
    block: 'blokiranje',
    blocks: 'blokiranja',
    blockType: 'Vrsta blokiranja',
    chooseBetweenCustomTextOrDocument:
      'Izaberite između unošenja prilagođenog teksta URL ili poveznice na drugi dokument.',
    chooseDocumentToLink: 'Odaberite dokument koji želite povezati.',
    chooseFromExisting: 'Odaberite iz postojećih.',
    chooseLabel: 'Odaberite {{label}}',
    collapseAll: 'Sažmi sve',
    customURL: 'Prilagođeni URL',
    editLabelData: 'Uredi {{label}} podatke',
    editLink: 'Uredi poveznicu',
    editRelationship: 'Uredi odnos',
    enterURL: 'Unesi URL',
    internalLink: 'Interna poveznika',
    itemsAndMore: '{{items}} i {{count}} više',
    labelRelationship: '{{label}} veza',
    latitude: 'Zemljopisna širina',
    linkedTo: 'Povezabi sa <0>{{label}}</0>',
    linkType: 'Tip poveznce',
    longitude: 'Zemljopisna dužina',
    newLabel: 'Novo {{label}}',
    openInNewTab: 'Otvori u novoj kartici.',
    passwordsDoNotMatch: 'Lozinke nisu iste.',
    relatedDocument: 'Povezani dokument',
    relationTo: 'Veza sa',
    removeRelationship: 'Ukloni vezu',
    removeUpload: 'Ukloni prijenos',
    saveChanges: 'Spremi promjene',
    searchForBlock: 'Potraži blok',
    selectExistingLabel: 'Odaberi postojeće{{label}}',
    selectFieldsToEdit: 'Odaberite polja za uređivanje',
    showAll: 'Pokaži sve',
    swapRelationship: 'Zamijeni vezu',
    swapUpload: 'Zamijeni prijenos',
    textToDisplay: 'Tekst za prikaz',
    toggleBlock: 'Prebaci blok',
    uploadNewLabel: 'Učitaj novi {{label}}',
  },
  general: {
    aboutToDelete: 'Izbrisat ćete {{label}} <1>{{title}}</1>. Jeste li sigurni?',
    aboutToDeleteCount_many: 'Upravo ćete izbrisati {{count}} {{label}}',
    aboutToDeleteCount_one: 'Upravo ćete izbrisati {{count}} {{label}}',
    aboutToDeleteCount_other: 'Upravo ćete izbrisati {{count}} {{label}}',
    addBelow: 'Dodaj ispod',
    addFilter: 'Dodaj filter',
    adminTheme: 'Administratorska tema',
    and: 'I',
    anotherUserTakenOver: 'Drugi korisnik je preuzeo uređivanje ovog dokumenta.',
    applyChanges: 'Primijeni promjene',
    ascending: 'Uzlazno',
    automatic: 'Automatsko',
    backToDashboard: 'Natrag na nadzornu ploču',
    cancel: 'Otkaži',
    changesNotSaved: 'Vaše promjene nisu spremljene. Ako izađete sada, izgubit ćete promjene.',
    clearAll: undefined,
    close: 'Zatvori',
    collapse: 'Sažmi',
    collections: 'Kolekcije',
    columns: 'Stupci',
    columnToSort: 'Stupac za sortiranje',
    confirm: 'Potvrdi',
    confirmDeletion: 'Potvrdi brisanje',
    confirmDuplication: 'Potvrdi duplikaciju',
    copied: 'Kopirano',
    copy: 'Kopiraj',
    create: 'Kreiraj',
    created: 'Kreirano',
    createdAt: 'Kreirano u',
    createNew: 'Kreiraj novo',
    createNewLabel: 'Kreiraj novo {{label}}',
    creating: 'Kreira se',
    creatingNewLabel: 'Kreiranje novog {{label}}',
    currentlyEditing:
      'trenutno uređuje ovaj dokument. Ako preuzmete, bit će im onemogućeno daljnje uređivanje i mogu izgubiti nespremljene promjene.',
    custom: 'Prilagođen',
    dark: 'Tamno',
    dashboard: 'Nadzorna ploča',
    delete: 'Obriši',
    deletedCountSuccessfully: 'Uspješno izbrisano {{count}} {{label}}.',
    deletedSuccessfully: 'Uspješno obrisano.',
    deleting: 'Brisanje...',
    depth: 'Dubina',
    descending: 'Silazno',
    deselectAllRows: 'Odznači sve redove',
    document: 'Dokument',
    documentLocked: 'Dokument je zaključan',
    documents: 'Dokumenti',
    duplicate: 'Duplikat',
    duplicateWithoutSaving: 'Dupliciraj bez spremanja promjena',
    edit: 'Uredi',
    editedSince: 'Uređeno od',
    editing: 'Uređivanje',
    editingLabel_many: 'Uređivanje {{count}} {{label}}',
    editingLabel_one: 'Uređivanje {{count}} {{label}}',
    editingLabel_other: 'Uređivanje {{count}} {{label}}',
    editingTakenOver: 'Uređivanje preuzeto',
    editLabel: 'Uredi {{label}}',
    email: 'Email',
    emailAddress: 'Email adresa',
    enterAValue: 'Unesi vrijednost',
    error: 'Greška',
    errors: 'Greške',
    fallbackToDefaultLocale: 'Vraćanje na zadani jezik',
    false: 'Netočno',
    filter: 'Filter',
    filters: 'Filteri',
    filterWhere: 'Filter {{label}} gdje',
    globals: 'Globali',
    goBack: 'Vrati se',
    isEditing: 'uređuje',
    language: 'Jezik',
    lastModified: 'Zadnja promjena',
    leaveAnyway: 'Svejedno napusti',
    leaveWithoutSaving: 'Napusti bez spremanja',
    light: 'Svijetlo',
    livePreview: 'Pregled',
    loading: 'Učitavanje',
    locale: 'Jezik',
    locales: 'Prijevodi',
    menu: 'Izbornik',
    moveDown: 'Pomakni dolje',
    moveUp: 'Pomakni gore',
    newPassword: 'Nova lozinka',
    next: 'Sljedeće',
    noFiltersSet: 'Nema postavljenih filtera',
    noLabel: '<Nema {{label}}>',
    none: 'Nijedan',
    noOptions: 'Nema opcija',
    noResults:
      'Nema pronađenih {{label}}. Ili {{label}} još uvijek ne postoji ili nijedan od odgovara postavljenim filterima.',
    notFound: 'Nije pronađeno',
    nothingFound: 'Ništa nije pronađeno',
    noValue: 'Bez vrijednosti',
    of: 'Od',
    open: 'Otvori',
    or: 'Ili',
    order: 'Poredak',
    pageNotFound: 'Stranica nije pronađena',
    password: 'Lozinka',
    payloadSettings: 'Payload postavke',
    perPage: 'Po stranici: {{limit}}',
    previous: 'Prethodni',
    remove: 'Ukloni',
    reset: 'Ponovno postavi',
    row: 'Red',
    rows: 'Redovi',
    save: 'Spremi',
    saving: 'Spremanje...',
    searchBy: 'Traži po {{label}}',
    selectAll: 'Odaberite sve {{count}} {{label}}',
    selectAllRows: 'Odaberite sve redove',
    selectedCount: '{{count}} {{label}} odabrano',
    selectValue: 'Odaberi vrijednost',
    showAllLabel: 'Prikaži sve {{label}}',
    sorryNotFound: 'Nažalost, ne postoji ništa što odgovara vašem zahtjevu.',
    sort: 'Sortiraj',
    sortByLabelDirection: 'Sortiraj prema {{label}} {{direction}}',
    stayOnThisPage: 'Ostani na ovoj stranici',
    submissionSuccessful: 'Uspješno slanje',
    submit: 'Podnesi',
    submitting: 'Podnošenje...',
    success: 'Uspjeh',
    successfullyCreated: '{{label}} uspješno kreirano.',
    successfullyDuplicated: '{{label}} uspješno duplicirano.',
    takeOver: 'Preuzmi',
    thisLanguage: 'Hrvatski',
    titleDeleted: '{{label}} "{{title}}" uspješno obrisano.',
    true: 'Istinito',
    unauthorized: 'Neovlašteno',
    unsavedChangesDuplicate: 'Imate nespremljene promjene. Želite li nastaviti s dupliciranjem?',
    untitled: 'Bez naslova',
    updatedAt: 'Ažurirano u',
    updatedCountSuccessfully: 'Uspješno ažurirano {{count}} {{label}}.',
    updatedSuccessfully: 'Uspješno ažurirano.',
    updating: 'Ažuriranje',
    uploading: 'Prijenos',
    user: 'Korisnik',
    username: 'Korisničko ime',
    users: 'Korisnici',
    value: 'Attribute',
    viewReadOnly: 'Pogledaj samo za čitanje',
    welcome: 'Dobrodošli',
  },
  operators: {
    contains: 'sadrži',
    equals: 'jednako',
    exists: 'postoji',
    intersects: 'presijeca',
    isGreaterThan: 'je veće od',
    isGreaterThanOrEqualTo: 'je veće od ili jednako',
    isIn: 'je u',
    isLessThan: 'manje je od',
    isLessThanOrEqualTo: 'manje je ili jednako',
    isLike: 'je kao',
    isNotEqualTo: 'nije jednako',
    isNotIn: 'nije unutra',
    near: 'blizu',
    within: 'unutar',
  },
  upload: {
    addFile: 'Dodaj datoteku',
    addFiles: 'Dodaj datoteke',
    bulkUpload: 'Masovno otpremanje',
    crop: 'Usjev',
    cropToolDescription:
      'Povucite kutove odabranog područja, nacrtajte novo područje ili prilagodite vrijednosti ispod.',
    dragAndDrop: 'Povucite i ispustite datoteku',
    dragAndDropHere: 'ili povucite i ispustite datoteku ovdje',
    editImage: 'Uredi sliku',
    fileName: 'Ime datoteke',
    fileSize: 'Veličina datoteke',
    filesToUpload: 'Datoteke za učitavanje',
    fileToUpload: 'Datoteka za prijenos',
    focalPoint: 'Središnja točka',
    focalPointDescription:
      'Povucite središnju točku izravno na pregledu ili prilagodite vrijednosti ispod.',
    height: 'Visina',
    lessInfo: 'Manje informacija',
    moreInfo: 'Više informacija',
    pasteURL: 'Zalijepi URL',
    previewSizes: 'Veličine pregleda',
    selectCollectionToBrowse: 'Odaberite kolekciju za pregled',
    selectFile: 'Odaberite datoteku',
    setCropArea: 'Postavi područje usjeva',
    setFocalPoint: 'Postavi fokusnu točku',
    sizes: 'Veličine',
    sizesFor: 'Veličine za {{label}}',
    width: 'Širina',
  },
  validation: {
    emailAddress: 'Molim unestie valjanu email adresu.',
    enterNumber: 'Molim unesite valjani broj.',
    fieldHasNo: 'Ovo polje nema {{label}}',
    greaterThanMax: '{{value}} exceeds the maximum allowable {{label}} limit of {{max}}.',
    invalidInput: 'Ovo polje ima nevaljan unos.',
    invalidSelection: 'Ovo polje ima nevaljan odabir.',
    invalidSelections: 'Ovo polje ima sljedeće nevaljane odabire:',
    lessThanMin: '{{value}} is below the minimum allowable {{label}} limit of {{min}}.',
    limitReached: 'Dosegnut je limit, može se dodati samo {{max}} stavki.',
    longerThanMin: 'Ova vrijednost mora biti duža od minimalne dužine od {{minLength}} znakova',
    notValidDate: '"{{value}}" nije valjan datum.',
    required: 'Ovo polje je obvezno.',
    requiresAtLeast: 'Ovo polje zahtjeva minimalno {{count}} {{label}}.',
    requiresNoMoreThan: 'Ovo polje zahtjeva ne više od {{count}} {{label}}.',
    requiresTwoNumbers: 'Ovo polje zahtjeva dva broja.',
    shorterThanMax: 'Ova vrijednost mora biti kraća od maksimalne dužine od {{maxLength}} znakova',
    trueOrFalse: 'Ovo polje može biti samo točno ili netočno',
    username:
      'Unesite važeće korisničko ime. Može sadržavati slova, brojeve, crtice, točke i donje crte.',
    validUploadID: 'Ovo polje nije valjani ID prijenosa.',
  },
  version: {
    type: 'Tip',
    aboutToPublishSelection: 'Upravo ćete objaviti sve {{label}} u izboru. Jesi li siguran?',
    aboutToRestore: 'Vratit ćete {{label}} dokument u stanje u kojem je bio {{versionDate}}',
    aboutToRestoreGlobal: 'Vratit ćete globalni {{label}} u stanje u kojem je bio {{versionDate}}.',
    aboutToRevertToPublished:
      'Vratit ćete promjene u dokumentu u objavljeno stanje. Jeste li sigurni? ',
    aboutToUnpublish: 'Poništit ćete objavu ovog dokumenta. Jeste li sigurni?',
    aboutToUnpublishSelection:
      'Upravo ćete poništiti objavu svih {{label}} u odabiru. Jesi li siguran?',
    autosave: 'Automatsko spremanje',
    autosavedSuccessfully: 'Automatsko spremanje uspješno.',
    autosavedVersion: 'Verzija automatski spremljenog dokumenta',
    changed: 'Promijenjeno',
    compareVersion: 'Usporedi verziju sa:',
    confirmPublish: 'Potvrdi objavu',
    confirmRevertToSaved: 'Potvrdite vraćanje na spremljeno',
    confirmUnpublish: 'Potvrdite poništavanje objave',
    confirmVersionRestoration: 'Potvrdite vraćanje verzije',
    currentDocumentStatus: 'Trenutni {{docStatus}} dokumenta',
    currentDraft: 'Trenutni Nacrt',
    currentPublishedVersion: 'Trenutno Objavljena Verzija',
    draft: 'Nacrt',
    draftSavedSuccessfully: 'Nacrt uspješno spremljen.',
    lastSavedAgo: 'Zadnji put spremljeno prije {{distance}',
    noFurtherVersionsFound: 'Nisu pronađene daljnje verzije',
    noRowsFound: '{{label}} nije pronađeno',
    noRowsSelected: undefined,
    preview: 'Pregled',
    previouslyPublished: 'Prethodno objavljeno',
    problemRestoringVersion: 'Nastao je problem pri vraćanju ove verzije',
    publish: 'Objaviti',
    publishChanges: 'Objavi promjene',
    published: 'Objavljeno',
    publishing: 'Objavljivanje',
    restoreAsDraft: 'Vrati kao skicu',
    restoredSuccessfully: 'Uspješno vraćeno.',
    restoreThisVersion: 'Vrati ovu verziju',
    restoring: 'Vraćanje...',
    reverting: 'Vraćanje...',
    revertToPublished: 'Vrati na objavljeno',
    saveDraft: 'Sačuvaj nacrt',
    selectLocales: 'Odaberite jezike',
    selectVersionToCompare: 'Odaberite verziju za usporedbu',
    showingVersionsFor: 'Pokazujem verzije za:',
    showLocales: 'Prikaži jezike:',
    status: 'Status',
    unpublish: 'Poništi objavu',
    unpublishing: 'Poništavanje objave...',
    version: 'Verzija',
    versionCount_many: '{{count}} pronađenih verzija',
    versionCount_none: 'Nema pronađenih verzija',
    versionCount_one: '{{count}} pronađena verzija',
    versionCount_other: '{{count}} pronađenih verzija',
    versionCreatedOn: '{{version}} kreiranih:',
    versionID: 'ID verzije',
    versions: 'Verzije',
    viewingVersion: 'Pregled verzije za {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Pregled verzije za globalni {{entityLabel}}',
    viewingVersions: 'Pregled verzija za {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Pregled verzije za globalni {{entityLabel}}',
  },
}

export const hr: Language = {
  dateFNSKey: 'hr',
  translations: hrTranslations,
}

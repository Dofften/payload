import type { DefaultTranslationsObject, Language } from '../types.js'

export const myTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'အကောင့်',
    accountOfCurrentUser: 'သင့် အကောင့်',
    accountVerified: 'Akaun telah disahkan dengan jayanya.',
    alreadyActivated: 'အတည်ပြုပြီး',
    alreadyLoggedIn: 'ဝင်ရောက်ပြီးသား',
    apiKey: 'API Key',
    authenticated: 'အတည်ပြုပြီး',
    backToLogin: 'အကောင့်ထဲ ပြန်ဝင်မည်။',
    beginCreateFirstUser: 'စတင်နိုင်ရန် ပထမဦးစွာ အသုံးပြုသူအား ဖန်တီးပါ။',
    changePassword: 'စကားဝှက် ပြောင်းလဲမည်။',
    checkYourEmailForPasswordReset:
      'သင့်စကားဝှက်ကို ပြန်လည်သတ်မှတ်နိုင်ရန်အတွက် မေးလ်ပို့ထားပါသည်။',
    confirmGeneration: 'Generation အတည်ပြု',
    confirmPassword: 'စကားဝှက်အား ထပ်မံ ရိုက်ထည့်ပါ။',
    createFirstUser: 'ပထမဆုံး အသုံးပြုသူကို ဖန်တီးပါ။',
    emailNotValid: 'ထည့်သွင်းထားသော အီးမေလ်မှာ မှားယွင်းနေပါသည်။',
    emailOrUsername: 'E-mel atau Nama Pengguna',
    emailSent: 'မေးလ် ပို့ထားပါသည်။',
    emailVerified: 'အီးမေးလ်အတည်ပြုခဲ့ပါပြီ။',
    enableAPIKey: 'API Key ကိုဖွင့်ရန်',
    failedToUnlock: 'လော့ခ်ဖွင့်၍မရပါ။',
    forceUnlock: 'လော့ခ်ဖွင့်ရန်',
    forgotPassword: 'စကားဝှက် မေ့နေပါသလား။',
    forgotPasswordEmailInstructions:
      'ကျေးဇူးပြု၍ သင့်အီးမေးလ်ကို ထည့်သွင်းပါ။ သင့်စကားဝှက်ကို ပြန်လည်သတ်မှတ်နိုင်ရန် အီးမေးလ်စာတစ်စောင်ကို သင်လက်ခံရရှိမည်ဖြစ်သည်။',
    forgotPasswordQuestion: 'စကားဝှက် မေ့နေပါသလား။',
    forgotPasswordUsernameInstructions:
      'Sila masukkan nama pengguna anda di bawah. Arahan mengenai bagaimana untuk menetapkan semula kata laluan anda akan dihantar ke alamat emel yang dikaitkan dengan nama pengguna anda.',
    generate: 'Generate',
    generateNewAPIKey: 'API key အသစ်ဖန်တီးရန်',
    generatingNewAPIKeyWillInvalidate:
      'API ကီးအသစ်တစ်ခုကို ဖန်တီးခြင်းသည် ယခင်ကီးကို <1>တရားဝင်ခြင်းမရှိစေဘဲ</1> ဖြစ်လိမ့်မည်။ ဆက်လုပ်မှာတာ သေချာပါသလား။',
    lockUntil: 'Lock Until',
    logBackIn: 'အကောင့်ထဲ ပြန်ဝင်မည်။',
    loggedIn: 'အခြားအကောင့်နှင့် လော့ဂ်အင်ဝင်လိုပါက <0>လော့ဂ်အောက်</0> ပြုလုပ်ပါ။',
    loggedInChangePassword:
      'စကားဝှက် ပြောင်းလဲရန်အတွက်  သင့် <0>အကောင့်</0> သို့ဝင်ရောက်ပြီး ပြင်ဆင် သတ်မှတ်ပါ။',
    loggedOutInactivity: 'လုပ်ဆောင်ချက်မရှိခြင်းကြောင့် သင်သည် ထွက်လိုက်ပါသည်။',
    loggedOutSuccessfully: 'သင်သည် အောင်မြင်စွာ ထွက်ပြီးပါပြီ။',
    loggingOut: 'ထွက်မယ်...',
    login: 'အကောင့်ထဲ ဝင်မည်။',
    loginAttempts: 'လော့ဂ်အင် လုပ်ဆောင်ချက်များ',
    loginUser: 'လော့ဂ်အင် အသုံးပြုသူ',
    loginWithAnotherUser: 'အခြားအကောင့်နှင့် လော့ဂ်အင်ဝင်လိုပါက <0>လော့ဂ်အောက်</0> ပြုလုပ်ပါ။',
    logOut: 'အကောင့်ထဲက ထွက်မည်။',
    logout: 'အကောင့်မှ ထွက်မည်၊',
    logoutSuccessful: 'Log keluar berjaya.',
    logoutUser: 'လော့ဂ်အောက် အသုံးပြုသူ',
    newAccountCreated:
      '<a href="{{serverURL}}">{{serverURL}}</a> သို့ဝင်ရောက်ရန် သင့်အီးမေးလ်ကို အတည်ပြုရန်အတွက် အကောင့်အသစ်တစ်ခုကို ယခုလေးတင် ဖန်တီးပြီးပါပြီ။ ကျေးဇူးပြု၍ အောက်ပါလင့်ခ်ကို နှိပ်ပါ သို့မဟုတ် သင့်အီးမေးလ်ကို အတည်ပြုရန် ဖော်ပြပါ လင့်ခ်ကို သင့်ဘရောက်ဆာထဲသို့ ကူးထည့်ပါ- <a href="{{verificationURL}}">{{verificationURL}}</a><br> သင့်အီးမေးလ်ကို အတည်ပြုပြီးနောက်၊ သင်သည် အောင်မြင်စွာ လော့ဂ်အင်ဝင်နိုင်ပါမည်။',
    newAPIKeyGenerated: 'New API Key Generated.',
    newPassword: 'စကားဝှက် အသစ်',
    passed: 'အတည်ပြုချက် ကျောင်းပြန်',
    passwordResetSuccessfully: 'စကားဝှက် ပြန်လည်စစ်ဆင်မှု အောင်မြင်စွာ ပြီးစီးပါပြီ။',
    resetPassword: 'စကားဝှက် ပြန်လည်သတ်မှတ်',
    resetPasswordExpiration: 'စကားဝှက် ပြန်လည်သတ်မှတ်ရန် သတ်တမ်း',
    resetPasswordToken: 'စကားဝှက် တိုကင်အား ပြန်လည်သတ်မှတ်',
    resetYourPassword: 'သင့်စကားဝှက်ကို ပြန်လည်သတ်မှတ်ပါ။',
    stayLoggedIn: 'အကောင့်ထဲ ဝင်ထားသည်။',
    successfullyRegisteredFirstUser: 'Pendaftaran pengguna pertama berjaya.',
    successfullyUnlocked: 'အောင်မြင်စွာသော့ဖွင့်ခဲ့သည်။',
    tokenRefreshSuccessful: 'Token refresh berhasil.',
    unableToVerify: 'စိစစ်၍မရပါ။',
    username: 'Nama pengguna',
    usernameNotValid: 'ပေးထားသော အသုံးပြုသူအမည်မှာ တရားဝင်မှု မရှိပါ။',
    verified: 'စိစစ်ပြီး',
    verifiedSuccessfully: 'အတည်ပြုပြီးပါပြီ။',
    verify: 'စိစစ်ခြင်း',
    verifyUser: 'အသုံးပြုသူ စီစစ်ခြင်း',
    verifyYourEmail: 'သင့်အီးမေးလ်ကို အတည်ပြုပါ။',
    youAreInactive:
      'သင်သည် အချိန်အနည်းငယ်အတွင်း active မဖြစ်ပါက သင့်အကောင့် လုံခြုံရေးအတွက် မကြာမီ အလိုအလျောက် လော့ဂ်အောက်ဖြစ်ပါမည်။ အကောင့်ထဲ ဆက်နေလိုပါသလား။',
    youAreReceivingResetPassword:
      'သင့်အကောင့်အတွက် စကားဝှက်ကို ပြန်လည်သတ်မှတ်ရန် သင် (သို့မဟုတ် အခြားသူတစ်ဦးဦး) က တောင်းဆိုထားသောကြောင့်လက်ခံရရှိခြင်းဖြစ်သည်။ ကျေးဇူးပြု၍ အောက်ပါလင့်ခ်ကို နှိပ်ပါ (သို့မဟုတ်) ၎င်းကို သင့်ဘရောက်ဆာထဲသို့ ကူးထည့်ပါ။',
    youDidNotRequestPassword:
      'ယခု လုပ်ဆောင်ချက်ကို သင်မတောင်းဆိုထားပါက ဤအီးမေးလ်ကို လျစ်လျူရှုထားခြင်းဖြင့် သင့်စကားဝှက်သည် ပြောင်းလဲမည်မဟုတ်ပါ။',
  },
  error: {
    accountAlreadyActivated: 'ဤအကောင့်ကို အသက်သွင်းပြီးဖြစ်သည်။',
    autosaving: 'ဖိုင်ကို အလိုအလျောက်သိမ်းဆည်းရာတွင် ပြဿနာတစ်ခုရှိနေသည်။',
    correctInvalidFields: 'ကျေးဇူးပြု၍ အချက်အလက်များကို ပြန်လည် စစ်ဆေးပါ။',
    deletingFile: 'ဖိုင်ကိုဖျက်ရာတွင် အမှားအယွင်းရှိနေသည်။',
    deletingTitle:
      '{{title}} ကို ဖျက်ရာတွင် အမှားအယွင်းရှိခဲ့သည်။ သင့် အင်တာနက်လိုင်းအား စစ်ဆေးပြီး ထပ်မံကြို့စားကြည့်ပါ။',
    emailOrPasswordIncorrect: 'ထည့်သွင်းထားသော အီးမေးလ် သို့မဟုတ် စကားဝှက်သည် မမှန်ပါ။',
    followingFieldsInvalid_one: 'ထည့်သွင်းထားသော အချက်အလက်သည် မမှန်ကန်ပါ။',
    followingFieldsInvalid_other: 'ထည့်သွင်းထားသော အချက်အလက်များသည် မမှန်ကန်ပါ။',
    incorrectCollection: 'မှားယွင်းသော စုစည်းမှု',
    invalidFileType: 'မမှန်ကန်သော ဖိုင်အမျိုးအစား',
    invalidFileTypeValue: 'မမှန်ကန်သော ဖိုင်အမျိုးအစား: {{value}}',
    loadingDocument: '{{id}} ID ဖြင့် ဖိုင်ကို ဖွင့်ရာတွင် ပြဿနာရှိနေသည်။',
    localesNotSaved_one: 'အောက်ပါ ဒေသသတ်မှတ်ချက်ကို သိမ်းဆည်း၍ မရပါ။',
    localesNotSaved_other: 'အောက်ပါ ဒေသသတ်မှတ်ချက်များကို သိမ်းဆည်း၍ မရပါ။',
    logoutFailed: 'ထွက်မှားနေသည်။',
    missingEmail: 'အီးမေးလ်ပျောက်ဆုံး',
    missingIDOfDocument: 'ပြင်ဆင်ရန် ဖိုင် ID ပျောက်နေပါသည်။',
    missingIDOfVersion: 'ပျောက်ဆုံး ဗားရှင်း ID',
    missingRequiredData: 'လိုအပ်သောဒေတာ ပျောက်ဆုံးနေပါသည်။',
    noFilesUploaded: 'ဖိုင်များကို အပ်လုဒ်လုပ်ထားခြင်းမရှိပါ။',
    noMatchedField: '"{{label}}" အတွက် ကိုက်ညီသောအပိုင်းကို ရှာမတွေ့ပါ။',
    notAllowedToAccessPage: 'ဤစာမျက်နှာကို ဝင်ရောက်ခွင့်မပြုပါ။',
    notAllowedToPerformAction: 'ဤလုပ်ဆောင်ချက်ကို လုပ်ဆောင်ရန် ခွင့်မပြုပါ။',
    notFound: 'တောင်းဆိုထားသော အရင်းအမြစ်ကို ရှာမတွေ့ပါ။',
    noUser: 'အသုံးပြုသူ မရှိပါ။',
    previewing: 'ဖိုင်ကို အစမ်းကြည့်ရန် ပြဿနာရှိနေသည်။',
    problemUploadingFile: 'ဖိုင်ကို အပ်လုဒ်တင်ရာတွင် ပြဿနာရှိနေသည်။',
    tokenInvalidOrExpired: 'တိုကင်သည် မမှန်ကန်ပါ သို့မဟုတ် သက်တမ်းကုန်သွားပါပြီ။',
    tokenNotProvided: 'Token မပေးထားပါ။',
    unableToDeleteCount: '{{total}} {{label}} မှ {{count}} ကို ဖျက်၍မရပါ။',
    unableToUpdateCount: '{{total}} {{label}} မှ {{count}} ကို အပ်ဒိတ်လုပ်၍မရပါ။',
    unauthorized: 'အခွင့်မရှိပါ။ ဤတောင်းဆိုချက်ကို လုပ်ဆောင်နိုင်ရန် သင်သည် လော့ဂ်အင်ဝင်ရပါမည်။',
    unknown: 'ဘာမှန်းမသိသော error တက်သွားပါသည်။',
    unPublishingDocument: 'ဖိုင်ကို ပြန်လည့် သိမ်းဆည်းခြင်းမှာ ပြဿနာရှိနေသည်။',
    unspecific: 'Error တက်နေပါသည်။',
    userEmailAlreadyRegistered: 'ပေးထားသော အီးမေးလ်ဖြင့် အသုံးပြုသူ တစ်ဦး ရှိပြီးဖြစ်သည်။',
    userLocked:
      'အကောင့်ထဲကို ဝင်ရန် အရမ်းအရမ်းကို ကြိုးပမ်းနေသောကြောင့် အကောင့်အား လော့ခ်ချလိုက်ပါသည်။',
    usernameAlreadyRegistered: 'Pengguna dengan nama pengguna yang diberikan sudah mendaftar.',
    usernameOrPasswordIncorrect: 'Nama pengguna atau kata laluan yang diberikan tidak betul.',
    valueMustBeUnique: 'value သည် အဓိပ္ပာယ်ရှိရပါမည်။',
    verificationTokenInvalid: 'အတည်ပြုခြင်းတိုကင်သည် မမှန်ကန်ပါ။',
  },
  fields: {
    addLabel: '{{label}} ထည့်သွင်းမည်။',
    addLink: 'လင့်ခ်ထည့်ပါ။',
    addNew: 'အသစ် ထည့်သွင်းမည်။',
    addNewLabel: '{{label}} အားအသစ် ထည့်သွင်းမည်။',
    addRelationship: 'Relationship အသစ်ထည့်သွင်းမည်။',
    addUpload: 'Upload ထည့်ပါ။',
    block: 'ဘလောက်',
    blocks: 'ဘလောက်များ',
    blockType: 'ဘလောက် အမျိုးအစား',
    chooseBetweenCustomTextOrDocument:
      'စိတ်ကြိုက်စာသား URL ကိုထည့်ခြင်း သို့မဟုတ် အခြားစာရွက်စာတမ်းတစ်ခုသို့ လင့်ခ်ချိတ်ခြင်းအကြား ရွေးချယ်ပါ။',
    chooseDocumentToLink: 'ချိတ်ဆက်ရန် စာရွက်စာတမ်းကို ရွေးပါ။',
    chooseFromExisting: 'ရှိပြီးသားထဲကပဲ ရွေးချယ်ပါ။',
    chooseLabel: '{{label}} အားရွေးချယ်ပါ။',
    collapseAll: 'အားလုံးကို ခေါက်သိမ်းပါ။',
    customURL: 'စိတ်ကြိုက် URL',
    editLabelData: 'ဒေတာ {{label}} ကို တည်းဖြတ်ပါ။',
    editLink: 'လင့်ခ်ကို တည်းဖြတ်ပါ။',
    editRelationship: 'ဆက်ဆံရေးကို တည်းဖြတ်ပါ။',
    enterURL: 'URL တစ်ခုထည့်ပါ။',
    internalLink: 'Internal Link',
    itemsAndMore: '{{items}} နှင့် နောက်ထပ် {{count}} ခု',
    labelRelationship: '{{label}} Relationship',
    latitude: 'vĩ độ',
    linkedTo: '<0>{{label}}</0> ချိတ်ဆက်ထားသည်။',
    linkType: 'လင့်အမျိုးအစား',
    longitude: 'လောင်ဂျီကျု',
    newLabel: '{{label}} အသစ်',
    openInNewTab: 'တက်ဘ်အသစ်တွင် ဖွင့်ပါ။',
    passwordsDoNotMatch: 'စကားဝှက်များနှင့် မကိုက်ညီပါ။',
    relatedDocument: 'ဆက်စပ် ဖိုင်',
    relationTo: 'ဆက်စပ်မှု',
    removeRelationship: 'ဆက်ဆံရေးကို ဖယ်ရှားပါ။',
    removeUpload: 'အပ်လုဒ်ကို ဖယ်ရှားပါ။',
    saveChanges: 'သိမ်းဆည်းမည်။',
    searchForBlock: 'ဘလောက်တစ်ခုရှာမည်။',
    selectExistingLabel: 'ရှိပြီးသား {{label}} ကို ရွေးပါ',
    selectFieldsToEdit: 'တည်းဖြတ်ရန် အကွက်များကို ရွေးပါ။',
    showAll: 'အကုန် ကြည့်မည်။',
    swapRelationship: 'လဲလှယ်ဆက်ဆံရေး',
    swapUpload: 'အပ်လုဒ်ဖလှယ်ပါ။',
    textToDisplay: 'ပြသရန် စာသား',
    toggleBlock: 'ဘလောက်ကို ပြောင်းပါ။',
    uploadNewLabel: '{{label}} အသစ်တင်မည်။',
  },
  general: {
    aboutToDelete:
      '{{label}} <1>{{title}}</1> ကို ဖျက်ပါတော့မည်။ သေချာပြီလား။ ဖျက်ပြီးရင် ပြန်မရဘူးနော်။',
    aboutToDeleteCount_many: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    aboutToDeleteCount_one: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    aboutToDeleteCount_other: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    addBelow: 'အောက်တွင်ထည့်ပါ။',
    addFilter: 'ဇကာထည့်ပါ။',
    adminTheme: 'အက်ပ်ဒိုင်များစပ်စွာ',
    and: 'နှင့်',
    anotherUserTakenOver: 'တစ်ခြားအသုံးပြုသူသည်ဤစာရွက်စာတမ်းကိုပြင်ဆင်မှုကိုရယူလိုက်သည်။',
    applyChanges: 'ပြောင်းလဲမှုများ အသုံးပြုပါ',
    ascending: 'တက်နေသည်',
    automatic: 'အော်တို',
    backToDashboard: 'ပင်မစာမျက်နှာသို့ ပြန်သွားမည်။',
    cancel: 'မလုပ်တော့ပါ။',
    changesNotSaved:
      'သင်၏ပြောင်းလဲမှုများကို မသိမ်းဆည်းရသေးပါ။ ယခု စာမျက်နှာက ထွက်လိုက်ပါက သင်၏ပြောင်းလဲမှုများ အကုန် ဆုံးရှုံးသွားပါမည်။ အကုန်နော်။',
    clearAll: undefined,
    close: 'ပိတ်',
    collapse: 'ခေါက်သိမ်းပါ။',
    collections: 'စုစည်းမှူများ',
    columns: 'ကော်လံများ',
    columnToSort: 'ကော်လံ စီရန်',
    confirm: 'သေချာပါပြီ။',
    confirmDeletion: 'ဖျက်တော့မယ်နော်။',
    confirmDuplication: 'ပုံတူပွားခြင်းကို အတည်ပြုပါ။',
    copied: 'ကူးယူပြီးပြီ။',
    copy: 'ကူးယူမည်။',
    create: 'ဖန်တီးမည်။',
    created: 'ဖန်တီးခဲ့သည်။',
    createdAt: 'ဖန်တီးခဲ့သည့်အချိန်',
    createNew: 'အသစ် ဖန်တီးမည်။',
    createNewLabel: '{{label}} အသစ် ဖန်တီးမည်။',
    creating: 'ဖန်တီးနေသည်။',
    creatingNewLabel: '{{label}} အသစ် ဖန်တီးနေသည်။',
    currentlyEditing:
      'ဒီစာရွက်စာတမ်းကိုလက်ရှိပြင်ဆင်နေသည်။ သင်ဤတာဝန်ကိုယူပါက၊ သူတို့သည်ဆက်လက်ပြင်ဆင်ခွင့်မရအောင်ပိတ်ထားမည်ဖြစ်ပြီး၊ မသိမ်းဆည်းရသေးသောပြင်ဆင်မှုများကိုလည်းဆုံးရှုံးနိုင်သည်။',
    custom: 'ထုတ်ကုန် စိတ်ကြိုက်',
    dark: 'အမှောင်',
    dashboard: 'ပင်မစာမျက်နှာ',
    delete: 'ဖျက်မည်။',
    deletedCountSuccessfully: '{{count}} {{label}} ကို အောင်မြင်စွာ ဖျက်လိုက်ပါပြီ။',
    deletedSuccessfully: 'အောင်မြင်စွာ ဖျက်လိုက်ပါပြီ။',
    deleting: 'ဖျက်နေဆဲ ...',
    depth: 'ထိုင်းအောက်မှု',
    descending: 'ဆင်းသက်လာသည်။',
    deselectAllRows: 'အားလုံးကို မရွေးနိုင်ပါ',
    document: 'စာရွက်စာတမ်း',
    documentLocked: 'စာရွက်စာတမ်းကိုပိတ်ထားသည်',
    documents: 'စာရွက်စာတမ်းများ',
    duplicate: 'ပုံတူပွားမည်။',
    duplicateWithoutSaving: 'သေချာပါပြီ။',
    edit: 'တည်းဖြတ်ပါ။',
    editedSince: 'ကစပြီးတည်းဖြတ်ခဲ့သည်',
    editing: 'ပြင်ဆင်နေသည်။',
    editingLabel_many: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingLabel_one: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingLabel_other: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingTakenOver: 'တည်းဖြတ်ခြင်းကိုရယူခဲ့သည်',
    editLabel: '{{label}} ပြင်ဆင်မည်။',
    email: 'အီးမေးလ်',
    emailAddress: 'အီးမေးလ် လိပ်စာ',
    enterAValue: 'တန်ဖိုးတစ်ခုထည့်ပါ။',
    error: 'အမှား',
    errors: 'အမှားများ',
    fallbackToDefaultLocale: 'မူရင်းဒေသသို့ ပြန်ပြောင်းပါ။',
    false: 'မှား',
    filter: 'ဇကာ',
    filters: 'စစ်ထုတ်မှုများ',
    filterWhere: 'နေရာတွင် စစ်ထုတ်ပါ။',
    globals: 'Globals',
    goBack: 'နောက်သို့',
    isEditing: 'ပြင်ဆင်နေသည်',
    language: 'ဘာသာစကား',
    lastModified: 'နောက်ဆုံးပြင်ဆင်ထားသည်။',
    leaveAnyway: 'ဘာဖြစ်ဖြစ် ထွက်မည်။',
    leaveWithoutSaving: 'မသိမ်းဘဲ ထွက်မည်။',
    light: 'အလင်း',
    livePreview: 'အစမ်းကြည့်ရန်',
    loading: 'ဖွင့်နေသည်',
    locale: 'ဒေသ',
    locales: 'Locales',
    menu: 'မီနူး',
    moveDown: 'Move Down',
    moveUp: 'Move Up',
    newPassword: 'စကားဝှက် အသစ်',
    next: 'Seterusnya',
    noFiltersSet: 'စစ်ထုတ်မှုများ မသတ်မှတ်ထားပါ။',
    noLabel: '<မရှိ {{label}}>',
    none: 'တစ်ခုမှ',
    noOptions: 'ရွေးချယ်မှုမရှိပါ',
    noResults:
      '{{label}} မတွေ့ပါ။ {{label}} မရှိသေးသည်ဖြစ်စေ အထက်တွင်ဖော်ပြထားသော စစ်ထုတ်မှုများနှင့် ကိုက်ညီမှုမရှိပါ။',
    notFound: 'ဘာမှ မရှိတော့ဘူး။',
    nothingFound: 'ဘာမှလည်း မတွေ့ဘူး။',
    noValue: 'တန်ဖိုး မရှိပါ။',
    of: '၏',
    open: 'ဖွင့်မည်။',
    or: 'သို့မဟုတ်',
    order: 'အစဉ်လိုက်',
    pageNotFound: 'ရောက်ရှိနေသော စာမျက်နှာသည် မရှိပါ။',
    password: 'စကားဝှက်',
    payloadSettings: 'ရွေးချယ်စရာများ',
    perPage: 'စာမျက်နှာ အလိုက်: {{limit}}',
    previous: 'ယခင်',
    remove: 'ဖယ်ရှားမည်။',
    reset: 'Tetapkan semula',
    row: 'အတန်း',
    rows: 'Rows',
    save: 'သိမ်းဆည်းမည်။',
    saving: 'သိမ်းနေဆဲ ...',
    searchBy: 'ရှာဖွေပါ။',
    selectAll: '{{count}} {{label}} အားလုံးကို ရွေးပါ',
    selectAllRows: 'အားလုံးကိုရွေးချယ်ပါ',
    selectedCount: '{{count}} {{label}} ကို ရွေးထားသည်။',
    selectValue: 'တစ်ခုခုကို ရွေးချယ်ပါ။',
    showAllLabel: 'Tunjukkan semua {{label}}',
    sorryNotFound: 'ဝမ်းနည်းပါသည်။ သင်ရှာနေတဲ့ဟာ ဒီမှာမရှိပါ။',
    sort: 'အစဉ်လိုက်',
    sortByLabelDirection: 'အစဉ်အလိုက် စီမံခန့်ခွဲထားသည် {{label}} {{direction}}',
    stayOnThisPage: 'ဒီမှာပဲ ဆက်နေမည်။',
    submissionSuccessful: 'သိမ်းဆည်းမှု အောင်မြင်ပါသည်။',
    submit: 'သိမ်းဆည်းမည်။',
    submitting: 'Menghantar...',
    success: 'အောင်မြင်မှု',
    successfullyCreated: '{{label}} အောင်မြင်စွာဖန်တီးခဲ့သည်။',
    successfullyDuplicated: '{{label}} အောင်မြင်စွာ ပုံတူပွားခဲ့သည်။',
    takeOver: 'တာဝန်ယူပါ',
    thisLanguage: 'မြန်မာစာ',
    titleDeleted: '{{label}} {{title}} အောင်မြင်စွာ ဖျက်သိမ်းခဲ့သည်။',
    true: 'အမှန်',
    unauthorized: 'အခွင့်မရှိပါ။',
    unsavedChangesDuplicate:
      'သင့်တွင် မသိမ်းဆည်းရသေးသော ပြောင်းလဲမှုများ ရှိနေပါသည်။ ပုံတူပွားမှာ သေချာပြီလား။',
    untitled: 'ခေါင်းစဥ်မဲ့',
    updatedAt: 'ပြင်ဆင်ခဲ့သည့်အချိန်',
    updatedCountSuccessfully: '{{count}} {{label}} ကို အောင်မြင်စွာ အပ်ဒိတ်လုပ်ခဲ့သည်။',
    updatedSuccessfully: 'အပ်ဒိတ်လုပ်ပြီးပါပြီ။',
    updating: 'ပြင်ဆင်ရန်',
    uploading: 'တင်ပေးနေသည်',
    user: 'အသုံးပြုသူ',
    username: 'Nama pengguna',
    users: 'အသုံးပြုသူများ',
    value: 'တန်ဖိုး',
    viewReadOnly: 'ဖတ်ရှုရန်သာကြည့်ပါ',
    welcome: 'ကြိုဆိုပါတယ်။',
  },
  operators: {
    contains: 'ပါဝင်သည်',
    equals: 'ညီမျှ',
    exists: 'တည်ရှိသည်',
    intersects: 'ကြောက်ခြင်း',
    isGreaterThan: 'ထက်ကြီးသည်',
    isGreaterThanOrEqualTo: 'ထက်ကြီးသည် သို့မဟုတ် ညီမျှသည်',
    isIn: 'ရှိ',
    isLessThan: 'ထက်နည်းသည်',
    isLessThanOrEqualTo: 'ထက်နည်းသည် သို့မဟုတ် ညီမျှသည်',
    isLike: 'တူသည်',
    isNotEqualTo: 'ညီမျှသည်',
    isNotIn: 'မဝင်ပါ',
    near: 'နီး',
    within: 'အတွင်း',
  },
  upload: {
    addFile: 'ဖိုင်ထည့်ပါ',
    addFiles: 'Tambah Fail',
    bulkUpload: 'Muat naik pukal',
    crop: 'သုန်း',
    cropToolDescription:
      'ရွေးထားသည့်ဧရိယာတွင်မွေးလျှက်မှုများကိုဆွဲပြီး, အသစ်တည်ပြီးသို့မဟုတ်အောက်ပါတ',
    dragAndDrop: 'ဖိုင်တစ်ဖိုင်ကို ဆွဲချလိုက်ပါ။',
    dragAndDropHere: 'သို့မဟုတ် ဖိုင်တစ်ခုကို ဤနေရာတွင် ဆွဲချပါ။',
    editImage: 'ပုံပြင်ပြောင်းရန်',
    fileName: 'ဖိုင် နာမည်',
    fileSize: 'ဖိုင် အရွယ်အစား',
    filesToUpload: 'Fail untuk Dimuat Naik',
    fileToUpload: 'ဖိုင်တင်ရန်',
    focalPoint: 'အကန့်အသတ်ချုပ်',
    focalPointDescription:
      'ပြသနားရထားသည့်ပုံအားထိန်းသိမ်းရန် ဖိုကယ်ပိုင်းကို တိုက်ရိုက်ပွဲ့နိုင်သည် သို',
    height: 'Height',
    lessInfo: 'အချက်အလက်နည်းတယ်။',
    moreInfo: 'အချက်အလက်',
    pasteURL: 'URL ကို ကူးထည့်ပါ',
    previewSizes: 'Saiz Pratonton',
    selectCollectionToBrowse: 'စုစည်းမှု တစ်ခုခုကို ရွေးချယ်ပါ။',
    selectFile: 'ဖိုင်ရွေးပါ။',
    setCropArea: 'စပြန်းနယ်မြေထားပါ',
    setFocalPoint: 'အစေခံဖောက်ရေစနစ်ကိုသတ်မှတ်ပါ',
    sizes: 'အရွယ်အစားများ',
    sizesFor: '{{label}} အတွက် အရွယ်အစားများ',
    width: 'အကျယ်',
  },
  validation: {
    emailAddress: 'မှန်ကန်သော အီးမေးလ်လိပ်စာကို ထည့်သွင်းပါ။',
    enterNumber: 'မှန်ကန်သောနံပါတ်တစ်ခုထည့်ပါ။',
    fieldHasNo: 'ဤအကွက်တွင် {{label}} မရှိပါ။',
    greaterThanMax:
      '{{value}} သည် {{max}} ထက် ပိုမိုကြီးသည်။ ဤသည်ဖြင့် {{label}} အများဆုံးခွင့်ပြုထားသော တန်ဖိုးထက် ကြီးသည်။',
    invalidInput: 'ဤအကွက်တွင် မမှန်ကန်သော ထည့်သွင်းမှုတစ်ခုရှိသည်။',
    invalidSelection: 'ဤအကွက်တွင် မမှန်ကန်သော ရွေးချယ်မှုတစ်ခုရှိသည်။',
    invalidSelections: 'ဤအကွက်တွင် အောက်ပါ မမှန်ကန်သော ရွေးချယ်မှုများ ရှိသည်',
    lessThanMin:
      '{{value}} သည် {{min}} ထက် ပိုမိုနိမ့်သည်။ ဤသည်ဖြင့် {{label}} အနည်းဆုံးခွင့်ပြုထားသော တန်ဖိုးထက် နိမ့်သည်။',
    limitReached:
      'Had yang dibenarkan telah dicapai, hanya {{max}} item sahaja yang boleh ditambah.',
    longerThanMin: 'ဤတန်ဖိုးသည် အနိမ့်ဆုံးအရှည် {{minLength}} စာလုံးထက် ပိုရှည်ရမည်။',
    notValidDate: '"{{value}}" သည် တရားဝင်ရက်စွဲမဟုတ်ပါ။',
    required: 'ဤအကွက်ကို လိုအပ်သည်။',
    requiresAtLeast: 'ဤအကွက်သည် အနည်းဆုံး {{count}} {{label}} လိုအပ်သည်',
    requiresNoMoreThan: 'ဤအကွက်တွင် {{count}} {{label}} ထက် မပိုရပါ။',
    requiresTwoNumbers: 'ဤအကွက်သည် နံပါတ်နှစ်ခု လိုအပ်ပါသည်။',
    shorterThanMax: 'ဤတန်ဖိုးသည် စာလုံး {{maxLength}} လုံး၏ အမြင့်ဆုံးအရှည်ထက် ပိုတိုရပါမည်။',
    trueOrFalse: 'ဤအကွက်သည် တစ်ခုခုဖြစ်ရပါမည်။',
    username:
      'Sila masukkan nama pengguna yang sah. Boleh mengandungi huruf, nombor, tanda hubung, titik dan garis bawah.',
    validUploadID: "'ဤအကွက်သည် မှန်ကန်သော အပ်လုဒ် ID မဟုတ်ပါ။'",
  },
  version: {
    type: 'အမျိုးအစား',
    aboutToPublishSelection:
      'သင်သည် ရွေးချယ်မှုတွင် {{label}} အားလုံးကို ထုတ်ဝေပါတော့မည်။ သေချာလား?',
    aboutToRestore:
      'သင်သည် ဤ {{label}} စာရွက်စာတမ်းကို {{versionDate}} တွင် ပါရှိသည့် အခြေအနေသို့ ပြန်ယူတော့မည်။',
    aboutToRestoreGlobal:
      'သင်သည် ဂလိုဘယ် {{label}} ကို {{versionDate}} တွင် ပါရှိသည့် အခြေအနေသို့ ပြန်လည်ရောက်ရှိတော့မည်ဖြစ်သည်။',
    aboutToRevertToPublished:
      'သင်သည် အပြောင်းအလဲများကို အများဆိုင် အခြေအနေသို့ ပြန်ပြောင်းပါတော့မည်။ သေချာလား?',
    aboutToUnpublish: 'အများဆိုင်မှ ပြန်ဖြုတ်တော့မည်။ သေချာလား',
    aboutToUnpublishSelection:
      'သင်သည် ရွေးချယ်မှုတွင် {{label}} အားလုံးကို ထုတ်ဝေတော့မည် ဖြစ်သည်။ သေချာလား?',
    autosave: 'အလိုအလျောက်သိမ်းဆည်းပါ။',
    autosavedSuccessfully: 'အလိုအလျောက် သိမ်းဆည်းပြီးပါပြီ။',
    autosavedVersion: 'အော်တို ဗားရှင်း',
    changed: 'ပြောင်းခဲ့သည်။',
    compareVersion: 'ဗားရှင်းနှင့် နှိုင်းယှဉ်ချက်:',
    confirmPublish: 'ထုတ်ဝေအတည်ပြုပါ။',
    confirmRevertToSaved: 'သိမ်းဆည်းပြီးကြောင်း အတည်ပြုပါ။',
    confirmUnpublish: 'အများဆိုင်ကို ဖျက်ရန် အတည်ပြုပါ။',
    confirmVersionRestoration: 'ဗားရှင်းပြန်လည် အသုံးပြုခြင်းကို အတည်ပြုပါ။',
    currentDocumentStatus: 'လက်ရှိ {{docStatus}} ဖိုင်',
    currentDraft: 'Draf Semasa',
    currentPublishedVersion: 'လက်ရှိထုတ်ဝေထားသောဗားရှင်း',
    draft: 'မူကြမ်း',
    draftSavedSuccessfully: 'မူကြမ်းကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ။',
    lastSavedAgo: 'နောက်ဆုံး သိမ်းချက် {{distance}} ကြာပြီး',
    noFurtherVersionsFound: 'နောက်ထပ်ဗားရှင်းများ မတွေ့ပါ။',
    noRowsFound: '{{label}} အားမတွေ့ပါ။',
    noRowsSelected: undefined,
    preview: 'နမူနာပြရန်',
    previouslyPublished: 'တိုင်းရင်းသားထုတ်ဝေခဲ့',
    problemRestoringVersion: 'ဤဗားရှင်းကို ပြန်လည်ရယူရာတွင် ပြဿနာရှိနေသည်။',
    publish: 'ထုတ်ဝေသည်။',
    publishChanges: 'အပြောင်းအလဲများကို တင်ခဲ့သည်။',
    published: 'တင်ပြီးပြီ။',
    publishing: 'ထုတ်ဝေခြင်း',
    restoreAsDraft: 'Pulihkan sebagai draf',
    restoredSuccessfully: 'အောင်မြင်စွာ ပြန်လည်ရယူခဲ့သည်။',
    restoreThisVersion: 'ဤဗားရှင်းကိုကို ပြန်ယူမည်။',
    restoring: 'ပြန်ယူနေဆဲ...',
    reverting: 'ပြန်ပြောင်းနေဆဲ...',
    revertToPublished: 'အများဆိုင်သို့ ပြန်ပြောင်းပါ။',
    saveDraft: 'မှုကြမ်းကို သိမ်းဆည်းမည်။',
    selectLocales: 'ပြသရန် ဒေသန္တရများကို ရွေးပါ။',
    selectVersionToCompare: 'နှိုင်းယှဉ်ရန် ဗားရှင်းကို ရွေးပါ။',
    showingVersionsFor: 'အတွက် ဗားရှင်းများကို ပြသနေသည်-',
    showLocales: 'ဒေသန္တရများကိုပြပါ။:',
    status: 'အခြေအနေ',
    unpublish: 'ပြန်ဖြုတ်မည်။',
    unpublishing: 'ပြန်ဖြုတ်နေဆဲ ...',
    version: 'ဗားရှင်း',
    versionCount_many: '{{count}} ဗားရှင်းများကို တွေ့ပါသည်။',
    versionCount_none: 'ဗားရှင်းရှာဖွေ့ပါ။',
    versionCount_one: '{{count}} ဗားရှင်အား တွေ့ပါသည်။',
    versionCount_other: 'ဗားရှင်း {{count}} ခု တွေ့ရှိပါသည်။',
    versionCreatedOn: '{{version}} အား ဖန်တီးခဲ့သည်။',
    versionID: 'ဗားရှင်း ID',
    versions: 'ဗားရှင်းများ',
    viewingVersion: '{{entityLabel}} {{documentTitle}} အတွက် ဗားရှင်းကို ကြည့်ရှုနေသည်',
    viewingVersionGlobal: '`ဂလိုဘယ်ဆိုင်ရာ {entityLabel}} အတွက် ဗားရှင်းကို ကြည့်ရှုနေသည်',
    viewingVersions: '{{entityLabel}} {{documentTitle}} အတွက် ဗားရှင်းများကို ကြည့်ရှုခြင်း',
    viewingVersionsGlobal: '`ဂလိုဘယ်ဆိုင်ရာ {{entityLabel}} အတွက် ဗားရှင်းများကို ကြည့်ရှုနေသည်',
  },
}

export const my: Language = {
  dateFNSKey: 'en-US',
  translations: myTranslations,
}

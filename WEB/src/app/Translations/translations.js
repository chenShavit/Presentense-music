"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translations = (function () {
    function Translations() {
        this.langList = ['he', 'ar'];
        this.translationsDic = {
            //  General
            changePassword: ['שנה סיסמא', 'تغيير كلمة السر'],
            forgotPassword: ['שכחתי סיסמא', 'هل نسيت كلمة المرور'],
            forgotPasswordTitle: ['איפוס סיסמא', 'إعادة تعيين كلمة المرور'],
            forgotPasswordSubtitle: ['הזן את כתובת המייל לאיפוס הסיסמא', 'أدخل عنوان البريد الإلكتروني لإعادة تعيين كلمة المرور'],
            forgotTitle: ['איפוס סיסמא', 'إعادة تعيين'],
            profileCreateGroup: ['צור קבוצה', ''],
            group_exit_button: ['צא מהקבוצה', ''],
            congratsContinue: ['המשך', 'قدم'],
            accociated: ['בשיתוף', 'بالتعاون'],
            terms: ['תקנון', 'قواعد'],
            uploadFileButtonText: ['העלאת קובץ לתשובה', 'تحميل ملف الإجابة'],
            pointsAbbreviation: ['נק׳', 'نقطة'],
            male: ['זכר', 'الذكر'],
            female: ['נקבה', 'إناثا'],
            otherGender: ['אחר', 'اخر'],
            emailAddress: ['כתובת מייל', 'عنوان البريد الإلكتروني'],
            fullName: ['שם מלא', 'الاسم الكامل'],
            age: ['גיל', 'عمر'],
            phone: ['טלפון', 'رقم الهاتف'],
            contactUsMessage: ['הודעה', 'محتوى الرسالة'],
            chooseGender: ['מין', 'جنس'],
            hometown: ['עיר מגורים', 'مسقط رأس'],
            profileSave: ['שמור', 'إحفظ'],
            save: ['עיר מגורים', 'مسقط رأس'],
            changePassButton: ['שנה סיסמא', 'تغيير كلمة السر'],
            password: ['סיסמא', 'كلمه السر'],
            login: ['התחבר', 'تسجيل الدخول'],
            signup: ['הירשם', 'سجل'],
            existUser: ['משתמש קיים', 'مستخدم بالفعل'],
            didntReadTheTerms: ['היי, נראה ששכחת לקרוא את התקנון', 'يبدو أنك قد نسيت قراءة الشروط'],
            currentPassword: ['סיסמא נוכחית', 'كلمة السر الحالية'],
            newPassword: ['הזן סיסמא חדשה', 'أدخل كلمة مرور جديدة'],
            confirmPassword: ['אישור הסיסמא החדשה', 'تأكيد كلمة المرور الجديدة'],
            // Soccer
            soccer: ['אתגר הכדורגל', 'تحدّي كرة القدم'],
            text: ["אתם בכיתה ט׳ או י׳? חושבים שאתם יודעים הכללל על כדורגל? בואו נראה אתכם מנצחים את האתגר שלנו ולוקחים את הגביע ישר למונדיאל. מה צריך לעשות? לענות על שלוש שאלות טריוויה קלוווות, שתי חידות קצת יותר מאתגרות (אבל קטן עליכם), ולפצח את האתגר הגדול - אתגר שמצריך חישובים שקשורים לכדורגל, ממש כמו במנג׳ר, עם אפשרות להגדיל את הסיכוי לזכות בפרס הגדול - אתגר הכדורגל הענק של שנת 2018. מוכנים לזכות בפרסים שווים?", 'بتفكروا انكم بتعرفوا كلللل اشي عن كرة القدم؟ خلينا نشوفكم تفوزوا بالتحدي وتربحوا الكاس!نفّذوا المهام، اجيبوا عن الألغاز وممكن تفوزوا بجوائز خيالية !'],
            startButton: ['יאללה, למונדיאל!', 'يلا ع المونديال'],
            prasim: ['במה זוכים?', 'بماذا نفوز؟'],
            firstPrizeTitle: ['חבילות אירוח למונדיאל', 'رزم استضافة في'],
            firstPrizeText: ['פרס ראשון – שני שחקנים יזכו בכרטיסים זוגיים למונדיאל כולל טיסה ומלון!', 'الجائزة الأولى – لاعبان يفوزان ببطاقات زوجية للمونديال يشمل تذكرة الطائرة والفندق!'],
            firstPrizeFlippedText: ['חבילות אירוח למונדיאל', 'رزم استضافة في المونديال'],
            secondPrizeTitle: ['אימונים עם נבחרת ישראל', 'تدريبات مع منتخب إسرائيل'],
            secondPrizeText: ['פרס שני - 40 שחקנים יזכו ביום אימונים מיוחד עם נבחרת ישראל!', 'الجائزة الثانية – 40 لاعباً يفوزون بيوم تدريبات خاص ومميز مع منتخب إسرائيل !'],
            secondPrizeFlippedText: ['אימונים עם נבחרת ישראל', 'تدريبات مع منتخب'],
            thirdPrizeTitle: ['כרטיסים למשחקי הנבחרת', 'تذاكر لمباريات المنتخب'],
            thirdPrizeText: ['פרס שלישי - 80 שחקנים יזכו בכרטיסים זוגיים למשחקי הנבחרת!', 'الجائزة الثالثة – 80 لاعباً يفوزون بتذاكر زوجية لمباريات المنتخب !'],
            thirdPrizeFlippedText: ['כרטיסים למשחקי הנבחרת', 'تذاكر لمباريات المنتخب'],
            defaultStageTitle: ['שריקת הפתיחה', 'قبل ما نبدء, هيا نستعد'],
            defaultStageQuestion: ['באיזה מהקבוצות הבאות לא שיחק יוסי בניון?', 'الفريق الذي لم يلعب به يوسي بنيون؟'],
            option1: ['צ׳לסי', 'مكابي حيفا'],
            option2: ['ארסנל', 'ليفربول'],
            option3: ['הפועל קרית שמונה', 'راسينغ سانتاندير'],
            option4: ['מכבי חיפה', 'إيروني كريات شمونة'],
            titleOnTheCompetitionSoccer: ['על התחרות', 'על התחרותكرة قدم'],
            textOnTheCompetitionSoccer: ['קופי מגניב על התחרות הנעה להירשם קופי מגניב על התחרותה נעה להירשם כקבוצה  קופי מגניב על התחרות הנעה להירשם כקבוצה',
                'קופי מגניב על התחרות הנעה להירשם קופי מגניב על התחרותה נעה להירשם כקבוצה  קופי מגניב על התחרות הנעה להירשם כקבוצהكرة قدم'],
            soccerFirstCardTitle: ['אתגר מחשבתי', 'تحدي تفكيري'],
            soccerFirstCardPoints: ['100 נק׳', '100 نقطة'],
            soccerFirstCardBackTitle: ['להיות מנג׳ר ליום אחד', 'أن تكون مدير فني ليوم واحد'],
            soccerSecondCardTitle: ['אתגר פיזי', 'تحدي جسماني'],
            soccerSecondCardPoints: ['200 נק׳', '200 نقطة'],
            soccerSecondCardBackTitle: ['מוכן לעשות את אתגר הכדורגל שמשגע את הארץ?', 'مستعد لتحدي كرة القدم الذي يشغل عقول جميع البلاد'],
            socialFirstCardTitle: ['אתגר מחשבתי', 'تحدي تفكيري'],
            socialFirstCardPoints: ['100 נק׳', '100 نقطة'],
            socialFirstCardBackTitle: ['אתגר מחשבתי לפיצוח', 'أن تكون مدير فني ليوم واحد'],
            socialSecondCardTitle: ['אתגר חברתי', 'تحدي جسماني'],
            socialSecondCardPoints: ['100 נק׳', '100 نقطة'],
            socialSecondCardBackTitle: ['האתגר החברתי, שלושה שלבים בדרך שלך לקמפיין הגדול', 'مستعد لتحدي كرة القدم الذي يشغل عقول جميع البلاد'],
            videoQuestionText: ['question_text', 'question_text_arabic'],
            //  soccerThirdCardTitle: ['', ''],
            //  soccerThirdCardPoints: ['', ''],
            //  soccerThirdCardBackTitle: ['', ''],
            //  soccerFourthCardTitle: ['', ''],
            //  soccerFourthCardPoints: ['', ''],
            //  soccerFourthCardBackTitle: ['', ''],
            playNow: ['שחקו עכשיו', ''],
            makeTeam: ['יצירת קבוצה', ''],
            sentSuc: ['תשובתך נשלחה בהצלחה!', 'تم إرسال إجابتك بنجاح'],
            notPass: ['לצערנו לא עברת לשלב הבא<br>נשמח אם תנסה שוב בתחרות הבאה!', ''],
            congrats: ['סחתיין!<br>ענית על השאלה.<br>עוד קצת ואנחנו על המטוס!', 'أجبت على السؤال.<br>صحتين!<br>بقي القليل وسنكون في الطائرة'],
            groupTitle: ['הקבוצה שלי', ''],
            titleTask: ['כותרת משימה', ''],
            questionTask: ['באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?', 'באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?كرة قدم'],
            answer1: ['בחירה בודדת', ''],
            answer2: ['בחירה לחוצה', ''],
            answer3: ['בחירה לחוצה', ''],
            answer4: ['בחירה לחוצה', ''],
            sendButton: ['שליחה', 'اتصال'],
            talkwithus: ['דברו איתנו', 'التحدث معنا'],
            signupTitle: ['כמה פרטים לפני שמתחילים', 'التحدث معنا'],
            titlePro: ['פרופיל', 'ملفي'],
            subtitlePro: ['התראות', 'إخطارات'],
            alerts: ['01.05.2018 הגשת את תרגיל מספר 1<br>15.05.2018 עברת את שלב מספר 1 בהצלחה!<br>15.05.2018 הזמנת את אור מלר להצטרך לקבוצה שלך', '01.05.2018 הגשת את תרגיל מספר 1<br>15.05.2018 עברת את שלב מספר 1 בהצלחה!<br>15.05.2018 הזמנת את אור מלר להצטרך לקבוצה שלךكرة قدم'],
            titleCards: ['כותרת משימה', ''],
            cardsText: ['הגיע הזמן להכריע, אתה החלוץ או המנג׳ר? משימת החלוץ - אתגר פיזי ומחשבתי, מצריכה צבירה של 500 נקודות, כשהפרסים הם חבילות אירוח למונדיאל וימי אימון עם הנבחרת! משימת המנג׳ר - אתגר מחשבתי, מצריכה צבירה של 300 נקודות, כשהפרסים הם כרטיסים זוגיים למשחקי הנבחרת, כדורים וחולצות חתומות של שחקני הנבחרת. אז על איזה צד קמת היום?', 'حان وقت الحسم، أنت المهاجم أم المدير الفني؟ مهمة المهاجم - تحدّي جسدي وعقلي  يحتاج لجمع 500 نقطة، الجوائز عبارة عن رزمات ضيافية للمونديال ويوم تدريبي مع المنتخب! مهمة المهاجم - مهمة تفكيرية تحتاج لجمع 300 نقطة، الجوائز عبارة عن بطاقات زوجية للعبة المنتخب، طابات وقمصان مه امضاء لاعيبي المنتخب. ففي أي جانب قمت اليوم ؟ '],
            cardsTextSocial: ['יאללה, התחלנו באתגר. כל כרטיסיה שווה 100 נקודות, ומתחלקת לשתי חפיסות: הראשונה, חמישה אתגרים מחשבתיים לפיצוח, והשנייה, האתגר החברתי, שלושה שלבים בדרך שלך לקמפיין הגדול', 'حان وقت الحسم، أنت المهاجم أم المدير الفني؟ مهمة المهاجم - تحدّي جسدي وعقلي  يحتاج لجمع 500 نقطة، الجوائز عبارة عن رزمات ضيافية للمونديال ويوم تدريبي مع المنتخب! مهمة المهاجم - مهمة تفكيرية تحتاج لجمع 300 نقطة، الجوائز عبارة عن بطاقات زوجية للعبة المنتخب، طابات وقمصان مه امضاء لاعيبي المنتخب. ففي أي جانب قمت اليوم ؟ '],
            score: ['30 נק&#x27;', ''],
            subtitleCards: ['תיאור של משימה', ''],
            cardsInText: ['כותרת כותרת', ''],
            cardsButton: ['שלח', 'استمر'],
            cardsBack: ['חזור', 'الى الخلف'],
            titleTextQuestion: ['כותרת', ''],
            textInTextQuestion: ['תיאור משימה תיאור משימה תיאור משימה', ''],
            textArea: ['הזן טקסט', 'إدراج نص'],
            titlePass: ['איפוס סיסמא', 'إعادة تعيين كلمة المرور'],
            question: ['question_text', 'question_text_arabic'],
            stage_details: ['stage_details', 'stage_details_arabic'],
            options: ['multi_options', 'multi_options_arabic'],
            options_single: ['select', 'select_arabic'],
            design: ['עיצוב', ''],
            textDesign: ['זהו משחק איפור ומשחק הלבשה מדליק, בו אתם משחקים את תפקיד מעצב האופנה הנחשב ומציגים קולקציית בגדים משלכם בעזרת דוגמנית על מסלול. ראשית תצטרכו לאפר את הדוגמנית. עשו זאת ע"י לחיצה עם העכבר על הכפתור המייצג כל קטגוריה של איפור ועברו בין הדוגמאות השונות ע"י לחיצה על החצים. לאחר מכן תצטרכו להכין 4 תלבושות שונות(!) לדוגמנית שלכם    ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            firstPrizeTitleDesign: ['טיסה לחו"ל', ''],
            firstPrizeTextDesign: ['טסים לברצלונה עם החבר׳ה', ''],
            firstPrizeFlippedTextDesign: ['טסים לברצלונה<br>עם החבר׳ה', ''],
            secondPrizeTitleDesign: ['כרטיסים להופעה', ''],
            secondPrizeTextDesign: ['ביציע עם החבר׳ה במשחק של הנבחרת', ''],
            secondPrizeFlippedTextDesign: ['ביציע עם החבר׳ה<br>במשחק של הנבחרת', ''],
            thirdPrizeTitleDesign: ['מוצר אלקטרוני', ''],
            thirdPrizeTextDesign: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeFlippedTextDesign: ['אימון מהסרטים<br>עם הנבחרת', ''],
            defaultStageTitleDesign: ['כותרת המשימה', ''],
            defaultStageQuestionDesign: ['מהי שאלת חקר? שאלת חקר היא הצהרת כוונות של התלמידים (החוקרים) לגבי. עבודתם. מהי שאלת חקר טובה?', ''],
            optionOneDesign: ['חולצה', ''],
            optionTwoDesign: ['חצאית', ''],
            optionThirdDesign: ['מעיל', ''],
            optionFourDesign: ['גרב', ''],
            subtitle: ['שיטיס אתכם למונדיאל!', 'اللي راح يوصلكم للمونديال'],
            subtitleDesign: ['משחקים עד למילאנו ובחזרה', ''],
            tech: ['טכנולגיה', ''],
            textTech: ['תשלום במערכת ביטקוין נחשב כתקף רק לאחר ששודר לכל המשתתפים. לכן אין דרך להסתיר תשלומים. אולם מקור ויעד התשלום מזוהים רק לפי כתובת הארנק (המקביל במידה מסוימת לחשבון בנק) שלהם, ומערכת ביטקוין עצמה לא מבטיחה דרך לוודא מיהו הבעלים של אותם ארנקים. לכן משתמשים מיומנים המבקשים להשיג חשאיות יכולים להשתמש בביטקוין כדי להעביר כספים ...    ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            subtitleTech: ['כרטיס הכניסה שלכם למשרת החלומות', ''],
            firstPrizeTitleTech: ['טיסה לחו"ל', ''],
            firstPrizeTextTech: ['טסים לברצלונה עם החבר׳ה', ''],
            firstPrizeFlippedTextTech: ['טסים לברצלונה<br>עם החבר׳ה', ''],
            secondPrizeTitleTech: ['כרטיסים להופעה', ''],
            secondPrizeTextTech: ['ביציע עם החבר׳ה במשחק של הנבחרת', ''],
            secondPrizeFlippedTextTech: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeTitleTech: ['מוצר אלקטרוני', ''],
            thirdPrizeTextTech: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeFlippedTextTech: ['אימון מהסרטים<br>עם הנבחרת', ''],
            defaultStageTitleTech: ['כותרת המשימה', ''],
            defaultStageQuestionTech: ['תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה', ''],
            optionOneTech: ['מחשב', ''],
            optionTwoTech: ['עכבר', ''],
            optionThirdTech: ['כבל', ''],
            optionFourTech: ['רמקול', ''],
            social: ['האתגר החברתי', 'التحدي الإجتماعي'],
            subtitleSocial: ['ההזדמנות שלכם לעצב מציאות חדשה', 'فرصتكم لتصميم واقع جديد'],
            imageSubtitle: '/images/taglineSocial.png',
            firstPrizeTitleSocial: ['20,000 שקלים', ''],
            firstPrizeTextSocial: ['20,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            firstPrizeFlippedTextSocial: ['20,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            secondPrizeTitleSocial: ['10,000 שקלים', ''],
            secondPrizeTextSocial: ['10,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            secondPrizeFlippedTextSocial: ['10,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            thirdPrizeTitleSocial: ['5,000 שקלים', ''],
            thirdPrizeTextSocial: ['5,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            thirdPrizeFlippedTextSocial: ['5,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            defaultStageTitleSocial: ['לפני שמתחילים, בואו נתחמם', 'قبل ما نبدا، تعالوا نتحمى'],
            defaultStageQuestionSocial: ['איזה תחום חברתי הכי חשוב לך לקדם?', 'ما هي أهم حملة توعية شفتها؟'],
            optionOneSocial: ['צמצום העוני', 'إنهاء ظاهرة التنمر بالانترنت'],
            optionTwoSocial: ['מעמד האישה', 'النضال ضد العنف بالعائلة'],
            optionThirdSocial: ['בעלי חיים', 'شيء آخر'],
            optionFourSocial: ['שילוב נוער עם מוגבלויות', 'السياقة الآمنة للدراجات الهوائية الكهربائية'],
            music: ['מוזיקה', 'موسيقىكرة قدم'],
            textMusic: ['הסברעל התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            subtitleMusic: ['נתראה בקהל של הופעת השנה', 'נתראה בקהל של הפועת השנהكرة قدم'],
            firstPrizeTitleMusic: ['טיסה לחו"ל', 'טיסהלكرة قدم'],
            firstPrizeTextMusic: ['טסים לברצלונה עם החבר׳ה', 'טסים לברצלונה עם החבר׳הكرة قدم'],
            firstPrizeFlippedTextMusic: ['כרטיסים להופעה', 'כרטיסים להופעהكرة قدم'],
            secondPrizeTitleMusic: ['מוצר אלקטרוני', 'מוצר אלקטרוניكرة قدم'],
            secondPrizeTextMusic: ['אימון מהסרטים עם הנבחרת', 'אימון מהסרטים עם הנבחרתكرة قدم'],
            secondPrizeFlippedTextMusic: ['אימון מהסרטים<br>עם הנבחרת', 'אימון מהסרטים<br>עם הנבחרתكرة قدم'],
            thirdPrizeTitleMusic: ['אימון מהסרטים עם הנבחרת', 'אימון מהסרטים עם הנבחרתكرة قدم'],
            thirdPrizeTextMusic: ['כרטיסים להופעה', 'כרטיסים להופעהكرة قدم'],
            thirdPrizeFlippedTextMusic: ['אימון מהסרטים<br>עם הנבחרת', 'אימון מהסרטים<br>עם הנבחרתكرة قدم'],
            defaultStageTitleMusic: ['כותרת המשימה', 'כותרת המשימהكرة قدم'],
            defaultStageQuestionMusic: ['תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה', 'תיאור המשימה תיאור המשימה תיאור המשימה בערביתكرة قدم'],
            optionOneMusic: ['מחשב', 'מחשבكرة قدم'],
            optionTwoMusic: ['עכבר', 'עכברكرة قدم'],
            optionThirdMusic: ['כבל', 'כבלكرة قدم'],
            optionFourMusic: ['רמקול', 'רמקולكرة قدم'],
            titleAnswerPisa: ['ענו על השאלות הבאות:', 'أجيبوا على الأسئلة التالية'],
            bigtitleCards: ['דקה 90 - מריחים את הסוף', 'الدقيقة ال 90 - نشم رائحة النهاية'],
            link: ['העתק קישור לחבר׳ה', 'העתק קישור לחבר׳ה'],
            enter: ['התחברות', 'دخول'],
            navPrasim: ['הפרסים', 'الجوائز'],
            private: ['כרטיס שחקן/ית', 'بطاقة لاعب/لاعبة'],
            private_social: ['פרופיל', 'بطاقة لاعب/لاعبة'],
            contactUs: ['תהיו בקשר', 'تواصلوا معنا'],
            disConnect: ['התנתק', 'تسجيل الخروج'],
            comp: ['חזרה למשחק', 'العودة إلى اللعبة'],
            /*** Social ***/
            textSocial: ['בואו לעשות עם הכישרון שלכם משהו טוב. בואו נדמיין שמאבחנים אצלכם את מחלת הסרטן. אבל אתם בשליטה, מוקפים בצוות רפואי, חברים ומשפחה. אתם מצליחים להיאבק - ולנצח את הסרטן. ואז אתם חוזרים לשגרה, ומגלים שדברים לא יחזרו להיות מה שהיו. נשמע מפחיד? זו המציאות של מאות בני נוער היום. <br><br>זה הזמן שלכם לא להשאיר את החברים מאחור: אתם בכיתה ט׳ או י׳? האתגר החברתי מזמין אתכם להעלות מודעות ציבורית וחברתית, ולתת מענה לקשיים של אלו שניצחו את הסרטן. חוץ מלעשות טוב, הזוכים יזכו להפיק את הרעיון לקמפיין אמיתי! בנוסף, תלמידי כיתה י׳ שיסיימו את האתגר יזכו בשעות למעורבות האישית. האתגר יכול להתבצע לבד, או בקבוצה של עד 6 חברים. לחצו על ״הפרופיל שלי״ אחרי ההרשמה כדי להזמין חברים לקבוצה.', 'تعالوا لعمل شيء جيد بقدراتكم. تعالوا نتخيل انه تم تشخيصكم بمرض السرطان. بس حواليكم طاقم طبي وعائلة وأصحاب. نجحتوا تصارعوا السرطان وتنتصروا عليه، رجعتوا عالروتين واكتشفتوا انه الأمور ما رجعت مثل ما كانت. بخوف صح؟ هذا واقع مئات الشباب والصبايا اليوم.إجا الوقت انه ما تتركوا أصحابكوا بدون دعم: انتوا بصف تاسع أو عاشر؟ يدعوكم التحدي الاجتماعي انه تزيدوا الوعي بالمجتمع وتدعموا اللي انتصروا السرطان. غير انكوا بتعملوا منيح، الفائزين رح يحصلوا على فرصة لإنتاج الفكرة وتحويلها لحملة حقيقية!بالإضافة، طلاب صف عاشر اللي أنهوا التحدي رح يحصلوا على ساعات بالتدخل الاجتماعي .ممكن تنفذوا التحدي لوحدكوا أو بمجموعة عددها حتى 6 أشخاص. اضغطوا على "بروفايلي" بعد التسجيل عشان تدعوا أصدقاء للمجموعة.'],
            startButtonSocial: ['יש לי רעיון!', 'عندي فكرة!']
        };
    }
    Translations.prototype.translate = function (key, cookie) {
        return this.translationsDic[key][this.langList.indexOf(cookie)];
    };
    return Translations;
}());
exports.Translations = Translations;
exports.default = Translations;
//# sourceMappingURL=translations.js.map
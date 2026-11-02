// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "habiby",                                      // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `حمودي قلبي🥰♥️
 اغلي واحلي واحن واحد في حياتي كلهاا كنت عايزه اقولك شكراا علي كل حاجه بتعملهاا لياا وعشاني ربناا يكرمك ويرزقك ويديك كل الخير الي في الدنياا ونحقق كل حاجه عايزنها واحنا سوا وكل سنه وانت صاحبي وحبيبي وكل حاجه لياا في الدنياا وكل سنه وانت معايا وانا معاك وعلي قلبك العمر كله ويارب طول العمر وانت محقق كل حاجه بتتمناهاا واشوفك دايما اشطر وانجح واحلي واحد في الدنيا وانت كدا كدا احلي واحد في الدنيا كلهاا و يارب ان شاء الله السنه الجايه نكون بنحتفل بعيد ميلادك في بيتنا سوا 🫂♥️🥰
بحبك اد الدنياا كلها💋
  `,
};

const giftData: Record<string, GiftData> = {
  yahya: defaultGift,
  aya: defaultGift,
};

export default giftData;
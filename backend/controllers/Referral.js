const { generateUniqueCode } = require('../middlewares/Coupon');



// async function generateCoupon(userId, type) {
//   const code = generateUniqueCode();
//   const coupon = new Coupon({
//       code: code,
//       type: type,
//       userId: userId
//   });
//   await coupon.save();
//   return code;
// }


// async function applyReferralCode(name, email, referralCode) {
//     const user = await User.findOne({ name: name, email: email });
//     if (!user) {
//         throw new Error('User not found');
//     }

//     const referrer = await User.findOne({ referralCode: referralCode });
//     if (!referrer) {
//         throw new Error('Invalid referral code');
//     }

//     user.referredBy = referralCode;
//     await user.save();

//     const referrerDiscountCode = await generateCoupon(referrer._id, 'discount');
//     const newUserDiscountCode = await generateCoupon(user._id, 'discount');

//     notifyUser(referrer.email, referrerDiscountCode);
//     notifyUser(user.email, newUserDiscountCode);

//     return { referrerDiscountCode, newUserDiscountCode };
// }


// app.post('/apply-referral', async (req, res) => {
//     const { name, email, referralCode } = req.body;

//     try {
//         const referralResult = await applyReferralCode(name, email, referralCode);
//         res.status(200).json({
//             message: 'Referral applied successfully',
//             referrerDiscountCode: referralResult.referrerDiscountCode,
//             newUserDiscountCode: referralResult.newUserDiscountCode
//         });
//     } catch (error) {
//         console.error('Error during referral application:', error);
//         res.status(500).json({ error: error.message });
//     }
// });
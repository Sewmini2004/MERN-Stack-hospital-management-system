export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
    const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";
    //ann e cookie ek set krnne menn mken
    res.status(statusCode)
        .cookie(cookieName, token, {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),//cookie ek kchr dwsk thid kyl dnne mthnin e kale pannama cokkie
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })
        .json({ // me api response json ek ywna ek
            success: true,
            message,
            user,
            token,
        });
};

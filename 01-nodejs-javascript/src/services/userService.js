require("dotenv").config()
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const createUserService = async (name, email, password) => {
    try {
        //check user
        const user = await User.findOne({ email: email });
        if (user) {
            console.log(`>>> user exist, chon 1 mail khac ${email}`)
            return null;
        }



        //hash password
        const hashPassword = await bcrypt.hash(password, saltRounds)

        let result = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: "USER"
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const loginService = async (email, password) => {
    try {
        //fetch user by email
        const user = await User.findOne({ email: email })
        if (user) {
            //compare password
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (!isMatchPassword) {
                return {
                    EC: 2,
                    EM: "Email, Password khong hop le"
                }

            } else {
                // create access token
                const payload = {
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
                const access_token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: process.env.JWR_EXPIRES
                    }
                )
                return {
                    EC: 0,
                    access_token,
                    user: {
                        email: user.email,
                        name: user.name,
                        role: user.role
                    }

                }
            }
        } else {
            return {
                EC: 1,
                EM: "Email, Password khong hop le"
            }
        }

        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getUserService = async () => {
    try {
        let result = await User.find({}).select("-password");
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}



module.exports = {
    createUserService, loginService, getUserService
}
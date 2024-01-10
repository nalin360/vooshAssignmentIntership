import jwt from 'jsonwebtoken';
import User from '../model/user.js';
import bcrypt from 'bcrypt';

import { LoginUserSuccess, LoginUserWrongPassword } from '../shared/constant.js';



export const loginUser = async (req, res) => {

    try {
        const secretKey =  process.env.SECRET_KEY;
        const user = req.body;

        const { phoneNumber, password } = user;

        const isUserExist = await User.findOne({
            phoneNumber: phoneNumber,
        })

        // console.log(isUserExist);
        if (!isUserExist) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        
        const isPasswordMatched = bcrypt.compare( password, isUserExist?.password )

        // ** if not matched send response that wrong password;

        if (!isPasswordMatched) {
            res.status(400).json({
                status: 400,
                success: false,
                message: LoginUserWrongPassword,
            });
            return;
        }
        const token = jwt.sign(
            { _id: isUserExist?._id, phoneNumber: isUserExist?.phoneNumber },
            secretKey,
            {
              expiresIn: "1d",
            }
          );
          console.log(secretKey);
          res.status(200).json({
            status: 200,
            success: true,
            message: LoginUserSuccess,
            token: token,
          });;


    } catch (error) {

    }
}
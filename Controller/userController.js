import bcrypt from 'bcrypt';
import User from '../model/user.js';
import { PhoneNumberMessage, UserCreatedMssage } from '../shared/constant.js';

const secretKey = 'your-secret-key';
export const registerUser = async (req, res) => {

    try {
        const user = req.body;
        const { name, phoneNumber, password } = user;

        const isPhoneNumberAllReadyExist = await User.findOne({
            phoneNumber: phoneNumber,
        });

        if (isPhoneNumberAllReadyExist) {
            res.status(400).json({
                status: 400,
                message: PhoneNumberMessage,
            });
            return;
        }

        // USing bcrypt to hash the plain password
        // Generate a salt to use for hashing
        // This code snippet generates a salt using bcrypt with a cost factor of 10, and then hashes a password using the generated salt.
        const salt = await bcrypt.genSalt(10);
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);
        // now create the user;
        const newUser = await User.create({
            name,
            phoneNumber,
            password: hashedPassword
        });
        await newUser.save()
        // Send the newUser as  response;
        res.status(200).json({
            status: 201,
            success: true,
            message: UserCreatedMssage,
            user: newUser,
        });

    } catch (error) {
        // console the error to debug
        console.log(error);
        // Send the error message to the client
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });

    }
}


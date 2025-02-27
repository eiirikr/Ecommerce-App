const User = require("../models/User.js");
const bcrypt = require('bcrypt');
const auth = require("../auth.js");

const { errorHandler } = auth;

// User Registration
module.exports.registerUser = (req, res) => {
    if (!req.body.email.includes("@")) {
        return res.status(400).send({
            error: 'Email invalid'
        });
    }
    else if (req.body.password.length < 8) {
        return res.status(400).send({
            error: 'Password must be atleast 8 characters'
        });
    }
    else {
        let newUser = new User({
            userName: req.body.userName,
            email : req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })

        return newUser.save()
        .then((result) => res.status(201).send({
            message: 'Registered successfully'
        }))
        .catch(error => errorHandler(error, req, res));
    }
};

// User Login/Authentication
module.exports.loginUser = (req, res) => {
    if(req.body.email.includes("@")){
        return User.findOne({ email: req.body.email })
        .then(result => {
            if (result == null){
                return res.status(404).send({
                    error: 'No email found'
                });
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    return res.status(200).send({
                        access: auth.createAccessToken(result)
                    })
                } else {
                    return res.status(401).send({
                        error: 'Email and password do not match'
                    });
                }
            } 
        })
        .catch(error => errorHandler(error, req, res));
    } else {
        return res.status(400).send({
            error: 'Invalid Email'
        });
    }
};

// Retrieve user details
module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id).select('-password') 
    .then(user => {
        if (!user){
            return res.status(404).send({
                message: 'User not found'
            })
        } else {
            return res.status(200).send(user);
        }
    })
    .catch(error => errorHandler(error, req, res));
}


// Update user as admin
module.exports.updateUserAsAdmin = async (req, res) => {
    try {

        const userId = req.params.id;
        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return res.status(404).send({
                message: 'User not found'
            });
        }

        userToUpdate.isAdmin = true;
        await userToUpdate.save();

        return res.status(200).send({
            updatedUser : userToUpdate
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            error: 'Failed in Find',
            detail: error
        });
    }
};

// Reset password
module.exports.updatePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { newPassword } = req.body;

        if (!newPassword) {
            return res.status(400).json({ message: 'New password is required' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.findByIdAndUpdate(userId, { password: hashedPassword });

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
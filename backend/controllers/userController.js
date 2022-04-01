const ApiError = require('../error/ApiError')
const userService = require('../services/userService')
const bcrypt = require('bcrypt')

class UserController {

    async registration(req, res, next) {
        const {name, email, password, gender} = req.body
        const gender_id = gender === 'Мужчина' ? 1 : 2
        if (!email || !password)
            return next(ApiError.BAD_REQUEST('Некорректная почта или пароль'))

        const candidate = await userService.findByEmail(email)

        if (candidate)
            return next(ApiError.BAD_REQUEST('Пользователь уже существует'))

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await userService.create(name, email, hashPassword, gender_id)
        return res.json({message: 'Аккаунт создан'})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await userService.findByEmail(email)

        if (!user)
            return next(ApiError.BAD_REQUEST('Пользователя не существует'))

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword)
            return next(ApiError.BAD_REQUEST('Указан не верный пароль'))

        req.session.user = user;
        return res.json({message: 'Успех!'})
    }

    async check(req, res, next) {
        if (req.session.user) {
            res.json({isAuth: true, user: req.session.user});
        } else {
            res.json({isAuth: false});
        }
    }

    async logout(req, res) {
        if (req.session.user) {
            res.clearCookie("user");
            res.status(200).json({isAuth: false});
        }
    }


}

module.exports = new UserController()

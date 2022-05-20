const ApiError = require('../error/ApiError')
const userService = require('../services/userService')
const bcrypt = require('bcrypt')

class UserController {

    async registration(req, res, next) {
        const {name, email, password, sex} = req.body

        if (!email || !password)
            return next(ApiError.BAD_REQUEST('Некорректная почта или пароль'))

        const candidate = await userService.findByOption({email})

        if (candidate)
            return next(ApiError.BAD_REQUEST('Пользователь уже существует'))

        const hashPassword = await bcrypt.hash(password, 5)
        await userService.create(name, email, hashPassword, sex)
        return res.json({message: 'Аккаунт создан'})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await userService.findByOption({email})

        if (!user)
            return next(ApiError.BAD_REQUEST('Пользователя не существует'))

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword)
            return next(ApiError.BAD_REQUEST('Указан не верный пароль'))

        req.session.user = {...user, password: ''};
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

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAll()
            res.json(users)
        } catch (err) {
            console.log(err.stack)
        }
    }

    async deleteUser(req, res) {
        try {
            const {id} = req.params
            await userService.delete(id)
            return res.json({message: `Пользователь ${id} удален`})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateBalance (req, res, next) {
        const {balance} = req.body
        const id = req.session.user.id

        try {
            if (!balance)
                return next(ApiError.BAD_REQUEST('Некорректное значение'))

            const candidate = await userService.findByOption({id})
            const newBalance = Number(candidate.balance) + Number(balance)
            await userService.update(req.session.user.id, {balance: newBalance})

            req.session.user = {...req.session.user, balance: newBalance}
            return res.json({message: 'Данные аккаунта были обновлены', balance: newBalance})
        } catch (err) {
            console.log(err.stack)
        }
    }

    async updateUser(req, res, next) {
        try {
            const {name, email, password, sex} = req.body
            const id = req.session.user.id
            if (!email || !password)
                return next(ApiError.BAD_REQUEST('Некорректная почта или пароль'))

            const candidate = await userService.findByOption({email})

            if (!candidate)
                return next(ApiError.BAD_REQUEST('Пользователя не существует'))

            const hashPassword = await bcrypt.hash(password, 5)

            await userService.update(id, {name, email, password: hashPassword, sex_id: sex})

            return res.json({message: 'Данные аккаунта были обновлены'})
        } catch (err) {
            console.log(err.stack)
        }
    }


}

module.exports = new UserController()

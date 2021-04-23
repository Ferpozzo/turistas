import { Router } from 'express'
import { Locale } from '../models/Locale'

const localeRouter = Router()
const url = 'locales'
localeRouter.get(`/${url}`, async (request, response) => {
    try {
        const locales = await Locale.find()
        return response.status(200).send(locales)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.get(`/${url}/:id`, async (request, response) => {
    try {
        const locale = await Locale.findById(request.params.id)
        return response.status(200).send(locale)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.post(`/${url}`, async (request, response) => {
    try {
        const locale = await Locale.create(request.body)
        return response.status(201).send(locale)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.delete(`/${url}/:id`, async (request, response) => {
    try {
        const locale = await Locale.findByIdAndDelete(request.params.id)
        return response.status(200).send(locale)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.patch(`/${url}/:id`, async (request, response) => {
    try {
        const locale = await Locale.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(locale)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.put(`/${url}/:id`, async (request, response) => {
    try {
        const locale = await Locale.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(locale)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.get(`/users/:userId/${url}`, async (request, response) => {
    try {
        const locales = await Locale.find({ _userId: request.params.userId })
        return response.status(200).send(locales)
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { localeRouter }

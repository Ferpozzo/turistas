import { Router } from 'express'
import { Locale, ImageLocale, ImageLocaleSchema, ImageLocaleInterface } from '../models/Locale'
import { UploadedFile } from 'express-fileupload'
import { environment } from '../config/config'
import fs from 'fs'
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
localeRouter.post(`/${url}/:id/images`, (request, response) => {
    let file;
    let uploadPath: string;
    if (!request.files || Object.keys(request.files).length === 0) {
        return response.status(400).send('No files were uploaded');
    }
    let keys = Object.keys(request.files)
    console.log(keys)
    keys.forEach(element => {
        file = request.files[element] as UploadedFile
        uploadPath = environment.server.localesPath + request.body.userId + '_' + request.params.id + '_' + Date.now() + '_' + file.name
        let fileName = file.name;
        file.mv(uploadPath, function (error: any) {
            if (error) {
                return response.status(500).send(error)
            } else {
                try {
                    console.log(uploadPath)
                    const imageLocale = ImageLocale.create({
                        _localeId: request.params.id,
                        name: fileName,
                        path: uploadPath
                    })
                } catch (error) {
                    return response.status(400).send(error)
                }
            }
        })
    })
    response.send({ message: 'File(s) uploaded' })
})
localeRouter.get(`/${url}/:id/images`, async (request, response) => {
    try {
        const images = await ImageLocale.find({ _localeId: request.params.id })
        return response.status(200).send(images)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.get(`/${url}/:id/images/:imageId`, async (request, response) => {
    try {
        const image = await ImageLocale.findById(request.params.imageId)
        return response.status(200).send(image)
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.delete(`/${url}/:id/images/:imageId`, async (request, response) => {
    try {
        const image = await ImageLocale.findByIdAndDelete(request.params.imageId).then(img => {
            fs.unlinkSync(img?.get('path'))
        })
        return response.status(200).send({ message: 'Image deleted', image })
    } catch (error) {
        return response.status(400).send(error)
    }
})
localeRouter.delete(`/${url}/:id/images`, async (request, response) => {
    try {
        const images = await ImageLocale.find({ _localeId: request.params.id }).then(imgs => {
            imgs.forEach(async img => {
                await ImageLocale.findByIdAndDelete(img.id).then(img => {
                    console.log(fs.existsSync(img?.get('path')))
                    if (fs.existsSync(img?.get('path'))) {
                        fs.unlinkSync(img?.get('path'))
                    }
                })
            })
        })
        return response.status(200).send({ message: 'Images deleted' })
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { localeRouter }

import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,

}

const STORAGE_KEY = 'emailsDB'

function query(filterBy) {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) {
        mails = []
        for (let i = 0; i < 10; i++) {
            mails[i] = _createMail()
        }
        _saveToStorage(mails)
    }

    if (filterBy) {
        let { byName, byPrice } = filterBy
        if (!byName) byName = ''
        if (!byPrice) byPrice = 0
        books = books.filter(book => (
            book.title.includes(byName) &&
            book.listPrice.amount >= byPrice
        ))
    }
    return Promise.resolve(mails)
}

function _createMail() {

    const mail = {

        id: utilService.makeId(),
        subject: utilService.makeLorem(2),
        body: utilService.makeLorem(20),
        isRead: false,
        sentAt: new Date().getTime(),
        to: 'momo@momo.com'
    }
    return mail
}

const loggedInUser = {

    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

function _loadFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function _saveToStorage(mails) {
    storageService.saveToStorage(STORAGE_KEY, mails)
}
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    removeMail,
    getMailIdx,
    toggleUnread,

}

const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

const STORAGE_KEY = 'emails'
let mailsDB = []

function query(filterBy) {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) {
        mails = []
        for (let i = 0; i < 10; i++) {
            mails[i] = _createMail()
        }
        mailsDB = mails
        console.log('mails:', mails);
        _saveToStorage(mails)
    }

    if (filterBy) {
        let { bySearch, isRead } = filterBy
        if (!bySearch) bySearch = ''
        if (!isRead) isRead = ''
        mails = mails.filter(mail => (
            mail.subject.includes(bySearch) ||
            mail.body.includes(bySearch)
            // mail.isRead
        ))
    }
    return Promise.resolve(mails)
}

function _createMail() {
    const { makeId, makeLorem, makeRandName, randomDate, randomBoolean } = utilService
    const mail = {

        id: makeId(),
        from: makeRandName(),
        subject: makeLorem(2),
        body: makeLorem(20),
        isRead: randomBoolean(),
        sentAt: randomDate(new Date(2020, 0, 1), new Date()),
        receivedAt: randomDate(new Date(2020, 0, 1), new Date()),
        to: 'momo@momo.com'
    }
    return mail
}

function toggleUnread(mail) {
    console.log('HELLO from toggleUnread')
    console.log('mail.isRead:', mail.isRead);
    mail.isRead = !mail.isRead
    _saveToStorage(mailsDB)
}

function removeMail(mail) {
    var idx = getMailIdx(mail.id)
    mailsDB.splice(idx, 1)
    console.log('mailsDb:', mailsDB);
    _saveToStorage(mailsDB)
    return Promise.resolve()
}

function getMailIdx(mailId) {
    return mailsDB.findIndex(mail => mail.id === mailId)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function _saveToStorage(mails) {
    storageService.saveToStorage(STORAGE_KEY, mails)
}
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    removeMail,
    getMailIdx,
    toggleUnread,
    getById,
    countUnread,
}

const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    isRead: true,
    isStared: true,
    lables: ['important', 'romantic']
}

var unreadCount
const STORAGE_KEY = 'emails'
let mailsDB = []

function query(filterBy) {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) {
        mails = []
        for (let i = 0; i < 10; i++) {
            mails[i] = _createMail()
        }
        _saveToStorage(mails)
    }
    mailsDB = mails
    countUnread()
    console.log('unreadCount:', unreadCount)
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
    console.log('mailsDB:', mailsDB)
    return Promise.resolve(mails)
}

function _createMail() {
    const { makeId, makeLorem, makeRandName, randomDate, randomBoolean } = utilService
    const mail = {

        id: makeId(),
        to: 'momo@momo.com',
        from: makeRandName(),
        subject: makeLorem(2),
        body: makeLorem(20),
        isRead: false,
        isRemoved: false,
        sentAt: randomDate(new Date(2020, 0, 1), new Date()),
        receivedAt: randomDate(new Date(2020, 0, 1), new Date()),
    }
    return mail
}

function removeMail(mail) {
    var idx = getMailIdx(mail.id)
    if (mail.isRemoved) {
        mailsDB.splice(idx, 1)
        _saveToStorage(mailsDB)
    } else {
        mailsDB[idx].isRemoved = true
        _saveToStorage(mailsDB)
    }
    console.log('mail-from:', mail.from, 'isRemoved:', mail.isRemoved)
    return Promise.resolve()
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function toggleUnread(mail) {
    if (!mail.isRead) {
        mail.isRead = true
        unreadCount--
        _saveToStorage(mailsDB)
    } else {
        mail.isRead = false
        unreadCount++
        _saveToStorage(mailsDB)
    }
    console.log('mail-from:', mail.from, '| isRead:', mail.isRead)
    console.log('unreadCount:', unreadCount)
}

function countUnread() {
    console.log('mailsDB:', mailsDB)
    
    if (!unreadCount) {
        let unread = 0
        for (var i = 0; i < mailsDB.length; i++) {
            if (!mailsDB[i].isRead) unread++
        }
        unreadCount = unread
    }
    // console.log('unreadCount:', unreadCount);
    return unreadCount
}

function getMailIdx(mailId) {
    return mailsDB.findIndex(mail => mail.id === mailId)
}

function _loadFromStorage() {

    return storageService.loadFromStorage(STORAGE_KEY)
}

function _saveToStorage(mailsDB) {
    storageService.saveToStorage(STORAGE_KEY, mailsDB)
}
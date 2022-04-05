const Contact = require('../models/contact')
const { httpCode } = require('../services/constants')
const { resStatus, resMessage } = require('../services/messages')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find()
    res.json({
      status: resStatus.SUCCESS,
      code: httpCode.OK,
      data: { contacts },
    })
  } catch (error) {
    next(error)
  }
}

const addContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body)
    res.status(httpCode.CREATED).json({
      status: resStatus.SUCCESS,
      code: httpCode.CREATED,
      data: { contact },
    })
  } catch (error) {
    next(error)
  }
}

const getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpCode.OK,
        data: { contact },
      })
    }
    return res.status(httpCode.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpCode.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  } catch (error) {
    next(error)
  }
}

const removeContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id)
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpCode.OK,
        data: { contact },
      })
    }
    return res.status(httpCode.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpCode.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  } catch (error) {
    next(error)
  }
}

const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpCode.OK,
        data: { contact },
      })
    }
    return res.status(httpCode.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpCode.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listContacts,
  addContact,
  getContact,
  removeContact,
  updateContact,
}

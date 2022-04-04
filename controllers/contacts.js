const repository = require('../repository/contacts')
const { httpStatus } = require('../services/constants')
const { resStatus, resMessage } = require('../services/messages')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await repository.listContacts()
    res.json({
      status: resStatus.SUCCESS,
      code: httpStatus.OK,
      data: { contacts },
    })
  } catch (error) {
    next(error)
  }
}

const addContact = async (req, res, next) => {
  try {
    const contact = await repository.addContact(req.body)
    res.status(httpStatus.CREATED).json({
      status: resStatus.SUCCESS,
      code: httpStatus.CREATED,
      data: { contact },
    })
  } catch (error) {
    next(error)
  }
}

const getContact = async (req, res, next) => {
  try {
    const contact = await repository.getContact(req.params.id)
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpStatus.OK,
        data: { contact },
      })
    }
    return res.status(httpStatus.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpStatus.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  } catch (error) {
    next(error)
  }
}

const removeContact = async (req, res, next) => {
  try {
    const contact = await repository.removeContact(req.params.id)
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpStatus.OK,
        data: { contact },
      })
    }
    return res.status(httpStatus.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpStatus.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  } catch (error) {
    next(error)
  }
}

const updateContact = async (req, res, next) => {
  try {
    const contact = await repository.updateContact(req.params.id, req.body)
    if (contact) {
      return res.json({
        status: resStatus.SUCCESS,
        code: httpStatus.OK,
        data: { contact },
      })
    }
    return res.status(httpStatus.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpStatus.NOT_FOUND,
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

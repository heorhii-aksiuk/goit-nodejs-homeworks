const repository = require('../repository/contacts')
const { httpStatus } = require('../libs/constants')
const { resStatus, resMessage } = require('../libs/messages')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await repository.listContacts()
    res.json({
      status: resStatus.SUCCESS,
      code: httpStatus.OK,
      payload: { contacts },
    })
  } catch (error) {
    next(error)
  }
}

const addContact = async (req, res, next) => {
  try {
    const contact = await repository.addContact(req.body)
    res.json({
      status: resStatus.SUCCESS,
      code: httpStatus.CREATED,
      payload: { contact },
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
        payload: { contact },
      })
    }
    return res.json({
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
      res.json({
        status: resStatus.SUCCESS,
        code: httpStatus.OK,
        payload: { contact },
      })
    }
    res.json({
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
      res.json({
        status: resStatus.SUCCESS,
        code: httpStatus.OK,
        payload: { contact },
      })
    }
    res.json({
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

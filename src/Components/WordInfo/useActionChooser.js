import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

export const useActionChooser = ({
  action = '',
  translateTo = '',
  redirect = false,
}) => {
  const [parameters, setParameters] = useState({})
  const requestTypeFromState = useSelector((state) => state.fetch.requestType)
  const resultFromState = useSelector((state) => state.fetch.currentWord)

  const actionFind = useCallback(
    (data) => {
      let filteredResult = JSON.parse(JSON.stringify(data))
      if (filteredResult.response) {
        filteredResult.response.translations = [
          filteredResult.response.translations.filter(
            (item) => item.language === translateTo
          )[0],
        ]
        if (filteredResult.response.translations[0] === undefined) {
          filteredResult = { display: true, existed: false, action: 'find' }
        }
      } else {
        if (data.existed !== undefined) {
          filteredResult = { display: true, existed: false, action: 'find' }
        } else {
          filteredResult = { display: false, existed: false, action: 'find' }
        }
      }
      return filteredResult
    },
    [translateTo]
  )

  const actionAdd = (data) => {
    if (
      data.response !== undefined &&
      (data.response.word ||
        data.response.transcription ||
        data.response.translations)
    ) {
      const translations =
        typeof data.response.translations !== 'string'
          ? data.response.translations
          : []
      return {
        existed: true,
        display: false,
        response: { ...data.response, translations: translations },
        action: 'add',
      }
    } else {
      return { existed: false, display: false, action: 'add' }
    }
  }

  const actionUpdate = (data) => {
    if (typeof data.response === 'undefined') {
      if (data.existed === false) {
        return {
          existed: false,
          display: true,
          action: 'update',
        }
      }
      return { existed: false, display: false, action: 'update' }
    } else if (data.existed === true) {
      return {
        existed: true,
        display: false,
        response: data.response,
        action: 'update',
      }
    } else
      return {
        existed: false,
        display: true,
        action: 'update',
      }
  }

  const actionDelete = (data) => {
    if (typeof data.response === 'undefined') {
      if (data.existed === false) {
        return {
          existed: false,
          display: true,
          action: 'delete',
        }
      }
      return { existed: false, display: false, action: 'delete' }
    } else if (data.existed === true) {
      return {
        existed: true,
        display: false,
        response: data.response,
        action: 'delete',
      }
    } else
      return {
        existed: false,
        display: true,
        action: 'delete',
      }
  }

  useEffect(() => {
    const result =
      action === requestTypeFromState || redirect ? resultFromState : {}
    const processResult = () => {
      switch (action) {
        case 'find': {
          setParameters(actionFind(result))
          break
        }
        case 'add': {
          setParameters(actionAdd(result))
          break
        }
        case 'update': {
          setParameters(actionUpdate(result))
          break
        }
        case 'delete': {
          setParameters(actionDelete(result))
          break
        }

        default:
          break
      }
    }
    if (!result.isFetching) {
      processResult()
    }
  }, [action, actionFind, redirect, requestTypeFromState, resultFromState])
  return parameters
}

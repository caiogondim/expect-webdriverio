import { waitUntil, enhanceError, getSelectors, isNotText } from '../utils'

export function toBeDisabled(el: WebdriverIO.Element, options: ExpectWebdriverIO.CommandOptions = {}) {
    const isNot = this.isNot

    return browser.call(async () => {
        el = await el
        const pass = await waitUntil(async () => !await el.isEnabled(), isNot, options)
        const message = enhanceError(`Element "${getSelectors(el)}" is ${isNotText(pass, 'not ')}disabled.`, options)

        return {
            pass,
            message: () => message
        }
    })
}
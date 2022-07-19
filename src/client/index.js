import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

// All our Javascript its being exported from the index.js and now its going to be part of that Client library
export {
    checkForName,
    handleSubmit
}

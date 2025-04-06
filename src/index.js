import { App } from './components/App'
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
	document.body.appendChild(new App().$rootElement)
})

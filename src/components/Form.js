import { Component } from '../core/Component'

export class Form extends Component {
	setup(props) {
		this.state = {
			amount: '',
		}
		this.$rootElement = document.createElement('form')
		this.$rootElement.className = 'donate-form'
		// Create el
		const labelForm = document.createElement('label')
		const inputForm = document.createElement('input')
		const buttonForm = document.createElement('button')
		// Render
		this.renderFormUi(labelForm, inputForm, buttonForm)
		this.$rootElement.appendChild(labelForm)
		this.$rootElement.appendChild(buttonForm)
		labelForm.appendChild(inputForm)
		// =============
		this.$inputForm = inputForm
		this.$btnForm = buttonForm

		// Event Handle
		this.$inputForm.addEventListener('input', this.handleInput.bind(this))
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
	}

	get isValid() {
		if (Number(this.state.amount) >= 1 && Number(this.state.amount) <= 100) {
			return true
		}
		return false
	}
	handleInput(event) {
		this.state.amount = event.target.value
		if (this.isValid) {
			return (this.$btnForm.disabled = false)
		}
		return (this.$btnForm.disabled = true)
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.props.onSubmit(Number(this.state.amount)))

		if (this.isValid) {
			this.state.amount = ''
			this.$inputForm.value = ''
		}
	}

	renderFormUi(label, input, btn) {
		// set Selectors
		const setClassName = (item, selector) => {
			item.className = selector
		}
		const setAttribute = (item, name, value) => {
			item.setAttribute(name, value)
		}
		// ClassName
		setClassName(label, 'donate-form__input-label')
		setClassName(input, 'donate-form__donate-input')
		setClassName(btn, 'donate-form__submit-button')
		// Attribute
		setAttribute(input, 'name', 'amount')
		setAttribute(input, 'type', 'number')
		setAttribute(input, 'max', '100')
		setAttribute(input, 'min', '1')
		input.setAttribute('required', '')
		// Content
		label.textContent = 'Введите сумму в $'
		btn.textContent = 'Задонатить'
	}
}

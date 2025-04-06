import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'
import { StorageService } from './StorageService'

export class App extends Component {
	setup(props) {
		this.props.onSubmit = this.onItemCreate.bind(this)
		this.state = {
			total: 0,
			donates: [],
		}

		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'app'
		// ...
		// Create Title ===========

		const renderTitle = document.createElement('h1')
		const renderSpan = document.createElement('span')
		// Content ===========
		renderTitle.className = 'total-amount'
		renderTitle.textContent = `Итого: `
		renderSpan.textContent = `${this.state.total}`
		// Render DOM ============
		this.$total = renderSpan
		renderTitle.appendChild(this.$total)
		this.$rootElement.appendChild(renderTitle)

		// Render Component
		const donateForm = new Form(this.props)
		const donateList = new List()
		this.donateList = donateList
		this.$rootElement.appendChild(donateForm.$rootElement)
		this.$rootElement.appendChild(this.donateList.$rootElement)
	}

	onItemCreate(amount) {
		const item = new ListItem(amount)
		const storageService = new StorageService()
		this.state.donates.push(item)
		this.donateList.addItem(item)
		this.$total.textContent = this.state.total += amount
		storageService.saveItem(item.state.id, item.state)
		item.$btnDel.addEventListener('click', e => {
			const { target } = e
			if (target) {
				this.state.donates.pop()
				this.$total.textContent = this.state.total -= amount
				item.$rootElement.remove()
				storageService.removeItem(item.state.id)
			}
			storageService.get(item.state.id)
		})
		return item
	}
}

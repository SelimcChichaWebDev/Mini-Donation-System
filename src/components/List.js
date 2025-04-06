import { Component } from '../core/Component'

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'donates-container'

		// Create element
		const titleList = document.createElement('h2')
		const listContainer = document.createElement('div')
		// Render
		this.renderListUi(titleList, listContainer)
		this.$rootElement.appendChild(titleList)
		this.$rootElement.appendChild(listContainer)
		this.$listContainer = listContainer
	}

	addItem(item) {
		this.$listContainer.appendChild(item.$rootElement)
	}

	renderListUi(title, wrapper) {
		// Title List
		title.className = 'donates-container__title'
		title.textContent = 'Список донатов'
		// Wrapper List
		wrapper.className = 'donates-container__donates'
	}
}

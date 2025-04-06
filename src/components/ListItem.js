import moment from 'moment'
import { Component } from '../core/Component'

export class ListItem extends Component {
	setup(props) {
		this.state = {
			id: moment().unix(),
			date: moment().format('D/MM/YYYY, h:mm:ss'),
			amount: props,
		}

		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'donate-item'
		const $elBold = document.createElement('b')
		const $btnDel = document.createElement('button')
		const $total = document.querySelector('span')

		// ...
		this.$total = $total
		this.$btnDel = $btnDel
		this.listUi(this.$rootElement, $elBold, $btnDel)
	}

	listUi(itemList, elBold, btnDel) {
		itemList.textContent = `${this.state.date} - `
		elBold.textContent = `$${this.state.amount}`
		btnDel.className = 'delete-button'
		btnDel.textContent = 'delete'
		itemList.appendChild(elBold)
		itemList.appendChild(btnDel)
	}
}

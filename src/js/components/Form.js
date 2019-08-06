/**
 * Website's form validation and submit scripts.
 *
 * @module Form
 */

import {
	Validator
} from './Validators';
export class Form {
	constructor() {
		let self = this;
		this.state = {
			formValid: false,
			currentForm: null
		};

		document.addEventListener("DOMContentLoaded", (event) => {
			self.submitForm();
		});
	}


	validateFields(fields) {
		for (let index = 0; index < fields.length; index++) {
			const field = fields[index];
			let type = field.getAttribute('name');
			switch (type) {
				case 'name':
					Validator.validateName(field);
					break;
				case 'email':
					Validator.validateEmail(field);
					break;
				case 'password':
					Validator.validatePassword(field);
					break;
				case 'privacy':
					Validator.validatePrivacy(field);
					break;
				case 'password-repeat':
					Validator.validateConfirmPassword(fields[1], fields[2]);
					break;
				case 'phone':
					Validator.validatePhone(field, 7, 20);
					break;
				default:
					break;
			}
		}
		let fieldsArr = Array.prototype.slice.call(fields);

		function isValid(element, index, array) {
			return element.classList.contains('valid');
		}
		fieldsArr.every(isValid) === true ? this.formValid = true : this.formValid = false;
		if (this.formValid === true) {
			for (let index = 0; index < fieldsArr.length; index++) {
				const element = fieldsArr[index];
				let messege = element.parentNode.querySelector('.validate-message');
				messege.innerHTML = '';
			}
		}
	}


	submitForm() {
		let $forms = document.querySelectorAll('.js-forms');
		for (let index = 0; index < $forms.length; index++) {
			const form = $forms[index];
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				let btn = event.target.querySelector('button[type="submit"]');
				let fields = event.target.querySelectorAll('.js-validate');
				this.validateFields(fields);
				console.log(this.formValid);
				if (this.formValid === true) {
					btn.removeAttribute('disabled');
					let $formdata = new FormData(event.target);
					let request = new XMLHttpRequest();
					// request.open("POST", "submitform.php");
					// request.send($formdata);
					let currentFormId = event.target.getAttribute('id');
					if (currentFormId === "callBackForm") {
						this.successModal();
					} else if (currentFormId === "hasQuestion") {
						this.successModal();
					} else if (currentFormId === "login-form") {
						alert('Вы успешно зашли!');
					} else {
						alert('Вы успешно зарегистрировались!');
					}
				}
			});
		}
	}

	successModal() {
		document.querySelector('.hideTrigger').click();
	}
}

/** Export initialized popup scripts by default */
export default new Form();
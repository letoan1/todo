import React from 'react'

const Form = () => {
	const [state, setState] = React.useState({
		name: '',
		fullname: '',
		password: '',
	})

	const handleChange = (e) => {
		setState({
				[e.target.name]: e.target.value,
		})
		console.log(state)
	}

	const handleForm = (e) => {
		e.preventDefault()
		console.log(state)
	}

  return (
	<form>
		<input
			type="text"
			name='name'
			onChange={handleChange}
		/>
		<input
			type="text"
			name='fullname'
			onChange={handleChange}
		/>
		<input
			type="password"
			name='password'
			onChange={handleChange}
		/>

		<button type='submit' onClick={handleForm}>Login</button>
	</form>
  )
}

export default Form
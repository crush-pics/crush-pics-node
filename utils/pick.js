module.exports = (obj, props) => {
	if (!obj || !props) return
	const picked = {}

	props.forEach((prop) => {
		picked[prop] = obj[prop]
	})
	return picked
}
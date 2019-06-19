import React from 'react'
import { connect } from 'react-redux'
import { updateDestinationForm } from '../../actions/destinationFormActions'
import { addDestination } from '../../actions/destinationFormActions'

const DestinationInput = ({ destinationFormData, updateDestinationForm, addDestination }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...destinationFormData,
      [name]: value
    }
    updateDestinationForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addDestination(destinationFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} value={destinationFormData.name} placeholder="name" />
      <input type="text" name="city" onChange={handleChange} value={destinationFormData.city} placeholder="city" />
      <input type="text" name="state" onChange={handleChange} value={destinationFormData.state} placeholder="state" />
      <input type="text" name="country" onChange={handleChange} value={destinationFormData.country} placeholder="country" />
      <input type="text" name="price" onChange={handleChange} value={destinationFormData.price} placeholder="price" />
      <input type="text" name="description" onChange={handleChange} value={destinationFormData.description} placeholder="description" />
      <input type="text" name="image" onChange={handleChange} value={destinationFormData.image} placeholder="image" />
      <input type="submit" value="Add Destination" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    destinationFormData: state.destinationForm
  }
}

export default connect(mapStateToProps, { updateDestinationForm, addDestination })(DestinationInput)
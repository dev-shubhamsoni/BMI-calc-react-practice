import './form.styles.css'

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <label htmlFor='text'>Weight KG</label>
                <input type='text' id='text' placeholder='text'></input>
            </form>
        </div>
    )
}

export default Form;
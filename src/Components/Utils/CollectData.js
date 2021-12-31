import React from 'react'

const CollectData = ({title,inputFields}) => {

    return (
        <>
            <div className='container p-5'>
                <h2>{title}</h2>
                <form>
                    {
                        inputFields.map(input =>(
                            <div class="mb-3">
                                <label for={input.id} class="form-label">{input.value}</label>
                                <input type={input.type} class="form-control" id={input.id}/>
                            </div>
                        ))
                    }
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CollectData;
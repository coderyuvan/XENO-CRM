class apiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
      super(message)
      this.statusCode=statusCode
      this.data=null 
      this.errors=errors
      this.message=message
      this.success=false;


    }
}

export {apiError}
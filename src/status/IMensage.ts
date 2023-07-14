class Mensage {
    mensage: string
    body: any
    validation: boolean

    constructor (mensage: string, body: any, validation: boolean){
        this.mensage = mensage
        this.body = body
        this.validation = validation
}
}
import { elements as el } from "./elements"

class Login {
    
    visitPage(urlPage){
        cy.visit(urlPage)
    }

    fillInUserField(userName){
        cy.get(el.userName).type(userName)
    }

    fillInPasswordField(password){
        cy.get(el.password).type(password)
    }

    clickOnLogin(){
        cy.get(el.btnLogin).click()
    }
}

export default new Login();
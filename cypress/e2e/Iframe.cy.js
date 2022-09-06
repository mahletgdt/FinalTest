///<reference types="cypress-iframe" /> 
import 'cypress-iframe'

describe('Handling Iframe and Fixture', () => {
  let dt=''
  before(()=>{
    
    //calling example json file from fixture
      cy.fixture("example").then(function(data){
        //this.data (is to initialize the global variables in the cypress)
        //if we are not do that parameter is local variable. so we cann't access out of the loop
          dt=data
      })
  })

  it("frame", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/',{timeout:10000})

    cy.frameLoaded("#courses-iframe")
    cy.wait(2000)
    cy.iframe().find("a[href='mentorship']").eq(0).click()
    
  }) 

  it.only("Fixture",()=>{
     cy.visit("https://rahulshettyacademy.com/angularpractice/")
     cy.get("input[name='name']")
       .eq(0)
       .type(dt.name)
       .should('have.value',dt.name) // it's for to make sure we put the right data

     cy.get("input[name='email']").type(dt.email)
       .should('have.value',dt.email)

     cy.get('select').select(dt.gender)
       .should('have.value',dt.gender)
  })
}) 



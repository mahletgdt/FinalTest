import Registerpage from "../PageObject/Registerpage"

describe("hooks on command",() => { 

	let dt=''

	before(()=>{

		cy.fixture("class").then(function(data){
			dt=data
		})	

	})
	
	it("handling table on hooks ",()=>{
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
		cy.controlTable(dt.name[3], dt.position[2])

    })

	it.only("POM",()=>{
		cy.visit("https://rahulshettyacademy.com/angularpractice/")
		const rp = new Registerpage();
		
		rp.getName().eq(0).type(dt.name[4])   
		rp.getEmail().type(dt.email)
		rp.getGender().select(dt.gender).should('have.value',dt.gender)
	 })

})
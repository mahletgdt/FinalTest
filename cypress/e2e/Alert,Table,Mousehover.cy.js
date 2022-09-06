describe("Test Alert, Table and Mouse Over", () => {

  it.only("handle Alert", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  
    cy.get("#name").type("Mena")
    cy.get("#alertbtn").click()

    cy.get("#name").type("Mena")
    cy.get("#confirmbtn").click()

    //we use this syntax to control the pop up button 
    cy.on("window:alert",(text)=>{
        expect(text).to.be.equals("Hello Mena, share this practice page and share your knowledge")
    })

    cy.on('window:confirm',(str)=>{
       expect(str).to.be.equal("Hello Mena, Are you sure you want to confirm?")
    })

  })

  it("handle table",()=>{ 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
        let txt = $el.text()
        if(txt.includes('Python')){
            cy.get("tr td:nth-child(2)").eq($index).next().then((price)=>{
               let m = price.text()
               expect(m).to.be.equal('25')
            })
        }
     })

   }) 

    //how to do preview command on the table 
//   cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
//     let txt = $el.text()
//     if(txt.includes('Receptionist')){
//         cy.get("tr td:nth-child(2)").eq($index).prev().then((price)=>{
//            let m = price.text()
//            expect(m).to.be.equal('Ivory')
//         })
//     }
//  })

}) 

  it("handle Mouse Hover",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('div .mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')


    //how to click hiddin button or link with out hover, using {force:true}
    //cy.get('div .mouse-hover-contain').invoke('show')
    cy.contains('Top').click({force:true})
    cy.url().should('include', 'top')
  })


